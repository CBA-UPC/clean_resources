(function(_ds){var window=this;var Wea=async function(a){const b=new _ds.Dk(_ds.G().search);let c=!1;for(const d of a.h){const e=_ds.Rk(b,d);e&&(await (await _ds.v()).getStorage().set("firebase-utm",d,e),c=!0)}c||a.remove();Vea(a)},Vea=function(a){a.eventHandler.listen(document.body,["mousedown"],},Xea=async function(a,b){if((b=b.target.closest("a"))&&null!=b&&b.href){var c=new URL(b.href);if("console.firebase.google.com"===c.host){var d=await _ds.v();for(const e of a.h)(a=await d.getStorage().get("firebase-utm",
e))&&c.searchParams.set(`fb_${e}`,a);b.search=c.searchParams.toString()}}},Yea=class extends _ds.F{constructor(){super(...arguments);this.eventHandler=new _ds.H;this.h="gclid utm_campaign utm_content utm_medium utm_source utm_term".split(" ")}try{customElements.define("firebase-utm",Yea)}catch(a){console.warn("devsite.app.customElement.FirebaseUtm",a)};})(_ds_www);