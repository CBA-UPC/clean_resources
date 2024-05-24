'use strict';window.fifabAlready||(window.fifabAlready=!0,function(){var a=sessionStorage;window.fi_fab=function(d){return new Promise(function(h,k){var l=0,r=d||1E3,p=function(){return"1"==a.getItem("fi_ab")?!0:"0"==a.getItem("fi_ab")?!1:null},n=setInterval(function(){null!==p()?(clearInterval(n),h({adblock:"0"==a.getItem("fi_ab")?!1:!0,acceptableAds:"0"==a.getItem("fi_aa")?!1:!0})):++l>r/10&&(clearInterval(n),k("AdBlockTimeout"))},10);null!==p()&&(clearInterval(n),h({adblock:"0"==a.getItem("fi_ab")?
!1:!0,acceptableAds:"0"==a.getItem("fi_aa")?!1:!0}))})};(function(d,h,k){var l=function(e,f){var b=!1;return Promise.race([function(g){return new Promise(function(c,q){var m=document.createElement("img");m.style.display="none";var x=function(){m.removeEventListener("error",v);m.removeEventListener("load",w)};var v=function(A){x();b||(b=!0,c(1))};var w=function(A){x();b||(b=!0,c(0))};m.addEventListener("error",function(){v()});m.addEventListener("load",function(){w()});m.src=g;(d.document.body||d.document.documentElement).appendChild(m)})}(e),
new Promise(function(g,c){setTimeout(function(){b||(b=!0,c("Image ("+e+") wait timeout: did not return within "+f+"ms"))},f)})])},r=function(e){return new Promise(function(f,b){b=function(g){this._options={loopCheckTime:50,loopMaxNumber:10,btClass:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",btStyle:"width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"};this._var={bt:null,
checking:!1,loop:null,to1:null,to2:null,loopNumber:0,cb:k};var c=this;c._var.to1=setTimeout(function(){var q=document.createElement("div");q.setAttribute("class",c._options.btClass);q.setAttribute("style",c._options.btStyle);c._var.bt=d.document.body.appendChild(q);c._var.to2=setTimeout(function(){c.check()},1)},1)};b.prototype._options=null;b.prototype._var=null;b.prototype._bt=null;b.prototype.cleanUp=function(){try{clearInterval(this._var.loop),clearTimeout(this._var.to1),clearTimeout(this._var.to2),
d.document.body.removeChild(this._var.bt)}catch(g){}};b.prototype.check=function(){this._var.checking=!0;var g=this;this._var.loopNumber=0;this._var.loop=setInterval(function(){g._checkBait(!0)},this._options.loopCheckTime)};b.prototype._checkBait=function(){var g=!1;if(null!==d.document.body.getAttribute("abp")||null===this._var.bt.offsetParent||0==this._var.bt.offsetHeight||0==this._var.bt.offsetLeft||0==this._var.bt.offsetTop||0==this._var.bt.offsetWidth||0==this._var.bt.clientHeight||0==this._var.bt.clientWidth)g=
!0;if(void 0!==d.getComputedStyle){var c=d.getComputedStyle(this._var.bt,null);!c||"none"!=c.getPropertyValue("display")&&"hidden"!=c.getPropertyValue("visibility")||(g=!0)}this._var.loopNumber++;this._var.loopNumber>=this._options.loopMaxNumber?(!0===g?f(1):f(0),this.cleanUp()):!0===g&&(this.cleanUp(),f(1))};h.FAB=new b})},p=function(){"1"==a.getItem("fi_aa")&&(a.removeItem("fi_aa"),a.removeItem("fi_ab"));return new Promise(function(e,f){f=b=>{e(b)};r().then(f).catch(()=>0);l("https://ad.doubleclick.net/favicon.ico?ad=300x250&ad_box_=1&adnet=1&showad=1&size=250x250",
800).then(f).catch(()=>0)})},n=function(e){"0"==a.getItem("fi_aa")&&a.removeItem("fi_aa");return l("https://widgets.outbrain.com/images/widgetIcons/achoice.svg",800).then(f=>f?0:1).catch(()=>0)},t,u,y=!1,z=!1;"0"==a.getItem("fi_ab")?k({adblock:0,acceptableAds:0}):Promise.all([p().then(e=>{a.setItem("fi_ab",parseInt(e,10));y||(y=!0,t=e)}),n().then(e=>{a.setItem("fi_aa",parseInt(e,10));z||(z=!0,u=e)})]).then(()=>{t||(u=0);k({adblock:t,acceptableAds:u})}).catch(e=>{console.error(e)})})(window,{},function(d){a.setItem("fi_ab",
parseInt(d.adblock,10));a.setItem("fi_aa",parseInt(d.acceptableAds,10));if(d.adblock&&!window.fifabAlreadyTracked){window.fifabAlreadyTracked=!0;var h=document.querySelector("script[src='//ecdn.analysis.fi/static/js/fab.js']");h=h?parseInt(h.getAttribute("id").replace("fi-",""),10):parseInt(window.apd_options&&window.apd_options.websiteId,10);var k=!1;null==a.getItem("fi_as")&&(k=!0,a.setItem("fi_as","1"));var l=new XMLHttpRequest;l.open("POST","//measure.analysis.fi/",!0);l.send(JSON.stringify({fv:k?
1:0,aa:d.acceptableAds,s:h}))}})}());

</div>

<div class="element noImg el2">
    <b><a href="/en/article-tue-banks-drag-tase-down-1001467385">Tue: Banks drag TASE down</a></b>
    <p>Shikun &amp; Binui and the banks led the TASE down today as NICE Systems bucked the market.</p>
    <b><a href="/en/article-mon-late-rally-leaves-tase-mixed-1001467268">Mon: Late rally leaves TASE mixed</a></b>
    <p>NICE Systems rose strongly today as Delek Group and ICL led the declines.</p>
</div>

<div class="element noImg el3">
    <b><a href="/en/article-sun-tase-opens-week-lower-as-banks-fall-1001467180">Sun: TASE opens week lower as banks fall</a></b>
    <p>The banks and Delek led the TASE down today as Teva and NICE bucked the market.</p>
    <b><a href="/en/article-thu-tase-closes-first-week-of-2024-higher-1001467087">Thu: TASE closes first week of 2024 higher</a></b>
    <p>Teva stood out among the leading stocks, while the banks were mixed.</p>
</div>

<div class="element noImg el1">
    <b><a href="/en/article-wed-tase-falls-continue-1001466914">Wed: TASE falls continue</a></b>
    <p>The banks led the TASE down today as Teva and Tower bucked the market.</p>
    <b><a href="/en/article-tue-tase-loses-ground-1001466772">Tue: TASE loses ground</a></b>
    <p>Sapiens and Camtek led the declines today as Delek and Teva bucked the market.</p>
</div>

<div class="element noImg el2">
    <b><a href="/en/article-mon-rate-cut-boosts-tase-1001466667">Mon: Rate cut boosts TASE</a></b>
    <p>The market began 2024 strongly with OPC Energy and Azrieli leading the gains and NewMed Energy was one of only two TA 35 Index stocks to fall.</p>
    <b><a href="/en/article-sun-tase-ends-year-on-uptick-up-38-in-2023-1001466579">Sun: TASE ends year on uptick, up 3.8% in 2023</a></b>
    <p>Phoenix and the banks led the market higher today as NICE and Teva ended the year lower.</p>
</div>

<div class="element noImg el3">
    <b><a href="/en/article-thu-tase-records-another-positive-week-1001466474">Thu: TASE records another positive week</a></b>
    <p>The main indices fell today, with the banking sector weak, but the Tel Aviv 35 Index nears year end showing a modest gain.</p>
    <b><a href="/en/article-wed-tase-resumes-strong-gains-1001466348">Wed: TASE resumes strong gains</a></b>
    <p>Bezeq and Teva gained today while Strauss led the declines.</p>
</div>

<div class="element noImg el1">
    <b><a href="/en/article-tue-banks-lead-tase-slump-1001466226">Tue: Banks lead TASE slump</a></b>
    <p>The banks and Elbit Systems fell heavily today as Camtek bucked the market.</p>
    <b><a href="/en/article-mon-all-stocks-gain-on-ta-35-index-1001466111">Mon: All stocks gain on TA 35 Index</a></b>
    <p>The banks and ICL led the market higher today.</p>
</div>

<div class="element noImg el2">
    <b><a href="/en/article-sun-tase-dips-as-energy-stocks-decline-1001466008">Sun: TASE dips as energy stocks decline</a></b>
    <p>Delek and Energean led the declines as the banks bucked the market.</p>
    <b><a href="/en/article-thu-main-indices-slip-at-end-of-positive-week-1001465915">Thu: Main indices slip at end of positive week</a></b>
    <p>With the exception of Bank Hapoalim, the five leading stocks all fell today, headed by Bank Leumi.</p>
</div>

<div class="element el3"></div>


</section> 

