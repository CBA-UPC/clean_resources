<!DOCTYPE html>
<html>
  <head>
    <script nonce="eVhjdEV7PyZjD9wrVvvKw4wYTATmKf"
            src="https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/js/analytics_library.js">
    </script>
  </head>
  <body>
    <script nonce="eVhjdEV7PyZjD9wrVvvKw4wYTATmKf">
      window['dataLayer'] = window['dataLayer'] || [];
      if (window.AnalyticsLibrary) {
        const analyticsLibrary = new AnalyticsLibrary();
        analyticsLibrary.notifyIframeReady(true);
      }
    </script>
  </body>
</html>urchin.com withgoogle.com youtu.be youtube.com ytimg.com".split(" "),aja=
function(a){const b=Array.from(document.querySelectorAll(".devsite-article-body [title]"));for(const c of b){let d;c.setAttribute("data-title",null!=(d=c.getAttribute("title"))?d:"");c.removeAttribute("title")}if(a.hasAttribute("blocked-link")){a=Array.from(document.getElementsByTagName("a"));for(const c of a)if(a=c.getAttribute("href")){const d=(new URL(a,document.location.origin)).hostname.replace("www.","");!Zia.some(e=>-1!==d.indexOf(e))&&$ia.some(e=>-1!==d.indexOf(e))&&(c.setAttribute("data-title",
"Questo link potrebbe non essere accessibile nella tua regione."),c.removeAttribute("title"))}}},bja=function(a){a.eventHandler.listen(document.body,"devsite-content-updated",()=>{a.o.Qa()});a.eventHandler.listen(document.body,"onpointermove"in window?"pointermove":"mousemove",b=>{if(b=b.Ga.composedPath()){var c=!1,d=null;for(d of b)if(_ds.Np()(d)&&(c=u7(d)),c)break;d&&c?v7(a,d):w7(a)}});a.eventHandler.listen(document.body,"focusin",b=>{b=b.target;const c=b.firstElementChild;(b.classList.contains("devsite-nav-title")&&
c?u7(c):u7(b))?v7(a,b):w7(a)});a.eventHandler.listen(document.body,["devsite-sticky-scroll","devsite-sticky-resize"],()=>{w7(a)})},w7=function(a){if(a.g){a.g=null;var b=a.h;a.h=null;b&&(_ds.Gh(b,_ds.ph,()=>{_ds.dk(b);_ds.ak(b)}),window.setTimeout(()=>{_ds.dk(b);_ds.ak(b)},1E3),b.style.opacity="0")}},u7=function(a){return a.hasAttribute("no-tooltip")?!1:a.hasAttribute("data-title")||a.hasAttribute("data-tooltip")||a.hasAttribute("tooltip")&&a.clientWidth<a.scrollWidth},v7=function(a,b){if(a.g!==b){w7(a);
var c,d=b.getAttribute("data-tooltip")||b.getAttribute("data-title")||(null!=(c=b.textContent)?c:"").trim(),e=_ds.Q(Yia,{Jy:d});e.style.opacity="0";document.body.appendChild(e);var f=_ds.Sj(),g=e.getBoundingClientRect(),{top:h,left:k,width:l,height:m}=b.getBoundingClientRect();c=h+m;c+g.height+4>f.height&&(c=h-g.height-16);d=k+l/2-g.width/2;g.width>f.width?d=0:(d=Math.max(d,4),f=f.width-(d+g.width+4),0>f&&(d+=f));e.style.top=`${c}px`;e.style.left=`${d}px`;a.g=b;a.h=e;window.requestAnimationFrame(()=>
{e.style.opacity="1"})}},cja=class extends _ds.bL{constructor(){super();this.eventHandler=new _ds.G;this.h=this.g=null;this.o=new _ds.Fm(()=>void aja(this),250)}connectedCallback(){document.body.hasAttribute("touch")?_ds.dk(this):(bja(this),this.o.Qa())}disconnectedCallback(){super.disconnectedCallback();_ds.I(this.eventHandler)}};try{customElements.define("devsite-tooltip",cja)}catch(a){console.warn("devsite.app.customElement.DevsiteTooltip",a)};})(_ds_www);
