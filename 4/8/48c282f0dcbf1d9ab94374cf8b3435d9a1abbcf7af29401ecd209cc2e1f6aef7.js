"use strict";(self.mvWrapperJsonp=self.mvWrapperJsonp||[]).push([[999],{6500:(t,e,s)=>{s.r(e),s.d(e,{GPP:()=>N});var i=s(8473),o=s(3583),n=s(6643),a=s(4441),p=s(3528),c=s(2932),l=s(6921),r=(t,e,s)=>new Promise(((i,o)=>{var n=t=>{try{p(s.next(t))}catch(t){o(t)}},a=t=>{try{p(s.throw(t))}catch(t){o(t)}},p=t=>t.done?i(t.value):Promise.resolve(t.value).then(n,a);p((s=s.apply(t,e)).next())}));let u,P;function d(){return r(this,null,(function*(){if(!P){const{GDPR:t}=yield Promise.all([s.e(1011),s.e(8262)]).then(s.bind(s,1353));P=new t}return P}))}var A=(t=>(t.US="US",t.EU="EU",t))(A||{}),g=(t=>(t[t.TCFEUV2=2]="TCFEUV2",t[t.TCFCAV1=5]="TCFCAV1",t[t.USPV1=6]="USPV1",t[t.USPNATV1=7]="USPNATV1",t[t.USPCAV1=8]="USPCAV1",t[t.USPVAV1=9]="USPVAV1",t[t.USPCOV1=10]="USPCOV1",t[t.USPUTV1=11]="USPUTV1",t[t.USPCTV1=12]="USPCTV1",t))(g||{}),S=s(9399);const h=new Map;h.set("US",A.US);for(const t in S.g)h.set(t,A.EU);var m=(t=>(t.NOT_APPLICABLE="BqgAAAAAAgA",t.APPLIES="BqgAAAAAAgA",t.NOTIFIED="BVQqAAAAAgA",t.OPTED_OUT="BVQVAAAAAgA",t))(m||{}),U=s(5914),O=(t,e,s)=>new Promise(((i,o)=>{var n=t=>{try{p(s.next(t))}catch(t){o(t)}},a=t=>{try{p(s.throw(t))}catch(t){o(t)}},p=t=>t.done?i(t.value):Promise.resolve(t.value).then(n,a);p((s=s.apply(t,e)).next())}));s(5258);const E={[l.HW.NOT_APPLICABLE]:m.NOT_APPLICABLE,[l.HW.APPLIES]:m.APPLIES,[l.HW.NOTIFIED]:m.NOTIFIED,[l.HW.OPTED_OUT]:m.OPTED_OUT};const V=[U.y.CA,U.y.VA,U.y.CO,U.y.CT,U.y.UT],I=class{constructor(t){this.model=t,this.enableGdpr=!1,this.cmpAPI=new i.W4(o.Lx,o.mY),this.cookie=new a.V({name:"am_gpp",sameSite:n.D.lax,maxAge:o.TJ}),this.cmpVersionCookie=new a.V({name:"am_gpp_cmp_version",sameSite:n.D.lax,maxAge:o.TJ}),this.setableSections=new Set([i.An,i.E,i.n1]),this.applicableSectionsSet=new Set,this.cookie.value&&this.cmpVersionCookie.value===o.ZK&&(p.ZP.custom(["debug","gpp"],"GPP.constructor:",this.cookie.value),this.cmpAPI.setGppString(this.cookie.value))}onReady(t){t()}onNoGDPRConsent(t){}static init(t){return O(this,null,(function*(){p.ZP.custom(["debug","gpp"],"STATIC: GPP.init");const e=new I(t);l.Yg.init(t,e);const s=h.get(e.model.geoLoc.country_code);switch(s){case A.US:yield e.loadUsModal();break;case A.EU:yield e.loadEUModals()}return s!==A.EU&&window.dispatchEvent(new CustomEvent("mediavineCmp",{detail:"gdprDoesNotApply"})),e}))}isUSNatV1OptOut(){return this.cmpAPI.getSectionStringById(g.USPNATV1)===m.OPTED_OUT}setTcfEuV2(t){p.ZP.custom(["debug","gpp"],"PUBLIC: GPP.setTcfEuV2:",t),this.cmpAPI.setSectionString(i.n1.NAME,t),this.setCookie()}setUsp(t){p.ZP.custom(["debug","gpp"],"PUBLIC: GPP.setUsp",t),this.setUspV1(t),this.stateIsOptOut(this.model.geoLoc.state)?(this.setUsNatV1(E[t]),this.setApplicableSections([g.USPNATV1]),this.setGAMUspValues(t)):this.setUsNatV1(E[l.HW.NOT_APPLICABLE]),this.setCookie()}loadUsModal(){return O(this,null,(function*(){p.ZP.custom(["debug","gpp"],"GPP.loadUsModal"),this.stateIsOptOut(this.model.geoLoc.state)&&(yield this.loadOptOutModal()),this.setCookie()}))}loadOptOutModal(){return O(this,null,(function*(){const t=yield function(t){return r(this,null,(function*(){if(!u){const{CPA:e}=yield Promise.all([s.e(8982),s.e(2221)]).then(s.bind(s,1978));u=new e(t)}return u}))}(this.model);yield t.initCPA()}))}loadEUModals(){return O(this,null,(function*(){p.ZP.custom(["debug","gpp"],"GPP.loadEUModals"),this.enableGdpr=!0;const[{TCF:t},e]=yield Promise.all([yield Promise.all([s.e(1011),s.e(8262)]).then(s.bind(s,9265)),d()]);this.onReady=e.onReady.bind(e),this.onNoGDPRConsent=e.onNoConsent.bind(e),I.gppGAMApplicable=1,this.onReady((()=>{I.gppGAMDeclinedPermission=0,p.ZP.custom(["debug","gpp"],"GPP.onReady")})),this.onNoGDPRConsent((()=>{I.gppGAMDeclinedPermission=1,p.ZP.custom(["debug","gpp"],"GPP.onNoGDPRConsent"),(0,c.o)(this.model)})),this.setApplicableSections([g.TCFEUV2]),yield t.init(this),yield e.initModal(),this.setCookie()}))}setApplicableSections(t){p.ZP.custom(["debug","gpp"],"GPP.setApplicableSections:",t),t.forEach((t=>this.applicableSectionsSet.add(t))),this.cmpAPI.setApplicableSections([...this.applicableSectionsSet.values()]),I.gppGAMApplicableSections=[...this.applicableSectionsSet.values()].join(",")}setUspV1(t){p.ZP.custom(["debug","gpp"],"GPP.setUspV1:",t),this.cmpAPI.setSectionString(i.E.NAME,t)}setUsNatV1(t){p.ZP.custom(["debug","gpp"],"GPP.setUsNatV1:",t),this.cmpAPI.setSectionString(i.An.NAME,t)}setGAMUspValues(t){switch(t){case l.HW.NOT_APPLICABLE:I.gppGAMApplicable=0,I.gppGAMDeclinedPermission=0;break;case l.HW.APPLIES:case l.HW.NOTIFIED:I.gppGAMApplicable=1,I.gppGAMDeclinedPermission=0;break;case l.HW.OPTED_OUT:I.gppGAMApplicable=1,I.gppGAMDeclinedPermission=1}}triggerGppStringUpdate(){for(const t of this.setableSections){const e=this.cmpAPI.getFieldValue(t.NAME,"Version");if(e)return this.cmpAPI.setFieldValue(t.NAME,"Version",e)}}setCookie(){this.triggerGppStringUpdate();const t=this.cmpAPI.getGppString();p.ZP.custom(["debug","gpp"],"GPP.setCookie:",t),this.cookie.set(t),this.cmpVersionCookie.set(o.ZK),this.triggerLoadedStatus()}triggerLoadedStatus(){p.ZP.custom(["debug","gpp"],"GPP.triggerLoaded");try{this.cmpAPI.setCmpStatus(i.Dc.LOADED),this.cmpAPI.setSignalStatus(i.HR.READY)}catch(t){console.warn("GPP cmpApi callback failed:",t)}}stateIsOptOut(t){return t&&V.includes(t)}};let N=I;N.gppGAMApplicableSections="0",N.gppGAMApplicable=0,N.gppGAMDeclinedPermission=0},2932:(t,e,s)=>{s.d(e,{o:()=>a});var i=s(6600),o=s(4530),n=s(3528);function a(t){if(i.Wu.id){(0,o.i)(i.Wu.id).then((e=>{const s=`https://securepubads.g.doubleclick.net/user_data_deletion?ppid=${e}&iu=${t.offering.gam_network_code}`;fetch(s,{method:"GET"}).then((t=>{})).catch((t=>{n.ZP.debug({name:t.name,message:t.message})}))}))}}},6921:(t,e,s)=>{s.d(e,{HW:()=>c,Yg:()=>u,qb:()=>a});var i=s(4441),o=s(6643),n=s(5595),a=(t=>(t.yes="Y",t.no="N",t.notApplicable="-",t))(a||{});var p,c=((p=c||{})[p.NOT_APPLICABLE="1---"]="NOT_APPLICABLE",p[p.APPLIES="1NNY"]="APPLIES",p[p.NOTIFIED="1YNY"]="NOTIFIED",p[p.OPTED_OUT="1YYY"]="OPTED_OUT",p);const l=(0,n.DY)("test","ccpa"),r=class{static init({cpa:t},e){this.gpp=e,r.cpaStatus="1"===t?"1":"0",window.__uspapi=r.__uspapi,window.addEventListener("message",r.handlePostMessage);const s=r.cookie.value,i=s&&s[0]===r.VERSION.toString();i&&(this.uspString=r.cookie.value),i||"1"!==r.cpaStatus&&!l?i&&"0"===r.cpaStatus&&!l?this.cpaNotCurrentlyApplicable():r.gppSetUspV1():this.cpaAppliesToUser()}static __uspapi(t,e,s){P({command:t,version:e})&&s(A(r.uspString),!0)}static cpaNotCurrentlyApplicable(){r.setDoesNotApply(),r.gppSetUspV1()}static cpaAppliesToUser(){r.setBaseApplies(),r.setCookie()}static userHasReceivedExplictNotice(){r.setNoticeGiven(),r.setCookie()}static userHasOptedOut(){r.setOptedOut(),r.setCookie()}static gppSetUspV1(){return t=this,e=null,s=function*(){this.gpp.setUsp(r.uspString)},new Promise(((i,o)=>{var n=t=>{try{p(s.next(t))}catch(t){o(t)}},a=t=>{try{p(s.throw(t))}catch(t){o(t)}},p=t=>t.done?i(t.value):Promise.resolve(t.value).then(n,a);p((s=s.apply(t,e)).next())}));var t,e,s}static handlePostMessage(t){let e;try{e=JSON.parse(t.data)}catch(t){}if(d(e)){const s=JSON.stringify(g(e,r.uspString));t.source.postMessage(s,t.source)}}static setCookie(){r.cookie.set(r.uspString),r.gppSetUspV1()}static get uspString(){const{VERSION:t,explicitNoticeStatus:e,userOptOutStatus:s,lspaStatus:i}=r;return`${t}${e}${s}${i}`}static set uspString(t){const[e,s,i,o]=t;e===r.VERSION.toString()&&(r.explicitNoticeStatus=s,r.userOptOutStatus=i,r.lspaStatus=o)}static setDoesNotApply(){r.uspString=c.NOT_APPLICABLE}static setBaseApplies(){r.uspString=c.APPLIES}static setNoticeGiven(){r.uspString=c.NOTIFIED}static setOptedOut(){r.uspString=c.OPTED_OUT}};let u=r;u.VERSION=1,u.cpaStatus="0",u.explicitNoticeStatus="-",u.userOptOutStatus="-",u.lspaStatus="-",u.cookie=new i.V({name:"usprivacy",sameSite:o.D.lax});const P=({command:t,version:e})=>"getUSPData"===t&&e===u.VERSION,d=t=>!!t&&"getUSPData"===t.command&&t.version===u.VERSION&&t.callId,A=t=>({version:u.VERSION,uspString:t}),g=(t,e)=>({__uspapiReturn:{returnValue:e,callId:t.callId,success:!0}})},6600:(t,e,s)=>{s.d(e,{Wu:()=>n});var i=s(4441);class o extends i.V{constructor(t="am_tokens"){super({name:t})}get id(){if(this.value)return this.value.mv_uuid}get version(){if(this.value)return this.value.version}}const n=new o},4530:(t,e,s)=>{s.d(e,{i:()=>o});var i=(t,e,s)=>new Promise(((i,o)=>{var n=t=>{try{p(s.next(t))}catch(t){o(t)}},a=t=>{try{p(s.throw(t))}catch(t){o(t)}},p=t=>t.done?i(t.value):Promise.resolve(t.value).then(n,a);p((s=s.apply(t,e)).next())}));function o(t){return i(this,null,(function*(){const e=(new TextEncoder).encode(t),s=yield crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(s)).map((t=>t.toString(16).padStart(2,"0"))).join("")}))}}}]);s/430382">Characters</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link " href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430891">Secret Exits</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link " href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430931">Wonder Seeds</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link " href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430517">Captain Toad</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link " href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430963">Purple 10 Coins</a></li></ul></div></div><div class="l-content">  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Super Mario Wonder Walkthrough &amp; Guides Wiki｜Game8",
      "author":{
        "@type": "Organization",
        "name": "Super Mario Wonder Walkthrough Team",
        "url": "https://twitter.com/"
      },
      "publisher":{
        "@type": "Organization",
        "name": "Game8",
        "url": "https://game8.co/",
        "logo":{
            "@type": "ImageObject",
            "url": "https://assets.game8.co/public/logo.png"
        }
      },
      "datePublished": "2023-10-19 10:30:20 -0400",
      "dateModified": "2023-11-06 22:14:25 -0500",
      "mainEntityOfPage":{
        "@type": "WebPage",
        "@id": "https://game8.co/games/Super-Mario-Bros-Wonder"
      },
      "name": "Super Mario Wonder Walkthrough &amp; Guides Wiki｜Game8",
      "url": "https://game8.co/games/Super-Mario-Bros-Wonder",
      "image": "https://assets.game8.co/assets/game8_ogp-846ace0d45c153c1174a8beac78a5378ddc11fe3e20f7e4d9b51559cfc4db94d.png",
      "thumbnailUrl": "https://assets.game8.co/assets/game8_ogp-846ace0d45c153c1174a8beac78a5378ddc11fe3e20f7e4d9b51559cfc4db94d.png",
      "description": "Super Mario Bros. Wonder is the newest 3D Side-Scrolling Platform Mario Game for Nintendo Switch! Learn about everything from all of the Power-Up Items, Characters, Level and World Guides, Badges, Standees, Online and Multiplayer Modes, Hidden Levels and tips and tricks to maximize your play experience!"
    }
  </script>
<div class="l-breadcrumb"><ul class="l-breadcrumb__list" itemscope="" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a class="track_nier" itemprop="item" data-track-nier-keyword="click_breadcrumb" data-track-nier-value="Game8" href="https://game8.co/"><span itemprop="name">Game8</span></a><meta content="1" itemprop="position" /></li><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><span itemprop="name">Super Mario Wonder Walkthrough &amp; Guides Wiki</span><meta content="" itemprop="item" /><meta content="2" itemprop="position" /></li></ul></div><div class="l-3col"><div class="l-3colMain"><div class="l-3colMain__center l-3colMain__center--shadow"><div class="p-archiveHeader"><h1 class="p-archiveHeader__title">Super Mario Wonder Walkthrough &amp; Guides Wiki</h1><div class="p-archiveHeader__content"><div class="p-archiveHeader__author"><i class="fa fa-pencil" style="margin-right: 5px;"></i><span itemprop="author">The Super Mario Wonder Walkthrough Team</span></div><div class="p-archiveHeader__info"><div class="p-archiveHeader__date"><i class="fa fa-clock-o" style="margin-right: 5px;"></i><time content="2023-11-06" datetime="2023-11-06T22:14:25-05:00">Last updated on: November 6, 2023 10:14 PM</time></div></div></div></div><div class="archive-style-wrapper"><p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder Front Page' data-src='https://img.game8.co/3782746/a5863fc120c4b2f7885049b435c1411a.png/show' width='440' style='height: 0; padding-bottom: calc(100%*247/440); padding-bottom: calc(min(100%,440px)*247/440);' /></p>

<p class='a-paragraph'>Super Mario Bros. Wonder is the newest 3D Side-Scrolling Platform Mario Game for Nintendo Switch! Learn about everything from all of the Power-Up Items, Characters, Level and World Guides, Badges, Standees, Online and Multiplayer Modes, Hidden Levels and tips and tricks to maximize your play experience in this Super Mario Wonder Walkthrough!</p>

<table class='a-table a-table ' style=''>
  <tr>
    <th colspan="3">Jump to a Section!</th>
  </tr>
  <tr>
    <td class="center" width="33%"><a class='a-link' href=#hl_1>Site Map</a></td>
      <td class="center" width="33%"><a class='a-link' href=#hl_2>World Guides</a></td>
        <td class="center" width="33%"><a class='a-link' href=#hl_3>Tips and Tricks</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=#hl_4>Badges</a></td>
    <td class="center"><a class='a-link' href=#hl_5>Power-Ups</a></td>
    <td class="center"><a class='a-link' href=#hl_6>Characters</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=#hl_7>Collectibles</a></td>
    <td class="center"><a class='a-link' href=#hl_8>Standees</a></td>
    <td class="center"><a class='a-link' href=#hl_9>Enemies</a></td>
  </tr>
    <tr>
    <td class="center"><a class='a-link' href=#hl_10>Message Boards</a></td>
    <td class="center"><a class='a-link' href=#hl_11>Latest News</a></td>
    <td class="center"><a class='a-link' href=#hl_12>Game Info</a></td>
  </tr>
      <tr>
    <td class="center" colspan="3"><a class='a-link' href=#hl_13>Related Games</a></td>
  </tr>
</table>

<p class='a-paragraph'></p>
<h2 class='a-header--2' id='hl_1'>Super Mario Wonder Site Map</h2>
<table class='a-table ' style=''>
  <tr>
    <th colspan="2">All Super Mario Wonder Categories</th>
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430373><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Worlds' data-src='https://img.game8.co/3782655/847c2b88a36e8977a915333494b39b8a.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' />Worlds and Courses</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430374><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Tips and Tricks' data-src='https://img.game8.co/3782862/2aa6048c8470d68ed44db7680fbcbbea.png/show' width='440' style='height: 0; padding-bottom: calc(100%*110/440); padding-bottom: calc(min(100%,440px)*110/440);' /> Tips and Tricks</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430376><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Badges' data-src='https://img.game8.co/3782651/b623de4cc35ea94acf69106d3e8c5a4b.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' />Badges</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430375><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Power-Ups' data-src='https://img.game8.co/3785607/4f8b47e81d5546bdd671ae7d368d3d32.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' />Power-Ups</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430382><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Characters' data-src='https://img.game8.co/3782654/8dc8d27b2ad0f7f1452b1e4c68ef851f.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' />Characters</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430986><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Collectibles' data-src='https://img.game8.co/3785593/adf8c9c6ea249e28a1865c7b0965a448.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' />Collectibles</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430377><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Standees' data-src='https://img.game8.co/3785286/4a0df113730caae9a74d74b6d40154e4.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' />Standees</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430987><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Message Boards' data-src='https://img.game8.co/3786051/5417323646bc0738921673b841a775e8.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' />Message Boards</a></td>
  </tr>
      <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430379><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Ssuper Mario Bros Wonder - Enemies' data-src='https://img.game8.co/3789029/0119a029803d6de374a3ac90fe31fe27.png/show' width='440' style='height: 0; padding-bottom: calc(100%*110/440); padding-bottom: calc(min(100%,440px)*110/440);' />Enemies</a></td>
    <th class="center"></th>
  </tr>
</table>
<h2 class='a-header--2' id='hl_2'>Super Mario Wonder World Guides</h2>
<p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='All Worlds Partial' data-src='https://img.game8.co/3782975/763c3057fb69b88dc556df479595bcd8.png/show' width='440' style='height: 0; padding-bottom: calc(100%*110/440); padding-bottom: calc(min(100%,440px)*110/440);' /></p>

<p class='a-paragraph'><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/430373' style='border-color: ; background-color: ; color: ;'><span>List of All Worlds and Courses</span></a></p>
<h3 class='a-header--3' id='hm_1'>List of All Worlds</h3>
<table class='a-table ' style=''>
  <tr>
    <th colspan = 2>Super Mario Bros Wonder List of All Worlds</th>
  </tr>
  <tr>
    <td width= "50%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430495><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - World 1' data-src='https://img.game8.co/3782997/985449cc4c9dc128118d67173daac25e.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />Pipe-Rock Plateau (World 1)</a></td>
    <td width= "50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430708><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Mario Wonder - Petal Isles' data-src='https://img.game8.co/3783184/5a4dc97b2de869005b571abc2abaa3a3.png/show' width='220' style='height: 0; padding-bottom: calc(px*115/220); padding-bottom: calc(min(100%,220px)*115/220);' />Petal Isles</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430656><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Mario Wonder - World 2' data-src='https://img.game8.co/3783180/9cc6e87958b13ee54df3511be3ab7a1a.png/show' width='220' style='height: 0; padding-bottom: calc(px*115/220); padding-bottom: calc(min(100%,220px)*115/220);' />Fluff-Puff Peaks (World 2)</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430657><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Mario Wonder - World 3' data-src='https://img.game8.co/3783181/9409bad2139a001ce9ce0d1ba5a783e3.png/show' width='220' style='height: 0; padding-bottom: calc(px*115/220); padding-bottom: calc(min(100%,220px)*115/220);' />Shining Falls (World 3)</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430659><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Mario Wonder - 4' data-src='https://img.game8.co/3783186/2cd7e89daea1e029095cdb5fab04724d.png/show' width='220' style='height: 0; padding-bottom: calc(px*115/220); padding-bottom: calc(min(100%,220px)*115/220);' />Sunbaked Desert (World 4)</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430788><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Mario Wonder - 5' data-src='https://img.game8.co/3783183/6d64b5ed1818b3dcbd71c1a762836960.png/show' width='220' style='height: 0; padding-bottom: calc(px*115/220); padding-bottom: calc(min(100%,220px)*115/220);' />Fungi Mines (World 5)</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430860><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Mario Wonder - World 6' data-src='https://img.game8.co/3783182/0d6297c7f01c7bba2ca89a22d2801904.png/show' width='220' style='height: 0; padding-bottom: calc(px*115/220); padding-bottom: calc(min(100%,220px)*115/220);' />Deep Magma Bog (World 6)</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430655><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Mario Wonder - Special World' data-src='https://img.game8.co/3783185/30cfa88ffc2b133405f2237fe9c58815.png/show' width='220' style='height: 0; padding-bottom: calc(px*115/220); padding-bottom: calc(min(100%,220px)*115/220);' />Special World (Secret)</a></td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_2'>Bonus Game-Over Level</h3>
<table class='a-table ' style=''>
  <tr>
    <th width="100%">Super Mario Bros. Wonder Bonus Game-Over Level</th>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430924><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - Bonus Coins Galore!' data-src='https://img.game8.co/3784616/b0fffbefd1c0abae4c7ec4b2335e779e.png/show' width='191' style='height: 0; padding-bottom: calc(px*100/191); padding-bottom: calc(min(100%,191px)*100/191);' /> Bonus: Coins Galore! (Secret Level)</a></td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_3'>Course Lists</h3>
<ul class='a-list'>

<li class='a-listItem'><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430965>All Search Party Courses</a></li>
<li class='a-listItem'><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431712>All KO Arena Courses</a></li>
<li class='a-listItem'><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431714>All Break Time Courses</a></li>
<li class='a-listItem'><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431710>All Wiggler Race Courses</a></li>
<li class='a-listItem'><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431941>All Poplin Shops and Houses</a></li>
<li class='a-listItem'><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/432051>All Badge Challenges</a></li>

</ul>
<h2 class='a-header--2' id='hl_3'>Super Mario Wonder Tips and Tricks</h2>
<p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Tips and Tricks' data-src='https://img.game8.co/3782862/2aa6048c8470d68ed44db7680fbcbbea.png/show' width='440' style='height: 0; padding-bottom: calc(100%*110/440); padding-bottom: calc(min(100%,440px)*110/440);' /></p>

<p class='a-paragraph'><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/430374' style='border-color: ; background-color: ; color: ;'><span>Tips and Tricks</span></a></p>
<h3 class='a-header--3' id='hm_4'>All Tips and Tricks</h3>
<table class='a-table top center' style=''>
  <tr>
    <th colspan = 2>Super Mario Bros Wonder Tips and Tricks</th>
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430478><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Yoshi Riding Yoshi' data-src='https://img.game8.co/3782395/6e5658f2a7a9e90fa179984d6fe8b085.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> How to Ride Yoshi</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430494><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Yoshi and Nabbit Beginner Characters' data-src='https://img.game8.co/3782429/372c07befc6bd7c3fd008973dc28146c.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> Best Characters for Kids and Beginners</a></td>
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430481><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - Do The Characters Play Differently' data-src='https://img.game8.co/3782457/2e8d665f997ad0224bcbd23998258a31.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> Do The Characters Play Differently?</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430502><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - How to Save the Game' data-src='https://img.game8.co/3782560/cdb89a87008030a23acbda29a3aa70b9.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> How to Save the Game</a></td>
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430500><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - How to Play Online Multiplayer With Friends' data-src='https://img.game8.co/3782577/b7aa77c771002ca517e7be9fff44d563.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> How to Play Online Multiplayer With Friends</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430516><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - How to Change and Store Items' data-src='https://img.game8.co/3782681/6ff2c5d4be22ed54424e628962aa0e30.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />How to Change and Store Items</a></td> 
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430517><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - All Captain Toad Locations and Rewards' data-src='https://img.game8.co/3782808/e9aec4dcff145820e6859b286e07aa21.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> All Captain Toad Locations and Rewards</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430653><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - How long to Beat Partial' data-src='https://img.game8.co/3783235/5313c27ca674ceeac5ddfe56f8dfa4cc.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />How Long to Beat the Game</a></td> 
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430513><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Friend Races' data-src='https://img.game8.co/3783621/16e2e3ff464a8819f11649580c939c8c.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />How to Host Friend Races</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430705><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - How to Dash' data-src='https://img.game8.co/3783632/f522e64b5054245ef58576dce026c41b.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />How to Dash</a></td> 
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430712><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - How to Get Heart Points' data-src='https://img.game8.co/3783738/6394b79161433a853b7057e75eedfc11.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> How to Get Heart Points</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430739><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - How to Use Standees' data-src='https://img.game8.co/3783955/3171df585578570b936066e944412570.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> How to Use Standees</a></td> 
  </tr>
    <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430727><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - Basic Controls and Best Settings' data-src='https://img.game8.co/3784176/8f272705199ec68e860d69941b6d7268.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />Basic Controls and Best Settings</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430766><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - What Happens if You Get a Game Over' data-src='https://img.game8.co/3784179/ef0dfc1db89a18e9d2d04ebca54408a3.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> What Happens if You Get a Game Over</a></td> 
  </tr>
        <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430792><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - How to Get a Green Checkmark' data-src='https://img.game8.co/3784214/99d8353e3a4f347570792b93c66cff87.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />How to Get a Green Checkmark</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430791><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - How to Change Talking Flower Language Settings' data-src='https://img.game8.co/3784426/b94064062c27d1a450bd42c91fc30fc3.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />Talking Flower Language Settings</a></td> 
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430812><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - How to Farm Flower Coins' data-src='https://img.game8.co/3784444/48d777f6b266b163c0289002154c352a.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> How to Farm Flower Coins</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430891><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - Hidden Goals and Secret Exits' data-src='https://img.game8.co/3784497/443153087cc3a82aeb565e6dc4987492.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />Hidden Goals and Secret Exits</a></td> 
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430907><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - Infinite 1-Up Trick Partial' data-src='https://img.game8.co/3784567/67eb088b180e65967723a8b475f2e388.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' /> Infinite 1-Up Trick</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431093><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - How to Get Every Medal Guide' data-src='https://img.game8.co/3786447/f0003ec5e40fc3303447300a81e83574.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />How to Get 100% Completion</a></td> 
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431096><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Post Game Guide Partial' data-src='https://img.game8.co/3786515/270f63745a6b5aa5ff1d473d40632369.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />Post Game Guide</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431123><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - All Unlockables Partial' data-src='https://img.game8.co/3786603/799c1e53286c6c6023f844ef1f8b611a.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />All Unlockables</a></td> 
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431351><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Bowser Jr. Boss Guide' data-src='https://img.game8.co/3788395/8e316fcb9c8eeed8d4550f52293f6922.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />Bowser Jr. Boss Guide</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431557><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Bowser Final Boss Fight Guide' data-src='https://img.game8.co/3788728/7a3396c9519f70828dc778302a4aefc3.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />Bowser Final Boss Fight Guide</a></td> 
  </tr>
  
</table>
<h2 class='a-header--2' id='hl_4'>Super Mario Wonder Badges</h2>
<p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Bros Wonder - Badges Partial' data-src='https://img.game8.co/3783044/7c702dd4528157b5acc76df364bd4584.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' /></p>

<p class='a-paragraph'><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/430376' style='border-color: ; background-color: ; color: ;'><span>List of All Badges</span></a></p>
<h3 class='a-header--3' id='hm_5'>List of All Badges</h3>
<table class='a-table top center' style=''>
  <tr>
    <th colspan = 4>Super Mario Bros Wonder List of Badges</th>
  </tr>
  <tr>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430627><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Wall-Climb Jump' data-src='https://img.game8.co/3782318/8c4cf712f0205e139a513fff6fa22a3e.png/show' width='50' height='50' />Wall-Climb Jump</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430626><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Dolphin Kick' data-src='https://img.game8.co/3783172/e1469348d7de80cdcb3584368fd4e63f.png/show' width='50' height='50' />Dolphin Kick</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430630><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Parachute Cap' data-src='https://img.game8.co/3783174/86a3cb158a2ce9e56e711b3a6e255cf0.png/show' width='50' height='50' />Parachute Cap</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430631><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Floating High Jump' data-src='https://img.game8.co/3783168/53221384c39e7b6efb61851c005c10bd.png/show' width='50' height='50' />Floating High Jump</a></td>
  </tr>
  <tr>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430633><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Crouching High Jump' data-src='https://img.game8.co/3783170/a84428c98f7dca5e31b04ba7d86c3302.png/show' width='50' height='50' />Crouching High Jump</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430634><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Timed High Jump' data-src='https://img.game8.co/3783178/56806f94a7db353642201720fb736ad0.png/show' width='50' height='50' />Timed High Jump</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430642><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Boosting Spin Jump' data-src='https://img.game8.co/3783166/a066a907db7d2789e39bbedf1674ed60.png/show' width='50' height='50' />Boosting Spin Jump</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430643><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Grappling Vine' data-src='https://img.game8.co/3783164/2e55f26d97cc7e7be63f24940de9a663.png/show' width='50' height='50' />Grappling Vine</a></td>
  </tr>
  <tr>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430644><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Fast Dash' data-src='https://img.game8.co/3783163/2e250b67975cad8ec001fc4c12840bd1.png/show' width='50' height='50' />Fast Dash</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430629><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Coin Reward' data-src='https://img.game8.co/3783179/911d5944f48b1355d3f32b5b3e3c43a8.png/show' width='50' height='50' />Coin Reward</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430632><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Safety Bounce' data-src='https://img.game8.co/3783176/b015a7d3bd41752497f4e90ec6a34ea4.png/show' width='50' height='50' />Safety Bounce</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430625><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Add ! Blocks' data-src='https://img.game8.co/3783177/28c56f2759cb3877c990469c035e2b6e.png/show' width='50' height='50' />Add ! Blocks</a></td>
  </tr>
  <tr>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430628><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Auto Super Mushroom' data-src='https://img.game8.co/3783167/519024c3c741fb128cf23b1599a1101f.png/show' width='50' height='50' />Auto Super Mushroom</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430636><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Rhythm Jump' data-src='https://img.game8.co/3783169/88b9677f402cd5a754f6b89817508a88.png/show' width='50' height='50' />Rhythm Jump</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430637><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Sensor' data-src='https://img.game8.co/3783159/044cf256522169f995777dc61c4ba2a2.png/show' width='50' height='50' />Sensor</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430645><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Coin Magnet' data-src='https://img.game8.co/3783171/15146a1e273050d7323fc5f24b056f1b.png/show' width='50' height='50' />Coin Magnet</a></td>
  </tr>
  <tr>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430638><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - All Elephant Power' data-src='https://img.game8.co/3783158/2478191eaf58560a223f6ba27f360dfe.png/show' width='50' height='50' />All Elephant Power</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430639><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - All Fire Power' data-src='https://img.game8.co/3783160/58e38521d84d52e8b4a6a9dc82521d34.png/show' width='50' height='50' />All Fire Power</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430640><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - All Bubble Power' data-src='https://img.game8.co/3783161/fdb570d4786c208c9a779f08b2cd272b.png/show' width='50' height='50' />All Bubble Power</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430641><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - All Drill Power' data-src='https://img.game8.co/3783162/6adc1f78fe23493e2e8b534bb7a41bad.png/show' width='50' height='50' />All Drill Power</a></td>

  </tr>
  <tr>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430635><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Invisibility' data-src='https://img.game8.co/3783173/f30dbf1a47c87cb5006bfb8b905087b2.png/show' width='50' height='50' />Invisibility</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430646><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Jet Run' data-src='https://img.game8.co/3783175/b0a8fbbbaa36a86a95504b7a61957f76.png/show' width='50' height='50' />Jet Run</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430647><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Spring Feet' data-src='https://img.game8.co/3783165/c5ff548ffc34674d46dbbd5497f30afd.png/show' width='50' height='50' />Spring Feet</a></td>
    <td width = "25%", class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431134><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Sound Off Badge' data-src='https://img.game8.co/3786612/4825f02eb3c20fae2a58a597a467b50c.png/show' width='50' height='50' />Sound Off? Badge</a></td>
  </tr>
</table>

<p class='a-paragraph'><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/431099' style='border-color: ; background-color: ; color: ;'><span>Best Badges Tierlist</span></a></p>
<h2 class='a-header--2' id='hl_5'>Super Mario Wonder Items</h2>
<p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Power-ups Banner' data-src='https://img.game8.co/3785607/4f8b47e81d5546bdd671ae7d368d3d32.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' /></p>

<p class='a-paragraph'><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/430375' style='border-color: ; background-color: ; color: ;'><span>List of All Power-Ups</span></a></p>
<h3 class='a-header--3' id='hm_6'>List of All Power-Up Items</h3>
<table class='a-table table--fixed' style=''>
  <tr>
    <td colspan="3" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430609><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Elephant Fruit' data-src='https://img.game8.co/3783068/c376eff0c5c8f0ade53b0acf7936faff.png/show' width='76' style='height: 0; padding-bottom: calc(px*60/76); padding-bottom: calc(min(100%,76px)*60/76);' />Elephant<br> <br>Fruit</a></td>
    <td colspan="3" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430610><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Bubble Flower' data-src='https://img.game8.co/3783070/7576208c03dccd5dab173d37ee2ef8bb.png/show' width='57' style='height: 0; padding-bottom: calc(px*60/57); padding-bottom: calc(min(100%,57px)*60/57);' />Bubble<br> <br>Flower</a></td>
    <td colspan="3" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430608><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Fire Flower' data-src='https://img.game8.co/3783071/5c72dc931f0da74046368fa24ecbf917.png/show' width='56' style='height: 0; padding-bottom: calc(px*60/56); padding-bottom: calc(min(100%,56px)*60/56);' />Fire<br> <br>Flower</a></td>
    <td colspan="3" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430611><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Drill Mushroom' data-src='https://img.game8.co/3783069/af35c73754a31e25c9deb1229587f4a6.png/show' width='60' height='60' />Drill<br> <br>Mushroom</a></td>
  </tr>
  <tr>
    <td class="center" colspan="4"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430612><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Super Star' data-src='https://img.game8.co/3783066/0d465d07dfa6fdbcd49efd7450a62774.png/show' width='57' style='height: 0; padding-bottom: calc(px*55/57); padding-bottom: calc(min(100%,57px)*55/57);' />Super<br> <br>Star</a></td>
    <td class="center" colspan="4"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430607><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Super Mushroom' data-src='https://img.game8.co/3783067/a5625a7b997e753c391c4387f0a0b432.png/show' width='55' height='55' />Super<br> <br>Mushroom</a></td>
    <td class="center" colspan="4"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431095><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Wonder Flower' data-src='https://img.game8.co/3785310/58c7ce9e20c8e85a2a21a52dbda642a4.png/show' width='51' style='height: 0; padding-bottom: calc(px*55/51); padding-bottom: calc(min(100%,51px)*55/51);' /> Wonder <br> <br>Flower</a></td>
  </tr>
</table>
<h2 class='a-header--2' id='hl_6'>Super Mario Wonder Player Characters</h2>
<p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Characters' data-src='https://img.game8.co/3782654/8dc8d27b2ad0f7f1452b1e4c68ef851f.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' /></p>

<p class='a-paragraph'><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/430382' style='border-color: ; background-color: ; color: ;'><span>List of All Characters</span></a></p>
<h3 class='a-header--3' id='hm_7'>List of All Characters</h3>
<table class='a-table a-table ' style=''>
 <tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430577><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Mario' data-src='https://j-img.game8.co/8887800/141c920fd869b46625eff7f1a9bcfcba.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Mario</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430594><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Luigi' data-src='https://j-img.game8.co/8887806/d9acada4d1cbb3ec8e6e6171a930e1de.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Luigi</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430595><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Peach' data-src='https://j-img.game8.co/8887809/6ff125858c8f27ae357195f7c2d6f870.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Peach</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430596><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Daisy' data-src='https://j-img.game8.co/8887798/e475a2c3a2a91271746d7eaa6d7c8800.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Daisy</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430597><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Yellow Toad' data-src='https://j-img.game8.co/8887799/9960f15de7d96da0cc67b92f1c8dd246.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Yellow Toad</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430598><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Blue Toad' data-src='https://j-img.game8.co/8887801/d89e0f242ffee7b3d75f01cc9365ff03.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Blue Toad</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430599><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Toadette' data-src='https://j-img.game8.co/8887804/a5d13c8930df8231d4684c28101eb95b.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Toadette</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430600><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Yoshi' data-src='https://img.game8.co/3782441/8f33089dc58a4b3c3268e1f56b4792be.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Yoshi</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430601><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Red Yoshi' data-src='https://j-img.game8.co/8887808/d9e5b121d6e15b7651393a7d871bcc4e.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Red Yoshi</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430602><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Yellow Yoshi' data-src='https://j-img.game8.co/8887805/50114bbdaef581aff5fbf5704ef1f822.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Yellow Yoshi</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430603><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Light Blue Yoshi' data-src='https://j-img.game8.co/8887802/8aec16e0692d13b7ebaa2ae4d60eb453.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Light Blue Yoshi</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430604><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder -  Nabbit' data-src='https://j-img.game8.co/8887807/5c3eca3f044733583ab091ca99679882.png/show' width='51' style='height: 0; padding-bottom: calc(px*50/51); padding-bottom: calc(min(100%,51px)*50/51);' /> <br> Nabbit</a>







</td>


</tr><tr>

</tr>
</table>
<h2 class='a-header--2' id='hl_7'>Super Mario Wonder Collectibles</h2>
<p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Collectibles.png' data-src='https://img.game8.co/3785593/adf8c9c6ea249e28a1865c7b0965a448.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' /></p>

<p class='a-paragraph'><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/430986' style='border-color: ; background-color: ; color: ;'><span>All Collectibles Complete Guide</span></a></p>
<h3 class='a-header--3' id='hm_8'>Collectibles</h3>
<table class='a-table top center' style=''>
  <tr>
    <th colspan=5>Collectibles</th>
  </tr>
  <tr>
    <td width="20%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430606><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - 1-Up Mushroom' data-src='https://img.game8.co/3783860/9e0e91f77f9ce0b59b2c1f88194823ed.png/show' width='50' height='50' />1-Up <br> <br> Mushroom</a></td>
    <td width="20%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430812><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Flower Coin' data-src='https://img.game8.co/3785308/beb8b2c053b4af0d3a202ec142b5a654.png/show' width='45' style='height: 0; padding-bottom: calc(px*50/45); padding-bottom: calc(min(100%,45px)*50/45);' />Flower <br> <br> Coin</a></td>
    <td width="20%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430963><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Purple 10 Coin' data-src='https://img.game8.co/3785335/02e40d98078e7e27415ae1c47d7cc957.png/show' width='50' height='50' />Purple <br> <br> 10 Coin</a></td>
    <td width="20%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/430931><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Wonder Seed' data-src='https://img.game8.co/3785347/432dbed1b81367c27ff0e39e1b0ac60a.png/show' width='50' height='50' />Wonder <br> <br> Seed</a></td>
    <td width="20%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/432110><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder - Wonder Token' data-src='https://img.game8.co/3791620/1fd4a061235372f0c49dff7c4faae24a.png/show' width='50' height='50' />Wonder <br> <br> Token</a></td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_9'>Purple 10 Coin Locations</h3>
<table class='a-table ' style=''>
  <tr>
    <th colspan=2>Purple 10 Coin Locations</th>
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431066>All World 1 Purple 10 Coin Locations</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431137>All World 2 Purple 10 Coin Locations</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431570>All World 3 Purple 10 Coin Locations</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431621>All World 4 Purple 10 Coins Locations</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/432201>All World 5 Purple 10 Coin Locations</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/438906>All World 6 Purple 10 Coin Locations</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431084>All Petal Isles Purple 10 Coin Locations</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/438903>All Special World Purple 10 Coin Locations</a></td>
  </tr>
</table>

<p class='a-paragraph'><a class='a-btn' href='https://game8.co/games/Super-Mario-Bros-Wonder/archives/430963' style='border-color: ; background-color: ; color: ;'><span>All Purple 10 Coin Locations</span></a></p>
<h3 class='a-header--3' id='hm_10'>Wonder Seed Locations</h3>
<table class='a-table ' style=''>
  <tr>
    <th colspan=2>Wonder Seed Locations</th>
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431062>All World 1 Wonder Seed Locations</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431133>All World 2 Wonder Seed Locations</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431572>All World 3 Wonder Seed Locations</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431680>All World 4 Wonder Seed Locations</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/432055>All World 5 Wonder Seed Locations</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/438904>All World 6 Wonder Seed Locations</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431078>All Petal Isles Wonder Seed Locations</a></td>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/438910>All Special World Wonder Seed Locations</a></td>
  </tr>
</table>

<p class='a-paragraph'><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/430931' style='border-color: ; background-color: ; color: ;'><span>All Wonder Seed Locations</span></a></p>
<h2 class='a-header--2' id='hl_8'>Super Mario Wonder Standees</h2>
<p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Standees' data-src='https://img.game8.co/3785286/4a0df113730caae9a74d74b6d40154e4.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' /></p>

<p class='a-paragraph'><b class='a-bold'>Standees</b> are collectibles for Super Mario Wonder that depict characters in a specific pose, sometimes jumping or using a power-up.</p>

<p class='a-paragraph'>These items don&#39;t have special effects and instead function as <b class='a-bold'>revive spots for online play</b>.<br><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/430377' style='border-color: ; background-color: ; color: ;'><span>List of All Standees</span></a></p>
<h3 class='a-header--3' id='hm_11'>All Mario Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900371/bac4914822e2c3723f40c0d65ff4ac7f.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900377/da6fa34c77c94c0c501b43664453bc50.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900368/b660ca781fe94671869d135011ea0d0e.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900369/fe9ed31cba80005926d83c8e1a2e7986.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900373/3f201b1e756baec622246062fcaa49ea.png/show' width='60' height='60' /><br>Elephant</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900370/5da5d593c3561000140a601bae95f8dc.png/show' width='60' height='60' /><br>Bubble</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900372/c9a1df778b9b0f0be7fa87ed2445f5c1.png/show' width='60' height='60' /><br>Fire</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900379/e744fc2d40d9843a502016f5d35b00d2.png/show' width='60' height='60' /><br>Drill</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900374/bddb2bf377f9d010e58672adf8b1b10c.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900378/78d09417bc24c40ac29b9624dd1beb8b.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900376/5de99b32b8084ff11ee253083dd79c15.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900375/3851ee42564888d549a9b62e99ab2e2a.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_12'>All Luigi Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900390/f0c0f2411e75322532e323be25a96477.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900391/4808a2154b6381cd6790dfbed44ce8b6.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900385/e3051e0c9146f438100cb3d04fee208a.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900389/86c9dfbf12779d46908568f328b44235.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900392/f9bbe2f8df999db2378f55dd780ef285.png/show' width='60' height='60' /><br>Elephant</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900394/bdf6adba9da8fccaba4a54cd69b582b5.png/show' width='60' height='60' /><br>Bubble</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900388/2243effb77ebe3069ab765ac341bcfa9.png/show' width='60' height='60' /><br>Fire</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900386/99d0e79806ce092366959d12f191bcf4.png/show' width='60' height='60' /><br>Drill</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900387/c1271e6f4c15e19336c5e9eac5bc2cec.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900396/38e89b6a653ba68bcc4892edffcf35cc.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900393/cb66c9b7c6dc09613e32a26de70f4416.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900395/a36d7cf8517355c3c3f230a3f1749046.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_13'>All Peach Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900407/9367baf549a7ba11fe0e51675c6722b9.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900408/28409f76014a1a95b38d9606da2a6da4.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900406/c9539757fd8c0a337f9214fc660a82d4.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900414/1be5934929d593c3fdbba485c07d8206.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900411/4e5c33392b6d91ab417d4401bb18b742.png/show' width='60' height='60' /><br>Elephant</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900417/c2836019a4677c33c5b7f626ebab78af.png/show' width='60' height='60' /><br>Bubble</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900413/03a84cec78e798c9c742ae641967bd29.png/show' width='60' height='60' /><br>Fire</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900412/1b702b87ce8272197f7f729b43625905.png/show' width='60' height='60' /><br>Drill</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900409/8d253e053cbb11ac6a1b6fceb13b9950.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900415/c4d64712ee4d8f32d5d1861fbf2db46c.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900410/2472e18695e00848cfffbef35a25d0a3.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900416/13c4d1ae1278337296f14ba39aadae44.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_14'>All Daisy Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900428/ff53ea6c1d2d376be7bf9342bc830e57.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900438/6f7251b629e11db0f2a6834d530f17d2.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900430/8b4383a397a45103c72f1172368e9821.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900434/2daf8a40ebf099137c8cf2139933eac5.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900432/3f3110ddea2914cea04e122e79156ede.png/show' width='60' height='60' /><br>Elephant</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900435/740dccb9fe5fc8f74fc43bf16a162d23.png/show' width='60' height='60' /><br>Bubble</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900431/e1ff0d807285f6ba9b313efe504de480.png/show' width='60' height='60' /><br>Fire</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900436/85725fa8b2d2e31688f3e6a7727a14d2.png/show' width='60' height='60' /><br>Drill</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900429/f335881013ed58305c2bbdebd2b82cc5.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900433/c9a62267dc968369662b6a83400ab54a.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900437/5f5f8a02a5efeb3787b3e97b41da0214.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900427/e7021348bb2aff669e810a5bceb4b581.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_15'>All Yellow Toad Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900447/244ff4ad55fa371a88d5867c8602bada.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900444/026e611fdf5669ef86bccfaf056e0f3b.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900451/ba79d3d89b1223ef208187f770f4a004.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900441/d38375bb7d380627a805100ecc9960c3.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900448/c1a48f3c523737da1f67f42cba1dac8d.png/show' width='60' height='60' /><br>Elephant</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900440/fbe15c0ef10fb6c49baa7a360d9114c8.png/show' width='60' height='60' /><br>Bubble</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900449/e1eb76cc35a33f9b0d7215c13c86b946.png/show' width='60' height='60' /><br>Fire</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900446/79678c6c1139ed0ad8c7fcbd63ea0c1b.png/show' width='60' height='60' /><br>Drill</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900450/2df21283acbb731ab694289274d7c9b0.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900445/3d636de777684fb2c32aee6c75d8c8d5.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900442/6c99917bcf6a74860e80b77a2f4f0003.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900443/c715fa3e45b5a16983ee8823719e53c0.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_16'>All Blue Toad Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900457/936f524750271fb1dbaf84ec44b47425.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900461/2b945e3df6e78dfed2cbe8a65e5a5443.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900458/41945b8cb57a4b20b13e49a300500d24.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900459/2bad183c620ff386e322f3d710260dc9.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900462/953a7bfdf6ef9e67e68c6a584c8a0ea0.png/show' width='60' height='60' /><br>Elephant</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900463/6af792a9b933c97fb1293ca1d3398953.png/show' width='60' height='60' /><br>Bubble</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900464/da1b900a4ac6a3dccdb78f4548f046cc.png/show' width='60' height='60' /><br>Fire</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900456/93b13ef763b8c69d78055eee8bf3b76f.png/show' width='60' height='60' /><br>Drill</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900453/8dc8e3df0b66f1fa46e2de0ccb2847b5.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900460/746af03689f5e1b9474e60b4887897c4.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900455/dcf4aa19600296b977f30919b59da336.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900454/21bba4a553d943b0e7e97bb3c8cfbe29.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_17'>All Toadette Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900469/c6c3f067616fb648202fde8ecef50494.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900475/6920a56254f0e9d486e3c55259cadc8c.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900473/5ecbd41d9380e7873dcdc847460b2680.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900472/5efb733af8d9e4d2414d602f85d0ef9d.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900477/08e23ce852b0810a072e4dd7f6419594.png/show' width='60' height='60' /><br>Elephant</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900467/e627f5fea0a3a86318c4698133712738.png/show' width='60' height='60' /><br>Bubble</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900474/c95011b44192278e7bb791194ee607cf.png/show' width='60' height='60' /><br>Fire</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900466/9639825da10b731b55892afd923eb4ee.png/show' width='60' height='60' /><br>Drill</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900470/99998351d325e7d01b55d92a14a16daf.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900471/6b4257ce7e46fff48e73e824635940f6.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900476/beccc9b353abb2838531bb19568f91fc.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900468/b9d5df04788f592c66486c795ae11d80.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_18'>All Yoshi Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900483/747fdd966a503d63629eb245ed15b901.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900486/0b6161e02b01643541ff8aced7d51841.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900481/ff31eec647416cdcd2a9b24ae2ead4d6.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900489/b2869aa4f3496f849022058c74d071a0.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900492/00b631ed236bc9e806f0eadc7823a8b7.png/show' width='60' height='60' /><br>Too bad!</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900487/f65cca24f153894bc7e7f9f8418cef20.png/show' width='60' height='60' /><br>Fluttering</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900485/be14308a8b23e84c6f7b87b824237301.png/show' width='60' height='60' /><br>In Cloud</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900491/be0d325ad6ace85f7d68d8097fc3ee58.png/show' width='60' height='60' /><br>Eating</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900482/148720d3932baf3abb37c8e823aa70cf.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900484/f55b097fa3da80e477171c2beeea0e39.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900490/6b0a762d99fbab483aafce5a33e1e2e5.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900488/b472c4c4e6bf4d67fb0bab87dfa0dd3d.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_19'>All Red Yoshi Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900504/6113144e8f989f2dc54c08f3446ea051.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900496/99693b0b928b8a453ca40cbf2ebab42d.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900497/1aa55181808ff22fbcc948c9ba1eb539.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900506/97b868a6a6d27fd234c801142df8688b.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900499/06690ad586616439f05f2f9cc79ad975.png/show' width='60' height='60' /><br>Too bad!</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900500/d79be664f3d7799aaa9f7dd20f15cc1a.png/show' width='60' height='60' /><br>Fluttering</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900501/db200115cc77a216ee5e199d376bd178.png/show' width='60' height='60' /><br>In Cloud</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900502/3b752f8ad5c055f45010c3dee5a4604b.png/show' width='60' height='60' /><br>Eating</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900503/390fc56da632086a8c5d4fc84dfbff8f.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900495/6b2b3ccbe50c3ff9f5fee001b0a5927e.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900498/05a2197c7eb0bfb96ba6026285eef84f.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900505/7dae85c427bd5ffb6fd574bdc69c6306.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_20'>All Yellow Yoshi Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900513/fcdacdbfb0536775cef5a66f73a4d73d.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900517/d341cc856f1fe72e4686ad16f4cbd8a4.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900516/8c732e95b9798a9ecb5ce449e2a687e8.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900516/8c732e95b9798a9ecb5ce449e2a687e8.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900515/79040807b35342ed54fde2d213db36ea.png/show' width='60' height='60' /><br>Too bad!</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900511/464673087f4f0ee187a8d3ae59db0d13.png/show' width='60' height='60' /><br>Fluttering</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900514/9aae93dccbe594a41ff866f71650c735.png/show' width='60' height='60' /><br>In Cloud</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900520/37c0a5ca295ef3939f196ce1cab29259.png/show' width='60' height='60' /><br>Eating</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900518/4b2784bc09eff7d07dd61583a00dd728.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900512/257c9d81eea7b90321af99e9c8e8e8b3.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900509/178944cd4b9469a14b4411a0bf21218a.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900510/583eb87ed8a650850db246abd80d037f.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_21'>All Light Blue Yoshi Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900530/45fe1413bf0bf36e96231ef2508b7837.png/show' width='60' height='60' /><br>Jumping</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900527/5d728e28ac08499002e66c9c7940808e.png/show' width='60' height='60' /><br>Swimming</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900523/cd6d2cef4602610a0d3258a75ae1b04e.png/show' width='60' height='60' /><br>Crouching</td>
    <td width="25%" class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900528/92d71421d04f73f8fde1c8159ee43dbc.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900531/4b0dc0c5b397b0257b5bea534b6b120b.png/show' width='60' height='60' /><br>Too bad!</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900525/cbeb19f2d0a4c655801cb93394510046.png/show' width='60' height='60' /><br>Fluttering</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900524/34e21cec56d632f967190b3dd87cdb0d.png/show' width='60' height='60' /><br>In Cloud</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900526/4c447626cdd89807d49c03a2eafd2e6c.png/show' width='60' height='60' /><br>Eating</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900533/6ce6f373fbe7d351e8efd38bd3dc0dac.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900529/23deada358e0b38540eace2a3e7bf967.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900532/92e9ca56aabc2aa28fe36e7b60968ad1.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900522/fa63005a9110a316183865b16077ad30.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_22'>All Nabbit Standees</h3>
<table class='a-table a-table a-table ' style=''>
  <tr>
    <th width="25%" colspan="4">Regular Standees</th>
  </tr>
  <tr>
    <td class="top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900539/5cb70b8ddccff21e713370f8cb846a7e.png/show' width='60' height='60' /><br>Jumping</td>
    <td class="top tenter"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900535/56f3377f0822c994f3e8ff47e0290c65.png/show' width='60' height='60' /><br>Swimming</td>
    <td class=top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900542/99bb2f8705d090e40fc8d2af7c325445.png/show' width='60' height='60' /><br>Crouching</td>
    <td class="top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900546/5b7bfe532d75376235cc7b0d504848a2.png/show' width='60' height='60' /><br>Posing</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Silver Standees</th>
  </tr>
  <tr>
    <td class="top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900545/741a50c4b5006b6899cca5e383b8117f.png/show' width='60' height='60' /><br>Too bad!</td>
    <td class="top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900536/39cc9f6870b6a0634e0f10a5d188eea0.png/show' width='60' height='60' /><br>Running</td>
    <td class="top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900541/dc7369b8310dccad14f7ba427c4dc4ae.png/show' width='60' height='60' /><br>In Cloud</td>
    <td class="top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900544/fc8edc2f69c07fd7ba5700c1628e3f66.png/show' width='60' height='60' /><br>Ground-Pounding</td>
  </tr>
    <tr>
    <th width="25%" colspan="4">Gold Standees</th>
  </tr>
  <tr>
    <td class="top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900537/5f84c134565125adbceff4a898d7eb23.png/show' width='60' height='60' /><br>Hoppycat</td>
    <td class="top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900538/60f64cb3710c177769c1e7a01b695b10.png/show' width='60' height='60' /><br>Goomba</td>
    <td class="top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900543/4a8e063e06cbe44301cbd445d649045c.png/show' width='60' height='60' /><br>Balloon</td>
    <td class="top center"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder' data-src='https://j-img.game8.co/8900540/e49b26e57850946bb25ac54fd3942309.png/show' width='60' height='60' /><br>Spike-Ball</td>
  </tr>
</table>
<h2 class='a-header--2' id='hl_9'>Super Mario Wonder Enemies</h2>
<p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Ssuper Mario Bros Wonder - Enemies' data-src='https://img.game8.co/3789029/0119a029803d6de374a3ac90fe31fe27.png/show' width='440' style='height: 0; padding-bottom: calc(100%*110/440); padding-bottom: calc(min(100%,440px)*110/440);' /></p>

<p class='a-paragraph'><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/430379' style='border-color: ; background-color: ; color: ;'><span>List of All Enemies</span></a></p>
<h3 class='a-header--3' id='hm_23'>List of All Enemies</h3><h4 class='a-header--4' id='hs_1'>New Enemies</h4>
<table class='a-table a-table ' style=''>
 <tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431627><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Skedaddler' data-src='https://j-img.game8.co/8896776/20980ec54368ccddda30e9c323bce007.png/show' width='50' height='50' /> <br> Skedaddler</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431629><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Bulrush' data-src='https://j-img.game8.co/8896794/c59c79e0244b5ae461f8a1b78c23ec83.png/show' width='50' height='50' /> <br> Bulrush</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431630><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Hoppo' data-src='https://j-img.game8.co/8896788/5572eaf7b82b57fd1ad128c24300b356.png/show' width='50' height='50' /> <br> Hoppo</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431631><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Smogrin' data-src='https://j-img.game8.co/8896757/12313e52a9172b3c6b60494a34a36099.png/show' width='50' height='50' /> <br> Smogrin</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431633><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Shova' data-src='https://j-img.game8.co/8896783/513bd6d30f67da4ac23519af4fb519f2.png/show' width='50' height='50' /> <br> Shova</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431690><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Snail Enemy' data-src='https://j-img.game8.co/8896753/a60ff043ee84843b4dff70e21b49833e.png/show' width='50' height='50' /> <br> Snail Enemy</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431689><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Big Snail Enemy' data-src='https://j-img.game8.co/8896789/6f1f61b8792e89c0ccab3401474b9b5b.png/show' width='50' height='50' /> <br> Big Snail Enemy</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431638><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Smackerel' data-src='https://j-img.game8.co/8896780/3a5d2662d705061a3d6b79f202762f9a.png/show' width='50' height='50' /> <br> Smackerel</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431640><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Robbird' data-src='https://j-img.game8.co/8896784/4f881c6e74be1c5796edb1eb4b9ed817.png/show' width='50' height='50' /> <br> Robbird</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431688><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Sea Centipede Enemy' data-src='https://j-img.game8.co/8896799/cf47b3fe1207d4b0aca37ab90cb2d16e.png/show' width='50' height='50' /> <br> Sea Centipede Enemy</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431687><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Sea Turtle Enemy' data-src='https://j-img.game8.co/8896755/cebbab010e6994face0ffb4f5b787d3b.png/show' width='50' height='50' /> <br> Sea Turtle Enemy</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431642><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Blewbird' data-src='https://j-img.game8.co/8896764/094ed240686d16011ae8b879c249487c.png/show' width='50' height='50' /> <br> Blewbird</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431647><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Gnawsher' data-src='https://j-img.game8.co/8896771/1956edf9add671ca921e3ca06d2e791e.png/show' width='50' height='50' /> <br> Gnawsher</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431649><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Maw-Maw' data-src='https://j-img.game8.co/8896790/47bdb4f1e5897ea041e5c2ba2a3715b3.png/show' width='50' height='50' /> <br> Maw-Maw</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431650><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Mumsie' data-src='https://j-img.game8.co/8896775/0faa05b4f1ed3a5763318192ee001bf6.png/show' width='50' height='50' /> <br> Mumsie</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431651><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Nipper Plant' data-src='https://j-img.game8.co/8896760/4c7804220dce1b1e5e1fb2bb1250f35c.png/show' width='50' height='50' /> <br> Nipper Plant</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431654><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Outmaway' data-src='https://j-img.game8.co/8896758/3177d518df325e21a5211bdcc507db53.png/show' width='50' height='50' /> <br> Outmaway</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431655><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Condart' data-src='https://j-img.game8.co/8896769/75f0c98370b3f5f3dc26ac310d53c31c.png/show' width='50' height='50' /> <br> Condart</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431656><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Pokipede' data-src='https://j-img.game8.co/8896768/41ea7e927996c7cabc3690527e9fd9b0.png/show' width='50' height='50' /> <br> Pokipede</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431657><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Hoppycat' data-src='https://j-img.game8.co/8896759/38f3ec24d89b169d1b02a727273b30a3.png/show' width='50' height='50' /> <br> Hoppycat</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431658><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Anglefish' data-src='https://j-img.game8.co/8896767/757de0e69c74178afa40885d8ba0d128.png/show' width='50' height='50' /> <br> Anglefish</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431686><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Purple Cup Enemy' data-src='https://j-img.game8.co/8896773/efc4e24f70e7f976c5f56116eb0d8ad1.png/show' width='50' height='50' /> <br> Purple Cup Enemy</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431685><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Green Cup Enemy' data-src='https://j-img.game8.co/8896751/3e1c4465118a38d8f6086b62e06da20f.png/show' width='50' height='50' /> <br> Green Cup Enemy</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431659><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Sugarstar' data-src='https://j-img.game8.co/8896782/ee7b5b65064d5fd33f7e6573ca321022.png/show' width='50' height='50' /> <br> Sugarstar</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431660><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Armad' data-src='https://j-img.game8.co/8896803/22aa1c2c4f8ff7d8dfff6cb85744e813.png/show' width='50' height='50' /> <br> Armad</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431694><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Pot-Worm' data-src='https://j-img.game8.co/8896762/898d62a67f8e23b99cc23433636037da.png/show' width='50' height='50' /> <br> Pot-Worm</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431663><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Snootle' data-src='https://j-img.game8.co/8896774/a9e8dcb8c912efb9a431a83eddc453c4.png/show' width='50' height='50' /> <br> Snootle</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431665><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Taily' data-src='https://j-img.game8.co/8896778/def0f491c6d1be9619ceb17d9e148f28.png/show' width='50' height='50' /> <br> Taily</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431666><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Trottin' Piranha Plant' data-src='https://j-img.game8.co/8896793/fec9f9942a080e186d314c3843f234ae.png/show' width='50' height='50' /> <br> Trottin' Piranha Plant</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431668><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Wubba' data-src='https://j-img.game8.co/8896745/842d82b9db55947a9a503f0d2da58c0f.png/show' width='50' height='50' /> <br> Wubba</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431693><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Screaming Door' data-src='https://j-img.game8.co/8896792/b97c29be126df9c175ffd7804e84bfef.png/show' width='50' height='50' /> <br> Screaming Door</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431692><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Spiky Slider' data-src='https://j-img.game8.co/8896805/8c82c2805b70d679d783a6a187bf3fd1.png/show' width='50' height='50' /> <br> Spiky Slider</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431669><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Rrrumba' data-src='https://j-img.game8.co/8896772/27acad40f368019f0eadc2954305b753.png/show' width='50' height='50' /> <br> Rrrumba</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431670><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Raargh' data-src='https://j-img.game8.co/8896797/43e0f995cca2ce3d1231993f34b43a0d.png/show' width='50' height='50' /> <br> Raargh</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431696><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Hot-Hot' data-src='https://j-img.game8.co/8896777/45c4eab38d27fe97983546f744a9f020.png/show' width='50' height='50' /> <br> Hot-Hot</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431671><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Revver' data-src='https://j-img.game8.co/8896796/ae518d58c4e2512bc9d0747d82c4b2ab.png/show' width='50' height='50' /> <br> Revver</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431695><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Fire Spike' data-src='https://j-img.game8.co/8896752/68b8808582c93bcfab63576afbabad38.png/show' width='50' height='50' /> <br> Fire Spike</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431673><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Missile Meg' data-src='https://j-img.game8.co/8896785/513109d0ad8d7a69e13755d8870c5617.png/show' width='50' height='50' /> <br> Missile Meg</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431684><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Black Cup Enemy' data-src='https://j-img.game8.co/8896798/d0d9cdbac91cb03fa9b95b3854c7af05.png/show' width='50' height='50' /> <br> Black Cup Enemy</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431674><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Seeker Bullet Bill' data-src='https://j-img.game8.co/8896802/0e951414c0d4c8f682d8e6e1cdb03a42.png/show' width='50' height='50' /> <br> Seeker Bullet Bill</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431691><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Red Bullet Bill' data-src='https://j-img.game8.co/8896779/41e0e34e9d1bc448071e605b775f7aeb.png/show' width='50' height='50' /> <br> Red Bullet Bill</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431675><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Sproing' data-src='https://j-img.game8.co/8899160/89618aabd411153dd5c93401330a71c1.png/show' width='50' height='50' /> <br> Sproing</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431683><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Tall Mushroom Enemy' data-src='https://j-img.game8.co/8899158/07fdd3ca7bdd7378c5bdd6549f29f7eb.png/show' width='50' height='50' /> <br> Tall Mushroom Enemy</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431682><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Swooping Owl Enemy' data-src='https://j-img.game8.co/8899159/d6ee4c09f8d2cf9c95682314affaffe8.png/show' width='50' height='50' /> <br> Swooping Owl Enemy</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431681><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Fire Ball Enemy' data-src='https://j-img.game8.co/8899157/64d54e258d515c0ceb69145d7cf3a352.png/show' width='50' height='50' /> <br> Fire Ball Enemy</a>







</td>


</tr>
</table>
<h4 class='a-header--4' id='hs_2'>Returning Enemies</h4>
<table class='a-table a-table ' style=''>
 <tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431624><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Goomba' data-src='https://j-img.game8.co/8896761/29bd40cc39cc7f618134f82468b1e340.png/show' width='50' height='50' /> <br> Goomba</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431626><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Piranha Plant' data-src='https://j-img.game8.co/8896770/b81ec35bf57d0cafc942240312e1f987.png/show' width='50' height='50' /> <br> Piranha Plant</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431628><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Koopa' data-src='https://j-img.game8.co/8896800/12544c3133d6f6d79388bc9e13c0175b.png/show' width='50' height='50' /> <br> Koopa</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431632><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Spike' data-src='https://j-img.game8.co/8896844/b62b580c68da3f12e0b0295111eec6e3.png/show' width='50' height='50' /> <br> Spike</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431634><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Rolla Koopa' data-src='https://j-img.game8.co/8896750/5f0f4d6e962d7c82e1f3e497516f2d47.png/show' width='50' height='50' /> <br> Rolla Koopa</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431635><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Hammer Bro' data-src='https://j-img.game8.co/8896791/4844085925e76d178e3d15d4b100e00e.png/show' width='50' height='50' /> <br> Hammer Bro</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431636><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Dry Bone' data-src='https://j-img.game8.co/8896763/835ba7753742090b0aaaf774aae70bd8.png/show' width='50' height='50' /> <br> Dry Bone</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431637><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Bone Goomba' data-src='https://j-img.game8.co/8896756/8e602c1f27897a58ee0df2efacb74477.png/show' width='50' height='50' /> <br> Bone Goomba</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431639><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Cheep Cheep' data-src='https://j-img.game8.co/8896786/6e72fc58af5e30f2a977afb88dce973f.png/show' width='50' height='50' /> <br> Cheep Cheep</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431641><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Urchin' data-src='https://j-img.game8.co/8896845/125f2cc0a6c75b26428cfc79f78927e3.png/show' width='50' height='50' /> <br> Urchin</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431643><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Spiny' data-src='https://j-img.game8.co/8896749/ba5172e351e04effa5dd173965ee5f09.png/show' width='50' height='50' /> <br> Spiny</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431644><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Bullet Bill' data-src='https://j-img.game8.co/8896765/3317dfe0ba966045f1846b89fe636bf8.png/show' width='50' height='50' /> <br> Bullet Bill</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431645><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Konk' data-src='https://j-img.game8.co/8896787/f986b9bb101cdcc86855040d577f2e3f.png/show' width='50' height='50' /> <br> Konk</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431646><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Mechakoopa' data-src='https://j-img.game8.co/8896766/446aa0234c2fd27094cc0cdf0c984e0d.png/show' width='50' height='50' /> <br> Mechakoopa</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431648><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Goombrat' data-src='https://j-img.game8.co/8896748/1717b745713352ecb6f841f4e9f38ed1.png/show' width='50' height='50' /> <br> Goombrat</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431652><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Melon Piranha Plant' data-src='https://j-img.game8.co/8896801/67698f00170a8b437c242bf5a7d613e4.png/show' width='50' height='50' /> <br> Melon Piranha Plant</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431653><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Fire Piranha Plant' data-src='https://j-img.game8.co/8896795/5cea5c4d0091be9dcc55a31b8fe2dd9e.png/show' width='50' height='50' /> <br> Fire Piranha Plant</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431661><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Lil Sparky' data-src='https://j-img.game8.co/8896781/db1e20af381acb21776b24671349b45f.png/show' width='50' height='50' /> <br> Lil Sparky</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431662><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Hothead' data-src='https://j-img.game8.co/8899839/d067ed59f865cdbf79a6e39af2e174fe.png/show' width='50' height='50' /> <br> Hothead</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431664><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Bloomp' data-src='https://j-img.game8.co/8896804/e65c7a903172c833a6a43ee6eaf708b9.png/show' width='50' height='50' /> <br> Bloomp</a>







</td>


</tr><tr>
<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431667><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Boo' data-src='https://j-img.game8.co/8896746/a822562236ee5ec32dc57cdd1532f17e.png/show' width='50' height='50' /> <br> Boo</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431672><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Buzzy Beetle' data-src='https://j-img.game8.co/8896754/033f042ae541d84c6410911a7ef63fea.png/show' width='50' height='50' /> <br> Buzzy Beetle</a>







</td>

<td width="25%" class="top center">

<a class='a-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/431676><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Wonder -  Pokey' data-src='https://j-img.game8.co/8899156/d1cccdd024f91009f3494c601d11aa31.png/show' width='50' height='50' /> <br> Pokey</a>







</td>


</tr>
</table>
<h2 class='a-header--2' id='hl_10'>Super Mario Wonder Message Board</h2>
<p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Message Boards' data-src='https://img.game8.co/3786051/5417323646bc0738921673b841a775e8.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' /></p>

<p class='a-paragraph'><a class='a-btn' href='/games/Super-Mario-Bros-Wonder/archives/430987' style='border-color: ; background-color: ; color: ;'><span>Message Boards</span></a></p>

<table class='a-table ' style=''>
  <tr>
    <th colspan="2">List of Message Boards</th>
  </tr>
  <tr>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431068><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Search Party Online Multiplayer Friend Codes Board' data-src='https://img.game8.co/3785940/6df49e0de5911ed7880d61a26c380bf6.png/show' width='440' style='height: 0; padding-bottom: calc(100%*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />Search Party Friend Codes Board (0)</a></td>
    <td width="50%" class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431069><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Friend Races Online Multiplayer Friend Codes Board.png' data-src='https://img.game8.co/3785974/4bae4486f3f0299b3eae76c21b90fe6a.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />Friend Races Friend Codes Board (0)</a></td>
  </tr>
  <tr>
    <td class="center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431070><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - Online Multiplayer Friend Room Codes Board.png' data-src='https://img.game8.co/3785993/d7de745ad9336f1e82a54a52e33cb855.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />Online Multiplayer Friends Room Codes Board (0)</a></td>
    <td class="top center"><a class='a-link' href=/games/Super-Mario-Bros-Wonder/archives/431072><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder - General Message Board.png' data-src='https://img.game8.co/3786022/e444a1b53bd201e1e859858484bcf3c1.png/show' width='440' style='height: 0; padding-bottom: calc(px*230/440); padding-bottom: calc(min(100%,440px)*230/440);' />General Message Board (0)</a></td>
  </tr>
</table>
<h2 class='a-header--2' id='hl_11'>Super Mario Wonder Latest News and Info</h2>
<table class='a-table a-table ' style=''>
  <tr>
    <td class="center" colspan="2"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder Elephant Characters' data-src='https://img.game8.co/3781562/7bd71333c965367385d9d4fc64315853.png/show' width='440' style='height: 0; padding-bottom: calc(100%*247/440); padding-bottom: calc(min(100%,440px)*247/440);' /></td>
  </tr>
  <tr>
    <th width="40%">Release Date</th>
    <td class="center" width="60%">October 20, 2023</td>
  </tr>
  <tr>
    <th>Price</th>
    <td class="center">$59.99 USD (Standard RRP)</td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_24'>Super Mario Voice Actor</h3>
<p class='a-paragraph'>Mario&#39;s Voice Actor has changed! After decades of voicing Mario, Charles Martinet has moved onto a new role as Nintendo&#39;s Official Mario Ambassador.</p>

<p class='a-paragraph'><a class='a-btn' href='https://game8.co/articles/latest/846' style='border-color: ; background-color: ; color: ;'><span>Mario Voice Actor Retires</span></a></p>
<h2 class='a-header--2' id='hl_12'>Super Mario Wonder Game Info</h2><h3 class='a-header--3' id='hm_25'>Mario&#39;s Wonder-ful Newest Entry</h3>
<p class='a-paragraph'><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Wonder Effect - Super Mario Wonder' data-src='https://img.game8.co/3781702/0e62465c6832e1aa0568de95fcb88df9.png/show' width='440' style='height: 0; padding-bottom: calc(100%*247/440); padding-bottom: calc(min(100%,440px)*247/440);' /></p>

<p class='a-paragraph'>Experience a new level of Mario excitement in Super Mario Bros. Wonder as classic gameplay gets a twist with Wonder Flowers! These remarkable items can unleash unique and bizarre events, from animated pipes to causing chaos as a colossal Spike-Ball. Get ready to transform your gaming world with Wonder Flowers and embark on a thrilling adventure!</p>
<h3 class='a-header--3' id='hm_26'>Product Information: Official Website</h3>
<table class='a-table a-table ' style=''>
  <tr>
    <td class="center" colspan="2"><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy lazy-non-square' alt='Super Mario Wonder Cover Image.png' data-src='https://img.game8.co/3781558/283138cd8d6a22535d7b6e81720e2b8e.png/show' width='440' style='height: 0; padding-bottom: calc(px*110/440); padding-bottom: calc(min(100%,440px)*110/440);' />
</td>
  </tr>
  <tr>
    <th width="40%">Release Date</th>
    <td class="center" width="60%">October 20, 2023</td>
  </tr>
  <tr>
    <th>Price</th>
    <td class="center">$59.99 USD (Standard RRP)</td>
  </tr>
  <tr>
    <th>Genre</th>
    <td class="center">Side-Scrolling Platformer</td>
  </tr>
  <tr>
    <th>Platform</th>
    <td class="center">Nintendo Switch</td>
  </tr>
  <tr>
    <th>Players</th>
    <td class="center">1-4</td>
  </tr>
  <tr>
    <th>Official Site</th>
    <td class="center"><a class='a-link' href=https://supermariobroswonder.nintendo.com target='_blank'>Super Mario Bros. Wonder</a></td>
  </tr>
</table>
<h3 class='a-header--3' id='hm_27'>1st Trailer: Nintendo Direct Reveal Trailer</h3>
<iframe width='100%' height='240' class='lazy lazy-fadeIn' data-src='https://www.youtube.com/embed/JStAYvbeSHc' frameborder='0' allowfullscreen></iframe>
<h3 class='a-header--3' id='hm_28'>2nd Trailer: Super Mario Bros. Wonder Direct</h3>
<iframe width='100%' height='240' class='lazy lazy-fadeIn' data-src='https://www.youtube.com/embed/G0m_uNaSres' frameborder='0' allowfullscreen></iframe>
<h3 class='a-header--3' id='hm_29'>3rd Trailer: Overview Trailer</h3>
<iframe width='100%' height='240' class='lazy lazy-fadeIn' data-src='https://www.youtube.com/embed/ljx3QQ4uApg' frameborder='0' allowfullscreen></iframe>
<h2 class='a-header--2' id='hl_13'>Super Mario Guides &amp; Walkthroughs</h2><h3 class='a-header--3' id='hm_30'>All Mario Game8 Wikis</h3>
<table class='a-table a-table table--fixed' style=''>
<tr>
<th colspan=6>All Mario Wikis</th>
</tr>
<tr>
<td class="center", colspan=2><a class='a-link' href=https://game8.co/games/Mario-Rabbids-Sparks-of-Hope><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Mario Rabbids' data-src='https://img.game8.co/3593286/88ca9d3ec129c82e3c05b8a859054ac5.jpeg/original' width='90' height='90' />Mario + Rabbids Sparks of Hope</a></td>
<td class="center", colspan=2><a class='a-link' href=https://game8.co/games/Mario-Strikers-Battle-League><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Mario Strikers Battle League' data-src='https://img.game8.co/3524901/772b69737097ff1c48bca238e8747c56.jpeg/original' width='90' height='90' />Mario Strikers: Battle League</a></td>
<td class="center", colspan=2><a class='a-link' href=https://game8.co/games/Paper-Mario-Origami-King-Switch><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Paper Mario The Origami King' data-src='https://img.game8.co/3249696/fafe4147c6cf390c9d32e84d47ec3181.png/original' width='90' height='90' />Paper Mario: The Origami King</a></td>
</tr>
<tr>
<td class="center", colspan=2><a class='a-link' href=https://game8.co/games/Mario-Golf-Super-Rush><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Mario Golf Super Rush' data-src='https://img.game8.co/3372197/6b10bee3ff6ad2cdcd4c32ffd7d4bb58.png/original' width='90' height='90' />Mario Golf: Super Rush</a></td>
<td class="center", colspan=2><a class='a-link' href=https://game8.co/games/Super-Mario-RPG-Remake><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario RPG Remake' data-src='https://img.game8.co/3736064/0bf43df8c216d134b580e69e42cf7b4b.png/original' width='90' height='90' />Super Mario RPG Remake</a></td>
<td class="center", colspan=2><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' class='a-img lazy' alt='Super Mario Bros. Wonder' data-src='https://img.game8.co/3781740/1b42b90e2879827d53e80d4498d073dc.png/original' width='90' height='90' /><b class='a-bold'>Super Mario Bros. Wonder</b></td>
</tr>
</table>
</div><div class="p-archiveFeedback"><button class="p-archiveFeedback__link" data-micromodal-trigger="js-feedback-modal" id="js-open_feedback_modal"><i class="fa fa-exclamation-triangle p-archiveFeedback__icon"></i>Opinions about an article or post go here.</button><div aria-hidden="true" class="c-micromodal c-micromodal-slide" id="js-feedback-modal"><div class="c-micromodal__overlay" data-micromodal-close="" tabindex="-1"><div aria-labelledby="feedback modal" aria-modal="true" class="c-micromodal__container" role="dialog"><button aria-label="Close modal" class="c-micromodal__close" data-micromodal-close=""></button><div class="c-micromodal__content"><div class="p-archiveFeedbackForm" id="js-feedback-form"><div class="p-archiveFeedbackForm__header">Opinions about an article or post</div><div class="p-archiveFeedbackForm__content"><p class="p-archiveFeedbackForm__text">We at Game8 thank you for your support.</p><p class="p-archiveFeedbackForm__text">In order for us to make the best articles possible, share your corrections, opinions, and thoughts about <b>「Super Mario Bros. Wonder」</b> with us!</p><p class="p-archiveFeedbackForm__text">When reporting a problem, please be as specific as possible in providing details such as what conditions the problem occurred under and what kind of effects it had.</p></div><textarea class="input--textarea" id="js-feedback-textarea" placeholder="Example: I tried to attach a photo to a comment I was posting, but an error caused it to not work properly. I am using an iPhone7 with Safari." rows="4"></textarea><button class="button button-gray" data-micromodal-close="">Close</button><button class="button button-green" id="js-feedback-confirm-btn">Confirm</button></div><div class="p-archiveFeedback__confirm" id="js-feedback-confirm" style="display: none;"><p class="p-archiveFeedbackForm__text">Do you want to send this information?</p><table><tbody><tr><th>Point out mistakes and send feedback</th></tr><tr><td id="js-feedback-textarea-preview"></td></tr></tbody></table><button class="button button-gray" id="js-feedback-back">Edit</button><button class="button button-green" id="js-feedback-submit">Send</button></div></div></div></div></div></div><div class="c-micromodal c-micromodal-slide" id="js-event-modal"><div class="c-micromodal__overlay" data-micromodal-close=""><div class="c-micromodal__container"><button class="c-micromodal__close" data-micromodal-close=""></button><div class="c-micromodal__header" id="js-event-modal-header"></div><div class="c-micromodal__content"><div id="js-event-modal-content"></div><div id="js-event-modal-footer"></div><div class="button-container-center"><button class="button button-sm button-gray" data-micromodal-close="">Close</button></div></div></div></div></div></div><div class="l-3colMain__left"><div class="c-sideContainer c-sideContainer--nospace"><div class="c-heading c-heading--orange"><svg viewbox="0 0 24 24" class="c-heading__icon">
<path d="M24,6H0V2h24V6z M24,10H0v4h24V10z M24,18H0v4h24V18z"></path>
</svg>
<h2 class="c-heading__title">Walkthrough Menu</h2></div><div class="drawer_survey track_nier" data-track-nier-keyword="drawer_survey.click" data-track-nier-value="pc"><div class="drawer_survey--item"><div class="drawer_survey--item__bee"><img src="//assets.game8.co/assets/bee_apology-619630bea80d7d88db8657d5246bfa6a9ccdd509927c54942c8f169002b788ce.png" alt="Bee apology" width="36" height="32" /><div class="drawer_survey--item__bee--badge"></div></div><div class="drawer_survey--item__title"><div class="drawer_survey--item__title--main">Please participate in our<br />site improvement survey <span class="drawer_survey--item__title--date" >02/2024</span></div></div><div class="drawer_survey--item__date"></div></div></div><div class="survey_modal"><form name="nps_survey_form"><input name="answer" type="hidden" value="" /><input name="advertisement" type="hidden" value="0,0,0,0,0,0" /><input name="quality" type="hidden" value="0,0,0,0,0,0" /><input name="usability" type="hidden" value="0,0,0,0,0,0" /><input name="board" type="hidden" value="0,0,0,0,0,0" /><input name="archive_id" type="hidden" value="430381" /><input name="game_id" type="hidden" value="1260" /><input name="step" type="hidden" value="0" /></form><div class="survey_modal_top"><div class="survey_modal_top-header"><div class="survey_modal_top-header__content"><span class="survey_modal_top-header__title">Would you assist in<br />improving Game8's site?</span><img class="survey_modal_top-header__bee" src="//assets.game8.co/assets/new/nps_survey/bee_february-3c35711a96e93b6ce04842ca9fdf9597a11b02435735a8dc99be2803e2c748f6.png" alt="Bee february" width="160" height="140" /></div></div><div class="survey_modal__close"><span>&times</span></div><div class="survey_modal-top-body"><div class="survey_modal_top-body-text">This survey will take about 1 minute.<br />Your answers will help us to improve our website.</div><div class="survey_modal_top-body-info"><div class="survey_modal_top-body-info-icon"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal_top-body-info-icon">
<path d="M15.8333 4.16667V11.6667H11.6667V15.8333H4.16667V4.16667H15.8333ZM15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H12.5L17.5 12.5V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM10 11.6667H5.83333V10H10V11.6667ZM14.1667 8.33333H5.83333V6.66667H14.1667V8.33333Z" fill="#FFB800"></path>
</svg>
</div><div class="survey_modal_top-body-info-text">We are listening to our users' valuable opinions and discussing how to act on them.</div></div><div class="survey_modal_top-body-description">The information collected through this survey will be used for the purpose of improving our services. In addition, the information will only be disclosed a part of a statistic in a format that will not allow identification of personal information.</div></div><div class="survey_modal_top__start"><span>Begin Survey</span></div><div class="survey_modal__close-link">Not Now</div></div><div class="survey_modal_steps survey_modal_step1 modal_display_none"><div class="survey_modal-header"><div class="survey_modal_steps__progress--background"></div><div class="survey_modal_steps__progress_step1"></div><div class="survey_modal__close"><span>&times</span></div></div><div class="survey_modal-body"><div class="survey_modal-body__question">Please rate each item regarding Game8.co's Advertisements.</div><div class="survey_modal-body__answers"><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Amount of Ads</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="0" question="0" value="1"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Very Dissatisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="0" value="2"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Somewhat Dissatisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="0" value="3"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Fine</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="0" value="4"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Somewhat Satisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="0" value="5"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Highly Satisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Placement of Ads</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="1" question="0" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="0" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="0" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="0" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="0" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Timing of Ad Display</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="2" question="0" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="0" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="0" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="0" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="0" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Ad Loading Speed</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="3" question="0" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="0" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="0" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="0" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="0" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Safeness of Ads</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="4" question="0" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="0" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="0" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="0" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="0" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Content of Ads</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="5" question="0" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="0" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="0" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="0" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="0" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-footer"><div class="survey_modal__navigation"><div class="survey_modal__navigation--back"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal__navigation--back_icon">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#313131"></path>
</svg>
</div><div class="survey_modal__navigation--next"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal__navigation--next_icon">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#313131"></path>
</svg>
</div></div></div></div></div><div class="survey_modal_steps survey_modal_step2 modal_display_none"><div class="survey_modal-header"><div class="survey_modal_steps__progress--background"></div><div class="survey_modal_steps__progress_step2"></div><div class="survey_modal__close"><span>&times</span></div></div><div class="survey_modal-body"><div class="survey_modal-body__question">Please rate each item regarding Game8.co's Quality of Articles.</div><div class="survey_modal-body__answers"><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Amount of information</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="0" question="1" value="1"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Very Dissatisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="1" value="2"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Somewhat Dissatisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="1" value="3"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Fine</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="1" value="4"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Somewhat Satisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="1" value="5"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Highly Satisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Frequency of updates</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="1" question="1" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="1" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="1" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="1" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="1" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Speed of new information</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="2" question="1" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="1" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="1" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="1" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="1" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Accuracy of articles</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="3" question="1" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="1" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="1" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="1" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="1" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Understandibility of articles</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="4" question="1" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="1" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="1" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="1" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="1" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Readability of sentences</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="5" question="1" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="1" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="1" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="1" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="1" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-footer"><div class="survey_modal__navigation"><div class="survey_modal__navigation--back"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal__navigation--back_icon">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#313131"></path>
</svg>
</div><div class="survey_modal__navigation--next"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal__navigation--next_icon">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#313131"></path>
</svg>
</div></div></div></div></div><div class="survey_modal_steps survey_modal_step3 modal_display_none"><div class="survey_modal-header"><div class="survey_modal_steps__progress--background"></div><div class="survey_modal_steps__progress_step3"></div><div class="survey_modal__close"><span>&times</span></div></div><div class="survey_modal-body"><div class="survey_modal-body__question">Please rate each item regarding Game8.co's Usability of the Site.</div><div class="survey_modal-body__answers"><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Ease of finding information</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="0" question="2" value="1"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Very Dissatisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="2" value="2"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Somewhat Dissatisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="2" value="3"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Fine</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="2" value="4"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Somewhat Satisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="2" value="5"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Highly Satisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Loading Speed</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="1" question="2" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="2" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="2" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="2" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="2" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Use of Color</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="2" question="2" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="2" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="2" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="2" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="2" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Font Size</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="3" question="2" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="2" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="2" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="2" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="2" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Visibility of Images</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="4" question="2" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="2" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="2" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="2" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="2" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Easy to Understand Layout</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="5" question="2" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="2" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="2" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="2" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="2" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-footer"><div class="survey_modal__navigation"><div class="survey_modal__navigation--back"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal__navigation--back_icon">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#313131"></path>
</svg>
</div><div class="survey_modal__navigation--next"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal__navigation--next_icon">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#313131"></path>
</svg>
</div></div></div></div></div><div class="survey_modal_steps survey_modal_step4 modal_display_none"><div class="survey_modal-header"><div class="survey_modal_steps__progress--background"></div><div class="survey_modal_steps__progress_step4"></div><div class="survey_modal__close"><span>&times</span></div></div><div class="survey_modal-body"><div class="survey_modal-body__question">Please rate each item regarding Game8.co's Message Boards, Comments.</div><div class="survey_modal-body__answers"><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Ease of Writing</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="0" question="3" value="1"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Very Dissatisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="3" value="2"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Somewhat Dissatisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="3" value="3"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Fine</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="3" value="4"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Somewhat Satisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-body__answers-detail-answers-item" index="0" question="3" value="5"><div class="survey_icon-container"><div class="survey_modal-body__answers-detail-answers-item-description">Highly Satisfied</div><div class="survey_circle-container"><div class="survey_circle-inliner"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Readability</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="1" question="3" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="3" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="3" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="3" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="1" question="3" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Ease in Finding Information</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="2" question="3" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="3" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="3" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="3" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="2" question="3" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Comment Quality</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="3" question="3" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="3" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="3" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="3" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="3" question="3" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Comment Quantity</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="4" question="3" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="3" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="3" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="3" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="4" question="3" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div><div class="survey_modal-body__answers-detail-container"><div class="survey_modal-body__answers-detail-description">Admin Response</div><div class="survey_modal-body__answers-detail-answers"><div class="survey_modal-body__answers-detail-answers-item" index="5" question="3" value="1"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="3" value="2"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="3" value="3"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M9 14H15V15.5H9V14Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="3" value="4"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#313131" fill-opacity="0.2"></path>
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div><div class="survey_modal-body__answers-detail-answers-item" index="5" question="3" value="5"><div class="survey_modal-body__answers-detail-answers-item-circle"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal-body__answers-detail-answers-item-icon">
<path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#313131" fill-opacity="0.2"></path>
</svg>
</div></div></div></div></div><div class="survey_modal-footer"><div class="survey_modal__navigation"><div class="survey_modal__navigation--back"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal__navigation--back_icon">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#313131"></path>
</svg>
</div><div class="survey_modal__navigation--next"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal__navigation--next_icon">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#313131"></path>
</svg>
</div></div></div></div></div><div class="survey_modal_steps survey_modal_step5 modal_display_none"><div class="survey_modal-header"><div class="survey_modal_steps__progress--background"></div><div class="survey_modal_steps__progress_step5"></div><div class="survey_modal__close"><span>&times</span></div></div><div class="survey_modal-body"><div class="survey_modal-body__question">How likely are you to recommend Game8 to someone you know?</div><div class="survey_modal-body__answers"><div class="survey_modal-body__answers--description-head">Very Unlikely</div><div class="survey_modal-body__answers-container"><div class="survey_modal-body__answers-row"><div class="survey_modal-body__answers-col" value="0"><div class="survey_modal-body__answers-col-inner">0</div></div><div class="survey_modal-body__answers-col" value="1"><div class="survey_modal-body__answers-col-inner">1</div></div><div class="survey_modal-body__answers-col" value="2"><div class="survey_modal-body__answers-col-inner">2</div></div><div class="survey_modal-body__answers-col" value="3"><div class="survey_modal-body__answers-col-inner">3</div></div><div class="survey_modal-body__answers-col" value="4"><div class="survey_modal-body__answers-col-inner">4</div></div><div class="survey_modal-body__answers-col" value="5"><div class="survey_modal-body__answers-col-inner">5</div></div></div><div class="survey_modal-body__answers-row"><div class="survey_modal-body__answers-col" value="6"><div class="survey_modal-body__answers-col-inner">6</div></div><div class="survey_modal-body__answers-col" value="7"><div class="survey_modal-body__answers-col-inner">7</div></div><div class="survey_modal-body__answers-col" value="8"><div class="survey_modal-body__answers-col-inner">8</div></div><div class="survey_modal-body__answers-col" value="9"><div class="survey_modal-body__answers-col-inner">9</div></div><div class="survey_modal-body__answers-col" value="10"><div class="survey_modal-body__answers-col-inner">10</div></div></div></div><div class="survey_modal-body__answers--description-bottom">Very Likely</div></div><hr class="survey_modal-body__hr" /><div class="survey_modal-body__question">If you have other opinions regarding potential improvement to the website, please share them with us. We would appreciate your honest opinion.</div><div class="survey_modal-body__question--remark">Note: This is <span class="survey_modal-body__question--remark--alert">a free response section</span>, so you can proceed without entering anything.<br />Note: <span class="survey_modal-body__question--remark--alert">Please be sure not to enter any kind of personal information into your response.</span></div><div class="survey_modal-body__answers"><textarea class="survey_modal-body__textarea" cols="30" name="" rows="10"></textarea></div><div class="survey_modal-footer"><div class="survey_modal__navigation"><div class="survey_modal__navigation--back"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal__navigation--back_icon">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#313131"></path>
</svg>
</div><div class="survey_modal__navigation--next survey_modal__navigation--send track_nier" data-track-nier-keyword="survey_modal__submit.click" data-track-nier-value="pc"><svg width="22" height="18" viewbox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="survey_modal__navigation--back_icon">
<path d="M2.51 3.03L10.02 6.25L2.5 5.25L2.51 3.03ZM10.01 11.75L2.5 14.97V12.75L10.01 11.75ZM0.51 0L0.5 7L15.5 9L0.5 11L0.51 18L21.5 9L0.51 0Z" fill="#313131"></path>
</svg>
</div></div></div></div></div><div class="survey_modal_steps survey_modal_step3 modal_display_none"><div class="survey_modal-header"><div class="survey_modal_steps__progress--background"></div><div class="survey_modal_steps__progress_step3"></div><div class="survey_modal__close"><span>&times</span></div></div><div class="survey_modal-body"></div></div><div class="survey_modal_content-done survey_modal_end modal_display_none"><div class="survey_modal-header-done"><div class="survey_modal-header-done__content"><span class="survey_modal-header-done__title">Thank You</span><img class="survey_modal-header-done__bee" src="//assets.game8.co/assets/bee_apology-619630bea80d7d88db8657d5246bfa6a9ccdd509927c54942c8f169002b788ce.png" alt="Bee apology" width="180" height="160" /></div></div><div class="survey_modal__close"><span>&times</span></div><div class="survey_modal-body"><div class="survey_modal-body-done-text">Thank you for participating in our survey! Your answers will help us to improve the quality of our website and services.<br />We hope you continue to make use of Game8.</div></div><div class="survey_modal__close-done"><span>Close</span></div><div class="survey_modal__other-link"><a href="/contacts" target="_blank">For other opinions or comments, go here.</a></div></div></div><div class="game_menu"><ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder>Super Mario Wonder Wiki Top</a> </li>
</ul>
<h3 class='menuItem-header--3'>World Guides</h3>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430373>All World Guides Front Page</a></li>
</ul>
<h4 class='menuItem-header--4'>Course Lists</h4>
<ul class='menuItem-list'>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430965>All Search Party Courses</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431712>All KO Arena Courses</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431714>All Break Time Courses</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431710>All Wiggler Race Courses</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431941>All Poplin Shops and Houses</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/432051>All Badge Challenges</a></li>
</ul>
<h4 class='menuItem-header--4'>Pipe-Rock Plateau (World 1)</h4>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430495>Pipe-Rock Plateau (World 1)</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430453>Welcome to the Flower Kingdom</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430480>Piranha Plants on Parade</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430497>Scram, Skedaddlers</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430732>Badge House in Pipe-Rock Plateau</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430734>Wonder Token Tunes</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430730>Pop Up, Hoppo</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430733>Hurry, Hurry</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430479>Bulrush Coming Through!</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430506>Sproings in the Twilight Forest</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430496>Cosmic Hoppos</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430571>Wiggler Race Mountaineering!</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430703>Rolla Koopa Derby</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430702>Bulrush Express</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430704>Swamp Pipe Crawl</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430706>Pipe-Rock Rumble</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430709>Pipe-Rock Plateau Palace</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430580>Parachute Cap 1 Badge Challenge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430584>Wall-Climb Jump 1 Badge Challenge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430615>Jet Run 1 Badge Challenge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430752>Poplin Shop</a></li>
</ul>
<h4 class='menuItem-header--4'>Petal Isles</h4>
<ul class='menuItem-list'>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430708>Petal Isles: All Levels and Courses</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430769>Leaping Smackerel</a> </li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430771>Robbird Cove</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430772>Blewbird Roost</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430773>Swimming!</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430774>Downpour Uproar</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430775>Jewel-Block </a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430776>Petal Isles Flying Battleship</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430777>Gnawsher Lair</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430778>Maw-Maw Mouthful</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430779>Muncher Fields</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430780>Spelunking!</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430781>Petal Meddle</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430782>Missile Meg Mayhem</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430783>High-Voltage Gauntlet</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430784>Evade the Seeker Bullet Bill</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430785>KnuckleFest Bowser's Blazing Beats</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430786>The Final Battle! Bowser's Rage Stage</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430884>Dolphin Kick 1 Badge Challenge</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430902>Dolphin Kick 2 Badge Challenge</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430922>Boosting Spin Jump 1 Badge Challenge</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431576>Angler Poplin's House</a></li>
</ul>
<h4 class='menuItem-header--4'>Fluff-Puff Peaks (World 2)</h4>
<ul class='menuItem-list'>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430656>Fluff-Puff Peaks (World 2)</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430811>Fluff-Puff Peaks Cabin</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430810>Outmaway Valley</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430809>Kick It, Outmaway</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430808>Puzzling Park</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430807>Condarts Away!</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430806>Wall-Climb Jump 2</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430805>Pokipede Pass</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430804>Pole Block Passage</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430803>Cloud Cover</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430802>Floating High Jump 1</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430801>Fluff-Puff Kerfuff</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430800>Up 'n' Down with Puffy Lifts</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430799>Jump! Jump! Jump!</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430798>Spring Feet 1</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430797>Fluff-Puff Peaks Flying Battleship</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430796>Countdown to Drop Down</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430795>Cruising with Linking Lifts</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430794>Zip-Go-Round</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430793>Fluff-Puff Peaks Palace</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430885>Poplin Shop 1</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431333>Poplin Shop 2</a></li>
</ul>
<h4 class='menuItem-header--4'>Shining Falls (World 3)</h4>
<ul class='menuItem-list'>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430657>Shining Falls (World 3)</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430824>The Hoppycat Trial: Hop, Hop, and Awaaay</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430823>Crouching High Jump 1</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430822>The Midway Trial: Hop to It</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430821>The Sugarstar Trial: Across the Night Sky</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430820>The Final Trial: Zip Track Dash</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430819>Unreachable Treasure</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430818>An Empty Park?</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430817>The Sharp Trial: Launch to Victory</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430816>Timer Switch Climb</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430815>Timer Switch Dash</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430883>Watery Wonder Tokens</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431338>Poplin Shop</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431384>Royal Seed Mansion</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431577>Master Poplin's House</a></li>
</ul>
<h4 class='menuItem-header--4'>Sunbaked Desert (World 4)</h4>
<ul class='menuItem-list'>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430659>Sunbaked Desert (World 4)</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430717>Armads on the Roll</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430718>Rolling Ball Hall</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430719>Bloomps of the Desert Skies</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430720>Valley Fulla Snootles</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430721>Color Switch Dungeon</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430722>Secrets of Shova</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430723>Flight of the Bloomps</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430724>Sunbaked Desert Palace</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430725>Ninji Jump Party</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430726>The Desert Mystery</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430735>Parachute Cap 2 Badge Challenge</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430814>Crouching High Jump 2 Badge Challenge</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430838>Invisibility 1 Badge Challenge</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430852>Treasure Vault</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430853>Revver Run</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430854>Raise the Stage</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430855>Floating Wonder Tokens</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430856>Bouncy Tunes</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430857>Lights Out</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430858>Sunbaked Skirmish</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430859>Pipe Park</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431543>Sunbaked Desert House</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431698>Poplin Shop 1</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431701>Poplin Shop 2</a></li>
</ul>
<h4 class='menuItem-header--4'>Fungi Mines (World 5)</h4>
<ul class='menuItem-list'>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430788>Fungi Mines (World 5)</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430851>Upshroom Downshroom</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430850>Taily's Toxic Pond</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430849>Light-Switch Mansion</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430848>Beware of the Rifts</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430847>An Uncharted Area: Wubba Ruins</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430846>Another Uncharted Area: Swaying Ruins</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430845>A Final Uncharted Area: Poison Ruins</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430844>Grappling Vine 1</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430843>Operation Poplin Rescue</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430842>Loyal Poplin's House</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430841>Trottin' Piranha Plants</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430840>Tumble House</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430839>Fungi Funk</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431703>Poplin Shop</a></li>
</ul>
<h4 class='menuItem-header--4'>Deep Magma Bog (World 6)</h4>
<ul class='menuItem-list'>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430882>Deep Magma Bog Observatory #1</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430881>Where the Rrrumbas Rule</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430880>Deep Magma Bog Observatory #2</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430879>Floating High Jump 2</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430878>Item Park</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430877>Boosting Spin Jump 2</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430876>Raarghs in the Ruins</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430875>Deep Magma Bog Flying Battleship</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430874>Hot-Hot Hot!</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430873>Deep Magma Bog Observatory #3</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430872>Hot-Hot Rocks</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430871>Wavy Ride Through the Magma Tube</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430870>Pull, Turn, Burn</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430869>Deep Magma Bog Observatory #4</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430868>Deep Magma Bog Palace</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430867>Magma Flare-Up</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430866>Grappling Vine 2</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430865>Dragon Boneyard</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430864>Jet Run 2</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430863>Invisibility 2</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430862>Spring Feet 2</a></li>
<li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431708>Poplin Shop</a></li>
</ul>
<h4 class='menuItem-header--4'>Special World (Secret)</h4>
<ul class='menuItem-list'>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430655>Special World: List of All Courses</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430671>Fluff-Puff Peaks Special Climb to the Beat</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430667>Petal Isles Special Way of the Goomba</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430666>Deep Magma Bog Special Solar Roller</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430665>Fungi Mines Special Dangerous Donut Ride</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430664>Sunbaked Desert Special Pole Block Allure</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430663>Shining Falls Special Triple Threat Deluge</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430662>Pipe-Rock Plateau Special Bounce, Bounce, Bounce</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430668>The Semifinal Test Piranha Plant Reprise</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430669>The Final Test Wonder Gauntlet</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430661>The Final-Final Test Badge Marathon</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431715>WONDER? Guide</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430670>Standee Shop</a></li>
</ul>
<h3 class='menuItem-header--3'>Tips and Tricks</h3>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430374>Tips, Tricks, and Hidden Secrets</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430516>How to Change/Store Items</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430502>How to Save the Game</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430500>How to Play Online Multiplayer with Friends</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430478>How to Ride Yoshi</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430481>Do the Characters Play Differently?</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430494>Best Character for Kids and Beginners</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430517>All Captain Toad Locations and Rewards</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430653>How Long to Beat the Game</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430513>How to Host Friend Races</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430705>How to Dash</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430712>How to Get Heart Points and All Uses</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430739>How to Use Standees</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430727>Basic Controls, Settings and How to Play</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430766>What Happens if You Get a Game Over</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430792>How to Get a Green Checkmark on Each Level</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430791>How to Change Talking Flower Language Settings</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430891>List of Hidden Goals and Secret Exits</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430907>Infinite 1-Up Trick</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431093>How to Get Every Medal and 100% Clear the Game</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431096>Post Game Guide</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431123>All Unlockables</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431351>Bowser Jr. Boss Guide</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431557>Bowser Final Boss Fight Guide</a></li>
</ul>
<h3 class='menuItem-header--3'>Badges</h3>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430376>List of All Badges</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431099>Best Badges Tierlist</a></li>
</ul>
<h4 class='menuItem-header--4'>Action Badges</h4>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430627>Wall-Climb Jump Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430626>Dolphin Kick Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430630>Parachute Cap Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430631>Floating High Jump Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430633>Crouching High Jump Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430634>Timed High Jump Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430642>Boosting Spin Jump Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430643>Grappling Vine Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430644>Fast Dash Badge</a></li>
</ul>
<h4 class='menuItem-header--4'>Boost Badges</h4>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430629>Coin Reward Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430632>Safety Bounce Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430625>Add ! Blocks Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430628>Auto Super Mushroom Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430636>Rhythm Jump Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430637>Sensor Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430645>Coin Magnet Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430638>All Elephant Power Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430639>All Fire Power Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430640>All Bubble Power Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430641>All Drill Power Badge</a></li>
</ul>
<h4 class='menuItem-header--4'>Expert Badges</h4>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430635>Invisibility Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430646>Jet Run Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430647>Spring Feet Badge</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431134>Sound Off? Badge</a></li>
</ul>
<h3 class='menuItem-header--3'>Power-Ups</h3>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430375>List of All Power-Ups</a></li>
</ul>
<h4 class='menuItem-header--4'>Power-Up Items</h4>
<ul class='menuItem-list menuItem-multi-stage'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430607>Super Mushroom</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430609>Elephant Fruit</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430610>Bubble Flower</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430611>Drill Mushroom</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430608>Fire Flower</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430612>Super Star</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431095>Wonder Flower</a></li>
</ul>
<h3 class='menuItem-header--3'>Collectibles</h3>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430986>All Collectibles Complete Guide</a></li>
</ul>
<h4 class='menuItem-header--4'>Purple 10 Coin Locations</h4>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=https://game8.co/games/Super-Mario-Bros-Wonder/archives/430963>All Purple 10 Coin Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431066>All World 1 Purple 10 Coins Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431137>All World 2 Purple Coin Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431570>All World 3 Purple 10 Coins Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431621>All World 4 Purple 10 Coins Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/432201>All World 5 Purple 10 Coins Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/438906>All World 6 Purple 10 Coins Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431084>All Petal Isles Purple 10 Coin Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/438903>Special World All Purple 10 Coins</a></li>
</ul>
<h4 class='menuItem-header--4'>Wonder Seed Locations</h4>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430931>All Wonder Seed Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431062>All World 1 Wonder Seed Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431133>All World 2 Wonder Seed Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431572>All World 3 Wonder Seed Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431680>All World 4 Wonder Seed Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/432055>All World 5 Wonder Seed Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/438904>All World 6 Wonder Seed Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431078>All Petal Isles Wonder Seed Locations</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/438910>All Special World Wonder Seed Locations</a></li>
</ul>
<h4 class='menuItem-header--4'>Other Collectibles</h4>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430606>1-Up Mushroom</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430812>How to Farm Flower Coins</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/432110>Wonder Tokens</a></li>
</ul>
<h3 class='menuItem-header--3'>Characters</h3>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430382>List of All Characters</a></li>
</ul>
<h4 class='menuItem-header--4'>Main Characters</h4>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430577>Mario Character Profile</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430594>Luigi Character Profile</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430595>Peach Character Profile</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430596>Daisy Character Profile</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430597>Yellow Toad Character Profile</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430598>Blue Toad Character Profile</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430599>Toadette Character Profile</a></li>
</ul>
 
<h4 class='menuItem-header--4'>Beginner Characters</h4>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430600>Yoshi Character Profile</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430601>Red Yoshi Character Profile</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430602>Yellow Yoshi Character Profile</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430603>Light Blue Yoshi Character Profile</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430604>Nabbit Character Profile</a></li>
</ul>
<h3 class='menuItem-header--3'>Standees</h3>
<p class='menuItem-paragraph'><li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430377>List of All Standees</a></li></p>
<h3 class='menuItem-header--3'>Enemies</h3>
<p class='menuItem-paragraph'><li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430379>List of Enemies </a></li></p>
<h3 class='menuItem-header--3'>Message Boards</h3>
<ul class='menuItem-list'>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/430987>Message Boards</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431068>Search Party Friend Codes Board</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431069>Friend Races Friend Codes Board</a></li>
  <li class='menuItem-listItem'><a class='menuItem-link' href=/games/Super-Mario-Bros-Wonder/archives/431072>General Message Board</a></li>
</ul>
<h3 class='menuItem-header--3'>Other Mario Wikis</h3>
<ul class='menuItem-list'>
 <li class='menuItem-listItem'><a class='menuItem-link' href=https://game8.co/games/Super-Mario-RPG-Remake>Super Mario RPG Remake</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=https://game8.co/games/Mario-Golf-Super-Rush>Mario Golf: Super Rush</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=https://game8.co/games/Paper-Mario-Origami-King-Switch>Paper Mario: The Origami King</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=https://game8.co/games/Mario-Strikers-Battle-League>Mario Strikers: Battle League</a></li>
 <li class='menuItem-listItem'><a class='menuItem-link' href=https://game8.co/games/Mario-Rabbids-Sparks-of-Hope>Mario + Rabbids Sparks of Hope</a></li>
</ul>
</div></div></div></div><div class="l-3colSide"><div class="c-sideContainer"><div class="c-heading c-heading--orange"><svg viewbox="0 0 24 24" class="c-heading__icon">
<path d="M18,10c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6S18,6.7,18,10z M13,7h-0.8c-0.4,1.1-1.7,1.1-2.2,1.1V9h2v4h1V7z
	 M22,11.7l-1.9,1.2l0.7,2.1l-2.2,0.5l-0.1,2.2l-2.2-0.3l-0.8,2l-2-1L12,20l-1.5-1.6l-2,1l-0.8-2l-2.2,0.3l-0.1-2.2L3.2,15l0.7-2.1
	L2,11.7L3.4,10L2,8.3l1.9-1.2L3.2,5l2.2-0.5l0.1-2.2l2.2,0.3l0.8-2l2,1L12,0l1.5,1.6l2-1l0.8,2l2.2-0.3l0.1,2.2L20.8,5l-0.7,2.1
	L22,8.3L20.6,10C20.6,10,22,11.7,22,11.7z M19,10c0-3.9-3.1-7-7-7s-7,3.1-7,7s3.1,7,7,7S19,13.9,19,10z M17.1,20.3l2.4,3.7l1.1-2H23
	l-2.7-4.1C19.4,18.9,18.3,19.7,17.1,20.3z M3.7,17.9L1,22h2.3l1.1,2l2.4-3.7C5.7,19.7,4.6,18.9,3.7,17.9z"></path>
</svg>
<h2 class="c-heading__title">Rankings</h2></div><div class="c-tabContainer"><div class="c-tabs"><div class="c-tab"><a class="c-tab__link is-active" href="javascript:void(0);">Popular Articles</a></div><div class="c-tab"><a class="c-tab__link" href="javascript:void(0);">Message Board</a></div></div><div class="c-tabPanels"><div class="c-tabPanel is-active"><ul class="c-tabList"><li class="c-tabListItem"><span class="c-tabListItem__rank c-tabListItem__rank--1">1</span><a class="c-tabListItem__link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430665">Special World Entrance Fungi Min...</a></li><li class="c-tabListItem"><span class="c-tabListItem__rank c-tabListItem__rank--2">2</span><a class="c-tabListItem__link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430604">Nabbit Character Profile</a></li><li class="c-tabListItem"><span class="c-tabListItem__rank c-tabListItem__rank--3">3</span><a class="c-tabListItem__link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430891">Guide to All Secret Exits and Hi...</a></li><li class="c-tabListItem"><span class="c-tabListItem__rank c-tabListItem__rank--4">4</span><a class="c-tabListItem__link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430838">Invisibility 1 Badge Challenge G...</a></li><li class="c-tabListItem"><span class="c-tabListItem__rank c-tabListItem__rank--5">5</span><a class="c-tabListItem__link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430772">Blewbird Roost Guide: All Wonder...</a></li><li class="c-tabListItem"><a class="c-tabListItem__link c-tabListItem__more" href="https://game8.co/games/Super-Mario-Bros-Wonder/ranking">See more</a></li></ul></div><div class="c-tabPanel"><ul class="c-tabList"><li class="c-tabListItem"><div class="c-tabListItem__link">We could not find the message board you were looking for.</div></li></ul></div></div></div></div><div class="c-sideContainer"></div><div class="c-sideContainer"><div class="c-heading c-heading--orange"><svg viewbox="0 0 24 24" class="c-heading__icon">
<path d="M19,2c1.7,0,3,1.3,3,3v14c0,1.7-1.3,3-3,3H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3H19z M19,0H5C2.2,0,0,2.2,0,5
	v14c0,2.8,2.2,5,5,5h14c2.8,0,5-2.2,5-5V5C24,2.2,21.8,0,19,0z M10,9H8v2H6V9H4V7h2V5h2v2h2V9z M17,5c-0.6,0-1,0.4-1,1s0.4,1,1,1
	s1-0.4,1-1S17.6,5,17,5z M17,9c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S17.6,9,17,9z M15,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1
	S15.6,7,15,7z M19,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,7,19,7z M9,15c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S10.1,15,9,15z
	 M15,15c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S16.1,15,15,15z"></path>
</svg>
<h2 class="c-heading__title">Gaming News</h2></div><div class="c-sideArticleList__pickup_article"><a class="c-sideArticleList__pickup_article_img track_nier" data-track-nier-keyword="wiki_sidebar_pickup_article" data-track-nier-value="1615" href="/articles/release-dates/1615"><img alt="2024 Upcoming Video Games Release Schedule and Release Date" data-src="https://img.game8.co/3813452/8ccaceb4a85717c873de4085b96afe54.png/show" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /><p class="c-sideArticleList__pickup_article_title">2024 Upcoming Video Games Release Schedule and Release Date</p></a></div><ul class="c-sideArticleList"><li><a class="c-sideArticleList__item track_nier" data-track-nier-keyword="wiki_sidebar_article_link" data-track-nier-value="1988" href="/articles/reviews/satisfactory-early-access-review"><div class="c-sideArticleList__item_thumb"><img alt="Satisfactory (Early Access) Review | The Uncrowned King of Factory Games" data-src="https://img.game8.co/3835485/e80ce90dda28170e003699fca8fa0e3d.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideArticleList__item_title">Satisfactory (Early Access) Review</p></a></li><li><a class="c-sideArticleList__item track_nier" data-track-nier-keyword="wiki_sidebar_article_link" data-track-nier-value="1987" href="/articles/latest/microsofts-layoffs-contradicts-merger-acquisition-according-to-ftc"><div class="c-sideArticleList__item_thumb"><img alt="Microsoft&#39;s Layoffs Contradicts Merger Acquisition of Activision Blizzard According to FTC" data-src="https://img.game8.co/3835551/f3a5251c7e5c3c5490b3999f70c140c3.jpeg/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideArticleList__item_title">Microsoft&#39;s Layoffs Contradicts Merger Acquisition of Act...</p></a></li><li><a class="c-sideArticleList__item track_nier" data-track-nier-keyword="wiki_sidebar_article_link" data-track-nier-value="1980" href="/articles/latest/fortnite-open-games-and-entertainment-universe-in-the-works-by-epic-and-disney"><div class="c-sideArticleList__item_thumb"><img alt="Fortnite &quot;Open Games and Entertainment Universe&quot; in the Works by Epic and Disney" data-src="https://img.game8.co/3834947/7329d4e4b421b31d4f8f05d90b567563.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideArticleList__item_title">Fortnite &quot;Open Games and Entertainment Universe&quot; in the W...</p></a></li><li><a class="c-sideArticleList__item track_nier" data-track-nier-keyword="wiki_sidebar_top_link" href="/articles"><p class="c-sideArticleList__Top_link">More Gaming News</p></a></li></ul></div><div class="c-sideContainer"><div class="c-heading c-heading--orange"><svg viewbox="0 0 24 24" class="c-heading__icon">
<path d="M19,2c1.7,0,3,1.3,3,3v14c0,1.7-1.3,3-3,3H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3H19z M19,0H5C2.2,0,0,2.2,0,5
	v14c0,2.8,2.2,5,5,5h14c2.8,0,5-2.2,5-5V5C24,2.2,21.8,0,19,0z M10,9H8v2H6V9H4V7h2V5h2v2h2V9z M17,5c-0.6,0-1,0.4-1,1s0.4,1,1,1
	s1-0.4,1-1S17.6,5,17,5z M17,9c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S17.6,9,17,9z M15,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1
	S15.6,7,15,7z M19,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,7,19,7z M9,15c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S10.1,15,9,15z
	 M15,15c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S16.1,15,15,15z"></path>
</svg>
<h2 class="c-heading__title">Popular Games</h2></div><ul class="c-sideGameList"><li><a class="c-sideGameList__item" href="https://game8.co/games/Genshin-Impact"><div class="c-sideGameList__item_thumb"><img alt="Genshin Impact" data-src="https://img.game8.co/3270754/e1b0f728e10553ddfcc4fa170b6beeba.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Genshin Impact Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Palworld"><div class="c-sideGameList__item_thumb"><img alt="Palworld" data-src="https://img.game8.co/3820250/bfd9f77c798fbb2cd6a3dee41cb54924.png/show" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Palworld Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Honkai-Star-Rail"><div class="c-sideGameList__item_thumb"><img alt="Honkai: Star Rail" data-src="https://img.game8.co/3642210/daaaa1c27a3ad015412368150d5f712a.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Honkai: Star Rail Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Pokemon-Scarlet-Violet"><div class="c-sideGameList__item_thumb"><img alt="Pokemon Scarlet and Violet (SV)" data-src="https://img.game8.co/3493447/8fbd69b23f89f4a159d8d64f4d250b0b.png/original" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Pokemon Scarlet and Violet (SV) Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Monster-Hunter-Rise"><div class="c-sideGameList__item_thumb"><img alt="Monster Hunter Rise: Sunbreak" data-src="https://img.game8.co/3767782/c063f9e8386b577196fa7efa27f5401c.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Monster Hunter Rise: Sunbreak Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/DQM-Dark-Prince"><div class="c-sideGameList__item_thumb"><img alt="Dragon Quest Monsters: The Dark Prince" data-src="https://img.game8.co/3807090/04debe18846cfd8977022f31d44534d7.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Dragon Quest Monsters: The Dark Prince Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Modern-Warfare-3"><div class="c-sideGameList__item_thumb"><img alt="Call of Duty Modern Warfare 3 (MW3)" data-src="https://img.game8.co/3771448/9cc050c8a1add452a1e5fdf628656a9e.png/original" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Call of Duty Modern Warfare 3 (MW3) Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Pokemon-UNITE"><div class="c-sideGameList__item_thumb"><img alt="Pokemon UNITE" data-src="https://img.game8.co/3737800/7ec3246321ca7322de9ddfd1dbfeedba.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Pokemon UNITE Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/fire-emblem-heroes"><div class="c-sideGameList__item_thumb"><img alt="Fire Emblem Heroes" data-src="https://img.game8.co/3807612/5543110d1d71b77942e3f3d10f0ff834.png/show" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Fire Emblem Heroes (FEH) Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Cyberpunk-2077"><div class="c-sideGameList__item_thumb"><img alt="Cyberpunk 2077: Phantom Liberty" data-src="https://img.game8.co/3767784/31207c7e44a6949c7b172b4890fcc787.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Cyberpunk 2077: Phantom Liberty Walkthrough &amp; Guides Wiki</p></a></li></ul></div><div class="c-sideContainer"></div><div class="c-sideContainer"><div class="c-heading c-heading--orange"><svg viewbox="0 0 24 24" class="c-heading__icon">
<path d="M19,2c1.7,0,3,1.3,3,3v14c0,1.7-1.3,3-3,3H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3H19z M19,0H5C2.2,0,0,2.2,0,5
	v14c0,2.8,2.2,5,5,5h14c2.8,0,5-2.2,5-5V5C24,2.2,21.8,0,19,0z M10,9H8v2H6V9H4V7h2V5h2v2h2V9z M17,5c-0.6,0-1,0.4-1,1s0.4,1,1,1
	s1-0.4,1-1S17.6,5,17,5z M17,9c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S17.6,9,17,9z M15,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1
	S15.6,7,15,7z M19,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,7,19,7z M9,15c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S10.1,15,9,15z
	 M15,15c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S16.1,15,15,15z"></path>
</svg>
<h2 class="c-heading__title">Recommended Games</h2></div><ul class="c-sideGameList"><li><a class="c-sideGameList__item" href="https://game8.co/games/Final-Fantasy-VII-Remake"><div class="c-sideGameList__item_thumb"><img alt="Final Fantasy VII Remake" data-src="https://img.game8.co/3833913/75222cd48250c3c44c19652a99b9cfed.png/original" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">FF7 Remake Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/SSBU"><div class="c-sideGameList__item_thumb"><img alt="Super Smash Bros. Ultimate" data-src="https://img.game8.co/3230746/ea940884c24aada66c53a7cc46c5e15a.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Super Smash Bros. Ultimate Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Hyrule-Warriors-Age-of-Calamity"><div class="c-sideGameList__item_thumb"><img alt="Hyrule Warriors: Age of Calamity" data-src="https://img.game8.co/3298417/fb6bfb92126fd6089e58f10d59f4af2e.jpeg/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Hyrule Warriors: Age of Calamity Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Pokemon-Legends-Arceus"><div class="c-sideGameList__item_thumb"><img alt="Pokemon Legends: Arceus" data-src="https://img.game8.co/3466544/66ab61fedfa8b812bc58ad260a79b325.png/original" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Pokemon Legends: Arceus Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Zelda-Breath-of-the-Wild"><div class="c-sideGameList__item_thumb"><img alt="The Legend of Zelda: Breath of the Wild" data-src="https://img.game8.co/3759887/2f19bc32e7ba1d84c6cdd0e739f1dbf0.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">The Legend of Zelda: Breath of the Wild Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/New-Pokemon-Snap"><div class="c-sideGameList__item_thumb"><img alt="New Pokemon Snap" data-src="https://img.game8.co/3336479/010b5d73e64a1e199d7d68f39c1f818c.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">New Pokemon Snap Walkthrough &amp; Guides Wiki</p></a></li><li><a class="c-sideGameList__item" href="https://game8.co/games/Elden-Ring"><div class="c-sideGameList__item_thumb"><img alt="Elden Ring" data-src="https://img.game8.co/3490776/ab8245e390e7f015a43011f80617d71a.png/thumb" class="lazy lazy-fadeIn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></div><p class="c-sideGameList__item_title">Elden Ring Walkthrough &amp; Guides Wiki</p></a></li></ul></div><div class="c-sideContainer"></div><div class="c-sideContainer"><div class="c-heading c-heading--orange"><svg viewbox="0 0 24 24" class="c-heading__icon"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c-2.084 0-3.781-1.696-3.781-3.781s1.696-3.781 3.781-3.781c1.172 0 2.306.523 3.136 1.669l1.857-1.218c-1.281-1.826-3.133-2.67-4.993-2.67-3.308 0-6 2.692-6 6s2.691 6 6 6c1.881 0 3.724-.859 4.994-2.67l-1.857-1.218c-.828 1.14-1.959 1.669-3.137 1.669z"></path></svg>
<h2 class="c-heading__title">All rights reserved</h2></div><p class="c-copyright">© Nintendo.<br><br>The copyrights of videos of games used in our content and other intellectual property rights belong to the provider of the game.<br>The contents we provide on this site were created personally by members of the Game8 editorial department.<br>We refuse the right to reuse or repost content taken without our permission such as data or images to other sites.</p></div></div></div></div><footer class="l-footer"><div class="l-footerCorp"><div class="l-footerCorp__inner"><div class="l-footerCorp__left"><a href="https://game8.co/"><img alt="Game8" src="//assets.game8.co/assets/new/logo_footer-78fccab1ccf0d39b5d316bec4691a8fc17c5185dd306793a6a70e3301f0fef06.png" /></a></div><div class="l-footerCorp__center"><ul><li><a target="_blank" rel="nofollow" href="https://game8.co/terms">Terms of Use</a></li><li><a target="_blank" rel="nofollow" href="https://game8.co/privacy">Privacy Policy</a></li><li><a target="_blank" rel="nofollow" href="https://game8.co/external_communication_policy">External Communication Policy</a></li><li><a target="_blank" rel="nofollow" href="https://game8.co/opt_out">Opt-out</a></li><li><a target="_blank" rel="nofollow" href="https://game8.co/contacts">Inquiries</a></li><li><a target="_blank" rel="nofollow" href="https://game8global.com">Operating Company</a></li><li><a target="_blank" rel="nofollow" href="https://game8global.com/ads">Advertising</a></li><li><a target="_blank" rel="nofollow" href="https://game8global.com/video_ads">Video Ads</a></li></ul></div></div></div><div class="l-footerGame"><div class="l-footerGame__inner"><div class="l-footerGame__col"><p class="l-footerGame__col_title">Gaming Wikis</p><ul class="l-footerGame__col_links"><li><a href="https://game8.co/games/Genshin-Impact">Genshin Impact Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Palworld">Palworld Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Honkai-Star-Rail">Honkai: Star Rail Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Pokemon-Scarlet-Violet">Pokemon Scarlet and Violet (SV) Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Monster-Hunter-Rise">Monster Hunter Rise: Sunbreak Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/DQM-Dark-Prince">Dragon Quest Monsters: The Dark Prince Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Modern-Warfare-3">Call of Duty Modern Warfare 3 (MW3) Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Pokemon-UNITE">Pokemon UNITE Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/fire-emblem-heroes">Fire Emblem Heroes (FEH) Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Cyberpunk-2077">Cyberpunk 2077: Phantom Liberty Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Pokemon-Brilliant-Diamond-Shining-Pearl">Pokemon Brilliant Diamond and Shining Pearl (BDSP) Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Yu-Gi-Oh-Master-Duel">Yu-Gi-Oh! Master Duel Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Starfield">Starfield Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Zelda-Tears-of-the-Kingdom">The Legend of Zelda: Tears of the Kingdom Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Baldurs-Gate-III">Baldur&#39;s Gate 3 Walkthrough &amp; Guides Wiki</a></li></ul></div><div class="l-footerGame__col"><p class="l-footerGame__col_title">Recommended Games</p><ul class="l-footerGame__col_links"><li><a href="https://game8.co/games/Final-Fantasy-VII-Remake">FF7 Remake Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/SSBU">Super Smash Bros. Ultimate Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Hyrule-Warriors-Age-of-Calamity">Hyrule Warriors: Age of Calamity Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Pokemon-Legends-Arceus">Pokemon Legends: Arceus Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Zelda-Breath-of-the-Wild">The Legend of Zelda: Breath of the Wild Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/New-Pokemon-Snap">New Pokemon Snap Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Elden-Ring">Elden Ring Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Like-a-Dragon-Infinite-Wealth">Like a Dragon: Infinite Wealth (Yakuza 8) Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Persona-3-Reload">Persona 3 Reload Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Skull-and-Bones">Skull and Bones Walkthrough &amp; Guides Wiki</a></li><li><a href="https://game8.co/games/Final-Fantasy-VII-Rebirth">FF7 Rebirth Walkthrough &amp; Guides Wiki</a></li></ul></div></div></div><div class="l-footerCopyright"><div class="l-footerCopyright__inner"><p class="l-footerCopyright__left">Game8 - Your Go-To Platform For All Game Walkthroughs and Strategy Guides</p><p class="l-footerCopyright__right">© 2019 Game8, Inc.</p></div></div></footer><script src="//assets.game8.co/packs/js/pc/main/application-1ba4e6af60a6a817f1b1.js"></script><script src="//assets.game8.co/assets/pc/main/application-88f680c9d861b5d834f7ecf1d77bd5be454577828c281477f421048084fdd87c.js"></script><div class="p-gameNavText js-p-gameNavText" style="display:none;position:fixed;top:0;z-index:1000;"><div class="p-gameNavText_inner"><ul class="p-gameNavText_list p-gameNavText_list--grow"><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link" href="https://game8.co/games/Super-Mario-Bros-Wonder/ranking">Popular Articles</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430373">Worlds</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430374">Tips and Secrets</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430376">Badges</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430375">Items</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430382">Characters</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430891">Secret Exits</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430931">Wonder Seeds</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430517">Captain Toad</a></li><li class="p-gameNavText_list_item"><a class="p-gameNavText_list_item_link" href="https://game8.co/games/Super-Mario-Bros-Wonder/archives/430963">Purple 10 Coins</a></li></ul></div></div><div aria-hidden="true" class="c-micromodal c-micromodal-slide" id="js-open-image-modal"><div class="c-micromodal__overlay" data-micromodal-close="" tabindex="-1"><div aria-labelledby="open image modal" aria-modal="true" class="c-micromodal__container" role="dialog"><button aria-label="Close modal" class="c-micromodal__close" data-micromodal-close=""></button><div class="c-micromodal__content"><img class="a-img" id="js-open-image" src="" /></div></div></div></div></body></html><script>I18n.defaultLocale = "en";
I18n.locale = "en";</script>