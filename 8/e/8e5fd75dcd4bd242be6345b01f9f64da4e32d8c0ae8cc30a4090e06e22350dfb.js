(function(_ds){var window=this;var D5=function(a,b){const c=[];for(const h of a)try{a=c;var d=a.push,e=b;const k=new URL(h),l=_ds.F();if(k.hostname!==l.hostname)throw Error("Recommendations must be from the same site.");var f=k.pathname;var g=_ds.ct(_ds.dt(new _ds.et,f),e.toString());d.call(a,g)}catch(k){}return c};var cga=function(a){const b=a.hw,c=a.Iu;a=a.wv;let d;d='<h2 class="significatio-heading no-link">Recommended for you</h2>';""!==b?(d=d+'<div class="info-container"><button type="button" class="button-flat info-button significatio-info-container" id="significatio-info-button" aria-label="'+_ds.wH("About recommendations"),d=d+'" data-title="'+_ds.wH("About recommendations"),d+='"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="significatio-icon-info"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></button></div>'):
(d=d+'<div class="significatio-popout-container"><button type="button" class="significatio-popout-toggle button-flat significatio-info-container" id="significatio-popout-toggle" aria-haspopup="true" aria-controls="significatio-popout" aria-label="'+_ds.wH("About recommendations"),d=d+'" data-title="'+_ds.wH("About recommendations"),d+='"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="significatio-icon-info"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></button><div class="significatio-popout" id="significatio-popout" aria-labelledby="significatio-popout-toggle" hidden><h4 class="significatio-popout-heading">About these recommendations</h4><p>These recommendations help you find the content you are looking for. They may be based on the page you\u2019re currently viewing and your account\u2019s saved <a href="https://myactivity.google.com/activitycontrols/webandapp" class="significatio-popout-interactive">web and app activity</a>.</p><a href="http://go/devsite-recommendations" class="significatio-popout-interactive">Learn More</a></div></div>');
d+='<div class="significatio-buttons">';a&&(d+='<p class="significatio-internal-only">Internal only</p>');""!==c&&(d=d+'<button type="button" class="significatio-issue-button button-flat" id="significatio-issue-button" aria-label="'+_ds.wH("Report low quality recommendations"),d=d+'" data-title="'+_ds.wH("Report low quality recommendations"),d+='"><span class="material-icons" aria-hidden="true">bug_report</span></button>');return(0,_ds.U)(d+"</div>")},dga=function(){return(0,_ds.U)('<div class="significatio-overview"></div><div class="significatio-body"><div class="significatio-recommendations"></div><div class="significatio-loading"><devsite-spinner size="64"></devsite-spinner></div></div>')},
fga=function(a){let b="";a=a.mb;const c=a.length;for(let d=0;d<c;d++)b+=ega(a[d]);return(0,_ds.U)(b)},ega=function(a){let b='<div class="significatio-card"><h3 class="significatio-card-heading no-link"><a href="'+_ds.Y(_ds.HI(a.getUrl()+"?"+_ds.z(a,8)))+'" data-category="Site-Wide Custom Events" data-label="devsite-recommendation card link" data-action="click" track-type="recommendations" track-name="cardClick" track-metadata-eventdetail="'+_ds.Y(a.getUrl())+'">';var c=[a.getTitle(),_ds.z(a,3),_ds.z(a,
4)];b+=_ds.X(c.filter(d=>0<d.length)[0])+'</a></h3><p class="significatio-card-description">'+_ds.X(_ds.rH(_ds.z(a,5)))+'</p><div class="significatio-card-meta">';c='Updated <span class="significatio-date" date="'+(_ds.Y(_ds.Gg(a,_ds.$C,7).getSeconds())+'"></span>');b+=c;if(0!==_ds.Hg(a,_ds.PU,11).length){b=b+'<span class="significatio-recommend-popout-container"><button type="button" class="significatio-popout-toggle button-flat significatio-attr-toggle" aria-haspopup="true" aria-controls="significatio-popout" aria-label="'+
_ds.wH("Why is this recommended?");b=b+'" data-title="'+_ds.wH("Why is this recommended?");b+='"><i class="material-icons significatio-attr-info">help_outline</i></button><div class="significatio-popout significatio-attr" aria-labelledby="significatio-popout-toggle" hidden><h4 class="significatio-popout-heading">Why is this recommended?</h4><p>Because you viewed ';a=_ds.Hg(a,_ds.PU,11);c=a.length;for(let d=0;d<c;d++){const e=a[d];b+=' <a href="'+_ds.Y(_ds.HI(e.getUrl()))+'" class="significatio-popout-interactive" track-type="recommendations" track-name="attributionLink">'+
_ds.X(e.getTitle())+"</a>"}b+=".</p></div></span>"}return(0,_ds.U)(b+"</div></div>")},gga=function(a){var b=a.Wx;a='<div class="significatio-card error">'+(0,_ds.U)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="significatio-error-icon"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>')+'<p class="significatio-card-description">';a+='No recommendations at this time.</p><p class="significatio-card-description">';
b='Try <a href="#" class="'+(_ds.Y(b)+'">signing in</a> to your Google account.');return(0,_ds.U)(a+b+"</p></div>")};var hga={"in-page":5},iga=function(a){a.eventHandler.listen(document,"devsite-on-recommendations",b=>{E5(a)&&!a.Ca&&(b=b.Ga)&&(null==b?0:b.detail)&&(0,_ds.VU)(b.detail)&&5===_ds.Vg(b.detail,5)&&(a.h=b.detail,a.Ca=!0,a.removeAttribute("hidden"),a.render())})},E5=function(a){return!a.va&&document.querySelector("devsite-recommendations:not([yield])")?!1:!0},J5=async function(a,b){var c=[2,5,3];if(!a.xa&&c.some(h=>(null==b?void 0:_ds.Vg(b,5))===h)&&((null==b?0:_ds.TU(b).length)&&a.dispatchEvent(new CustomEvent("devsite-on-recommendations",
{detail:b,bubbles:!0})),3!==(null==b?void 0:_ds.Vg(b,5)))){a.remove();return}if(a.display&&hga[a.display]!==(null==b?void 0:_ds.Vg(b,5)))a.remove();else{c=a.querySelector(".significatio-overview");var d=null==b?void 0:_ds.z(b,6);a.ea=(null==b?void 0:_ds.z(b,7))||"";a.v=(null==b?void 0:_ds.z(b,8))||"";var e=1===(null==b?void 0:_ds.Vg(b,9));c&&d?_ds.P(c,cga,{xv:d,hw:a.ea,Iu:a.v,wv:e}):await F5(a,!0,!0,"no title");if(null==b?0:_ds.TU(b).length){_ds.P(a.g,fga,{mb:_ds.TU(b)});jga(a);(null==b?0:_ds.Hg(b,
_ds.NU,2).length)&&kga(_ds.Hg(b,_ds.NU,2));a.o=a.querySelector("#significatio-stats-button");if(null==b?0:_ds.z(b,4)){var f;null==(f=a.o)||f.removeAttribute("hidden");a.ua=_ds.z(b,4)}else{let h;null==(h=a.o)||h.setAttribute("hidden","")}if(a.g){f=a.g.querySelectorAll(".significatio-recommend-popout-container");for(var g of f)G5(a,g)}(g=a.querySelector(".significatio-popout-container"))&&G5(a,g);lga(a);H5(a);I5(a);a.removeAttribute("loading")}else await F5(a,!1)}},nga=async function(a){a.setAttribute("loading",
"");await _ds.v();a.g&&_ds.ak(a.g);const b=await mga(a);let c=null;try{c=await _ds.ht(b)}catch(d){await F5(a,!0,!1,"error fetching recommendations");return}a.h=c;await J5(a,c)},F5=async function(a,b=!0,c=!1,d=""){b&&_ds.yl(d);c&&a.remove();await (await _ds.v()).isSignedIn()?a.remove():(_ds.P(a.g,gga,{Wx:"significatio-sign-in"}),I5(a),H5(a),a.removeAttribute("loading"))},G5=function(a,b){const c=b.querySelector(".significatio-popout-toggle"),d=b.querySelector(".significatio-popout");c&&d&&(a.Aa.push(d),
a.eventHandler.listen(d,"focusout",e=>{e.relatedTarget&&(_ds.tk(e.relatedTarget,null,"significatio-popout",6)||a.hidePopout(d))}),a.eventHandler.listen(c,"click",()=>{a.ma.get(d)||(d.hasAttribute("active")?a.hidePopout(d):a.showPopout(d))}))},mga=async function(a){const b=(await _ds.v()).getTenantId()||0;return _ds.MU(_ds.LU(_ds.KU(_ds.JU(_ds.gt(b,window.location.pathname),D5(a.oa.map(c=>c.href),b)),D5(a.qa.map(c=>c.href),b)),Number(a.getAttribute("generated"))||0),a.query())},jga=function(a){if(a.g){a=
[...a.g.querySelectorAll(".significatio-date")];for(const b of a)a=b.getAttribute("date"),b.textContent=(new Date(1E3*Number(a))).toLocaleDateString("default",{month:"short",year:"numeric",day:"numeric"})}},kga=function(a){for(const b of a)document.body.dispatchEvent(new CustomEvent("devsite-analytics-set-dimension",{bubbles:!0,detail:{name:b.getName(),value:_ds.z(b,2),gaid:_ds.z(b,3)}}))},lga=function(a){var b=a.querySelector("#significatio-issue-button");b&&a.eventHandler.listen(b,"click",()=>void oga(a));
(b=a.querySelector("#significatio-info-button"))&&a.eventHandler.listen(b,"click",()=>void pga(a));a.o&&a.eventHandler.listen(a.o,"click",()=>{a.ua&&_ds.wr(a.ua,{target:"_blank"})});a.eventHandler.listen(document,"click",c=>{for(const d of a.Aa)!d.contains(c.target)&&d.hasAttribute("active")&&a.hidePopout(d)})},H5=function(a){a.eventHandler.listen(a,"click",async b=>{_ds.tk(b.target,null,"significatio-sign-in",2)&&await qga()})},I5=function(a){if(a.g){a=[...a.g.querySelectorAll(".significatio-card:not([show])")];
for(const b of a)b.setAttribute("show","")}},qga=async function(){await (await _ds.v()).signIn()},pga=async function(a){a.ea&&_ds.wr(a.ea,{target:"_blank"})},oga=async function(a){a.v&&_ds.wr(a.v,{target:"_blank"})},rga=class extends _ds.E{constructor(){super();this.eventHandler=new _ds.G(this);this.va=!0;this.Ca=this.xa=this.Fa=this.ra=!1;this.oa=[];this.qa=[];this.h=this.g=null;this.display="";this.ma=new Map;this.Aa=[];this.o=this.ua=null;this.v=this.ea=""}connectedCallback(){this.ra=!0;this.oa=
[...this.querySelectorAll("a[href]")];this.qa=[...this.querySelectorAll('link[rel="disallow"][href]')];this.display=this.getAttribute("display");this.getAttribute("display")?"in-page"===this.getAttribute("display")&&(iga(this),this.xa=!0):this.render()}disconnectedCallback(){document.body.dispatchEvent(new CustomEvent("devsite-recommendations-disconnected",{bubbles:!0}));_ds.I(this.eventHandler);this.oa=[];this.qa=[]}static get observedAttributes(){return["yield","display"]}attributeChangedCallback(a,
b,c){"yield"===a?this.va=null==c:"display"===a&&(this.display=c);this.render()}query(){return this.getAttribute("query")||""}async render(){if(this.ra&&E5(this))if(_ds.P(this,dga),this.g=this.querySelector(".significatio-recommendations")){if(this.h?await J5(this,this.h):await nga(this),!this.Fa){const b=await _ds.v();try{if(await b.intersectionEnterForElement(this.g),null!==this.h){var a;for(const c of null==(a=this.h)?void 0:_ds.TU(a)){const d=_ds.jt(c);if(!d)continue;const e={category:"Site-Wide Custom Events",
action:"recommended",label:c.getUrl(),nonInteraction:!0,additionalParams:{recommendations:d}};this.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:e,bubbles:!0}));const f={eventData:JSON.stringify({type:"recommendations",name:"impression",metadata:d})};this.dispatchEvent(new CustomEvent("devsite-analytics-observation-cloudtrack",{detail:f,bubbles:!0}))}this.Fa=!0}}catch(c){}}}else await F5(this,!0,!1,"no recommendations element")}async showPopout(a){a.removeAttribute("hidden");
await _ds.ul();a.setAttribute("active","");let b;null==(b=a.querySelector(".significatio-popout-interactive"))||b.focus()}async hidePopout(a){!this.ma.get(a)&&a&&(this.ma.set(a,!0),a.removeAttribute("active"),await _ds.ul(),_ds.Im(this.eventHandler,a,"transitionend",()=>{a.setAttribute("hidden","");this.ma.set(a,!1)}))}};try{customElements.define("devsite-recommendations",rga)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteRecommendations",a)};})(_ds_www);
https://developers.google.com/search/docs"
      track-metadata-eventdetail="https://developers.google.com/search/docs"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - documentation"
       track-metadata-module="primary nav"
       aria-label="Documentation, selected" 
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Documentation"
         
           track-name="documentation"
         
       >
    Documentation
  
    </a>
  
  
    <a href="#"
       role="button"
       aria-haspopup="true"
       aria-expanded="false"
       aria-label="Dropdown menu for Documentation"
       track-type="nav"
       track-metadata-eventdetail="https://developers.google.com/search/docs"
       track-metadata-position="nav - documentation"
       track-metadata-module="primary nav"
       
        
          data-category="Site-Wide Custom Events"
        
          data-label="Tab: Documentation"
        
          track-name="documentation"
        
      
       class="devsite-tabs-dropdown-toggle devsite-icon devsite-icon-arrow-drop-down"></a>
  
  <div class="devsite-tabs-dropdown" aria-label="submenu" hidden>
    
    <div class="devsite-tabs-dropdown-content">
      
        <div class="devsite-tabs-dropdown-column
                    ">
          
            <ul class="devsite-tabs-dropdown-section
                       ">
              
                <li class="devsite-nav-title" role="heading" tooltip>SEO fundamentals</li>
              
              
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="seo fundamentals"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Introduction
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/essentials"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/essentials"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="seo fundamentals"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Search Essentials
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/fundamentals/get-on-google"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/fundamentals/get-on-google"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="seo fundamentals"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Get your website on Google
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/fundamentals/how-search-works"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/fundamentals/how-search-works"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="seo fundamentals"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      How Google Search Works
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="seo fundamentals"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      SEO starter guide
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/fundamentals/do-i-need-seo"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="seo fundamentals"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Do you need an SEO?
                    </div>
                    
                  </a>
                </li>
              
            </ul>
          
        </div>
      
        <div class="devsite-tabs-dropdown-column
                    ">
          
            <ul class="devsite-tabs-dropdown-section
                       ">
              
                <li class="devsite-nav-title" role="heading" tooltip>Crawling and indexing</li>
              
              
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="crawling and indexing"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Sitemaps
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/crawling-indexing/robots/intro"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="crawling and indexing"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      robots.txt
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/crawling-indexing/special-tags"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/crawling-indexing/special-tags"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="crawling and indexing"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Meta tags
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="crawling and indexing"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Crawler management
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/crawling-indexing/control-what-you-share"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/crawling-indexing/control-what-you-share"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="crawling and indexing"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Removals
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="crawling and indexing"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Canonicalization
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/crawling-indexing/301-redirects"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/crawling-indexing/301-redirects"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="crawling and indexing"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Redirects
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="crawling and indexing"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      JavaScript SEO
                    </div>
                    
                  </a>
                </li>
              
            </ul>
          
        </div>
      
        <div class="devsite-tabs-dropdown-column
                    ">
          
            <ul class="devsite-tabs-dropdown-section
                       ">
              
                <li class="devsite-nav-title" role="heading" tooltip>Ranking and search appearance</li>
              
              
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/appearance/visual-elements-gallery"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/appearance/visual-elements-gallery"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="ranking and search appearance"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Visual Elements gallery
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/appearance/title-link"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/appearance/title-link"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="ranking and search appearance"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Title links
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/appearance/snippet"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/appearance/snippet"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="ranking and search appearance"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Snippets
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/appearance/google-images"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/appearance/google-images"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="ranking and search appearance"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Images
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/appearance/video"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/appearance/video"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="ranking and search appearance"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Videos
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/appearance/structured-data/search-gallery"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/appearance/structured-data/search-gallery"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="ranking and search appearance"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Structured data
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/appearance/favicon-in-search"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/appearance/favicon-in-search"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="ranking and search appearance"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Favicons
                    </div>
                    
                  </a>
                </li>
              
            </ul>
          
        </div>
      
        <div class="devsite-tabs-dropdown-column
                    ">
          
            <ul class="devsite-tabs-dropdown-section
                       ">
              
                <li class="devsite-nav-title" role="heading" tooltip>Site-specific guides</li>
              
              
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/specialty/ecommerce"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/specialty/ecommerce"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="site-specific guides"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Ecommerce
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/specialty/international"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/specialty/international"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="site-specific guides"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      International and multilingual sites
                    </div>
                    
                  </a>
                </li>
              
            </ul>
          
            <ul class="devsite-tabs-dropdown-section
                       ">
              
                <li class="devsite-nav-title" role="heading" tooltip>Data analysis</li>
              
              
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/monitor-debug/search-console-start"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/monitor-debug/search-console-start"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="site-specific guides"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Get started with Search Console
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="site-specific guides"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Debug traffic drops
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/docs/monitor-debug/bubble-chart-analysis"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/docs/monitor-debug/bubble-chart-analysis"
                     track-metadata-position="nav - documentation"
                     track-metadata-module="tertiary nav"
                     
                       track-metadata-module_headline="site-specific guides"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Improve SEO with a bubble chart
                    </div>
                    
                  </a>
                </li>
              
            </ul>
          
        </div>
      
    </div>
  </div>
</tab>
        
      
        
          <tab  >
            
    <a href="https://developers.google.com/search/help"
      track-metadata-eventdetail="https://developers.google.com/search/help"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - support"
       track-metadata-module="primary nav"
       
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Support"
         
           track-name="support"
         
       >
    Support
  
    </a>
  
  
          </tab>
        
      
        
          <tab  >
            
    <a href="https://developers.google.com/search/blog"
      track-metadata-eventdetail="https://developers.google.com/search/blog"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - blog"
       track-metadata-module="primary nav"
       
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Blog"
         
           track-name="blog"
         
       >
    Blog
  
    </a>
  
  
          </tab>
        
      
        
          <tab dropdown
    
    
    
    >
  
    <a href="https://developers.google.com/search/news"
      track-metadata-eventdetail="https://developers.google.com/search/news"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - what&#39;s new"
       track-metadata-module="primary nav"
       
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: What&#39;s new"
         
           track-name="what&#39;s new"
         
       >
    What&#39;s new
  
    </a>
  
  
    <a href="#"
       role="button"
       aria-haspopup="true"
       aria-expanded="false"
       aria-label="Dropdown menu for What&#39;s new"
       track-type="nav"
       track-metadata-eventdetail="https://developers.google.com/search/news"
       track-metadata-position="nav - what&#39;s new"
       track-metadata-module="primary nav"
       
        
          data-category="Site-Wide Custom Events"
        
          data-label="Tab: What&#39;s new"
        
          track-name="what&#39;s new"
        
      
       class="devsite-tabs-dropdown-toggle devsite-icon devsite-icon-arrow-drop-down"></a>
  
  <div class="devsite-tabs-dropdown" aria-label="submenu" hidden>
    
    <div class="devsite-tabs-dropdown-content">
      
        <div class="devsite-tabs-dropdown-column
                    ">
          
            <ul class="devsite-tabs-dropdown-section
                       ">
              
              
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/news"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/news"
                     track-metadata-position="nav - what&#39;s new"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      All updates
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://developers.google.com/search/updates"
                     track-type="nav"
                     track-metadata-eventdetail="https://developers.google.com/search/updates"
                     track-metadata-position="nav - what&#39;s new"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Documentation updates
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history"
                     track-type="nav"
                     track-metadata-eventdetail="https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history"
                     track-metadata-position="nav - what&#39;s new"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Ranking updates
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://www.youtube.com/channel/UCWf2ZlNsCGDS89VBF_awNvA"
                     track-type="nav"
                     track-metadata-eventdetail="https://www.youtube.com/channel/UCWf2ZlNsCGDS89VBF_awNvA"
                     track-metadata-position="nav - what&#39;s new"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      New YouTube videos
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://pod.link/1512522198"
                     track-type="nav"
                     track-metadata-eventdetail="https://pod.link/1512522198"
                     track-metadata-position="nav - what&#39;s new"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Recent podcast episodes
                    </div>
                    
                  </a>
                </li>
              
            </ul>
          
        </div>
      
    </div>
  </div>
</tab>
        
      
        
          <tab  >
            
    <a href="https://developers.google.com/search/events"
      track-metadata-eventdetail="https://developers.google.com/search/events"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - events"
       track-metadata-module="primary nav"
       
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Events"
         
           track-name="events"
         
       >
    Events
  
    </a>
  
  
          </tab>
        
      
        
          <tab  >
            
    <a href="https://developers.google.com/search/case-studies/overview"
      track-metadata-eventdetail="https://developers.google.com/search/case-studies/overview"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - case studies"
       track-metadata-module="primary nav"
       
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Case studies"
         
           track-name="case studies"
         
       >
    Case studies
  
    </a>
  
  
          </tab>
        
      
    </nav>

  </devsite-tabs>

            
           </div>
          
<devsite-search
    enable-signin
    enable-search
    enable-suggestions
      enable-query-completion
    
    project-name="Documentation"
    tenant-name="Google for Developers"
    project-scope="/search/docs"
    url-scoped="https://developers.google.com/s/results/search/docs"
    
    
    
    >
  <form class="devsite-search-form" action="https://developers.google.com/s/results" method="GET">
    <div class="devsite-search-container">
      <button type="button"
              search-open
              class="devsite-search-button devsite-header-icon-button button-flat material-icons"
              
              aria-label="Open search"></button>
      <div class="devsite-searchbox">
        <input
          aria-activedescendant=""
          aria-autocomplete="list"
          
          aria-label="Search"
          aria-expanded="false"
          aria-haspopup="listbox"
          autocomplete="off"
          class="devsite-search-field devsite-search-query"
          name="q"
          
          placeholder="Search"
          role="combobox"
          type="text"
          value=""
          >
          <div class="devsite-search-image material-icons" aria-hidden="true">
            
          </div>
      </div>
    </div>
  </form>
  <button type="button"
          search-close
          class="devsite-search-button devsite-header-icon-button button-flat material-icons"
          
          aria-label="Close search"></button>
</devsite-search>

        </div>

        

        

        

        
<devsite-language-selector>
  <ul role="presentation">
    
    
    <li role="presentation">
      <a role="menuitem" lang="en"
        >English</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="de"
        >Deutsch</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="es"
        >Español</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="es_419"
        >Español – América Latina</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="fr"
        >Français</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="id"
        >Indonesia</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="it"
        >Italiano</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="pl"
        >Polski</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="pt_br"
        >Português – Brasil</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="vi"
        >Tiếng Việt</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="tr"
        >Türkçe</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ru"
        >Русский</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ar"
        >العربيّة</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="hi"
        >हिंदी</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="th"
        >ภาษาไทย</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="zh_cn"
        >中文 – 简体</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="zh_tw"
        >中文 – 繁體</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ja"
        >日本語</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ko"
        >한국어</a>
    </li>
    
  </ul>
</devsite-language-selector>


        

        
          
          
          <devsite-user 
                        
                        
                          enable-profiles
                        
                        
                          fp-auth
                        
                        id="devsite-user">
            
              
              <span class="button devsite-top-button" aria-hidden="true" visually-hidden>Sign in</span>
            
        </devsite-user>
           
        
      </div>
    </div>
  </div>



  <div class="devsite-collapsible-section
    
      devsite-header-no-lower-tabs
    ">
    <div class="devsite-header-background">
      
        
          <div class="devsite-product-id-row"
           >
            <div class="devsite-product-description-row">
              
                
                  
                  
                  <ul class="devsite-breadcrumb-list"
  >
  
  <li class="devsite-breadcrumb-item
             ">
    
    
    
      
  <a href="https://developers.google.com/search/docs"
      
        class="devsite-breadcrumb-link gc-analytics-event"
      
        data-category="Site-Wide Custom Events"
      
        data-label="Lower Header"
      
        data-value="1"
      
        track-type="globalNav"
      
        track-name="breadcrumb"
      
        track-metadata-position="1"
      
        track-metadata-eventdetail="Documentation"
      
    >
    
        Documentation
      
  </a>
  
    
  </li>
  
</ul>
                
              
              
            </div>
            
              <div class="devsite-product-button-row">
  

  
  <a href="https://goo.gle/searchconsole"
  
    class="button button-primary
      "
    
    
      
        data-label="open search console header button"
      
        data-category="Search docs"
      
    
    >Search Console</a>

</div>
            
          </div>
          
        
      
      
    </div>
  </div>

</div>



  

  
</devsite-header>
      <devsite-book-nav scrollbars >
        
          





















<div class="devsite-book-nav-filter
            hidden">
  <span class="filter-list-icon material-icons" aria-hidden="true"></span>
  <input type="text"
         placeholder="Filter"
         
         aria-label="Type to filter"
         role="searchbox">
  
  <span class="filter-clear-button hidden"
        data-title="Clear filter"
        aria-label="Clear filter"
        role="button"
        tabindex="0"></span>
</div>

<nav class="devsite-book-nav devsite-nav nocontent"
     aria-label="Side menu">
  <div class="devsite-mobile-header">
    <button type="button"
            id="devsite-close-nav"
            class="devsite-header-icon-button button-flat material-icons gc-analytics-event"
            data-category="Site-Wide Custom Events"
            data-label="Close navigation"
            aria-label="Close navigation">
    </button>
    <div class="devsite-product-name-wrapper">

  
    
  
  <a href="https://developers.google.com/search">
    
  <div class="devsite-product-logo-container"
       
       
       
    size="medium"
  >
  
    
      <img class="devsite-product-logo"
           alt="Google Search Central"
           src="https://developers.google.com/static/search/images/google-search-central-logo.svg"
           srcset=""
           sizes="64px"
           loading="lazy">
    
  
  </div>
  
  </a>
  

  


  
      <span class="devsite-product-name">
        
        
        <ul class="devsite-breadcrumb-list"
  >
  
  <li class="devsite-breadcrumb-item
             devsite-has-google-wordmark">
    
    
    
      
      
        
  <a href="https://developers.google.com/search"
      
        class="devsite-breadcrumb-link gc-analytics-event"
      
        data-category="Site-Wide Custom Events"
      
        data-label="Upper Header"
      
        data-value="1"
      
        track-type="globalNav"
      
        track-name="breadcrumb"
      
        track-metadata-position="1"
      
        track-metadata-eventdetail="Google Search Central"
      
    >
    <svg class="devsite-google-wordmark"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 148 48">
    <title>Google</title>
    <path class="devsite-google-wordmark-svg-path" d="M19.58,37.65c-9.87,0-18.17-8.04-18.17-17.91c0-9.87,8.3-17.91,18.17-17.91c5.46,0,9.35,2.14,12.27,4.94l-3.45,3.45c-2.1-1.97-4.93-3.49-8.82-3.49c-7.21,0-12.84,5.81-12.84,13.02c0,7.21,5.64,13.02,12.84,13.02c4.67,0,7.34-1.88,9.04-3.58c1.4-1.4,2.32-3.41,2.66-6.16H19.58v-4.89h16.47c0.18,0.87,0.26,1.92,0.26,3.06c0,3.67-1.01,8.21-4.24,11.44C28.93,35.9,24.91,37.65,19.58,37.65z M61.78,26.12c0,6.64-5.1,11.53-11.36,11.53s-11.36-4.89-11.36-11.53c0-6.68,5.1-11.53,11.36-11.53S61.78,19.43,61.78,26.12z M56.8,26.12c0-4.15-2.96-6.99-6.39-6.99c-3.43,0-6.39,2.84-6.39,6.99c0,4.11,2.96,6.99,6.39,6.99C53.84,33.11,56.8,30.22,56.8,26.12z M87.25,26.12c0,6.64-5.1,11.53-11.36,11.53c-6.26,0-11.36-4.89-11.36-11.53c0-6.68,5.1-11.53,11.36-11.53C82.15,14.59,87.25,19.43,87.25,26.12zM82.28,26.12c0-4.15-2.96-6.99-6.39-6.99c-3.43,0-6.39,2.84-6.39,6.99c0,4.11,2.96,6.99,6.39,6.99C79.32,33.11,82.28,30.22,82.28,26.12z M112.09,15.29v20.7c0,8.52-5.02,12.01-10.96,12.01c-5.59,0-8.95-3.76-10.22-6.81l4.41-1.83c0.79,1.88,2.71,4.1,5.81,4.1c3.8,0,6.16-2.36,6.16-6.77v-1.66h-0.18c-1.14,1.4-3.32,2.62-6.07,2.62c-5.76,0-11.05-5.02-11.05-11.49c0-6.51,5.28-11.57,11.05-11.57c2.75,0,4.93,1.22,6.07,2.58h0.18v-1.88H112.09z M107.64,26.16c0-4.06-2.71-7.03-6.16-7.03c-3.49,0-6.42,2.97-6.42,7.03c0,4.02,2.93,6.94,6.42,6.94C104.93,33.11,107.64,30.18,107.64,26.16z M120.97,3.06v33.89h-5.07V3.06H120.97z M140.89,29.92l3.93,2.62c-1.27,1.88-4.32,5.11-9.61,5.11c-6.55,0-11.28-5.07-11.28-11.53c0-6.86,4.77-11.53,10.71-11.53c5.98,0,8.91,4.76,9.87,7.34l0.52,1.31l-15.42,6.38c1.18,2.31,3.01,3.49,5.59,3.49C137.79,33.11,139.58,31.84,140.89,29.92zM128.79,25.77l10.31-4.28c-0.57-1.44-2.27-2.45-4.28-2.45C132.24,19.04,128.66,21.31,128.79,25.77z"/>
  </svg>Search Central
  </a>
  
      
    
  </li>
  
</ul>
      </span>
    

</div>
  </div>

  <div class="devsite-book-nav-wrapper">
    <div class="devsite-mobile-nav-top">
      
        <ul class="devsite-nav-list">
          
            <li class="devsite-nav-item">
              
  
  <a href="/search/docs"
    
       class="devsite-nav-title gc-analytics-event
              devsite-nav-has-children
              devsite-nav-active"
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Documentation"
      
        track-name="documentation"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Documentation"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Documentation
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          >
    </span>
    
  
  </a>
  

  
    <ul class="devsite-nav-responsive-tabs devsite-nav-has-menu
               ">
      
<li class="devsite-nav-item">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Documentation"
      
        track-name="documentation"
      
    >
  
    <span class="devsite-nav-text" tooltip menu="Documentation">
      More
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          menu="Documentation">
    </span>
    
  
  </span>
  

</li>

    </ul>
  
              
            </li>
          
            <li class="devsite-nav-item">
              
  
  <a href="/search/help"
    
       class="devsite-nav-title gc-analytics-event
              devsite-nav-has-children
              "
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Support"
      
        track-name="support"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Support"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Support
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          >
    </span>
    
  
  </a>
  

  
              
            </li>
          
            <li class="devsite-nav-item">
              
  
  <a href="/search/blog"
    
       class="devsite-nav-title gc-analytics-event
              devsite-nav-has-children
              "
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Blog"
      
        track-name="blog"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Blog"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Blog
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          >
    </span>
    
  
  </a>
  

  
              
            </li>
          
            <li class="devsite-nav-item">
              
  
  <a href="/search/news"
    
       class="devsite-nav-title gc-analytics-event
              devsite-nav-has-children
              "
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: What&#39;s new"
      
        track-name="what&#39;s new"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: What&#39;s new"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      What&#39;s new
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          >
    </span>
    
  
  </a>
  

  
    <ul class="devsite-nav-responsive-tabs devsite-nav-has-menu
               ">
      
<li class="devsite-nav-item">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: What&#39;s new"
      
        track-name="what&#39;s new"
      
    >
  
    <span class="devsite-nav-text" tooltip menu="What&#39;s new">
      More
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          menu="What&#39;s new">
    </span>
    
  
  </span>
  

</li>

    </ul>
  
              
            </li>
          
            <li class="devsite-nav-item">
              
  
  <a href="/search/events"
    
       class="devsite-nav-title gc-analytics-event
              devsite-nav-has-children
              "
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Events"
      
        track-name="events"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Events"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Events
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          >
    </span>
    
  
  </a>
  

  
              
            </li>
          
            <li class="devsite-nav-item">
              
  
  <a href="/search/case-studies/overview"
    
       class="devsite-nav-title gc-analytics-event
              devsite-nav-has-children
              "
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Case studies"
      
        track-name="case studies"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Case studies"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Case studies
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          >
    </span>
    
  
  </a>
  

  
              
            </li>
          
          
          
        </ul>
      
    </div>
    
      <div class="devsite-mobile-nav-bottom">
        
          
          <ul class="devsite-nav-list" menu="_book">
            <li class="devsite-nav-item"><a href="/search/docs"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs"
      ><span class="devsite-nav-text" tooltip>Introduction</span></a></li>

  <li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Search Essentials</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/essentials"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/essentials"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/essentials"
      ><span class="devsite-nav-text" tooltip>Overview</span></a></li><li class="devsite-nav-item"><a href="/search/docs/essentials/technical"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/essentials/technical"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/essentials/technical"
      ><span class="devsite-nav-text" tooltip>Technical requirements</span></a></li><li class="devsite-nav-item"><a href="/search/docs/essentials/spam-policies"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/essentials/spam-policies"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/essentials/spam-policies"
      ><span class="devsite-nav-text" tooltip>Spam policies</span></a></li></ul></div></li>

  <li class="devsite-nav-item
           devsite-nav-expandable
           devsite-nav-accordion"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>SEO fundamentals</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/fundamentals/get-on-google"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/fundamentals/get-on-google"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/fundamentals/get-on-google"
      ><span class="devsite-nav-text" tooltip>Get your website on Google</span></a></li><li class="devsite-nav-item"><a href="/search/docs/fundamentals/how-search-works"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/fundamentals/how-search-works"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/fundamentals/how-search-works"
      ><span class="devsite-nav-text" tooltip>How Google Search works</span></a></li><li class="devsite-nav-item"><a href="/search/docs/fundamentals/creating-helpful-content"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/fundamentals/creating-helpful-content"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/fundamentals/creating-helpful-content"
      ><span class="devsite-nav-text" tooltip>Creating helpful, reliable, people-first content</span></a></li><li class="devsite-nav-item"><a href="/search/docs/fundamentals/seo-starter-guide"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/fundamentals/seo-starter-guide"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/fundamentals/seo-starter-guide"
      ><span class="devsite-nav-text" tooltip>SEO Starter Guide</span></a></li><li class="devsite-nav-item"><a href="/search/docs/fundamentals/do-i-need-seo"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/fundamentals/do-i-need-seo"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/fundamentals/do-i-need-seo"
      ><span class="devsite-nav-text" tooltip>Do you need an SEO?</span></a></li><li class="devsite-nav-item"><a href="/search/docs/fundamentals/get-started"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/fundamentals/get-started"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/fundamentals/get-started"
      ><span class="devsite-nav-text" tooltip>Maintaining your site&#39;s SEO</span></a></li><li class="devsite-nav-item"><a href="/search/docs/fundamentals/get-started-developers"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/fundamentals/get-started-developers"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/fundamentals/get-started-developers"
      ><span class="devsite-nav-text" tooltip>Developer&#39;s guide to Search</span></a></li></ul></div></li>

  <li class="devsite-nav-item
           devsite-nav-expandable
           devsite-nav-accordion"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Crawling and indexing</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing"
      ><span class="devsite-nav-text" tooltip>Overview</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/indexable-file-types"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/indexable-file-types"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/indexable-file-types"
      ><span class="devsite-nav-text" tooltip>File types Google can index</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/url-structure"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/url-structure"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/url-structure"
      ><span class="devsite-nav-text" tooltip>URL structure</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/links-crawlable"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/links-crawlable"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/links-crawlable"
      ><span class="devsite-nav-text" tooltip>Links</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Sitemaps</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/sitemaps/overview"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/sitemaps/overview"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/sitemaps/overview"
      ><span class="devsite-nav-text" tooltip>Learn about sitemaps</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/sitemaps/build-sitemap"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/sitemaps/build-sitemap"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/sitemaps/build-sitemap"
      ><span class="devsite-nav-text" tooltip>Build and submit a sitemap</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/sitemaps/large-sitemaps"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/sitemaps/large-sitemaps"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/sitemaps/large-sitemaps"
      ><span class="devsite-nav-text" tooltip>Manage sitemaps with sitemap index file</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Sitemap extensions</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/sitemaps/image-sitemaps"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/sitemaps/image-sitemaps"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/sitemaps/image-sitemaps"
      ><span class="devsite-nav-text" tooltip>Image sitemaps</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/sitemaps/news-sitemap"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/sitemaps/news-sitemap"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/sitemaps/news-sitemap"
      ><span class="devsite-nav-text" tooltip>News sitemaps</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/sitemaps/video-sitemaps"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/sitemaps/video-sitemaps"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/sitemaps/video-sitemaps"
      ><span class="devsite-nav-text" tooltip>Video sitemaps and alternatives</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions"
      ><span class="devsite-nav-text" tooltip>Combining sitemap extensions</span></a></li></ul></div></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Crawler management</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/ask-google-to-recrawl"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/ask-google-to-recrawl"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/ask-google-to-recrawl"
      ><span class="devsite-nav-text" tooltip>Ask Google to recrawl your URLs</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/reduce-crawl-rate"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/reduce-crawl-rate"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/reduce-crawl-rate"
      ><span class="devsite-nav-text" tooltip>Reduce the Googlebot crawl rate</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/verifying-googlebot"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/verifying-googlebot"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/verifying-googlebot"
      ><span class="devsite-nav-text" tooltip>Verifying Googlebot and other Google crawlers</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/large-site-managing-crawl-budget"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/large-site-managing-crawl-budget"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/large-site-managing-crawl-budget"
      ><span class="devsite-nav-text" tooltip>Large site owner&#39;s guide to managing your crawl budget</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/http-network-errors"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/http-network-errors"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/http-network-errors"
      ><span class="devsite-nav-text" tooltip>How HTTP status codes, and network and DNS errors affect Google Search</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Google crawlers</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/overview-google-crawlers"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/overview-google-crawlers"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/overview-google-crawlers"
      ><span class="devsite-nav-text" tooltip>Overview</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/googlebot"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/googlebot"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/googlebot"
      ><span class="devsite-nav-text" tooltip>Googlebot</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/read-aloud-user-agent"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/read-aloud-user-agent"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/read-aloud-user-agent"
      ><span class="devsite-nav-text" tooltip>Google Read Aloud</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/apis-user-agent"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/apis-user-agent"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/apis-user-agent"
      ><span class="devsite-nav-text" tooltip>APIs-Google</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/feedfetcher"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/feedfetcher"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/feedfetcher"
      ><span class="devsite-nav-text" tooltip>Feedfetcher</span></a></li></ul></div></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>robots.txt</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/robots/intro"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/robots/intro"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/robots/intro"
      ><span class="devsite-nav-text" tooltip>Introduction to robots.txt</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/robots/create-robots-txt"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/robots/create-robots-txt"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/robots/create-robots-txt"
      ><span class="devsite-nav-text" tooltip>How to write and submit a robots.txt file</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/robots/submit-updated-robots-txt"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/robots/submit-updated-robots-txt"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/robots/submit-updated-robots-txt"
      ><span class="devsite-nav-text" tooltip>Update your robots.txt file</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/robots/robots_txt"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/robots/robots_txt"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/robots/robots_txt"
      ><span class="devsite-nav-text" tooltip>How Google interprets the robots.txt specification</span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Canonicalization</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/canonicalization"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/canonicalization"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/canonicalization"
      ><span class="devsite-nav-text" tooltip>What is URL canonicalization</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/consolidate-duplicate-urls"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/consolidate-duplicate-urls"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/consolidate-duplicate-urls"
      ><span class="devsite-nav-text" tooltip>How to specify a canonical with rel=&#34;canonical&#34; and other methods</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/canonicalization-troubleshooting"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/canonicalization-troubleshooting"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/canonicalization-troubleshooting"
      ><span class="devsite-nav-text" tooltip>Fix canonicalization issues</span></a></li></ul></div></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing"
      ><span class="devsite-nav-text" tooltip>Mobile site and mobile-first indexing</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>AMP</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/amp"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/amp"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/amp"
      ><span class="devsite-nav-text" tooltip>AMP on Google Search guidelines</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/amp/about-amp"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/amp/about-amp"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/amp/about-amp"
      ><span class="devsite-nav-text" tooltip>Understand how AMP works in search results</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/amp/enhance-amp"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/amp/enhance-amp"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/amp/enhance-amp"
      ><span class="devsite-nav-text" tooltip>Enhance AMP content</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/amp/validate-amp"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/amp/validate-amp"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/amp/validate-amp"
      ><span class="devsite-nav-text" tooltip>Validate AMP content</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/amp/remove-amp"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/amp/remove-amp"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/amp/remove-amp"
      ><span class="devsite-nav-text" tooltip>Remove AMP content</span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>JavaScript</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/javascript/javascript-seo-basics"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/javascript/javascript-seo-basics"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/javascript/javascript-seo-basics"
      ><span class="devsite-nav-text" tooltip>Understand the JavaScript SEO basics</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/javascript/fix-search-javascript"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/javascript/fix-search-javascript"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/javascript/fix-search-javascript"
      ><span class="devsite-nav-text" tooltip>Fix search-related JavaScript problems</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/javascript/lazy-loading"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/javascript/lazy-loading"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/javascript/lazy-loading"
      ><span class="devsite-nav-text" tooltip>Fix lazy-loaded content</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/javascript/dynamic-rendering"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/javascript/dynamic-rendering"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/javascript/dynamic-rendering"
      ><span class="devsite-nav-text" tooltip>Dynamic rendering as a workaround</span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Page and content metadata</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/valid-page-metadata"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/valid-page-metadata"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/valid-page-metadata"
      ><span class="devsite-nav-text" tooltip>Page metadata</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Meta tags</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/special-tags"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/special-tags"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/special-tags"
      ><span class="devsite-nav-text" tooltip>Meta tags and HTML attributes that Google supports</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/robots-meta-tag"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/robots-meta-tag"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/robots-meta-tag"
      ><span class="devsite-nav-text" tooltip>Robots meta tag, data-nosnippet, and X-Robots-Tag</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/block-indexing"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/block-indexing"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/block-indexing"
      ><span class="devsite-nav-text" tooltip>noindex</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/safesearch"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/safesearch"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/safesearch"
      ><span class="devsite-nav-text" tooltip>SafeSearch</span></a></li></ul></div></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/qualify-outbound-links"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/qualify-outbound-links"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/qualify-outbound-links"
      ><span class="devsite-nav-text" tooltip>rel attributes</span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Removals</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/control-what-you-share"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/control-what-you-share"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/control-what-you-share"
      ><span class="devsite-nav-text" tooltip>Control what you share with Google</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/remove-information"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/remove-information"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/remove-information"
      ><span class="devsite-nav-text" tooltip>Page removals</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/prevent-images-on-your-page"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/prevent-images-on-your-page"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/prevent-images-on-your-page"
      ><span class="devsite-nav-text" tooltip>Image removals</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/keep-redacted-information-out"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/keep-redacted-information-out"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/keep-redacted-information-out"
      ><span class="devsite-nav-text" tooltip>Redacted information</span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Site moves and changes</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/301-redirects"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/301-redirects"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/301-redirects"
      ><span class="devsite-nav-text" tooltip>Redirects and Google Search</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Site moves</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/site-move-no-url-changes"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/site-move-no-url-changes"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/site-move-no-url-changes"
      ><span class="devsite-nav-text" tooltip>Changing your hosting</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/site-move-with-url-changes"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/site-move-with-url-changes"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/site-move-with-url-changes"
      ><span class="devsite-nav-text" tooltip>Move a site with URL changes</span></a></li></ul></div></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/website-testing"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/website-testing"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/website-testing"
      ><span class="devsite-nav-text" tooltip>A/B testing</span></a></li><li class="devsite-nav-item"><a href="/search/docs/crawling-indexing/pause-online-business"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/crawling-indexing/pause-online-business"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/crawling-indexing/pause-online-business"
      ><span class="devsite-nav-text" tooltip>Temporarily pause or disable a website</span></a></li></ul></div></li></ul></div></li>

  <li class="devsite-nav-item
           devsite-nav-expandable
           devsite-nav-accordion"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Ranking and search appearance</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/appearance"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance"
      ><span class="devsite-nav-text" tooltip>Overview</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/publication-dates"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/publication-dates"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/publication-dates"
      ><span class="devsite-nav-text" tooltip>Byline dates</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/favicon-in-search"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/favicon-in-search"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/favicon-in-search"
      ><span class="devsite-nav-text" tooltip>Favicons</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/featured-snippets"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/featured-snippets"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/featured-snippets"
      ><span class="devsite-nav-text" tooltip>Featured snippets</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/flexible-sampling"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/flexible-sampling"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/flexible-sampling"
      ><span class="devsite-nav-text" tooltip>Flexible Sampling</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/google-discover"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/google-discover"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/google-discover"
      ><span class="devsite-nav-text" tooltip>Google Discover</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/google-images"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/google-images"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/google-images"
      ><span class="devsite-nav-text" tooltip>Images</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Local features</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/appearance/establish-business-details"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/establish-business-details"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/establish-business-details"
      ><span class="devsite-nav-text" tooltip>Business details</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/top-places-list"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/top-places-list"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/top-places-list"
      ><span class="devsite-nav-text" tooltip>Top Places List</span></a></li><li class="devsite-nav-item
           devsite-nav-external"><a href="https://support.google.com/webmasters/answer/3035947"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: https://support.google.com/webmasters/answer/3035947"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="https://support.google.com/webmasters/answer/3035947"
      ><span class="devsite-nav-text" tooltip>Opting out of Google Local</span><span class="devsite-nav-icon material-icons"
        data-icon="external"
        data-title="External"
        aria-hidden="true"></span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-experimental"><a href="/search/docs/appearance/notes-and-your-website"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/notes-and-your-website"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/notes-and-your-website"
      ><span class="devsite-nav-text" tooltip>Notes</span><span class="devsite-nav-icon material-icons"
        data-icon="experimental"
        data-title="Experimental!"
        aria-hidden="true"></span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Page experience</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/appearance/page-experience"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/page-experience"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/page-experience"
      ><span class="devsite-nav-text" tooltip>Understanding page experience</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/core-web-vitals"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/core-web-vitals"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/core-web-vitals"
      ><span class="devsite-nav-text" tooltip>Core Web Vitals</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/avoid-intrusive-interstitials"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/avoid-intrusive-interstitials"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/avoid-intrusive-interstitials"
      ><span class="devsite-nav-text" tooltip>Interstitials and dialogs</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/signed-exchange"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/signed-exchange"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/signed-exchange"
      ><span class="devsite-nav-text" tooltip>Get started with signed exchanges on Google Search</span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Ranking systems</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/appearance/ranking-systems-guide"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/ranking-systems-guide"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/ranking-systems-guide"
      ><span class="devsite-nav-text" tooltip>A guide to Google Search ranking systems</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/helpful-content-system"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/helpful-content-system"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/helpful-content-system"
      ><span class="devsite-nav-text" tooltip>Helpful content system</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/reviews-system"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/reviews-system"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/reviews-system"
      ><span class="devsite-nav-text" tooltip>Reviews system</span></a></li></ul></div></li><li class="devsite-nav-item"><a href="/search/docs/appearance/site-names"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/site-names"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/site-names"
      ><span class="devsite-nav-text" tooltip>Site names</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/sitelinks"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/sitelinks"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/sitelinks"
      ><span class="devsite-nav-text" tooltip>Sitelinks</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/snippet"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/snippet"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/snippet"
      ><span class="devsite-nav-text" tooltip>Snippets</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Structured data</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/intro-structured-data"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/intro-structured-data"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/intro-structured-data"
      ><span class="devsite-nav-text" tooltip>Understand how structured data works</span></a></li><li class="devsite-nav-item
           devsite-nav-external"><a href="https://codelabs.developers.google.com/codelabs/structured-data/index.html"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: https://codelabs.developers.google.com/codelabs/structured-data/index.html"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="https://codelabs.developers.google.com/codelabs/structured-data/index.html"
      ><span class="devsite-nav-text" tooltip>Try the structured data codelab</span><span class="devsite-nav-icon material-icons"
        data-icon="external"
        data-title="External"
        aria-hidden="true"></span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/sd-policies"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/sd-policies"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/sd-policies"
      ><span class="devsite-nav-text" tooltip>Structured data general guidelines</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/enriched-search-results"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/enriched-search-results"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/enriched-search-results"
      ><span class="devsite-nav-text" tooltip>Enriched search results</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/generate-structured-data-with-javascript"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/generate-structured-data-with-javascript"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/generate-structured-data-with-javascript"
      ><span class="devsite-nav-text" tooltip>Generate structured data with JavaScript</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Feature guides</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/search-gallery"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/search-gallery"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/search-gallery"
      ><span class="devsite-nav-text" tooltip>All structured data features</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/article"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/article"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/article"
      ><span class="devsite-nav-text" tooltip>Article</span></a></li><li class="devsite-nav-item
           devsite-nav-limited"><a href="/search/docs/appearance/structured-data/book"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/book"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/book"
      ><span class="devsite-nav-text" tooltip>Book actions</span><span class="devsite-nav-icon material-icons"
        data-icon="limited"
        data-title="Limited Access"
        aria-hidden="true"></span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/breadcrumb"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/breadcrumb"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/breadcrumb"
      ><span class="devsite-nav-text" tooltip>Breadcrumb</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/carousel"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/carousel"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/carousel"
      ><span class="devsite-nav-text" tooltip>Carousel</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/course-info"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/course-info"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/course-info"
      ><span class="devsite-nav-text" tooltip>Course info</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/course"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/course"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/course"
      ><span class="devsite-nav-text" tooltip>Course list</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/dataset"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/dataset"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/dataset"
      ><span class="devsite-nav-text" tooltip>Dataset</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/discussion-forum"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/discussion-forum"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/discussion-forum"
      ><span class="devsite-nav-text" tooltip>Discussion forum</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/education-qa"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/education-qa"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/education-qa"
      ><span class="devsite-nav-text" tooltip>Education Q&amp;A</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/employer-rating"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/employer-rating"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/employer-rating"
      ><span class="devsite-nav-text" tooltip>Employer aggregate rating</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/estimated-salary"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/estimated-salary"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/estimated-salary"
      ><span class="devsite-nav-text" tooltip>Estimated salary</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/event"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/event"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/event"
      ><span class="devsite-nav-text" tooltip>Event</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/factcheck"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/factcheck"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/factcheck"
      ><span class="devsite-nav-text" tooltip>Fact check</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/faqpage"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/faqpage"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/faqpage"
      ><span class="devsite-nav-text" tooltip>FAQ</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/home-activities"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/home-activities"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/home-activities"
      ><span class="devsite-nav-text" tooltip>Home activities</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/image-license-metadata"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/image-license-metadata"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/image-license-metadata"
      ><span class="devsite-nav-text" tooltip>Image metadata</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/job-posting"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/job-posting"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/job-posting"
      ><span class="devsite-nav-text" tooltip>Job posting</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/learning-video"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/learning-video"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/learning-video"
      ><span class="devsite-nav-text" tooltip>Learning video</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/local-business"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/local-business"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/local-business"
      ><span class="devsite-nav-text" tooltip>Local business</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/math-solvers"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/math-solvers"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/math-solvers"
      ><span class="devsite-nav-text" tooltip>Math solver</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/movie"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/movie"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/movie"
      ><span class="devsite-nav-text" tooltip>Movie carousel</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/organization"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/organization"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/organization"
      ><span class="devsite-nav-text" tooltip>Organization</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/practice-problems"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/practice-problems"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/practice-problems"
      ><span class="devsite-nav-text" tooltip>Practice problem</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/product"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/product"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/product"
      ><span class="devsite-nav-text" tooltip>Product</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/profile-page"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/profile-page"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/profile-page"
      ><span class="devsite-nav-text" tooltip>Profile page</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/qapage"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/qapage"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/qapage"
      ><span class="devsite-nav-text" tooltip>Q&amp;A</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/recipe"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/recipe"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/recipe"
      ><span class="devsite-nav-text" tooltip>Recipe</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/review-snippet"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/review-snippet"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/review-snippet"
      ><span class="devsite-nav-text" tooltip>Review snippet</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/sitelinks-searchbox"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/sitelinks-searchbox"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/sitelinks-searchbox"
      ><span class="devsite-nav-text" tooltip>Sitelinks search box</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/software-app"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/software-app"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/software-app"
      ><span class="devsite-nav-text" tooltip>Software app</span></a></li><li class="devsite-nav-item
           devsite-nav-beta"><a href="/search/docs/appearance/structured-data/speakable"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/speakable"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/speakable"
      ><span class="devsite-nav-text" tooltip>Speakable</span><span class="devsite-nav-icon material-icons"
        data-icon="beta"
        data-title="Beta"
        aria-hidden="true"></span></a></li><li class="devsite-nav-item
           devsite-nav-beta"><a href="/search/docs/appearance/structured-data/special-announcements"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/special-announcements"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/special-announcements"
      ><span class="devsite-nav-text" tooltip>Special announcement</span><span class="devsite-nav-icon material-icons"
        data-icon="beta"
        data-title="Beta"
        aria-hidden="true"></span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/paywalled-content"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/paywalled-content"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/paywalled-content"
      ><span class="devsite-nav-text" tooltip>Subscription and paywalled content</span></a></li><li class="devsite-nav-item
           devsite-nav-limited"><a href="/search/docs/appearance/structured-data/vacation-rental"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/vacation-rental"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/vacation-rental"
      ><span class="devsite-nav-text" tooltip>Vacation rental</span><span class="devsite-nav-icon material-icons"
        data-icon="limited"
        data-title="Limited Access"
        aria-hidden="true"></span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/vehicle-listing"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/vehicle-listing"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/vehicle-listing"
      ><span class="devsite-nav-text" tooltip>Vehicle listing</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/structured-data/video"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/structured-data/video"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/structured-data/video"
      ><span class="devsite-nav-text" tooltip>Video</span></a></li></ul></div></li></ul></div></li><li class="devsite-nav-item"><a href="/search/docs/appearance/title-link"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/title-link"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/title-link"
      ><span class="devsite-nav-text" tooltip>Title links</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Translated features</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/appearance/translated-results"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/translated-results"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/translated-results"
      ><span class="devsite-nav-text" tooltip>Translated results</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/ad-network-and-translation"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/ad-network-and-translation"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/ad-network-and-translation"
      ><span class="devsite-nav-text" tooltip>Ad networks and translation-related Google Search features</span></a></li></ul></div></li><li class="devsite-nav-item"><a href="/search/docs/appearance/video"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/video"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/video"
      ><span class="devsite-nav-text" tooltip>Videos</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/visual-elements-gallery"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/visual-elements-gallery"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/visual-elements-gallery"
      ><span class="devsite-nav-text" tooltip>Visual Elements gallery</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Web Stories</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/appearance/enable-web-stories"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/enable-web-stories"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/enable-web-stories"
      ><span class="devsite-nav-text" tooltip>Enable Web Stories on Google</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/web-stories-creation-best-practices"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/web-stories-creation-best-practices"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/web-stories-creation-best-practices"
      ><span class="devsite-nav-text" tooltip>Best practices for creating Web Stories</span></a></li><li class="devsite-nav-item"><a href="/search/docs/appearance/web-stories-content-policy"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/web-stories-content-policy"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/web-stories-content-policy"
      ><span class="devsite-nav-text" tooltip>Web Story content policy</span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Early Adopters Program</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item
           devsite-nav-beta"><a href="/search/docs/appearance/package-tracking"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/appearance/package-tracking"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/appearance/package-tracking"
      ><span class="devsite-nav-text" tooltip>Package tracking</span><span class="devsite-nav-icon material-icons"
        data-icon="beta"
        data-title="Beta"
        aria-hidden="true"></span></a></li></ul></div></li></ul></div></li>

  <li class="devsite-nav-item
           devsite-nav-expandable
           devsite-nav-accordion"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Monitoring and debugging</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/debugging-search-traffic-drops"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/debugging-search-traffic-drops"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/debugging-search-traffic-drops"
      ><span class="devsite-nav-text" tooltip>Debug drops in Search traffic</span></a></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Monitor with Search Console</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/search-console-start"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/search-console-start"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/search-console-start"
      ><span class="devsite-nav-text" tooltip>Get started with Search Console</span></a></li><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/bubble-chart-analysis"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/bubble-chart-analysis"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/bubble-chart-analysis"
      ><span class="devsite-nav-text" tooltip>Improve SEO with a bubble chart</span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Debug with search operators</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/search-operators"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/search-operators"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/search-operators"
      ><span class="devsite-nav-text" tooltip>Overview</span></a></li><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/search-operators/all-search-site"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/search-operators/all-search-site"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/search-operators/all-search-site"
      ><span class="devsite-nav-text" tooltip>site: search operator</span></a></li><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/search-operators/web-search-cache"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/search-operators/web-search-cache"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/search-operators/web-search-cache"
      ><span class="devsite-nav-text" tooltip>cache: search operator</span></a></li><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/search-operators/image-search"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/search-operators/image-search"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/search-operators/image-search"
      ><span class="devsite-nav-text" tooltip>Google Images search operators</span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Preventing and monitoring abuse</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/security"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/security"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/security"
      ><span class="devsite-nav-text" tooltip>Overview</span></a></li><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/prevent-abuse"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/prevent-abuse"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/prevent-abuse"
      ><span class="devsite-nav-text" tooltip>Prevent user-generated spam</span></a></li><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/security/malware"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/security/malware"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/security/malware"
      ><span class="devsite-nav-text" tooltip>Malware and unwanted software</span></a></li><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/security/prevent-malware"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/security/prevent-malware"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/security/prevent-malware"
      ><span class="devsite-nav-text" tooltip>Prevent a malware infection</span></a></li><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/security/social-engineering"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/security/social-engineering"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/security/social-engineering"
      ><span class="devsite-nav-text" tooltip>Social engineering (phishing and deceptive sites)</span></a></li><li class="devsite-nav-item"><a href="/search/docs/monitor-debug/security/safe-browsing-repeat-offenders"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/monitor-debug/security/safe-browsing-repeat-offenders"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/monitor-debug/security/safe-browsing-repeat-offenders"
      ><span class="devsite-nav-text" tooltip>Google Safe Browsing Repeat Offenders Policy</span></a></li></ul></div></li></ul></div></li>

  <li class="devsite-nav-item
           devsite-nav-expandable
           devsite-nav-accordion"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Site-specific guides</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>Ecommerce</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/specialty/ecommerce"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/ecommerce"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/ecommerce"
      ><span class="devsite-nav-text" tooltip>Overview</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/ecommerce/where-ecommerce-data-can-appear-on-google"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/ecommerce/where-ecommerce-data-can-appear-on-google"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/ecommerce/where-ecommerce-data-can-appear-on-google"
      ><span class="devsite-nav-text" tooltip>Where content can appear</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/ecommerce/share-your-product-data-with-google"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/ecommerce/share-your-product-data-with-google"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/ecommerce/share-your-product-data-with-google"
      ><span class="devsite-nav-text" tooltip>Share product data</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce"
      ><span class="devsite-nav-text" tooltip>Include structured data</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/ecommerce/how-to-launch-an-ecommerce-website"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/ecommerce/how-to-launch-an-ecommerce-website"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/ecommerce/how-to-launch-an-ecommerce-website"
      ><span class="devsite-nav-text" tooltip>Launch a new website</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/ecommerce/write-high-quality-reviews"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/ecommerce/write-high-quality-reviews"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/ecommerce/write-high-quality-reviews"
      ><span class="devsite-nav-text" tooltip>Write high quality reviews</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites"
      ><span class="devsite-nav-text" tooltip>Design a URL structure</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure"
      ><span class="devsite-nav-text" tooltip>Ecommerce site structure</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/ecommerce/pagination-and-incremental-page-loading"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading"
      ><span class="devsite-nav-text" tooltip>Pagination, incremental page loading, and Search</span></a></li></ul></div></li><li class="devsite-nav-item
           devsite-nav-expandable"><div class="devsite-expandable-nav">
      <a class="devsite-nav-toggle" aria-hidden="true"></a><div class="devsite-nav-title devsite-nav-title-no-path" tabindex="0" role="button">
        <span class="devsite-nav-text" tooltip>International and multilingual</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/search/docs/specialty/international"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/international"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/international"
      ><span class="devsite-nav-text" tooltip>Overview</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/international/managing-multi-regional-sites"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/international/managing-multi-regional-sites"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/international/managing-multi-regional-sites"
      ><span class="devsite-nav-text" tooltip>Managing multi-regional and multilingual sites</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/international/localized-versions"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/international/localized-versions"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/international/localized-versions"
      ><span class="devsite-nav-text" tooltip>Tell Google about localized versions of your page</span></a></li><li class="devsite-nav-item"><a href="/search/docs/specialty/international/locale-adaptive-pages"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /search/docs/specialty/international/locale-adaptive-pages"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/search/docs/specialty/international/locale-adaptive-pages"
      ><span class="devsite-nav-text" tooltip>How Google crawls locale-adaptive pages</span></a></li></ul></div></li></ul></div></li>
          </ul>
        
        
          
    
      
      <ul class="devsite-nav-list" menu="Documentation"
          aria-label="Side menu" hidden>
        
          
            
              
<li class="devsite-nav-item devsite-nav-heading">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    >
  
    <span class="devsite-nav-text" tooltip >
      SEO fundamentals
   </span>
    
  
  </span>
  

</li>

            
            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Introduction"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Introduction
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/essentials"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Search Essentials"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Search Essentials
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/fundamentals/get-on-google"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Get your website on Google"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Get your website on Google
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/fundamentals/how-search-works"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: How Google Search Works"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      How Google Search Works
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/fundamentals/seo-starter-guide"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: SEO starter guide"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      SEO starter guide
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/fundamentals/do-i-need-seo"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Do you need an SEO?"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Do you need an SEO?
   </span>
    
  
  </a>
  

</li>

            
          
        
          
            
              
<li class="devsite-nav-item devsite-nav-heading">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    >
  
    <span class="devsite-nav-text" tooltip >
      Crawling and indexing
   </span>
    
  
  </span>
  

</li>

            
            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/crawling-indexing/sitemaps/overview"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Sitemaps"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Sitemaps
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/crawling-indexing/robots/intro"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: robots.txt"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      robots.txt
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/crawling-indexing/special-tags"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Meta tags"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Meta tags
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/crawling-indexing/ask-google-to-recrawl"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Crawler management"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Crawler management
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/crawling-indexing/control-what-you-share"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Removals"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Removals
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/crawling-indexing/consolidate-duplicate-urls"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Canonicalization"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Canonicalization
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/crawling-indexing/301-redirects"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Redirects"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Redirects
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/crawling-indexing/javascript/javascript-seo-basics"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: JavaScript SEO"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      JavaScript SEO
   </span>
    
  
  </a>
  

</li>

            
          
        
          
            
              
<li class="devsite-nav-item devsite-nav-heading">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    >
  
    <span class="devsite-nav-text" tooltip >
      Ranking and search appearance
   </span>
    
  
  </span>
  

</li>

            
            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/appearance/visual-elements-gallery"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Visual Elements gallery"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Visual Elements gallery
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/appearance/title-link"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Title links"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Title links
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/appearance/snippet"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Snippets"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Snippets
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/appearance/google-images"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Images"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Images
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/appearance/video"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Videos"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Videos
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/appearance/structured-data/search-gallery"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Structured data"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Structured data
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/appearance/favicon-in-search"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Favicons"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Favicons
   </span>
    
  
  </a>
  

</li>

            
          
        
          
            
              
<li class="devsite-nav-item devsite-nav-heading">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    >
  
    <span class="devsite-nav-text" tooltip >
      Site-specific guides
   </span>
    
  
  </span>
  

</li>

            
            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/specialty/ecommerce"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Ecommerce"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Ecommerce
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/specialty/international"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: International and multilingual sites"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      International and multilingual sites
   </span>
    
  
  </a>
  

</li>

            
          
            
              
<li class="devsite-nav-item devsite-nav-heading">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    >
  
    <span class="devsite-nav-text" tooltip >
      Data analysis
   </span>
    
  
  </span>
  

</li>

            
            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/monitor-debug/search-console-start"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Get started with Search Console"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Get started with Search Console
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/monitor-debug/debugging-search-traffic-drops"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Debug traffic drops"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Debug traffic drops
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/docs/monitor-debug/bubble-chart-analysis"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Improve SEO with a bubble chart"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Improve SEO with a bubble chart
   </span>
    
  
  </a>
  

</li>

            
          
        
      </ul>
    
  
    
  
    
  
    
      
      <ul class="devsite-nav-list" menu="What&#39;s new"
          aria-label="Side menu" hidden>
        
          
            
            
              
<li class="devsite-nav-item">

  
  <a href="/search/news"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: All updates"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      All updates
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/search/updates"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Documentation updates"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Documentation updates
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Ranking updates"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Ranking updates
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="https://www.youtube.com/channel/UCWf2ZlNsCGDS89VBF_awNvA"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: New YouTube videos"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      New YouTube videos
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="https://pod.link/1512522198"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Recent podcast episodes"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Recent podcast episodes
   </span>
    
  
  </a>
  

</li>

            
          
        
      </ul>
    
  
    
  
    
  
        
        
          
    
  
        
      </div>
    
  </div>
</nav>
        
      </devsite-book-nav>
      <section id="gc-wrapper">
        <main role="main" class="devsite-main-content"
            
              has-book-nav
              has-sidebar
            >
          
          
          <div class="devsite-sidebar">
            <div class="devsite-sidebar-content">
                
                <devsite-toc class="devsite-nav"
                            role="navigation"
                            aria-label="On this page"
                            depth="2"
                            scrollbars
                  ></devsite-toc>
                <devsite-recommendations-sidebar class="nocontent devsite-nav">
                </devsite-recommendations-sidebar>
            </div>
          </div>
          
          <devsite-content>
            
              











<article class="devsite-article"><style>
      /* Styles inlined from /search/sitewide.css */
/* Popped white box with shadow*/
.sc-shadow-box-row .devsite-landing-row-inner {
  background-color: #fff;
  box-shadow: 0 13px 18px -8px rgba(0,0,0,0.15), 0 11px 55px 10px rgba(0,0,0,0.07);
  border-radius: 8px;
  margin-bottom: 55px;
}

/* Stat box for big numbers and description*/
.big-stats {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 64px 32px;
    text-align: center;
}
@media (min-width: 481px) {
  .big-stats {
      flex-direction: row;
  }
}
.big-stat {
    margin-bottom: 32px;
}
@media (min-width: 481px) {
  .big-stat {
      flex: 1;
      margin: 0 8px;
  }
}
.big-stat__figure {
    font-size: 1.5em;
    line-height: 1em;
}
@media (min-width: 241px) {
  .big-stat__figure {
      font-size: 4em;
  }
}
@media (min-width: 1020px) {
  .big-stat__figure {
      font-size: 6em;
  }
}
.big-stat__description,
.big-stat__figure {
    color: inherit;
    font-family: "Google Sans",sans-serif;
    margin: 0;
    text-align: inherit;
}
.big-stat__description {
    line-height: 1.5em;
}
.big-stat__description,
.big-stat__figure {
    color: inherit;
    font-family: "Google Sans",sans-serif;
    margin: 0;
    text-align: inherit;
}
.big-stat__sub {
    font-size: .5em;
    line-height: 1em;
    vertical-align: baseline;
}

/* Green background and text -- consistent style with devsite notices */
.green {
    background: #e0f2f1;
    color: #00796b;
}

/* Color scheme of unconference for background and text */
.unconference-yellow {
  background: #fdd901;
  color: #3a3a3a;
}

/* Publish date styling */
.publish-date {
  font-size: smaller;
  font-style: italic
}

/*
  Fixes SVG label spacing fix to avoid webkit (Safari et. al.) issues
*/
foreignObject p {
  margin: 0 ;
  padding: 1rem 0;
}

      </style>
  
  
  
  
  

  <div class="devsite-article-meta nocontent" role="navigation">
    
    
    <ul class="devsite-breadcrumb-list"
  
    aria-label="Breadcrumb">
  
  <li class="devsite-breadcrumb-item
             ">
    
    
    
      
  <a href="https://developers.google.com/"
      
        class="devsite-breadcrumb-link gc-analytics-event"
      
        data-category="Site-Wide Custom Events"
      
        data-label="Breadcrumbs"
      
        data-value="1"
      
        track-type="globalNav"
      
        track-name="breadcrumb"
      
        track-metadata-position="1"
      
        track-metadata-eventdetail=""
      
    >
    
        Home
      
  </a>
  
    
  </li>
  
  <li class="devsite-breadcrumb-item
             ">
    
      
      <div class="devsite-breadcrumb-guillemet material-icons" aria-hidden="true"></div>
    
    
    
      
  <a href="https://developers.google.com/search"
      
        class="devsite-breadcrumb-link gc-analytics-event"
      
        data-category="Site-Wide Custom Events"
      
        data-label="Breadcrumbs"
      
        data-value="2"
      
        track-type="globalNav"
      
        track-name="breadcrumb"
      
        track-metadata-position="2"
      
        track-metadata-eventdetail="Google Search Central"
      
    >
    
        Search Central
      
  </a>
  
    
  </li>
  
  <li class="devsite-breadcrumb-item
             ">
    
      
      <div class="devsite-breadcrumb-guillemet material-icons" aria-hidden="true"></div>
    
    
    
      
  <a href="https://developers.google.com/search/docs"
      
        class="devsite-breadcrumb-link gc-analytics-event"
      
        data-category="Site-Wide Custom Events"
      
        data-label="Breadcrumbs"
      
        data-value="3"
      
        track-type="globalNav"
      
        track-name="breadcrumb"
      
        track-metadata-position="3"
      
        track-metadata-eventdetail="Documentation"
      
    >
    
        Documentation
      
  </a>
  
    
  </li>
  
</ul>
    
      
    <devsite-thumb-rating position="header">
    </devsite-thumb-rating>
  
    
  </div>
  
    <devsite-feedback
  position="header"
  project-name="Documentation"
  product-id="103417"
  bucket="Search Docs"
  context="DevSite feedback link"
  version="t-devsite-webserver-20240125-r00-rc00.458103772116058732"
  data-label="Send Feedback Button"
  track-type="feedback"
  track-name="sendFeedbackLink"
  track-metadata-position="header"
  class="nocontent"
  
    disable-product-feedback
  
  
  
    project-icon="https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/developers/images/touchicon-180-new.png"
  
  
    project-support-url="https://developers.google.com/search/help"
  
  feedback-type="thumb-rating">

  <button>
  
    
    Send feedback
  
  </button>
</devsite-feedback>
  <devsite-feature-tooltip
          ack-key="AckCollectionsBookmarkTooltipDismiss"
          analytics-category="Site-Wide Custom Events"
          analytics-action-show="Callout Profile displayed"
          analytics-action-close="Callout Profile dismissed"
          analytics-label="Create Collection Callout"
          class="devsite-page-bookmark-tooltip nocontent"
          dismiss-button="true"
          id="devsite-collections-dropdown"

          
          dismiss-button-text="Dismiss"

          
          close-button-text="Got it">

        
        <devsite-bookmark></devsite-bookmark>

        <span slot="popout-heading">
          
          Stay organized with collections
        </span>
        <span slot="popout-contents">
          
          Save and categorize content based on your preferences.
        </span>
      </devsite-feature-tooltip>
  

  <devsite-toc class="devsite-nav"
    depth="2"
    devsite-toc-embedded
    >
  </devsite-toc>
  
    
  

  






<div class="devsite-article-body clearfix
  devsite-no-page-title">

  
    
  <h1 class="page-title" id="do-you-need-an-seo" data-text="Do you need an SEO?" tabindex="-1">Do you need an SEO?</h1>
  

<div class="video-wrapper" style="margin-top: 20px;">
  <devsite-video video-id="NWsyr-D06Ck">
  </devsite-video>
</div>

<p>SEO is an acronym for "search engine optimization" or "search engine optimizer." Deciding to
  hire an SEO is a big decision that can potentially improve your site and save time, but you
  can also risk damage to your site and reputation. Make sure to research the potential
  advantages as well as the damage that an irresponsible SEO can do to your site. Many SEOs and
  other agencies and consultants provide useful services for website owners, including:</p>
<ul>
  <li>Review of your site content or structure</li>
  <li>Technical advice on website development: for example, hosting, redirects, error pages, use of JavaScript</li>
  <li>Content development</li>
  <li>Management of online business development campaigns</li>
  <li>Keyword research</li>
  <li>SEO training</li>
  <li>Expertise in specific markets and geographies.</li>
</ul>
<p>Advertising with Google won't have any effect on your site's presence in our search results.
  Google never accepts money to include or rank sites in our search results, and it costs
  nothing to appear in our organic search results. Resources such as <a href="https://search.google.com/search-console"  class="external-link">Search Console</a>,
  the official <a href="/search/blog">Google Search Central blog</a>, and our
  <a href="https://support.google.com/webmasters/community" class="external-link">discussion forum</a>
  can provide you with a great deal of information about how to optimize your site for organic
  search.</p>
<h2 id="getting-started-with-seo" data-text="Getting started with SEO" tabindex="-1">Getting started with SEO</h2>
<p>If you run a small local business, you can probably do much of the work yourself. Here are
  some good resources:</p>
<ul>
<li>Check out our <a href="https://www.youtube.com/playlist?list=PLKoqnv2vTMUOHPb5IJIn-7egNRmsvbPIE" class="external-link">video series</a>
  on building an online presence for your business.</li>
<li><a href="/search/docs/essentials">Search Essentials</a></li>
<li><a href="/search/docs/fundamentals/how-search-works">How Google crawls, indexes, and serves the
  web.</a></li>
<li>The <a href="/search/docs/fundamentals/seo-starter-guide">SEO starter guide</a> describes much of
  what your SEO will do for you. Although you don't need to know this guide well yourself if
  you're hiring a professional to do the work for you, it is useful to be familiar with these
  techniques, so that you can be aware if an SEO wants to use a technique that is not recommended
  or, worse, strongly discouraged.</li>
</ul>
<p>Remember that it will take time for you to see results: typically from four months to a year
  from the time you begin making changes until you start to see the benefits.</p>
<p>If you think that you still need extra help from a professional, continue reading about how
  to choose an SEO.</p>
<h2 id="choosing-an-seo" data-text="Choosing an SEO" tabindex="-1">Choosing an SEO</h2>
<p>If you're thinking about hiring an SEO, the earlier the better. A great time to hire is when
  you're considering a site redesign, or planning to launch a new site. That way, you and your
  SEO can ensure that your site is designed to be search engine-friendly from the bottom up.
  However, a good SEO can also help improve an existing site.</p>
<ol>
<li><b>Be committed to implementing the recommended changes.</b> Making the changes
  recommended by an SEO takes time and effort; if you aren't going to take the time to make these
  changes, it's not worthwhile hiring a professional.</li>
<li><b>Interview your potential SEO.</b> Some useful questions to ask an SEO include:
  <ul>
    <li>Can you show me examples of your previous work and share some success stories?</li>
    <li>Do you follow the Google Search Essentials?</li>
    <li>Do you offer any online marketing services or advice to complement your organic search business?</li>
    <li>What kind of results do you expect to see, and in what timeframe? How do you measure your success?</li>
    <li>What's your experience in my industry?</li>
    <li>What's your experience in my country/city?</li>
    <li>What's your experience developing international sites?</li>
    <li>What are your most important SEO techniques?</li>
    <li>How long have you been in business?</li>
    <li>How can I expect to communicate with you? Will you share with me all the changes you make to
      my site, and provide detailed information about your recommendations and the reasoning behind
      them?</li>
    <li>See if the SEO is interested in you and your business. If they're not interested, find
      someone who is. Your SEO should ask questions such as:
      <ul>
        <li>What makes your business or service unique and valuable to customers?</li>
        <li>Who are your customers?</li>
        <li>How does your business make money, and how can search results help?</li>
        <li>What other advertising channels are you using?</li>
        <li>Who are your competitors?</li>
      </ul>
    </li>
  </ul>
</li>
<li><b>Check your SEO's business references</b>. Ask past clients if they felt that
  this SEO provided useful service, was easy to work with, and produced positive results.</li>
<li><b>Ask for a technical and search audit</b> for your site to learn what they think
  needs to be done, why, and what the expected outcome should be. You'll probably have to pay
  for this. You will probably have to give them read-only access to your site on Search Console.
  (At this stage, don't grant them write access.) Your prospective SEO should be able to give you
  realistic estimates of improvement, and an estimate of the work involved. If they guarantee you
  that their changes will give you first place in search results, find someone else.</li>
<li><b>Decide if you want to hire.</b></li>
</ol>
<h3 id="precautions" data-text="Precautions" tabindex="-1">Precautions</h3>
<p>While SEOs can provide clients with valuable services, some unethical SEOs have given the
  industry a black eye by using overly aggressive marketing efforts and attempting to manipulate
  search engine results in unfair ways. Practices that violate <a href="/search/docs/essentials/spam-policies">our spam policies</a>
  may result in a negative adjustment of your site's presence in Google, or even
  the removal of your site from our index.</p>
<p>When your SEO comes up with a set of recommendations for your site, ask them to corroborate
  these recommendations with a trusted source, such as a Search Console help page, Google Search
  Central blog entry, or Google-sanctioned response in the
  <a href="https://support.google.com/webmasters/community" class="external-link">forum</a>.</p>
<p>Here are some things to consider:</p>
<ul>
<li>One common scam is the creation of "shadow" domains that funnel users to a site by using
  deceptive redirects. These shadow domains are often owned by the SEO who claims to be
  working on a client's behalf. However, if the relationship sours, the SEO may point the
  domain to a different site, or even to a competitor's domain. If that happens, the client has
  paid to develop a competing site owned entirely by the SEO.</li>
<li>Another illicit practice is to place "doorway" pages loaded with keywords on the client's
  site somewhere. The SEO promises this will make the page more relevant for more queries. This
  is inherently false since individual pages are rarely relevant for a wide range of keywords.
  More insidious, however, is that these doorway pages often contain hidden links to the SEO's
  other clients as well. Such doorway pages drain away the link popularity of a site and route
  it to the SEO and its other clients, which may include sites with unsavory or illegal content.</li>
<li>Finally, avoid getting involved in <a href="/search/docs/essentials/spam-policies#link-spam">link schemes</a>,
  such as buying links from other sites to increase your ranking. This is against
  Google's spam policies and can result in a <a href="https://support.google.com/webmasters/answer/9044175?ref_topic=7440006#unnatural-links-to-your-site&zippy=%2Cunnatural-links-to-your-site" class="external-link">manual
  action against some or all of your site</a>, which will negatively affect your site ranking.</li>
</ul>
<p>If you feel that you were deceived by an SEO in some way, you may want to report it.</p>
<p>In the United States, the Federal Trade Commission (FTC) handles complaints about deceptive or
  unfair business practices. To file a complaint, visit: <a href="https://www.ftc.gov/" class="external-link">https://www.ftc.gov/</a>
  and click on "File a Complaint Online," call 1-877-FTC-HELP, or write to:</p>
<blockquote>Federal Trade Commission<br/>
CRC-240<br/>
Washington, D.C. 20580</blockquote>
<p>If your complaint is against a company in a country other than the United States, file it at
  <a href="https://www.econsumer.gov/" class="external-link">https://www.econsumer.gov/</a>.</p>
<h2 id="helpful-guidelines" data-text="Helpful guidelines" tabindex="-1">Helpful guidelines</h2>
<ul>
<li><b>Be wary of SEO firms and web consultants or agencies that email you out of the blue.</b>
<p>Amazingly, we get these spam emails too:</p>
<blockquote><i>"Dear google.com,<br/>
    I visited your website and noticed that you are not listed in most of the major search
  engines and directories..."</i></blockquote>
<p>Reserve the same skepticism for unsolicited email about search engines as you do for "burn
  fat at night" diet pills or requests to help transfer funds from deposed dictators.</p>
</li>
<li>
  <b>No one can guarantee a #1 ranking on Google.</b>
  <p>
    Beware of SEOs that claim to guarantee rankings, allege a "special relationship" with Google,
    or advertise a "priority submit" to Google. There is no priority submit for Google. In fact,
    the only way to
    <a href="/search/docs/crawling-indexing/ask-google-to-recrawl">submit a site to Google</a>
    directly is through the
    <a href="/search/docs/crawling-indexing/ask-google-to-recrawl#use-the-url-inspection-tool-just-a-few-urls">URL Inspection Tool</a>,
    by submitting a
    <a href="/search/docs/crawling-indexing/sitemaps/overview">Sitemap</a>, or for more specialized
    content, using the <a href="/search/apis/indexing-api/v3/quickstart">Google Indexing API</a>.
    You can do any of these yourself.
  </p>
</li>
<li><b>Be careful if a company is secretive or won't clearly explain what they intend to do.</b>
<p>Ask for explanations if something is unclear. If an SEO creates deceptive or misleading
  content on your behalf, such as doorway pages or "throwaway" domains, your site could be
  removed entirely from Google's index. Ultimately, you are responsible for the actions of any
  companies you hire, so it's best to be sure you know exactly how they intend to "help" you.
  If an SEO has FTP access to your server, they should be willing to explain all the changes they
  are making to your site.</p>
</li>
<li><b>You should never have to link to an SEO.</b>
<p>Avoid SEOs that talk about link popularity schemes or submitting your site to thousands of
  search engines. These are typically useless exercises that don't affect your ranking in the
  results of the major search engines&mdash;at least, not in a way you would likely consider to be positive.</p>
</li>
<li><b>Choose wisely.</b>
<p>While you consider whether to go with an SEO, you may want to do some research on the
  industry. Google is one way to do that, of course. While Google doesn't comment on specific
  companies, we've encountered firms calling themselves SEOs who follow practices that are
  clearly beyond the pale of accepted business behavior. Be careful.</p>
</li>
<li><b>Be sure to understand where the money goes.</b>
<p>While Google never sells better ranking in our search results, several other search engines
  combine pay-per-click or pay-for-inclusion results with their regular web search results.
  Some SEOs will promise to rank you highly in search engines, but place you in the advertising
  section rather than in the search results. A few SEOs will even change their bid prices in
  real time to create the illusion that they "control" other search engines and can place
  themselves in the slot of their choice. This scam doesn't work with Google because our
  advertising is clearly labeled and separated from our search results, but be sure to ask any
  SEO you're considering which fees go toward permanent inclusion and which apply toward temporary
  advertising.</p>
</li>
<li><b>What are some other things to look out for?</b>
<p>There are a few warning signs that you may be dealing with a rogue SEO. It's far from a
  comprehensive list, so if you have any doubts, trust your instincts:</p>
    <ul>
      <li>Owns shadow domains</li>
      <li>Puts links to their other clients on doorway pages</li>
      <li>Offers to sell keywords in the address bar</li>
      <li>Doesn't distinguish between actual search results and ads that appear on search results pages</li>
      <li>Guarantees ranking, but only on obscure, long keyword phrases you would get anyway</li>
      <li>Operates with multiple aliases or falsified WHOIS info</li>
      <li>Gets traffic from "fake" search engines, spyware, or scumware</li>
      <li>Has had domains removed from Google's index or is not itself listed in Google</li>
    </ul>
  </li>
</ul>

  
  
  
  

  
    <devsite-hats-survey class="nocontent"
      hats-id="egUfosvgZ0gb2CML1jd0VMoBx2ec"
      listnr-id="103417"></devsite-hats-survey>
  
</div>

  

  
    
    
      
    <devsite-thumb-rating position="footer">
    </devsite-thumb-rating>
  
       
         <devsite-feedback
  position="footer"
  project-name="Documentation"
  product-id="103417"
  bucket="Search Docs"
  context="DevSite feedback link"
  version="t-devsite-webserver-20240125-r00-rc00.458103772116058732"
  data-label="Send Feedback Button"
  track-type="feedback"
  track-name="sendFeedbackLink"
  track-metadata-position="footer"
  class="nocontent"
  
    disable-product-feedback
  
  
  
    project-icon="https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/developers/images/touchicon-180-new.png"
  
  
    project-support-url="https://developers.google.com/search/help"
  
  feedback-type="thumb-rating">

  <button>
  
    
    Send feedback
  
  </button>
</devsite-feedback>
       
    
    
  

  
</article>


<devsite-content-footer class="nocontent">
  <p>Except as otherwise noted, the content of this page is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 License</a>, and code samples are licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a>. For details, see the <a href="https://developers.google.com/site-policies">Google Developers Site Policies</a>. Java is a registered trademark of Oracle and/or its affiliates.</p>
  <p>Last updated 2024-01-03 UTC.</p>
</devsite-content-footer>


<devsite-notification
>
</devsite-notification>


  
<div class="devsite-content-data">
  <template class="devsite-thumb-rating-down-categories">
  [{
      "type": "thumb-down",
      "id": "missingTheInformationINeed",
      "label":"Missing the information I need"
    },{
      "type": "thumb-down",
      "id": "tooComplicatedTooManySteps",
      "label":"Too complicated / too many steps"
    },{
      "type": "thumb-down",
      "id": "outOfDate",
      "label":"Out of date"
    },{
      "type": "thumb-down",
      "id": "samplesCodeIssue",
      "label":"Samples / code issue"
    },{
      "type": "thumb-down",
      "id": "otherDown",
      "label":"Other"
    }]
  </template>
  <template class="devsite-thumb-rating-up-categories">
  [{
      "type": "thumb-up",
      "id": "easyToUnderstand",
      "label":"Easy to understand"
    },{
      "type": "thumb-up",
      "id": "solvedMyProblem",
      "label":"Solved my problem"
    },{
      "type": "thumb-up",
      "id": "otherUp",
      "label":"Other"
    }]
  </template>
  
    
    
    <template class="devsite-thumb-rating-feedback">
      <devsite-feedback
  position="thumb-rating"
  project-name="Documentation"
  product-id="103417"
  bucket="Search Docs"
  context="DevSite feedback link"
  version="t-devsite-webserver-20240125-r00-rc00.458103772116058732"
  data-label="Send Feedback Button"
  track-type="feedback"
  track-name="sendFeedbackLink"
  track-metadata-position="thumb-rating"
  class="nocontent"
  
    disable-product-feedback
  
  
  
    project-icon="https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/developers/images/touchicon-180-new.png"
  
  
    project-support-url="https://developers.google.com/search/help"
  
  feedback-type="thumb-rating">

  <button>
  
    Need to tell us more?
  
  </button>
</devsite-feedback>
    </template>
  
</div>
            
          </devsite-content>
        </main>
        <devsite-footer-promos class="devsite-footer">
          
            

<nav class="devsite-footer-promos nocontent" aria-label="Promotions">
  <ul class="devsite-footer-promos-list">
    
    <li class="devsite-footer-promo">
      <a href="https://pod.link/1512522198"
         class="devsite-footer-promo-title gc-analytics-event"
         data-category="Site-Wide Custom Events"
       
       
         aria-label="Search Off the Record podcast episodes"
       
         data-category="Search docs"
       
         data-label="podcast footer promo"
       >
        
        
          
            <img class="devsite-footer-promo-icon"
                 src="/static/search/images/search-off-the-record-podcast-logo.png"
                 loading="lazy"
                 alt="Podcast">
          
        
        Podcast
      </a>
      <div class="devsite-footer-promo-description">Listen to our Search Off the Record podcast</div>
    </li>
    
    <li class="devsite-footer-promo">
      <a href="https://feeds.feedburner.com/blogspot/amDG"
         class="devsite-footer-promo-title gc-analytics-event"
         data-category="Site-Wide Custom Events"
       
       
         data-category="Search docs"
       
         data-label="blog footer promo"
       
         aria-label="RSS feed for the Search Central Blog"
       >
        
        
          
            <img class="devsite-footer-promo-icon"
                 src="https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/rss_feed/default/24px.svg"
                 loading="lazy"
                 alt="Blog">
          
        
        Blog
      </a>
      <div class="devsite-footer-promo-description">Subscribe to our RSS feed</div>
    </li>
    
    <li class="devsite-footer-promo">
      <a href="https://twitter.com/googlesearchc"
         class="devsite-footer-promo-title gc-analytics-event"
         data-category="Site-Wide Custom Events"
       
       
         data-category="Search docs"
       
         aria-label="Twitter feed for Google Search Central"
       
         data-label="twitter footer promo"
       >
        
        
          
            <img class="devsite-footer-promo-icon"
                 src="/static/homepage-assets/images/x.svg"
                 loading="lazy"
                 alt="X">
          
        
        X
      </a>
      <div class="devsite-footer-promo-description">Follow @googlesearchc for announcements</div>
    </li>
    
  </ul>
</nav>

          
        </devsite-footer-promos>
        <devsite-footer-linkboxes class="devsite-footer">
          
            
<nav class="devsite-footer-linkboxes nocontent" aria-label="Footer links">
  
  <ul class="devsite-footer-linkboxes-list">
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Get support</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="https://support.google.com/webmasters/community"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Go to the help forum
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/search/help/office-hours"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Submit a question for office hours
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/search/help"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
              
              
            
          
            More support resources
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Get updates</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/search/blog"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Blog
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="https://twitter.com/googlesearchc"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            X
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="https://youtube.com/channel/UCWf2ZlNsCGDS89VBF_awNvA"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
              
              
            
          
            YouTube
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Resources</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/search/docs/fundamentals/get-on-google"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Do you need an SEO?
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/search/docs/fundamentals/seo-starter-guide"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            SEO Starter Guide
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="https://status.search.google.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            Status of Search systems
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="https://support.google.com/webmasters"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
          
            Search Console documentation
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/search/case-studies/overview"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 5)"
            >
            
              
              
            
          
            Case Studies
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Tools</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="https://search.google.com/search-console"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Search Console
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="https://search.google.com/test/rich-results"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Rich Results Test
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="https://pagespeed.web.dev"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            PageSpeed Insights
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="https://search.google.com/test/amp"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
              
              
            
          
            AMP Test
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
  </ul>
  
</nav>
          
        </devsite-footer-linkboxes>
        <devsite-footer-utility class="devsite-footer">
          
            

<div class="devsite-footer-utility nocontent">
  
  
  <nav class="devsite-footer-sites" aria-label="Other Google Developers websites">
    <a href="https://developers.google.com/"
       class="devsite-footer-sites-logo-link gc-analytics-event"
       data-category="Site-Wide Custom Events"
       data-label="Footer Google Developers Link">
      <picture>
        <source srcset="https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/developers/images/lockup-google-for-developers-dark-theme.svg"
                media="(prefers-color-scheme: none)"
                class="devsite-dark-theme"
                loading="lazy"
                alt="Google Developers">
        <img class="devsite-footer-sites-logo"
             src="https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/developers/images/lockup-google-for-developers.svg"
             loading="lazy"
             alt="Google Developers">
      </picture>
    </a>
    <ul class="devsite-footer-sites-list">
      
      <li class="devsite-footer-sites-item">
        <a href="//developer.android.com"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Android Link"
         
         >
          Android
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//developer.chrome.com/home"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Chrome Link"
         
         >
          Chrome
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//firebase.google.com"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Firebase Link"
         
         >
          Firebase
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//cloud.google.com"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Google Cloud Platform Link"
         
         >
          Google Cloud Platform
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="/products"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer All products Link"
         
         >
          All products
        </a>
      </li>
      
    </ul>
  </nav>
  

  
  <nav class="devsite-footer-utility-links" aria-label="Utility links">
    
    <ul class="devsite-footer-utility-list">
      
      <li class="devsite-footer-utility-item
                 ">
        
        
        <a class="devsite-footer-utility-link gc-analytics-event"
           href="/terms/site-terms"
           data-category="Site-Wide Custom Events"
           data-label="Footer Terms link"
         >
          Terms
        </a>
        
      </li>
      
      <li class="devsite-footer-utility-item
                 ">
        
        
        <a class="devsite-footer-utility-link gc-analytics-event"
           href="//policies.google.com/privacy"
           data-category="Site-Wide Custom Events"
           data-label="Footer Privacy link"
         >
          Privacy
        </a>
        
      </li>
      
      <li class="devsite-footer-utility-item
                 devsite-footer-utility-button">
        
        <span class="devsite-footer-utility-description">Sign up for the Google for Developers newsletter</span>
        
        
        <a class="devsite-footer-utility-link gc-analytics-event"
           href="/newsletter/subscribe"
           data-category="Site-Wide Custom Events"
           data-label="Footer Subscribe link"
         >
          Subscribe
        </a>
        
      </li>
      
    </ul>
    
    
<devsite-language-selector>
  <ul role="presentation">
    
    
    <li role="presentation">
      <a role="menuitem" lang="en"
        >English</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="de"
        >Deutsch</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="es"
        >Español</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="es_419"
        >Español – América Latina</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="fr"
        >Français</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="id"
        >Indonesia</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="it"
        >Italiano</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="pl"
        >Polski</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="pt_br"
        >Português – Brasil</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="vi"
        >Tiếng Việt</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="tr"
        >Türkçe</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ru"
        >Русский</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ar"
        >العربيّة</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="hi"
        >हिंदी</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="th"
        >ภาษาไทย</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="zh_cn"
        >中文 – 简体</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="zh_tw"
        >中文 – 繁體</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ja"
        >日本語</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ko"
        >한국어</a>
    </li>
    
  </ul>
</devsite-language-selector>

  </nav>
</div>
          
        </devsite-footer-utility>
        <devsite-panel></devsite-panel>
        
        
      </section></section>
    <devsite-sitemask></devsite-sitemask>
    <devsite-snackbar
    
        type="cookie-notification"
        data-cookie-notice="4"
    
    >
</devsite-snackbar>
    <devsite-tooltip ></devsite-tooltip>
    <devsite-heading-link></devsite-heading-link>
    <devsite-analytics analytics-iframe enable-cb>
      
        <script type="application/json" analytics>[{&#34;dimensions&#34;: {&#34;dimension1&#34;: &#34;Signed out&#34;, &#34;dimension6&#34;: &#34;en&#34;, &#34;dimension4&#34;: &#34;Documentation&#34;, &#34;dimension3&#34;: false, &#34;dimension5&#34;: &#34;en&#34;, &#34;dimension11&#34;: false}, &#34;gaid&#34;: &#34;UA-24532603-1&#34;, &#34;metrics&#34;: {&#34;ratings_count&#34;: &#34;metric2&#34;, &#34;ratings_value&#34;: &#34;metric1&#34;}, &#34;purpose&#34;: 1}, {&#34;dimensions&#34;: {&#34;dimension1&#34;: &#34;Signed out&#34;, &#34;dimension6&#34;: &#34;en&#34;, &#34;dimension4&#34;: &#34;Documentation&#34;, &#34;dimension3&#34;: false, &#34;dimension5&#34;: &#34;en&#34;, &#34;dimension11&#34;: false}, &#34;gaid&#34;: &#34;UA-24532603-6&#34;, &#34;metrics&#34;: {&#34;ratings_count&#34;: &#34;metric2&#34;, &#34;ratings_value&#34;: &#34;metric1&#34;}, &#34;purpose&#34;: 0}]</script>
<script type="application/json" tag-management>{&#34;ga4&#34;: [{&#34;id&#34;: &#34;G-272J68FCRF&#34;, &#34;purpose&#34;: 1}, {&#34;id&#34;: &#34;G-Q04XXL6ZW2&#34;, &#34;purpose&#34;: 0}], &#34;ga4p&#34;: [{&#34;id&#34;: &#34;G-272J68FCRF&#34;, &#34;purpose&#34;: 1}], &#34;gtm&#34;: [], &#34;parameters&#34;: {&#34;internalUser&#34;: &#34;False&#34;, &#34;language&#34;: {&#34;machineTranslated&#34;: &#34;False&#34;, &#34;requested&#34;: &#34;en&#34;, &#34;served&#34;: &#34;en&#34;}, &#34;pageType&#34;: &#34;article&#34;, &#34;projectName&#34;: &#34;Documentation&#34;, &#34;signedIn&#34;: &#34;False&#34;, &#34;tenant&#34;: &#34;developers&#34;, &#34;recommendations&#34;: {&#34;sourcePage&#34;: &#34;&#34;, &#34;sourceType&#34;: 0, &#34;sourceRank&#34;: 0, &#34;sourceIdenticalDescriptions&#34;: 0, &#34;sourceTitleWords&#34;: 0, &#34;sourceDescriptionWords&#34;: 0, &#34;experiment&#34;: &#34;&#34;}, &#34;experiment&#34;: {&#34;ids&#34;: &#34;&#34;}}}</script>
      
    </devsite-analytics>
    
      <devsite-badger></devsite-badger>
    
    
    <script nonce="VJ7g9+d2C8LZ+hA58kfiEkz+TCYDKD">
  
  (function(d,e,v,s,i,t,E){d['GoogleDevelopersObject']=i;
    t=e.createElement(v);t.async=1;t.src=s;E=e.getElementsByTagName(v)[0];
    E.parentNode.insertBefore(t,E);})(window, document, 'script',
    'https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/developers/js/app_loader.js', '[1,"en",null,"/js/devsite_app_module.js","https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be","https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/developers","https://developers-dot-devsite-v2-prod.appspot.com",null,null,["/_pwa/developers/manifest.json","https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/images/video-placeholder.svg","https://www.gstatic.com/devrel-devsite/prod/v2df3c70ff8eb01e8c0bb049c3da894e4221ea678ae827e9fb45267d1a61dc2be/developers/images/favicon-new.png","https://fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700&display=swap"],1,null,[1,6,8,12,14,17,21,25,50,52,63,70,75,76,80,87,91,92,93,97,98,100,101,102,103,104,105,107,108,109,110,112,113,117,118,120,122,124,125,126,127,129,130,131,132,133,134,135,136,138,140,141,147,148,149,150,151,152,155,156,157,158,159,161,163,164,168,169,170,172,179,180,182,183,186,190,191,193,196],"AIzaSyAP-jjEJBzmIyKR4F-3XITp8yM9T1gEEI8","AIzaSyB6xiKGDR5O3Ak2okS4rLkauxGUG7XP0hg","developers.google.com","AIzaSyAQk0fBONSGUqCNznf6Krs82Ap1-NV6J4o","AIzaSyCCxcqdrZ_7QMeLCRY20bh_SXdAYqy70KY",null,null,null,["OpenInReplit__enable_replit","Search__enable_suggestions_from_borg","MiscFeatureFlags__enable_keyword_inheritance","MiscFeatureFlags__enable_project_variables","Profiles__enable_public_developer_profiles","Concierge__enable_concierge","Cloud__enable_cloud_dlp_service","Concierge__enable_pushui","Cloud__enable_cloud_shell","Profiles__enable_developer_profiles_dashboard_recommendations","SignIn__enable_auto_signin_oauth","Significatio__enable_experiment_id_caching","Profiles__require_profile_eligibility_for_signin","Profiles__enable_developer_profiles_callout","Profiles__enable_profile_notifications_ui","Profiles__enable_page_saving","Cloud__enable_cloud_shell_fte_user_flow","MiscFeatureFlags__developers_footer_image","Cloud__enable_cloudx_ping","Profiles__enable_profile_communities","AuthorPageInsights__enable_author_page_insights","Significatio__enable_by_tenant","ContentExcellence__enable_verified_date","BookNav__enable_collapsible_book_nav","MiscFeatureFlags__enable_explain_this_code","Profiles__enable_inferred_interests","Experiments__reqs_query_experiments","Badges__enable_hide_badges","Profiles__enable_release_notes_notifications","ContentExcellence__enable_googler_button","MiscFeatureFlags__developers_footer_dark_image","Badges__enable_drag_and_drop_badges","Search__enable_page_map","Search__enable_faceted_search","Search__enable_dynamic_content_confidential_banner","Profiles__enable_awarding_url","Cloud__enable_cloudx_experiment_ids","BookNav__enable_tenant_cache_key","Analytics__enable_cookie_bar","MiscFeatureFlags__content_publisher_push_queue","Profiles__enable_profile_collections","MiscFeatureFlags__enable_firebase_utm","Cloud__enable_cloud_facet_chat","BookNav__enable_book_nav_filtering","Cloud__enable_free_trial_server_call"],null,null,"AIzaSyBLEMok-5suZ67qRPzx0qUtbnLmyT_kCVE","https://developerscontentserving-pa.clients6.google.com","AIzaSyCM4QpTRSqP5qI4Dvjt4OAScIN8sOUlO-k","https://developerscontentsearch-pa.clients6.google.com",1,4]')
  
</script>
    <devsite-a11y-announce></devsite-a11y-announce>
  </body>
</html>