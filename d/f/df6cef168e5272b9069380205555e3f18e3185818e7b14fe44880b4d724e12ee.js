(function(_ds){var window=this;var aca=bca=cca=class extends _ds.F{onstructor(){super();this.v=new _ds.Cm(10);this.eventHandler=new _ds.H;this.j=this.ea=null;this.o=!1;this.h=null;_ds.Xi(this,this.g`sort-`)}t(){if(this.h){if(this.getAttribute("sort-elements")){var a=`${"devsite-sort > * >"} ${this.getAttribute("sort-elements")}`;let e;var b=Array.from(null==(e=this.h)?void 0:e.querySelectorAll(a))}else b=
Array.from(null==(a=this.h)?void 0:a.children);var c=this.getAttribute("sort-attribute")||"",d=this.hasAttribute("sort-descending")?-1:1;b=b.sort(;for(const e of b){let f;null==(f=this.h)||f.appendChild(e)}bca(this.ea);this.dispatchEvent(new CustomEvent("devsite-sort",{bubbles:!0}))}}};try{customElements.define("devsite-sort",cca)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteSort",a)};})(_ds_www);
