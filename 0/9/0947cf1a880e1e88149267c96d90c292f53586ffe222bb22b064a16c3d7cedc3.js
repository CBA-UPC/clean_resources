(function(_ds){var window=this;var fya=var G8=iya=jya=kya=async function(a){if("IntersectionObserver"in _ds.yk()){a.pc&&a.pc.disconnect();var b=document.querySelector("devsite-header");let c=152;b&&(await customElements.whenDefined("devsite-header"),
(b=b.m+b.h)&&(c=b));a.pc=new IntersectionObserver({rootMargin:`${c}px 0px 0px 0px`,threshold:[0,1]})}a.Ba.g()},hya=async function(a){let b=0;var c=document.querySelector("devsite-header");c&&(await customElements.whenDefined("devsite-header"),b=_ds.TH(c));c=a.j.findIndex(;const d=a.j[c];if(d){const e=await lya();d.getBoundingClientRect().top-b>e&&0<c?a.h=a.j[c-
1]:a.h=d}else a.h&&a.h.getBoundingClientRect().top>window.innerHeight&&(c=a.j.indexOf(a.h),0<c&&(a.h=a.j[c-1]))},gya=mya=nya=oya=lya=async function(){let a=0,b=0;const c=document.querySelector("devsite-header");c&&(await customElements.whenDefined("devsite-header"),
a=_ds.TH(c),b=c.m+c.h);return Math.max(b-a,Math.floor((window.innerHeight-a)/5))},H8=H8.prototype.renderUpdatedContent=H8.prototype.vr;H8.prototype.disconnectedCallback=H8.prototype.disconnectedCallback;H8.prototype.connectedCallback=H8.prototype.connectedCallback;try{customElements.define("devsite-toc",H8)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteToc",a)};})(_ds_www);