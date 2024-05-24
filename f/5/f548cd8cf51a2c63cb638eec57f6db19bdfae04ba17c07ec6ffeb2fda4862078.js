/*! For license information please see 400-43436aa53afdecf95848.js.LICENSE.txt */
  font-family: ${Bs};
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 16px;
  letter-spacing: 1px;
  color: ${"#ffffff"};
`,Gs=uo.css`
  font-family: ${Bs};
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 12px;
  letter-spacing: 0.4px;
  text-align: center;
  color: ${"#ffffff"};
`,Hs=uo.css`
  font-family: ${Bs};
  fony: ${Bs};
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.4px;
  text-align: center;
  color: ${"#ffffff"};
  line-height: 18px;

  ${Ps} {
    line-height: 16px;
  }
`,$s=uo.css`
  font-family: ${Bs};
  font-size: 12px;
  font-weight: medium;
  font-stretch: normal;
  font-style: normal;
  line-height: 16px;
  letter-spacing: 0px;
  color: ${"#ffffff"}: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.25px;
  color: ${"#ffffff"};
`,Ws=uo.css`
  font-family: ${Bs};
  font-size: 14px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.25px;
  color: ${"#ffffff"};
`,Ks=uo.css`
  font-family: ${Bs};
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${"#ffffff"};
`;var Ys=n(130),Xs=n(67),Zs=n(68),Qs=n(69),Js=n(136),eu=n(46),tu=n(70),nu=n(137),ru=n(71),iu=n(72),au=n(73),ou=n(74),su=n(47),uu=n(75),lu=n(76);const cu=()=>{const{fallbacks:e,translations:t}=Fo();return n=>n in t?t[n]:(Go.has(n)||(console.warn(`Missing translations for key "${n}"`),Go.add(n)),n in e?e[n]:(Ho.has(n)||(console.error(`Missing fallback translations for key "${n}"`),Ho.add(n)),n))},du={"da-DK":Xs,"de-AT":Zs,"de-DE":Qs,"en-CA":eu,"en-GB":Js,"en-US":eu,"es-ES":tu,"es-MX":nu,"fi-FI":ru,"fr-CA":iu,"it-IT":au,"nl-NL":ou,"no-NO":su,"pt-BR":uu,"sv-SE":lu,da:Xs,at:Zs,de:Qs,en:eu,es:tu,fi:ru,fr:iu,it:au,nl:ou,no:su,nb:su,pt:uu,sv:lu};function fu(){return(fu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var pu=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.167.5a.833.833 0 00-.834.833V5.5c0-.161-.1-.323-.303-.446L.732.611C.327.365 0 .542 0 1.007v8.986c0 .465.328.642.732.396L8.03 5.946c.202-.123.303-.285.303-.446v4.167a.833.833 0 001.667 0V1.333A.833.833 0 009.167.5z",fill:"#fff"});function hu(){return(hu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var mu=r.createElement("circle",{cx:5,cy:5.5,r:4,fill:"#fff"});const gu=p.b.safari?({disabled:e=!1,onKeyUp:t,onBlur:n,tabIndex:i}={})=>{const[a,o]=Object(r.useState)(!1);return{hasKeyboardFocus:a,tabIndex:e?-1:null!=i?i:0,onKeyUp:Object(r.useCallback)((e=>(o(!0),null==t?void 0:t(e))),[t]),onBlur:Object(r.useCallback)((e=>(o(!1),null==n?void 0:n(e))),[n])}}:({disabled:e=!1,onKeyUp:t,onBlur:n,tabIndex:r}={})=>({hasKeyboardFocus:!1,tabIndex:e?-1:null!=r?r:0,onKeyUp:t,onBlur:n}),vu="\n  outline: rgba(107, 185, 240, 0.6) solid 3px;\n  opacity: 1 !important;\n",yu=lo.a.button.attrs((({onKeyUp:e,onBlur:t,tabIndex:n,disabled:r})=>Object.assign({role:"Button",disabled:r},gu({onKeyUp:e,onBlur:t,tabIndex:n,disabled:r})))).withConfig({displayName:"Button"})`
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  user-select: none;
  pointer-events: all;
  outline: 0;
  padding: 0;

  opacity: 0.85;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.65;
  }
  &:focus-visible {
 }

  ${({hasKeyboardFocus:e})=>e?vu:""}

  &[disabled] {
    pointer-events: none;
    opacity: 0.4;
  }
`,bu=lo()(yu).withConfig({displayName:"LiveButtonContainer"})`
  border: ${({atLiveEdge:e})=>e?"none":"solid"};
  border-width: 2px;
  border-color: ${"#c4c4c4"};
  border-radius: 3px;
  min-width: 67px;
  height: 35px;
  margin: auto 10px;
  background-color: ${({atLiveEdge:e})=>e?"#d9203c":"transparent"};
  align-items: center;
  justify-content: center;
  display: flex;

  &:disabled {
    cursor: default;
    opacity: 1;
    pointer-events: auto;
  }
  ${Gs}
`,Eu=lo.a.div.withConfig({displayName:"LiveButtonM"})`
  color: white;
  margin-left: 5px;
`,Su=e=>lo()(e)`
  width: ${"10px"};
  height: ${"10px"};
`,_u=Su((function(e){return r.createElement("svg",fu({viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),pu)})),Tu=Su((function(e){return r.createElement("svg",hu)})),Au=()=>{const{jumpToLive:e,atLiveEdgeM:t,isLiveM:n}=ps(),i=cu(),a=t.fromMaybe(!1);return n.filter((e=>e)).map((()=>r.createElement(bu,{"aria-label":i(a?"live.badge.aria.label":"live.button.aria.label"),disabled:!!a,atLiveEdge:a,onClick:t=>{a||(e(),t.stopPropagation())},tabIndex:a?-1:0},a?r.createElement(Tu,null):r.createElereateElement(Eu,null,i(a?"live.labe()},wu=()=>{const{showM:e}=mo(),{aboutToEndM:t}=jo(),{pausedM:n}=rs(),{statusM:r}=Es(),{initialLoad:i}=os(),a=xs("settingsMenu"),o=xs("volume");return!i&&(e.fromMaybe(!1)||!p.b.isHandheld&&n.fromMaybe(!1)||t.fromMaybe(!1)||r.equals(Object(l.s)("REMOTE"))||a.map((({menuOpen:e})=>e)).fromMaybe(!1)||o.map((e=>e.dragging||e.mouseOver)).fromMaybe(!1))},ku=()=>{const{toggleFullscreen:e}=wo();return{toggleFullscreen:r.useCallback((()=>function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}u((r=r.apply(e,t||[])).next())}))}(void 0,void 0,void 0,(function*(){var t,n;const r=yield e();return r&&p.b.mobile&&p.b.android&&"undefined"!=typeof screen&&(null===(n=null===(t=screen.orientation)||void 0===t?void 0:t.lock)||void 0===n||n.call(t,"landscape")),r}))),[e])}},Cu=lo.a.div.attrs((()=>{const{touchAutoHideCallbacks:{controlsHideCallbacks:e}}=go(),{toggleFullscreen:t}=ku(),{togglePlayback:n}=rs({autoTogglePauseAds:!0}),i=r.useCallback((e=>{e.stopPropagation(),e.preventDefault(),n()}),[n]);return Object.assign({onClick:i,onDoubleClick:t},e)})).withConfig({displayName:"ActionOverlay"})`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`,Iu="72px",Ou="80px",xu="44px",Du=lo.a.div.withConfig({displayName:"TopControlsContainerView"})`
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 250ms ease-out;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;

  /* Top padding to make sure buttons are clickable to top of the screen */
  > * {
    padding-top: 20px;
    ${Ps} {
      padding-top: 8px;
    }
  }

  /* Padding on right side of last child, to make sure clickable until edge */
  > :last-child {
    padding-right: 23px;
    ${Ps} {
      padding-right: 8px;
    }
  }
`,Mu=lo.a.div.withConfig({displayName:"BottomControlsContainerView"})`
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 250ms ease-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: ${"3.5%"};
  margin-left: ${"3.5%"};
  height: ${Iu};

  ${Rs} {
    height: ${Ou};
  }

  ${Ps} {
    height: ${xu};
  }
`,Pu=e=>t=>{const n=wu();return r.createElement(e,Object.assign({},t,{visible:n}))},Ru=Pu(Du),Lu=Pu(Mu),Nu=lo.a.div.withConfig({displayName:"AdsContainer"})`
  justify-content: space-around;
  position: absolute;
  height: 32px;
  right: 0px;
  display: flex;
  align-items: center;
  background-color: ${Mo("#000000",.4).fromMaybe("#000000")};

  bottom: ${Iu};

  ${Rs} {
    bottom: ${Ou};
  }

  ${Ps} {
    bottom: ${xu};
  }
`,ju=lo.a.div.withConfig({displayName:"AdTextBox"})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 23px;
  margin: 0 12px;
  background-color: ${Mo("#000000",.5).fromMaybe("#000000")};
  font-family: ${Bs};
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: ${"#ffffff"};
  user-select: none;
`,Uu=lo.a.div.withConfig({displayName:"TimeIndicator"})`
  ${$s}
  margin: 0 6px;
  user-select: none;
`,Fu=lo.a.div.withConfig({displayName:"Line"})`
  width: 0px;
  height: 10px;
  border: solid 1px ${Mo("#ffffff",.5).fromMaybe("#ffffff")};
  margin: 0 6px;
  &:last-child {
    display: none;
  }
`,Bu=lo.a.div.withConfig({displayName:"ShelfTitle"})`
  ${zs};
  text-align: center;
  margin-right: 12px;
  margin-left: 6px;
`,Vu=lo()((e=>{var{renderIfNoClickUrl:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["renderIfNoClickUrl"]);const{currentAdUrlM:i}=(()=>{const e=Ko();return{currentAdUrlM:ho(e.ads.ads$,vs,Object(l.u)())}})(),{onAdClick:a}=(()=>{const e=Ko();return{onAdClick:ho(e.ads.ads$,gs,(()=>()=>{}))}})();return i.map((e=>r.createElement("a",Object.assign({onClick:a,href:e,rel:"noreferrer noopener",target:"_blank"},n)))).alt(Object(l.s)(t).filter((e=>e)).map((()=>r.createElement("div",Object.assign({},n))))).toNullable()})).attrs((()=>Object.assign({role:"Button"},gu()))).withConfig({displayName:"AdClickHandlerS"})`
  text-decoration: none;

  &:focus-visible {
    ${vu}
  }
  ${({hasKeyboardFocus:e})=>e?vu:""}
`,Gu=()=>{const e=cu(),{remainingSlotDurationM:t}=(()=>{const e=Ko();return{remainingSlotDurationM:ho(e.ads.ads$,ys,Object(l.u)())}})(),{timeFormat:n}=zo(),i=ps().isLiveM.fromMaybe(!1);return r.createElement(Nu,null,r.createElement(ju,null,e("ad.label.text"):!1},r.createElement(Bu,null,e("ad.view.cta"))))};r.Component;class Hu extends r.PureComponent{componentDidMount(){var e;null===(e=this.root)||void 0===e||e.appendChild(this.props.elem)}render(){return r.createElement("div",{className:thiot=e||void 0})}}const zu=lo()(Hu).withConfig({displayName:"VpaidContainer"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,$u=()=>{const{vpaidIFrameM:e}=(()=>{const e=Ko();return{vpaidIFrameM:ho(e.ads.vpaidIFrameM$,(e=>e.map((e=>e))),Object(l.u)())}})();return e.map((e=>r.createElement(zu,{elem:e}))).fromMaybe(r.createElement(r.Fragment,null))},qu=lo.a.svg.withConfig({displayName:"StyledSpinner"})`
  animation: rotate 1.5s linear infinite;
  width: 64px;
  height: 64px;

  > circle {
    stroke: ${"#ffffff"};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0%,
    25% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50%,
    75% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`,Wu=()=>r.createElement(qu,{viewBox:"0 0 50 50"},r.createElement("circle",{cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"}));function Ku(){return(Ku=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Yu=r.createElement("path",{d:"M28.5 13c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H26c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1h2.5zM18 13c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1h-2.5c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1H18z",fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"});function Xu(){return(Xu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Zu=r.createElement("path",{d:"M29.4 22.8l-14 8c-.8.4-1.4.1-1.4-.7V13.9c0-.8.6-1.1 1.4-.7l14 8c.4.1.7.6.6 1.1-.1.2-.3.4-.6.5z",fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"});const Qu=uo.css`
  width: 100%;
  height: 100%;
`,Ju=lo()((function(e){return r.createElement("svg",Xu({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44"},e),Zu)})).withConfig({displayName:"Play"})`
  ${Qu}
`,el=lo()((function(e){return r.createElement("svg",Ku({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44"},e),Yu)})).withConfig({displayName:"Pause"})`
  ${Qu}
`,tl=lo()(yu).withConfig({displayName:"PlayPauseButtonS"})`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 64px;
  margin-right: 64px;
  overflow: hidden;

  ${Ps} {
    margin-left: 24px;
    margin-right: 24px;
  }
`,nl=()=>{const{pausedM:e,play:t,pause:n}=rs({autoTogglePauseAds:!0}),{bufferingM:i}=ms(),a=i.fromMaybe(!1),o=cu();return r.createElement(tl,{style:{cursor:a?"default":"pointer"},onDoubleClick:e=>{e.stopPropagation()},onClick:r=>{r.stopPropagation(),a||(e.fromMaybe(!1)?t():n())},onKeyDown:r=>{a||r.key!==p.a.Enter||(r.preventDefault(),e.fromMaybe(!1)?t():n())},children:a&&r.createElement(Wu,null)||e.fromMaybe(!1)&&r.createElement(Ju,{"aria-label":o("play.button.aria.label"),role:"Button"})||r.createElement(el,{"aria-label":o("pause.button.aria.label"),role:"Button"})})};function rl(){return(rl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var il=r.createElement("g",{fill:"#fff"},r.createElement("path",{d:"M34.9 22c0 5.3-3.3 10-8.1 12-6.7 2.6-14.3-.7-16.9-7.5-.9-2.4-1.1-5-.6-7.5 1.1-4.7 4.6-8.4 9.2-9.6 5-1.2 10.3.6 13.5 4.6l.1-3c0-.8 1.3-.8 1.3 0-.1 1.5-.1 3.1-.2 4.7 0 .4-.3.6-.6.6l-4.6.1c-.8 0-.8-1.2 0-1.3l3.2-.1c-2.5-3.4-6.7-5.2-10.9-4.6-4.3.6-7.9 3.5-9.4 7.7-2.1 6.1 1.3 12.8 7.4 14.9 2 .7 4.1.8 6.2.4 5.3-1.2 9.1-5.9 9.1-11.3 0-.4.4-.6.7-.6.3 0 .6.3.6.5z",fillRule:"evenodd",clipRule:"evenodd"}),r.createElement("path",{d:"M18.1 20.1l-2.2 1.5v-1.4l2.2-1.5h1.5v8.4h-1.5v-7zM21.2 22.9c0-2.7 1.2-4.4 3.3-4.4 2 0 3.3 1.7 3.3 4.3 0 2.7-1.2 4.4-3.3 4.4-2.1..1s-1.8 1.2-1.8 3.1c0 2 .7 3.2 1.8 3.2 1.2-.1 1.8-1.2 1.8-3.2z"})),al=function(e){return r.createElement("svg",rl({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44"},e),il)};function ol(){return(ol=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var sl=r.createElement("path",{d:"M9 22.1c0-.4.4-.6.7-.6s.5.3.6.6c0 5.4 3.8 10.1 9.1 11.3 6.4 1.3 12.6-2.8 14-9.1.4-2 .3-4.2-.4-6.1-1.4-4.1-5.1-7.1-9.4-7.7-4.2-.7-8.4 1.1-10.9 4.5l3.3.1c.8 0 .8 1.3 0 1.3l-4.7-.2c-.4 0-.6-.2-.6-.6-.1-1.6-.2-3.1-. 1.2-.8 1.3 0l.1 4 8.5-5.8 13.5-4.5 4.6 1.2 8.2 4.9 9.2 9.6 1.6 7.1-2.9 14-10 15.6-2.5.6-5.2.4-7.6-.6-4.8-2-8-6.7-8-11.9zreateElement("g",{fill:" 1.5v-1.4l2.2-1.5H20v8.4h-1.5v-7zM21.6 22.9c0-2.7 1.2-4.4 3.3-4.4 2 0 3.3 1.7 3.3 4.3 0 2.7-1.2 4.4-3.3 4.4-2.1.1-3.3-1.6-3.3-4.3zm5 0c0-2-.7-3.1-1.8-3.1S23 21 23 22.9c0 2 .7 3.2 1.8 3.2 1.2-.1 1.8-1.2 1.8-3.2z"})),ll=function(e){return r.createElement("svg",ol({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44"},e),sl,ul)};const cl=lo()(yu).withConfig({displayName:"JumpButton_"})`
  width: 57px;
  height: 56px;
  opacity: 0.5;
`,dl=({duration:e,children:t,disabled:n})=>{const i=is(e);return r.createElement(cl,{onDoubleClick:e=>{e.stopPropagation()},onClick:e=>{e.stopPropagation(),n||i()},onKeyDown:e=>{(e.key===p.a.Space||e.key===p.a.Enter&&!n)&&(e.preventDefault(),i())}},t)},fl=e=>{const t=cu();return r.createElement(dl,Object.assign({duration:10},e),r.createElement(al,{"aria-label":t("forward.button.aria.label"),role:"Button"}))},pl=e=>{const t=cu();return r.createElement(dl,Object.assign({duration:-10},e),r.createElement(ll,{"aria-label":t("rewind.button.aria.label"),role:"Button"}))},hl=lo.a.div.withConfig({displayName:"CenterControlsWrapper"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,ml=lo.a.div.withConfig({displayName:"CenterControlsContainer"})`
  justify-content: center;
  display: flex;
  align-items: center;
`,gl=({})=>{const e=xs("settingsMenu"),t=xs("volume"),{mouseAutoHideCallbacks:{onMouseMoveCapture:n},touchAutoHideCallbacks:{controlsTouchCallbacks:i}}=go(),{showM:a}=mo(),{aboutToEndM:o}=jo(),{bufferingM:s}=ms(),{statusM:u}=Es(),{seekableM:c}=fs(),{adPlayingM:d}=es(),{initialLoad:f}=os(),{pausedM:h}=rs(),m=!f&&(!o.fromMaybe(!1)||u.equals(Object(l.s)("REMOTE")))&&(a.fromMaybe(!1)||t.map((e=>e.dragging||e.mouseOver)).fromMaybe(!1)||!p.b.isHandheld&&h.fromMaybe(!1)||e.map((({menuOpen:e})=>e)).fromMaybe(!1)||u.equals(Object(l.s)("REMOTE"))),g=m&&c.fromMaybe(!1)&&!d.fromMaybe(!1),v=ps().atLiveEdgeM.fromMaybe(!1),y=m||s.fromMaybe(!1);return r.createElement(hl,null,r.createElement(ml,Object.assign({onMouseMoveCapture:n},i),g&&r.createElement(pl,null),y&&r.createElement(nl,null),g&&r.createElement(fl,{disabled:v})))};function vl(){return(vl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(thcreateElement("path",{d:"M25.584 23.075h5.387v-1.488h-5.387v1.488zm-3.919 3.966h9.306v-1.487h-9.306v1.487zm-7.836 0h6.367v-1.487h-6.367v1.487zm0-3.966h10.285v-1.488H13.83v1.488zm18.857-8.925H12.114c-.944 0-1.714.779-1.714 1.735v13.883c0 .957.77 1.736 1.714 1.736h11.388v4.646l6.598-4.646h2.586c.945 0 1.714-.779 1.714-1.736V15.885c0-.955-.769-1.735-1.714-1.735z",fill:"#FFF",fillRule:"evenodd"});const bl=lo()((function(e){return r.createElement("svg",vl({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44"},e),yl)})).withConfig({displayName:"Icon"})`
  width: 100%;
  height: 100%;
`,El=lo()(yu).withConfig({displayName:"ButtonS"})`
  height: ${"46px"};
  width: ${"46px"};
  margin: 0;
  ${({isOpen:e})=>Object(l.s)(e).fromMaybe(!1)?"opacity: 1.0;":""}

  :disabled {
    cursor: default;
    pointer-events: none;
    opacity: 0.4;
  }

  ${({isOpen:e})=>Object(l.s)(e).fromMaybe(!1)?uo.css`
          ::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }

          ${Rs} {
            &::before {
              background-color: ${"#000000"};
              opacity: 0.5;
              position: fixed;
              width: 100vw;
              height: 100vh;
            }
          }
        `:uo.css`
          position: relative; // prevent cursor flicker on hover
        `}
`,Sl=e=>{const t=cu();return r.createElement(El,Object.assign({},e),r.createElement(bl,{"aria-label":t("settil=lo.a.div.withConfig({displayName:"DropUpContent"})`
  position: relative;
  padding: ${({padding:e})=>e};
  overflow-y: scroll;
  box-sizing: border-box;
  z-index: 3;
  border: none;
  border-radius: 3px;
  background-color: ${Mo("#181818",.9).fromMaybe("#181818")};

  /* hide native scrollbar in dropups */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Tl=lo.a.div.withConfig({displayName:"DropUpWrapper"})`
  width: ${({width:e})=>e};
  bottom: ${({bottom:e})=>e};
  position: absolute;
  min-width: 49px;
  padding: 0;
  color: white;

  ${Rs} {
    position: static;
  }

  ${Ps} {
    ${({mobileWidth:e})=>e?`width: ${e};`:""};
  }
`,Al=lo.a.div.withConfig({displayName:"DropUpRelativeBase"})`
  position:;
  display: flex;
  justify-content: ${({anchorpoint:e})=>{switch(e){case"leftCorner":return"flex-start";case"rightCorner":return"flex-end";default:return"center"}}};

  ${Rs} {
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
  }
`,wl=({anchorpoint:e,children:t,offset:n="0px",padding:i="0px",width:a,mobileWidth:o})=>r.createElement(Al,{anchorpoint:e},r.createElement(Tl,{mobileWidth:o,width:a,bottom:n},r.createElement(_l,{padding:i},t))),kl=r.createContext({treeState:{},addActiveMenu:(e,t)=>{},removeActiveMenu:e=>{}}),Cl=e=>{const[t,n]=r.useState({});return r.createElement(kl.Provider,{value:{treeState:t,addActiveMenu:(e,t)=>{n((n=>Object.assign(Object.assign({},n),{[t]:e})))},removeActiveMenu:e=>{n((t=>Object.assign(Object.assign({},t),{[e]:null})))}}},e.children)};function Il(){return(Il=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ol=r.createElement("path",{fill:"#FFF",d:"M12.77 21.1L10 23.8l7.385 7.2L34 15.7 31.23 13 17.386 25.6z",fillRule:"evenodd"});const xl=lo.a.button.withConfig({displayName:"MenuItem"})`
  ${qs};
  min-height: ${"46px"};
  width: 100%;

  word-break: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  padding: 0;
  margin: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  appearance: none;
  border: none;
  background: transparent;
  color: ${"#ffffff"};
  cursor: pointer;
  pointer-events: all;
  user-select: none;

  &:hover {
    background: ${"#333333"};
    transition: background 0.3s ease-in-out;
  }

  &:focus-within {
    box-shadow: none;
    outline: none;
    background: ${"#333333"};
    transition: background 0.3s ease-in-out;
  }
`,Dl=lo.a.div.withConfig({displayName:"Text"})`
  margin-right: auto;
  padding-left: ${({offset:e="32px"})=>e};
`,Ml=lo()(Dl).withConfig({displayName:"HighlightedText"})`
  opacity: ${({isSelected:e})=>e?1:.65};
`,Pl=e=>lo()(e)`
  width: ${"32px"};
  display: block;
`,Rl=Pl((function(e){return r.createElement("svg",Il({viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},e),Ol)})),Ll=lo()(Rl).withConfig({displayName:"CheckMark"})`
  margin-right: 24px;
`;function Nl(){return(Nl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var jl=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M27.004 13.555a1.351 1.351 0 010 1.912l-6.52 6.683 6.52 6.683a1.351 1.351 0 010 1.912c-.507.54-1.366.54-1.873 0l-7.335-7.47c-.528-.54-.528-1.71 0-2.25l7.335-7.47a1.284thConfig({displayName:"Chevron"})`
  transform: rotate(${({direction:e})=>Fl[e]});
`,Vl=lo.a.div.withConfig({displayName:"NonOverflowingContainer"})`
  overflow-x: hidden;
  overflow-y: auto;
  flex: 1;

  /* for Firefox TODO is  min-heit request */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.6);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    background-color: #000000;
    width: 4px;
  }

  ::-webkit-scrollbar-thumb ground-color: #f5f5f5;
  }
`,Gl=({alignSelfLast:e,onClick:t,text:n,isExpanded:i})=>r.createElement(xl,{style:{alignSelf:e?"flex-end":"auto"},onClick:t,"aria-haspopup":"menu","aria-expanded":i},r.createEleml,{direction:"right"})),Hl=({onClick:e,isSelected:t,text:n})=>r.createElement(xl,{onClick:e,"aria-pressed":!!t},r.createElement(Ml,{style:{maxWidth:"70%"},isSelected:t},n),t&&r.createElement(Ll,null)),zx solid ${"#333333"};

  ${({onClick:e})=>void 0===e?"\n          &:hover {\n            background: inherit;\n            transition: none;\n            cursor: default;\n          }\n          &:focus {\n            box-sha    outline: inherit;\n            background: inherit;\n            transition: none;\n          }\n        ":""};
`,$l=({onClick:e,text:t,includeChevron:n=!0})=>r.createElement(zl,{onClick:e},n&&r.createElement(Bl,{direction:"left"}),r.createElement(Dl,{offset:n?"0px":"24px"},t)),ql=e=>e.trim().replace(/^\w/,(e=>e.toUpperCase())),Wl=lo.a.button.withConfig({displayName:"MenuItem"})`
  ${qs};

  min-height: ${"46px"};
  width: 100%;

  word-break: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  padding: 0;
  margin: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  appearance: none;
  border: none;
  background: transparent;
  color: ${"#ffffff"};
  cursor: pointer;
  pointer-events: all;
  user-select: none;

  &:hover {
    background: ${"#333333"};
    transition: background 0.3s ease-in-out;
  }

  &:focus-within {
    box-shadow: none;ound: ${"#333333"};
    transition: background 0.3s ease-in-out;
  }
`,Kl=lo.a.div.withConfig({displayName:"Text"})`
  margin-right: autoleft: ${({offset:e="32px"})=>e};
  ${Ps} {
    display: ${({hideTextOnMobile:e})=>e?"none":"block"};
    max-width: 65%;
  }
`,Yl=(lo()(Kl).tem"})`
  position: absolute;

  width: 100%;
  height: 100%;
  padding: 0 ${({offset:e})=>e} 0 0;
`),Xl=lo()(Wl).withConfig({displayName:"SubMenuItemStyled"})`
  position: relative;
  width: 100%;
`,Zl=({children:e,offset:t,text:n,hide>r.creas:"label",role:"Button"},r.createElement(Kl,{hideTextOnMobile:i},n),r.createElement(Yl,{offset:t},e)),Ql=lo.a.div.withConfig({displayName:"Container"})`
  margin-left: auto;
  margin-top: 7px;

  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: rgb(
    ${({rgbColor:{red:e,green:t,blue:n}})=>`${e}, ${t}, ${n}`}
  );
  overflow: hidden;
`,Jl=lo.a.input.withConfig({displayName:"InputElement"})`
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`,ec=({select:e,selected:t})=>r.createElement(Ql,{rgbColor:t},r.createElement(Jl,{type:"color",value:Object(u.gb)(t),onChange:t=>Object(u.w)(t.target.value).map(e)})),tc=()=>{const{textTrackFontColorM:e}=Zo(),{setFontColor:t}=Qo(),n=cu();retur(Zl,{offset:"24px",text:n("subtitles.menu.font.color.selector..createElement(ec,{select:t,selected:e.fromMaybe({red:255,blue:255,green:255})}))},nc=()=>{const{textTrackBackgroundColorM:e}=Zo(),{setBackgroundColor:t}=Qo(),n=cu();return r.createElement(Zl,{offset:"24px",text:n("subtitles.menu.bg.color.selector.text")},r.createElement(ec,{select:t,selected:e.fromMaybe({red:0,blue:0,green:0})}))},rc=lo.a.spanig({displayName:"Text"})`
  ${zs};
  color: ${"#000000"};
`,ic=lo.a.div.withConfig({displayName:"FakeDropDown"})`
  position: absolute;
  width: 115px;
  height: ${"32px"};
  right: 24px;
  top:  / 2));

  background-color: ${"#cccccc"};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2px;
  ${Ps} {
    width: 80%;
  }
`,ac=lo.a.select.withConfig({displayName:"SelectStyled"})`
  display: block;
  position: absolute;

  width: 100%;
  height: 100%;

  border: none;
  appearance: none;
  cursor: pointer;

  // closest approximation between the wireframe and the Font Style Catalogue
  ${Vs};
  font-size: 11px;
  font-weight: normal;

  // prevent background-color of select from obscuring the menu-item content
ound-color for the expanded select, visible on Windows' browsers
  background-color: ${Mo("#333333",1).fromMaybe("#333333")};

  &:focus {
    box-shadow: none;
    outline: none;
  }
`,oc=e=>{var{text:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["text".createElement(r.Fragment,null,r.createElement(ic,null,r.createElement(rc,null,t)),r.createElement(ac,Object.assign({},n)))},sc=({select:e,selected:t,selection:n})=>r.createElement(oc,{text:t,value:t,onChange:t=>e(t.target.valu"option",{key:e,value:e},e)))),uc=["Arial","Comic Sans","Courier New","Georgia","Impact","Lucida Grande","Open Sans","Tahoma","Times New Roman","Verdana"],lc=()=>{const{textTrackFontFamilyM:e}=Zo(),{setFontFamily:t}=Qo(),n=cu(),i=e.fromMaybe("Verdana"),a=r.useCallback((e=>{t(e)}),[t]);return r.createElement(Zl,{offset:"24px",text:n("subtitles.menu.font.family.selector.text"),hideTextOnMobile:!0},r.createElement(sc,{select:a,selected:i,selection:uc}))},cc=1,dc=({percentFormat:e})=>t=>({fontSize:t,longForm:e(t)}),fc=({select:e,selected:t,selection:n})=>{const{percentFormat:i}=qo();return r.createElement(oc,{text:t.longForm,value:t.fontSize,onChange:t=>e(dc({percentFormat:i})(parseFloat(t.target.value)))},n.map((e=>{const{fontSize:t,longForm:n}=e;return r.createElement("option",{key:t,value:t},n)})))},pc=({percentFmap(dc({percentFormat:e})),hc=()=>{const{textTrackFontSizeM:e}=Zo(),{setFontSize:t}=Qo(),{percentFormat,o=dc({percentFormat:n})(a),s=r.useCallback((({fontSize:e})=>{t(e)}),[t]);return r.createElement(Zl,{offset:"24px",text:i("subtitles.menu.font.size.selector.text"),hideTextOnMobile:!0},r.createElement(fc,{select:s,selected:o,selection:pc({percentFormat:n})}))},mc=({open:e,close:t,isOpen:n})=>{const i=cu();return n?r.createElement(Vl,null,r.createElement($l,{onClick:t,text:i("subtitles.menu.texttrack.settings.open.title")}),r.createElement(tc,null),r.createElement(nc,null),r.createElement(lc,null),r.createElement(hc,null)):r.createElement(Gl,{alignSelfLast:!0,onClick:e,text:i("subtitles.menu.texttrack.settings.closed.title"),isExpanded:!!n})},gc=({nativeName:e,englishName:t,manifestLabel:n,languageCode:r})=>{var i,a;return(null!==(a=null!==(i=null!=e?e:t)&&void 0!==i?i:n)&&void 0!==a?a:r).trim().replace(/^\w/,(e=>e.toUpperCase()))},vc=({kind:e})=>"captions"===e?"subtitles.menu.item.suffix.cc.kind":"descriptions"===e?"subtitles.menu.item.suffix.descriptions.kind":void 0,yc=(e,t)=>({value:e,children:t}),bc=(e,t)=>{let n=0;const r=(e,t,i)=>{const a=i+1,o=n++;if(null==e.children)return t({item:e.value,id:o,level:a});const s=e.children.map((e=>r(e,t,a)));return t({item:e.value,children:s,id:o,level:a})};return r(e,t,-1)},Ec=lo.a.div.withConfig({displayName:"ShowHide"})`
  height: 100%;
  ${e=>e.hide?"\n          display: none;\n        ":"\n          display: flex;\n          flex-direction: column;\n        "}
`,Sc=e=>{const{treeState:t,addActiveMenu:n,removeActiveMenu:i}=r.useContext(kl),a=t[e.level],o=null!=t[e.level+1],s=a===e.id,u=!1===s&&null!=a;return r.createElement(Ec,{hide:u},r.createElement(Ec,{hide:o},r.createElement(e.item,{open:()=>n(e.id,e.level),close:()=>i(e.level),isOpen:s})),s&&e.children)},_c=e=>"noop"===e.item?r.createElement(r.Fragment,null,e.children):r.createElement(Sc,{item:e.item,id:e.id,level:e.level,children:e.children}),Tc=yc((({open:e,close:t,isOpen:n})=>{const{textTracksM:i,textTrackVisibilityM:a}.equals(Object(l.s)("REMOTE"));return r.createElement(r.Fragment,null,!n&&r.createElement(r.Fragment,null,r.createElement($l,{includeChevron:!1,text:s("subtitles.menu.title")}),r.createElement(Vl,null,r.createElement(Hl,{isSelected:!a.fromMaybe(!1),text:s("subtitles.menu.item.off"),onClick:()=>o(!1)}),i.fromMaybe([]).map((e=>r.createElement(Hl,{key:e.languageCode+e.kind,onClick:e.select,isSelected:a.map((t=>t&&e.selected)).fromMaybe(!1),text:gc(e)+Object(l.s)(e).map(vc).map(s).map((e=>" "+e)).fromMaybe("")}))))),!c&&r.createElement(mc,{open:e,isOpen:n,close:t}))})),Ac=yc((()=>{const{audioTracksM:e,setAudioTrack:t}=ls(),n=cu();return r.createElement(r.Fragment,null,r.createElement($l,{includeChevron:!1,text:n("audio.tracks.menu.title")}),r.createElement(Vl,null,e.fromMaybe([]).map((e=>r.createElement(Hl,{key:e.languageCode,onClick:()=>t(e),isSelected:e.selected,text:Object(l.s)(e.nativeName).alt(Object(l.s)(e.manifestLabel)).alt(Object(l.s)(e.englishName)).alt(Object(l.s)(e.languageCode)).map(ql).concat(Object(l.s)(e.kind).filter((e=>"descriptive"===e)).map((()=>" "+n("audio.tracks.item.suffix.descriptions.kind")))).fromMaybe(""+n("audio.tracks.item.label.missing"))})))))})),wc=bc(Tc,_c),kc=bc(Ac,_c),Cc=()=>wc,Ic=()=>kc,Oc=lo.a.div.withConfig({displayName:"MenuStyles"})`
  border: none;
  padding: 0;
  flex: 1;
  background: transparent;
`,xc=()=>r.createElement(Oc,{className:"mainMenu"},r.createElement(Cl,null,r.createElement(Cc,null))),Dc=()=>r.createElement(Oc,{className:"mainMenu"},r.createElement(Cl,null,r.createElement(Ic,null))),Mc=lo.a.div.withConfig({displayName:"SettingsMenuWrapper"})`
  ${({isOpen:e})=>e&&"\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    "}
  position:relative;
`,Pc=lo.a.div.withConfig({displayName:"FlexWrapper"})`
  display: flex;
  width: ${"520px"};
  justify-content: space-between;
  max-height: 700px;

  ${Ns} {
    max-height: 500px;
  }
  ${Ls} {
    max-height: 300px;
  }
  ${Rs} {
    max-height: 200px;
  }
  ${Ps} {
    width: 300px;
    max-height: 150px;
  }
`,Rc=()=>{const{selectRootCallbacks:e}=(e=>{const{scheduleClearSelected:t,cancelClearSelected:n}=Is(),i=null==e?void 0:e.scheduleClearDelay;return{selectRootCallbacks:{onMouseEnter:n,onMouseLeave:r.useCallback((()=>{t(i)}),[t,i]),onClick=>()=>{t({typeId:e,payload:n})}),[t,e]),scheduleClearSelected:n,cancelClearSelected:i}})("settingsMenu"),a=xs("settingsMenu"),o=n.fromMaybe([]).length>1,s=0!==t.fromMaybe([]).length,u=a.map((({menuOpen:e})=>e)).fromMaybe(!1);return r.createElement(Mc,Object.assign({},e,{isOpen:u}),r.createElement("div",null,r.createElement(Sl,{disabled:!o&&!s,isOpen:u,onClick:i({menuOpen:!u}),"aria-haspopup":"menu","aria-expanded":!!u}),u&&r.createElement(wl,{offset:"50px",width:"520px",mobileWidth:"300px",padding:"4px 0px",anchorpoint:"rightCorner"},r.createElement(Pc,null,o&&r.createElement(Dc,null),s&&r.createElement(xc,null)))))},Lc=()=>{const e=xs("settingsMenu"),t=xs("volume"),{showM:n}=mo(),{aboutToEndM:r}=jo(),{bufferingM:i}=ms(),{statusM:a}=Es(),{pausedM:o}=rs();return i.fromMaybe(!1)||o.fromMaybe(!1)||e.map((({menuOpen:e})=>e)).fromMaybe(!1)||t.map((e=>e.dragging||e.mouseOver)).fromMaybe(!1)||r.fromMaybe(!1)||a.equals(Object(l.s)("REMOTE"))||n.fromMaybe(!1)},Nc=lo.a.div.attrs((()=>({showControlsOverlay:Lc()}))).withConfig({displayName:"ControlsWrapper"})`
  /* Fade in and fade out based on prop */
  opacity: ${({showControlsOverlay:e})=>e?1:0};
  transition: opacity 250ms ease-out;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0.5) 100%
  );

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;function jc(){return(jc=Object.assign||function(e){f+){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Uc=r.createElement("path",{d:"M20 25l-3.2 3.3h2.6c.4 0 .8.3.8.8s-.3.8-.8.8H15c-.4 0-.7-.3-.8-.8v-4.5c0-.4.3-.8.8-.8s.8.3.8.8v2.6l3.3-3.2.9 1zm4-6l3.2-3.3h-2.7c-.4 0-.8-.3-.8-.8s.4-.7.9-.7h4.5c.4 0 .7.3.8.8v4.5c0 .4-.3.8-.8.8s-.8-.3-.8-.8v-2.7L25 20.1 24 19z",fill:"#fff"});function Fc(){return(Fc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Bc=r.createElement("path",{d:"M18.2 26.9l-3.3 3.3-1-1.2 3.3-3.3h-2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.8.8-.8H19c.4 0 .7.3.8.8v4.5c0 .4-.3.8-.8.8s-.8-.3-.8-.8v-2.6zm7.6-9.8l3.2-3.3 1.1 1.1-3.3 3.2h2.7c.4 0 .8.3.8.8 0 .4-.3.8-.8.8H25c-.4 0-.8-.3-.8-.7v-4.4c0-.4.3-.8.8-.8s.8.3.8.8v2.5z",fill:"#fff"});const Vc=uo.css`
  width: 43px;
  height: 45px;
`,Gc=lo()((function(e){return r.createElement("svg",Fc({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44"},e),Bc)})).withConfig({displayName:"IconMinimizeS"})`
  ${Vc};
`,Hc=lo()((function(e){return r.createElement("svg",jc({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44"},e),Uc)})).withConfig({displayName:"IconExpandS"})`
  $:"Fulown:e=>{e.key!==p.a.Space&&e.key!==p.a.Enter||(e.preventDefault(),t())}},e.fromMaybe(!1)?r.ement(Gc,null):r.createElement(Hc,null))};function $c(){return($c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var qc=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M0 0h44v44H0z"}),r.createElement("path",{d:"M21.1 12.65v17.9c0 .3-.2.6-.5.6-.1 0-.3-.1-.4-.2l-4.6-4.6c-.1-.2-.3-.3-.4-.3h-4.6c-.3 0-.6-.2-.6-.5v-8c0-.3.3-.5.6-.5h4.6c.1 0 .3-.1.4-.2l4.6-4.7c.2-.2.6-.2.8 0 .1.2.2.3.1.5zm10.125 8.975l2.3-2.2c.3-.3.3-.9 0-1.2-.3-.3-.9-.3-1.3 0l-2.3 2.2-2.4-2.2c-.3-.3-.9-.3-1.3 0-.3.3-.3.9 0 1.2l2.3 2.2-2.1 2.2c-.3.3-.3.8 0 1.2.3.3.8.3 1.3 0l2.3-2.2 2.3 2.2c.2.2.4.3.6.2.2 0 .4-.1.6-.2.3-.3.3-.8 0-1.2l-2.3-2.2z",fill:"#FFF",fillRule:"nonzero"}));function Wc(){return(Wc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){varect.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Kc=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M0 0h44v44H0z"}),r.createElement("path",{d:"M21.1 12.65v17.9c0 .3-.2.6-.5.6-.1 0-.3-.1-.4-.2l--.3h-4.6c-.3 0-.6-.2-.6-.5v-8c0-.3.3-.5.6-.5h4.6c.1 0 .3-.1.4-.2l4.6-4.7c.2-.2.6-.2.8 0 .1.2.2.3.1.5zm1.8 4.964c-.2.3-.2.7 0 1 1.7 1.6 1.7 4.3.1 5.9l-.1.1c-.3.3-.3.8 03.8.3 1.2 0 2.3-2.4 2.3-6.1 0-8.4-.4-.3-.9-.2-1.2.2z",fill:"#FFF",fillRule:"nonzero"}));function Yc(){return(Yc=Object.assign||functivar t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Objturn e}).apply(this,arguments)}var Xc=r.createElement("g",{fill:"none",fil0h44v44H{d:"M21.1 12.65v17.9c0 .3-.2.6-.5.6-.1 0-.3-.1-.4-.2l-4.6-4.6c-.1-.2-.3-.3-.4-.3h-4.6c-.3 0-.6-.2-.6-.5v-8c0-.3.3-.5.6-.5h4.6c.1 0 .3-.1.4-.2l4.6-4.7c.2-.2.6-.2.8 0 .1.2.2.3.1.5zm3 4.764c-.4-.3-.9-.2-1.2.2-.2.3-.2.7 0 1 1.7 1.6 1.7 4.3.1 5.9l-.1.1c-.3.3-.3.8 0 1.2.3.3.8.3 1.2 0 2.3-2.4 2.3-6.1 0-8.4zm2.6-2.6c-.3-.3-.9-.3-1.2 0-.3.3-.3.9 0 1.2 3.1 3.1 3.1 8 0 11.1-.2.4-.1.9.2 1.1.3.2.7.2.9 0 3.8-3.7 3.8-9.7.1-13.4z",fill:"#FFF",fillRule:"nonzero"}));function Zc(){return(Zc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Qc=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M0 0h44v44H0z"}),r.createElement("path",{d:"M21.1 12.65v17.9c0 .3-.2.6-.5.6-.1 0-.3-.1-.4-.2l-4.6-4.6c-.1-.2-.3-.3-.4-.3h-4.6c-.3 0-.6-.2-.6-.5v-8c0-.3.3-.5.6-.5h4.6c.1 0 .3-.1.4-.2l4.6-4.7c.2-.2.6-.2.8 0 .1.2.2.3.1.5zm8.1-.436c-.3-.3-.9-.3-1.2.1-.3.3-.3.8 0 1.1 4.5 4.5 4.5 11.7 0 16.2-.3.3-.3.8 0 1.2.2.2.4.2.6.2.2 0 .4-.1.6-.2 5.1-5.1 5.1-13.4 0-18.6zm-5.1 5.2c-.4-.3-.9-.2-1.2.2-.2.3-.2.7 0 1 1.7 1.6 1.7 4.3.1 5.9l-.1.1c-.3.3-.3.8 0 1.2.3.3.8.3 1.2 0 2.3-2.4 2.3-6.1 0-8.4zm2.6-2.6c-.3-.3-.9-.3- 0 11.1-.2.4-.1.9.2 1.1.3.2.7.2.9 0 3.8-3.7 3.8-9.7.1-13.4z",fill:"#FFF",fillRule:"c=lo.a.div.withConfig({displayName:"VolumeContainer"})`
  cursor: pointe: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  /* css to maintain hovering state in the gap between slider and button */
  &:hover::before {
    position: absolute;
    content: "";
    display: block;
    width: ${"46px"};
    height: 140px;
    top: -140px;
  }
`,ed=lo.a.div.withConfig({displayName:"VolumeSliderContainer"})`
  display: ${({show:e})=>e?"flex":"none"};
  align-items: center;
  position: absolute;
  height: 96px;
  width: 28px;
  bottom: calc(${"46px"} + 7px);
  background-color: rgb(24, 24, 24, 0.8);
  border-radius: 2px;
  z-index: 2;
  &:focus-visible {
    ${vu}
  }
  ${({hasKeyboardFocus:e})=>e?vu:""}
`,td=lo.a.div.withConfig({displayName:"SliderWrapper"})`
  position: relative;
  display: flex;
  justify-content: center;
  height: 76px;
  width: 28px;

  &::before {
    position: absolute;
    content: "";
    background-color: rgba(255, 255, 255, 0.3);
    width: 4px;
    height: 100%;
    border-radius: 2px;
  }
`,nd=lo.a.div.withConfig({displayName:"SliderBar"})`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 4px;
  background-color: white;
  border-radius: 2px;
  min-height: 3px;
  max-height: calc(100% - 3px);

  &::after {
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    background-color: ${({isDragging:e})=>e?"rgba(220, 220, 220, 1)":"rgba(255, 255, 255, 1)"};
    border-radius: 50%;
    top: -6px;
  }
`,rd=lo()(yu).withConfig({displayName:"VolumeButtonS"})`
  height: ${"46px"};
`,id=e=>lo()(e)`
  width: ${"46px"};
  height: ${"46px"};
`,ad=id((function(e){return r.createElement("svg",$c({viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},e),qc)})),od=id((function(e){return r.createElement("svg",Wc({viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},e),Kc)})),sd=id((function(e){return r.createElement("svg",Yc({viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},e),Xc)})),ud=id((){return r.createElement("svg",Zc({viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},e),Qc)})),ld=e=>{e.stopPropagation()},cd=({volumeM:e,sliderRef:t,showSlider:n,isDragging:i,setVolume:a})=>{const o=t=>{e.filter((e=>e>=0)).map((e=>{a(Math.max(0,Math.min(1,e+t)))}))},s=gu();return r.createElement(ed,Object.assign({show:n,onClick:ld,role:"slider","aria-label":"Volume Slider","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":100*e.fromMaybe(0),onKeyDown:e=>{switch(e.key){case"ArrowUp":e.preventDefault(),o(.1);break;case"ArrowDown":e.preventDefault(),o(-.1)}}},s),r.createElement(td,{ref:t},r.createElement(nd,{style:{height:100*e.fromMaybe(0)+"%"},isDragging:i})))},dd=()=>{const{dragPosM:e,sliderRef:t,toggleMute:n,volumeM:i,setVolume:a}=(e=>{const{setVolume:t,volumeM:n}=(()=>{const e=Ko(),{setVolume:t}=e.controls;return{setVolume:t,volumeM:ho(e.playback.player$,(e=>e.map((({streams:e})=>e.behaviors.volume$)).switch().map(l.s)),Object(l.u)())}})(),{mute:i,toggleMute:a,mutedM:o}=(()=>{const e=Ko(),{mute:t,toggleMute:n,unmute:r}=e.controls;return{mute:t,toggleMute:n,unmute:r,mutedM:ho(e.playback.player$,(e=>e.map((({streams:e})=>e.behaviors.muted$)).switch().map(l.s)),Object(l.u)())}})(),s=r.useRef(void 0),u=xo({direction:e,continuousAction:!0,action:r.useCallback((e=>{0===e?("number"==typeof s.current&&t(s.current),i()):t(e)}),[t,i,s])}),c=n.fromMaybe(0),d=u.dragPosM.map((()=>!0)).fromMaybe(!1);r.useEffect((()=>{d||(s.current=c)}),[s,c,d]);const f=o.filter((e=>e)).map((()=>0)).alt(n);return Object.assign({toggleMute:a,setVolume:t,volumeM:f},u)})("vertical"),o=cu(),[s,u]=r.useState(!1),c=e.map((()=>!0)).fromMaybe(!1),d=Es("AIRPLAY").statusM.equals(Object(l.s)("REMOTE"));return r.createElement(Jc,{onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),onFocus:e=>{e.currentTarget.contains(e.relatedTarget)||u(!0)},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||u(!1)}},r.createElement(rd,{"aria-label":o("volume.button.aria.label"),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),n())},onClick:e=>{e.stopPropagation(),n()}},e.alt(i).filter((e=>e>0)).map((e=>e<.5?r.createElement(od,null):e<1?r.createElement(sd,null):r.createElement(ud,null))).fromMaybe(r.createElement(ad,null))),!p.b.isHandheld&&r.createElement(cd,{volumeM:e.alt(i),sliderRef:t,isDragging:c,showSlider:(s||c)&&!d,setVolume:a}))},fd=lo()(Lu).withConfig({displayName:"StyledBottomControlsContainer"})`
  z-index: 1;
`,pd=()=>{const{currentAdM:e}=(()=>{const e=Ko();return{currentAdM:ho(e.ads.ads$,bs,Object(l.u)())}})(),t=e.get("interactive").fromMaybe(!1),n=ps().isLiveM.fromMaybe(!0);return r.createElement(r.Fragment,null,r.createElement($u,null),!t&&r.createElement(Nc,null,r.createElement(Cu,null,r.createElement(gl,null)),r.createElement(Ru,null,r.createElement(zc,null)),r.createEleme(dd,null),!n&&r.createElement(Rc,null))),r.createElement(Gu,null))},hd=lo.a.div.withConfig({displayName:"TimelineBarContainer"})`
  user-select: none;

  margin-left: calc(${"16px"} / 2);
  margin-right: calc(${"16px"} / 2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-tap-highlight-color: transpaex: 1;
  cursor: ${({seekEnabled:e}ault"};
  pointer-events: ${({seekEnabled:e})=>e?"auto":"none"};
  touch-action: none;
  outline: 0;

  --adSlotWidth: ${"3px"};
  --barHeight: ${({barHeight:e})=>e};
  --barHeightTransition: height 0.1s ease-out;
  --barBorderRadius: ${({barHeight:e})=>`calc(${e} / 2)`};

  /* Cover entire screen to prevent auto hide while dragging  */
  &:active::before {
    cursor: grabbing;
    position: fixed;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  &:active {
    cursor: grabbing;
  }
  &:focus {
    --barHeight: ${"6px"};
  }
  &:focus-visible {
    --barHeight: ${"6px"};
    ${vu}
  }
  ${({hasKeyboardFocus:e})=>e?vu:""}
`,md=lo.a.div.withConfig({displayName:"TimelineKnob"})`
  user-select: none;

  margin-left: calc(${"16px"} / -2);
  height: ${"16px"};
  width: ${"16px"};
  background-color: ${({isLiveAndAtLiveEdge:e})=>e?"#D9203C":"#ffffff"};
  border-radius: 50%;
  pe})=>e?"flow":"none"};
`,gd=lo.a.div.withConfig({displayName:"TimeTooltip"})`
  ${Vs};
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  position: absolute;
  padding: 0 2px;
  user-select: none;
  bottom: 20px;
  height: 18px;
  transform: translateX(-50%);
  background-color: ${Mo("#181818",.8).fromMaybe("#181818")};
`,vd=lo.a.div.withConfig({displayName:"Pro user-select: none;

  height: var(--barHeight);
  transition: var(--barHeightTransition);
  border-radius: var(--barBorderRadius);
  position: absolute;
  width: 100%;
`,yd=lo.a.div.withConfig({d`
  user-select: none;

  width: 100%;
  height: var(--barHeight);
  transition: var(--barHeightTransition);
  border-radius: var(--barBorderRadius);
`,bd=e=>(t="0")=>(n="100%")=>`\n  linear-gradient(\n    90deg,\n    transparent ${t},\n    ${e} ${t} ${n},\n    transparent ${n}\n  )\n  `,Ed=()=>{const e=ps().isLiveM.fromMaybe(!0),t=ps().atLiveEdgeM.fromMaybe(!0),n=Ts().startOverVideoStreamModeM$.fromMaybe(!0)&&t?"#D9203C":"#ffffff",{sliderRef:i,hoverPosM:a,dragPosM:o,timeM:s,durationM:u,adPlayingM:c,slotTimesArrM:f}=hs(),{timeFormat:h}=zo(),m=u.fromMaybe(0),g=f.fromMaybe([]),v=r.useMemo((()=>((e,t)=>{const n=e.filter((()=>0!==t)).filter((e=>Object(d.l)(e.time,t)<.95&&!e.seen)).reduce(((e,n)=>{const r=100*Object(d.l)(n.time,t)+"%",i=`calc(${r} + 3px)`;return{background:e.background+`\n              ${bd("rgba(255, 255, 255, 0.3)")(e.adEndPos)(r)},\n              ${bd("rgba(255,255,255,0)")(r)(i)},\n            `,adEndPos:i}}),{background:"",adEndPos:"0%"});return n.background+""+bd("rgba(255, 255, 255, 0.3)")(""+n.adEndPos)()})(g,m)),[m,g]),{initialLoad:y}=os(),{seekableM:b}=fs(),E=cu(),S=!c.fromMaybe(!1)&&b.fromMaybe(!1)&&!y,_=b.filter((e=>e)).chain((()=>o.alt(Object(l.a)(d.l,s,u)).alt(Object(l.s)(0)))).map((e=>Object(p.c)(0,1,e))).fromMaybe(1),T=b.fromMaybe(!1)?n:"#D9203C",{togglePlayback:A}=rs({autoTogglePauseAds:!0}),w=is(10),k=is(-10),C=gu();return r.createElement(hd,Object.assign({ref:i,seekEnabled:S,"aria-label":E("timeline.bar.aria.label"),role:"Generic",barHeight:r.useMemo((()=>(({hoverPosM:e,seekEnabled:t,dragPosM:n})=>Object(l.m)(e.alt(n))||!t?"4px":"6px")({seekEnabled:S,hoverPosM:a,dragPosM:o})),[S,a,o]),onKeyDown:e=>{switch(e.key){case p.a.ArrowLeft:e.preventDefault(),k();break;case p.a.ArrowRight:e.preventDefault(),w();break;case p.a.Enter:e.preventDefault(),A()}}},C),r.createElement(yd,{"data-ad-slots":JSON.stringify(g),style:{backgroundImage:v}}),r.createElement(vd,{style:{backgroundImage:`\n           ${bd(T)()(100*_+"%")},\n           ${bd("rgba(255, 255, 255, 0.6)")()(100*a.fromMaybe(0)+"%")}\n          `}}),r.createElement(md,{seekEnabled:S,isLiveAndAtLiveEdge:e&&t,style:{left:100*_+"%"}}),S&&Object(l.a)(((e,t)=>r.createElement(gd,{style:{left:100*e+"%"}},h(Object(d.k)(e,t)))),o.alt(a),u).fromMaybe(r.createElement(r.Fragment,null)))},Sd=uo.css`
  bottom: calc(
    (${Iu} / 2) + (${"16px"} / 2) + 10px
  );

  ${Rs} {
    bottom: calc(
      (${Ou} / 2) + (${"16px"} / 2) + 10px
    );
  }

  ${Ps} {
    bottom: calc(
      (${xu} / 2) + (${"16px"} / 2) + 10px
    );
  }
`,_d=lo.a.div.withConfig({displayName:"CueBox"})`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  visibility: ${({isVisible:e})=>e?"visible":"hidden"};
  ${({isControlsVisible:e,isPlacedOnTop:t})=>t?"top: 10px":e?Sd:"bottom: 10px"}
`,Td=lo.a.div.withConfig({displayName:"Container"})`
  display: inline-flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: center;
  margin: 0 auto;
`,Ad=lo.a.div.withConfig({displayName:"Text"})`
  color: ${({fontColor:e})=>Object(u.eb)(e)};
  font-family: ${({fontFamily:e})=>Object(u.db)(e)};
  background-color: ${({backgroundColor:e})=>Object(u.eb)(e,.75)};
  ${Fs} {
    font-size: ${({fontSize:e})=>28*e+"px"};
  }
  ${Ns} {
    font-size: ${({fontSize:e})=>28*e+"px"};
  }
  ${Ls} {
    font-size: ${({fontSize:e})=>28*e+"px"};
  }
  ${Rs} {
    font-size: ${({fontSize:e})=>24*e+"px"};
  }
  ${Ps} {
    font-size: ${({fontSize:e})=>12*e+"px"};
  }
`,wd=()=>{const{vttCuesM:e}=(()=>{const e=Ko(),{adPlayingM:t}=es(),n=ho(e.playback.player$,ts,Object(l.u)()),r=ho(e.ads.ads$,ts,Object(l.u)());return{vttCuesM:t.fromMaybe(!1)?r:n}})(),{textTrackBackgroundColorM:t,textTrackFontColorM:n,textTrackFontFamilyM:i,textTrackFontSizeM:a,textTrackVisibilityM:o}=Zo(),s=o.fromMaybe(!1),u=e.fromMaybe([]).map((e=>e.text)).reduce(((e,t)=>[...e,...t.split("\n")]),[]),c=wu(),d=e.chain(l.i).filter((e=>"auto"!==e.line)).map((e=>e.snapToLines?1===e.line:e.line<50)).fromMaybe(!1);return r.createElement(_d,{isControlsVisible:c,isVisible:s&&u.length>0,isPlacedOnTop:d},r.createElement(Td,null,u.map(((e,o)=>r.createElement(Ad,{key:o,backgroundColor:t.fromMaybe({red:0,green:0,blue:0}),fontColor:n.fromMaybe({red:255,green:255,blue:255}),fontFamily:i.fromMaybe("Verdana"),fontSize:a.fromMaybe(1),dangerouslySetInnerHTML:{__html:e}})))))},kd=lo.a.div.withConfig({displayName:"RootContainer"})`
  width: 100%;
  min-width: ${"300px"};
  height: 100%;
  position: relative;

  &,
  & * {
    box-sizing: border-box;
  }
`,Cd=r.memo((({children:e})=>{const{onMouseEnter:t,onMouseLeave:n}=Ko().events,{sliderContainerElementRef:i}=(()=>{const e=r.useRef(null),{showM:t}=mo();return r.useEffect((()=>{const{current:n}=e;if(null===n)return;const r=e=>{t.fromMaybe(!1)||(e.stopImmediatePropagation(),e.preventDefault())};return n.addEventListener("pointerdown",r,!0),()=>n.removeEventListener("pointerdown",r,!0)}),[t]),{sliderContainerElementRef:r.useCallback((t=>{e.current=t}),[])}})(),{fullscreenElementRef:a}={fullscreenElementRef:_o().setFullscreenElement},{mouseAutoHideCallbacks:{onMouseMoveCapture:o,onMouseUpCapture:s,onMouseDownCapture:u,onMouseLeave:l},touchAutoHideCallbacks:{controlsShowCallbacks:{onTouchEndCapture:c,onTouchStartCapture:d}}}=go({timeUntilAutoHide:4}),f=r.useCallback((e=>{a(e),i(e)}),[a,i]),h=r.useCallback((e=>{n(e),l()}),[l,n]),{togglePlayback:m}=rs({autoTogglePauseAds:!0}),{seekableM:g}=fs(),v=g.fromMaybe(!0)?m:()=>{},y=((e,t)=>{const{tapAutoHide:n}=fo();return r.useMemo((()=>{const t=(e=>Object.keys(e).reduce(((t,n)=>(t[_s(n)]=e[n],t)),{}))(e);return{onKeyDown:e=>{const r=_s(e.key);"tab"===r&&n(4e3);const i=t[r];i&&(e.preventDefault(),i(e))},tabIndex:0}}),[...Object.keys(e),...t])})({[p.a.Space]:v},[v]);return r.createElement(kd,Object.assign({children:e,onMouseEnter:t,onMouseMoveCapture:o,onMouseUpCapture:s,onMouseDownCapture:u,onMouseLeave:h,onTouchEndCapture:c,onTouchStartCapture:d,ref:f},y))})),Id=lo.a.div.withConfig({displayName:"TimeViewFontStyle"})`
  ${Vs};
  user-select: none;
`,Od=({seekableM:e,secondsM:t,timeFormat:n})=>e.filter((e=>e)).map((()=>r.createElement(Id,null,n(t.fromMaybe(0))))).toNullable(),xd=()=>{const{seekableM:e}=fs(),{timeM:t}=cs(),{timeFormat:n}=zo();return r.createElement(Od,{seekableM:e,secondsM:t,timeFormat:n})},Dd=()=>{const{seekableM:e}=fs(),{durationM:t}=cs(),{timeFormat:n}=zo();return r.createElement(Od,{seekableM:e,secondsM:t,timeFormat:n})},Md=lo.a.div.withConfig({displayName:"TimeWrapper"})`
  width: 100%;
  display: flex;

  ${Ps} {
    position: relative;

    > :nth-child(1) {
      position: absolute;
      left: 0;
      bottom: 16px;
    }

    > :nth-child(2) {
      margin: 0;
    }

    > :nth-child(3) {
      position: absolute;
      right: 0;
      bottom: 16px;
    }
  }
`,Pd=()=>{const e=Ts().startOverVideoStreamModeM$.fromMaybe(!0),t=ps().isLiveM.fromMaybe(!0);return fs().seekableM.fromMaybe(!0)?r.createElement(Md,null,(e||!t)&&r.createElement(xd,null),r.createElement(Ed,null),(e||!t)&&r.createElement(Dd,null)):null};function Rd(){return(Rd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,argumenl,r.createElement("path",{id:"casting_svg__b",d:"M0 13.333V16h2.59c0-1.476-1.156-2.667-2.59-2.667zm0-3.555v1.778c2.384 0 4.318 1.99 4.318 4.444h1.727c0-3.44-2.703-6.222-6.045-6.222zm0-3.556V8c4.292 0 7.773 3.582 7.773 8H9.5c0-5.404-4.258-9.778-9.5-9.778zM17.273 0H1.727C.777 0 0 .8 0 1.778v2.666h1.727V1.778h15.546v12.444h-6.046V16h6.046c.95 0 1.727-.8 1.727-1.778V1.778C19 .8 18.223 0 17.273 0zm-1.687 3.502H3.478V4.93c3.414 1.103 6.118 3.827 7.213 7.264h4.83v-8.69h.065z"}),r.createElement("path",{id:"casting_svg__d",d:"M.25 10.75v2h1.943c0-1.107-.868-2-1.943-2zm0-2.667v1.334c1.788 0 3.239 1.493 3.239 3.333h1.295c0-2.58-2.027-4.667-4.534-4.667zm0-2.666V6.75c3.22 0 5.83 2.687 5.83 6h1.295c0-4.053-3.193-7.333-7.125-7.333zM13.205.75H1.545C.833.75.25 1.35.25 2.083v2h1.295v-2h11.66v9.334H8.67v1.333h4.535c.712 0 1.295-.6 1.295-1.333V2.083c0-.733-.583-1.333-1.295-1.333z"}),r.createElement("filter",{id:"casting_svg__a"},r.createElement("feColorMatrix",{in:"SourceGraphic",values:"0 0 0 0 0.243137 0 0 0 0 0.701961 0 0 0 0 0.905882 0 0 0 1.000000 0"}))),Nd=r.createElement("g",{fill:"none",fillRule:"evenodd",filter:"url(#casting_svg__a)",transform:"translate(-1068 -20)"},r.createElement("g",{transform:"translate(1081.4 34.15)"},r.createElement("mask",{id:"casting_svg__c",fill:"#fff"},r.createElement("use",{xlinkHref:"#casting_svg__b"})),r.createElement("use",{fill:"#FFF",xlinkHref:"#casting_svg__b"}),r.createElement("g",{mask:"url(#casting_svg__c)"},r.createElement("g",{transform:"translate(2.5 1.25)"},r.createElement("mask",{id:"casting_svg__e",fill:"#fff"},r.createElement("use",{xlinkHref:"#casting_svg__d"})),r.createElement("use",{fill:"#FFF",xlinkHref:"#casting_svg__d"}),r.createElement("g",{fill:"#FFF",mask:"url(#casting_svg__e)"},r.createElement("path",{d:"M-5-5.625h24.75v24.75H-5z"}))))));function jd(){return(jd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ud=r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M13 27.333V30h2.59c0-1.476-1.156-2.667-2.59-2.667zm0-3.555v1.778c2.384 0 4.318 1.99 4.318 4.444h1.727c0-3.44-2.703-6.222-6.045-6.222zm0-3.556V22c4.292 0 7.773 3.582 7.773 8H22.5c0-5.404-4.258-9.778-9.5-9.778zM30.273 14H14.727c-.95 0-1.727.8-1.727 1.778v2.666h1.727v-2.666h15.546v12.444h-6.046V30h6.046c.95 0 1.727-.8 1.727-1.778V15.778C32 14.8 31.223 14 30.273 14z"});const Fd=uo.css`
  width: 44px;
  height: 44px;
`,Bd=lo()((function(e){return r.createElement("svg",Rd({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 44 44"},e),Ld,Nd)})).withConfig({displayName:"IconCasting"})`
  ${Fd}
`,Vd=lo()((function(e){return r.createElement("svg",jd({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44"},e),Ud)})).withConfig({displayName:"IconStartCast"})`
  ${Fd}
`,Gd=()=>{const{availableM:e,close:t,request:n}=Ss("CHROMECAST"),{statusM:i}=Es("CHROMECAST"),{adPlayingM:a}=es(),o=i.equals(Object(l.s)("REMOTE"));return e.fromMaybe(!1)&&!a.fromMaybe(!1)?r.createElement(yu,{"aria-label":"Chromecast",onClick:o?t:n,children:o?r.createElement(Bd,null):r.createElement(Vd,null),onKeyDown:e=>{e.key!==p.a.Space&&e.key!==p.a.Enter||(e.preventDefault(),o?t():n())}}):r.createElement(r.Fragment,null)};function Hd(){return(Hd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var zd=r.createElement("defs",null,r.createElement("path",{id:"airplay_svg__a",d:"M22.5 23l7 8h-14l7-8zm6.936-9c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v7.873c0 .892-.093 1.215-.267 1.54a1.81 1.81 0 01-.756.757c-.326.174-.65.267-1.54.267H28l-1.5-1.5h3a1 1 0 00.993-.883l.007-.117v-8a1 1 0 00-1-1h-14a1 1 0 00-1 1v8a1 1 0 001 1h3L17 27h-1.436c-.892 0-1.215-.093-1.54-.267a1.81 1.81 0 01-.757-.756c-.174-.326-.267-.65-.267-1.54v-7.873c0-.892.093-1.215.267-1.54a1.81 1.81 0 01.756-.757c.326-.174.65-.267 1.54-.267h13.873z"})),$d=r.createElement("use",{xlinkHref:"#airplay_svg__a"});const qd=lo()((function(e){return r.createElement("svg",Hd({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 44 44"},e),zd,r.createElement("g",{fillRule:"evenodd"},$d,r.createElement("use",{fillOpacity:.6,style:{mixBlendMode:"overlay"},xlinkHref:"#airplay_svg__a"})))})).withConfig({displayName:"Icon"})`
  fill: ${({isActive:e})=>e?"#5dd6f6":"#ffffff"};
  width: 44px;
  height: 44px;
`,Wd=()=>{const{statusM:e}=Es("AIRPLAY"),{availableM:t,request:n,close:i}=Ss("AIRPLAY"),a=e.equals(Object(l.s)("REMOTE"));return t.fromMaybe(!1)?r.createElement(yu,{onClick:a?i:n},r.createElement(qd,{isActive:a})):null};function Kd(){return(Kd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Yd=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Xd=r.createElement("path",{d:"M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12z"});const Zd=lo()((function(e){return r.createElement("svg",Kd({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),Yd,Xd)})).withConfig({displayName:"IconVideo"})`
  width: 32px;
  height: 32px;
  fill: ${"#ffffff"};
  margin-right: 9px;

  ${Rs} {
    width: 24px;
    height: 24px;
  }
`,Qd=e=>e.get("images").map((e=>e.filter((e=>"default"===e.kind)))).chain(l.i).map(Object(f.i)("src")),Jd=lo.a.div.withConfig({displayName:"RemoteSenderBackgroundContainer"})`
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 250ms ease-out;
  position: absolute;
  background-color: #696969;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: block;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  /* Ensure nice tint-background on image */
  ::after {
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 60%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`,ef=lo.a.div.withConfig({displayName:"TextContainer"})`
  position: absolute;
  width: 100%;
  bottom: 57.9%;

  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & * {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,tf=lo.a.div.withConfig({displayName:"StatusText"})`
  text-align: center;
  width: 50%;
  font-family: ${Bs};
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: rgba(204, 204, 204, 0.8);

  ${Rs} {
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 0.44px;
  }

  ${Ps} {
    font-size: 12px;
    line-height: 1.71;
    letter-spacing: 0.38px;
  }
`,nf=lo.a.div.withConfig({displayName:"DeviceName"})`
  ${Hs};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
`,rf=()=>{const{statusM:e,deviceNameM:t,typeM:n,imagesM:i}=Es(),{metadataM:a}=us(),o=cu();return r.createElement(r.Fragment,null,r.createElement(Jd,{visible:e.equals(Object(l.s)("REMOTE"))},i.get("showImageUrl").alt(i.get("videoImageUrl")).alt(Qd(a.get("show"))).alt(Qd(a)).map((e=>r.createElement("img",{src:e,alt:""}))).fromMaybe(r.createElement(r.Fragment,null))),e.equals(Object(l.s)("REMOTE"))ull,r.createElement(tf,null,t.map((()=>o("sender.chromecast.device.name.pre.phrase"))).fromMaybe(o("sender.chromecast.default.status.text"))),r.createElement(nf,null,r.createElement(Zd,null),t.fromMaybe(""))))).alt(n.filter((e=>"AIRPLAY"===e)).map((()=>r.createElement(nf,null,r.createElement(Zd,null),o("sender.airplay.status.text"))))).lazyFromMaybe((()=>r.createElement(nf,null,o("sender.default.status.text"))))))},af=(e,t)=>Object(l.s)(e.filter(l.l).map(l.g)).filter((e=>e.length>0)).map((e=>e.join(t))),of=e=>{con+e)),i=e.get("episodeNumber").map((e=>"E"+e)),a=af([r,i]," "),o=af([a,t,n]," | ").fromMaybe(""),s=e.get("contentRatings").chain(l.i).get("system"),u=e.get("contentRatings").map((e=>e.filter((({system:e})=>Object(l.s)(e).equals(s))))).get(0),c=u.get("code"),d=u.get("images").map((e=>{var t;return null!==(t=e.find((e=>"logo"===(null==e?void 0:e.kind))))&&void 0!==t?t:e.find((e=>"default"===(null==e?void 0:e.kind)))})).get("src"),f=e.get("contentDescriptors").reduce(((e,t)=>[...e,...t]),[]).reduce(((e,t)=>{var n;const r=t.images||[],i=null!==(n=r.find((e=>"logo"===(null==e?void 0:e.kind))))&&void 0!==n?n:r.find((e=>"default"===(null==e?void 0:e.kind)));return void 0===i?e:[...e,i]}),[]).map((e=>e.src)),p=e.get("showImageUrl");return{nextVideoText:o,nextVideoImageURL:e.get("episodeImageUrl").alt(p).toUndefined(),ratingInfoM:c,ratingImageSrcM:d,contentDescSrcM:f}};function sf(){return(sf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var uf=r.createElement("defs",null,r.createElement("path",{id:"icon-close_svg__a",d:"M28.545 14L30 15.455 23.454 22 30 28.545 28.545 30 22 23.454 15.455 30 14 28.545 20.546 22 14 15.455 15.455 14 22 20.546 28.545 14z"})),lf=r.createElement("g",{fill:"none",fillRule:"evenoate(.4 .15)"},r.createElement("mask",{id:"icon-close_svg__b",fill:"#finkHref:"#icon-close_svg__a"})),r.createElement("use",{fill:"#FFF",xlinkHref:"#icon-close_svg__a"}),r.createElement("path",{fill:"#D8D8D8",stroke:"#979797",d:"M0 0h44v44H0z",mask:"url(#icon-close_svg__b)"}),r.createElement("g",{fill:"#FFF",mask:"url(#icon-close_svg__b)"},r.createElement("path",{d:"M0 0h44v44H0z"})));const cf=uo.css`
  border-radius: 4px;
  border: solid 2px ${"#ffffff"};
  display: flex;
  justify-content: center;
  align-items: center;
  ont-family: ${Bs};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${"#ffffff"};

  width: 139px;
  height: 47px;
  font-size: 14px;

  &:hover {-radius: 2px;
    background-color: ${"#ffffff"};
    color: ${"#000000"};
  }
`,df={header:"error.default.header"},ff={header:"error.video.playback.unavailable.header"},pf={anchorM:Object(l.s)({text:"error.default.anchor.text",href:window.location.href})},hf=lo.a.div.withConfig({displayName:"ErrorRoot"})`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${"#333333"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 32px;

  body {
    -webkit-font-smoothing: antialiased; /* Chrome, Safari */
    -moz-osx-font-smoothing: grayscale; /* Firefox */
  }

  &,
  & * {
    box-sizing: border-box;
  }
`,mf=lo.a.div.withConfig({displayName:"ErrorMessageTitle"})`
  ${Hs};
  text-align: center;
  width: 100%;
  max-width: 520px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 28px;
`,gf=lo.a.div.withConfig({displayName:"ErrorInformationText"})`
  width: 100%;
  max-width: 552px;
  margin-bottom: 32px;
  ${zs};
`,vf=lo.a.a.withConfig({displayName:"ErrorInformationLink"})`
  ${zs};
`,yf=lo.a.a.withConfig({displayName:"ErrorButton"})`
  ${cf}
  margin-left: 8px;
  margin-right: 8px;
`,bf=({viewConfig:e})=>()=>{const t=cu(),{errorM:n}=(()=>{const{error:e}=r.useContext(As);return{errorM:r.useMemo((()=>Object(l.s)(e)),[e])}})(),i=((e,t)=>{const n=e.get("taggedWith").map((n=>((e,t)=>{const n=e.get("brandName").filter((e=>"ATVE"===e||"DPLUS_US"===e));return[[u.c.REQUEST_FAILURE,Object.assign(Object.assign(Object.assign(Object.assign({},df),{text:"error.request.failure.text"}),pf),{errorCodeM:Object(l.u)()})],[u.c.NOT_FOUND,Object.assign(Object.assign({header:"error.not.found.header",text:"error.not.found.text"},pf),{errorCodeM:Object(l.u)()})],[u.c.OUTSIDE_PLAYABLE_WINDOWS,Object.assign(Object.assign(Object.assign(Object.assign({},df),{text:"error.outside.playable.windows.text"}),pf),{errorCodeM:Object(l.u)()})],[u.c.BEFORE_PLAYABLE_WINDOWS,Object.assign(Object.assign(Object.assign(Object.assign({},df),{text:"error.before.playable.windows.text"}),pf),{errorCodeM:Object(l.u)()})],[u.c.AFTER_PLAYABLE_WINDOWS,Object.assign(Object.assign(Object.assign(Object.assign({},df),{text:"error.after.playable.windows.text"}),pf),{errorCodeM:Object(l.u)()})],[u.c.GEOBLOCKED,{text:"error.geoblocked.text",anchorM:Object(l.u)(),errorCodeMAGE,{header:"error.missing.package.header",text:n.map((e=>"ATVE"===e?"error.missing.package.atve.text":"error.missing.package.text")).fromMaybe("error.missing.package.text"),anchorM:Object(l.u)(),errorCodeM:Object(l.u)()}],[u.c.MISSING_PACKAGE_REGISTER,Object.assign(Object.assign({},df),{text:n.map((ckage.atve.register.text":"error.missing.package.register.text")).fromMaybe("error.missing.package.register.text"),anchorM:Object(l.u)(),errorCodeM:Object(l.u)()})],[u.c.CONCURRENT_STREAMS_EXCEEDED,{header:"error.concurrent.streams.exceeded.header",text:"error.concurrent.streams.exceeded.text",anchorM:Object(l.u)(),errorCodeM:Object(l.u)()}],[u.a.AD_BLOCKER,Object.assign(Object.assign(Object.assign(Object.assign({},df),{text:"error.ad.blocker.text"}),pf),{errorCodeM:Object(l.u)()})],[u.h.IOS,Object.assign(Object.assign({},df),{text:"error.mobile.guard.ios.text",anchorM:e.map((e=>({text:"error.mobile.guard.ios.anchor.text",href:e.appStoreLinks.ios}))),errorCodeM:Object(l.u)()})],[u.h.ANDROID,Object.assign(Object.assign({},ff),{text:"error.drm.not.supported.text",anchorM:Object(l.u)(),errorCodeM:Object(l.u)()})],[u.d.DRM_NOT_SUPPORTED,Object.assign(Object.assign({},ff),{text:"error.drm.not.supported.text",anchorM:Object(l.u)(),errorCodeM:Object(l.u)()})],[u.i.LOAD_FAILED,Object.assign(Object.assign({},ff),{text:"error.drm.not.supported.text",anchorM:Object(l.u)(),errorCodeM:Object(l.u)()})],[u.c.GATEWAY_TIMEOUT,Object.assign(Object.assign(Object.assign(Object.assign({},df),{text:"error.gateway.timeout.text"}),pf),{errorCodeM:Object(l.u)()})],[u.e.CAF_ERROR,Object.assign(Object.assign({},df),{text:"error.caf.error.text",anchorM:Object(l.u)(),errorCodeM:t.get("extract").map((e=>e())).get("detailedErrorCode").map((e=>u.e.CAF_ERROR+" "+e)).alt(t.map((()=>u.e.CAF_ERROR)))})]]})(Object(l.s)(t),e).find((([e])=>n(e))))).map((([,e])=>({headerM:Object(l.s)(e.header),text:e.text,anchorM:e.anchorM,errorCodeM:e.errorCodeM})));return{headerM:n.chain((e=>e.headerM)),textM:n.get("text").alt(Object(l.s)("error.default.text")),anchorM:n.chain((e=>e.anchorM)),errorCodeM:n.chain((e=>e.errorCodeM)).alt(e.map((t=>{var n;let r="";return(null==t?void 0:t.extract())&&(null===(n=null==t?void 0:t.extract())||void 0===n?void 0:n.code)?r=t.extract().code+" "+t.extract().message:e.get("extractLeft").map((e=>e())).map((e=>{r+=e.join(", ")})),r})))}})(n,e);return r.createElement(hf,null,i.headerM.map(t).map((e=>r.createElement(mf,null,e))).fromMaybe(r.createElement(r.Fragment,null)),r.createElement(gf,null,i.textM.map(t).fromMaybe("")," ",t("error.additional.information")," ",r.createElement(vf,{rel:"noopener noreferrer",target:"_blank",href:e.helpCenterLink},e.helpCenterLink),". ERROR CODE:"," ",i.errorCodeM.filter((e=>""!==e)).fromMaybe("FALLBACK")),i.anchorM.map((e=>r.createElement(yf,{href:e.href},t(e.text)))).fromMaybe(r.createElement(r.Fragment,null)))},Ef=e=>t=>{return Object(f.b)((e=>r.createElement(e,null)),Vo({translations:du,fallbacks:Ys,me$:t.me$}),(e=>t=>()=>r.createElement(ws,{value:e},r.createElement(t,nuelNextFlag=!1;const _f=lo()(yu).withConfig({displayName:"Button"})`
  display: flex;
  ${Ps} {
    align-self: flex-start;
    padding: 12px;
  }
`,Tf=lo()((function(e){return r.createElement("svg",sf({xmlns:"http://www.w3.org/2000/s9/xlink",viewBox:"0 0 44 44"},e),uf,lf)})).withConfig({displayName:"IconClose"})`
  width: 44px;
  height: 44px;

  ${Ps} {
    height: 24px;
    width: 24px;
  }
`,Af=lo.a.div.withConfig({displayName:"TopFlexContainer"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  &,
  & * {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ${Ps} {
    order: 2;
  }
`,wf=lo.a.div.withConfig({displayName:"TextWrapper"})`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: flex-start;
`,kf=lo.a.h2.withConfig({displayName:"UpNext"})`
  ${Ks};
  margin: 0;
  ${Ps} {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.75px;
  }
`,Cf=lo.a.h3.withConfig({displayName:"Meta"})`
  ${qs};
  margin: 0;
  ${Ps} {
    opacity: 0.9;
    font-weight: normal;
    line-height: normal;
    letter-spacing: 0.75px;
  }
`,If=lo.a.h3.withConfig({displayName:"Rating"})`
  ${qs};
  margin: 0;
  ${Ps} {
    opacity: 0.9;
    font-weight: normal;
    line-height: normal;
    letter-spacing: 0.75px;
  }
  color: ${"#cccccc"};

  img {
    width: 16px;
  }
  ${Ps} {
    img {
      width: 14px;
    }
  }
`,Of=lo.a.h3.withConfig({displayName:"RatingDescriptors"})`
  ${qs};
  margin: 0;
  ${Ps} {
    opacity: 0.9;
    font-weight: normal;
    line-height: normal;
    letter-spacing: 0.75px;
  }
  color: ${"#cccccc"};
  img {
    width: 16px;
  }
  ${Ps} {
    img {.a.div.withConfig({displayName:"RatingContainer"})`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
`,Df=lo.a.div.withConfig({displayName:"Separator"})`
  padding-top: 0.3vh;
`,Mf=({tenfoM:t,ratingImageSrcM:n,contentDescriptorsImageSrcM:i,onCancelClick:a})=>{const o=cu(),s=i.length>0;return r.createElement(Af,null,r.createElement(wf,null,r.createElement(kf,{children:o("play.next.container.up.next.text")}),r.createElement(Cf,{children:e}),r.createElement(xf,null,n.map((e=>r.createElement("img",{src:e}))).alt(t.map((e=>e))).map((e=>r.createElement(If,{children:e}))).toNullable(),s&&i.map((e=>r.createElement(Of,null," ",r.createElement("img",{src:e})," ")))),r.createElement(Df,null)),r.createElement(_f,{"aria-label":o("play.next.container.button.aria.label"),children:r.createElement(Tf,null),onClick:()=>{Sf.cancelNextFlag=!0,a()},onKeyDown:e=>{e.key!==p.a.Space&&e.key!==p.a.Enter||(e.preventDefault(),a());
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
  border: solid 3px rgba(255, 255, 255, 0.4);
`,Rf=lo.a.svg.withConfig({displayName:"PartiallyFilledBorderCircle"})`
  width: 56px;
  height: 56px;
  transform: rotate(-90deg);

  > circle {
    stroke: ${"#ffffff"};
    stroke-linecap: round;
    transition: stroke-dasharray linear 1.1s; /* 1.1s looks quite good given current implementation */
  }
`,Lf=({filledRatio:e})=>r.createElement(Rf,{viewBox:"0 0 50 50"},r.createElement("circle",{style:{strokeDasharray:125*e+", 150"},cx:"25",cy:"25",r:"20",fill:"#595959",fillOpacity:"0.2",strokeWidth:"2"}));function Nf(){return(Nf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var jf=r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M15.226 9.794L1.851 17.711c-.741.439-1.342.123-1.342-.705V.994c0-.828.6-1.144 1.342-.705l13.375 7.917c.74.438.741 1.15 0 1.588z"});const Uf=lo()(yu).withConfig({displayName:"Button"})`
  display: flex;
  justify-content: center;
  align-items: center;

  ${Ps} {
    width: 44px;
    height: 44px;
  }
`,Ff=lo()((function(e){return r.createElement("svg",Nf({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 18"},e),jf)})).withConfig({displayName:"IconPlay"})`
  margin-left: 1px; /* Visually looks more centralized */
  width: 16px;
  height: 18px;
  position: absolute;

  ${Ps} {
    width: 12px;
    height: 15px;
  }
`,Bf=({countDownM:e,onPlayClick:t,countdownDurationM:n})=>{const i=cu();return r.createElement(Uf,{"aria-label":i("play.next.countdown.button.aria.label"),onClick:t,onKeyDown:e=>{e.key!==p.a.Space&&e.key!==p.a.Enter||(e.preventDefault(),t())}},r.createElement(Lf,{filledRatio:Object(l.a)(d.l,e,n).fromMaybe(0)}),r.createElement(Ff,null))},Vf=lo.a.img.withConfig({displayName:"VideoThumbnail"})`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: black;

  ${Ps} {
    display: none;
  }
`,Gf=lo.a.div.withConfig({displayName:"BottomWrapper"})`
  align-self: stretch;
  height: ${168}px;
  ${Pf};
  box-sizing: content-box;

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  ${Rs} {
    height: ${82}px;
  }

  ${Ps} {
    height: 100%;
    width: auto;
    order: 1;
    border: none;
    margin-left: 24px;
    margin-right: 24px;
  }
`,Hf=({url:e,countDownM:t,onPlayClick:n,countdownDurationM:i})=>r.createElement(Gf,null,r.createElement(Vf,{src:e,alt:""}),r.createElement(Bf,{onPlayClick:n,countDownM:t,countdownDurationM:i}));var zf;!function(e){e[e.VERY_LOW=.25]="VERY_LOW",e[e.LOW=.5]="LOW",e[e.NORMAL=1]="NORMAL",e[e.HIGH=1.5]="HIGH",e[e.VERY_HIGH=2]="VERY_HIGH"}(zf||(zf={}));const $f=e=>e.map((e=>{const t=e.streams.events.ended$,n=e.streams.events.play$;return Object(o.k)(t.constant(!0),n.constant(!1))})).switch().map(l.s),qf=lo.a.div.withConfig({displayName:"PopupContainer"})`
  opacity: ${({show:e,imageLoaded:t})=>t?e?1:.2:0};
  transition: opacity 250ms ease-out;
  position: absolute;
  right: 0;
  bottom: 64px;
  width: 310px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${({imageLoaded:e})=>e?"fadeIn 1s cubic-bezier(0.635, 0.165, 0.655, 0.61)":"none"};

  margin-right: ${({offset:e})=>e};
  padding-right: 10px; // To align with CC button edge. SVG is padded internally.

  ${Rs} {
    width: 248px;
  }

  ${Ps} {
    background-color: ${"#000000"};
    flex-direction: row;
    justify-content: flex-start;
    width: auto;
    left: ${({offset:e})=>e};
    right: ${({offset:e})=>e};
    margin-right: 0;
    height: 66px;
    background-clip: content-box;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      /* When volume slider is opened, playnext thumbnail should fade */
      /* Magic number - 0.2 looked good visually, but has not been verified */
      opacity: ${({show:e} }
`;Sf.cancelNextFlag=!1;const Wf=()=>{var e,t;const{playNext:n,cancelNext:i}=(()=>{const{cancelNextM:e,playNextM:t}=Ro();returnfromMaybe(No)}})(),{aboutToEndM:a,countdownDurationM:o,countDownM:s}=jo(),{nextVideoDataM:u}={nextVideoDataM:Ro().nextVideoDataM},{timeM:c,durationM:d}=hs(),{videoEndedM:f}=(()=>{const e=Ko();reho(e.playback.player$,$f,Object(l.u)())}})(),h=null===(t=null===(e=r.useContext(Ap))||void 0===e?void 0:e.callbacks)||void 0===t?void 0:t.onExit,m=Object(l.a)(((e,t)=>Math.floor(e)===Math.floor(t)),c,d),g=f.fromMaybeme"),y=xs("settingsMenu"),{isImageLoaded:b,preloadedUrl:E}=(e=>{const[t,n]=r.useState(!1);return r.useEffect((()=>{if(e){n(!1);const t=new Image;t.onload=()=>{n(!0)},t.src=e}}),[e]),{isImageLoaded:t,preloadedUrl:e}})((S=of(u).nextVideoImageURL)?Object(p.m)(S,Math.ceil(168*window.devicePixelRatio)):S);var S;const{statusM:_}=Es("CHROMECAST"),T=_.equals(Object(l.s)("INITIALIZING")),A=a.filter((e=>e&&Object(l.l)(u)&&!T)).map((()=>of(u))).map((({nextVideoText:e,ratingInfoM:t,ratingImageSrcM:a,contentDescriptorsImageSrcM:u})=>r.createElement(qf,{offset:"3.5%",imageLoaded:b,show:v.filter((e=>e.dragging||e.mouseOver)).map((()=>!1)).alt(y.filter((({menuOpen:e})=>e)).map((()=>!1))).fromMaybe(!0)},r.createElement(Mf,{ratingImageSrcM:a,ratingInfoM:t,contentDescriptorsImageSrcM:u,text:e,onCancelClick:i}),r.createElement(Hf,{url:E,countDownM:s,on))).lazyFromMaybe((()=>r.createElement(r.Fragment,null)));return Sf.cancelNextFlag&&g&&h&&h(),A};var Kf=n(138);let Yf=0,Xf=!1;const Zf=lo.a.div.withConfig({displayName:"ContentRatingOverlayStyle"})`
  opacity: ${({show:e})=>e?1:0};
  transition: ${({show:e})=>e?"opacity 0.5s cubic-bezier(0, 0.8, 0.2, 1)":"opacity 0.5s cubic-bezier(0.8, 0, 1, 0.2)"};
  background: linear-gradient(rgba(0, 0, 0, 0.6) 10%, rgba(0, 0, 0, 0) 35%);

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`,Qf=lo.a.div.withConfig({displayName:"InfoBox"})`
  position: absolute;
  left: 3.3vw;
  top: max(2.2vw, 50px);
  display: flex;

  height: min(${"30vh"}, ${"100px"});

  ${Rs} {
    height: max(${"5.5vh"}, ${"88px"});
  }

  ${Ps} {
    height: max(${"6.5vh"}, ${"77px"});
  }
`,Jf=(e,t,n,r)=>uo.css`
  margin-top: calc(${t} / 12);
  margin-bottom: calc(${t} / 5);
  /* Height minus the margins. Cut line in half if no descriptors are available
  for the bottom line. */
  height: calc(
    (${e?t:"0px"} - ${t} * (1 / 12 + 1 / 5)) /
      (${n&&!r?1:2})
  );
`,ep=lo.a.div.withConfig({displayName:"Line"})`
  background: rgb(87, 163, 255);
  width: 8px;
  ${({show:e,hasDescriptors:t,hasRatingImages:n})=>Jf(e,"min(30vh, 100px)",t,n)}

  ${Rs} {
    width: 6px;
    ${({show:e,hasDescriptors:t,hasRatingImages:n})=>Jf(e,"max(5.5vh, 88px)",t,n)}
  }

  ${Ps} {
    width: 2pn transitions in
  the opposite direction out. flex-end makes sure this happens. If no bottom
  line is available however, it's just easier to transition height from bottom
  to top. Since the height is cut in half it'll look bad otherwise. */
  align-self: ${({show:e,hasDescriptors:t})=>e||!t?"flex-start":"flex-end"};
  transition: height 0.4s ease-in;
`,tp=lo.a.div.withConfig({displayName:"TextWrapper"})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: min(3vw, 12px);
  max-width: 91vw;
  align-items: start;
  overflow: hidden;
  height: inherit;
`,np=lo.a.div.withConfig({displayName:"TopRatingLine"})`
  display: flex;
  align-items: center;

  opacity: ${({show:e})=>e?1:0};
  transform: ${({show:e})=>e?"translateX(0%)":"translateX(-35%)"};
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  height: 50%;
  font-family: ${Bs};
  font-size: 32px;
  font-weight: 600;
  color: ${"#ffffff"};

  img {
    margin-left: 12px;
    height: 30px;
  }

  ${Rs} {
    font-size: 24px;
    img {
      margin-left: 8px;
      height: 24px;
    }
  }

  ${Ps} {
    font-size: 20px;
    img {
      margin-left: 6px;
      height: 20px;
    }
  }
`,rp=lo.a.div.withConfig({displayName:"BottomDescriptorLine"})`
  overflow: hidden;

  /* If bottom line descriptors overflow to two lines display a "..." at the end
  of the second line. */
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  opacity: ${({show:e})=>e?1:0};
  transform: ${({show:e})=>e?"translateX(0%)":"translateX(-35%)"};
  transition: transform 0.5s cubic-bezier(0.5, 0, 0.45, 1),
    opacity 0.5s cubic-bezier(0.5, 0, 0.45, 1);
  height: 50%;

  color: ${"#ffffff"};
  font-family: ${Bs};
  font-size: 18px;
  font-weight: 400;

  img {
    height: 30px;
  }

  ${Rs} {
    font-size: 15px;
  }

  ${Ps} {
    font-size: 12px;
  }
`,ip=e=>t=>t.filter((({system:t})=>Object(l.s)(t).equals(e))).map((({code:e})=>e)),ap=()=>{const{metadataM:e}=us(),t=cu(),n=e.get("contentRatings").chain(l.i).get("system"),i=e.get("contentDescriptors").map(ip(n)).filter((e=>e.length>0)).map((e=>e.join(", "))),a=e.get("contentRatings").map(ip(n)).chain(l.i),o=e.get("contentRatings").chain(l.i).get("images").map((e=>{var t;return null!==(t=e.find((e=>"logo"===(null==e?void 0:e.kind))))&&void 0!==t?t:e.find((e=>"default"===(null==e?void 0:e.kind)))})).get("src"),s=e.get("contentDescriptors").reduce(((e,t)=>[...e,...t]),[]).reduce(((e,t)=>{var n;const r=t.images||[],i=null!==(n=r.find((e=>"logo"===(null==e?void 0:e.kind))))&&void 0!==n?n:r.find((e=>"default"===(null==e?void 0:e.kind)));retui?e:[...e,i]}),[]).map((e=>e.src)),u=s.length>0,c=Object(l.l)(i),f=(e=>{const{adPlayingM:t}=es(),{timeM:n}=cs(),{loadStart$:i}=os();r.useEffect((()=>{const e=i.subscribe({next:()=>{Xf=!1,Yf=0},complete:()=>{},error:()=>{}});return()=>{e.unsubscribe()}}),[i]);const a=t.fromMaybe(!1),o=n.map((e=>{const t=e>0&&Math.abs(e-Yf)>=1&&!a;return a&&(Xf=!1,Yf=e),t})).fromMaybe(!1),s=r.useMemo((()=>Object(l.s)(n.map((e=>a?Number.NEGATIVE_INFINITY:e)).fromMaybe(0))),[o]),u=r.useMemo((()=>Object(l.a)(((e,t)=>{const n=Object(d.a)(t,1),r=Object(d.a)(n,5),i=Object(d.j)(e,n)&&Object(d.f)(e,r);return t!==Number.NEGATIVE_INFINITY&&!i&&e>r&&!a&&(Xf=!0),!Xf&&i}),n,s).fromMaybe(!1)),[n,s]),{statusM:c}=Es("CHROMECAST"),f=c.equals(Object(l.s)("REMOTE"));return e&&u&&!t.fromMaybe(!1)&&!f})(Object(l.l)(a));return r.createElement(Zr.createElement(ep,{show:f,hasDescriptors:c,hcreateElement(np,{show:f},o.map((e=>r.createElement(r.Fragment,null,t("content.rating.overlay.top.line"),r.createElement("img",{src:e})))).lazyFromMaybe((()=>Object(Kf.sprintf)(t("content.rating.overlay.top.line[ratingCode]"),{ratingCode:a.fromMaybe("")}))),u&&s.map((e=>r.createElement(np,{show:f},r.createElement("img",{src:e}))))),!u&&i.map((e=>r.createElement(rp,{show:f},e))).toNullableentM:e,pauseAdsEnabledM:t}=ns();return r.createElement(r.Fragment,null,t.filter((e=>e)).chain((()=>e)).map((e=>r.createElement(Hu,{elem:e}))).toNullable())};function sp(){return(sp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var up=r.createElement("defs",null,r.createElement("path",{id:"Back-Arrow_svg__a",d:"M16 7H3.8l5.6-5.6L8 0 0 8l8 8 1.4-1.4L3.8 9H16z"})),lp=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("mask",{id:"Back-Arrow_svg__b",fill:"#fff"},r.createElement("use",{xlinkHref:"#Back-Arrow_svg__a"})),r.createElement("use",{fill:"#FFF",xlinkHref:"#Back-Arrow_svg__a"}),r.createElement("g",{mask:"url(#Back-Arrow_svg__b)"},r.createElement("path",{fill:"#FFF",d:"M-14-14h44v44h-44z"})));const cp=lo()(yu).withConfig({displayName:"ExitButtonS"})`
  cursor: pointer;
  position: absolute;
  text-decoration: none;
  top: 32px;
  left: 32px;
  background: none;
  border: none;
  color: white;
  font-size: 22px;
  font-weight: bold;
  transition: opacity 0.3s ease-out;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
    padding-right: 12px;
  }
`,dp=uo.css`
  width: 28px;
  height: 16px;
`,fp=lo()((function(e){return r.createElement("svg",sp({viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),up,lp)})).withConfig({displayName:"IconbackarrowS"})`
  ${dp};
`,pp=()=>{var e,t;const n=cu(),i=null===(t=null===(e=r.useContext(Ap))||void 0===e?void 0:e.callbacks)||void 0===t?void 0:t.onExit;return i?r.createElement(cp,{onClick:i},r.createElement(fp,null)," ",n("exit.Button")):null};function hp(){return(hp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var mp=r.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M21.481 35.467l11.146-6.786c.309-.188.463-.434.464-.68v6.363a1.273 1.273 0 102.545 0V21.636a1.273 1.273 0 10-2.545 0V28c0-.246-.155-.492-.464-.68l-11.146-6.786c-.618-.376-1.118-.105-1.118.605v13.724c0 .71.5.98 1.118.605z",clipRule:"eve(yu).withConfig({displayName:"SkipButtonContainer"})`
  opacity: ${({visible:e})=>e?1:0};
  right: 0px;
  bottom: 0px;
  cursor: pointer;
  border: "none";
  border-width: 2px;
  border-color: ${"#c4c4c4"};
  border-radius: 3px;
  min-width: 67px;
  width: fit-content;
  height: 50px;
  padding: 0.7%;
  margin-bottom: 7%;
  margin-right: 4%;
  background-color: #2175d9;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  z-index: 1;
  .skipStyle {
    padding-right: 15px;
  }
  ${Us} {
    max-height: 50px;
    margin-right: 3.7%;
    margin-bottom: 3%;
    padding: 0px;
  }
  ${js} {
    max-height: 43px;
    margin-right: 3.8%;
    margin-bottom: 4%;
    padding: 0px;
  }
  ${Ns} {
    max-height: 38px;
    margin-right: 4%;
    margin-bottom: 5%;
    padding: 0px;
  }
  ${Ls} {
    max-height: 36px;
    margin-right: 46px;
    margin-bottom: 8%;
    padding: 0px;
  }
  ${Rs} {
    max-height: 32px;
    margin-right: 35px;
    margin-bottom: 12%;
    padding: 0px;
  }
  ${Ps} {
    max-height: 30px;
    margin-right: 24px;
    margin-bottom: 14%;
    .skipStyle {
      padding-right: 12px;
    }
    padding: 0px;
  }
  ${Gs};
`,vp=(yp=function(e){hp({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 56 56"},e),mp)},lo()(yp)`
  width: ${"45px"};
  height: ${"140%"};
  ${Ps} {
    width: ${"30px"};
  }
  ${Rs} {
    width: ${"35px;"};
  }
`);var yp;const bp=()=>{const[e,t]=r.useState({width:window.innerWidth}),{timeM:n}=hs(),{bufferingM:i}=ms(),a=i.fromMaybe(!0),{metadataM:o}=Ts(),s=e=>Object(d.h)(o.get("markers").get(e).fromMaybe(0)),u=s("introStart"),c=s("introEnd"),f=s("recapStart"),p=s("recapEnd"),h=c-u,m=p-f,g=n.fromMaybe(0),v=h-(g-u),y=m-(g-f),{skipRecap:b,skipIntro:E}=(()=>{const e=Ko(),t=ho(e.metadata.playbackInfo$,(e=>e.map(l.s)),Object(l.u)());let n="";return t.map((e=>{n=e.id})),{skipIntro:Object(r.useCallback)((()=>{const e=window.eventTracker;e&&e.track("interaction",as("skip-intro",n))}),[n]),skipRecap:Object(r.useCallback)((()=>{const e=window.eventTracker;e&&e.track("interaction",as("skip-recap",n))}),[n])}})(),S=is(v),_=is(y),T=u+5,A=f+5,w=wu();let k=!0,C=!0;T<=g&&c>=g&&(k=w),A<=g&&p>=g&&(C=w);let I=!1,O=!1;Object(d.j)(h,7)&&Object(d.j)(g,u)&&Object(d.f)(g,c)?(Object(d.f)(u,f)&&Object(d.f)(c,f)||Object(d.e)(f,u)&&Object(d.e)(p,u)||Object(d.f)(u,f)&&Object(d.j)(c,f))&&(I=!0,O=!1):Object(d.j)(m,7)&&Object(d.j)(g,f)&&Object(d.f)(g,p)&&(Object(d.f)(f,u)&&Object(d.f)(p,u)||Object(d.e)(u,f)&&Object(d.e)(c,f)||Object(d.f)(f,u)&&Object(d.j)(p,u))&&(I=!1,O=!0),r.useEffect((()=>{const e=((e,t)=>{let n;return()=>{clearTimeout(n),n=setTimeout((()=>{n=null,e.apply(void 0)}),300)}})((()=>{t({width:window.innerWidth})}));return window.addEventListener("resize",e),()=>{window.removeEventListeD]=r.useState(!0),M=cu();r.useEffect((()=>{e.width<=480?D(!1):D(!0)}),[e.width]);conssplayName:"VisibilityWrapper"})`
  display: ${({display:e})=>e?"block":"none"};
//# sourceMappingURL=400-43436aa53afdecf95848.js.map