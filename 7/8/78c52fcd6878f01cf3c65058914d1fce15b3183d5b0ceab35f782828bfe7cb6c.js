(function(_ds){var window=this;try{customElements.define("devsite-dropdown-list",_ds.FK)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteDropdownList",a)};})(_ds_www);
icon-url="'+_ds.W(_ds.vD(b.imageUrl))+'" badge-url="'+_ds.W(_ds.vD(b.url))+'"'+(null!=b.currentTierCount?' badge-count="'+_ds.W(b.currentTierCount)+'"':"")+(null!=b.complete?' badge-complete="'+_ds.W(b.complete)+'"':"")+(null!=b.isNewTier?' is-new-tier="'+_ds.W(b.isNewTier)+'"':"")+(b.path?' badge-path="'+_ds.W(b.path)+'"':"")+(b.shareTitle?' badge-share-title="'+
_ds.W(b.shareTitle)+'"':"")+(b.shareDescription?' badge-share-description="'+_ds.W(b.shareDescription)+'"':"")+(b.nextPlaylistUrl?' next-playlist-url="'+_ds.W(_ds.vD(b.nextPlaylistUrl))+'"':"")+(b.redeemAnotherBtn?" redeem-another":"")+(b.hideButtons?" hide-buttons":"")+(b.redeemCode?' redeem-code="'+_ds.W(b.redeemCode)+'"':"")+(a?' return-uri="'+_ds.W(_ds.vD(a))+'"':"")+" dismiss></devsite-badge-awarded></div>")},mV=function(){return(0,_ds.S)('<div class="devsite-badger-award"></div>')};var nV=/\/redeem.*|\/settings[\/]?.*?/,rV=function(a){a.eventHandler.listen(document.body,"devsite-before-page-change",()=>void oV(a));a.eventHandler.listen(document.body,"devsite-award-granted",b=>{(b=b.Ea)&&b.detail&&pV(a,b.detail.award)});a.eventHandler.listen(document.body,["devsite-page-loaded","devsite-page-changed"],()=>{a.Wf();qV(a)})},oV=async function(a){if(a.h){var b=a.h.querySelectorAll(".devsite-badger-award-inner"),c=b[0];if(c){const d=c.querySelector("devsite-badge-awarded");(null==
d?0:d.j)&&await (null==d?void 0:d.j());const e=null==d?void 0:d.getAttribute("badge-path");a.awards=a.awards.filter(f=>f.path!==e);c.removeAttribute("show");await _ds.sl(200);_ds.Zj(c);1===b.length&&(_ds.Zj(a.h),a.h=null)}}},pV=async function(a,b){if(b&&b.complete&&!a.awards.find(f=>f.path===b.path)&&"error"!==document.body.getAttribute("type")&&!nV.exec(document.location.pathname)){a.awards.push(b);if(!a.h){var c=document.querySelector(".static-badge-awarded-container");c?(a.h=c,a.j=!0):(a.h=_ds.O(mV),
document.body.appendChild(a.h))}try{await customElements.whenDefined("devsite-badge-awarded")}catch(f){}var d;c=null==(d=_ds.nl())?void 0:d.href;var e=_ds.O(lV,{tb:b,Rb:c});e&&(a.eventHandler.listen(e,"devsite-badge-awarded-dismissed",()=>{oV(a)}),d=e.querySelector("devsite-badge-awarded"))&&(a.h.appendChild(e),_ds.Em(a.eventHandler,d,"running",()=>{null==e||e.setAttribute("show","");var f;const g=null==(f=a.h)?void 0:f.querySelectorAll("devsite-badge-awarded");if(g&&!a.j)for(f=0;f<g.length;f++){let h;
null==(h=g[f])||h.dispatchEvent(new CustomEvent("devsite-badge-awarded-stack-num-changed",{bubbles:!0,detail:{Mv:g.length-1-f}}))}}))}},qV=async function(a){var b=await _ds.eJ();if(b){b=b.filter(d=>3>d.displayCount);var c=await _ds.v();0<b.length?await c.getStorage().set("temp_badges","",JSON.stringify(b)):await c.getStorage().remove("temp_badges","");for(const d of b)b=new URL(d.awardedBy,document.location.origin),c=_ds.G(),(!d.awardedBy||b.origin===c.origin&&b.pathname===c.pathname)&&d.complete&&
await pV(a,d)}},sV=class extends _ds.mJ{constructor(){super(["devsite-badge-awarded"]);this.eventHandler=new _ds.H(this);this.h=null;this.awards=[];this.j=!1}connectedCallback(){rV(this)}disconnectedCallback(){_ds.I(this.eventHandler);oV(this)}async Wf(){await _ds.v();await customElements.whenDefined("devsite-user");var a=document.querySelector("devsite-user#devsite-user");if(a){var b=!1;try{b=await a.isSignedIn()}catch(c){}if(b&&await (new _ds.vF).Fd()){a=new _ds.gF;try{await a.Ia()}catch(c){}}}}};try{customElements.define("devsite-badger",sV)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteBadger",a)};})(_ds_www);