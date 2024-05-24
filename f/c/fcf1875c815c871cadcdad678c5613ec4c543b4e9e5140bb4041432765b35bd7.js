(function(_ds){var window=this;var cua=_ds.fw([".icon-arrow,.icon-language{fill:var(--devsite-secondary-text-color)}:host{display:block;position:relative}*{-moz-box-sizing:border-box;box-sizing:border-box}[hidden]{display:none}button{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--devsite-select-background-color,var(--devsite-background-1));border:var(--devsite-select-border,var(--devsite-secondary-border));border-radius:var(--devsite-select-border-radius);box-shadow:none;color:var(--devsite-select-color,var(--devsite-primary-text-color));cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font:var(--devsite-select-font,500 14px/36px var(--devsite-primary-font-family));height:36px;max-width:154px;outline:0;padding-block:0;padding-inline:11px 7px;-webkit-transition:background-color .2s;transition:background-color .2s}button:is(:hover,:focus){background:var(--devsite-select-background-color-hover,var(--devsite-background-3))}.icon-arrow,.icon-language{block-size:24px;inline-size:24px;pointer-events:none}.icon-language{margin-inline:0 8px}.label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}[role=menu]{background:var(--devsite-background-1);border:var(--devsite-list-border,var(--devsite-secondary-border));border-radius:var(--devsite-list-border-radius,2px);box-shadow:0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);inset-inline:var(--devsite-language-selector-menu-inset-inline,0 auto);max-height:304px;overflow:hidden auto;padding:8px 0;position:absolute;top:36px;-webkit-transform:var(--devsite-language-selector-menu-transform);transform:var(--devsite-language-selector-menu-transform);z-index:1}"]);var i6=dua=async function(a){if(await a.storage.get("django_language","")){var b;const c=null==(b=a.querySelector("[aria-current]"))?void 0:b.textContent;c&&(a.ed=c)}else b=
await _ds.t(),await a.storage.set("django_language","",b.getLocale()||"en"),(a=a.querySelector('[lang="en"]'))&&_ds.ze([(0,_ds.r)`aria-`],a,"aria-current","true")},j6=async function(a){const b=await a.storage.get("django_language","");b&&await a.storage.set("language_preference","",b)},eua=fua=gua=async function(a,b){const c=b.target.getAttribute("lang");
c&&(b.stopPropagation(),await _ds.t(),await a.storage.set("django_language","",c),(b=document.documentElement.getAttribute("lang"))&&await fua(a,b,c),await j6(a),a=new URL(_ds.yk().location.toString()),a.searchParams.delete("hl"),_ds.Le(_ds.yk().location,_ds.qe(a.toString())))},k6=class extends _ds.Hw{constructor(){super(...arguments);this.eventHandler=new _ds.G;this.links=[];this.g=0;this.storage=new _ds.tp;this.ariaLabel="Selecciona tu preferencia de idioma.";this.open=!1;this.ed="Language"}sync eb(){i6(this);
try{await dua(this),await j6(this)}catch(a){}}ds.u([_ds.J({type:String,Ca:"aria-label",Na:!0}),_ds.v("design:type",Object)],k6.prototype,"ariaLabel",void 0);_ds.u([_ds.J({type:Boolean,Na:!0}),_ds.v("design:type",Object)],k6.prototype,"open",void 0);_ds.u([_ds.K(),_ds.v("design:type",Object)],k6.prototype,"ed",void 0);
_ds.u([_ds.tq("button"),_ds.v("design:type",HTMLButtonElement)],k6.prototype,"toggle",void 0);try{customElements.define("devsite-language-selector",k6)}catch(a){console.warn("devsite.app.customElement.DevsiteLanguageSelector",a)};})(_ds_www);