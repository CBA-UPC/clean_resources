import{v as s}from"./video.es-884b1ac8.js";import{U as a,bk as c,j as u,bl as v,bm as r,bn as m,bo as g,bp as l}from"./index-172e3f67.js";import"./extends-f1833ec7.js";const h=["vjs-control","vjs-slider","vjs-button"],d=t=>h.some(n=>{var e;return(e=t==null?void 0:t.classList)==null?void 0:e.contains(n)}),E=t=>{t.on("userinactive",()=>{const{activeElement:n}=a.document;d(n)&&!t.paused()&&n.dispatchEvent(new Event("blur"))}),t.on("useractive",()=>{const{activeElement:n}=a.document;d(n)&&n.dispatchEvent(new Event("focus"))})},P=s.getPlugin("plugin");class b extends P{constructor(n,e){super(n,e),E(n)}}const j=s.getComponent("Component");class C extends j{constructor(n,e){super(n,e),this.mount=this.mount.bind(this),this.root=void 0;const i=n.el().dataset.duration;n.ready(()=>{this.mount({videoDuration:i})}),n.on("play",()=>{this.hide()}),n.on("dispose",()=>{setTimeout(()=>{this.root.unmount()})})}mount({videoDuration:n}){this.root=c(this.el()),this.root.render(u.jsx(v,{videoDuration:n}))}}const x=s.getComponent("Component");class k extends x{constructor(n,e){super(n,e),this.mount=this.mount.bind(this),this.root=void 0,n.ready(()=>{this.mount({onClick:()=>n.play(),playBtnTitle:n.el().dataset.playBtnTitle})}),n.on("play",()=>{n.el().querySelector(".vjs-play-control").focus(),this.hide()}),n.on("dispose",()=>{setTimeout(()=>{this.root.unmount()})})}mount({onClick:n,playBtnTitle:e}){this.root=c(this.el()),this.root.render(u.jsx(r,{className:"play-button",onClick:n,buttonTitle:e}))}}const S=t=>t*1e3,T=t=>Math.round(t*100)/100,f=t=>+t.replace(/(video|audio)-/ig,""),o=({player:t,mediaEvent:n,...e})=>{m.pushToGoogleTagManager({datalayerObj:{event:"onMediaEvent",eventData:{mediaEvent:n,mediaId:f(t.id()),currentMediaTime:S(t.currentTime()),...e}}})},B=t=>{t.on("play",()=>{o({player:t,mediaEvent:"av.play"})}),t.one("play",()=>{o({player:t,mediaEvent:"av.start"})}),t.on("pause",()=>{o({player:t,mediaEvent:"av.pause"})}),t.on("ended",()=>{o({player:t,mediaEvent:"av.stop"})}),t.on("seeked",()=>{o({player:t,mediaEvent:"av.seeked"})}),t.on("seeking",()=>{o({player:t,mediaEvent:"av.seek.start"})}),t.isAudio()||t.qualityLevels().on("change",n=>{var i;const e=(i=t.qualityLevels()[n.selectedIndex])==null?void 0:i.height;o({player:t,mediaEvent:"av.quality",selectedQuality:e})}),t.on("ratechange",()=>{const n=t.playbackRate();o({player:t,mediaEvent:"av.speed",selectedPlaybackRate:n})}),t.on("error",()=>{var n;o({player:t,mediaEvent:"av.error",errorMessage:(n=t.error())==null?void 0:n.message})}),t.on("volumechange",()=>{o({player:t,mediaEvent:"av.volume",volume:T(t.volume())})}),t.on("fullscreenchange",()=>{o({player:t,mediaEvent:"av.fullscreen-change"})}),t.on("enterpictureinpicture",()=>{o({player:t,mediaEvent:"av.enter-picture-in-picture"})}),t.on("leavepictureinpicture",()=>{o({player:t,mediaEvent:"av.leave-picture-in-picture"})}),t.on("playbackrateschange",()=>{o({player:t,mediaEvent:"av.playback-rate-change"})}),t.on("loadeddata",()=>{o({player:t,mediaEvent:"av.loaded-data"})}),t.on("loadedmetadata",()=>{o({player:t,mediaEvent:"av.loaded-metadata"})}),t.on("loadstart",()=>{o({player:t,mediaEvent:"av.load-start"})}),t.on("playing",()=>{o({player:t,mediaEvent:"av.playing"})}),t.on("abort",()=>{o({player:t,mediaEvent:"av.abort"})}),t.on("stalled",()=>{o({player:t,mediaEvent:"av.stalled"})}),t.on("suspend",()=>{o({player:t,mediaEvent:"av.suspend"})})},M=s.getPlugin("plugin");class F extends M{constructor(n,e){super(n,e),B(n)}}const p=s.getPlugin("plugin");class O extends p{constructor(n,e){super(n,e),n.on("play",()=>{Object.values(s.getPlayers()).filter(Boolean).filter(i=>i!==n).forEach(i=>i.pause())})}}const V=s.getPlugin("plugin"),I=(t,n)=>{n.hlsVideoSrc&&t.src({src:n.hlsVideoSrc,type:"application/x-mpegURL"})};class R extends V{constructor(n,e){super(n,e),n.ready(()=>I(n,e))}}s.registerPlugin("flyingFocus",b);s.registerPlugin("mediaTracking",F);s.registerPlugin("stopOtherPlayers",O);s.registerPlugin("setSourceForChromeAndroidPlugin",R);s.registerComponent(g,C);s.registerComponent(l,k);const L=()=>s;export{L as videojs};
//# sourceMappingURL=videojs.cd23-862df8f1.js.map
iv role="navigation" class="masternavi">
<div class="mnHolder">
<a href="#" class="navtoggle" id="mainnavtoggle" data-rel="masternav" aria-label="ARD Masternavigation anzeigen">ARD Navigation <span class="ndricon_chev-down"></span>
</a>
<ul id="masternav">
<li>
<a class="home" href="https://www.ardmediathek.de/daserste/esc" title="Link zur ESC-Seite der ARD Mediathek"><img src="/resources/img/base/logo/ard.png" alt="Logo ARD Mediathek"></a>
</li>
<li>
<a class="home" href="https://www.tagesschau.de" title="Link zur Tagesschau"><img src="/resources/img/base/logo/tagesschau.png" alt="Logo Tagesschau"></a>
</li>
<li>
<a class="home" href="https://www.sportschau.de" title="Link zur Sportschau"><img src="/resources/img/base/logo/sportschau.jpg" alt="Sportschau"></a>
</li>
<li>
<a class="home" href="https://www.ardaudiothek.de/" title="Link zur ARD Audiothek"><img src="/resources/img/base/logo/audiothek.jpg" alt="Audiothek"></a>
</li>
<li>
<a class="home" href="https://www.kika.de" title="Link zum Kinderkanal"><img src="/resources/img/base/logo/kika.jpg" alt="Kinderkanal"></a>
</li>
</ul>
<!-- ardLogo -->
</div>
<!-- mnHolder -->
</div>
<div role="banner" class="logo">
<a href="/index.html" id="logoimage" title="zur Startseite von Eurovision.de">
<img src="/resources/img/eurovision/esc_logo.png" alt="Eurovision Song Contest">
</a>
<div role="search" class="searchBox">
<div class="searchToggle">
<a href="#" class="navtoggle" id="searchtoggle"	data-rel="searchform" aria-label="Suche anzeigen"><span class="ndricon_searchglass"></span><span class="ndricon_chev-down"></span></a>
</div>
<form class="searchForm" id="searchform" action="/suche141.html">
<input class="searchInput" type="text" name="query" placeholder="Suche" />
<a class="searchSubmit" href="#" aria-label="Suche starten">
<span class="ndricon_searchglass"></span>
</a>
</form>
</div>
<ul class="social_top">
<li>
<a target="_blank" title="Eurovision bei Facebook" href="//www.facebook.com/EurovisionDE" aria-label="Eurovision bei Facebook"><span class="icon icon_facebook"></span><span class="srlabel">Eurovision bei Facebook</span></a>
</li>
<li>
<a target="_blank" title="Eurovision bei Youtube" href="//www.youtube.com/user/esc" aria-label="Eurovision bei Youtube"><span class="icon icon_youtube"></span><span class="srlabel">Eurovision bei Youtube</span></a>
</li>
<li>
<a target="_blank" title="Eurovision bei Instagram" href="//www.instagram.com/eurovision_de/" aria-label="Eurovision bei Instagram"><span class="icon icon_instagram"></span><span class="srlabel">Eurovision bei Instagram</span></a>
</li>
<li>
<a target="_blank" title="Eurovision bei Tiktok" href="//www.tiktok.com/@eurovision_de" aria-label="Eurovision bei Tiktok"><span class="icon icon_tiktok"></span><span class="srlabel">Eurovision bei Tiktok</span></a>
</li>
</ul>
</div>
<div role="navigation" class="subnavi">
<div class="menueToggle">
<a href="" class="navtoggle" id="ressortnavtoggle" data-rel="ressortnavi" aria-label="Eurovision.de Navigation anzeigen">Menü <span class="ndricon_chev-down"></span></a>
</div>
<ul class="ressorts" id="ressortnavi">
<li>
<a title="Eurovision Song Contest Home" href="/index.html"><span class="icon icon_home"></span></a>
</li>
<li>
<span class="collapsed  subressort ">
<a href="/news/index.html">News</a>
</span>
</li>
<li>
<span class="collapsed  subressort ">
<a href="/teilnehmer/index.html">Teilnehmer</a>
</span>
</li>
<li>
<span class="collapsed  subressort ">
<a href="/vorentscheid/index.html">Vorentscheid</a>
</span>
</li>
<li>
<span class="collapsed  subressort ">
<a href="/videos/index.html">Videos</a>
</span>
</li>
<li>
<span class="collapsed  subressort ">
<a href="/geschichte/index.html">Historie</a>
</span>
</li>
<li>
<span class="collapsed  subressort ">
<a href="/laender/index.html">Länder</a>
</span>
</li>
<li>
<span class="collapsed  subressort ">
<a href="/event/index.html">FAQ</a>
</span>
</li>
<li>
<span class="collapsed  subressort ">
<a href="/escupdate/index.html">ESC Update</a>
</span>
</li>
<li>
<span class="collapsed  subressort ">
<a href="/jesc/index.html">Junior ESC</a>
</span>
</li>
</ul>
</div>
</header>
<div id="page">
<a name="content"></a>
<div class="container w100">
<section class="w100">
<div class="module w100  topteaser" data-color=col9>
<div class="modulepadding">
<div class="teaser" data-start="1707423300000">
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/iwzesc162_v-ardteaser.jpg 120w,/news/iwzesc162_v-content.jpg 192w,/news/iwzesc162_v-gallery.jpg 400w" sizes="(min-width: 1067px) 1067px, 100vw" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/iwzesc162_v-thumbnailgross.jpg 128w,/news/iwzesc162_v-contentgross.jpg 568w,/news/iwzesc162_v-vierspaltig.jpg 760w,/news/iwzesc162_v-contentxl.jpg 1067w,/news/iwzesc162_v-fullhd.jpg 1920w,/news/iwzesc162_v-einspaltig.jpg 184w,/news/iwzesc162_v-contentklein.jpg 256w,/news/iwzesc162_v-anderthalbspaltig.jpg 280w,/news/iwzesc162_v-zweispaltig.jpg 376w" sizes="(min-width: 1067px) 1067px, 100vw" media='(min-width: 40em)'>
<img src="/news/iwzesc162_v-contentgross.jpg" alt="Laura Karasek, Floryan, Anne Im und Luca M. Wefes bei der Probe für &#034;Ich will zum ESC! - Die Entscheidung!&#034;. &copy; NDR Foto: André Kowalski" title="Laura Karasek, Floryan, Anne Im und Luca M. Wefes bei der Probe für &#034;Ich will zum ESC! - Die Entscheidung!&#034;."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_livestream"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/eventlivestream7674.html" title="Zum Video-Livestream: Live: &#034;Ich will zum ESC! - Die Entscheidung&#034;"  >
Live: "Ich will zum ESC! - Die Entscheidung"
</a>
</h2>
<div class="teasertext">
<p>
Anne Im, Floryan oder Luca M. Wefes: Wer schafft es in den deutschen ESC-Vorentscheid? Heute entscheidet allein das Publikum.
<a title="Zum Video-Livestream: Live: &quot;Ich will zum ESC! - Die Entscheidung&quot;" href="/videos/2024/eventlivestream7674.html" class="cta " >Video-Livestream</a>
</p>
</div>
<ul class="tit">
<li>
<h3>
<a href="/news/Alle-Infos-zu-Ich-will-zum-ESC,vorentscheid1106.html" title="Zum Artikel: Alle Infos zu &#034;Ich will zum ESC!&#034;"  >
<span class="ndricon_livestream"></span>
Alle Infos zu "Ich will zum ESC!"&nbsp;</a>
</h3>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
</div>
<div class="pagepadding">
<div class="container w100">
<section class="w100">
<h1>
<span>Termine</span>
</h1>
<div class="buttonbox modulepadding">
<a href="/escupdate/index.html" title="Zum Artikel: 10.2.: Podcast ESC Update" class="button secondary">
10.2.: Podcast ESC Update</a>
<a href="/vorentscheid/index.html" title="Zum Artikel: 16.2.: &quot;Das deutsche Finale 2024&quot;" class="button secondary">
16.2.: "Das deutsche Finale 2024"</a>
<a href="/news/Alle-Infos-zum-Eurovision-Song-Contest-2024-in-Schweden,schweden1866.html" title="Zum Artikel: 7.-11.5.: ESC 2024 in Malmö" class="button secondary">
7.-11.5.: ESC 2024 in Malmö</a>
<a href="/news/Online-oder-TV-Alle-Sendungen-zum-Eurovision-Song-Contest-2024,sendetermine514.html" title="Zum Artikel: Alle Sendetermine zum ESC" class="button secondary">
Alle Sendetermine zum ESC</a>
</div>

</section>
<section class="w100 mediacollection teasergroup autorelated">
<h1>
<span>Videos</span>
</h1>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/iwzesc150_v-ardteaser.jpg 120w,/news/iwzesc150_v-content.jpg 192w,/news/iwzesc150_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/iwzesc150_v-thumbnailgross.jpg 128w,/news/iwzesc150_v-contentgross.jpg 568w,/news/iwzesc150_v-vierspaltig.jpg 760w,/news/iwzesc150_v-contentxl.jpg 1067w,/news/iwzesc150_v-fullhd.jpg 1920w,/news/iwzesc150_v-einspaltig.jpg 184w,/news/iwzesc150_v-contentklein.jpg 256w,/news/iwzesc150_v-anderthalbspaltig.jpg 280w,/news/iwzesc150_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/news/iwzesc150_v-contentgross.jpg" alt="Luca M. Wefes bei der Probe zu &#034;Ich will zum ESC! - Die Entscheidung&#034; in Berlin. &copy; NDR Foto: André Kowalski" title="Luca M. Wefes bei der Probe zu &#034;Ich will zum ESC! - Die Entscheidung&#034; in Berlin."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Luca-M-Wefes-Farben-neuer-Tage-live,iwzesc126.html" title="Zum Video: Luca M. Wefes - &#034;Farben neuer Tage&#034; (live)"  >
Luca M. Wefes - "Farben neuer Tage" (live)
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/iwzesc134_v-ardteaser.jpg 120w,/news/iwzesc134_v-content.jpg 192w,/news/iwzesc134_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/iwzesc134_v-thumbnailgross.jpg 128w,/news/iwzesc134_v-contentgross.jpg 568w,/news/iwzesc134_v-vierspaltig.jpg 760w,/news/iwzesc134_v-contentxl.jpg 1067w,/news/iwzesc134_v-fullhd.jpg 1920w,/news/iwzesc134_v-einspaltig.jpg 184w,/news/iwzesc134_v-contentklein.jpg 256w,/news/iwzesc134_v-anderthalbspaltig.jpg 280w,/news/iwzesc134_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/news/iwzesc134_v-contentgross.jpg" alt="Anne Im bei der Probe zu &#034;Ich will zum ESC! - Die Entscheidung&#034; in Berlin. &copy; NDR Foto: André Kowalski" title="Anne Im bei der Probe zu &#034;Ich will zum ESC! - Die Entscheidung&#034; in Berlin."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Anne-Im-Yellow-Brick-Road-live,iwzesc124.html" title="Zum Video: Anne Im - &#034;Yellow Brick Road&#034; (live)"  >
Anne Im - "Yellow Brick Road" (live)
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/iwzesc136_v-ardteaser.jpg 120w,/news/iwzesc136_v-content.jpg 192w,/news/iwzesc136_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/iwzesc136_v-thumbnailgross.jpg 128w,/news/iwzesc136_v-contentgross.jpg 568w,/news/iwzesc136_v-vierspaltig.jpg 760w,/news/iwzesc136_v-contentxl.jpg 1067w,/news/iwzesc136_v-fullhd.jpg 1920w,/news/iwzesc136_v-einspaltig.jpg 184w,/news/iwzesc136_v-contentklein.jpg 256w,/news/iwzesc136_v-anderthalbspaltig.jpg 280w,/news/iwzesc136_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/news/iwzesc136_v-contentgross.jpg" alt="Floryan bei der Probe zu &#034;Ich will zum ESC! - Die Entscheidung&#034; in Berlin. &copy; NDR Foto: André Kowalski" title="Floryan bei der Probe zu &#034;Ich will zum ESC! - Die Entscheidung&#034; in Berlin."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Floryan-Scars-live,iwzesc120.html" title="Zum Video: Floryan - &#034;Scars&#034; (live)"  >
Floryan - "Scars" (live)
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/iwzesc116_v-ardteaser.jpg 120w,/iwzesc116_v-content.jpg 192w,/iwzesc116_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/iwzesc116_v-thumbnailgross.jpg 128w,/iwzesc116_v-contentgross.jpg 568w,/iwzesc116_v-vierspaltig.jpg 760w,/iwzesc116_v-contentxl.jpg 1067w,/iwzesc116_v-fullhd.jpg 1920w,/iwzesc116_v-einspaltig.jpg 184w,/iwzesc116_v-contentklein.jpg 256w,/iwzesc116_v-anderthalbspaltig.jpg 280w,/iwzesc116_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/iwzesc116_v-contentgross.jpg" alt="Collage aus vier Covertiteln &copy; NDR " title="Collage aus vier Covertiteln"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Ich-will-zum-ESC-Die-Songs-im-Schnelldurchlauf,iwzesc114.html" title="Zum Video: &#034;Ich will zum ESC!&#034;: Die Songs im Schnelldurchlauf"  >
"Ich will zum ESC!": Die Songs im Schnelldurchlauf
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/iwze102_v-ardteaser.png 120w,/iwze102_v-content.png 192w,/iwze102_v-gallery.png 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/iwze102_v-thumbnailgross.png 128w,/iwze102_v-contentgross.png 568w,/iwze102_v-vierspaltig.png 760w,/iwze102_v-contentxl.png 1067w,/iwze102_v-fullhd.png 1920w,/iwze102_v-einspaltig.png 184w,/iwze102_v-contentklein.png 256w,/iwze102_v-anderthalbspaltig.png 280w,/iwze102_v-zweispaltig.png 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/iwze102_v-contentgross.png" alt="Conchita Wurst und Rea Garvey &copy; bildergarten.tv " title="Conchita Wurst und Rea Garvey"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">2 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Conchita-oder-Rea-Wer-wuerde-ins-Dschungelcamp-gehen,video10624.html" title="Zum Video: Conchita oder Rea? Wer würde ins Dschungelcamp gehen?"  >
Conchita oder Rea? Wer würde ins Dschungelcamp gehen?
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/iwze100_v-ardteaser.png 120w,/iwze100_v-content.png 192w,/iwze100_v-gallery.png 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/iwze100_v-thumbnailgross.png 128w,/iwze100_v-contentgross.png 568w,/iwze100_v-vierspaltig.png 760w,/iwze100_v-contentxl.png 1067w,/iwze100_v-fullhd.png 1920w,/iwze100_v-einspaltig.png 184w,/iwze100_v-contentklein.png 256w,/iwze100_v-anderthalbspaltig.png 280w,/iwze100_v-zweispaltig.png 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/iwze100_v-contentgross.png" alt="Conchita Wurst und Rea Garvey &copy; bildergarten.tv " title="Conchita Wurst und Rea Garvey"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">2 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Conchita-Wurst-und-Rea-Garvey-persoenlich,video10622.html" title="Zum Video: Conchita Wurst und Rea Garvey persönlich"  >
Conchita Wurst und Rea Garvey persönlich
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/bodine126_v-ardteaser.jpg 120w,/bodine126_v-content.jpg 192w,/bodine126_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/bodine126_v-thumbnailgross.jpg 128w,/bodine126_v-contentgross.jpg 568w,/bodine126_v-vierspaltig.jpg 760w,/bodine126_v-contentxl.jpg 1067w,/bodine126_v-fullhd.jpg 1920w,/bodine126_v-einspaltig.jpg 184w,/bodine126_v-contentklein.jpg 256w,/bodine126_v-anderthalbspaltig.jpg 280w,/bodine126_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/bodine126_v-contentgross.jpg" alt="Thumbnail Bewerbungsgespräch Bodine. &copy; bildergarten.tv " title="Thumbnail Bewerbungsgespräch Bodine."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">4 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Bodine-Monet-im-ESC-Bewerbungsgespraech,bodine124.html" title="Zum Video: Bodine Monet im ESC-Bewerbungsgespräch"  >
Bodine Monet im ESC-Bewerbungsgespräch
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/isaak116_v-ardteaser.jpg 120w,/isaak116_v-content.jpg 192w,/isaak116_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/isaak116_v-thumbnailgross.jpg 128w,/isaak116_v-contentgross.jpg 568w,/isaak116_v-vierspaltig.jpg 760w,/isaak116_v-contentxl.jpg 1067w,/isaak116_v-fullhd.jpg 1920w,/isaak116_v-einspaltig.jpg 184w,/isaak116_v-contentklein.jpg 256w,/isaak116_v-anderthalbspaltig.jpg 280w,/isaak116_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/isaak116_v-contentgross.jpg" alt="Isaak &copy; bildergarten.tv " title="Isaak"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">6 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Isaak-im-ESC-Bewerbungsgespraech,bewerbung358.html" title="Zum Video: Isaak im ESC-Bewerbungsgespräch"  >
Isaak im ESC-Bewerbungsgespräch
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/max330_v-ardteaser.jpg 120w,/max330_v-content.jpg 192w,/max330_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/max330_v-thumbnailgross.jpg 128w,/max330_v-contentgross.jpg 568w,/max330_v-vierspaltig.jpg 760w,/max330_v-contentxl.jpg 1067w,/max330_v-fullhd.jpg 1920w,/max330_v-einspaltig.jpg 184w,/max330_v-contentklein.jpg 256w,/max330_v-anderthalbspaltig.jpg 280w,/max330_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/max330_v-contentgross.jpg" alt="Max Mutzke &copy; bildergarten.tv " title="Max Mutzke"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">8 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Max-Mutzke-im-ESC-Bewerbungsgespraech,bewerbung364.html" title="Zum Video: Max Mutzke im ESC-Bewerbungsgespräch"  >
Max Mutzke im ESC-Bewerbungsgespräch
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/leona136_v-ardteaser.jpg 120w,/leona136_v-content.jpg 192w,/leona136_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/leona136_v-thumbnailgross.jpg 128w,/leona136_v-contentgross.jpg 568w,/leona136_v-vierspaltig.jpg 760w,/leona136_v-contentxl.jpg 1067w,/leona136_v-fullhd.jpg 1920w,/leona136_v-einspaltig.jpg 184w,/leona136_v-contentklein.jpg 256w,/leona136_v-anderthalbspaltig.jpg 280w,/leona136_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/leona136_v-contentgross.jpg" alt="Leona &copy; bildergarten.tv " title="Leona"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">5 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Leona-im-ESC-Bewerbungsgespraech,bewerbung360.html" title="Zum Video: Leona im ESC-Bewerbungsgespräch"  >
Leona im ESC-Bewerbungsgespräch
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ryk178_v-ardteaser.jpg 120w,/ryk178_v-content.jpg 192w,/ryk178_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ryk178_v-thumbnailgross.jpg 128w,/ryk178_v-contentgross.jpg 568w,/ryk178_v-vierspaltig.jpg 760w,/ryk178_v-contentxl.jpg 1067w,/ryk178_v-fullhd.jpg 1920w,/ryk178_v-einspaltig.jpg 184w,/ryk178_v-contentklein.jpg 256w,/ryk178_v-anderthalbspaltig.jpg 280w,/ryk178_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/ryk178_v-contentgross.jpg" alt="Ryk &copy; bildergarten.tv " title="Ryk"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">6 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Ryk-im-ESC-Bewerbungsgespraech,bewerbung366.html" title="Zum Video: Ryk im ESC-Bewerbungsgespräch"  >
Ryk im ESC-Bewerbungsgespräch
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/mariereim132_v-ardteaser.jpg 120w,/mariereim132_v-content.jpg 192w,/mariereim132_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/mariereim132_v-thumbnailgross.jpg 128w,/mariereim132_v-contentgross.jpg 568w,/mariereim132_v-vierspaltig.jpg 760w,/mariereim132_v-contentxl.jpg 1067w,/mariereim132_v-fullhd.jpg 1920w,/mariereim132_v-einspaltig.jpg 184w,/mariereim132_v-contentklein.jpg 256w,/mariereim132_v-anderthalbspaltig.jpg 280w,/mariereim132_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/mariereim132_v-contentgross.jpg" alt="Marie Reim &copy; bildergarten.tv " title="Marie Reim"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">6 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Marie-Reim-im-ESC-Bewerbungsgespraech,bewerbung362.html" title="Zum Video: Marie Reim im ESC-Bewerbungsgespräch"  >
Marie Reim im ESC-Bewerbungsgespräch
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ninetynine112_v-ardteaser.jpg 120w,/ninetynine112_v-content.jpg 192w,/ninetynine112_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ninetynine112_v-thumbnailgross.jpg 128w,/ninetynine112_v-contentgross.jpg 568w,/ninetynine112_v-vierspaltig.jpg 760w,/ninetynine112_v-contentxl.jpg 1067w,/ninetynine112_v-fullhd.jpg 1920w,/ninetynine112_v-einspaltig.jpg 184w,/ninetynine112_v-contentklein.jpg 256w,/ninetynine112_v-anderthalbspaltig.jpg 280w,/ninetynine112_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/ninetynine112_v-contentgross.jpg" alt="NinetyNine &copy; ARD " title="NinetyNine"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">6 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/NinetyNine-im-ESC-Bewerbungsgespraech,esc3868.html" title="Zum Video: NinetyNine im ESC-Bewerbungsgespräch"  >
NinetyNine im ESC-Bewerbungsgespräch
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/galant114_v-ardteaser.jpg 120w,/galant114_v-content.jpg 192w,/galant114_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/galant114_v-thumbnailgross.jpg 128w,/galant114_v-contentgross.jpg 568w,/galant114_v-vierspaltig.jpg 760w,/galant114_v-contentxl.jpg 1067w,/galant114_v-fullhd.jpg 1920w,/galant114_v-einspaltig.jpg 184w,/galant114_v-contentklein.jpg 256w,/galant114_v-anderthalbspaltig.jpg 280w,/galant114_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/galant114_v-contentgross.jpg" alt="Galant &copy; ARD " title="Galant"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">6 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Galant-im-ESC-Bewerbungsgespraech,esc3866.html" title="Zum Video: Galant im ESC-Bewerbungsgespräch"  >
Galant im ESC-Bewerbungsgespräch
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/vorentscheid1112_v-ardteaser.jpg 120w,/vorentscheid1112_v-content.jpg 192w,/vorentscheid1112_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/vorentscheid1112_v-thumbnailgross.jpg 128w,/vorentscheid1112_v-contentgross.jpg 568w,/vorentscheid1112_v-vierspaltig.jpg 760w,/vorentscheid1112_v-contentxl.jpg 1067w,/vorentscheid1112_v-fullhd.jpg 1920w,/vorentscheid1112_v-einspaltig.jpg 184w,/vorentscheid1112_v-contentklein.jpg 256w,/vorentscheid1112_v-anderthalbspaltig.jpg 280w,/vorentscheid1112_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/vorentscheid1112_v-contentgross.jpg" alt="Die acht gesetzten Acts im deutschen ESC-Vorentscheid &copy; NDR " title="Die acht gesetzten Acts im deutschen ESC-Vorentscheid"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">5 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Songs-der-Acts-im-Vorentscheid-Das-deutsche-Finale,schnell112.html" title="Zum Video: Songs der Acts im Vorentscheid &#034;Das deutsche Finale&#034;"  >
Songs der Acts im Vorentscheid "Das deutsche Finale"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/reaction274_v-ardteaser.jpg 120w,/reaction274_v-content.jpg 192w,/reaction274_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/reaction274_v-thumbnailgross.jpg 128w,/reaction274_v-contentgross.jpg 568w,/reaction274_v-vierspaltig.jpg 760w,/reaction274_v-contentxl.jpg 1067w,/reaction274_v-fullhd.jpg 1920w,/reaction274_v-einspaltig.jpg 184w,/reaction274_v-contentklein.jpg 256w,/reaction274_v-anderthalbspaltig.jpg 280w,/reaction274_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/reaction274_v-contentgross.jpg" alt="Zwei Seniorinnen sitzen nebeneinander. &copy; NDR " title="Zwei Seniorinnen sitzen nebeneinander."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">2 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Sinnlicher-Wiederholungstaeter,senior142.html" title="Zum Video: Sinnlicher Wiederholungstäter"  >
Sinnlicher Wiederholungstäter
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/reaction272_v-ardteaser.jpg 120w,/reaction272_v-content.jpg 192w,/reaction272_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/reaction272_v-thumbnailgross.jpg 128w,/reaction272_v-contentgross.jpg 568w,/reaction272_v-vierspaltig.jpg 760w,/reaction272_v-contentxl.jpg 1067w,/reaction272_v-fullhd.jpg 1920w,/reaction272_v-einspaltig.jpg 184w,/reaction272_v-contentklein.jpg 256w,/reaction272_v-anderthalbspaltig.jpg 280w,/reaction272_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/reaction272_v-contentgross.jpg" alt="Zwei Seniorinnen sitzen nebeneinander. &copy; NDR " title="Zwei Seniorinnen sitzen nebeneinander."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">2 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Deutscher-Schlager-mit-englischem-Text,senior140.html" title="Zum Video: Deutscher Schlager mit englischem Text?"  >
Deutscher Schlager mit englischem Text?
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/reaction270_v-ardteaser.jpg 120w,/reaction270_v-content.jpg 192w,/reaction270_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/reaction270_v-thumbnailgross.jpg 128w,/reaction270_v-contentgross.jpg 568w,/reaction270_v-vierspaltig.jpg 760w,/reaction270_v-contentxl.jpg 1067w,/reaction270_v-fullhd.jpg 1920w,/reaction270_v-einspaltig.jpg 184w,/reaction270_v-contentklein.jpg 256w,/reaction270_v-anderthalbspaltig.jpg 280w,/reaction270_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/reaction270_v-contentgross.jpg" alt="Ein junger Mann und eine Seniorin sitzen nebeneinander. &copy; NDR " title="Ein junger Mann und eine Seniorin sitzen nebeneinander."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">2 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Es-kommt-immer-auf-die-Musik-an,senior138.html" title="Zum Video: &#034;Es kommt immer auf die Musik an&#034;"  >
"Es kommt immer auf die Musik an"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/reaction266_v-ardteaser.jpg 120w,/reaction266_v-content.jpg 192w,/reaction266_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/reaction266_v-thumbnailgross.jpg 128w,/reaction266_v-contentgross.jpg 568w,/reaction266_v-vierspaltig.jpg 760w,/reaction266_v-contentxl.jpg 1067w,/reaction266_v-fullhd.jpg 1920w,/reaction266_v-einspaltig.jpg 184w,/reaction266_v-contentklein.jpg 256w,/reaction266_v-anderthalbspaltig.jpg 280w,/reaction266_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/reaction266_v-contentgross.jpg" alt="Zwei Seniorinnen sitzt nebeneinander. &copy; NDR " title="Zwei Seniorinnen sitzt nebeneinander."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">2 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Neue-neue-deutsche-Welle-im-Vorentscheid,senioren590.html" title="Zum Video: Neue, neue deutsche Welle im Vorentscheid?"  >
Neue, neue deutsche Welle im Vorentscheid?
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" >
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/reaction262_v-ardteaser.jpg 120w,/reaction262_v-content.jpg 192w,/reaction262_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/reaction262_v-thumbnailgross.jpg 128w,/reaction262_v-contentgross.jpg 568w,/reaction262_v-vierspaltig.jpg 760w,/reaction262_v-contentxl.jpg 1067w,/reaction262_v-fullhd.jpg 1920w,/reaction262_v-einspaltig.jpg 184w,/reaction262_v-contentklein.jpg 256w,/reaction262_v-anderthalbspaltig.jpg 280w,/reaction262_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/reaction262_v-contentgross.jpg" alt="Ein Seniorenpaar sitzt nebeneinander. &copy; NDR " title="Ein Seniorenpaar sitzt nebeneinander."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">2 Min</span><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/videos/2024/Kleiner-Elvis-oder-eher-was-fuer-Italiener-und-Spanier,senioren588.html" title="Zum Video: Kleiner Elvis oder eher was für Italiener und Spanier?"  >
Kleiner Elvis oder eher was für Italiener und Spanier?
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="addmore">
<a href="#" class="add1"><span class="ndricon_plus"></span> <span class="label">Mehr anzeigen</span></a>
<a href="#" class="add2"><span class="ndricon_plus"></span> <span class="label">Mehr anzeigen</span></a>
</div>
</section>
<section class="w100">
<div class="module w100 list" data-color=col2>
<div class="modulepadding">
<div class="teaser" data-start="1707423300000">
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/acts122_v-thumbnailgross.jpg 128w,/acts122_v-contentgross.jpg 568w,/acts122_v-vierspaltig.jpg 760w,/acts122_v-contentxl.jpg 1067w,/acts122_v-fullhd.jpg 1920w,/acts122_v-einspaltig.jpg 184w,/acts122_v-contentklein.jpg 256w,/acts122_v-anderthalbspaltig.jpg 280w,/acts122_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/acts122_v-contentgross.jpg" alt="Luca, Anne und Floryan: die Acts von &#034;Ich will zum ESC! - Die Entscheidung&#034; &copy; NDR / Fotoalia Foto: rvika /André Kowalski" title="Luca, Anne und Floryan: die Acts von &#034;Ich will zum ESC! - Die Entscheidung&#034;"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_livestream"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Alle-Infos-zu-Ich-will-zum-ESC,vorentscheid1106.html" title="Zum Artikel: Alle Infos zu &#034;Ich will zum ESC!&#034;"  >
Alle Infos zu "Ich will zum ESC!"
</a>
</h2>
<div class="teasertext">
<p>
08.02.24 |
Anne Im, Luca M. Wefes und Floryan singen heute um den letzten freien Platz im deutschen Vorentscheid. Ihr entscheidet, wer ihn bekommt.
<a title="Zum Video-Livestream: Alle Infos zu &quot;Ich will zum ESC!&quot;" href="/news/Alle-Infos-zu-Ich-will-zum-ESC,vorentscheid1106.html" class="cta " >Video-Livestream</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100">
<div class="module w100 list" data-color=col3>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/bibi124_v-thumbnailgross.png 128w,/bibi124_v-contentgross.png 568w,/bibi124_v-vierspaltig.png 760w,/bibi124_v-contentxl.png 1067w,/bibi124_v-fullhd.png 1920w,/bibi124_v-einspaltig.png 184w,/bibi124_v-contentklein.png 256w,/bibi124_v-anderthalbspaltig.png 280w,/bibi124_v-zweispaltig.png 376w" sizes="1px" >
<img src="/bibi124_v-contentgross.png" alt="Bibiane Z, Kandidatin bei &#034;Ich will zum ESC!&#034; &copy; NDR Foto: André Kowalski" title="Bibiane Z, Kandidatin bei &#034;Ich will zum ESC!&#034;"  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Bibane-Z-faellt-fuer-Ich-will-zum-ESC-Die-Entscheidung-aus,bibiane104.html" title="Zum Artikel: Bibiane Z fällt für &#034;Ich will zum ESC! - Die Entscheidung&#034; aus"  >
Bibiane Z fällt für "Ich will zum ESC! - Die Entscheidung" aus
</a>
</h2>
<div class="teasertext">
<p>
08.02.24 |
Aus Krankheitsgründen kann die Sängerin nicht in der Liveshow auftreten. Die Startnummern der anderen drei Acts bleiben bestehen.
<a title="Zum Artikel: Bibiane Z fällt für &quot;Ich will zum ESC! - Die Entscheidung&quot; aus" href="/news/Bibane-Z-faellt-fuer-Ich-will-zum-ESC-Die-Entscheidung-aus,bibiane104.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100 mediacollection teasergroup autorelated">
<h1>
<span>"Ich will zum ESC!" | Audios</span>
</h1>
<div class="module w50 list" data-color=col2>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/florian156_v-ardteaser.png 120w,/florian156_v-content.png 192w,/florian156_v-gallery.png 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/florian156_v-thumbnailgross.png 128w,/florian156_v-contentgross.png 568w,/florian156_v-vierspaltig.png 760w,/florian156_v-contentxl.png 1067w,/florian156_v-fullhd.png 1920w,/florian156_v-einspaltig.png 184w,/florian156_v-contentklein.png 256w,/florian156_v-anderthalbspaltig.png 280w,/florian156_v-zweispaltig.png 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/florian156_v-contentgross.png" alt="Florian, Kandidat bei &#034;Ich will zum ESC!&#034; &copy; NDR Foto: André Kowalski" title="Florian, Kandidat bei &#034;Ich will zum ESC!&#034;"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/Ich-will-zum-ESC-Floryan-Scars,floryan100.html" title="Zum Audiobeitrag: Floryan - &#034;Scars&#034;"  >
Floryan - "Scars"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col3>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/anne256_v-ardteaser.png 120w,/anne256_v-content.png 192w,/anne256_v-gallery.png 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/anne256_v-thumbnailgross.png 128w,/anne256_v-contentgross.png 568w,/anne256_v-vierspaltig.png 760w,/anne256_v-contentxl.png 1067w,/anne256_v-fullhd.png 1920w,/anne256_v-einspaltig.png 184w,/anne256_v-contentklein.png 256w,/anne256_v-anderthalbspaltig.png 280w,/anne256_v-zweispaltig.png 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/anne256_v-contentgross.png" alt="Anne, Kandidatin bei &#034;Ich will zum ESC!&#034; &copy; NDR Foto: André Kowalski" title="Anne, Kandidatin bei &#034;Ich will zum ESC!&#034;"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/Ich-will-zum-ESC-Anne-Im-Yellow-Brick-Road,anne252.html" title="Zum Audiobeitrag: Anne Im - &#034;Yellow Brick Road&#034;"  >
Anne Im - "Yellow Brick Road"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col9>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/luca158_v-ardteaser.png 120w,/luca158_v-content.png 192w,/luca158_v-gallery.png 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/luca158_v-thumbnailgross.png 128w,/luca158_v-contentgross.png 568w,/luca158_v-vierspaltig.png 760w,/luca158_v-contentxl.png 1067w,/luca158_v-fullhd.png 1920w,/luca158_v-einspaltig.png 184w,/luca158_v-contentklein.png 256w,/luca158_v-anderthalbspaltig.png 280w,/luca158_v-zweispaltig.png 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/luca158_v-contentgross.png" alt="Luca, Kandidat bei &#034;Ich will zum ESC!&#034; &copy; NDR Foto: André Kowalski" title="Luca, Kandidat bei &#034;Ich will zum ESC!&#034;"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/Ich-will-zum-ESC-Luca-M-Wefes-Farben-neuer-Tage,luca154.html" title="Zum Audiobeitrag: Luca M. Wefes - &#034;Farben neuer Tage&#034;"  >
Luca M. Wefes - "Farben neuer Tage"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="addmore">
<a href="#" class="add1"><span class="ndricon_plus"></span> <span class="label">Mehr anzeigen</span></a>
<a href="#" class="add2"><span class="ndricon_plus"></span> <span class="label">Mehr anzeigen</span></a>
</div>
</section>
<section class="w100">
<div class="module w20 std" data-color=col1>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/iwze104_v-thumbnailgross.jpg 128w,/iwze104_v-contentgross.jpg 568w,/iwze104_v-vierspaltig.jpg 760w,/iwze104_v-contentxl.jpg 1067w,/iwze104_v-fullhd.jpg 1920w,/iwze104_v-einspaltig.jpg 184w,/iwze104_v-contentklein.jpg 256w,/iwze104_v-anderthalbspaltig.jpg 280w,/iwze104_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/iwze104_v-contentgross.jpg" alt="Rea Garvey &copy; bildergarten.tv " title="Rea Garvey"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_extlink2"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://1.ard.de/IchWillZumESCFolge5?e=de" title="Link: Link zur fünften Folge von &#034;Ich will zum ESC!&#034; in der ARD Mediathek"   rel="noopener" target="_blank">
Folge 5: Das Song-Writing
</a>
</h2>
<div class="teasertext">
<p>
Stimme und Performance sind wichtig. Doch hat für den Eurovision Song Contest auch beim Song-Writing-Fähigkeiten die Nase vorn?
<a title="Link: Link zur fünften Folge von &quot;Ich will zum ESC!&quot; in der ARD Mediathek" href="https://1.ard.de/IchWillZumESCFolge5?e=de" class="cta " >extern</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w20 std" data-color=col1>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/iwze106_v-thumbnailgross.jpg 128w,/iwze106_v-contentgross.jpg 568w,/iwze106_v-vierspaltig.jpg 760w,/iwze106_v-contentxl.jpg 1067w,/iwze106_v-fullhd.jpg 1920w,/iwze106_v-einspaltig.jpg 184w,/iwze106_v-contentklein.jpg 256w,/iwze106_v-anderthalbspaltig.jpg 280w,/iwze106_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/iwze106_v-contentgross.jpg" alt="Nikeata Thompson &copy; bildergarten.tv " title="Nikeata Thompson"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_extlink2"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://1.ard.de/IchWillZumESCFolge4?e=de" title="Link: Link zur vierten Folge von &#034;Ich will zum ESC!&#034; in der ARD Mediathek"   rel="noopener" target="_blank">
Folge 4: Lip-Sync - Performance ist alles
</a>
</h2>
<div class="teasertext">
<p>
Coach Nikeata Thompson will wissen, welche Talente neben der Stimme auch mit Bühnenpräsenz und Performance punkten können.
<a title="Link: Link zur vierten Folge von &quot;Ich will zum ESC!&quot; in der ARD Mediathek" href="https://1.ard.de/IchWillZumESCFolge4?e=de" class="cta " >extern</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w20 std" data-color=col1>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/media/ichwillzumesc134_v-thumbnailgross.jpg 128w,/media/ichwillzumesc134_v-contentgross.jpg 568w,/media/ichwillzumesc134_v-vierspaltig.jpg 760w,/media/ichwillzumesc134_v-contentxl.jpg 1067w,/media/ichwillzumesc134_v-fullhd.jpg 1920w,/media/ichwillzumesc134_v-einspaltig.jpg 184w,/media/ichwillzumesc134_v-contentklein.jpg 256w,/media/ichwillzumesc134_v-anderthalbspaltig.jpg 280w,/media/ichwillzumesc134_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/media/ichwillzumesc134_v-contentgross.jpg" alt="Coach Conchita Wurst lauscht an einer Tür, hinter der zwei Teilnehmer ihren Song proben. &copy; NDR " title="Coach Conchita Wurst lauscht an einer Tür, hinter der zwei Teilnehmer ihren Song proben."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_extlink2"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://1.ard.de/IchWillZumESCFolge3?e=de" title="Link: Link zur dritten Folge von &#034;Ich will zum ESC!&#034; in der ARD Mediathek"   rel="noopener" target="_blank">
Folge 3: Das Vocal-Coaching
</a>
</h2>
<div class="teasertext">
<p>
Nach den Auditions haben Conchita und Rea jeweils noch fünf Acts in ihren Teams. Mit ihnen geht es ins Vocal-Coaching.
<a title="Link: Link zur dritten Folge von &quot;Ich will zum ESC!&quot; in der ARD Mediathek" href="https://1.ard.de/IchWillZumESCFolge3?e=de" class="cta " >extern</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w20 std" data-color=col1>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/media/ichwillzumesc132_v-thumbnailgross.jpg 128w,/media/ichwillzumesc132_v-contentgross.jpg 568w,/media/ichwillzumesc132_v-vierspaltig.jpg 760w,/media/ichwillzumesc132_v-contentxl.jpg 1067w,/media/ichwillzumesc132_v-fullhd.jpg 1920w,/media/ichwillzumesc132_v-einspaltig.jpg 184w,/media/ichwillzumesc132_v-contentklein.jpg 256w,/media/ichwillzumesc132_v-anderthalbspaltig.jpg 280w,/media/ichwillzumesc132_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/media/ichwillzumesc132_v-contentgross.jpg" alt="Marie singt in den Auditions bei &#034;Ich will zum ESC!&#034;. &copy; André Kowalski " title="Marie singt in den Auditions bei &#034;Ich will zum ESC!&#034;."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_extlink2"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://1.ard.de/IchWillZumESCFolge2?e=de" title="Link: Link zur zweiten Folge von &#034;Ich will zum ESC!&#034; in der ARD Mediathek"   rel="noopener" target="_blank">
Folge 2: Die Auditions | Teil 2
</a>
</h2>
<div class="teasertext">
<p>
Die Teams von Conchita und Rea füllen sich. Aber noch gibt es Plätze Wer schafft es eine Runde weiter?
<a title="Link: Link zur zweiten Folge von &quot;Ich will zum ESC!&quot; in der ARD Mediathek" href="https://1.ard.de/IchWillZumESCFolge2?e=de" class="cta " >extern</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w20 std" data-color=col1>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/media/ichwillzumesc130_v-thumbnailgross.jpg 128w,/media/ichwillzumesc130_v-contentgross.jpg 568w,/media/ichwillzumesc130_v-vierspaltig.jpg 760w,/media/ichwillzumesc130_v-contentxl.jpg 1067w,/media/ichwillzumesc130_v-fullhd.jpg 1920w,/media/ichwillzumesc130_v-einspaltig.jpg 184w,/media/ichwillzumesc130_v-contentklein.jpg 256w,/media/ichwillzumesc130_v-anderthalbspaltig.jpg 280w,/media/ichwillzumesc130_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/media/ichwillzumesc130_v-contentgross.jpg" alt="Paul singt in den Auditions bei &#034;Ich will zum ESC!&#034;. &copy; André Kowalski " title="Paul singt in den Auditions bei &#034;Ich will zum ESC!&#034;."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_extlink2"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://1.ard.de/IchWillZumESCFolge1?e=de" title="Link: Link zur ersten Folge von &#034;Ich will zum ESC!&#034; in der ARD Mediathek"   rel="noopener" target="_blank">
Folge 1: Die Auditions | Teil 1
</a>
</h2>
<div class="teasertext">
<p>
Das große Vorsingen! In der ersten Runde müssen die Talente die Coaches Conchita und Rea von sich überzeugen.
<a title="Link: Link zur ersten Folge von &quot;Ich will zum ESC!&quot; in der ARD Mediathek" href="https://1.ard.de/IchWillZumESCFolge1?e=de" class="cta " >extern</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100">
<div class="module w100 list" data-color=col3>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/hosts116_v-thumbnailgross.png 128w,/hosts116_v-contentgross.png 568w,/hosts116_v-vierspaltig.png 760w,/hosts116_v-contentxl.png 1067w,/hosts116_v-fullhd.png 1920w,/hosts116_v-einspaltig.png 184w,/hosts116_v-contentklein.png 256w,/hosts116_v-anderthalbspaltig.png 280w,/hosts116_v-zweispaltig.png 376w" sizes="1px" >
<img src="/hosts116_v-contentgross.png" alt="Die Hosts des diesjährigen ESC: Malin Åkerman und Petra Mede &copy; eurovision.tv " title="Die Hosts des diesjährigen ESC: Malin Åkerman und Petra Mede"  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Das-sind-die-Moderatorinnen-des-Eurovision-Song-Contest-2024,hosts118.html" title="Zum Artikel: Das sind die Moderatorinnen des Eurovision Song Contest 2024"  >
Das sind die Moderatorinnen des Eurovision Song Contest 2024
</a>
</h2>
<div class="teasertext">
<p>
05.02.24 |
Petra Mede und Malin Åkerman moderieren den ESC 2024 aus Malmö. Mede führt damit bereits zum dritten Mal durch die Shows.
<a title="Zum Artikel: Das sind die Moderatorinnen des Eurovision Song Contest 2024" href="/news/Das-sind-die-Moderatorinnen-des-Eurovision-Song-Contest-2024,hosts118.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100">
<div class="module w20 std" data-color=col4>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/israel1752_v-thumbnailgross.jpg 128w,/news/israel1752_v-contentgross.jpg 568w,/news/israel1752_v-vierspaltig.jpg 760w,/news/israel1752_v-contentxl.jpg 1067w,/news/israel1752_v-fullhd.jpg 1920w,/news/israel1752_v-einspaltig.jpg 184w,/news/israel1752_v-contentklein.jpg 256w,/news/israel1752_v-anderthalbspaltig.jpg 280w,/news/israel1752_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/news/israel1752_v-contentgross.jpg" alt="Eden Golan, Israels ESC-Kandidatin 2024. &copy; EBU/Kan Foto: EBU/Kan" title="Eden Golan, Israels ESC-Kandidatin 2024."  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Next-Star-Eden-Golan-vertritt-Israel-beim-ESC-2024,israel1754.html" title="Zum Artikel: &#034;Next Star&#034; Eden Golan vertritt Israel beim ESC 2024"  >
"Next Star" Eden Golan vertritt Israel beim ESC 2024
</a>
</h2>
<div class="teasertext">
<p>
07.02.24 |
Nach ihrem Sieg in der Casting-Show "The Next Star" ist Eden Golan Israels ESC-Kandidatin 2024. Ihr Song steht noch nicht fest.
<a title="Zum Artikel: &quot;Next Star&quot; Eden Golan vertritt Israel beim ESC 2024" href="/news/Next-Star-Eden-Golan-vertritt-Israel-beim-ESC-2024,israel1754.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w20 std" data-color=col3>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/jerryheil100_v-thumbnailgross.png 128w,/jerryheil100_v-contentgross.png 568w,/jerryheil100_v-vierspaltig.png 760w,/jerryheil100_v-contentxl.png 1067w,/jerryheil100_v-fullhd.png 1920w,/jerryheil100_v-einspaltig.png 184w,/jerryheil100_v-contentklein.png 256w,/jerryheil100_v-anderthalbspaltig.png 280w,/jerryheil100_v-zweispaltig.png 376w" sizes="1px" >
<img src="/jerryheil100_v-contentgross.png" alt="Die Vertreterinnen der Ukraine: Alyona Alyona &amp; Jerry Heil &copy; eurovision.tv " title="Die Vertreterinnen der Ukraine: Alyona Alyona &amp; Jerry Heil"  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/ESC-2024-Alyona-Alyona-Jerry-Heil-singen-Teresa-Maria-fuer-die-Ukraine,ukraine3722.html" title="Zum Artikel: ESC 2024: Alyona Alyona &amp; Jerry Heil singen &#034;Teresa &amp; Maria&#034; für die Ukraine"  >
Alyona Alyona & Jerry Heil singen "Teresa & Maria" für die Ukraine
</a>
</h2>
<div class="teasertext">
<p>
05.02.24 |
Einen Tag nach dem ukrainischen Vorentscheid wurden Alyona Alyona & Jerry Heil mit dem Elektrofolk-Rapsong "Teresa & Maria" als Siegerinnen der Abstimmung verkündet.
<a title="Zum Artikel: ESC 2024: Alyona Alyona & Jerry Heil singen &quot;Teresa & Maria&quot; für die Ukraine" href="/news/ESC-2024-Alyona-Alyona-Jerry-Heil-singen-Teresa-Maria-fuer-die-Ukraine,ukraine3722.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w20 std" data-color=col6>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/spanien1464_v-thumbnailgross.jpg 128w,/news/spanien1464_v-contentgross.jpg 568w,/news/spanien1464_v-vierspaltig.jpg 760w,/news/spanien1464_v-contentxl.jpg 1067w,/news/spanien1464_v-fullhd.jpg 1920w,/news/spanien1464_v-einspaltig.jpg 184w,/news/spanien1464_v-contentklein.jpg 256w,/news/spanien1464_v-anderthalbspaltig.jpg 280w,/news/spanien1464_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/news/spanien1464_v-contentgross.jpg" alt="Nebulossa, Spanien ESC-Teilnehmer 2024. &copy; TVE " title="Nebulossa, Spanien ESC-Teilnehmer 2024."  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/ESC-2024-Nebulossa-treten-fuer-Spanien-an,spanien1462.html" title="Zum Artikel: Nebulossa treten für Spanien an"  >
Nebulossa treten für Spanien an
</a>
</h2>
<div class="teasertext">
<p>
04.02.24 |
Mit dem Synth-Pop-Titel "Zorra" hat das Duo Nebulossa das Benidorm Fest 2024 gewonnen und vertritt Spanien beim ESC in Malmö.
<a title="Zum Artikel: Nebulossa treten für Spanien an" href="/news/ESC-2024-Nebulossa-treten-fuer-Spanien-an,spanien1462.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w20 std" data-color=col5>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/norwegen1758_v-thumbnailgross.jpg 128w,/news/norwegen1758_v-contentgross.jpg 568w,/news/norwegen1758_v-vierspaltig.jpg 760w,/news/norwegen1758_v-contentxl.jpg 1067w,/news/norwegen1758_v-fullhd.jpg 1920w,/news/norwegen1758_v-einspaltig.jpg 184w,/news/norwegen1758_v-contentklein.jpg 256w,/news/norwegen1758_v-anderthalbspaltig.jpg 280w,/news/norwegen1758_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/news/norwegen1758_v-contentgross.jpg" alt="Gåte, Norwegens ESC-Teilnehmer 2024. &copy; NRK Foto: Julia Marie Naglestad" title="Gåte, Norwegens ESC-Teilnehmer 2024."  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/ESC-2024-Gate-vertreten-Norwegen-mit-Folk-Rock,norwegen1760.html" title="Zum Artikel: Gåte vertreten Norwegen mit Folk-Rock"  >
Gåte vertreten Norwegen mit Folk-Rock
</a>
</h2>
<div class="teasertext">
<p>
03.02.24 |
Norwegen hat sich für die Folk-Rock-Band Gåte entschieden, die ihren Song sogar extra für den ESC noch umschreiben mussten.
<a title="Zum Artikel: Gåte vertreten Norwegen mit Folk-Rock" href="/news/ESC-2024-Gate-vertreten-Norwegen-mit-Folk-Rock,norwegen1760.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w20 std" data-color=col6>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/malta944_v-thumbnailgross.jpg 128w,/news/malta944_v-contentgross.jpg 568w,/news/malta944_v-vierspaltig.jpg 760w,/news/malta944_v-contentxl.jpg 1067w,/news/malta944_v-fullhd.jpg 1920w,/news/malta944_v-einspaltig.jpg 184w,/news/malta944_v-contentklein.jpg 256w,/news/malta944_v-anderthalbspaltig.jpg 280w,/news/malta944_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/news/malta944_v-contentgross.jpg" alt="Sarah Bonnici, Maltas ESC-Kandidatin 2024. &copy; EBU/TVM Foto: EBU/TVM" title="Sarah Bonnici, Maltas ESC-Kandidatin 2024."  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Sarah-Bonnici-ist-beim-ESC-2024-fuer-Malta-auf-Loop,malta946.html" title="Zum Artikel: Sarah Bonnici ist für Malta auf &#034;Loop&#034;"  >
Sarah Bonnici ist für Malta auf "Loop"
</a>
</h2>
<div class="teasertext">
<p>
04.02.24 |
Maltas ESC-Kandidatin 2024 heißt Sarah Bonnici. Das Eurovisions-Feuer wurde in ihr geweckt, als sie schon einmal beim Junior ESC auf der Bühne stand.
<a title="Zum Artikel: Sarah Bonnici ist für Malta auf &quot;Loop&quot;" href="/news/Sarah-Bonnici-ist-beim-ESC-2024-fuer-Malta-auf-Loop,malta946.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100">
<div class="module w100 list" data-color=col3>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/halbfinale494_v-thumbnailgross.png 128w,/halbfinale494_v-contentgross.png 568w,/halbfinale494_v-vierspaltig.png 760w,/halbfinale494_v-contentxl.png 1067w,/halbfinale494_v-fullhd.png 1920w,/halbfinale494_v-einspaltig.png 184w,/halbfinale494_v-contentklein.png 256w,/halbfinale494_v-anderthalbspaltig.png 280w,/halbfinale494_v-zweispaltig.png 376w" sizes="1px" >
<img src="/halbfinale494_v-contentgross.png" alt="Halbfinalauslosung ESC 2024 &copy; eurovision.tv " title="Halbfinalauslosung ESC 2024"  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/ESC-2024-Aufteilung-der-Laender-in-den-ESC-Halbfinale,halbfinale492.html" title="Zum Artikel: Aufteilung der Länder in den ESC-Halbfinale"  >
Aufteilung der Länder in den ESC-Halbfinale
</a>
</h2>
<div class="teasertext">
<p>
30.01.24 |
In Malmö wurde live ausgelost, welches Land in welchem ESC-Halbfinale antritt. Außerdem: Deutschland stimmt im ersten Semi ab.
<a title="Zum Artikel: Aufteilung der Länder in den ESC-Halbfinale" href="/news/ESC-2024-Aufteilung-der-Laender-in-den-ESC-Halbfinale,halbfinale492.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100">
<h1>
<span>Deutscher Vorentscheid</span>
</h1>
<div class="module w33 std" data-color=col6>
<div class="modulepadding">
<div class="teaser" data-video="/videos/2024/schnell112-ardplayer_autostart-true_image-2465b132-89e3-43eb-a735-8a64e611cccc.html">
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/vorentscheid/teilnehmer472_v-thumbnailgross.jpg 128w,/vorentscheid/teilnehmer472_v-contentgross.jpg 568w,/vorentscheid/teilnehmer472_v-vierspaltig.jpg 760w,/vorentscheid/teilnehmer472_v-contentxl.jpg 1067w,/vorentscheid/teilnehmer472_v-fullhd.jpg 1920w,/vorentscheid/teilnehmer472_v-einspaltig.jpg 184w,/vorentscheid/teilnehmer472_v-contentklein.jpg 256w,/vorentscheid/teilnehmer472_v-anderthalbspaltig.jpg 280w,/vorentscheid/teilnehmer472_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/vorentscheid/teilnehmer472_v-contentgross.jpg" alt="Collage der Teilnehmer und Teilnehmerinnen des Vorentscheides zum ESC 2024 &copy; NDR Foto: Dorian Stiebeling, Magdalena Dauber, Gaby Gerster, Welthund Music, Amelia Janeva, Ella Mettler, Sophie van Hasselt, Valentin Ammon, Steven Söther" title="Collage der Teilnehmer und Teilnehmerinnen des Vorentscheides zum ESC 2024"  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_play"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Deutscher-ESC-Vorentscheid-2024-Diese-Acts-sind-sicher-dabei,acts104.html" title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Diese Acts sind sicher dabei"  >
Deutscher ESC-Vorentscheid 2024: Diese Acts sind sicher dabei
</a>
</h2>
<div class="teasertext">
<p>
19.01.24 |
Acht Plätze sind für "Eurovision Song Contest - Das deutsche Finale 2024" besetzt. Wir stellen euch die Kandidatinnen und Kandidaten vor.
<a title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Diese Acts sind sicher dabei" href="/news/Deutscher-ESC-Vorentscheid-2024-Diese-Acts-sind-sicher-dabei,acts104.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w33 std" data-color=col2>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/teilnehmer/vorentscheid1114_v-thumbnailgross.jpg 128w,/teilnehmer/vorentscheid1114_v-contentgross.jpg 568w,/teilnehmer/vorentscheid1114_v-vierspaltig.jpg 760w,/teilnehmer/vorentscheid1114_v-contentxl.jpg 1067w,/teilnehmer/vorentscheid1114_v-fullhd.jpg 1920w,/teilnehmer/vorentscheid1114_v-einspaltig.jpg 184w,/teilnehmer/vorentscheid1114_v-contentklein.jpg 256w,/teilnehmer/vorentscheid1114_v-anderthalbspaltig.jpg 280w,/teilnehmer/vorentscheid1114_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/teilnehmer/vorentscheid1114_v-contentgross.jpg" alt="Die Teilnehmer des deutschen ESC-Vorentscheids 2024. &copy; NDR/diverse Foto: Jasper Grätsch, Sophie van Hasselt, Anelia Janeva, Eddi Bachmann, Valentin Ammann, Gaby Gerster, Leo Dorian Stiebeling, Welthund Music" title="Die Teilnehmer des deutschen ESC-Vorentscheids 2024."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/ESC-Update-Die-Songs-des-deutschen-Vorentscheids-2024,podcast5884.html" title="Zum Artikel: ESC Update: Die Songs des deutschen Vorentscheids 2024"  >
ESC Update: Die Songs des deutschen Vorentscheids 2024
</a>
</h2>
<div class="teasertext">
<p>
19.01.24 |
Acht Künstler für den deutschen Vorentscheid 2024 stehen jetzt fest. Die Songs reichen von Schlager bis Pop.
<a title="Zum Artikel: ESC Update: Die Songs des deutschen Vorentscheids 2024" href="/news/ESC-Update-Die-Songs-des-deutschen-Vorentscheids-2024,podcast5884.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w33 std" data-color=col8>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/vorentscheid1108_v-thumbnailgross.jpg 128w,/vorentscheid1108_v-contentgross.jpg 568w,/vorentscheid1108_v-vierspaltig.jpg 760w,/vorentscheid1108_v-contentxl.jpg 1067w,/vorentscheid1108_v-fullhd.jpg 1920w,/vorentscheid1108_v-einspaltig.jpg 184w,/vorentscheid1108_v-contentklein.jpg 256w,/vorentscheid1108_v-anderthalbspaltig.jpg 280w,/vorentscheid1108_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/vorentscheid1108_v-contentgross.jpg" alt="Das Logo des Vorentscheids &#034;Eurovision Song Contest - Das deutsche Finale 2024&#034; &copy; NDR " title="Das Logo des Vorentscheids &#034;Eurovision Song Contest - Das deutsche Finale 2024&#034;"  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Acts-Songs-Voting-Infos-zum-deutschen-ESC-Vorentscheid-2024,vorentscheid1100.html" title="Zum Artikel: Acts, Songs, Voting: Infos zum deutschen ESC-Vorentscheid 2024"  >
Acts, Songs, Voting: Infos zum deutschen ESC-Vorentscheid 2024
</a>
</h2>
<div class="teasertext">
<p>
08.02.24 |
Am 19. Januar steht fest, welche gesetzten Acts im Vorentscheid "Eurovision Song Contest - Das deutsche Finale 2024" dabei sind.
<a title="Zum Artikel: Acts, Songs, Voting: Infos zum deutschen ESC-Vorentscheid 2024" href="/news/Acts-Songs-Voting-Infos-zum-deutschen-ESC-Vorentscheid-2024,vorentscheid1100.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100 mediacollection teasergroup autorelated">
<h1>
<span>Audios</span>
</h1>
<div class="module w50 list" data-color=col5>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/bodine106_v-ardteaser.jpg 120w,/bodine106_v-content.jpg 192w,/bodine106_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/bodine106_v-thumbnailgross.jpg 128w,/bodine106_v-contentgross.jpg 568w,/bodine106_v-vierspaltig.jpg 760w,/bodine106_v-contentxl.jpg 1067w,/bodine106_v-fullhd.jpg 1920w,/bodine106_v-einspaltig.jpg 184w,/bodine106_v-contentklein.jpg 256w,/bodine106_v-anderthalbspaltig.jpg 280w,/bodine106_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/bodine106_v-contentgross.jpg" alt="Die niederländische Sängerin Bodine. &copy; NDR/Sophie van Hasselt Foto: Sophie van Hasselt" title="Die niederländische Sängerin Bodine."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Bodine-Monet-Tears-Like-Rain,bodine122.html" title="Zum Audiobeitrag: Bodine Monet: &#034;Tears Like Rain&#034;"  >
Bodine Monet: "Tears Like Rain"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col1>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/max324_v-ardteaser.jpg 120w,/max324_v-content.jpg 192w,/max324_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/max324_v-thumbnailgross.jpg 128w,/max324_v-contentgross.jpg 568w,/max324_v-vierspaltig.jpg 760w,/max324_v-contentxl.jpg 1067w,/max324_v-fullhd.jpg 1920w,/max324_v-einspaltig.jpg 184w,/max324_v-contentklein.jpg 256w,/max324_v-anderthalbspaltig.jpg 280w,/max324_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/max324_v-contentgross.jpg" alt="Der 42-jährige Sänger Max Mutzke. &copy; NDR/Gaby Gerster Foto: Gaby Gerster" title="Der 42-jährige Sänger Max Mutzke."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/Max-Mutzke-Forever-Strong,max328.html" title="Zum Audiobeitrag: Max Mutzke: &#034;Forever Strong&#034;"  >
Max Mutzke: "Forever Strong"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col7>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/isaak108_v-ardteaser.jpg 120w,/isaak108_v-content.jpg 192w,/isaak108_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/isaak108_v-thumbnailgross.jpg 128w,/isaak108_v-contentgross.jpg 568w,/isaak108_v-vierspaltig.jpg 760w,/isaak108_v-contentxl.jpg 1067w,/isaak108_v-fullhd.jpg 1920w,/isaak108_v-einspaltig.jpg 184w,/isaak108_v-contentklein.jpg 256w,/isaak108_v-anderthalbspaltig.jpg 280w,/isaak108_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/isaak108_v-contentgross.jpg" alt="Der 28-jährige Sänger Isaak. &copy; NDR/Valentin Ammon Foto: Valentin Ammon" title="Der 28-jährige Sänger Isaak."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/Isaak-Always-On-The-Run,isaak114.html" title="Zum Audiobeitrag: Isaak: &#034;Always On The Run&#034;"  >
Isaak: "Always On The Run"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col3>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/leona130_v-ardteaser.jpg 120w,/leona130_v-content.jpg 192w,/leona130_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/leona130_v-thumbnailgross.jpg 128w,/leona130_v-contentgross.jpg 568w,/leona130_v-vierspaltig.jpg 760w,/leona130_v-contentxl.jpg 1067w,/leona130_v-fullhd.jpg 1920w,/leona130_v-einspaltig.jpg 184w,/leona130_v-contentklein.jpg 256w,/leona130_v-anderthalbspaltig.jpg 280w,/leona130_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/leona130_v-contentgross.jpg" alt="Die 20-jährige Sängerin Leona. &copy; NDR/Steven Söther Foto: Steven Söther" title="Die 20-jährige Sängerin Leona."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/Leona-Undream-You,leona126.html" title="Zum Audiobeitrag: Leona: &#034;Undream You&#034;"  >
Leona: "Undream You"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col6>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/mariereim122_v-ardteaser.jpg 120w,/mariereim122_v-content.jpg 192w,/mariereim122_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/mariereim122_v-thumbnailgross.jpg 128w,/mariereim122_v-contentgross.jpg 568w,/mariereim122_v-vierspaltig.jpg 760w,/mariereim122_v-contentxl.jpg 1067w,/mariereim122_v-fullhd.jpg 1920w,/mariereim122_v-einspaltig.jpg 184w,/mariereim122_v-contentklein.jpg 256w,/mariereim122_v-anderthalbspaltig.jpg 280w,/mariereim122_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/mariereim122_v-contentgross.jpg" alt="Der 23-jährige Sängerin Marie Reim. &copy; NDR/Anelia Janeva Foto: Anelia Janeva" title="Der 23-jährige Sängerin Marie Reim."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/Marie-Reim-Naiv,marie158.html" title="Zum Audiobeitrag: Marie Reim: &#034;Naiv&#034;"  >
Marie Reim: "Naiv"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col3>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/galant112_v-ardteaser.jpg 120w,/galant112_v-content.jpg 192w,/galant112_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/galant112_v-thumbnailgross.jpg 128w,/galant112_v-contentgross.jpg 568w,/galant112_v-vierspaltig.jpg 760w,/galant112_v-contentxl.jpg 1067w,/galant112_v-fullhd.jpg 1920w,/galant112_v-einspaltig.jpg 184w,/galant112_v-contentklein.jpg 256w,/galant112_v-anderthalbspaltig.jpg 280w,/galant112_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/galant112_v-contentgross.jpg" alt="Das Electropop-Duo Galant. &copy; NDR/Magdalena Dauber Foto: Magdalena Dauber" title="Das Electropop-Duo Galant."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/Galant-Katze,galant108.html" title="Zum Audiobeitrag: Galant: &#034;Katze&#034;"  >
Galant: "Katze"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col9>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ninetynine106_v-ardteaser.jpg 120w,/ninetynine106_v-content.jpg 192w,/ninetynine106_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ninetynine106_v-thumbnailgross.jpg 128w,/ninetynine106_v-contentgross.jpg 568w,/ninetynine106_v-vierspaltig.jpg 760w,/ninetynine106_v-contentxl.jpg 1067w,/ninetynine106_v-fullhd.jpg 1920w,/ninetynine106_v-einspaltig.jpg 184w,/ninetynine106_v-contentklein.jpg 256w,/ninetynine106_v-anderthalbspaltig.jpg 280w,/ninetynine106_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/ninetynine106_v-contentgross.jpg" alt="Der 24-jährige Sänger NinetyNine. &copy; NDR/Timmo Schreiber Foto: Timmo Schreiber" title="Der 24-jährige Sänger NinetyNine."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">2 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/NinetyNine-Love-On-A-Budget,ninetynine100.html" title="Zum Audiobeitrag: NinetyNine: &#034;Love On A Budget&#034;"  >
NinetyNine: "Love On A Budget"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col4>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ryk174_v-ardteaser.jpg 120w,/ryk174_v-content.jpg 192w,/ryk174_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ryk174_v-thumbnailgross.jpg 128w,/ryk174_v-contentgross.jpg 568w,/ryk174_v-vierspaltig.jpg 760w,/ryk174_v-contentxl.jpg 1067w,/ryk174_v-fullhd.jpg 1920w,/ryk174_v-einspaltig.jpg 184w,/ryk174_v-contentklein.jpg 256w,/ryk174_v-anderthalbspaltig.jpg 280w,/ryk174_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/ryk174_v-contentgross.jpg" alt="Der 34-jährige Rick Jurthe alias Ryk. &copy; Welthund Music " title="Der 34-jährige Rick Jurthe alias Ryk."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">3 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/Ryk-Oh-Boy,ryk176.html" title="Zum Audiobeitrag: Ryk: &#034;Oh Boy&#034;"  >
Ryk: "Oh Boy"
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="addmore">
<a href="#" class="add1"><span class="ndricon_plus"></span> <span class="label">Mehr anzeigen</span></a>
<a href="#" class="add2"><span class="ndricon_plus"></span> <span class="label">Mehr anzeigen</span></a>
</div>
</section>
<section class="w100">
<div class="module w25 std" data-color=col2>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/bodine102_v-thumbnailgross.jpg 128w,/bodine102_v-contentgross.jpg 568w,/bodine102_v-vierspaltig.jpg 760w,/bodine102_v-contentxl.jpg 1067w,/bodine102_v-fullhd.jpg 1920w,/bodine102_v-einspaltig.jpg 184w,/bodine102_v-contentklein.jpg 256w,/bodine102_v-anderthalbspaltig.jpg 280w,/bodine102_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/bodine102_v-contentgross.jpg" alt="Die niederländische Sängerin Bodine. &copy; NDR/Sophie van Hasselt Foto: Sophie van Hasselt" title="Die niederländische Sängerin Bodine."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Deutscher-ESC-Vorentscheid-2024-Bodine-Monet-mit-Tears-Like-Rain,bodine100.html" title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Bodine Monet mit &#034;Tears Like Rain&#034;"  >
Bodine Monet lässt die Vergangenheit los
</a>
</h2>
<div class="teasertext">
<p>
19.01.24 |
Die 23-jährige Niederländerin ist mit ihrem Song "Tears Like Rain" beim deutschen ESC-Vorentscheid 2024 dabei.
<a title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Bodine Monet mit &quot;Tears Like Rain&quot;" href="/news/Deutscher-ESC-Vorentscheid-2024-Bodine-Monet-mit-Tears-Like-Rain,bodine100.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w25 std" data-color=col7>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/max324_v-thumbnailgross.jpg 128w,/max324_v-contentgross.jpg 568w,/max324_v-vierspaltig.jpg 760w,/max324_v-contentxl.jpg 1067w,/max324_v-fullhd.jpg 1920w,/max324_v-einspaltig.jpg 184w,/max324_v-contentklein.jpg 256w,/max324_v-anderthalbspaltig.jpg 280w,/max324_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/max324_v-contentgross.jpg" alt="Der 42-jährige Sänger Max Mutzke. &copy; NDR/Gaby Gerster Foto: Gaby Gerster" title="Der 42-jährige Sänger Max Mutzke."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Deutscher-ESC-Vorentscheid-2024-Max-Mutzke-will-es-nochmal-wissen,max326.html" title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Max Mutzke will es nochmal wissen"  >
Pünktlich zum Jubiläum - Max Mutzke will es nochmal wissen
</a>
</h2>
<div class="teasertext">
<p>
27.01.24 |
Max Mutzke will es 20 Jahre nach seinem Erfolg in Istanbul noch mal wissen und ist "Forever Strong" im deutschen ESC-Vorentscheid.
<a title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Max Mutzke will es nochmal wissen" href="/news/Deutscher-ESC-Vorentscheid-2024-Max-Mutzke-will-es-nochmal-wissen,max326.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w25 std" data-color=col9>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/isaak102_v-thumbnailgross.jpg 128w,/isaak102_v-contentgross.jpg 568w,/isaak102_v-vierspaltig.jpg 760w,/isaak102_v-contentxl.jpg 1067w,/isaak102_v-fullhd.jpg 1920w,/isaak102_v-einspaltig.jpg 184w,/isaak102_v-contentklein.jpg 256w,/isaak102_v-anderthalbspaltig.jpg 280w,/isaak102_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/isaak102_v-contentgross.jpg" alt="Der 28-jährige Sänger Isaak. &copy; NDR/Valentin Ammon Foto: Valentin Ammon" title="Der 28-jährige Sänger Isaak."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Deutscher-ESC-Vorentscheid-Isaak-mit-Always-On-The-Run,isaak100.html" title="Zum Artikel: Deutscher ESC-Vorentscheid: Isaak mit &#034;Always On The Run&#034;"  >
Isaak will mit kraftvollem Sound zum ESC
</a>
</h2>
<div class="teasertext">
<p>
19.01.24 |
Mit "Always On The Run" nimmt uns Isaak im Vorentscheid auf eine Achterbahn durch seine Gedankenwelt mit.
<a title="Zum Artikel: Deutscher ESC-Vorentscheid: Isaak mit &quot;Always On The Run&quot;" href="/news/Deutscher-ESC-Vorentscheid-Isaak-mit-Always-On-The-Run,isaak100.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w25 std" data-color=col6>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/mariereim120_v-thumbnailgross.jpg 128w,/mariereim120_v-contentgross.jpg 568w,/mariereim120_v-vierspaltig.jpg 760w,/mariereim120_v-contentxl.jpg 1067w,/mariereim120_v-fullhd.jpg 1920w,/mariereim120_v-einspaltig.jpg 184w,/mariereim120_v-contentklein.jpg 256w,/mariereim120_v-anderthalbspaltig.jpg 280w,/mariereim120_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/mariereim120_v-contentgross.jpg" alt="Die 23-jährige Sängerin Marie Reim. &copy; NDR/Anelia Janeva Foto: Anelia Janeva" title="Die 23-jährige Sängerin Marie Reim."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Deutscher-ESC-Vorentscheid-2024-Marie-Reim-mit-Naiv,mariereim128.html" title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Marie Reim mit &#034;Naiv&#034;"  >
23 Jahre nach ihrer Mutter: Jetzt will Marie Reim zum ESC
</a>
</h2>
<div class="teasertext">
<p>
26.01.24 |
Schlager im Vorentscheid: "Naiv" soll Marie Reim mit deutschem Text und eingängiger Melodie zum ESC bringen.
<a title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Marie Reim mit &quot;Naiv&quot;" href="/news/Deutscher-ESC-Vorentscheid-2024-Marie-Reim-mit-Naiv,mariereim128.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w25 std" data-color=col1>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ryk162_v-thumbnailgross.jpg 128w,/ryk162_v-contentgross.jpg 568w,/ryk162_v-vierspaltig.jpg 760w,/ryk162_v-contentxl.jpg 1067w,/ryk162_v-fullhd.jpg 1920w,/ryk162_v-einspaltig.jpg 184w,/ryk162_v-contentklein.jpg 256w,/ryk162_v-anderthalbspaltig.jpg 280w,/ryk162_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/ryk162_v-contentgross.jpg" alt="Der 34-jährige Rick Jurthe alias Ryk. &copy; Welthund Music " title="Der 34-jährige Rick Jurthe alias Ryk."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Deutscher-ESC-Vorentscheid-2024-Ryk-mit-Oh-Boy,ryk164.html" title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Ryk mit &#034;Oh Boy&#034;"  >
Schafft es Ryk im zweiten Anlauf?
</a>
</h2>
<div class="teasertext">
<p>
19.01.24 |
Ryk präsentiert im Vorentscheid den Song "Oh Boy", in dem es um queere Befreiung und tiefe Freundschaft geht.
<a title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Ryk mit &quot;Oh Boy&quot;" href="/news/Deutscher-ESC-Vorentscheid-2024-Ryk-mit-Oh-Boy,ryk164.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w25 std" data-color=col8>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/galant102_v-thumbnailgross.jpg 128w,/galant102_v-contentgross.jpg 568w,/galant102_v-vierspaltig.jpg 760w,/galant102_v-contentxl.jpg 1067w,/galant102_v-fullhd.jpg 1920w,/galant102_v-einspaltig.jpg 184w,/galant102_v-contentklein.jpg 256w,/galant102_v-anderthalbspaltig.jpg 280w,/galant102_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/galant102_v-contentgross.jpg" alt="Das Electropop-Duo Galant. &copy; NDR/Magdalena Dauber Foto: Magdalena Dauber" title="Das Electropop-Duo Galant."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Deutscher-ESC-Vorentscheid-2024-Galant-mit-Katze,galant100.html" title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Galant mit &#034;Katze&#034;"  >
Galant: Es wird tierisch im deutschen ESC-Vorentscheid
</a>
</h2>
<div class="teasertext">
<p>
25.01.24 |
Sprechgesang mit ausgefahrenen Krallen: Die Electropop-Gruppe Galant tritt im Vorentscheid mit dem Song "Katze" an.
<a title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Galant mit &quot;Katze&quot;" href="/news/Deutscher-ESC-Vorentscheid-2024-Galant-mit-Katze,galant100.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w25 std" data-color=col9>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/leona124_v-thumbnailgross.jpg 128w,/leona124_v-contentgross.jpg 568w,/leona124_v-vierspaltig.jpg 760w,/leona124_v-contentxl.jpg 1067w,/leona124_v-fullhd.jpg 1920w,/leona124_v-einspaltig.jpg 184w,/leona124_v-contentklein.jpg 256w,/leona124_v-anderthalbspaltig.jpg 280w,/leona124_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/leona124_v-contentgross.jpg" alt="Die 20-jährige Sängerin Leona. &copy; NDR/Jasper Grätsch Foto: Jasper Grätsch" title="Die 20-jährige Sängerin Leona."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Deutscher-ESC-Vorentscheid-2024-Leona-mit-Undream-You,leona132.html" title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Leona mit &#034;Undream You&#034;"  >
Leona träumt sich mit "Undream You" zum ESC 2024
</a>
</h2>
<div class="teasertext">
<p>
27.01.24 |
Leona ist Musikerin durch und durch. Einen Plan B gab es für sie nie. Mit "Undream You" geht sie in den deutschen ESC-Vorentscheid.
<a title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: Leona mit &quot;Undream You&quot;" href="/news/Deutscher-ESC-Vorentscheid-2024-Leona-mit-Undream-You,leona132.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w25 std" data-color=col3>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ninetynine102_v-thumbnailgross.jpg 128w,/ninetynine102_v-contentgross.jpg 568w,/ninetynine102_v-vierspaltig.jpg 760w,/ninetynine102_v-contentxl.jpg 1067w,/ninetynine102_v-fullhd.jpg 1920w,/ninetynine102_v-einspaltig.jpg 184w,/ninetynine102_v-contentklein.jpg 256w,/ninetynine102_v-anderthalbspaltig.jpg 280w,/ninetynine102_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/ninetynine102_v-contentgross.jpg" alt="Der 24-jährige Sänger NinetyNine. &copy; NDR/Laura Köhler Foto: Laura Köhler" title="Der 24-jährige Sänger NinetyNine."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Deutscher-ESC-Vorentscheid-2024-NinetyNine-mit-Love-On-A-Budget,ninetynine108.html" title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: NinetyNine mit &#034;Love On A Budget&#034;"  >
NinetyNine über die Liebe mit schmalem Portemonnaie
</a>
</h2>
<div class="teasertext">
<p>
25.01.24 |
"Love On A Budget": Lieber Schmetterlinge im Bauch, als Dollarzeichen im Auge. So will NinetyNine zum ESC in Malmö.
<a title="Zum Artikel: Deutscher ESC-Vorentscheid 2024: NinetyNine mit &quot;Love On A Budget&quot;" href="/news/Deutscher-ESC-Vorentscheid-2024-NinetyNine-mit-Love-On-A-Budget,ninetynine108.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100">
<h1>
<span>ESC 2024</span>
</h1>
<div class="module w33 std" data-color=col9>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/buehne690_v-thumbnailgross.jpg 128w,/news/buehne690_v-contentgross.jpg 568w,/news/buehne690_v-vierspaltig.jpg 760w,/news/buehne690_v-contentxl.jpg 1067w,/news/buehne690_v-fullhd.jpg 1920w,/news/buehne690_v-einspaltig.jpg 184w,/news/buehne690_v-contentklein.jpg 256w,/news/buehne690_v-anderthalbspaltig.jpg 280w,/news/buehne690_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/news/buehne690_v-contentgross.jpg" alt="Das Bühnendesign des Eurovision Song Contest 2024 in Schweden. &copy; EBU " title="Das Bühnendesign des Eurovision Song Contest 2024 in Schweden."  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Alle-Infos-zum-Eurovision-Song-Contest-2024-in-Schweden,schweden1866.html" title="Zum Artikel: Alle Infos zum Eurovision Song Contest 2024 in Schweden"  >
Alle Infos zum Eurovision Song Contest 2024 in Schweden
</a>
</h2>
<div class="teasertext">
<p>
07.02.24 |
Der 68. Eurovision Song Contest findet im Mai in Malmö statt. Alle Infos zu den Terminen und teilnehmenden Ländern.
<a title="Zum Artikel: Alle Infos zum Eurovision Song Contest 2024 in Schweden" href="/news/Alle-Infos-zum-Eurovision-Song-Contest-2024-in-Schweden,schweden1866.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w33 std" data-color=col9>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/ticket111_v-thumbnailgross.jpg 128w,/ticket111_v-contentgross.jpg 568w,/ticket111_v-vierspaltig.jpg 760w,/ticket111_v-contentxl.jpg 1067w,/ticket111_v-einspaltig.jpg 184w,/ticket111_v-contentklein.jpg 256w,/ticket111_v-anderthalbspaltig.jpg 280w,/ticket111_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/ticket111_v-contentgross.jpg" alt="Tickets für den ESC (Montage) &copy; dpa, fotolia Foto: Visual Concepts, Jan-Peter Kasper" title="Tickets für den ESC (Montage)"  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Tickets-fuer-den-ESC-2024-in-Malmoe,tickets616.html" title="Zum Artikel: Tickets für den ESC 2024 in Malmö"  >
Tickets für den ESC 2024 in Malmö
</a>
</h2>
<div class="teasertext">
<p>
08.01.24 |
Die Karten können nur online bestellt werden und kosten zwischen 13 und 330 Euro. Einige Shows sind derzeit schon ausverkauft.
<a title="Zum Artikel: Tickets für den ESC 2024 in Malmö" href="/news/Tickets-fuer-den-ESC-2024-in-Malmoe,tickets616.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w33 std" data-color=col5>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/logo1862_v-thumbnailgross.jpg 128w,/news/logo1862_v-contentgross.jpg 568w,/news/logo1862_v-vierspaltig.jpg 760w,/news/logo1862_v-contentxl.jpg 1067w,/news/logo1862_v-fullhd.jpg 1920w,/news/logo1862_v-einspaltig.jpg 184w,/news/logo1862_v-contentklein.jpg 256w,/news/logo1862_v-anderthalbspaltig.jpg 280w,/news/logo1862_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/news/logo1862_v-contentgross.jpg" alt="Das Logo des Eurovision Song Contest 2024 in Malmö. &copy; EBU Foto: Werner Nystrand / Folio / imagebank.sweden.se" title="Das Logo des Eurovision Song Contest 2024 in Malmö."  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Online-oder-TV-Alle-Sendungen-zum-Eurovision-Song-Contest-2024,sendetermine514.html" title="Zum Artikel: Online oder TV? Alle Sendungen zum Eurovision Song Contest 2024"  >
Online oder TV? Alle Sendungen zum Eurovision Song Contest 2024
</a>
</h2>
<div class="teasertext">
<p>
08.02.24 |
Zum ESC 2024 gibt es viele Shows und Livestreams online, im TV und Radio. Mit dem deutschen Vorentscheid geht es los.
<a title="Zum Artikel: Online oder TV? Alle Sendungen zum Eurovision Song Contest 2024" href="/news/Online-oder-TV-Alle-Sendungen-zum-Eurovision-Song-Contest-2024,sendetermine514.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100">
<div class="module w33 std" data-color=col2>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/logo1802_v-thumbnailgross.jpg 128w,/news/logo1802_v-contentgross.jpg 568w,/news/logo1802_v-vierspaltig.jpg 760w,/news/logo1802_v-contentxl.jpg 1067w,/news/logo1802_v-fullhd.jpg 1920w,/news/logo1802_v-einspaltig.jpg 184w,/news/logo1802_v-contentklein.jpg 256w,/news/logo1802_v-anderthalbspaltig.jpg 280w,/news/logo1802_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/news/logo1802_v-contentgross.jpg" alt="Das Logo des Eurovision Song Contest 2023 mit dem Slogan &#034;United By Music&#034;. &copy; EBU/BBC Foto: EBU/BBC" title="Das Logo des Eurovision Song Contest 2023 mit dem Slogan &#034;United By Music&#034;."  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Das-ESC-Motto-United-By-Music-bleibt-bestehen,motto118.html" title="Zum Artikel: Das ESC-Motto &#034;United By Music&#034; bleibt bestehen"  >
Das ESC-Motto "United By Music" bleibt bestehen
</a>
</h2>
<div class="teasertext">
<p>
14.11.23 |
Der ESC in Malmö steht schon wie der in Liverpool unter dem Slogan "United By Music". Künftig tragen alle Wettbewerbe dieses Motto.
<a title="Zum Artikel: Das ESC-Motto &quot;United By Music&quot; bleibt bestehen" href="/news/Das-ESC-Motto-United-By-Music-bleibt-bestehen,motto118.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w33 std" data-color=col4>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/publikum212_v-thumbnailgross.jpg 128w,/news/publikum212_v-contentgross.jpg 568w,/news/publikum212_v-vierspaltig.jpg 760w,/news/publikum212_v-contentxl.jpg 1067w,/news/publikum212_v-fullhd.jpg 1920w,/news/publikum212_v-einspaltig.jpg 184w,/news/publikum212_v-contentklein.jpg 256w,/news/publikum212_v-anderthalbspaltig.jpg 280w,/news/publikum212_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/news/publikum212_v-contentgross.jpg" alt="Zwei Fans haben sich maskiert und verkleidet. &copy; Eurovision.tv Foto: Andres Putting" title="Zwei Fans haben sich maskiert und verkleidet."  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/Partys-und-Public-Viewings-zum-ESC-2024-in-Malmoe,partyplaner126.html" title="Zum Artikel: Partys und Public Viewings zum ESC 2024 in Malmö"  >
Partys und Public Viewings zum ESC 2024 in Malmö
</a>
</h2>
<div class="teasertext">
<p>
05.02.24 |
Zum ESC finden auch viele Public Viewings statt. Veranstalter müssen ihre Events hier anmelden und einige Punkte beachten.
<a title="Zum Artikel: Partys und Public Viewings zum ESC 2024 in Malmö" href="/news/Partys-und-Public-Viewings-zum-ESC-2024-in-Malmoe,partyplaner126.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="module w33 std" data-color=col7>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/malmoe111_v-thumbnailgross.jpg 128w,/malmoe111_v-contentgross.jpg 568w,/malmoe111_v-vierspaltig.jpg 760w,/malmoe111_v-contentxl.jpg 1067w,/malmoe111_v-einspaltig.jpg 184w,/malmoe111_v-contentklein.jpg 256w,/malmoe111_v-anderthalbspaltig.jpg 280w,/malmoe111_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/malmoe111_v-contentgross.jpg" alt="Rathaus von Malmö, Südschweden. &copy; dpa Foto: F. Scholz" title="Rathaus von Malmö, Südschweden."  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/news/ESC-2024-Stadtportraet-von-Malmoe,malmoe125.html" title="Zum Artikel: Stadtporträt von Malmö"  >
Stadtporträt von Malmö
</a>
</h2>
<div class="teasertext">
<p>
07.07.23 |
Größter Wolkenkratzer, längste Brücke, Kulturmetropole Schwedens: Malmö ist eine Stadt der Superlative - und grün dazu.
<a title="Zum Artikel: Stadtporträt von Malmö" href="/news/ESC-2024-Stadtportraet-von-Malmoe,malmoe125.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100 mediacollection teasergroup autorelated">
<h1>
<span>Podcasts ESC Update</span>
</h1>
<div class="module w50 list" data-color=col9>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/teilnehmer/vorentscheid1114_v-ardteaser.jpg 120w,/teilnehmer/vorentscheid1114_v-content.jpg 192w,/teilnehmer/vorentscheid1114_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/teilnehmer/vorentscheid1114_v-thumbnailgross.jpg 128w,/teilnehmer/vorentscheid1114_v-contentgross.jpg 568w,/teilnehmer/vorentscheid1114_v-vierspaltig.jpg 760w,/teilnehmer/vorentscheid1114_v-contentxl.jpg 1067w,/teilnehmer/vorentscheid1114_v-fullhd.jpg 1920w,/teilnehmer/vorentscheid1114_v-einspaltig.jpg 184w,/teilnehmer/vorentscheid1114_v-contentklein.jpg 256w,/teilnehmer/vorentscheid1114_v-anderthalbspaltig.jpg 280w,/teilnehmer/vorentscheid1114_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/teilnehmer/vorentscheid1114_v-contentgross.jpg" alt="Die Teilnehmer des deutschen ESC-Vorentscheids 2024. &copy; NDR/diverse Foto: Jasper Grätsch, Sophie van Hasselt, Anelia Janeva, Eddi Bachmann, Valentin Ammann, Gaby Gerster, Leo Dorian Stiebeling, Welthund Music" title="Die Teilnehmer des deutschen ESC-Vorentscheids 2024."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">66 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://www.ndr.de/ndrblue/Diese-acht-Acts-stehen-im-deutschen-ESC-Vorentscheid,audio1553624.html" title="Zum Audiobeitrag: Diese acht Acts stehen im deutschen ESC-Vorentscheid"  >
Diese acht Acts stehen im deutschen ESC-Vorentscheid
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col6>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-ardteaser.jpg 120w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-content.jpg 192w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-thumbnailgross.jpg 128w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-contentgross.jpg 568w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-vierspaltig.jpg 760w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-contentxl.jpg 1067w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-fullhd.jpg 1920w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-einspaltig.jpg 184w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-contentklein.jpg 256w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-anderthalbspaltig.jpg 280w,https://www.n-joy.de/events/starshow/ssyearsandyears110_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="https://www.n-joy.de/events/starshow/ssyearsandyears110_v-contentgross.jpg" alt="Years &amp; Years auf der N-JOY Starshow 2016. &copy; NDR Foto: Axel Herzig" title="Years &amp; Years auf der N-JOY Starshow 2016."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">59 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://www.ndr.de/ndrblue/Promis-beim-ESC-Olly-Alexander-und-Joost-Klein-treten-2024-an,audio1532986.html" title="Zum Audiobeitrag: Promis beim ESC: Olly Alexander und Joost Klein treten 2024 an"  >
Promis beim ESC: Olly Alexander und Joost Klein treten 2024 an
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col9>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/teilnehmer/annsophie308_v-ardteaser.jpg 120w,/teilnehmer/annsophie308_v-content.jpg 192w,/teilnehmer/annsophie308_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/teilnehmer/annsophie308_v-thumbnailgross.jpg 128w,/teilnehmer/annsophie308_v-contentgross.jpg 568w,/teilnehmer/annsophie308_v-vierspaltig.jpg 760w,/teilnehmer/annsophie308_v-contentxl.jpg 1067w,/teilnehmer/annsophie308_v-einspaltig.jpg 184w,/teilnehmer/annsophie308_v-contentklein.jpg 256w,/teilnehmer/annsophie308_v-anderthalbspaltig.jpg 280w,/teilnehmer/annsophie308_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/teilnehmer/annsophie308_v-contentgross.jpg" alt="Die Waden und schwarzen Schuhe von Sängerin Ann Sophie, die auf der mit goldenem Konfetti bedeckten Bühne des deutschen ESC-Vorentscheids steht. &copy; NDR Foto: Rolf Klatt" title="Die Waden und schwarzen Schuhe von Sängerin Ann Sophie, die auf der mit goldenem Konfetti bedeckten Bühne des deutschen ESC-Vorentscheids steht."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">60 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://www.ndr.de/ndrblue/Wer-hat-sich-fuer-den-deutschen-ESC-Vorentscheid-beworben,audio1495804.html" title="Zum Audiobeitrag: Wer hat sich für den deutschen ESC-Vorentscheid beworben?"  >
Wer hat sich für den deutschen ESC-Vorentscheid beworben?
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col2>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/kaeaerijae102_v-ardteaser.jpg 120w,/news/kaeaerijae102_v-content.jpg 192w,/news/kaeaerijae102_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/kaeaerijae102_v-thumbnailgross.jpg 128w,/news/kaeaerijae102_v-contentgross.jpg 568w,/news/kaeaerijae102_v-vierspaltig.jpg 760w,/news/kaeaerijae102_v-contentxl.jpg 1067w,/news/kaeaerijae102_v-fullhd.jpg 1920w,/news/kaeaerijae102_v-einspaltig.jpg 184w,/news/kaeaerijae102_v-contentklein.jpg 256w,/news/kaeaerijae102_v-anderthalbspaltig.jpg 280w,/news/kaeaerijae102_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/news/kaeaerijae102_v-contentgross.jpg" alt="Das sich in der Fertigstellung befindende Wandgemälde von Käärijä in Vantaa. &copy; NDR Foto: Daniel Kähler" title="Das sich in der Fertigstellung befindende Wandgemälde von Käärijä in Vantaa."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">59 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://www.ndr.de/ndrblue/ESC-Zweiter-Kaeaerijae-sorgt-weiter-fuer-Hype-in-Finnland,audio1476808.html" title="Zum Audiobeitrag: ESC-Zweiter Käärijä sorgt weiter für Hype in Finnland"  >
ESC-Zweiter Käärijä sorgt weiter für Hype in Finnland
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col5>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/malmoe226_v-ardteaser.jpg 120w,/news/malmoe226_v-content.jpg 192w,/news/malmoe226_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/malmoe226_v-thumbnailgross.jpg 128w,/news/malmoe226_v-contentgross.jpg 568w,/news/malmoe226_v-vierspaltig.jpg 760w,/news/malmoe226_v-contentxl.jpg 1067w,/news/malmoe226_v-fullhd.jpg 1920w,/news/malmoe226_v-einspaltig.jpg 184w,/news/malmoe226_v-contentklein.jpg 256w,/news/malmoe226_v-anderthalbspaltig.jpg 280w,/news/malmoe226_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/news/malmoe226_v-contentgross.jpg" alt="Der Turning Torso in Malmö. &copy; NDR Foto: Marcel Stober" title="Der Turning Torso in Malmö."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">60 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://www.ndr.de/ndrblue/Auf-nach-Malmoe-So-sehenswert-ist-die-ESC-Stadt-2024,audio1431460.html" title="Zum Audiobeitrag: Auf nach Malmö! So sehenswert ist die ESC-Stadt 2024"  >
Auf nach Malmö! So sehenswert ist die ESC-Stadt 2024
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="module w50 list" data-color=col3>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/peterurban145_v-ardteaser.jpg 120w,/peterurban145_v-content.jpg 192w,/peterurban145_v-gallery.jpg 400w" sizes="1px" media='(max-width: 40em)'>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/peterurban145_v-thumbnailgross.jpg 128w,/peterurban145_v-contentgross.jpg 568w,/peterurban145_v-vierspaltig.jpg 760w,/peterurban145_v-contentxl.jpg 1067w,/peterurban145_v-einspaltig.jpg 184w,/peterurban145_v-contentklein.jpg 256w,/peterurban145_v-anderthalbspaltig.jpg 280w,/peterurban145_v-zweispaltig.jpg 376w" sizes="1px" media='(min-width: 40em)'>
<img src="/peterurban145_v-contentgross.jpg" alt="Peter Urban in der Arena in Malmö. &copy; NDR Foto: Rolf Klatt" title="Peter Urban in der Arena in Malmö."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="mediaduration">56 Min</span><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="https://www.ndr.de/ndrblue/Peter-Urban-waehlt-seine-Hits-der-ESC-Geschichte,audio1367758.html" title="Zum Audiobeitrag: Peter Urban wählt seine Hits der ESC-Geschichte"  >
Peter Urban wählt seine Hits der ESC-Geschichte
</a>
</h2>
<div class="teasertext">
</div>
</div>
</div>
</div>
</div>
<div class="addmore">
<a href="#" class="add1"><span class="ndricon_plus"></span> <span class="label">Mehr anzeigen</span></a>
<a href="#" class="add2"><span class="ndricon_plus"></span> <span class="label">Mehr anzeigen</span></a>
</div>
</section>
<section class="w100">
<div class="module w100 list" data-color=col9>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/news/escupdate166_v-thumbnailgross.jpg 128w,/news/escupdate166_v-contentgross.jpg 568w,/news/escupdate166_v-vierspaltig.jpg 760w,/news/escupdate166_v-contentxl.jpg 1067w,/news/escupdate166_v-fullhd.jpg 1920w,/news/escupdate166_v-einspaltig.jpg 184w,/news/escupdate166_v-contentklein.jpg 256w,/news/escupdate166_v-anderthalbspaltig.jpg 280w,/news/escupdate166_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/news/escupdate166_v-contentgross.jpg" alt="Die ESC Update Moderatoren Marcel Stober und Thomas Mohr. &copy; NDR Foto: Niklas Kusche" title="Die ESC Update Moderatoren Marcel Stober und Thomas Mohr."  class="responsive"/>
</picture>
<div class="textpadding media"><span class="ndricon_audio-filled"></span></div>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/escupdate/index.html" title="Zum Artikel: Podcast: ESC Update"  >
Podcast: ESC Update
</a>
</h2>
<div class="teasertext">
<p>
08.02.24 |
Mindestens einmal im Monat geht es in ESC Update mit Thomas Mohr und Marcel Stober um den Eurovision Song Contest.
<a title="Zum Artikel: Podcast: ESC Update" href="/escupdate/index.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="w100">
<div class="module w100 list" data-color=col1>
<div class="modulepadding">
<div class="teaser" >
<div class="teaserimage">
<div class="image-container">
<picture>
<source type="image/jpeg" srcset="/resources/images/placeholder.png 8w,/flaggeesc277_v-thumbnailgross.jpg 128w,/flaggeesc277_v-contentgross.jpg 568w,/flaggeesc277_v-vierspaltig.jpg 760w,/flaggeesc277_v-einspaltig.jpg 184w,/flaggeesc277_v-contentklein.jpg 256w,/flaggeesc277_v-anderthalbspaltig.jpg 280w,/flaggeesc277_v-zweispaltig.jpg 376w" sizes="1px" >
<img src="/flaggeesc277_v-contentgross.jpg" alt="Flagge Fahne esc ESC Kroatien &copy; Fotolia.com Foto: © Frederic - Fotolia.com" title="Flagge Fahne esc ESC Kroatien"  class="responsive"/>
</picture>
</div>
</div>
<div class="teaserpadding">
<h2>
<a href="/laender/flaggenraten102.html" title="Zum Artikel: Zeig mir deine Farben und ich sag dir, wer du bist"  >
Zeig mir deine Farben und ich sag dir, wer du bist
</a>
</h2>
<div class="teasertext">
<p>
Die Farben von Deutschland, Großbritannien oder Italien kennen die meisten. Doch wie sieht es mit anderen Ländern aus? Testet euer Flaggenwissen!
<a title="Zum Artikel: Zeig mir deine Farben und ich sag dir, wer du bist" href="/laender/flaggenraten102.html" class="cta " >mehr</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="columnedlist">
<h1>
<span>Podcast, Newsletter und Co.</span>
</h1>
<ul class="column w100">
<li>
<a href="https://www.ndr.de/ndrblue/podcast4934.html" title="Zum Podcast: ESC Update"  >ESC Update hören</a>
</li>
<li>
<a href="/Eurovision-Song-Contest-Newsletter,newsletter851.html" title="Zum Artikel: ESC-Newsletter"  >ESC-Newsletter</a>
</li>
<li>
<a href="/Das-Team-von-eurovisionde,wirueberuns149.html" title="Zum Artikel: Das Team von eurovision.de"  >Das Team von eurovision.de</a>
</li>
<li>
<a href="/news/ESC-Spiel-Welche-Bilderpaare-gehoeren-zusammen,bildpaare100.html" title="Zum Artikel: ESC-Spiel: Welche Bilderpaare gehören zusammen?"  >ESC-Spiel: Welche Bilderpaare gehören zusammen?</a>
</li>
<li>
<a href="/geschichte/escquiz107.html" title="Zum Quiz: Teste dich: Das große ESC-Quiz"  >Teste dich: Das große ESC-Quiz</a>
</li>
</ul>
</section>
</div>
<div class="container w100">
</div>
</div>
</div>
<div class="breadcrumb">
<ul>
<li><a href="/">Eurovision.de</a></li>
</ul>
</div>
<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [{
"@type": "ListItem",
"position": 1,
"name": "Eurovision.de",
"item": "https://www.eurovision.de/"
}
]
}
</script>
<div id="footer">
<div class="pagepadding">
<div class="module footerblock w25">
<div class="modulepadding">
<h2>ESC 2024 in Malmö</h2>
<ul>
<li><a href="/news/Alle-Infos-zum-Eurovision-Song-Contest-2024-in-Schweden,schweden1866.html" title="Zum Artikel: Alle Infos zum ESC 2024"  >Alle Infos zum ESC 2024</a></li>
<li><a href="/teilnehmer/index.html" title="Zum Artikel: Acts und Länder beim ESC 2024"  >Acts und Länder beim ESC 2024</a></li>
<li><a href="/news/ESC-2024-Stadtportraet-von-Malmoe,malmoe125.html" title="Zum Artikel: ESC-Stadt Malmö"  >ESC-Stadt Malmö</a></li>
</ul>
</div>
</div>
<div class="module footerblock w25">
<div class="modulepadding">
<h2>Deutschland</h2>
<ul>
<li><a href="/laender/ESC-Land-Deutschland-Teilnehmer-Ergebnisse-und-Infos,deutschland600.html" title="Zum Artikel: ESC-Land Deutschland"  >ESC-Land Deutschland</a></li>
<li><a href="/zahlenspiele/Alle-Ergebnisse-fuer-Deutschland-beim-ESC,deutschland744.html" title="Zum Artikel: Alle deutschen Ergebnisse"  >Alle deutschen Ergebnisse</a></li>
<li><a href="/teilnehmer/Alle-deutschen-ESC-Acts-und-ihre-Titel,vorentscheid386.html" title="Zum Artikel: Deutsche ESC-Acts und Titel"  >Deutsche ESC-Acts und Titel</a></li>
<li><a href="/vorentscheid/Deutscher-ESC-Vorentscheid-Moderatoren-von-1960-bis-heute,uebersichtmoderatoren100.html" title="Zum Artikel: Vorentscheid: Alle Moderatoren"  >Vorentscheid: Alle Moderatoren</a></li>
<li><a href="/teilnehmer/Lena-Meyer-Landrut-Die-ESC-Siegerin-von-Oslo,lena429.html" title="Zum Artikel: Siegerin 2010: Lena"  >Siegerin 2010: Lena</a></li>
<li><a href="/teilnehmer/Nicole-Biografie-der-deutschen-ESC-Siegerin,nicole221.html" title="Zum Artikel: Siegerin 1982: Nicole"  >Siegerin 1982: Nicole</a></li>
</ul>
</div>
</div>
<div class="module footerblock w25">
<div class="modulepadding">
<h2>Themen</h2>
<ul>
<li><a href="/thema158.html" title="Zum Artikel: Themen A-Z"  >Themen A-Z</a></li>
<li><a href="/news/European-Broadcasting-Union-EBU,ebu114.html" title="Zum Artikel: EBU"  >EBU</a></li>
<li><a href="https://www.ndr.de/ndrblue/podcast4934.html" title="Zum Podcast: ESC Update"  >Podcast: ESC Update</a></li>
<li><a href="/geschichte/kurioses100.html" title="Zum Artikel: Kurioses"  >Kurioses</a></li>
<li><a href="/teilnehmer/mode/index.html" title="Zum Artikel: Mode"  >Mode</a></li>
<li><a href="/laender/wolthers_welt/index.html" title="Zum Artikel: Wolthers Welt"  >Wolthers Welt</a></li>
</ul>
</div>
</div>
<div class="module footerblock w25">
<div class="modulepadding">
<h2>Übersichten</h2>
<ul>
<li><a href="/geschichte/Alle-Infos-zum-Eurovision-Song-Contest,esc3098.html" title="Zum Artikel: Regeln und Infos zum ESC"  >Regeln und Infos zum ESC</a></li>
<li><a href="/zahlenspiele/zahlenzauber102.html" title="Zum Artikel: Die erfolgreichsten ESC-Länder"  >Die erfolgreichsten ESC-Länder</a></li>
<li><a href="/teilnehmer/Alle-ESC-Gewinner-von-1956-bis-heute,gewinner380.html" title="Zum Artikel: Alle Gewinner bis heute"  >Alle Gewinner bis heute</a></li>
<li><a href="/Ergebnisse-aller-Teilnehmerlaender-am-ESC,ergebnisse642.html" title="Zum Artikel: Ergebnisse aller Länder"  >Ergebnisse aller Länder</a></li>
<li><a href="/videos/2023/index.html" title="Zum Artikel: 2023: Videos aus Liverpool"  >2023: Videos aus Liverpool</a></li>
<li><a href="/videos/2022/index.html" title="Zum Artikel: 2022: Videos aus Turin"  >2022: Videos aus Turin</a></li>
<li><a href="/videos/2021/index.html" title="Zum Artikel: 2021: Videos aus Rotterdam"  >2021: Videos aus Rotterdam</a></li>
<li><a href="/videos/2019/index.html" title="Zum Artikel: 2019: Videos aus Tel Aviv"  >2019: Videos aus Tel Aviv</a></li>
<li><a href="/videos/2018/index.html" title="Zum Artikel: 2018: Videos aus Lissabon"  >2018: Videos aus Lissabon</a></li>
<li><a href="/videos/2017/index.html" title="Zum Artikel: 2017: Videos aus Kiew"  >2017: Videos aus Kiew</a></li>
<li><a href="/videos/2016/index.html" title="Zum Artikel: 2016: Videos aus Stockholm"  >2016: Videos aus Stockholm</a></li>
<li><a href="/videos/2015-Videos-vom-ESC-in-Wien,wien916.html" title="Zum Artikel: 2015: Videos aus Wien"  >2015: Videos aus Wien</a></li>
<li><a href="/videos/Videos-ESC-2014,kopenhagen344.html" title="Zum Artikel: 2014: Videos aus Kopenhagen"  >2014: Videos aus Kopenhagen</a></li>
</ul>
</div>
</div>
</div>
<div class="module footerblock metanav">
<div class="pagepadding">
<ul id="social_footer">
<li>
<a target="_blank" title="Eurovision bei Facebook" href="//www.facebook.com/EurovisionDE" aria-label="Eurovision bei Facebook"><span class="icon icon_facebook"></span><span class="srlabel">Eurovision bei Facebook</span></a>
</li>
<li>
<a target="_blank" title="Eurovision bei Youtube" href="//www.youtube.com/user/esc" aria-label="Eurovision bei Youtube"><span class="icon icon_youtube"></span><span class="srlabel">Eurovision bei Youtube</span></a>
</li>
<li>
<a target="_blank" title="Eurovision bei Instagram" href="//www.instagram.com/eurovision_de/" aria-label="Eurovision bei Instagram"><span class="icon icon_instagram"></span><span class="srlabel">Eurovision bei Instagram</span></a>
</li>
<li>
<a target="_blank" title="Eurovision bei Tiktok" href="//www.tiktok.com/@eurovision_de" aria-label="Eurovision bei Tiktok"><span class="icon icon_tiktok"></span><span class="srlabel">Eurovision bei Tiktok</span></a>
</li>
</ul>
<ul>
<li><a href="/impressum115.html" title="Impressum">Impressum</a></li>
<li><a href="/kontakt355.html" title="Kontakt">Kontakt</a></li>
<li><a href="/event285.html" title="FAQs">FAQs</a></li>
<li><a href="/datenschutz346.html" title="Datenschutzerkl&auml;rung">Datenschutzerkl&auml;rung</a></li>
<li><a href="javascript:showCopyrights();" id="imagecopyright">Bildrechte</a></li>
<li><a href="http://www.ard.de" title="ARD.de" rel="noopener">ARD.de</a></li>
<li id="copy">&copy; Norddeutscher Rundfunk</li>
</ul>
</div>
<script type="text/javascript" src="/common/resources/lib/baselib.js?gen=1910" defer></script>
<script type="text/javascript" src="/resources/scripts/scripts.js?gen=1910" defer></script>
<script type='text/javascript'>
var getCookie = function (name) {
var value = "; " + document.cookie;
var parts = value.split("; " + name + "=");
if (parts.length === 2) return parts.pop().split(";").shift();
};
var cookieVal = getCookie('ndrEmbeds');
var substring = "tracking";
if ((decodeURIComponent(cookieVal).indexOf(substring) === -1) && (typeof pa != 'undefined')) {
if (typeof basicPianoJSON === 'undefined') {
var path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
pathArray = path.split( '/' );
if (pathArray[2] === undefined) pathArray[2] = "";
if (pathArray[3] === undefined) pathArray[3] = "";
if (pathArray[4] === undefined) pathArray[4] = "";
if (false) {
pathArray[1] = 'notfound';
pathArray[2] = '';
pathArray[3] = '';
pathArray[4] = '';
}
var basicPianoJSON =
{
'site': 'NDR Online',
'site_id': 595937,
'site_level2': 'eurovision.de',
'product_distribution': 'Web',
'product_login': false,
'page': 'Eurovision Song Contest - Alles zum ESC', // Event properties
'page_chapter1': pathArray[1],
'page_chapter2': pathArray[2],
'page_chapter3': pathArray[3],
'page_chapter4': pathArray[4],
'page_lra': 'NDR',
'page_show': '', // Sendereihe
'page_show_id': 1440,
'page_brand': 'daserste',
'page_crossbrand': '',
'page_broadcast_reference': 'Ja',
'page_categories': 'Grand Prix|ESC|Eurovision Song Contest|deutscher Vorentscheid|EBU|Wettbewerb|Musik|Pop|Rock|Festival|Europa|Junior ESC',
'page_url_full': document.location.href,
'page_contains_video': false,
'page_contains_audio': false,
'content_object_type': 'story',
'content_content_type': 'Index',
'content_tracking': '',
'content_tracking_id': 0,
'content_id': 'homepage1414',
'content_url_path': document.location.pathname,
'content_import_id': '14dbff88-a5ec-45c9-811b-f9c09f0317b8',
'd:content_publication_time': "",
'd:content_last_editoral_update': "2024-02-08T22:56:55Z",
'content_days_since_publication': 0,
'technical_user_agent': window.navigator.userAgent,
'technical_previous_url': document.referrer,
'user_logged_in': false
};
}
pa.setConfigurations ({
'site': 595937,
'collectDomain': 'https://log.xiti.com'
});
pa.sendEvent('page.display', basicPianoJSON); // Event name
function clickDownload(downloadUrl) {
var filename = downloadUrl.split("/").pop();
var targetId = filename.split('.')[0];
pa.setProperty('click', 'Download');
pa.setProperty('click_target_id', targetId);
pa.setProperty('click_target_url', downloadUrl);
pa.sendEvent('click', basicPianoJSON);
}
document.querySelectorAll("a[title^='Download'], a.download").forEach((link)=> {
link.addEventListener("click",
function() {
clickDownload(link.getAttribute("href"))
},
false
);
});
}
var atilevel1 = '595937';
var bra = 'daserste';
var fpdt = '';
var pdt = '2024-02-08T22:56:55Z';
var ageInDays = '0';
var sid = '1440';
var bundesland = '';
var bundeslandId = '0';
var tags = 'Grand Prix|ESC|Eurovision Song Contest|deutscher Vorentscheid|EBU|Wettbewerb|Musik|Pop|Rock|Festival|Europa|Junior ESC';
var uuid = '14dbff88-a5ec-45c9-811b-f9c09f0317b8';
var sophoraID = 'homepage1414';
var pageTitle = 'Eurovision Song Contest - Alles zum ESC';
var objectType = 'story';
var atiLevel2 = 'eurovision.de';
var contentType = 'Index';
var distribution = 'Web';
var sendungsbezug = 'Ja';
var marke = '';
</script>
</div>
</div>
</body>
</html>

