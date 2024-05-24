"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["shared~ondemand.DirectMessagesCrypto~ondemand.SettingsRevamp"],{298420:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(133028),a=r(459740),u=(r(315735),r(73439),r(906886),r(327072),r(267694),["device_id"]),s=["identity_key"];const c=function(e){var t=e.apiClient;return{register:function(e){var r=e.device_id,n=(0,a.Z)(e,u);return t.post("keyregistry/register",n,{},{"X-Client-UUID":r,"content-type":"application/json"},"")},extractPublicKeys:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Promise.all(e.map((function(e){return t.get("keyregistry/extract_public_keys/".concat(e),{},{},"").then((function(t){var r=t.public_keys;return(void 0===r?[]:r).map((function(t){var r=t.identity_key,u=(0,a.Z)(t,s);return(0,n.Z)({user_id:e,identity_key:r},u)}))}))}))).then((function(e){return e.flat()}))}}}},616217:(e,t,r)=>{r.d(t,{HI:()=>v,W1:()=>b,oo:()=>x,pe:()=>d});var n=r(133028),a=r(132723),u=r(634795),s=(r(315735),r(372994),r(13675),r(694898),r(38857),r(540171),r(157093),r(265688),r(270315),r(250556),r(592529),r(86943),r(691157),r(468811)),c=r.n(s),i=r(103702),o=new Uint8Array([0,0,0,1]);function p(e,t){return f.apply(this,arguments)}function f(){return(f=(0,u.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Uint8Array,e.next=3,crypto.subtle.digest("SHA-256",(0,i.cL)(t,o,r));case 3:return e.t1=e.sent,e.abrupt("return",new e.t0(e.t1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,n,u,s,c,o,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Uint8Array((0,i.RG)(t)),e.next=3,crypto.subtle.importKey("raw",r.subarray(0,65),{name:"ECDH",namedCurve:"P-256"},!0,[]);case 3:return n=e.sent,e.next=6,crypto.subtle.deriveBits({name:"ECDH",public:n},l,256);case 6:return u=e.sent,e.t0=p,e.t1=u,e.next=11,crypto.subtle.exportKey("raw",n);case 11:return e.t2=e.sent,e.next=14,(0,e.t0)(e.t1,e.t2);case 14:return s=e.sent,c=s.slice(0,16),o=s.slice(16,32),e.next=19,crypto.subtle.importKey("raw",c,{name:"AES-GCM",length:128},!0,["decrypt"]);case 19:return f=e.sent,e.t3=i.Jx,e.next=23,crypto.subtle.decrypt({name:"AES-GCM",iv:o},f,r.subarray(65));case 23:return e.t4=e.sent,e.abrupt("return",(0,e.t3)(e.t4));case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function v(e,t){return y.apply(this,arguments)}function y(){return(y=(0,u.Z)((0,a.Z)().mark((function e(t,r){var n,u,s,c,o,f,d,v;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]);case 2:return n=e.sent,e.next=5,crypto.subtle.deriveBits({name:"ECDH",public:r},n.privateKey,256);case 5:return u=e.sent,e.t0=p,e.t1=u,e.next=10,crypto.subtle.exportKey("raw",n.publicKey);case 10:return e.t2=e.sent,e.next=13,(0,e.t0)(e.t1,e.t2);case 13:return s=e.sent,c=s.slice(0,16),o=s.slice(16,32),e.next=18,crypto.subtle.importKey("raw",c,{name:"AES-GCM",length:128},!1,["encrypt"]);case 18:return f=e.sent,e.next=21,crypto.subtle.encrypt({name:"AES-GCM",iv:o},f,(0,i.cv)(t));case 21:return d=e.sent,e.next=24,crypto.subtle.exportKey("raw",n.publicKey);case 24:return v=e.sent,e.abrupt("return",(0,i.sM)((0,i.cL)(v,d)));case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l,x=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!1,["deriveBits"]);case 2:return r=e.sent,e.abrupt("return",(0,n.Z)((0,n.Z)({},r),{},{deviceId:null!=t?t:c().v4(),isRegistered:!1}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){l=e}},241320:(e,t,r)=>{r.d(t,{FM:()=>b,eY:()=>x,qi:()=>l});var n=r(133028),a=r(132723),u=r(634795),s=(r(571372),r(961111)),c=r.n(s),i=r(298420),o=r(467935),p=r(472599),f=r(616217),d=r(103702),v="rweb.dmCryptoKeys";function y(e){return v+1+e}var l=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,r,s){var l,x,b,w,h,Z;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=s.api,x=s.devicePersistence,e.prev=1,b=o.o1(r())){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,x.delete(v+""+b);case 7:return w=y(b),e.next=10,x.get(w);case 10:if(h=e.sent,Z=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d.sM,e.next=3,crypto.subtle.exportKey("spki",h.publicKey);case 3:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.next=7,c()(function(){var e=(0,u.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.set(w,h);case 3:return e.next=5,x.get(w);case 5:if(e.sent){e.next=9;break}r(new Error("Could not set value in IndexedDB. Bailing out.")),e.next=11;break;case 9:return e.next=11,l.withEndpoint(i.Z).register({registration_id:Math.round(1e5*Math.random()),identity_key:t,device_id:h.deviceId});case 11:e.next=22;break;case 13:return e.prev=13,e.t0=e.catch(0),e.next=17,x.delete(w);case 17:if(403===e.t0.status){e.next=21;break}throw e.t0;case 21:r(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),{minTimeout:2e3,retries:2});case 7:return e.next=9,x.set(w,(0,n.Z)((0,n.Z)({},h),{},{isRegistered:!0}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h){e.next=16;break}return e.next=15,(0,f.oo)();case 15:h=e.sent;case 16:if(h.isRegistered){e.next=19;break}return e.next=19,Z();case 19:(0,f.W1)(h.privateKey),t(o.Pv(h.deviceId)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(1),403!==e.t0.status&&(0,p.Hj)(e.t0);case 26:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(t,r,n){return e.apply(this,arguments)}}(),x=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,r,n){var u,s,c,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.api,u=n.devicePersistence,s=o.o1(r())){e.next=4;break}return e.abrupt("return");case 4:return c=y(s),e.next=7,u.get(c);case 7:if((i=e.sent)&&"unregistered"!==i.status){e.next=10;break}return e.abrupt("return");case 10:return i.status="unregistered",delete i.privateKey,delete i.publicKey,e.next=15,u.set(c,i);case 15:(0,f.W1)(void 0);case 16:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),b=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,r,n){var u,s,c,i,p,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.api,u=n.devicePersistence,s=o.o1(r())){e.next=4;break}return e.abrupt("return");case 4:return c=y(s),e.next=7,u.get(c);case 7:if((i=e.sent)&&"unregistered"===i.status){e.next=10;break}return e.abrupt("return");case 10:return p=i.deviceId,e.next=13,(0,f.oo)(p);case 13:return d=e.sent,e.next=16,u.delete(c);case 16:return e.next=18,u.set(c,d);case 18:return e.next=20,t(l);case 20:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},103702:(e,t,r)=>{r.d(t,{Jx:()=>c,RG:()=>a,cL:()=>i,cv:()=>s,sM:()=>u});var n=r(841361);r(581497),r(875640),r(801871),r(315735),r(372994),r(13675),r(694898),r(38857),r(540171),r(157093),r(265688),r(270315),r(250556),r(592529),r(86943),r(691157),r(743108);function a(e){for(var t=atob(e),r=t.length,n=new Uint8Array(r),a=0;a<r;a++)n[a]=t.charCodeAt(a);return n.buffer}function u(e){for(var t="",r=new Uint8Array(e),n=r.byteLength,a=0;a<n;a++)t+=String.fromCharCode(r[a]);return btoa(t)}var s=function(e){return(new TextEncoder).encode(e)},c=function(e){return(new TextDecoder).decode(e)};function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a,u=t.map((function(e){return e instanceof Uint8Array?e:new Uint8Array(e)})),s=new Uint8Array(u.reduce((function(e,t){return e+t.length}),0)),c=0,i=(0,n.Z)(u);try{for(i.s();!(a=i.n()).done;){var o=a.value;s.set(o,c),c+=o.length}}catch(p){i.e(p)}finally{i.f()}return s}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/shared~ondemand.DirectMessagesCrypto~ondemand.SettingsRevamp.c939fb2a.js.mapm>

    <script data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8m736dfzskmdn6bwwqz67iiki" data-module-id="google-gsi-lib"></script>
    <code id="googleAuthLibraryPath" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/8m736dfzskmdn6bwwqz67iiki"--></code>
    <code id="isLinkedInAppWebView" style="display: none"><!--false--></code>
    <code id="isTermsAndConditionsSkipEnabledOneTap" style="display: none"><!--true--></code>
  
          
    
    
    

    

    
      <code id="isClsFixActive" style="display: none"><!--true--></code>
    <div class="base-serp-page">
        
    

    <a href="#main-content" class="skip-link btn-md btn-primary absolute z-11 -top-[100vh] focus:top-0">
      Skip to main content
    </a>
  
      <header class="base-serp-page__header global-alert-offset">
          

    
    
    
    

    <nav class="nav pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap mamabear:flex-wrap mamabear:gap-y-1 babybear:flex-wrap babybear:py-1.5
        " aria-label="Primary">

      <a href="/?trk=public_jobs_nav-header-logo" class="nav__logo-link link-no-visited-state z-1 mr-auto babybear:z-0 babybear:mr-0 babybear:flex-1 hover:no-underline focus:no-underline active:no-underline" data-tracking-control-name="public_jobs_nav-header-logo" data-tracking-will-navigate>
          
                
          
    
    <span class="sr-only">LinkedIn</span>
<!---->      <icon class="block text-color-brand w-[84px] h-[21px] papabear:w-[135px] papabear:h-[34px]
          " data-test-id="nav-logo" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8fkga714vy9b2wk5auqo5reeb"></icon>
  
      
            
      </a>

        

    
    
    
    
    

    <section class="search-bar relative flex flex-grow h-[40px] bg-cool-gray-20 min-w-0 max-w-full mx-4 rounded-sm babybear:mx-0 babybear:mb-1.5 babybear:bg-color-transparent babybear:w-full babybear:flex babybear:flex-wrap
        " data-current-search-type="JOBS">
      <button class="search-bar__placeholder papabear:hidden mamabear:hidden text-input w-full mt-1.5 !pl-[14px] border-1 border-solid border-color-border-faint rounded-[2px] h-[40px] max-h-[40px] flex items-center overflow-hidden cursor-text" data-tracking-control-name="public_jobs_search-switcher-opener">
        <icon class="text-color-icon w-3 h-3 mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/397vrsk6op88l4981ji1xe1qt"></icon>
        <div class="search-bar__full-placeholder font-sans text-md text-color-text max-w-[calc(100%-40px)] text-left whitespace-nowrap overflow-hidden text-ellipsis">
<!---->              Engineering in Badalona, Catalonia, Spain
<!----><!---->        </div>
        <span class="sr-only">Expand search</span>
      </button>
      
    

      
        

    
    
    
    
    
    
    

    <div class="switcher-tabs__trigger-and-tabs babybear:flex">
        <button aria-expanded="false" class="switcher-tabs__placeholder flex !h-full !py-0 !pl-2 !pr-1.5 border-r-1 border-solid border-r-color-border-faint babybear:hidden
            tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer" data-tracking-control-name="public_jobs_switcher-tabs-placeholder" aria-describedby="switcher-description">
          <span class="switcher-tabs__placeholder-text m-auto"></span>
          <icon class="switcher-tabs__caret-down-filled onload pointer-events-none block my-auto min-h-[24px] min-w-[24px] h-[24px] babybear:hidden" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7asbl4deqijhoy3z2ivveispv"></icon>
        </button>
        <div id="switcher-description" class="hidden">This button displays the currently selected search type. When expanded it provides a list of search options that will switch the search inputs to match the current selection. </div>
<!---->        <div class="switcher-tabs hidden z-[1] w-auto min-w-[160px] mb-1.5 py-1 absolute top-[48px] left-0 border-solid border-1 border-color-border-faint papabear:container-raised mamabear:container-raised babybear:static babybear:w-[100vw] babybear:h-[48px] babybear:p-0 overflow-y-hidden overflow-x-auto md:overflow-x-hidden">
          <ul class="switcher-tabs__list flex flex-1 items-stretch papabear:flex-col mamabear:flex-col" role="tablist