(function(_ds){var window=this;try{customElements.define("devsite-user",_ds.tT)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteUser",a)};})(_ds_www);
b.com android.com blogger.com blogspot.com chrome.com chromium.org domains.google doubleclick.com feedburner.com g.co ggpht.com gmail.com gmodules.com goo.gl google.com google.org googleapis.com googleapps.com googlecode.com googledrive.com googlemail.com googlesource.com googlesyndication.com googletagmanager.com googleusercontent.com gv.com keyhole.com madewithcode.com panoramio.com urchin.com withgoogle.com youtu.be youtube.com ytimg.com".split(" "),jda=
function(a){const b=Array.from(document.querySelectorAll(".devsite-article-body [title]"));for(const c of b){let d;c.setAttribute("data-title",null!=(d=c.getAttribute("title"))?d:"");c.removeAttribute("title")}if(a.hasAttribute("blocked-link")){a=Array.from(document.getElementsByTagName("a"));for(const c of a)if(a=c.getAttribute("href")){const d=(new URL(a,document.location.origin)).hostname.replace("www.","");!hda.some(e=>-1!==d.indexOf(e))&&ida.some(e=>-1!==d.indexOf(e))&&(c.setAttribute("data-title",
"Questo link potrebbe non essere accessibile nella tua regione."),c.removeAttribute("title"))}}},kda=function(a){a.eventHandler.listen(document.body,"devsite-content-updated",()=>{a.o.Ta()});a.eventHandler.listen(document.body,"onpointermove"in window?"pointermove":"mousemove",b=>{if(b=b.Ea.composedPath()){var c=!1,d=null;for(d of b)if(_ds.iq()(d)&&(c=V7(d)),c)break;d&&c?W7(a,d):X7(a)}});a.eventHandler.listen(document.body,"focusin",b=>{b=b.target;const c=b.firstElementChild;(b.classList.contains("devsite-nav-title")&&
c?V7(c):V7(b))?W7(a,b):X7(a)});a.eventHandler.listen(document.body,["devsite-sticky-scroll","devsite-sticky-resize"],()=>{X7(a)})},X7=function(a){if(a.h){a.h=null;var b=a.j;a.j=null;b&&(_ds.Ah(b,_ds.kh,()=>{_ds.Zj(b);_ds.Wj(b)}),window.setTimeout(()=>{_ds.Zj(b);_ds.Wj(b)},1E3),b.style.opacity="0")}},V7=function(a){return a.hasAttribute("no-tooltip")?!1:a.hasAttribute("data-title")||a.hasAttribute("data-tooltip")||a.hasAttribute("tooltip")&&a.clientWidth<a.scrollWidth},W7=function(a,b){if(a.h!==b){X7(a);
var c,d=b.getAttribute("data-tooltip")||b.getAttribute("data-title")||(null!=(c=b.textContent)?c:"").trim(),e=_ds.O(gda,{yx:d});e.style.opacity="0";document.body.appendChild(e);var f=_ds.Oj(),g=e.getBoundingClientRect(),{top:h,left:k,width:l,height:m}=b.getBoundingClientRect();c=h+m;c+g.height+4>f.height&&(c=h-g.height-16);d=k+l/2-g.width/2;g.width>f.width?d=0:(d=Math.max(d,4),f=f.width-(d+g.width+4),0>f&&(d+=f));e.style.top=`${c}px`;e.style.left=`${d}px`;a.h=b;a.j=e;window.requestAnimationFrame(()=>
{e.style.opacity="1"})}},lda=class extends _ds.mJ{constructor(){super();this.eventHandler=new _ds.H;this.j=this.h=null;this.o=new _ds.Bm(()=>void jda(this),250)}connectedCallback(){document.body.hasAttribute("touch")?_ds.Zj(this):(kda(this),this.o.Ta())}disconnectedCallback(){super.disconnectedCallback();_ds.I(this.eventHandler)}};try{customElements.define("devsite-tooltip",lda)}catch(a){console.warn("devsite.app.customElement.DevsiteTooltip",a)};})(_ds_www);
b={eventData:JSON.stringify({name:"change",type:"languageSelector",metadata:{"selected-language":`${c}`,"original-language":`${b}`}})};a.dispatchEvent(new CustomEvent("devsite-analytics-observation-cloudtrack",{detail:b,bubbles:!0}))},K2=async function(a,b){const c=
b.target.getAttribute("lang");c&&(b.stopPropagation(),await (await _ds.v()).getStorage().set("django_language","",c),(b=document.documentElement.getAttribute("lang"))&&await J2(a,b,c),await H2(),a=new URL(_ds.Rj().location.toString()),a.searchParams.delete("hl"),_ds.we(_ds.Rj().location,_ds.he(a.toString())))},L2=class extends _ds.yI{constructor(){super(...arguments);this.eventHandler=new _ds.H;this.links=[];this.g=0;this.ariaLabel="Selecione o idioma de sua prefer\u00eancia.";this.open=!1;this.qc=
"Language"}static get styles(){return E2}async Vb(){F2(this);try{await G2(this),await H2()}catch(a){}}async j(){if(this.open=!this.open){await this.h;let a;null==(a=this.querySelector("[aria-current]"))||a.focus();I2(this)}else _ds.I(this.eventHandler)}render(){return(0,_ds.Z)` <button
        type="button"
        aria-controls="language-menu"
        aria-haspopup="true"
        @click="${this.j}">
        <svg
          aria-hidden="true"
          class="icon-language"
          viewbox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075.475.975 1.125 1.875Zm-2.6-.4q-.45-.825-.787-1.713Q8.275 16.95 8.05 16H5.1q.725 1.25 1.812 2.175Q8 19.1 9.4 19.55Zm5.2 0q1.4-.45 2.487-1.375Q18.175 17.25 18.9 16h-2.95q-.225.95-.562 1.837-.338.888-.788 1.713ZM4.25 14h3.4q-.075-.5-.113-.988Q7.5 12.525 7.5 12t.037-1.012q.038-.488.113-.988h-3.4q-.125.5-.188.988Q4 11.475 4 12t.062 1.012q.063.488.188.988Zm5.4 0h4.7q.075-.5.113-.988.037-.487.037-1.012t-.037-1.012q-.038-.488-.113-.988h-4.7q-.075.5-.112.988Q9.5 11.475 9.5 12t.038 1.012q.037.488.112.988Zm6.7 0h3.4q.125-.5.188-.988Q20 12.525 20 12t-.062-1.012q-.063-.488-.188-.988h-3.4q.075.5.112.988.038.487.038 1.012t-.038 1.012q-.037.488-.112.988Zm-.4-6h2.95q-.725-1.25-1.813-2.175Q16 4.9 14.6 4.45q.45.825.788 1.712.337.888.562 1.838ZM10.1 8h3.8q-.3-1.1-.775-2.075Q12.65 4.95 12 4.05q-.65.9-1.125 1.875T10.1 8Zm-5 0h2.95q.225-.95.563-1.838.337-.887.787-1.712Q8 4.9 6.912 5.825 5.825 6.75 5.1 8Z" />
        </svg>
        <span class="label">${this.qc}</span>
        <svg
          aria-hidden="true"
          class="icon-arrow"
          viewbox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="m12 15-5-5h10Z" />
        </svg>
      </button>
      <div
        id="language-menu"
        role="menu"
        @click="${a=>void K2(this,a)}"
        @keydown="${a=>{if("ArrowUp"===a.key||"ArrowDown"===a.key){a.preventDefault();let b=0;const c=document.activeElement;c&&(b=this.links.indexOf(c));b="ArrowUp"===a.key?0===b?this.g:b-1:b===this.g?0:b+1;this.links[b].focus()}}}"
        ?hidden=${!this.open}>
        <slot></slot>
      </div>`}Ob(a){if(a&&(a=a.querySelector("ul"))){let b;null==(b=this.querySelector("ul"))||b.remove();this.append(a);F2(this);_ds.nI(this)}}};_ds.x([_ds.P({type:String,Ba:"aria-label",Wa:!0}),_ds.y(Object)],L2.prototype,"ariaLabel",void 0);_ds.x([_ds.P({type:Boolean,Wa:!0}),_ds.y(Object)],L2.prototype,"open",void 0);_ds.x([_ds.Q(),_ds.y(Object)],L2.prototype,"qc",void 0);_ds.x([_ds.lr("button"),_ds.y(HTMLButtonElement)],L2.prototype,"toggle",void 0);try{customElements.define("devsite-language-selector",L2)}catch(a){console.warn("devsite.app.customElement.DevsiteLanguageSelector",a)};})(_ds_www);
