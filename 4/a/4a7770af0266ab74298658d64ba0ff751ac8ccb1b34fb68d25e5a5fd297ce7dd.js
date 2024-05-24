(function(_ds){var window=this;var $na=t1=function(a){var b={};return a&&a.displayText?(new aoa(a,b)).render():(0,_ds.Q)``},boa=(0,_ds.Q)`
  <svg
    class="cws-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="none">
    <path d="M12 15.375 6 9.375 7.4 7.975 12 12.575 16.6 7.975 18 9.375Z" />
  </svg>
`;var coa=function(a,b={}){for(const c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},doa=function(a,b={}){a.context=_ds.Is(b,a.j||{})},eoa=class{var foa=new Map([["xl","(min-width: 1440px)"],["large","(min-width: 1024px)"],["medium","(min-width: 768px)"]]),hoa=function(a,b){const c=goa(b.iJ,b.lK),d=window.matchMedia(b.media),e=()=>{c(d)};a.Sm.set(b.media,{zr:b,sK:d,callback:c,Kj:e});d.addEventListener("change",e);c(d)},goa=function(a,b){return c=>{c.matches?a(c):b&&b(c)}},u1=function(){for(const [a,b]of foa){const c=a;if(window.matchMedia(b).matches)return c}return"small"},ioa=class{constructor(a,b=[]){this.rules=b;this.Sm=new Map;let c;(null!=
(c=a.zl)?c:a.zl=new Set).add(this);if(void 0!==a.Hc&&a.isConnected){let d;null==(d=this.YB)||d.call(this)}}YB(){Array.isArray(this.rules)||(this.rules=[this.rules]);this.rules.forEach(}QJ(){for(const a of this.Sm.keys())if(this.Sm.has(a)){const b=this.Sm.get(a);b.sK.removeEventListener("change",b.Kj)}this.Sm.clear()}};var joa=[(0,_ds.r)`aria-`,(0,_ds.r)`data-`,(0,_ds.r)`type`,(0,_ds.r)`role`],koa=class extends _ds.Kw{date(a,[b]){for(const d of b){var c=d.split("=");const e=c[0];c=c[1];void 0===c&&(c="");_ds.ze(joa,a.element,e,c)}return this.render(b)}},loa=_ds.Jw(koa);var v1=_ds.fw(['.cws-accordion-panel__block .cws-accordion-panel__header,.cws-accordion__heading{border-bottom:3px solid #e8eaed;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox}:host{min-width:318px}.cws-accordion__heading{-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:12px}.cws-accordion__heading p{margin:12px 0}.cws-accordion__expand{margin-left:auto}.cws-accordion-panel__block{width:100%}.cws-accordion-panel__block .cws-icon{font:20px/1 Material Icons;-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga";font-feature-settings:"liga";margin-right:8px;text-rendering:optimizeLegibility;text-transform:none;word-wrap:normal}.cws-accordion-panel__block .cws-accordion-panel__header{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:#1a73e8;cursor:pointer;display:flex;line-height:28px;outline:0;padding:24px 0;width:100%}.cws-accordion-panel__block .cws-accordion-panel__header .cws-headline--headline-5,.cws-accordion-panel__block .cws-accordion-panel__header .cws-icon{color:inherit}.cws-accordion-panel__block .cws-accordion-panel__header:focus,.cws-accordion-panel__block .cws-accordion-panel__header:focus-visible,.cws-accordion-panel__block .cws-accordion-panel__header:hover{color:#174ea6}.cws-accordion-panel__block .cws-accordion-panel__header:active,.cws-accordion-panel__block .cws-accordion-panel__header:focus,.cws-accordion-panel__block .cws-accordion-panel__header:focus-visible{border-bottom:3px solid #174ea6}.cws-accordion-panel__block .cws-accordion-panel__header:after{content:"keyboard_arrow_down";font:30px/1 Material Icons;-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga";font-feature-settings:"liga";margin-left:auto;text-rendering:optimizeLegibility;text-transform:none;word-wrap:normal}.cws-accordion-panel__block .cws-accordion-panel__content{display:none}.cws-accordion-panel__block--active .cws-accordion-panel__header:after{content:"keyboard_arrow_up"}.cws-accordion-panel__block--active .cws-accordion-panel__content{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:3px solid #f1f3f4;display:block}.cws-accordion-panel__block--active .cws-accordion-panel__content-wrapper{-moz-box-sizing:border-box;box-sizing:border-box;margin:var(--cws-accordion-panel-spacer,36px) 0}']);var moa=new Map([["arrow_drop_down",(0,_ds.Q)`
  <svg class="cws-icon" xmlns="http://www.w3.org/2000/svg" height="18">
    <path d="m9 11-5-5h10Z" />
  </svg>
`],["chat",(0,_ds.Q)`
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 1.5H3C2.175 1.5 1.5075 2.175 1.5075 3L1.5 16.5L4.5 13.5H15C15.825 13.5 16.5 12.825 16.5 12V3C16.5 2.175 15.825 1.5 15 1.5ZM15 12H3V3H15V12ZM10.5 9H4.5V10.5H10.5V9ZM4.5 6.75H13.5V8.25H4.5V6.75ZM13.5 4.5H4.5V6H13.5V4.5Z"
      fill="white" />
  </svg>
`],["download",(0,_ds.Q)`
  <svg
    class="cws-icon"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg">
    <path d="m0 0h24v24h-24z" fill="none" />
    <path
      d="m4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2h-12c-1.1 0-2-.9-2-2m11.59-8.41-2.59 2.58v-8.17h-2v8.17l-2.59-2.58-1.41 1.41 5 5 5-5z" />
  </svg>
`],["jump",(0,_ds.Q)`
  <svg
    class="cws-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </svg>
`],["new_tab",(0,_ds.Q)`
  <svg
    class="cws-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="18px"
    viewBox="0 0 24 24"
    width="18px">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
`],["next",(0,_ds.Q)`
  <svg
    class="cws-icon"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg">
    <path d="m0 0h24v24h-24z" fill="none" />
    <path d="m7.59 18.59 1.41 1.41 8-8-8-8-1.41 1.41 6.58 6.59" />
  </svg>
`],["pdf",(0,_ds.Q)`
  <svg
    class="cws-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="18px"
    viewBox="0 0 24 24"
    width="18px">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M7 11.5h1v-1H7v1zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5V9H8c.83 0 1.5.67 1.5 1.5v1zm10-1H17v1h1.5V13H17v2h-1.5V9h4v1.5zm-5 3c0 .83-.67 1.5-1.5 1.5h-2.5V9H13c.83 0 1.5.67 1.5 1.5v3zm-2.5 0h1v-3h-1v3z" />
  </svg>
`],["phone",(0,_ds.Q)`
  <svg
    class="cws-icon"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg">
    <path d="m0 0h24v24h-24z" fill="none" />
    <path
      d="m16.01 14.46-2.62 2.62c-2.75-1.49-5.01-3.75-6.5-6.5l2.62-2.62c.24-.24.34-.58.27-.9l-.65-3.26c-.09-.46-.5-.8-.98-.8h-4.15c-.56 0-1.03.47-1 1.03.17 2.91 1.04 5.63 2.43 8.01 1.57 2.69 3.81 4.93 6.5 6.5 2.38 1.39 5.1 2.26 8.01 2.43.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.26-.65c-.33-.07-.67.04-.9.27z" />
  </svg>
`],["unfold_less",(0,_ds.Q)`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="18px"
    width="18px"
    fill="#1A73E8">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" />
  </svg>
`],["unfold_more",(0,_ds.Q)`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="18px"
    width="18px"
    fill="#1A73E8">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" />
  </svg>
`],["video",(0,_ds.Q)`
  <svg
    class="cws-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="18px"
    viewBox="0 0 24 24"
    width="18px">
    <path
      d="M23.74 7.1s-.23-1.65-.95-2.37c-.91-.96-1.93-.96-2.4-1.02C17.04 3.47 12 3.5 12 3.5s-5.02-.03-8.37.21c-.46.06-1.48.06-2.39 1.02C.52 5.45.28 7.1.28 7.1S.04 9.05 0 10.98V13c.04 1.94.28 3.87.28 3.87s.24 1.65.96 2.38c.91.95 2.1.92 2.64 1.02 1.88.18 7.91.22 8.12.22 0 0 5.05.01 8.4-.23.46-.06 1.48-.06 2.39-1.02.72-.72.96-2.37.96-2.37s.24-1.94.25-3.87v-2.02c-.02-1.93-.26-3.88-.26-3.88zM9.57 15.5V8.49L16 12.13 9.57 15.5z" />
  </svg>
`]]),w1=function(a){return{"cws-button":!0,"cws-button--high-emphasis":"high-emphasis"===a.fillType,"cws-button--medium-emphasis":"medium-emphasis"===a.fillType,"cws-button--low-emphasis":"low-emphasis"===a.fillType,"cws-button--support":"support"===a.fillType,"cws-button--tonal":"tonal"===a.fillType,"cws-button--reversed":a.reversed&&!a.alternate,"cws-button--reversed-alternate":a.reversed&&a.alternate,"cws-button--icon-left":a.g,"cws-button--icon-right":a.h,"cws-button--align-left":a.textLeftAligned,
"cws-button--full-width":a.isFullWidth,"cloud-smooth-scroll":a.hasSmoothScroll}},x1=function(a){const b=(0,_ds.Q)`
      ${a.icon?(0,_ds.Q)` <span class="cws-button--icon">
            ${moa.get(a.icon)}
          </span>`:""}
    `;return(0,_ds.Q)`
      ${a.g?(0,_ds.Q)`${b}`:""} ${a.displayText}
      ${a.h?(0,_ds.Q)`${b}`:""}
    `},noa=function(a){const b=a.standardAttributes?loa(a.standardAttributes):(0,_ds.Q)``;return(0,_ds.Q)`
      <button
        type="button"
        class="${(0,_ds.Lw)(w1(a))}"
        ?disabled="${a.disabled}"
        track="${(0,_ds.nt)(a.getContext())}"
        @click="${_ds.zt(a.clickFn,}"
        ${b}>
        ${x1(a)}
      </button>
    `},aoa=class extends eoa{constructor(a,b={}){super();this.displayText="";this.fillType="high-emphasis";this.isFullWidth=this.textLeftAligned=this.hasSmoothScroll=this.iconAfter=this.alternate=this.reversed=this.disabled=!1;this.j={type:"button"};coa(this,a);doa(this,b);this.g=!!this.icon&&!this.iconAfter;this.h=!!this.icon&&this.iconAfter}getContext(){const a=_ds.Is(this.context,{name:this.displayText,metadata:{modifier:this.fillType}});this.href&&"string"===typeof this.href&&(a.metadata.eventDetail=
this.href);this.reversed&&(a.metadata.modifier+="-reversed");this.alternate&&(a.metadata.modifier+="-alternate");this.icon&&(a.metadata.icon=this.icon.replace("_"," "));return a}ender(){if(this.href){if(null==this.href)var a=null;else a="string"===typeof this.href?(0,_ds.Vaa)(this.href):this.href,a=(0,_ds.Q)`
      <a
        class="${(0,_ds.Lw)(w1(this))}"
        href="${a}"
        track="${(0,_ds.nt)(this.getContext())}">
        ${x1(this)}
      </a>
    `;a=(0,_ds.Q)`${a}`}else a=(0,_ds.Q)`${noa(this)}`;return(0,_ds.Q)`
      ${a}
    `}};var y1=_ds.fw(['.cws-button--high-emphasis:active .mdc-elevation-overlay,.cws-button--high-emphasis:hover .mdc-elevation-overlay{opacity:0}.cws-button--align-left,.cws-button__set .cws-button + .cws-button--align-left{margin-left:-13px}.cws-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:16px;font-weight:500;letter-spacing:initial;line-height:20px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-radius:4px;border-style:solid;border-width:1px;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:48px;min-width:auto;padding:13px 24px 12px;position:relative;text-align:left;text-decoration:none;text-transform:none;-webkit-transition:background-color .2s,box-shadow .2s,color .2s;transition:background-color .2s,box-shadow .2s,color .2s;vertical-align:inherit}.cws-button:focus{outline:0;text-decoration:none;-webkit-transition:none;transition:none}.cws-button[disabled],.cws-button[disabled]:active,.cws-button[disabled]:focus,.cws-button[disabled]:hover{border-color:transparent;box-shadow:none;cursor:default}.cws-button--high-emphasis{background-color:#1a73e8;border-color:transparent;color:#fff}.cws-button--high-emphasis[disabled],.cws-button--high-emphasis[disabled]:active,.cws-button--high-emphasis[disabled]:focus,.cws-button--high-emphasis[disabled]:hover{background-color:#f8f9fa;color:#9aa0a6}.cws-button--high-emphasis:active,.cws-button--high-emphasis:focus,.cws-button--high-emphasis:hover{background-color:#185abc;color:#fff}.cws-button--high-emphasis:hover{box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);border:1px solid #185abc}.cws-button--high-emphasis:focus{box-shadow:inset 0 0 0 1px #185abc,inset 0 0 0 2px #fff}.cws-button--high-emphasis:active{box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);border:1px solid #185abc}.cws-button--medium-emphasis{background-color:#fff;border-color:#dadce0;color:#1a73e8;z-index:1}.cws-button--medium-emphasis[disabled],.cws-button--medium-emphasis[disabled]:active,.cws-button--medium-emphasis[disabled]:focus,.cws-button--medium-emphasis[disabled]:hover{background-color:#f8f9fa;border-color:#dadce0;color:#9aa0a6}.cws-button--medium-emphasis[disabled]:active:after,.cws-button--medium-emphasis[disabled]:after,.cws-button--medium-emphasis[disabled]:focus:after,.cws-button--medium-emphasis[disabled]:hover:after{content:none}.cws-button--medium-emphasis:active,.cws-button--medium-emphasis:focus,.cws-button--medium-emphasis:hover{background-color:#fff;border-color:#1a73e8;color:#174ea6}.cws-button--medium-emphasis:active:after,.cws-button--medium-emphasis:focus:after,.cws-button--medium-emphasis:hover:after{background-color:#1a73e8;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:-1}.cws-button--medium-emphasis:hover:after{opacity:.04}.cws-button--medium-emphasis:focus{box-shadow:inset 0 0 0 1px #1a73e8}.cws-button--medium-emphasis:focus:after{opacity:.12}.cws-button--medium-emphasis:active{box-shadow:none}.cws-button--medium-emphasis:active:after{opacity:.1}.cws-button--medium-emphasis.cws-button--reversed:not(:hover):not(:focus):not(:active):not([disabled]){background-color:transparent;border-color:#fff;color:#fff}.cws-button--medium-emphasis.cws-button--reversed[disabled],.cws-button--medium-emphasis.cws-button--reversed[disabled]:active,.cws-button--medium-emphasis.cws-button--reversed[disabled]:focus,.cws-button--medium-emphasis.cws-button--reversed[disabled]:hover{background-color:transparent}.cws-button--low-emphasis{background-color:transparent;border-color:transparent;color:#1a73e8;padding-left:12px;padding-right:12px;z-index:1}.cws-button--low-emphasis[disabled],.cws-button--low-emphasis[disabled]:active,.cws-button--low-emphasis[disabled]:focus,.cws-button--low-emphasis[disabled]:hover{background-color:transparent;border-color:transparent;color:#9aa0a6}.cws-button--low-emphasis[disabled]:active:after,.cws-button--low-emphasis[disabled]:after,.cws-button--low-emphasis[disabled]:focus:after,.cws-button--low-emphasis[disabled]:hover:after{content:none}.cws-button--low-emphasis:active,.cws-button--low-emphasis:focus,.cws-button--low-emphasis:hover{background-color:transparent;color:#174ea6}.cws-button--low-emphasis:active:after,.cws-button--low-emphasis:focus:after,.cws-button--low-emphasis:hover:after{background-color:#1a73e8;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:-1}.cws-button--low-emphasis.cws-button--reversed-alternate:active,.cws-button--low-emphasis.cws-button--reversed-alternate:focus,.cws-button--low-emphasis.cws-button--reversed-alternate:hover,.cws-button--low-emphasis.cws-button--reversed:active,.cws-button--low-emphasis.cws-button--reversed:focus,.cws-button--low-emphasis.cws-button--reversed:hover,.cws-button--support{background-color:#fff}.cws-button--low-emphasis:hover:after{opacity:.04}.cws-button--low-emphasis:focus{border-color:#1a73e8;box-shadow:inset 0 0 0 1px #1a73e8}.cws-button--low-emphasis:focus:after{opacity:.12}.cws-button--low-emphasis:active:after{opacity:.1}.cws-button--low-emphasis.cws-button--icon-left{padding-left:8px;padding-right:12px}.cws-button--low-emphasis.cws-button--icon-right{padding-left:12px;padding-right:8px}.cws-button--low-emphasis.cws-button--reversed:not(:hover):not(:focus):not(:active):not([disabled]){color:#8ab4f8}.cws-button--low-emphasis.cws-button--reversed-alternate:not(:hover):not(:focus):not(:active):not([disabled]){color:#fff}.cws-button--support{border-color:#dadce0;color:#202124;z-index:1}.cws-button--support[disabled],.cws-button--support[disabled]:active,.cws-button--support[disabled]:focus,.cws-button--support[disabled]:hover{background-color:#f8f9fa;border-color:#dadce0;color:#9aa0a6}.cws-button--support[disabled]:active:after,.cws-button--support[disabled]:after,.cws-button--support[disabled]:focus:after,.cws-button--support[disabled]:hover:after{content:none}.cws-button--support:active,.cws-button--support:focus,.cws-button--support:hover{background-color:#fff;border-color:#202124;color:#202124}.cws-button--support:active:after,.cws-button--support:focus:after,.cws-button--support:hover:after{background-color:#202124;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:-1}.cws-button--support:hover:after{opacity:.04}.cws-button--support:focus{box-shadow:inset 0 0 0 1px #202124}.cws-button--support:focus:after{opacity:.12}.cws-button--support:active{box-shadow:none}.cws-button--support:active:after{opacity:.1}.cws-button--tonal{background-color:#e8f0fe;border-color:transparent;color:#1967d2}.cws-button--tonal[disabled],.cws-button--tonal[disabled]:active,.cws-button--tonal[disabled]:focus,.cws-button--tonal[disabled]:hover{background-color:#f8f9fa;border-color:transparent;color:#9aa0a6}.cws-button--tonal[disabled]:active:after,.cws-button--tonal[disabled]:after,.cws-button--tonal[disabled]:focus:after,.cws-button--tonal[disabled]:hover:after{content:none}.cws-button--tonal:active,.cws-button--tonal:focus,.cws-button--tonal:hover{background-color:#e8f0fe;color:#174ea6}.cws-button--tonal:active:after,.cws-button--tonal:focus:after,.cws-button--tonal:hover:after{background-color:#1967d2;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:0}.cws-button--tonal:hover{box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);border:1px solid transparent}.cws-button--tonal:hover .mdc-elevation-overlay{opacity:0}.cws-button--tonal:hover:after{opacity:.04}.cws-button--tonal:focus{border:1px solid #1a73e8;box-shadow:inset 0 0 0 1px #1a73e8}.cws-button--tonal:focus:after{opacity:.12}.cws-button--tonal:active{box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);border:1px solid transparent}.cws-button--tonal:active .mdc-elevation-overlay{opacity:0}.cws-button--tonal:active:after{opacity:.1}.cws-button--icon{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex}.cws-button--icon svg{fill:currentColor;height:18px;width:18px}.cws-button--icon-left{padding-left:12px;padding-right:16px}.cws-button--icon-left .cws-button--icon{margin-right:8px}.cws-button--icon-right{padding-left:16px;padding-right:12px}.cws-button--icon-right .cws-button--icon{margin-left:8px}.cws-button--full-width{width:100%}.cws-button + .cws-button{margin-left:16px}@media (max-width:450px){.cws-button{width:100%}}.cws-button__set{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:16px}.cws-button__set .cws-button + .cws-button:not(.cws-button--align-left){margin-left:0}.cws-button__set .cws-button--align-left{margin-right:16px}.cws-button__set--with-margin{margin-top:24px}.cws-button__set--centered{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}']);var z1=class extends _ds.Dw{constructor(){super(...arguments);this.icon=this.panelTitle="";this.open=!1;this.h=`panel-${_ds.jk()}`;this.cloudtrack=new _ds.NA}async g(){this.open=!this.open;await this.fb;this.dispatchEvent(new CustomEvent("cws-accordion-panel-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}}));this.cloudtrack.g({type:"accordion",name:this.panelTitle});_ds.HA(this.cloudtrack,"interaction",{component:"accordion",text:this.panelTitle})}f(){return(0,_ds.Q)`<span class="cws-icon" aria-hidden="true">${this.icon}</span>`}render(){return this.panelTitle?
(0,_ds.Q)`
      <div class="${(0,_ds.Lw)({"cws-accordion-panel__block":!0,"cws-accordion-panel__block--active":this.open})}">
        <span
          class="cws-accordion-panel__header"
          role="button"
          @click=${this.g}
          @keypress=${this.j}
          tabindex="0"
          aria-controls="${this.h}"
          aria-expanded="${this.open}">
          ${this.icon?this.Jf():""}
          <h4 class="cws-accordion-panel__text cws-headline--headline-5">
            ${this.panelTitle}
          </h4>
        </span>
        <div class="cws-accordion-panel__content" id="${this.h}">
          <div class="cws-accordion-panel__content-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    `:(0,_ds.Q)``}};z1.styles=[_ds.HJ,v1];_ds.u([_ds.J({type:String,Ca:"panel-title"}),_ds.v("design:type",String)],z1.prototype,"panelTitle",void 0);_ds.u([_ds.J({type:String,Ca:"icon"}),_ds.v("design:type",String)],z1.prototype,"icon",void 0);_ds.u([_ds.J({type:Boolean,Na:!0}),_ds.v("design:type",Object)],z1.prototype,"open",void 0);z1=_ds.u([_ds.vx("cws-accordion-panel")],z1);
var A1=class extends _ds.Dw{constructor(){super(...arguments);this.accordionTitle="";this.uf=this.expandAll=!1;this.cloudtrack=new _ds.NA}connectedCallback(){super.connectedCallback();this.addEventListener("cws-accordion-panel-toggle",this.g)}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("cws-accordion-panel-toggle",this.g)}h(){this.uf=!this.uf;for(const a of this.iA){let b;null!=(b=a)&&(b.open=this.uf)}this.cloudtrack.g({type:"button",name:this.uf?"Expandir todo":"Contraer todo"});
_ds.HA(this.cloudtrack,"interaction",{component:"button",text:this.uf?"Expandir todo":"Contraer todo"})}g(){this.uf=this.iA.every(}render(){return(0,_ds.Q)`
      ${this.accordionTitle||this.expandAll?(0,_ds.Q)`
      <div class="cws-accordion__heading">
        ${this.accordionTitle?(0,_ds.Q)`<p class="cws-eyebrow"> ${this.accordionTitle} </p>`:(0,_ds.Q)``}
        ${this.expandAll?(0,_ds.Q)`
      <span class="cws-accordion__expand" @click="${this.h}">
        ${t1({displayText:this.uf?"Contraer todo":"Expandir todo",fillType:"low-emphasis",icon:this.uf?"unfold_less":"unfold_more",iconAfter:!0,standardAttributes:["aria-label=Activar o desactivar todo",`aria-expanded=${this.uf}`]})}
      </span>
    `:""}
      </div>
    `:""}
      <slot name="panel"></slot>
    `}};A1.styles=[_ds.HJ,v1,y1];_ds.u([_ds.J({type:String,Ca:"accordion-title"}),_ds.v("design:type",String)],A1.prototype,"accordionTitle",void 0);_ds.u([_ds.J({type:Boolean,Ca:"expand-all"}),_ds.v("design:type",Object)],A1.prototype,"expandAll",void 0);_ds.u([_ds.rq({slot:"panel",An:"cws-accordion-panel"}),_ds.v("design:type",Array)],A1.prototype,"iA",void 0);_ds.u([_ds.K(),_ds.v("design:type",Object)],A1.prototype,"uf",void 0);A1=_ds.u([_ds.vx("cws-accordion")],A1);var poa=function(a){a.j=new IntersectionObserver(b=>{let c,d=!1,e;for(const f of b)a.ea?f.boundingClientRect.top<=B1(a)&&(e=f.target,d=!0):(c=window.scrollY>=a.ya?"down":"up",a.ya=window.scrollY,e="up"===c?ooa(a,f):f.target,"down"===c&&f.isIntersecting?d=!0:"up"!==c||f.isIntersecting||(d=!0)),d&&e&&C1(a,e);a.ea&&(0===a.Jh.size&&C1(a,b[0].target),a.ea=!1)},{rootMargin:"0px 0px -75% 0px"});if(a.g.length&&a.j)for(const b of a.g)a.j.observe(b);a.h=new ResizeObserver(()=>{D1(a)});a.h.observe(a);a.h.observe(document.body)},
qoa=function(a){a.eventHandler.listen(document,"click",b=>{b.target!==a&&a.open&&a.fd()});a.eventHandler.listen(document,"cws-header-height-change",;a.eventHandler.listen(document,"cws-footer-enter",b=>{a.ra=b.Ha.detail.hB.target;a.wq=!0;E1(a);a.v=_ds.Th(document,"scroll",});a.eventHandler.listen(document,"cws-footer-leave",()=>{a.wq=!1;a.v&&(_ds.ai(a.v),a.v=null)})},roa=function(a){a.Ap=16;a.Sl=32;a.Po=!1;a.oa=_ds.Th(window,"scroll",{passive:!0});
a.m.ib()},E1=function(a){if(a.ra&&a.wq){var b=a.ra.getBoundingClientRect();a.style.setProperty("--cws-js-bottom-offset",`${Math.max(0,window.innerHeight-b.top)}px`)}},D1=function(a){E1(a);requestAnimationFrame(async()=>{var b=window.innerHeight;const c=a.Lu.getBoundingClientRect().top;b=b-c-a.Ap;a.Lu.style.maxHeight=0<b?`${b}px`:"0"})},B1=function(a){const b=null==a.xs?void 0:u1();return"large"===b||"xl"===b?a.Vn+a.Sl:a.Vn+a.Sl+72},ooa=function(a,b){const c=a.g.findIndex(;return 0===
c?b.target:a.g[c-1]},C1=function(a,b){const c=b.parentNode.closest(".cws-jump-section");a.Jh.clear();a.Jh.add(b.id);c&&a.Jh.add(c.id);_ds.yw(a)},F1=class extends _ds.Dw{constructor(){super(...arguments);this.label="";this.disableScroll=this.attached=this.open=!1;this.Vn=65;this.Sl=32;this.Ap=0;this.wq=this.Po=!1;this.Jh=new Set;this.ya=0;this.ea=!0;this.xa=[];this.g=[];this.eventHandler=new _ds.G;this.m=new _ds.An(()=>{this.lM.getBoundingClientRect().top<this.Vn?this.attached=!0:this.attached=!1},
10);this.Da={type:"jump menu",metadata:{position:"jump menu"}};this.cloudtrack=new _ds.NA}connectedCallback(){super.connectedCallback();this.g=[...document.querySelectorAll(".cws-jump-section")];if(this.g.length){if(this.g.length)for(const b of this.g){const c=b.dataset.cwsMenuText||b.textContent;if(!c)break;const d="cwsIsSubSection"in b.dataset;if(b.id)var a=b.id;else{a=1;let e=`section-${a}`;for(;document.getElementById(e);)e=`section-${a++}`;a=b.id=e}a=$na(a);this.xa.push({rC:c,dw:d,Fw:a})}poa(this);
qoa(this)}}disconnectedCallback(){super.disconnectedCallback();_ds.H(this.eventHandler);this.j&&this.j.disconnect();this.h&&this.h.disconnect()}eb(){this.xs=new ioa(this,{media:"(min-width: 1024px)",iJ:()=>{this.oa&&(this.m.stop(),_ds.ai(this.oa),this.oa=null);this.attached=!1;this.Ap=0;this.Sl=24;this.Po=!0;this.Lu.style.maxHeight="";this.open&&this.fd()},lK:)}e(){D1(this);this.open=!0;document.body.setAttribute("no-scroll","")}fd(){this.open=
!1;document.body.hasAttribute("no-scroll")&&document.body.removeAttribute("no-scroll")}Fa(a){a.preventDefault();this.fd();var b=a.target;a=b.hash;var c=document.querySelector(`#${a.substring(1)}`);if(c){var d=_ds.xk(document).y,e=c.getBoundingClientRect().top,f=B1(this),g=null==this.xs?void 0:u1(),h=!0;if(this.disableScroll||"medium"===g||"small"===g)h=!1;window.scrollTo({top:d+e-f,behavior:h?"smooth":"auto"});h||this.Jh.has(a)||C1(this,c);c=b.getAttribute("track-type")||"";d=b.getAttribute("track-name")||
"";b=b.getAttribute("track-metadata-eventdetail")||"";this.cloudtrack.g({type:c,name:d,metadata:{eventDetail:b}});_ds.HA(this.cloudtrack,"interaction",{component:"jump menu",text:d,destination:b});window.history.pushState({path:a},"",a)}}render(){const a=(0,_ds.Lw)({"cws-navigation-rail":!0,"cws-navigation-rail--fixed":this.Po});return(0,_ds.Q)`
      <span class="cws-sticky-sentinel"></span>
      <div class="cws-navigation-rail__wrapper">
        <nav class="${a}" aria-label="${this.label}">
          <button
            @click="${this.Ea}"
            aria-expanded="${this.open}"
            aria-controls="jump-menu-list"
            class="cws-navigation-rail__toggle">
            ${this.label}
            <span class="cws-navigation-rail__toggle--icon" aria-hidden="true">
              ${boa}
            </span>
          </button>

          <div class="cws-navigation-rail__content">
            <div class="cws-jump-menu">
              <ul class="cws-jump-menu__items" id="jump-menu-list">
                ${this.xa.map(b=>{const c=(0,_ds.Lw)({"cws-jump-menu__item-secondary":b.dw}),d=(0,_ds.Lw)({"cws-jump-menu__link-primary":!b.dw,"cws-jump-menu__link-secondary":b.dw,"cws-jump-menu__link--active":this.Jh.has(b.Fw)}),e=_ds.Is(this.Da,{name:b.rC.toLowerCase(),metadata:{eventDetail:b.Fw}});return(0,_ds.Q)`
      <li class="cws-jump-menu__item ${c}">
        <a
          class="cws-jump-menu__link ${d}"
          href="#${b.Fw}"
          track="${(0,_ds.nt)(e)}"
          @click="${this.Fa}">
          ${b.rC}
        </a>
      </li>
    `})}
              </ul>
            </div>
            <slot></slot>
          </div>
        </nav>
      </div>
    `}};F1.styles=[_ds.HJ,_ds.fw(['.cws-jump-menu__link-primary,.cws-navigation-rail__toggle{font-family:Google Sans,Roboto,Arial,sans-serif;letter-spacing:normal;font-size:14px}:root{--cws-js-bottom-offset:0;--cws-jump-menu-page-offset:16px}:host{display:block}:host(:focus-visible){outline:0}:host([open]) .cws-navigation-rail__toggle--icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host([open]) .cws-navigation-rail__toggle:hover{color:#174ea6}:host([open]) .cws-navigation-rail__toggle:hover .cws-navigation-rail__toggle--icon .cws-icon{fill:#174ea6}:host([open]) .cws-navigation-rail__toggle:focus .cws-navigation-rail__toggle--icon{border-color:#1a73e8}:host([open]) .cws-navigation-rail__toggle:focus .cws-navigation-rail__toggle--icon .cws-icon{fill:#174ea6}:host([open]) .cws-navigation-rail__content{display:block}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):hover{border-width:0;box-shadow:0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):hover .mdc-elevation-overlay{opacity:0}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):hover .cws-navigation-rail__toggle{background-color:rgba(60,64,67,.04)}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed) .cws-navigation-rail__toggle:focus-visible:before{border-radius:28px;bottom:0;box-shadow:inset 0 0 0 2px #1a73e8;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):active{border-width:0;box-shadow:0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):active .mdc-elevation-overlay{opacity:0}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):active .cws-navigation-rail__toggle{background-color:rgba(60,64,67,.1)}:host([attached]) .cws-navigation-rail{left:16px;position:fixed;right:16px;top:var(--cws-js-top-offset-height,65px);width:calc(100% - 32px)}::slotted(.cws-jump-menu__slot-content){border-top:1px solid #dadce0}.cws-sticky-sentinel{left:0;min-height:72px;pointer-events:none;position:absolute;width:100%}.cws-navigation-rail{border-width:0;box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);background:#fff;border-radius:28px;-moz-box-sizing:border-box;box-sizing:border-box;left:var(--cws-jump-menu-page-offset,16px);margin-top:16px;min-height:56px;overflow-y:auto;position:absolute;right:var(--cws-jump-menu-page-offset,16px);z-index:10}.cws-navigation-rail .mdc-elevation-overlay{opacity:0}.cws-navigation-rail__toggle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;margin:0;overflow-wrap:normal;word-wrap:normal;font-weight:500;line-height:24px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;border:none;color:#3c4043;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;outline:0;padding:16px 24px;width:100%}.cws-jump-menu__link-primary,.cws-jump-menu__link-secondary{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;line-height:20px;font-weight:500}.cws-navigation-rail__toggle--icon{border-radius:3px;border:2px solid transparent;-moz-box-sizing:border-box;box-sizing:border-box;height:24px;margin-left:auto;width:24px}.cws-navigation-rail__toggle .cws-icon{fill:#1a73e8;margin-left:-2px;margin-top:-2px}.cws-navigation-rail__toggle:active,.cws-navigation-rail__toggle:focus,.cws-navigation-rail__toggle:hover{color:#202124}.cws-navigation-rail__content{display:none;padding:0 24px 16px}@media (min-width:1024px){.cws-sticky-sentinel{position:relative}.cws-navigation-rail__toggle{display:none}.cws-navigation-rail{border-radius:0;border-right:1px solid #dadce0;bottom:var(--cws-js-bottom-offset,0);box-shadow:none;left:0;margin-top:0;min-height:0;overflow-y:auto;position:fixed;right:auto;top:var(--cws-js-top-offset-height,65px);width:221px}.cws-navigation-rail__content{display:block;padding-left:16px;padding-right:16px}.cws-navigation-rail__wrapper{bottom:0;left:0;position:fixed;width:220px}.cws-navigation-rail__wrapper:after{background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(#fff));background:-webkit-linear-gradient(hsla(0,0%,100%,0),#fff);background:linear-gradient(hsla(0,0%,100%,0),#fff);bottom:var(--cws-js-bottom-offset,0);content:"";height:36px;left:0;pointer-events:none;position:absolute;right:0;z-index:11}}@media (min-width:1024px) and (min-width:1440px){.cws-navigation-rail__wrapper{width:234px}}@media (min-width:1440px){.cws-navigation-rail{width:235px}}.cws-jump-menu{margin:0 -16px}.cws-jump-menu__items{list-style:none;margin:0;padding:0}.cws-jump-menu__items-nested{margin-top:8px;padding-left:16px}.cws-jump-menu__item{margin-top:8px}.cws-jump-menu__item:first-child{margin-top:0}.cws-jump-menu__item-secondary{border-left:2px solid #dadce0;margin-left:16px}.cws-jump-menu__item-secondary~.cws-jump-menu__item-secondary{margin-top:0;padding-top:20px}.cws-jump-menu__link{-moz-box-sizing:border-box;box-sizing:border-box;color:#5f6368;display:block;text-decoration:none;position:relative}.cws-jump-menu__link:focus-visible{outline:0}.cws-jump-menu__link:active,.cws-jump-menu__link:focus-visible,.cws-jump-menu__link:hover{background-color:#e8f0fe;color:#174ea6}.cws-jump-menu__link:active:after,.cws-jump-menu__link:focus-visible:after,.cws-jump-menu__link:hover:after{background-color:#1a73e8;border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0}.cws-jump-menu__link:hover:after{opacity:.04}.cws-jump-menu__link:focus-visible:after{opacity:.12}.cws-jump-menu__link:active:after{opacity:.1}.cws-jump-menu__link-primary{border-radius:18px;color:#5f6368;min-height:36px;padding:8px 16px;width:100%}.cws-jump-menu__link-primary.cws-jump-menu__link--active{background-color:#e8f0fe;color:#174ea6}.cws-jump-menu__link-primary:focus-visible{box-shadow:inset 0 0 0 2px #174ea6}.cws-jump-menu__link-secondary{color:#5f6368;font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:12px;letter-spacing:.2px;border-radius:4px;margin-left:16px}.cws-jump-menu__link-secondary.cws-jump-menu__link--active{color:#1a73e8}.cws-jump-menu__link-secondary.cws-jump-menu__link--active:before{background:#1a73e8;bottom:0;content:"";left:-18px;position:absolute;top:0;width:2px}@media (min-width:1024px){.cws-jump-menu{margin:0}.cws-jump-menu__item:first-child{margin-top:24px}}'])];
_ds.u([_ds.tq(".cws-sticky-sentinel"),_ds.v("design:type",HTMLElement)],F1.prototype,"lM",void 0);_ds.u([_ds.tq(".cws-navigation-rail"),_ds.v("design:type",HTMLElement)],F1.prototype,"Lu",void 0);_ds.u([_ds.J({type:String}),_ds.v("design:type",Object)],F1.prototype,"label",void 0);_ds.u([_ds.J({type:Boolean,Na:!0}),_ds.v("design:type",Object)],F1.prototype,"open",void 0);_ds.u([_ds.J({type:Boolean,Na:!0}),_ds.v("design:type",Object)],F1.prototype,"attached",void 0);
_ds.u([_ds.J({type:Boolean,Ca:"disable-scroll"}),_ds.v("design:type",Object)],F1.prototype,"disableScroll",void 0);_ds.u([_ds.K(),_ds.v("design:type",Object)],F1.prototype,"Vn",void 0);_ds.u([_ds.K(),_ds.v("design:type",Object)],F1.prototype,"Sl",void 0);_ds.u([_ds.K(),_ds.v("design:type",Object)],F1.prototype,"Ap",void 0);_ds.u([_ds.K(),_ds.v("design:type",Object)],F1.prototype,"Po",void 0);_ds.u([_ds.K(),_ds.v("design:type",Object)],F1.prototype,"wq",void 0);
_ds.u([_ds.K(),_ds.v("design:type",Object)],F1.prototype,"Jh",void 0);F1=_ds.u([_ds.vx("cws-jump-menu")],F1);var soa=function(a){return a.Jr?(0,_ds.Q)`<div class="cws-reveal__controls">
      ${t1({clickFn:()=>{const b=a.querySelectorAll(".cws-hidden");for(const c of b)c.classList.remove("cws-hidden"),c.setAttribute("aria-hidden","false");a.Jr=!1;a.cloudtrack.g({type:"button",name:a.label});_ds.HA(a.cloudtrack,"interaction",{component:"button",text:a.label})},displayText:a.label,fillType:"support",icon:"arrow_drop_down",iconAfter:!0})}</div
    > `:_ds.mt},G1=class extends _ds.Dw{constructor(){super(...arguments);this.divider=!1;this.label="";this.maxItems=4;this.up=0;this.Jr=!1;this.cloudtrack=new _ds.NA}connectedCallback(){super.connectedCallback();const a=[...this.querySelectorAll(".cws-reveal-item")].slice(this.maxItems);if(a.length){for(const b of a)b.classList.add("cws-hidden"),b.setAttribute("aria-hidden","true");this.up=a.length}this.up&&(this.label||(this.label="Mostrar "+`${this.up}`+"\u00a0m\u00e1s"),this.Jr=!0)}render(){const a=
(0,_ds.Lw)({"cws-reveal":!0,"cws-reveal--divider":this.divider});return(0,_ds.Q)`<div class="${a}">
      <slot></slot>
      ${soa(this)}
    </div> `}};
G1.styles=[_ds.HJ,_ds.fw([':host{display:block}:host .cws-reveal .cws-button{width:100%}:host .cws-reveal__controls{background:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative}:host .cws-reveal--divider .cws-reveal__controls:before{border-top:1px solid #dadce0;content:"";position:absolute;top:50%;width:100vw}@media (min-width:600px){:host .cws-reveal .cws-button{width:auto}:host .cws-reveal--divider .cws-reveal__controls:before{width:100%}}']),y1];
_ds.u([_ds.J({type:Boolean}),_ds.v("design:type",Object)],G1.prototype,"divider",void 0);_ds.u([_ds.J({type:String}),_ds.v("design:type",Object)],G1.prototype,"label",void 0);_ds.u([_ds.J({type:Number}),_ds.v("design:type",Object)],G1.prototype,"maxItems",void 0);_ds.u([_ds.K(),_ds.v("design:type",Number)],G1.prototype,"up",void 0);_ds.u([_ds.K(),_ds.v("design:type",Boolean)],G1.prototype,"Jr",void 0);G1=_ds.u([_ds.vx("cws-reveal")],G1);var H1=_ds.fw([':root{--cws-tab-panel-spacer:36px}:host(cws-tab:focus-visible){outline:0}:host(cws-tab:active) .cws-tabs__navigation-text,:host(cws-tab:focus-within) .cws-tabs__navigation-text{background-color:#f1f3f4;color:#202124}:host(cws-tab:active) .cws-tabs__navigation-text:after,:host(cws-tab:focus-within) .cws-tabs__navigation-text:after{border-bottom:3px solid #174ea6}.cws-tabs__navigation{-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-bottom:3px solid #e8eaed;-moz-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:40px}.cws-tabs__navigation--centered{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.cws-tabs__page-title .cws-icon{font:20px/1 Material Icons;-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga";font-feature-settings:"liga";margin-right:8px;text-rendering:optimizeLegibility;text-transform:none;word-wrap:normal}.cws-tabs__page-title .cws-tabs__navigation-text{-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;-moz-box-sizing:border-box;box-sizing:border-box;color:#5f6368;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-bottom:21px;padding-top:24px;position:relative}.cws-tabs__page-title .cws-tabs__navigation-text--has-icon{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.cws-tabs__page-title .cws-tabs__navigation-text:after{bottom:-3px;content:"";left:0;position:absolute;right:0}.cws-tabs__page-title .cws-tabs__navigation-text:hover,.cws-tabs__page-title--active .cws-tabs__navigation-text{color:#202124}.cws-tabs__page-title--active .cws-tabs__navigation-text:after{border-bottom:3px solid #1a73e8}.cws-tab-panel{display:none}.cws-tab-panel--active{display:block;margin:var(--cws-tab-panel-spacer,36px) 0}']);var I1=class extends _ds.Dw{constructor(){super(...arguments);this.icon=this.tabTitle="";this.selected=!1;this.cloudtrack=new _ds.NA}connectedCallback(){super.connectedCallback();this.setAttribute("role","tab");this.hasAttribute("id")||(this.id=`tab-${_ds.jk()}`)}updated(a){a.has("selected")&&(this.setAttribute("aria-selected",`${this.selected}`),this.setAttribute("tabindex",this.selected?"0":"-1"))}Jf(a){return(0,_ds.Q)`<span class="cws-icon" aria-hidden="true">${a}</span>`}g(){this.cloudtrack.g({type:"tab",
name:this.tabTitle});_ds.HA(this.cloudtrack,"interaction",{component:"tab",text:this.tabTitle})}render(){const a={"cws-tabs__navigation-text":!0,"cws-tabs__navigation-text--has-icon":this.icon,"cws-headline--headline-6":!0};return(0,_ds.Q)`
      <span
        class="cws-tabs__page-title ${(0,_ds.Lw)({"cws-tabs__page-title--active":this.selected})}"
        @click=${this.g}>
        <h4 class="${(0,_ds.Lw)(a)}">
          ${this.icon?this.Jf(this.icon):""} ${this.tabTitle}
        </h4>
      </span>
    `}};I1.styles=[_ds.HJ,H1];_ds.u([_ds.J({type:String,Ca:"tab-title",Na:!0}),_ds.v("design:type",Object)],I1.prototype,"tabTitle",void 0);_ds.u([_ds.J({type:String,Ca:"icon",Na:!0}),_ds.v("design:type",Object)],I1.prototype,"icon",void 0);_ds.u([_ds.J({type:Boolean,Na:!0}),_ds.v("design:type",Object)],I1.prototype,"selected",void 0);I1=_ds.u([_ds.vx("cws-tab")],I1);
var J1=class extends _ds.Dw{constructor(){super(...arguments);this.selected=!1}connectedCallback(){super.connectedCallback();this.setAttribute("role","tabpanel");this.hasAttribute("id")||(this.id=`tabpanel-${_ds.jk()}`)}updated(a){a.has("selected")&&this.setAttribute("tabindex",this.selected?"0":"-1")}render(){const a=(0,_ds.Lw)({"cws-tab-panel--active":this.selected});return(0,_ds.Q)`
      <div class="cws-tab-panel ${a}">
        <slot></slot>
      </div>
    `}};J1.styles=[_ds.HJ,H1];_ds.u([_ds.J({type:Boolean,Na:!0}),_ds.v("design:type",Object)],J1.prototype,"selected",void 0);J1=_ds.u([_ds.vx("cws-tab-panel")],J1);
var toa=K1=function(a,b,c=!0){a.df.forEach(e=>{e.selected=!1});a.bD.forEach(;const d=b.getAttribute("aria-controls");a=a.querySelector(`#${d}`);b.selected=!0;c&&b.focus();a&&(a.selected=!0)},L1=class extends _ds.Dw{b(){if(this.df.length){this.g();var a,b=null!=(a=toa(this))?a:this.df[0];K1(this,b,!1)}}g(){for(const [a,b]of this.df.entries()){const c=b,d=this.bD[a];if(!d)break;c.setAttribute("aria-controls",
d.id);d.setAttribute("aria-labelledby",c.id)}}h(a){(a=a.target.closest("cws-tab"))&&K1(this,a)}j(a){if(a.target.closest("cws-tab")){var b=this.df.findIndex(;switch(a.key){case "ArrowLeft":b--;break;case "ArrowRight":b++;break;case "Home":b=0;break;case "End":b=this.df.length-1}0>b&&(b=this.df.length-1);b>=this.df.length&&(b=0);K1(this,this.df[b])}}render(){return(0,_ds.Q)`
      <div
        class="cws-tabs"
        @click="${this.h}"
        @keyup="${this.j}">
        <nav role="tablist" class="${(0,_ds.Lw)({"cws-tabs__navigation":!0,"cws-tabs__navigation--centered":this.centeredNav})}">
          <slot name="tab" @slotchange="${this.g}"></slot>
        </nav>

        <slot name="panel" @slotchange="${this.g}"></slot>
      </div>
    `}};L1.styles=[_ds.HJ,H1];_ds.u([_ds.J({type:Boolean,Ca:"centered-nav"}),_ds.v("design:type",Boolean)],L1.prototype,"centeredNav",void 0);_ds.u([_ds.rq({slot:"tab",An:"cws-tab"}),_ds.v("design:type",Array)],L1.prototype,"df",void 0);_ds.u([_ds.rq({slot:"panel",An:"cws-tab-panel"}),_ds.v("design:type",Array)],L1.prototype,"bD",void 0);L1=_ds.u([_ds.vx("cws-tabs")],L1);var M1=function(a,b,c=!0){const d=b.getAttribute("title")||b.getAttribute("data-title"),e=b.getAttribute("icon"),f=b.hasAttribute("open");a=a.getContent(b);b=document.createElement("div");for(const g of a)b.appendChild(g);return c?(0,_ds.Q)`
        <cws-tab
          slot="tab"
          tab-title="${_ds.aJ(d?d:"")}"
          icon="${_ds.aJ(e?e:void 0)}">
        </cws-tab>
        <cws-tab-panel slot="panel"> ${b} </cws-tab-panel>
      `:(0,_ds.Q)`
        <cws-accordion-panel
          slot="panel"
          panel-title="${_ds.aJ(d?d:"")}"
          icon="${_ds.aJ(e?e:void 0)}"
          ?open="${f}">
          ${b}
        </cws-accordion-panel>
      `},N1=class extends _ds.Dw{constructor(){super(...arguments);this.disableAccordion=this.centeredNav=!1;this.g=[]}onnectedCallback(){super.connectedCallback();this.g=[...this.querySelectorAll(".cws-tab-group")];if(this.g.length)for(const a of this.g)a.setAttribute("hidden","true")}getContent(a){return[...a.children].map(}render(){const a=(0,_ds.Lw)({"cws-tabs-group":!0,"cws-tabs-group--enable-accordion":!this.disableAccordion});return this.g.length?(0,_ds.Q)`
      <div class="${a}">
        <cws-tabs ?centered-nav=${this.centeredNav}>
          ${this.g.map(}
        </cws-tabs>
        <cws-accordion class="cws-tabs-group__accordion">
          ${this.g.map(b=>M1(this,b,!1))}
        </cws-accordion>
      </div>
    `:(0,_ds.Q)``}};_ds.u([_ds.J({type:Boolean,Ca:"centered-nav"}),_ds.v("design:type",Boolean)],N1.prototype,"centeredNav",void 0);_ds.u([_ds.J({type:Boolean,Ca:"disable-accordion"}),_ds.v("design:type",Boolean)],N1.prototype,"disableAccordion",void 0);N1=_ds.u([_ds.vx("cws-tabs-group")],N1);var voa=function(a){uoa(a);a.h.listen(window,"unload",},uoa=function(a){a.g.setAttribute("href","#");a.h.listen(a.g,"click",b=>{b.preventDefault();b=a.properties.hash;const c=document.querySelector(b);if(c){var d=a.j?a.j.getBoundingClientRect().bottom:0;_ds.FJ(c,d);_ds.bm(b)}})},woa=class{constructor(a){this.g=a;this.properties={hash:this.g.hash};this.j=null;this.h=new _ds.G;voa(this)};var xoa=async function(){await DevsiteApp.whenReady();var a=document.querySelectorAll(".cloud-smooth-scroll");if(0!==a.length){var b=document.querySelector(".devsite-header");for(const c of a)a=new woa(c),b&&(a.j=b)}},yoa=class extends _ds.Hw{connectedCallback(){super.connectedCallback();xoa()}};try{customElements.define("cloudx-utils-init",yoa)}catch(a){console.warn("devsite.app.customElement.CloudxUtilsInit",a)};})(_ds_www);
