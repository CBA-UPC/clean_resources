;/*FB_PKG_DELIM*/

__d("PolarisEmbedSidecarEntrypoint.react",["cx","PolarisEmbedSidecar.react","polarisGetEmbedSidecarChildFromMedia","polarisGetPostFromGraphMediaInterface","polarisRenderAboveImage","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||c("react");function a(a){a=a==null?void 0:a.shortcode_media;if(a){var b=d("polarisGetPostFromGraphMediaInterface").getPostFromGraphMediaInterface(a);a=a.edge_sidecar_to_children&&a.edge_sidecar_to_children.edges?a.edge_sidecar_to_children.edges.map(function(a){a=a.node;return c("polarisGetEmbedSidecarChildFrPolarisEmbedSidecar.react"),{post:b,sidecarChildren:a}))}}g["default"]=a}),98);
__d("ReactComposerEvents",[],(function(a,b,c,d,e,f){a=Object.freeze({CHANGE:"change",INSTANCE_MOUNTED:"composer/instanceMounted/",ACTIVATE_ATTACHMENT:"composer/activateAttachment/",MENTION_INPUT_FOCUS:"composer/mentionInputFocused/",TEXT_PREFILL_BEFORE_BOOTLOAD:"composer/textPrefillBeforeBootload/",RERENDER_MENTION_INPUT:"reactComposer/rerenderMentionInput/",OPTIMISTIC_POSTING_STARTED:"composer/optimisticPostingStarted/",POST_FINALLY:"composer/postFinally/",POST_FAILED:"composer/postFailed/",POST_STARTED:"composer/postStarted/",OPTIMISTIC_POST_STARTED:"composer/optimisticPostStarted/",POST_SUCCEEDED:"composer/postSucceeded/",COMPOSER_RESET:"composer/reset/",COMPOSER_UNMOUNT:"composer/unmount/",SET_PREFILL_DATA:"reactComposer/setPrefillData/",RICH_TEXT_EDITOR_MOUNTED:"reactComposer/richTextEditorMounted/",SAVE_STARTED:"composer/saveStarted/",HIGHLIGHT_TOP_COMPOSER:"reactComposer/highlightTopComposer"});f["default"]=a}),66);
__d("ReactComposerConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({ID_PREFIX:"rc.",GK_VIDEO_COPYRIGHT:"video_copyright_confirmation_dialog",GK_MULTILINGUAL_COMPOSER:"multilingual_composer_www",GK_PAGE_BREAKING_COMPOSER:"breaking_news_page",WORKPLACE_MULTLINGUAL_COMPOSER_ALWAYS_ON:"comet_multilingual_composer_on_by_default",WORKPLACE_MULTILINGUAL_COMPOSER:"comet_multilingual_composer",GK_COMET_MULTILINGUAL_COMPOSER:"comet_enable_multilingual_composer"});f["default"]=a}),66);
__d("ReactComposerIDGenerator",["ReactComposerConstants","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("ReactComposerConstants").ID_PREFIX+c("uniqueID")()}function b(a){return!!a&&a.startsWith(c("ReactComposerConstants").ID_PREFIX)}g.getID=a;g.isComposerID=b}),98);h-icon-precomposed" sizes="144x144" href="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/383fe957-4112-4ab2-96e4-ffc2531a2dee_jdm-icon.svg?version=1">
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/383fe957-4112-4ab2-96e4-ffc2531a2dee_jdm-icon.svg?version=1">
    <link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/383fe957-4112-4ab2-96e4-ffc2531a2dee_jdm-icon.svg?version=1">
    <link rel="icon" type="image/png" sizes="192x192"        href="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/383fe957-4112-4ab2-96e4-ffc2531a2dee_jdm-icon.svg?version=1">

    <meta name="robots" content="index, follow" />
    <meta name="google-site-verification" content="bCSSRLgxcAzjqqQFISL6Prs2j8P9qBNQRDbImOIT36c" />


        <link rel="alternate" type="application/rss+xml"  href="https://www.journaldemontreal.com/auto/actualite/rss.xml" title="RSS" />
  



<link type="text/css" rel="stylesheet" media="all" href="//theme.journaldemontreal.com/assets/ebae541/wro/css/jdx_css.css" />

<script  type="text/javascript" src="//theme.journaldemontreal.com/assets/ebae541/wro/js/core.js"></script>


<!-- end group header-->

  <script async src="//ads.rubiconproject.com/prebid/23546_FR_JournalDeMontreal.js"></script>
  <script async  src="https://cdn.optable.co/web-sdk/latest/sdk.js"></script>
  <script src="//securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <script>
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];

    var AD_SERVER_CALLBACK_TIMEOUT = 2000;

    // initialize pbjs
    var pbjs = pbjs || {};
    pbjs.que = pbjs.que || [];

    pbjs.adserverCalled = [];
    pbjs.prebid = false;

    var gridAds = [];

    googletag.cmd.push(function() {
      var qub_anonymous_id = getAnonymousId();
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        Wasp.Dfp.broadcastAdRendered(event);
      });
      googletag.companionAds().addEventListener('slotRenderEnded', function(event) {
        Wasp.Dfp.broadcastAdRendered(event);
      });

      googletag.pubads().disableInitialLoad();
      googletag.pubads().enableLazyLoad({ fetchMarginPercent : 25, renderMarginPercent : 10 });
      googletag.pubads().set("document_language", "fr");
      googletag.pubads().collapseEmptyDivs();
      googletag.pubads().enableAsyncRendering();
      googletag.pubads().setPublisherProvidedId(qub_anonymous_id);
      googletag.pubads().setTargeting("URefId", qub_anonymous_id);
      googletag.enableServices();
    });

    var waspDfpInitializer = {
      siteKey : '/7548/SMCO_FRUR_JDM_FR_WEB',
      defaultMapping : '/misc',
      testRequestParameter : 'quebecortest',
      testTargetValue : 'TEST_QMI_GEN'
    }
  </script>

    <style>
      .fourthLine{display:none;}
.fb_iframe_widget_fluid_desktop iframe{width:100% !important;}
.user-login{display:none!important;}
.css-col .qub-now-playing {margin-bottom: 10px;}
.transactions-immobilieres-body #wrapper div {
position: static;
}
#staticTransactionsImmobilieres {
height: 100%;
}
#staticTransactionImmobiliere2 {
height: 100%;
}

#banner .dfp-ad{width: 100%;}
.article-wrapper .article-spacer .article-right-container .bigbox-container .dfp-ad{top: 75px;}

.header-meteo {display: none;}
      
    </style>
     
     <meta name="ahrefs-site-verification" content="236159174f149e47a49e937ca1be081d00b20c533b767dc83b1d30f057b3784c">
<meta name="referrer" content="unsafe-url">
<meta property="fb:pages" content="103984323029572">
<meta property="fb:pages" content="574845642586113">
<meta property="fb:pages" content="1478630335800918">
<meta property="fb:pages" content="1675329666071460">
<meta property="fb:pages" content="459446867743254">
<meta property="fb:pages" content="229364384094742">
<meta property="fb:pages" content="429959187214283">
<meta property="fb:pages" content="1490652407905281">
<meta property="fb:pages" content="609085822623089">
<meta property="fb:pages" content="973159752770715">
<meta property="fb:pages" content="509839125694576">
<style> 
  .video-inline .video-js .vjs-big-play-button {
    width: 2em !important;
    height: 2em !important;
    border-radius: 50% !important;
  }

  .photo-gallery .slider .panel.gallery-ads-panel .dfp-ad {
    min-width: 1px;
    min-height: 1px;
  }
  #banner {
    text-align: center;
  }
</style>

    <!-- SEO for google -->

  <script type="application/ld+json">
    {
      "@context" :  "https://schema.org",
      "@type" :     "Organization",
      "name" :      "Le Journal de Montréal",
      "url" :       "https://www.journaldemontreal.com",
      "logo" :      "",
      "sameAs" : [
        "https://www.facebook.com/jdemontreal",
        "https://twitter.com/JdeMontreal"
      ]
    }
  </script>

    <!-- Cxense script & meta -->

    <meta name="cXenseParse:recs:que-version" content="1.01"/>


        <meta name="cXenseParse:pageclass" content="frontpage"/>

	    <meta name="cXenseParse:recs:category" content="Actualités"/> <!-- cXense tag to be removed -->
	    <meta name="cXenseParse:recs:que-strapline" content="Actualités"/> <!-- cXense tag to be removed -->
		<meta name="cXenseParse:recs:que-category" content="Actualités"/> <!-- cXense tag to be removed -->

	  	<meta name="cXenseParse:recs:que-sectionclassname" content="auto" />

       <meta name="cXenseParse:pageclass" content="frontpage" />
       <meta name="cXenseParse:recs:que-typeasset" content="section" /> <!-- cXense tag to be removed -->

       <meta name="cXenseParse:recs:recommendable" content="false" />


	    <!-- Cxense script-->
	    <script type="text/javascript">
	      var cX = cX || {}; cX.callQueue = cX.callQueue || [];
		  cX.options = cX.options || {};
	      cX.callQueue.push(['setSiteId', '1145186863182397325']);
		  cX.callQueue.push(['invoke', function() {
			  cX.addExternalId({'id': getAnonymousId(), 'type': 'que'});
		  }]);
	      cX.callQueue.push(['sendPageViewEvent']);
		  cX.options.dataLayer = { cookie: { domain: 'www.journaldemontreal.com' } };
	    </script>
	    <!-- End Cxense -->



    <!-- liste des experiences piano maisons-->

            <!-- house teaser script-->
            <script>
                var initial = [];
                initial.push({name : 'Teaser maison', div : '.tp-reserved-content-wrapper', template : `<div class="tp-reserved-content-wrapper active paywall">
<div class="faded_content_qub_profile_subscription_prompt tx-courant">
  <p>{{fadingContent}}</p>
</div>
<div class="fade_qub_profile_subscription_prompt">
</div>
<div class="qub_profile_subscription_prompt">
  <div class="wrapper">
    <div class="key"></div>
    <div class="logo">	
      <img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/ba3a9055-90bd-4215-833f-fecbad742d21_jdm-logo-contained-color.svg" alt="Logo" />
    </div>
    <div class="connectez_vous">
      <h5>
        Poursuivez votre lecture en vous connectant. <br/>
        C’est facile et gratuit.
      </h5>
      <a id="btnConnecter" class="btn_connecter bouton1" href="https://www.journaldemontreal.com/connexion?currentPath={{currentPath}}" target="_parent" 
      onclick="dataLayer.push({event: 'MarketingPopupQubProfilBlockedContentClickConnect'})">Se connecter</a>
      <p class="link_inscription">
        <span class="caption3">Vous n'avez pas de compte?</span>
        <a id="btnSubscribe" class="btn_subscribe bouton1" href="https://www.journaldemontreal.com/connexion?currentPath={{currentPath}}" target="_parent" 
        onclick="dataLayer.push({event: 'MarketingPopupQubProfilBlockedContentClickSubscribe'})">S’inscrire</a>
      </p>
      <p class="link_decouvrir body6">
        <a href="https://www.journaldemontreal.com/vie-privee" target="_blank" onclick="dataLayer.push({event: 'MarketingPopupQubProfilBlockedContentClickLearnMore'})" >Politique de confidentialité</a>
        <a href="https://www.qub.ca/leprofilqub" target="_blank" onclick="dataLayer.push({event: 'MarketingPopupQubProfilBlockedContentClickLearnMore'})" >Découvrez le profil QUB</a></p>
    </div>
  </div>
</div>
<div class="qub_profile_subscription_spacer"></div>
</div>

<style> 
@import url("https://s1.quebecormedia.com/infojdem/fonts/heading-now/stylesheet.css");

/** FADE **/
.faded_content_qub_profile_subscription_prompt {
  width: 100%;
  font-size: 19.2px;
  font-family: 'Droid Serif', Arial;
}
.fade_qub_profile_subscription_prompt {
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 100%;
  position: relative;
  height: 125px;
  margin-top: -100px;
}
/** MAIN CONTAINER **/
.qub_profile_subscription_prompt {
  width: 100%;
  background: white;
  position: relative;
}
.wrapper{
  position: relative;
  width: 100%;
  margin: auto;
  border: 2px solid #FFCC33;
  border-radius: 4px;
  padding: 32px;
}
.key{
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  background: #FFCC33;
  background-image: url("https://m1.quebecormedia.com/emp/jdx-prod-images/photo/1d1d6846-9f2e-40ce-8393-fc57f48317b8_key.svg");
  background-repeat: no-repeat;
  background-position: center center;
  width: 32px;
  height: 32px;
  border-radius: 0 0 0 4px;
}
.logo {
  width: 100%;
  text-align: center;
}
.logo img{
  width: 100%;
  max-width: 145px;
}
.connectez_vous {
  width: 100%;
  position: relative;
  text-align: center;
  margin: 24px 0 0 0;
}
.connectez_vous p{
  margin: 0;
}
.btn_connecter {
  display: inline-block;
  color: white !important;
  padding: 10px 16px;
  background-color: #e32402;
  border-radius: 3px;
  text-decoration: none !important;
}
.btn_connecter:hover{
	background-color: #CA2002;
}
.link_inscription{
 	margin: 24px 0 !important;
}
.link_inscription a{
  color: #e32402 !important;
  text-decoration: none !important;
}
.link_decouvrir a{
  color: black;
  margin: 0 8px;
  text-decoration: none;
}
.link_decouvrir a::after{
	content: url('https://m1.quebecormedia.com/emp/jdx-prod-images/photo/eb795198-b7a3-4e65-974d-81307f613e80_externallink.svg');
  	width: 10px;
  	height: 10px;
   	margin-left: 4px;
}
.qub_profile_subscription_spacer {
  height: 25px;
}
@media (max-width: 450px) {
  .wrapper{
    padding: 32px 24px;
  }
  .link_decouvrir a{
    display: block;
    margin: 0;
  }
  .link_decouvrir a:last-child{
    margin-top: 16px;
  }
}

/** IMPORT FROM FIGMA JDX **/
h5 {
  font-family: "Heading Now 56";
  font-size: 26px;
  font-weight: 750;
  font-stretch: 400%;
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  letter-spacing: 0px;
  line-height: 28.6px;
  margin: 24px 0;
}
@media (max-width:  767px ) {
  h5 {
    font-family: "Heading Now 56";
    font-size: 20px;
    font-weight: 750;
    font-stretch: 400%;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    letter-spacing: 0px;
    line-height: 22px;
  }
}
@media (max-width:  639px ) {
  h5 {
    font-family: "Heading Now 56";
    font-size: 18px;
    font-weight: 750;
    font-stretch: 400%;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    letter-spacing: 0px;
    line-height: 19.8px;
  }
}

.bouton1{
  font-family: "Heading Now";
  font-size: 18px;
  font-weight: 600;
  font-stretch: 550%;
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  letter-spacing: 0.25px;
  line-height: 18px;
}
@media (max-width:  767px ) {
  .bouton1{
    font-family: "Heading Now";
    font-size: 16px;
    font-weight: 600;
    font-stretch: 550%;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    letter-spacing: 0.25px;
    line-height: 16px;
  }
}
@media (max-width:  639px ) {
  .bouton1{
    font-family: "Heading Now";
    font-size: 16px;
    font-weight: 600;
    font-stretch: 550%;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    letter-spacing: 0.25px;
    line-height: 16px;
  }
}

.caption3 {
  font-family: "Heading Now Variable";
  font-size: 14px;
  font-weight: 400;
  font-stretch: 550%;
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  letter-spacing: -0.25px;
  line-height: 20.3px;
}
@media (max-width:  767px ) {
  .caption3 {
    font-family: "Heading Now Variable";
    font-size: 14px;
    font-weight: 400;
    font-stretch: 550%;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    letter-spacing: -0.25px;
    line-height: 20.3px;
  }
}
@media (max-width:  639px ) {
  .caption3 {
    font-family: "Heading Now Variable";
    font-size: 14px;
    font-weight: 400;
    font-stretch: 550%;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    letter-spacing: -0.25px;
    line-height: 20.3px;
  }
}
.body6 {
  font-family: "Heading Now Variable";
  font-size: 11px;
  font-weight: 400;
  font-stretch: 550%;
  font-style: normal;
  text-decoration: none;
  text-transform: none;
  letter-spacing: -0.25px;
  line-height: 14.85px;
}
@media (max-width:  767px ) {
  .body6 {
    font-family: "Heading Now Variable";
    font-size: 11px;
    font-weight: 400;
    font-stretch: 550%;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    letter-spacing: -0.25px;
    line-height: 14.85px;
  }
}
@media (max-width:  639px ) {
  .body6 {
    font-family: "Heading Now Variable";
    font-size: 11px;
    font-weight: 400;
    font-stretch: 550%;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    letter-spacing: -0.25px;
    line-height: 14.85px;
  }
}
</style>

{{custom-script-start}}
    $( document ).ready(function() {
        dataLayer.push({event: 'MarketingPopupQubProfilBlockedContentView'})
    });
{{custom-script-end}}`});
                initial.push({name: 'Desktop banner maison', div: '.piano_auth_wrapper', template: `<div class="piano_auth_wrapper">
  <div id="appbanner" class="appbanner" data-cookieName="_pc_appbannerclosed_c18" data-userAgent="all">
    <div class="appbanner_wrapper">
      <div class="logo">
        <img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/383fe957-4112-4ab2-96e4-ffc2531a2dee_jdm-icon.svg" />
      </div>
      <div class="info">
        <h4>Consultez vos infos à la source</h4>
        <span class="info-desktop">Meta censure les médias en bloquant les nouvelles de ses plateformes Facebook et Instagram. Restez informé et ne manquez rien de l'actualité, téléchargez notre application mobile.</span>
        <span class="info-mobile">Meta censure les médias en bloquant les nouvelles de ses plateformes Facebook et Instagram. Restez informé et ne manquez rien de l'actualité.</span>
      </div>
      <div class="buttons">
        <a class="link-desktop" href="https://www.journaldemontreal.com/application" onclick="closeDekstopBanner('telechargerappbanner')">Télécharger</a>
        <a class="link-mobile" href="https://www.journaldemontreal.com/application" onclick="closeDekstopBanner('telechargerappbanner')">Télécharger l'app</a>
        <span class="later" onclick="closeDekstopBanner('plustardappbanner')">Merci, je l’ai déjà</span>
      </div>
    </div>
  </div>
</div>

<style>
  @import url("https://s1.quebecormedia.com/infojdem/fonts/heading-now/stylesheet.css");
  
  .ng-scope {
      background: #262626;
  }
  .info-mobile {
      display: none;
  }
  .link-mobile {
      display: none;
  }
  .appbanner {
      width: 100%;
      background: #262626;
      font-family:"Heading Now";
      padding: 12px 0;
      border-top: 6px solid #E32402;
      animation-name: showBanner;
      animation-duration: 0.5s;
  }
  .appbanner.hidden {
      animation-name: hideBanner;
      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
  }
  .appbanner.closed {
      display: none;
  }
  .appbanner_wrapper {
      width: 100%;
      max-width: 1260px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
  }
  .app {
      width: 180px;
  }
  .logo {
      width: 100px;
      margin: 35px 32px 35px 0;
  }
  .piano_auth_wrapper img {
      width: 118px;
  }
  .info {
      color: white;
      font-size: 21px;
      font-weight: 420;
      font-stretch: 550%;
      line-height: 125%;
  }
  .info h4 {
      font-size: 37px;
      font-weight: 750;
      font-stretch: 830%;
      line-height: 105%;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      margin-top: 0;
  }
  .buttons {
      text-align: center;
  }
  .buttons a {
      background: white;
      color: #262626;
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      font-stretch: 550%;
      border-radius: 3px;
      padding: 10px 16px;
      white-space: nowrap;
  }
  .buttons span {
      display: block;
      color: white;
      font-size: 16px;
      font-weight: 420;
      font-stretch: 550%;
      margin-top: 24px;
      cursor: pointer;
  }

  /* xxl 1760 + */
  @media (min-width: 1760px) {
      .appbanner {
          /* outline: 5px solid red; */
          padding: 0;
      }
      .logo {
          margin: 19px 32px 19px 0;
      }
      .info h4 {
          font-size: 32px;
      }
  }

  /* xl 1300 - 1759 */
  @media (max-width: 1759px){
      .appbanner {
          /* outline: 5px solid green; */
          padding: 0;
      }
      .logo {
          margin: 19px 32px 19px 0;
      }
      .info h4 {
          font-size: 32px;
      }
  }

  /* lg 1024 - 1299 */
  @media (max-width: 1299px) {
      .appbanner {
          padding: 0;
      }
      .appbanner_wrapper{
          max-width: 940px;
      }
      .info {
          font-size: 18px;
      }
      .info h4 {
          font-size: 27px;
      }
      .piano_auth_wrapper img {
          width: 100px;
      }
      .logo {
          width: 100px;
          margin: 30px 0px 30px 0;
      }
  }

  /* md 768 - 1023 */
  @media (max-width: 1023px) {
      .appbanner {
          padding: 9px 0;
      }
      .appbanner_wrapper {
          justify-content: normal;
          gap: 16px;
      }
      .info {
          font-size: 16px;
          margin: 24px 0;
          max-width: 75%;
          margin-left: 75px;
      }
      .buttons {
          margin-right: 75px;
      }
      .info h4 {
          font-size: 19px;
      }
      .piano_auth_wrapper img {
          width: 100px;
      }
      .logo {
          display: none;
      }
      .info-desktop {
          display: none;
      }
      .info-mobile {
          display: block;
      }
      .link-desktop {
          display: none;
      }
      .link-mobile {
          display: block;
      }
  }

  /* sm 640 - 767 */
  @media (max-width: 767px) {
      .appbanner {
          padding: 10px 0;
      }
      .appbanner_wrapper {
          max-width: 620px;
      }
      .info {
          margin-left: auto;
      }
      .buttons {
          margin-right: auto;
      }
      
  }

  /* xs 320 - 639 */
  @media (max-width: 639px) {
      .appbanner {
      }
      .appbanner_wrapper {
          flex-wrap: wrap;
          max-width: 90%;
      }
      .info {
          margin: auto;
          text-align: center;
          min-width: 100%;
      }
      .info:after {
        content: "";
        display: inline-block;
        width: 100%;
      }
      .buttons {
          margin: auto;
          display: flex;
          gap: 31px;
      }
      .buttons span {
          margin-top: 10px;
      }
      .info {
          font-size: 15px;
      }
      .info h4 {
          font-size: 20px;
      }      
  }
  
  @keyframes showBanner {
      from {
          visibility: hidden;
          transform: translateY(100%);
      }
      to {
          visibility: visible;
          transform: translateY(0%);
      }
  }
  
  @keyframes hideBanner {
      from {
          transform: translateY(0%);
          visibility: visible;
      }
      to {
          transform: translateY(100%);
          visibility: hidden;
      }
  }
</style>

  {{custom-script-start}}
  
  function setCookiePiano(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";" + " path=/;";
  }
  
  function sendEvent(msg) {
    dataLayer.push({event: msg})
  }
  
  function closeDekstopBanner(msg) {
    sendEvent(msg);
    setCookiePiano("_pc_appbannerclosed_c18", "true", 30);
    
    var container = document.getElementById('appbanner');
    container.classList.add('hidden');
    setTimeout(() => {container.classList.add('closed')}, 300);
  }
  
  {{custom-script-end}}`});
                initial.push({name: 'Smart banner maison', div: '.smartbanner-wrapper', template: `<div class="smartbanner-wrapper">
  <div id="smartbanner" class="smartbanner" data-cookieName="_pc_sbclosed" data-userAgent="mobile">
    <div class="info_sb">
      <div class="close_sb" onclick="closeModal(false)">
        <img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/0d2e1bd1-6fb8-4ecc-b5be-ef688a953049_close.svg" />
      </div>
      <div class="logo">
        <img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/383fe957-4112-4ab2-96e4-ffc2531a2dee_jdm-icon.svg" />
      </div>
      <div class="texte">
        <h5>
          Une nouvelle façon de lire le Journal.
        </h5>
        Découvrez l’application mobile
      </div>
    </div>
    <div class="boutton">
      <a id="applink" target="_blank" onclick="closeModal(true)">
        Afficher
      </a>
    </div>
  </div>
  </div>
  
  {{custom-script-start}}
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android/i.test(userAgent)) {
        var platform = "android";
        var link = "https://play.google.com/store/apps/details?id=com.quebecormedia.journaldemontreal";
      }else{
        console.log('iOs');
        var platform = "ios";
        var link = "https://apps.apple.com/ca/app/journal-de-montr%C3%A9al/id6444195089";
      }
      $('#smartbanner').attr("data-platform", platform);
      $('#applink').attr("href", link); 
    
      function sendEvent(msg) {
        dataLayer.push({event: msg})
      }
      
    function closeModal(afficher) {
        $('.smartbanner').hide();
        sendEvent("closesmartbanner");
        if(afficher){
          sendEvent("closesmartbanner-afficher");
        }
        setCookiePiano("_pc_sbclosed", "true", 7);
    
        var container = document.getElementById('smartbanner');
      container.classList.add('hidden');
      }
    
      function setCookiePiano(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";";
      }
  {{custom-script-end}}
  
  <style>
      @import url("https://s1.quebecormedia.com/infojdem/fonts/heading-now/stylesheet.css");
  
  .smartbanner{
    font-family:"Heading Now";
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    background: #262626;
    padding: 10px 16px;
  }
  .close_sb img{
    width: 10px;
    height: 10px;
  }
  .info_sb{
    display: flex;
    align-items: center;
  }
  .logo{
    width: 51px;
    margin: 0 16px;
  }
  .logo img{
    width: 100%;
  }
  .texte{
    font-size:12px;
    font-weight:400;
    font-stretch:550%;
    letter-spacing:0.25px;
    line-height:100%;
  }
  h5{
    font-size:18px;
    font-weight:750;
    font-stretch:400%;
    line-height:110%;
    letter-spacing:0px;
    margin: 0px;
  }
  .boutton a{
    color: white;
    text-decoration: none;
    font-size:11px;
    font-weight:400;
    font-stretch:550%;
    letter-spacing:-0.25px;
    background: #E32402;
    padding: 4px 8px;
    border-radius: 3px;
  }
  </style>`});
                var tp2 = window["tp2"] || initial;
            </script>
            <!-- house teaser script-->


    <meta property="fb:app_id" content="242991719478311" />

  <script>
    var userId = $.cookie("auth-user-id");
    var isConnected = (userId!=null) ? "true" : "false";
    var sectionId = "57ec2aa2e4b089eca92340c1";
    dataLayer = [{
      "referrer"          :   document.referrer.split('/')[2],
      "cxense_siteid"     :   "1145186863182397325",

      
			    'section': "Actualités",
            "midSection": "Actualités",
      
        'rootChannel': "Auto",

      "subscriberOnly"    :   "false",
      "assetType"         :   "Section",
      "isAnArticle"       :   "false",

      "assetId"           :   "57ec2aa2e4b089eca92340c1",
      "assetTitle"        :   "Actualités" ,
      "userId" : userId,
        "Contentpermission" : "all",
    }];
    
	    $( document ).ready(function() {
	        var urlCx = "https://recherche-api.numeriq.ca/sites/common/cx.php";
	        var urlFetch = urlCx+'?url='+window.location;
	        $.ajax({
	            url: urlFetch,
	            dataType:'json'
	        }).done(function( data ) {
	            dataLayer.push({
	                event : 'cxense_profile',
	                profile: {
	                    elements : data
	                }
	            });
	        });
	    });

  </script>

    <script type="text/javascript">
        googletag.cmd.push(function() {
            if (typeof window.headertag === 'undefined' ||window.headertag.apiReady !== true) {
                window.headertag = googletag;
                console.log("***** Headertag fallback on Googletag");
            }
        });
    </script>

    <script type='text/javascript'>
        var cX = cX || {}; cX.callQueue = cX.callQueue || [];
        cX.options = cX.options || {};
        cX.options.dataLayer = { cookie: { domain: 'www.journaldemontreal.com' } };
    </script>


     
        <!-- Cxense script & meta -->

        <meta name="cXenseParse:recs:que-hasvideo" content="false"/>
        <meta name="cXenseParse:recs:que-taxonomy" content="auto/actualités"/>
        <meta name="cXenseParse:recs:image" content="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/ba3a9055-90bd-4215-833f-fecbad742d21_jdm-logo-contained-color.svg"/>
        <meta name="cXenseParse:recs:que-image1x1" content="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/a6acfa0d-f06d-46a6-ae86-4e55b8925a02_jdm-square.png"/>

    <meta name="apple-itunes-app" content="app-id=6444195089, app-argument=www.journaldemontreal.com">

    <!-- END OF HEAD -->

    <script>
        var activateTalk = true;
        var talkURL = "https://commentaires.qub.ca";
        var staticProtocol = "https";
        var themeProvider = "//theme.journaldemontreal.com/assets/ebae541";
        var coralLoaded = false;
        var coralAttemps = 0;
        var coralInitiated = function () {
            coralLoaded = true;
        }
    </script>

    <script src="https://commentaires.qub.ca/assets/js/embed.js" onload="coralInitiated()" defer></script>
    <script src="https://commentaires.qub.ca/assets/js/count.js" id ="coral-script" defer></script>

<script>(window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"false","rua.cpush":"false","rua.upre":"false","rua.cpre":"false","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"","rua.cook":"false","rua.ims":"false","rua.ufprl":"false","rua.cfprl":"false","rua.isuxp":"false","rua.texp":"norulematch"}]);</script>
                              <script>!function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="3HV8U-7XEBB-ZJ87R-9AXG7-BADUF",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"3HV8U-7XEBB-ZJ87R-9AXG7-BADUF",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e=""=="true"?1:0,t="",n="snjyegyxh22nezofh7bq-f-310378665-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,_={"ak.v":"36","ak.cp":"847128","ak.ai":parseInt("206534",10),"ak.ol":"0","ak.cr":65,"ak.ipv":4,"ak.proto":"http/1.1","ak.rid":"4cc644ef","ak.r":47753,"ak.a2":e,"ak.m":"f","ak.n":"essl","ak.bpcip":"147.83.130.0","ak.cport":56788,"ak.gh":"92.123.117.82","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.csrc":"-","ak.acc":"reno","ak.t":"1707425731","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==GfrDprdS1qMuYm6GEOYxf+wIt4x3Yx6OaUHt06RcO6xwbhwON4v4/LuQhIl7kxKLAp9BKM6Lvg3k0l7AQJhUZgLX1ffwObJBMqsfZOElVwSgIFIm5xpi9biSbdq74/h72hun74l3yLAygnPiRjitjqmODP6KezXDqnoWjkoHk914TLrymp/nToZkizfyQFhCv++R1UAuPv+0ASUQ4f/FhjQH9npF3ppIXXDSKUiih5L/GXMUuNHhdFCM2bzZXMcdVZykEQu7XVTl1CV9wAdALQzJfXS/34LWg+iR9+zGsUddNWDkKjJrxluutuNILrfKn98ju/J6g6e0aTawzJW7/7heI0EZtj4nRkHSNXEjBrOalC6LKz64FDBpUn+nvFLF2XZOuFKaN3pDKnDR/IGqyv+eBFkcAxg7R2mAa64R/Dk=","ak.pv":"105","ak.dpoabenc":"","ak.tf":i};if(""!==t)_["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))_["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(_)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:_,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script></head>

<body class="dfp-path"
      data-dfpPath="/auto/news"
      data-page="subsection"
      data-pagetype="subsection"
      data-hidelogo="false"
      data-themeAssetsUrl="https://theme.journaldemontreal.com"
      data-adsInArticle="true"
      data-imgPath="//theme.journaldemontreal.com/assets/ebae541"
      data-currentsection="autoActualites"
      data-sectioncolor="auto"
      data-sectiontype="editorial"
      data-logoMain="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/45917ec6-b1ae-4125-8b2d-e802a85baf5c_jdm-logo-default-white.svg"
      data-logoMainFallback="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/ba3a9055-90bd-4215-833f-fecbad742d21_jdm-logo-contained-color.svg"
      data-logoMainFallback-1x1="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/a6acfa0d-f06d-46a6-ae86-4e55b8925a02_jdm-square.png"
      data-logoDevice="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/c4ce8038-e4d6-41d2-9781-60e1710b6dcd_jdm-logo-horizontal-color.svg"
      data-mobileMozaicAjax="true"
      data-dfp-tags = ""
      data-fb-show-comment-count = "true"
      data-fb-show-share-count = "true"
      data-rjdx-enable = "true"
      
      data-url = ""
      data-fb-netino-app-id = "QBFC1"
      data-webview = false>

  <!-- Google Tag Manager -->
  <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PRRHXRL"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  '//www.googletagmanager.com/gtm.js?id='+i+dl+'';f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PRRHXRL');</script>
  <!-- End Google Tag Manager -->

    <div class="dfpPath">/auto/news</div>

<div id="wrapper">
    <div class="smartbanner-wrapper"></div>

    <header class="header-container">
        <div class="header-wrapper">
            <div class="burger-menu">
                <p>
  <img src="//theme.journaldemontreal.com/assets/ebae541/images/icon/icon-burger.svg" alt="Menu burger" 
  />
                    <span>Sections</span>
                </p>
                <div class="main-sticly-logo">
                    <a href="/">
                        <img class="logoH" src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/8eb7b346-94a8-4df7-97ab-26db8a16f587_jdm-logo-horizontal-white.svg" alt="Logo Le Journal de Montréal" />
                        <img class="logoV" src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/45917ec6-b1ae-4125-8b2d-e802a85baf5c_jdm-logo-default-white.svg" alt="Logo Le Journal de Montréal" />
                    </a>
                </div>
            </div>
            <div class="main-logo-wrapper">
                <a href="/">
                    <img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/45917ec6-b1ae-4125-8b2d-e802a85baf5c_jdm-logo-default-white.svg" alt="Logo Le Journal de Montréal" />
                </a>
            </div>
            <div class="right-header">
                <ul class="right-menu">
                    <li class="header-search">
                        <a>
  <img src="//theme.journaldemontreal.com/assets/ebae541/images/icon/icon-search.svg" alt="Recherche" 
      class="closed"
  />
  <img src="//theme.journaldemontreal.com/assets/ebae541/images/icon/icon-white-x.svg" alt="Recherche" 
      class="opened"
  />
                        </a>
                    </li>
                    <li class="top-profile">
                        <div
                                class="headernav-connexion"
                                data-abonnement="true"
                                data-privileges="false"
                                data-infolettres="true"
                        >
        <div class="user-profile-dropdown" />
                        </div>
                    </li>
                        <li class="boutton-abonnement">
                            <a href="/abonnement/produit">S’abonner</a>
                        </li>
                </ul>
            </div>
        </div>
    <div class="header-sousmenu">
                <a href="https://www.journaldemontreal.com/actualite"
                   data-path="/actualite"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Actualités</span>
                </a>
                <a href="https://www.journaldemontreal.com/monde"
                   data-path="/monde"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Monde</span>
                </a>
                <a href="https://www.journaldemontreal.com/argent"
                   data-path="/argent"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Argent</span>
                </a>
                <a href="https://www.journaldemontreal.com/opinions"
                   data-path="/opinions"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Opinions</span>
                </a>
                <a href="https://www.journaldemontreal.com/sports"
                   data-path="/sports"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Sports</span>
                </a>
                <a href="https://www.journaldemontreal.com/spectacles"
                   data-path="/spectacles"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Spectacles</span>
                </a>
    </div>
    <div class="header-recherche">
        <div class="recherche-wrapper">
            <form action="/recherche" class="top-search" role="search" method="get" name="searchForm" autocomplete="off">
                <input class="search-input" type="text" name="q" placeholder="Que pouvons-nous vous aider à trouver?" autocomplete="off" />
                <input class="submit-input" type="submit" value="" />
            </form>
        </div>
    </div>
    </header>
    <div id="banner" class="isLoading dfp-labeled">
        <span class="loader"></span>
    </div>
    <section class="main-container">
    <div class="sidebar">
        <aside class="rjdx-sidebar">
            <div class="rjdx-sidebar-layer"></div>
            <div class="rjdx-sidebar-content">
                <div class="rjdx-sidebar-close">
  <img src="//theme.journaldemontreal.com/assets/ebae541/images/icon/icon-black-x.svg" alt="Fermer" 
      class="svg close"
  />
                </div>
                <div class="rjdx-sidebar-menu-container">
                    <nav>
                        <ul class="section-links" itemscope itemtype="https://schema.org/SiteNavigationElement">
                                        <li class="menu-item actualite">
                                            <div class="menu-item-container with-dropdown">
                                                <a href="https://www.journaldemontreal.com/actualite"
                                                   data-path="/actualite"
                                                   itemprop="url">
                                                        <span itemprop="name">ACTUALITÉS</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
    <div class="menu-item-dropdown">
        <ul class="sub-sections">
                    <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/faits-divers" >Justice et faits divers</a>                    </li>
                    <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/coronavirus" >COVID-19</a>                    </li>
                    <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/politique" >Politique</a>                    </li>
                    <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/sante" >Santé</a>                    </li>
                    <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/education" >Éducation</a>                    </li>
                    <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/transports" >Transports</a>                    </li>
                    <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/environnement" >Environnement</a>                    </li>
                    <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/consommation" >Consommation</a>                    </li>
                    <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/societe" >Société</a>                    </li>
        </ul>
    </div>
                                            </div>
                                            <meta itemprop="position" content="1"/>
                                                <div class="mobile-dropdown">
                                                    <span class="mobile-dropdown-go-back"></span>
                                                    <a class="section-link" href="https://www.journaldemontreal.com/actualite"
                                                       data-path="/actualite"
                                                       itemprop="url">
                                                            <span itemprop="name">ACTUALITÉS</span>
                                                    </a>
    <ul class="mobile sub-sections">
                <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/faits-divers" >Justice et faits divers</a>                </li>
                <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/coronavirus" >COVID-19</a>                </li>
                <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/politique" >Politique</a>                </li>
                <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/sante" >Santé</a>                </li>
                <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/education" >Éducation</a>                </li>
                <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/transports" >Transports</a>                </li>
                <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/environnement" >Environnement</a>                </li>
                <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/consommation" >Consommation</a>                </li>
                <li class="sub-section actualite">
<a href="https://www.journaldemontreal.com/actualite/societe" >Société</a>                </li>
    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-item monde">
                                            <div class="menu-item-container with-dropdown">
                                                <a href="https://www.journaldemontreal.com/monde"
                                                   data-path="/monde"
                                                   itemprop="url">
                                                        <span itemprop="name">MONDE</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
    <div class="menu-item-dropdown">
        <ul class="sub-sections">
                    <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/opinions" >Opinions</a>                    </li>
                    <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/guerre-en-ukraine" >Guerre en Ukraine</a>                    </li>
                    <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/etats-unis" >États-Unis</a>                    </li>
                    <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/ameriques" >Amériques</a>                    </li>
                    <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/europe" >Europe</a>                    </li>
                    <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/moyen-orient" >Moyen-Orient</a>                    </li>
                    <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/asie-pacifique" >Asie-Pacifique</a>                    </li>
                    <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/afrique" >Afrique</a>                    </li>
        </ul>
    </div>
                                            </div>
                                            <meta itemprop="position" content="2"/>
                                                <div class="mobile-dropdown">
                                                    <span class="mobile-dropdown-go-back"></span>
                                                    <a class="section-link" href="https://www.journaldemontreal.com/monde"
                                                       data-path="/monde"
                                                       itemprop="url">
                                                            <span itemprop="name">MONDE</span>
                                                    </a>
    <ul class="mobile sub-sections">
                <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/opinions" >Opinions</a>                </li>
                <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/guerre-en-ukraine" >Guerre en Ukraine</a>                </li>
                <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/etats-unis" >États-Unis</a>                </li>
                <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/ameriques" >Amériques</a>                </li>
                <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/europe" >Europe</a>                </li>
                <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/moyen-orient" >Moyen-Orient</a>                </li>
                <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/asie-pacifique" >Asie-Pacifique</a>                </li>
                <li class="sub-section monde">
<a href="https://www.journaldemontreal.com/monde/afrique" >Afrique</a>                </li>
    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-item argent">
                                            <div class="menu-item-container with-dropdown">
                                                <a href="https://www.journaldemontreal.com/argent"
                                                   data-path="/argent"
                                                   itemprop="url">
                                                        <span itemprop="name">ARGENT</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
    <div class="menu-item-dropdown">
        <ul class="sub-sections">
                    <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/opinions" >Opinions</a>                    </li>
                    <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/dans-vos-poches" >Finances personnelles</a>                    </li>
                    <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/penurie-de-main-doeuvre" >Emplois</a>                    </li>
                    <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/ou-vont-vos-impots" >Où vont vos impôts</a>                    </li>
                    <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/entreprises" >Entreprises</a>                    </li>
                    <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/bourse" >Bourse</a>                    </li>
                    <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/immobilier" >Marché immobilier</a>                    </li>
        </ul>
    </div>
                                            </div>
                                            <meta itemprop="position" content="3"/>
                                                <div class="mobile-dropdown">
                                                    <span class="mobile-dropdown-go-back"></span>
                                                    <a class="section-link" href="https://www.journaldemontreal.com/argent"
                                                       data-path="/argent"
                                                       itemprop="url">
                                                            <span itemprop="name">ARGENT</span>
                                                    </a>
    <ul class="mobile sub-sections">
                <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/opinions" >Opinions</a>                </li>
                <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/dans-vos-poches" >Finances personnelles</a>                </li>
                <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/penurie-de-main-doeuvre" >Emplois</a>                </li>
                <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/ou-vont-vos-impots" >Où vont vos impôts</a>                </li>
                <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/entreprises" >Entreprises</a>                </li>
                <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/bourse" >Bourse</a>                </li>
                <li class="sub-section argent">
<a href="https://www.journaldemontreal.com/argent/immobilier" >Marché immobilier</a>                </li>
    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-item opinions">
                                            <div class="menu-item-container with-dropdown">
                                                <a href="https://www.journaldemontreal.com/opinions"
                                                   data-path="/opinions"
                                                   itemprop="url">
                                                        <span itemprop="name">OPINIONS</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
    <div class="menu-item-dropdown">
        <ul class="sub-sections">
                    <li class="sub-section opinions">
<a href="https://www.journaldemontreal.com/opinions/toutes-nos-chroniques" >Chroniqueurs</a>                    </li>
                    <li class="sub-section opinions">
<a href="https://www.journaldemontreal.com/opinions/faitesladifference" >Faites la différence</a>                    </li>
                    <li class="sub-section opinions">
<a href="https://www.journaldemontreal.com/opinions/blogues" >Perspective</a>                    </li>
                    <li class="sub-section opinions">
<a href="https://www.journaldemontreal.com/opinions/caricatures" >Caricatures</a>                    </li>
        </ul>
    </div>
                                            </div>
                                            <meta itemprop="position" content="4"/>
                                                <div class="mobile-dropdown">
                                                    <span class="mobile-dropdown-go-back"></span>
                                                    <a class="section-link" href="https://www.journaldemontreal.com/opinions"
                                                       data-path="/opinions"
                                                       itemprop="url">
                                                            <span itemprop="name">OPINIONS</span>
                                                    </a>
    <ul class="mobile sub-sections">
                <li class="sub-section opinions">
<a href="https://www.journaldemontreal.com/opinions/toutes-nos-chroniques" >Chroniqueurs</a>                </li>
                <li class="sub-section opinions">
<a href="https://www.journaldemontreal.com/opinions/faitesladifference" >Faites la différence</a>                </li>
                <li class="sub-section opinions">
<a href="https://www.journaldemontreal.com/opinions/blogues" >Perspective</a>                </li>
                <li class="sub-section opinions">
<a href="https://www.journaldemontreal.com/opinions/caricatures" >Caricatures</a>                </li>
    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-item sports">
                                            <div class="menu-item-container with-dropdown">
                                                <a href="https://www.journaldemontreal.com/sports"
                                                   data-path="/sports"
                                                   itemprop="url">
                                                        <span itemprop="name">SPORTS</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
    <div class="menu-item-dropdown">
        <ul class="sub-sections">
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/opinions" >Opinions</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/hockey/canadien" >Canadien</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/hockey" >Hockey</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/tennis" >Tennis</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/soccer" >Soccer</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/soccer/cf-montreal" >CF Montréal</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/baseball" >Baseball</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/football" >Football</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/football/alouettes" >Alouettes</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/combats" >Combats</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/courses" >Course automobile</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/golf" >Golf</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/basketball" >Basketball</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/olympiques" >Olympiques</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/plein-air-chasse-et-peche" >Chasse et pêche</a>                    </li>
                    <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/autres-sports" >Autres sports</a>                    </li>
        </ul>
    </div>
                                            </div>
                                            <meta itemprop="position" content="5"/>
                                                <div class="mobile-dropdown">
                                                    <span class="mobile-dropdown-go-back"></span>
                                                    <a class="section-link" href="https://www.journaldemontreal.com/sports"
                                                       data-path="/sports"
                                                       itemprop="url">
                                                            <span itemprop="name">SPORTS</span>
                                                    </a>
    <ul class="mobile sub-sections">
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/opinions" >Opinions</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/hockey/canadien" >Canadien</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/hockey" >Hockey</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/tennis" >Tennis</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/soccer" >Soccer</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/soccer/cf-montreal" >CF Montréal</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/baseball" >Baseball</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/football" >Football</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/football/alouettes" >Alouettes</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/combats" >Combats</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/courses" >Course automobile</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/golf" >Golf</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/basketball" >Basketball</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/olympiques" >Olympiques</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/plein-air-chasse-et-peche" >Chasse et pêche</a>                </li>
                <li class="sub-section sports">
<a href="https://www.journaldemontreal.com/sports/autres-sports" >Autres sports</a>                </li>
    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-item enquetes">
                                            <div class="menu-item-container ">
                                                <a href="https://www.journaldemontreal.com/enquetes"
                                                   data-path="/enquetes"
                                                   itemprop="url">
                                                        <span itemprop="name">BUREAU D'ENQUÊTE</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
                                            </div>
                                            <meta itemprop="position" content="6"/>
                                        </li>
                                        <li class="menu-item spectacles">
                                            <div class="menu-item-container with-dropdown">
                                                <a href="https://www.journaldemontreal.com/spectacles"
                                                   data-path="/spectacles"
                                                   itemprop="url">
                                                        <span itemprop="name">SPECTACLES</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
    <div class="menu-item-dropdown">
        <ul class="sub-sections">
                    <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/opinions" >Opinions</a>                    </li>
                    <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/la-voix" >La voix</a>                    </li>
                    <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/cinema" >Cinéma</a>                    </li>
                    <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/television" >Télévision</a>                    </li>
                    <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/musique" >Musique</a>                    </li>
                    <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/theatre" >Théâtre</a>                    </li>
                    <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/humour" >Humour</a>                    </li>
                    <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/jetset" >Vedettes</a>                    </li>
                    <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/plateformes-numeriques" >Plateformes Numériques</a>                    </li>
        </ul>
    </div>
                                            </div>
                                            <meta itemprop="position" content="7"/>
                                                <div class="mobile-dropdown">
                                                    <span class="mobile-dropdown-go-back"></span>
                                                    <a class="section-link" href="https://www.journaldemontreal.com/spectacles"
                                                       data-path="/spectacles"
                                                       itemprop="url">
                                                            <span itemprop="name">SPECTACLES</span>
                                                    </a>
    <ul class="mobile sub-sections">
                <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/opinions" >Opinions</a>                </li>
                <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/la-voix" >La voix</a>                </li>
                <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/cinema" >Cinéma</a>                </li>
                <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/television" >Télévision</a>                </li>
                <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/musique" >Musique</a>                </li>
                <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/theatre" >Théâtre</a>                </li>
                <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/humour" >Humour</a>                </li>
                <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/jetset" >Vedettes</a>                </li>
                <li class="sub-section spectacles">
<a href="https://www.journaldemontreal.com/spectacles/plateformes-numeriques" >Plateformes Numériques</a>                </li>
    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-item jm">
                                            <div class="menu-item-container with-dropdown">
                                                <a href="https://www.journaldemontreal.com/jm"
                                                   data-path="/jm"
                                                   itemprop="url">
                                                        <span itemprop="name">STYLES DE VIE</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
    <div class="menu-item-dropdown">
        <ul class="sub-sections">
                    <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/sante" >Santé</a>                    </li>
                    <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/mode-beaute" >Mode et beauté</a>                    </li>
                    <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/sexualite" >Sexualité</a>                    </li>
                    <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/psycho" >Psycho</a>                    </li>
                    <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/saveurs" >Cuisine</a>                    </li>
                    <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/famille" >Famille</a>                    </li>
                    <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/sortir" >Sortir</a>                    </li>
                    <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/techno" >Techno</a>                    </li>
                    <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/livres" >Livres</a>                    </li>
                    <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/chez-soi" >Chez soi</a>                    </li>
        </ul>
    </div>
                                            </div>
                                            <meta itemprop="position" content="8"/>
                                                <div class="mobile-dropdown">
                                                    <span class="mobile-dropdown-go-back"></span>
                                                    <a class="section-link" href="https://www.journaldemontreal.com/jm"
                                                       data-path="/jm"
                                                       itemprop="url">
                                                            <span itemprop="name">STYLES DE VIE</span>
                                                    </a>
    <ul class="mobile sub-sections">
                <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/sante" >Santé</a>                </li>
                <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/mode-beaute" >Mode et beauté</a>                </li>
                <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/sexualite" >Sexualité</a>                </li>
                <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/psycho" >Psycho</a>                </li>
                <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/saveurs" >Cuisine</a>                </li>
                <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/famille" >Famille</a>                </li>
                <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/sortir" >Sortir</a>                </li>
                <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/techno" >Techno</a>                </li>
                <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/livres" >Livres</a>                </li>
                <li class="sub-section jm">
<a href="https://www.journaldemontreal.com/jm/chez-soi" >Chez soi</a>                </li>
    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-item vacances">
                                            <div class="menu-item-container with-dropdown">
                                                <a href="https://www.journaldemontreal.com/voyages"
                                                   data-path="/voyages"
                                                   itemprop="url">
                                                        <span itemprop="name">VOYAGES</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
    <div class="menu-item-dropdown">
        <ul class="sub-sections">
                    <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/quebec" >Québec</a>                    </li>
                    <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/canada" >Canada</a>                    </li>
                    <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/etats-unis" >États-Unis</a>                    </li>
                    <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/mexique-et-caraibes" >Mexique et Caraïbes</a>                    </li>
                    <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/europe" >Europe</a>                    </li>
                    <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/conseils" >Conseils</a>                    </li>
                    <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/tout-inclus" >Tout inclus</a>                    </li>
                    <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/autres-destinations" >Autres destinations</a>                    </li>
        </ul>
    </div>
                                            </div>
                                            <meta itemprop="position" content="9"/>
                                                <div class="mobile-dropdown">
                                                    <span class="mobile-dropdown-go-back"></span>
                                                    <a class="section-link" href="https://www.journaldemontreal.com/voyages"
                                                       data-path="/voyages"
                                                       itemprop="url">
                                                            <span itemprop="name">VOYAGES</span>
                                                    </a>
    <ul class="mobile sub-sections">
                <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/quebec" >Québec</a>                </li>
                <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/canada" >Canada</a>                </li>
                <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/etats-unis" >États-Unis</a>                </li>
                <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/mexique-et-caraibes" >Mexique et Caraïbes</a>                </li>
                <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/europe" >Europe</a>                </li>
                <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/conseils" >Conseils</a>                </li>
                <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/tout-inclus" >Tout inclus</a>                </li>
                <li class="sub-section vacances">
<a href="https://www.journaldemontreal.com/voyages/autres-destinations" >Autres destinations</a>                </li>
    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-item actualite">
                                            <div class="menu-item-container ">
                                                <a href="https://www.journaldemontreal.com/5-minutes"
                                                   data-path="/5-minutes"
                                                   itemprop="url">
                                                        <span itemprop="name">EN 5 MINUTES</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
                                            </div>
                                            <meta itemprop="position" content="10"/>
                                        </li>
                                        <li class="menu-item auto">
                                            <div class="menu-item-container with-dropdown">
                                                <a href="https://www.journaldemontreal.com/auto"
                                                   data-path="/auto"
                                                   itemprop="url">
                                                        <span itemprop="name">AUTO</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
    <div class="menu-item-dropdown">
        <ul class="sub-sections">
                    <li class="sub-section auto">
<a href="https://www.journaldemontreal.com/auto/opinions" >Opinions</a>                    </li>
                    <li class="sub-section auto">
<a href="https://www.journaldemontreal.com/auto/actualite" >Actualités</a>                    </li>
                    <li class="sub-section auto">
<a href="https://www.journaldemontreal.com/auto/essais" >Essais</a>                    </li>
                    <li class="sub-section auto">
<a href="https://www.journaldemontreal.com/auto/occasion" >Occasion</a>                    </li>
                    <li class="sub-section auto">
<a href="https://www.journaldemontreal.com/auto/electriques" >Électriques</a>                    </li>
        </ul>
    </div>
                                            </div>
                                            <meta itemprop="position" content="11"/>
                                                <div class="mobile-dropdown">
                                                    <span class="mobile-dropdown-go-back"></span>
                                                    <a class="section-link" href="https://www.journaldemontreal.com/auto"
                                                       data-path="/auto"
                                                       itemprop="url">
                                                            <span itemprop="name">AUTO</span>
                                                    </a>
    <ul class="mobile sub-sections">
                <li class="sub-section auto">
<a href="https://www.journaldemontreal.com/auto/opinions" >Opinions</a>                </li>
                <li class="sub-section auto">
<a href="https://www.journaldemontreal.com/auto/actualite" >Actualités</a>                </li>
                <li class="sub-section auto">
<a href="https://www.journaldemontreal.com/auto/essais" >Essais</a>                </li>
                <li class="sub-section auto">
<a href="https://www.journaldemontreal.com/auto/occasion" >Occasion</a>                </li>
                <li class="sub-section auto">
<a href="https://www.journaldemontreal.com/auto/electriques" >Électriques</a>                </li>
    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-item maisonextra">
                                            <div class="menu-item-container ">
                                                <a href="https://www.journaldemontreal.com/maison-extra"
                                                   data-path="/maison-extra"
                                                   itemprop="url">
                                                        <span itemprop="name">MAISON</span>
                                                </a>
                                                <span class="menu-item-arrows"></span>
                                            </div>
                                            <meta itemprop="position" content="12"/>
                                        </li>
                                        <li class="menu-item hublo">
                                            <div class="menu-item-container with-dropdown">
                                                <a href="https://www.journaldemontreal.com/hublo"
                                                   data-path="/hublo"
                                                   itemprop="url">
                                                        <img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/34f3142f-fc11-4d7b-b9a1-69ddd7d6df79_hublo.svg" alt="Hublo">
                                                </a>
                                                <span class="menu-item-arrows"></span>
    <div class="menu-item-dropdown">
        <ul class="sub-sections">
                    <li class="sub-section hublo">
<a href="https://www.journaldemontreal.com/hublo/dossiers-thematiques" >Dossiers thématiques</a>                    </li>
        </ul>
    </div>
                                            </div>
                                            <meta itemprop="position" content="13"/>
                                                <div class="mobile-dropdown">
                                                    <span class="mobile-dropdown-go-back"></span>
                                                    <a class="section-link" href="https://www.journaldemontreal.com/hublo"
                                                       data-path="/hublo"
                                                       itemprop="url">
                                                            <img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/34f3142f-fc11-4d7b-b9a1-69ddd7d6df79_hublo.svg" alt="section">
                                                    </a>
    <ul class="mobile sub-sections">
                <li class="sub-section hublo">
<a href="https://www.journaldemontreal.com/hublo/dossiers-thematiques" >Dossiers thématiques</a>                </li>
    </ul>
                                                </div>
                                        </li>
                            <li class="menu-item plus-menu">
                                <div class="menu-item-container with-dropdown">
                                    <a>
                                        <span itemprop="name">Plus</span>
                                    </a>
                                    <span class="menu-item-arrows"></span>
        <div class="menu-item-dropdown">
        <ul class="sub-sections">
                <li class="sub-section plus-menu">
                    <a href="https://www.journaldemontreal.com/outils-interactifs"
                       data-path="/outils-interactifs"
                       itemprop="url">
                        <span itemprop="name">OUTILS INTERACTIFS</span>
                    </a>
                </li>
                <li class="sub-section plus-menu">
                    <a href="https://www.journaldemontreal.com/horoscopes"
                       data-path="/horoscopes"
                       itemprop="url">
                        <span itemprop="name">HOROSCOPE</span>
                    </a>
                </li>
                <li class="sub-section plus-menu">
                    <a href="https://www.journaldemontreal.com/deces"
                       data-path="/deces"
                       itemprop="url">
                        <span itemprop="name">DÉCÈS</span>
                    </a>
                </li>
                <li class="sub-section plus-menu">
                    <a href="https://www.journaldemontreal.com/concours"
                       data-path="/concours"
                       itemprop="url">
                        <span itemprop="name">CONCOURS</span>
                    </a>
                </li>
            <li class="sub-section plus-menu">
                <a href="https://petitesannonces.journaldemontreal.com/" data-path="https://petitesannonces.journaldemontreal.com/" target="_blank" itemprop="url">
                    <span itemprop="name">Petites annonces</span>
                </a>
            </li>
    </ul>
    </div>
                                </div>
                                <div class="mobile-dropdown">
                                    <span class="mobile-dropdown-go-back"></span>
                                    <a class="section-link">
                                        <span itemprop="name">Plus</span>
                                    </a>
        <ul class="mobile sub-sections">
                <li class="sub-section plus-menu">
                    <a href="https://www.journaldemontreal.com/outils-interactifs"
                       data-path="/outils-interactifs"
                       itemprop="url">
                        <span itemprop="name">OUTILS INTERACTIFS</span>
                    </a>
                </li>
                <li class="sub-section plus-menu">
                    <a href="https://www.journaldemontreal.com/horoscopes"
                       data-path="/horoscopes"
                       itemprop="url">
                        <span itemprop="name">HOROSCOPE</span>
                    </a>
                </li>
                <li class="sub-section plus-menu">
                    <a href="https://www.journaldemontreal.com/deces"
                       data-path="/deces"
                       itemprop="url">
                        <span itemprop="name">DÉCÈS</span>
                    </a>
                </li>
                <li class="sub-section plus-menu">
                    <a href="https://www.journaldemontreal.com/concours"
                       data-path="/concours"
                       itemprop="url">
                        <span itemprop="name">CONCOURS</span>
                    </a>
                </li>
            <li class="sub-section plus-menu">
                <a href="https://petitesannonces.journaldemontreal.com/" data-path="https://petitesannonces.journaldemontreal.com/" target="_blank" itemprop="url">
                    <span itemprop="name">Petites annonces</span>
                </a>
            </li>
    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul class="external-links">
                                    <li class="menu-item external">
                                        <div class="menu-item-container external">
                                            <a href="https://www.qub.ca/radio" target="_blank"
                                               itemprop="url">
                                                    <img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/5b5e4bc0-d998-493f-aa6e-5a82d5f6cb9a_qub-radio.svg" alt="qub radio">
                                            </a>
                                        </div>
                                    </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    </div>
        <div class="sidebar-wrapper"></div>
        <div id="transitionned-content">
            <div class="article-section-bar-wrapper"></div>
            <input type="hidden" name="thisPage" id="thisPage" value="subsection">
                <input type="hidden" name="thisSection" id="thisSection" value="auto">
                <input type="hidden" name="thisRss" id="thisRss" value="https://www.journaldemontreal.com/auto/actualite/rss.xml" >
  <div id="landingSousSections" >
<span id="top"></span>
  <div class="trans-sectionparent">
    <div class="loaded-section-parent">
      <div class="section-block " data-section="autoActualites">
        <div class="section-block-sticky-banner">          <!-- dfpMultiflexStickyBanner -->
  <div class="top-ad-multiplex-sticky stickiness clearfix dfp-labeled">
    <div class="dfpLabel">
        <div class="ligne"></div>
        <div class="label">Publicité</div>
        <div class="ligne"></div>
    </div>
    <div id='multiflex_Sticky_banner-f817a361'
         class='ad-to-load dfp-ad'
         data-size="dfpMultiflexStickyBanner"
         data-currentsection="autoActualites"
         data-pos="top"
         data-tile="1"
         data-ajax-interval=""
         data-is-empty="true"
         data-hidden-if-empty="false">
    </div>
  </div>
          <!-- breadcrumb -->
    <div class="jrdx-breadcrumbs">
        <ul>
            <li>
                <a href="https://www.journaldemontreal.com">
                <span>
  <img src="//theme.journaldemontreal.com/assets/ebae541/images/icon/rjdx-home.svg" alt="Accueil" 
  />
                </span>
                </a>
            </li>
                <li>
                        <span>
  <img src="//theme.journaldemontreal.com/assets/ebae541/images/icon/breadc-arrows.svg" alt="Accueil" 
  />
                    </span>
                    <a href="https://www.journaldemontreal.com/auto">
                        <span>
                                auto
                        </span>
                    </a>
                </li>
        </ul>
    </div>
          <!-- sectionTitle -->
                <div class="section-head main-section-head sub-section-head "
                     data-description="">
                    <div class="title auto">
<a href="https://www.journaldemontreal.com/auto/actualite" class="section-head-link" ><div class="section-title">Actualités</div></a>                    </div>
                    <div class="sub-sections">
                    </div>
                </div>
          <!-- static -->
  <script>
Wasp.Dfp.bodyType = $('body').attr('data-pagetype')
</script>
</div>
<!--endtag--><section class="section dfp-path" data-dfpPath="/auto/news">          <!-- dfpMultiflexOutofpage -->
  <div class="ad-multiplex-outofpage clearfix">
    <div id='multiflex_banner-57ec2aa2e4b089eca92340c1-8abf6965'
         class='ad-to-load dfp-ad'
         data-size="dfpMultiflexOutofpage"
         data-currentsection="autoActualites"
         data-pos=""
         data-tile=""                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         nu
         data-ajax-interval=""
         data-is-empty="true"
         data-out-of-page="true"
         data-hidden-if-empty="false">
    </div>
  <script>
    $(document).ready(function () {
      //If mobile
      if(isMobile()){
        //If mobile init ad only if not in rightrail
        if ($("#multiflex_banner-57ec2aa2e4b089eca92340c1-8abf6965").parents('.section-rightrail').length == 0) {
          Wasp.Dfp.GoogleTag.initAd($("#multiflex_banner-57ec2aa2e4b089eca92340c1-8abf6965"));
        }
      }else{
        //IF not mobile init only ads that are not mobile-only
        if('multiflex_banner-57ec2aa2e4b089eca92340c1-8abf6965'.indexOf('mobile-only') <= 0){
          Wasp.Dfp.GoogleTag.initAd($("#multiflex_banner-57ec2aa2e4b089eca92340c1-8abf6965"));
        }
      }
    });
  </script>
  </div>
<!-- Dynamic Grid - Start -->
<div class="dynamic-grid clearfix">
    <div class="gutter-sizer"></div>          <!-- sectionSmallTitle -->
          <!-- storyBySection -->










  <div class="item front w3 h2 auto  ">
    <article class="item-inner article" data-permission="all">
      <div class="ab-testing ab-test__default">
  <div class="show-comments">

	
  </div>


        <div class="show-comments show-comments_65c50ac605fa974ca84f95f9 show-comments-not-loaded">
<a href="https://www.guideautoweb.com/articles/73474/cette-buick-riviera-1971-en-hommage-a-guy-lafleur-pourrait-etre-a-vous/" class="bubble sml goToComments" rel="external" ><span class="talk-comment-count_65c50ac605fa974ca84f95f9" data-story-url="https://www.journaldemontreal.com/2024/02/08/cette-buick-riviera-1971-pourrait-etre-a-vous" data-story-id="65c50ac605fa974ca84f95f9"></span></a>        </div>
      </div>
      <div class="ab-testing ab-test__variant">
  <div class="show-comments">

	
  </div>
      </div>
<a href="https://www.guideautoweb.com/articles/73474/cette-buick-riviera-1971-en-hommage-a-guy-lafleur-pourrait-etre-a-vous/" rel="external" ><div class="title-box"> <div class="gradient-holder"></div> <div class="title-wrapper"> <div class="hidden-content"> <p class="sub-title">Avis aux amateurs de belles voitures d’époque et de hockey : une Buick Riviera 1971 soigneusement restaurée et créée pourrait être à vous.</p> </div> <div class="hints"> <span class="strapline">En hommage à Guy Lafleur</span> </div> <h2 class="main-title"> Cette Buick Riviera 1971 pourrait être à vous </h2> </div> </div> <picture data-impact="2"> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="https://m1.quebecormedia.com/emp/emp/607152_cette_buick_riviera_1971_en_hommage_a_guy_lafleur_pourrait_etre_a_vous6c4a0dde-6787-41ae-ac37-19e20f46cd48_ORIGINAL.jpg?impolicy=crop-resize&amp;x=242&amp;y=0&amp;w=1436&amp;h=1200&amp;width=764" media="(max-width: 1300px)" width="500" height="500"> <source srcset="https://m1.quebecormedia.com/emp/emp/607152_cette_buick_riviera_1971_en_hommage_a_guy_lafleur_pourrait_etre_a_vous6c4a0dde-6787-41ae-ac37-19e20f46cd48_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=920" media="(max-width: 4000px)" width="920" height="718"> <!--[if IE 9]></video><![endif]--> <img srcset="https://m1.quebecormedia.com/emp/emp/607152_cette_buick_riviera_1971_en_hommage_a_guy_lafleur_pourrait_etre_a_vous6c4a0dde-6787-41ae-ac37-19e20f46cd48_ORIGINAL.jpg?impolicy=crop-resize&amp;x=240&amp;y=0&amp;w=1440&amp;h=1200&amp;width=378, https://m1.quebecormedia.com/emp/emp/607152_cette_buick_riviera_1971_en_hommage_a_guy_lafleur_pourrait_etre_a_vous6c4a0dde-6787-41ae-ac37-19e20f46cd48_ORIGINAL.jpg?impolicy=crop-resize&amp;x=240&amp;y=0&amp;w=1440&amp;h=1200&amp;width=756 2x" class="item-img Story" alt="Cette Buick Riviera 1971 pourrait être à vous"> </picture></a>    </article>
  </div>
          <!-- storyBySection -->










  <div class="item w1 h1 auto  ">
    <article class="item-inner article" data-permission="all">
      <div class="ab-testing ab-test__default">
  <div class="show-comments">

	
  </div>


        <div class="show-comments show-comments_65c4f92405fa974ca84f9383 show-comments-not-loaded">
<a href="https://www.guideautoweb.com/articles/73475/en-video-que-font-les-constructeurs-pour-remedier-aux-vols-de-vehicules/" class="bubble sml goToComments" rel="external" ><span class="talk-comment-count_65c4f92405fa974ca84f9383" data-story-url="https://www.journaldemontreal.com/2024/02/08/vols-de-vehicules--que-font-les-constructeurs" data-story-id="65c4f92405fa974ca84f9383"></span></a>        </div>
      </div>
      <div class="ab-testing ab-test__variant">
  <div class="show-comments">

	
  </div>
      </div>
<a href="https://www.guideautoweb.com/articles/73475/en-video-que-font-les-constructeurs-pour-remedier-aux-vols-de-vehicules/" rel="external" ><div class="title-box"> <div class="gradient-holder"></div> <div class="title-wrapper"> <div class="hidden-content"> <p class="sub-title">C’est aujourd’hui que se tient à Ottawa un Sommet sur les vols de véhicules réunissant plusieurs intervenants.</p> </div> <div class="hints"> <span class="strapline">Actualités</span> </div> <h2 class="main-title"> Vols de véhicules : Que font les constructeurs? </h2> </div> </div> <picture data-impact="3"> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="https://m1.quebecormedia.com/emp/emp/607147_en_video_que_font_les_constructeurs_pour_remedier_aux_vols_de_vehicules17aaf5ca-b1fc-4e26-aaea-a689a08882df_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=378" media="(max-width: 0px)" width="300" height="169"> <source srcset="https://m1.quebecormedia.com/emp/emp/607147_en_video_que_font_les_constructeurs_pour_remedier_aux_vols_de_vehicules17aaf5ca-b1fc-4e26-aaea-a689a08882df_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=378" media="(max-width: 4000px)" width="920" height="718"> <!--[if IE 9]></video><![endif]--> <img srcset="https://m1.quebecormedia.com/emp/emp/607147_en_video_que_font_les_constructeurs_pour_remedier_aux_vols_de_vehicules17aaf5ca-b1fc-4e26-aaea-a689a08882df_ORIGINAL.jpg?impolicy=crop-resize&amp;x=240&amp;y=0&amp;w=1440&amp;h=1200&amp;width=378, https://m1.quebecormedia.com/emp/emp/607147_en_video_que_font_les_constructeurs_pour_remedier_aux_vols_de_vehicules17aaf5ca-b1fc-4e26-aaea-a689a08882df_ORIGINAL.jpg?impolicy=crop-resize&amp;x=240&amp;y=0&amp;w=1440&amp;h=1200&amp;width=756 2x" class="item-img Story" alt="Vols de véhicules : Que font les constructeurs?"> </picture></a>    </article>
  </div>






  <div class="item w1 h1 auto  ">
    <article class="item-inner article" data-permission="all">
      <div class="ab-testing ab-test__default">
  <div class="show-comments">

	
  </div>


        <div class="show-comments show-comments_65c3be9007c12b1ca0056532 show-comments-not-loaded">
<a href="https://www.guideautoweb.com/articles/73424/le-guide-de-l-auto-met-a-l-essai-les-subaru-impreza-et-crosstrek-2024/" class="bubble sml goToComments" rel="external" ><span class="talk-comment-count_65c3be9007c12b1ca0056532" data-story-url="https://www.journaldemontreal.com/2024/02/08/les-subaru-impreza-et-crosstrek-2024-a-lessai" data-story-id="65c3be9007c12b1ca0056532"></span></a>        </div>
      </div>
      <div class="ab-testing ab-test__variant">
  <div class="show-comments">

	
  </div>
      </div>
<a href="https://www.guideautoweb.com/articles/73424/le-guide-de-l-auto-met-a-l-essai-les-subaru-impreza-et-crosstrek-2024/" rel="external" ><div class="title-box"> <div class="gradient-holder"></div> <div class="title-wrapper"> <div class="hidden-content"> <p class="sub-title">Ce samedi, à l’émission du Guide de l’auto, nos animateurs Antoine Joubert et Gabriel Gélinas testent les Subaru Crosstrek et Impreza 2024. </p> </div> <div class="hints"> <span class="strapline">Émission du Guide de l'auto</span> </div> <h2 class="main-title"> Les Subaru Impreza et Crosstrek 2024 à l'essai </h2> </div> </div> <picture data-impact="3"> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="https://m1.quebecormedia.com/emp/emp/606915_le_guide_de_l_auto_met_a_l_essai_les_subaru_impreza_et_crosstrek_202456bb03ce-d29a-485a-ad5f-d0d1809e9886_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=54&amp;w=1727&amp;h=971&amp;width=378" media="(max-width: 0px)" width="300" height="169"> <source srcset="https://m1.quebecormedia.com/emp/emp/606915_le_guide_de_l_auto_met_a_l_essai_les_subaru_impreza_et_crosstrek_202456bb03ce-d29a-485a-ad5f-d0d1809e9886_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=54&amp;w=1727&amp;h=971&amp;width=378" media="(max-width: 4000px)" width="920" height="718"> <!--[if IE 9]></video><![endif]--> <img srcset="https://m1.quebecormedia.com/emp/emp/606915_le_guide_de_l_auto_met_a_l_essai_les_subaru_impreza_et_crosstrek_202456bb03ce-d29a-485a-ad5f-d0d1809e9886_ORIGINAL.jpg?impolicy=crop-resize&amp;x=241&amp;y=0&amp;w=1338&amp;h=1079&amp;width=378, https://m1.quebecormedia.com/emp/emp/606915_le_guide_de_l_auto_met_a_l_essai_les_subaru_impreza_et_crosstrek_202456bb03ce-d29a-485a-ad5f-d0d1809e9886_ORIGINAL.jpg?impolicy=crop-resize&amp;x=241&amp;y=0&amp;w=1338&amp;h=1079&amp;width=756 2x" class="item-img Story" alt="Les Subaru Impreza et Crosstrek 2024 à l'essai"> </picture></a>    </article>
  </div>






  <div class="item w1 h1 auto  ">
    <article class="item-inner article" data-permission="all">
      <div class="ab-testing ab-test__default">
  <div class="show-comments">

	
  </div>


        <div class="show-comments show-comments_65c3f01607c12b1ca00569dc show-comments-not-loaded">
<a href="https://www.guideautoweb.com/articles/73465/une-delorean-de-retour-vers-le-futur-detruite-son-celebre-proprio-decede/" class="bubble sml goToComments" rel="external" ><span class="talk-comment-count_65c3f01607c12b1ca00569dc" data-story-url="https://www.journaldemontreal.com/2024/02/07/une-delorean-de-retour-vers-le-futur-detruite" data-story-id="65c3f01607c12b1ca00569dc"></span></a>        </div>
      </div>
      <div class="ab-testing ab-test__variant">
  <div class="show-comments">

	
  </div>
      </div>
<a href="https://www.guideautoweb.com/articles/73465/une-delorean-de-retour-vers-le-futur-detruite-son-celebre-proprio-decede/" rel="external" ><div class="title-box"> <div class="gradient-holder"></div> <div class="title-wrapper"> <div class="hidden-content"> <p class="sub-title">Il existe quelques répliques de la voiture. Malheureusement, l’une d’elles a été détruite lors d’un accident et son propriétaire n’a pas survécu. </p> </div> <div class="hints"> <span class="strapline">Son célèbre proprio décède</span> </div> <h2 class="main-title"> Une DeLorean de Retour vers le futur détruite </h2> </div> </div> <picture data-impact="3"> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="https://m1.quebecormedia.com/emp/emp/607036_une_delorean_de_retour_vers_le_futur_detruite_son_celebre_proprio_decededcbcc116-3c91-4f1d-b86f-de67ddf12d88_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=44&amp;w=1393&amp;h=783&amp;width=378" media="(max-width: 0px)" width="300" height="169"> <source srcset="https://m1.quebecormedia.com/emp/emp/607036_une_delorean_de_retour_vers_le_futur_detruite_son_celebre_proprio_decededcbcc116-3c91-4f1d-b86f-de67ddf12d88_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=44&amp;w=1393&amp;h=783&amp;width=378" media="(max-width: 4000px)" width="920" height="718"> <!--[if IE 9]></video><![endif]--> <img srcset="https://m1.quebecormedia.com/emp/emp/607036_une_delorean_de_retour_vers_le_futur_detruite_son_celebre_proprio_decededcbcc116-3c91-4f1d-b86f-de67ddf12d88_ORIGINAL.jpg?impolicy=crop-resize&amp;x=174&amp;y=0&amp;w=1045&amp;h=871&amp;width=378, https://m1.quebecormedia.com/emp/emp/607036_une_delorean_de_retour_vers_le_futur_detruite_son_celebre_proprio_decededcbcc116-3c91-4f1d-b86f-de67ddf12d88_ORIGINAL.jpg?impolicy=crop-resize&amp;x=174&amp;y=0&amp;w=1045&amp;h=871&amp;width=756 2x" class="item-img Story" alt="Une DeLorean de Retour vers le futur détruite"> </picture></a>    </article>
  </div>






  <div class="item w1 h1 auto  ">
    <article class="item-inner article" data-permission="all">
      <div class="ab-testing ab-test__default">
  <div class="show-comments">

	
  </div>


        <div class="show-comments show-comments_65c3e00707c12b1ca0056807 show-comments-not-loaded">
<a href="https://www.guideautoweb.com/articles/73462/ford-travaille-sur-une-plateforme-pour-des-vehicules-electriques-moins-chers/" class="bubble sml goToComments" rel="external" ><span class="talk-comment-count_65c3e00707c12b1ca0056807" data-story-url="https://www.journaldemontreal.com/2024/02/07/ford-travaille-sur-une-plateforme-moins-cher" data-story-id="65c3e00707c12b1ca0056807"></span></a>        </div>
      </div>
      <div class="ab-testing ab-test__variant">
  <div class="show-comments">

	
  </div>
      </div>
<a href="https://www.guideautoweb.com/articles/73462/ford-travaille-sur-une-plateforme-pour-des-vehicules-electriques-moins-chers/" rel="external" ><div class="title-box"> <div class="gradient-holder"></div> <div class="title-wrapper"> <div class="hidden-content"> <p class="sub-title">Jim Farley a révélé qu’une équipe travaillait en parallèle sur une nouvelle plateforme de véhicules électriques dont les coûts seraient réduits.</p> </div> <div class="hints"> <span class="strapline">Véhicules électriques </span> </div> <h2 class="main-title"> Ford travaille sur une plateforme moins cher </h2> </div> </div> <picture data-impact="3"> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="https://m1.quebecormedia.com/emp/emp/607023_ford_travaille_sur_une_plateforme_pour_des_vehicules_electriques_moins_chers741ddc78-bda1-45fb-b792-cf3d6593ca4c_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=378" media="(max-width: 0px)" width="300" height="169"> <source srcset="https://m1.quebecormedia.com/emp/emp/607023_ford_travaille_sur_une_plateforme_pour_des_vehicules_electriques_moins_chers741ddc78-bda1-45fb-b792-cf3d6593ca4c_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=378" media="(max-width: 4000px)" width="920" height="718"> <!--[if IE 9]></video><![endif]--> <img srcset="https://m1.quebecormedia.com/emp/emp/607023_ford_travaille_sur_une_plateforme_pour_des_vehicules_electriques_moins_chers741ddc78-bda1-45fb-b792-cf3d6593ca4c_ORIGINAL.jpg?impolicy=crop-resize&amp;x=240&amp;y=0&amp;w=1440&amp;h=1200&amp;width=378, https://m1.quebecormedia.com/emp/emp/607023_ford_travaille_sur_une_plateforme_pour_des_vehicules_electriques_moins_chers741ddc78-bda1-45fb-b792-cf3d6593ca4c_ORIGINAL.jpg?impolicy=crop-resize&amp;x=240&amp;y=0&amp;w=1440&amp;h=1200&amp;width=756 2x" class="item-img Story" alt="Ford travaille sur une plateforme moins cher"> </picture></a>    </article>
  </div>






  <div class="item w1 h1 auto  ">
    <article class="item-inner article" data-permission="all">
      <div class="ab-testing ab-test__default">
  <div class="show-comments">

	
  </div>


        <div class="show-comments show-comments_65c3bcbd07c12b1ca005651f show-comments-not-loaded">
<a href="https://www.guideautoweb.com/articles/73460/deux-rappels-visent-un-demi-million-de-vehicules-gm-au-canada/" class="bubble sml goToComments" rel="external" ><span class="talk-comment-count_65c3bcbd07c12b1ca005651f" data-story-url="https://www.journaldemontreal.com/2024/02/07/2-rappels-visent-un-demi-million-de-vehicules-gm" data-story-id="65c3bcbd07c12b1ca005651f"></span></a>        </div>
      </div>
      <div class="ab-testing ab-test__variant">
  <div class="show-comments">

	
  </div>
      </div>
<a href="https://www.guideautoweb.com/articles/73460/deux-rappels-visent-un-demi-million-de-vehicules-gm-au-canada/" rel="external" ><div class="title-box"> <div class="gradient-holder"></div> <div class="title-wrapper"> <div class="hidden-content"> <p class="sub-title">General Motors annonce cette semaine deux rappels différents qui touchent tout près d’un demi-million de véhicules au Canada.</p> </div> <div class="hints"> <span class="strapline">Au Canada</span> </div> <h2 class="main-title"> 2 rappels visent un demi-million de véhicules GM </h2> </div> </div> <picture data-impact="3"> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="https://m1.quebecormedia.com/emp/emp/607011_deux_rappels_visent_un_demi_million_de_vehicules_gm_au_canada4fd5afbe-77c3-4106-bb4c-d2b4dc6620f9_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=378" media="(max-width: 0px)" width="300" height="169"> <source srcset="https://m1.quebecormedia.com/emp/emp/607011_deux_rappels_visent_un_demi_million_de_vehicules_gm_au_canada4fd5afbe-77c3-4106-bb4c-d2b4dc6620f9_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=378" media="(max-width: 4000px)" width="920" height="718"> <!--[if IE 9]></video><![endif]--> <img srcset="https://m1.quebecormedia.com/emp/emp/607011_deux_rappels_visent_un_demi_million_de_vehicules_gm_au_canada4fd5afbe-77c3-4106-bb4c-d2b4dc6620f9_ORIGINAL.jpg?impolicy=crop-resize&amp;x=239&amp;y=0&amp;w=1488&amp;h=1200&amp;width=378, https://m1.quebecormedia.com/emp/emp/607011_deux_rappels_visent_un_demi_million_de_vehicules_gm_au_canada4fd5afbe-77c3-4106-bb4c-d2b4dc6620f9_ORIGINAL.jpg?impolicy=crop-resize&amp;x=239&amp;y=0&amp;w=1488&amp;h=1200&amp;width=756 2x" class="item-img Story" alt="2 rappels visent un demi-million de véhicules GM"> </picture></a>    </article>
  </div>
          <!-- dfpMultiflexMobileOnly -->
    <div class="item item-ad check-height neutral w1 h1">
        <div class="ad-multiplex-mobile-only dfp-labeled">
    <div class="dfpLabel">
        <div class="ligne"></div>
        <div class="label">Publicité</div>
        <div class="ligne"></div>
    </div>
            <div id='multiplex-mobile-only-top'
                 class='ad-to-load dfp-ad dfp-multiflex-mobile-only'
                 data-size="dfpMultiflexMobileOnly"
                 data-pos="top"
                 data-tile=""
                 data-ajax-interval=""
                 data-is-empty="true"
                 data-hidden-if-empty="false">
            </div>
  <script>
    $(document).ready(function () {
      //If mobile
      if(isMobile()){
        //If mobile init ad only if not in rightrail
        if ($("#multiplex-mobile-only-top").parents('.section-rightrail').length == 0) {
          Wasp.Dfp.GoogleTag.initAd($("#multiplex-mobile-only-top"));
        }
      }else{
        //IF not mobile init only ads that are not mobile-only
        if('multiplex-mobile-only-top'.indexOf('mobile-only') <= 0){
          Wasp.Dfp.GoogleTag.initAd($("#multiplex-mobile-only-top"));
        }
      }
    });
  </script>
        </div>
    </div>
          <!-- storyBySection -->










  <div class="item w1 h1 auto  ">
    <article class="item-inner article" data-permission="all">
      <div class="ab-testing ab-test__default">
  <div class="show-comments">

	
  </div>


        <div class="show-comments show-comments_65c392c307c12b1ca005606d show-comments-not-loaded">
<a href="https://www.guideautoweb.com/articles/73455/mini-cooper-2025-au-tour-de-la-version-a-essence-de-se-pointer/" class="bubble sml goToComments" rel="external" ><span class="talk-comment-count_65c392c307c12b1ca005606d" data-story-url="https://www.journaldemontreal.com/2024/02/07/mini-cooper-2025--au-tour-de-la-version-a-essence" data-story-id="65c392c307c12b1ca005606d"></span></a>        </div>
      </div>
      <div class="ab-testing ab-test__variant">
  <div class="show-comments">

	
  </div>
      </div>
<a href="https://www.guideautoweb.com/articles/73455/mini-cooper-2025-au-tour-de-la-version-a-essence-de-se-pointer/" rel="external" ><div class="title-box"> <div class="gradient-holder"></div> <div class="title-wrapper"> <div class="hidden-content"> <p class="sub-title">C’est au tour de la MINI Cooper à essence de nouvelle génération de faire ses débuts mondiaux. Elle sera en vente au Canada dès ce printemps.</p> </div> <div class="hints"> <span class="strapline">Nouvelle génération</span> </div> <h2 class="main-title"> MINI Cooper 2025: au tour de la version à essence </h2> </div> </div> <picture data-impact="3"> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="https://m1.quebecormedia.com/emp/emp/606954_mini_cooper_2025_au_tour_de_la_version_a_essence_de_se_pointer98d0300f-db3c-4e1d-b994-c7ffa5faa417_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=378" media="(max-width: 0px)" width="300" height="169"> <source srcset="https://m1.quebecormedia.com/emp/emp/606954_mini_cooper_2025_au_tour_de_la_version_a_essence_de_se_pointer98d0300f-db3c-4e1d-b994-c7ffa5faa417_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=378" media="(max-width: 4000px)" width="920" height="718"> <!--[if IE 9]></video><![endif]--> <img srcset="https://m1.quebecormedia.com/emp/emp/606954_mini_cooper_2025_au_tour_de_la_version_a_essence_de_se_pointer98d0300f-db3c-4e1d-b994-c7ffa5faa417_ORIGINAL.jpg?impolicy=crop-resize&amp;x=240&amp;y=0&amp;w=1440&amp;h=1200&amp;width=378, https://m1.quebecormedia.com/emp/emp/606954_mini_cooper_2025_au_tour_de_la_version_a_essence_de_se_pointer98d0300f-db3c-4e1d-b994-c7ffa5faa417_ORIGINAL.jpg?impolicy=crop-resize&amp;x=240&amp;y=0&amp;w=1440&amp;h=1200&amp;width=756 2x" class="item-img Story" alt="MINI Cooper 2025: au tour de la version à essence"> </picture></a>    </article>
  </div>






  <div class="item w1 h1 auto  ">
    <article class="item-inner article" data-permission="all">
      <div class="ab-testing ab-test__default">
  <div class="show-comments">

	
  </div>


        <div class="show-comments show-comments_65c3a96605fa974ca84f7e5c show-comments-not-loaded">
<a href="https://www.guideautoweb.com/articles/73458/kia-abandonne-la-k5-au-canada/" class="bubble sml goToComments" rel="external" ><span class="talk-comment-count_65c3a96605fa974ca84f7e5c" data-story-url="https://www.journaldemontreal.com/2024/02/07/kia-abandonne-la-k5-au-canada" data-story-id="65c3a96605fa974ca84f7e5c"></span></a>        </div>
      </div>
      <div class="ab-testing ab-test__variant">
  <div class="show-comments">

	
  </div>
      </div>
<a href="https://www.guideautoweb.com/articles/73458/kia-abandonne-la-k5-au-canada/" rel="external" ><div class="title-box"> <div class="gradient-holder"></div> <div class="title-wrapper"> <div class="hidden-content"> <p class="sub-title">Le Guide de l’auto a obtenu la confirmation que la Kia K5 ne sera finalement pas de retour au Canada.</p> </div> <div class="hints"> <span class="strapline">Actualités</span> </div> <h2 class="main-title"> Kia abandonne la K5 au Canada </h2> </div> </div> <picture data-impact="3"> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="https://m1.quebecormedia.com/emp/emp/606993_kia_abandonne_la_k5_au_canadafa51f3f5-cd0e-416f-a2c8-03d5e941bf29_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=378" media="(max-width: 0px)" width="300" height="169"> <source srcset="https://m1.quebecormedia.com/emp/emp/606993_kia_abandonne_la_k5_au_canadafa51f3f5-cd0e-416f-a2c8-03d5e941bf29_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=378" media="(max-width: 4000px)" width="920" height="718"> <!--[if IE 9]></video><![endif]--> <img srcset="https://m1.quebecormedia.com/emp/emp/606993_kia_abandonne_la_k5_au_canadafa51f3f5-cd0e-416f-a2c8-03d5e941bf29_ORIGINAL.jpg?impolicy=crop-resize&amp;x=240&amp;y=0&amp;w=1440&amp;h=1200&amp;width=378, https://m1.quebecormedia.com/emp/emp/606993_kia_abandonne_la_k5_au_canadafa51f3f5-cd0e-416f-a2c8-03d5e941bf29_ORIGINAL.jpg?impolicy=crop-resize&amp;x=240&amp;y=0&amp;w=1440&amp;h=1200&amp;width=756 2x" class="item-img Story" alt="Kia abandonne la K5 au Canada"> </picture></a>    </article>
  </div>






  <div class="item w1 h1 auto  ">
    <article class="item-inner article" data-permission="all">
      <div class="ab-testing ab-test__default">
  <div class="show-comments">

	
  </div>


        <div class="show-comments show-comments_65c2a77505fa974ca84f7253 show-comments-not-loaded">
<a href="https://www.guideautoweb.com/articles/73453/cette-f1-miniature-s-est-vendue-plus-cher-qu-une-honda-civic-neuve/" class="bubble sml goToComments" rel="external" ><span class="talk-comment-count_65c2a77505fa974ca84f7253" data-story-url="https://www.journaldemontreal.com/2024/02/07/cette-f1-sest-vendue-plus-cher-quune-civic-neuve" data-story-id="65c2a77505fa974ca84f7253"></span></a>        </div>
      </div>
      <div class="ab-testing ab-test__variant">
  <div class="show-comments">

	
  </div>
      </div>
<a href="https://www.guideautoweb.com/articles/73453/cette-f1-miniature-s-est-vendue-plus-cher-qu-une-honda-civic-neuve/" rel="external" ><div class="title-box"> <div class="gradient-holder"></div> <div class="title-wrapper"> <div class="hidden-content"> <p class="sub-title">Le véhicule dont les enchères se sont terminées est surprenant à plus d'un titre. En effet, il s'agit d'une voiture de Formule 1 télécommandée.</p> </div> <div class="hints"> <span class="strapline">Formule 1 télécommandée</span> </div> <h2 class="main-title"> Cette F1 s'est vendue plus cher qu'une Civic neuve </h2> </div> </div> <picture data-impact="3"> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="https://m1.quebecormedia.com/emp/emp/606908_cette_formule_1_miniature_s_est_vendue_plus_cher_qu_une_honda_civic_neuve3db2ffad-db8f-4725-83af-7a46bac1496a_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=57&amp;w=1843&amp;h=1037&amp;width=378" media="(max-width: 0px)" width="300" height="169"> <source srcset="https://m1.quebecormedia.com/emp/emp/606908_cette_formule_1_miniature_s_est_vendue_plus_cher_qu_une_honda_civic_neuve3db2ffad-db8f-4725-83af-7a46bac1496a_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=57&amp;w=1843&amp;h=1037&amp;width=378" media="(max-width: 4000px)" width="920" height="718"> <!--[if IE 9]></video><![endif]--> <img srcset="https://m1.quebecormedia.com/emp/emp/606908_cette_formule_1_miniature_s_est_vendue_plus_cher_qu_une_honda_civic_neuve3db2ffad-db8f-4725-83af-7a46bac1496a_ORIGINAL.jpg?impolicy=crop-resize&amp;x=231&amp;y=0&amp;w=1381&amp;h=1151&amp;width=378, https://m1.quebecormedia.com/emp/emp/606908_cette_formule_1_miniature_s_est_vendue_plus_cher_qu_une_honda_civic_neuve3db2ffad-db8f-4725-83af-7a46bac1496a_ORIGINAL.jpg?impolicy=crop-resize&amp;x=231&amp;y=0&amp;w=1381&amp;h=1151&amp;width=756 2x" class="item-img Story" alt="Cette F1 s'est vendue plus cher qu'une Civic neuve"> </picture></a>    </article>
  </div>
          <!-- dfpMultiflexMobileOnly -->
    <div class="item item-ad check-height neutral w1 h1">
        <div class="ad-multiplex-mobile-only dfp-labeled">
    <div class="dfpLabel">
        <div class="ligne"></div>
        <div class="label">Publicité</div>
        <div class="ligne"></div>
    </div>
            <div id='multiplex-mobile-only-1'
                 class='ad-to-load dfp-ad dfp-multiflex-mobile-only'
                 data-size="dfpMultiflexMobileOnly"
                 data-pos="1"
                 data-tile=""
                 data-ajax-interval=""
                 data-is-empty="true"
                 data-hidden-if-empty="false">
            </div>
  <script>
    $(document).ready(function () {
      //If mobile
      if(isMobile()){
        //If mobile init ad only if not in rightrail
        if ($("#multiplex-mobile-only-1").parents('.section-rightrail').length == 0) {
          Wasp.Dfp.GoogleTag.initAd($("#multiplex-mobile-only-1"));
        }
      }else{
        //IF not mobile init only ads that are not mobile-only
        if('multiplex-mobile-only-1'.indexOf('mobile-only') <= 0){
          Wasp.Dfp.GoogleTag.initAd($("#multiplex-mobile-only-1"));
        }
      }
    });
  </script>
        </div>
    </div>
          <!-- storyBySection -->




</div>
</section><div class="section-rightrail">          <!-- dfpMultiflexPortrait -->
  <div class="bigbox-container multiflex dfp-labeled">
    <div class="dfpLabel">
        <div class="ligne"></div>
        <div class="label">Publicité</div>
        <div class="ligne"></div>
    </div>
    <div id='multiflex_portrait-57ec2aa2e4b089eca92340c1-c286b668'
         class='ad-to-load dfp-ad'
         data-size="dfpMultiflexPortrait"
         data-currentsection="autoActualites"
         data-pos="top"
         data-tile="10"
         data-ajax-interval=""
         data-is-empty="true"
         data-hidden-if-empty="false">
    </div>
  <script>
    $(document).ready(function () {
      //If mobile
      if(isMobile()){
        //If mobile init ad only if not in rightrail
        if ($("#multiflex_portrait-57ec2aa2e4b089eca92340c1-c286b668").parents('.section-rightrail').length == 0) {
          Wasp.Dfp.GoogleTag.initAd($("#multiflex_portrait-57ec2aa2e4b089eca92340c1-c286b668"));
        }
      }else{
        //IF not mobile init only ads that are not mobile-only
        if('multiflex_portrait-57ec2aa2e4b089eca92340c1-c286b668'.indexOf('mobile-only') <= 0){
          Wasp.Dfp.GoogleTag.initAd($("#multiflex_portrait-57ec2aa2e4b089eca92340c1-c286b668"));
        }
      }
    });
  </script>
  </div> 
          <!-- recommendedStory -->


  

  <div class="recommended-story custom-css-most-popular-cxense internal"
        id="reco_cx"
        data-cxense-widget-id="f61fdb65686993d523e54e82398aa45c8c155fee"
        data-widgettype="module reco"
        data-context="home"
        data-algo="trend"
        data-widget-pos="droite article"
        data-cxense-widgettype="LES PLUS POPULAIRES">
                                              
    <div class="same-subject-container">
      <hr class="body-seperator" />
      <div class="recommended-widget-title titre">LES PLUS POPULAIRES</div>
      <ul class="recommended-grid">
          <li class="recommended-grid-item">
            <article>
              <a href="" target="_self" class="recommended-url" data-position="slot1"
                                                 data-cxense-widget-id="f61fdb65686993d523e54e82398aa45c8c155fee"
                                                 data-widgettype="module reco"
                                                 data-context="home"
                                                 data-algo="trend"
                                                 data-widget-pos="droite article"
                                                 data-cxense-widgettype="LES PLUS POPULAIRES">
                <div class="img-container">
                  <picture class="content">
                    <span class="registered-content">
                      <div class="icon-key"></div>
                    </span>
                    <img src="" alt="" class="recommended-img" loading="lazy">
                  </picture>
                </div>
                <div class="info-container">
                  <div class="exergueSuperieur small-exergue">
                    <span></span>
                  </div>
                  <div class="recommended-title"></div>
                  <div class="source"></div>
                </div>
              </a>
            </article>
          </li>
          <li class="recommended-grid-item">
            <article>
              <a href="" target="_self" class="recommended-url" data-position="slot2"
                                                 data-cxense-widget-id="f61fdb65686993d523e54e82398aa45c8c155fee"
                                                 data-widgettype="module reco"
                                                 data-context="home"
                                                 data-algo="trend"
                                                 data-widget-pos="droite article"
                                                 data-cxense-widgettype="LES PLUS POPULAIRES">
                <div class="img-container">
                  <picture class="content">
                    <span class="registered-content">
                      <div class="icon-key"></div>
                    </span>
                    <img src="" alt="" class="recommended-img" loading="lazy">
                  </picture>
                </div>
                <div class="info-container">
                  <div class="exergueSuperieur small-exergue">
                    <span></span>
                  </div>
                  <div class="recommended-title"></div>
                  <div class="source"></div>
                </div>
              </a>
            </article>
          </li>
          <li class="recommended-grid-item">
            <article>
              <a href="" target="_self" class="recommended-url" data-position="slot3"
                                                 data-cxense-widget-id="f61fdb65686993d523e54e82398aa45c8c155fee"
                                                 data-widgettype="module reco"
                                                 data-context="home"
                                                 data-algo="trend"
                                                 data-widget-pos="droite article"
                                                 data-cxense-widgettype="LES PLUS POPULAIRES">
                <div class="img-container">
                  <picture class="content">
                    <span class="registered-content">
                      <div class="icon-key"></div>
                    </span>
                    <img src="" alt="" class="recommended-img" loading="lazy">
                  </picture>
                </div>
                <div class="info-container">
                  <div class="exergueSuperieur small-exergue">
                    <span></span>
                  </div>
                  <div class="recommended-title"></div>
                  <div class="source"></div>
                </div>
              </a>
            </article>
          </li>
          <li class="recommended-grid-item">
            <article>
              <a href="" target="_self" class="recommended-url" data-position="slot4"
                                                 data-cxense-widget-id="f61fdb65686993d523e54e82398aa45c8c155fee"
                                                 data-widgettype="module reco"
                                                 data-context="home"
                                                 data-algo="trend"
                                                 data-widget-pos="droite article"
                                                 data-cxense-widgettype="LES PLUS POPULAIRES">
                <div class="img-container">
                  <picture class="content">
                    <span class="registered-content">
                      <div class="icon-key"></div>
                    </span>
                    <img src="" alt="" class="recommended-img" loading="lazy">
                  </picture>
                </div>
                <div class="info-container">
                  <div class="exergueSuperieur small-exergue">
                    <span></span>
                  </div>
                  <div class="recommended-title"></div>
                  <div class="source"></div>
                </div>
              </a>
            </article>
          </li>
          <li class="recommended-grid-item">
            <article>
              <a href="" target="_self" class="recommended-url" data-position="slot5"
                                                 data-cxense-widget-id="f61fdb65686993d523e54e82398aa45c8c155fee"
                                                 data-widgettype="module reco"
                                                 data-context="home"
                                                 data-algo="trend"
                                                 data-widget-pos="droite article"
                                                 data-cxense-widgettype="LES PLUS POPULAIRES">
                <div class="img-container">
                  <picture class="content">
                    <span class="registered-content">
                      <div class="icon-key"></div>
                    </span>
                    <img src="" alt="" class="recommended-img" loading="lazy">
                  </picture>
                </div>
                <div class="info-container">
                  <div class="exergueSuperieur small-exergue">
                    <span></span>
                  </div>
                  <div class="recommended-title"></div>
                  <div class="source"></div>
                </div>
              </a>
            </article>
          </li>
          <li class="recommended-grid-item">
            <article>
              <a href="" target="_self" class="recommended-url" data-position="slot6"
                                                 data-cxense-widget-id="f61fdb65686993d523e54e82398aa45c8c155fee"
                                                 data-widgettype="module reco"
                                                 data-context="home"
                                                 data-algo="trend"
                                                 data-widget-pos="droite article"
                                                 data-cxense-widgettype="LES PLUS POPULAIRES">
                <div class="img-container">
                  <picture class="content">
                    <span class="registered-content">
                      <div class="icon-key"></div>
                    </span>
                    <img src="" alt="" class="recommended-img" loading="lazy">
                  </picture>
                </div>
                <div class="info-container">
                  <div class="exergueSuperieur small-exergue">
                    <span></span>
                  </div>
                  <div class="recommended-title"></div>
                  <div class="source"></div>
                </div>
              </a>
            </article>
          </li>
      </ul>
    </div>
  </div>


</div>
</div><!-- most populair mobile -->          <!-- sectionLatestUnprioritizedStory -->

    <section class="ajax-unprioritized-stories archives-section">
        <div class="container-wrapper">
            <hr class="body-separator" />
            <div class="loadmore-list-content-title">Tous les articles</div>
        <div class="content-wrapper">
        <div class="loadmore-list-content"
             data-nbrOfStoriesOnFirstPage="10"
             data-nbrOfStoriesOnOtherPages="10"
             data-mobileAdsFrequency="6">









<div class="section-story" dataIndex="0">
<a href="https://www.guideautoweb.com/articles/73428/porsche-taycan-2025-plus-d-autonomie-et-de-performance/" rel="external" ><article class="section-story-item"> <div class="section-story-item-image"> <img src="https://m1.quebecormedia.com/emp/emp/606815_porsche_taycan_2025_plus_d_autonomie_et_de_performance6af4372a-9f78-4076-81ed-f3cf3ad5f64e_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=300" loading="lazy" alt="Porsche Taycan: plus d'autonomie et de performance" class="readalso-image" /> </div> <div class="section-story-item-top-info"> <div class="story-list-strapline auto">Modèle 2025</div> <div class="story-list-headline">Porsche Taycan: plus d'autonomie et de performance</div> <div class="bottom-info"> <div class="story-list-lead">La Taycan a posé un nouveau jalon dans la riche histoire de la marque allemande à l’occasion de sa première mondiale en 2019.</div> <div class="story-list-date"> <time datetime="2024-02-06T23:05:00Z" > 6 février 2024 18H05 </time> </div> </div> </div> </article> <div class="for-mobile-layout"></div></a></div>


<div class="section-story" dataIndex="1">
<a href="https://www.guideautoweb.com/articles/73449/etude-quels-vehicules-coutent-le-moins-cher-a-entretenir/" rel="external" ><article class="section-story-item"> <div class="section-story-item-image"> <img src="https://m1.quebecormedia.com/emp/emp/606822_etude_quels_vehicules_coutent_le_moins_cher_a_entretenirf73cbf6b-7321-4553-b1c0-a42db9a2f4a8_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=300" loading="lazy" alt="Quels autos coûtent le moins cher à entretenir?" class="readalso-image" /> </div> <div class="section-story-item-top-info"> <div class="story-list-strapline auto">Étude</div> <div class="story-list-headline">Quels autos coûtent le moins cher à entretenir?</div> <div class="bottom-info"> <div class="story-list-lead">Le site américain spécialisé CarEdge a effectué une analyse de millions de données dans le but justement de trouver les réponses à ces questions. </div> <div class="story-list-date"> <time datetime="2024-02-06T21:00:00Z" > 6 février 2024 16H00 </time> </div> </div> </div> </article> <div class="for-mobile-layout"></div></a></div>


<div class="section-story" dataIndex="2">
<a href="https://www.guideautoweb.com/articles/73446/honda-un-vaste-rappel-pour-des-capteurs-de-coussins-gonflables/" rel="external" ><article class="section-story-item"> <div class="section-story-item-image"> <img src="https://m1.quebecormedia.com/emp/emp/606741_honda_un_vaste_rappel_pour_des_capteurs_de_coussins_gonflables1b83c25c-e18c-4a85-9a2f-9fb4df267c90_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=300" loading="lazy" alt="Vaste rappel pour des capteurs chez Honda" class="readalso-image" /> </div> <div class="section-story-item-top-info"> <div class="story-list-strapline auto">Coussins gonflables</div> <div class="story-list-headline">Vaste rappel pour des capteurs chez Honda</div> <div class="bottom-info"> <div class="story-list-lead">Un défaut du capteur dans le siège du passager avant contraint Honda à devoir rappeler un grand nombre de modèles et d’exemplaires. </div> <div class="story-list-date"> <time datetime="2024-02-06T16:00:00Z" > 6 février 2024 11H00 </time> </div> </div> </div> </article> <div class="for-mobile-layout"></div></a></div>


<div class="section-story" dataIndex="3">
<a href="https://www.guideautoweb.com/articles/73444/audi-rs6-gt-2025-seulement-7-pour-le-canada/" rel="external" ><article class="section-story-item"> <div class="section-story-item-image"> <img src="https://m1.quebecormedia.com/emp/emp/606715_audi_rs6_gt_2025_seulement_7_pour_le_canada5282ec45-a8a0-4318-87b0-b459d24d1fad_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=300" loading="lazy" alt="Audi RS6 GT 2025 - Seulement 7 pour le Canada!" class="readalso-image" /> </div> <div class="section-story-item-top-info"> <div class="story-list-strapline auto">Actualités</div> <div class="story-list-headline">Audi RS6 GT 2025 - Seulement 7 pour le Canada!</div> <div class="bottom-info"> <div class="story-list-lead">Seulement 85 exemplaires de la RS6 GT seront disponibles aux États-Unis, alors que 7 exemplaires seront offerts au Canada.</div> <div class="story-list-date"> <time datetime="2024-02-06T13:31:21Z" > 6 février 2024 08H31 </time> </div> </div> </div> </article> <div class="for-mobile-layout"></div></a></div>


<div class="section-story" dataIndex="4">
<a href="https://www.guideautoweb.com/articles/73436/on-plaint-nos-amis-francais-qui-voudraient-acheter-la-nouvelle-ford-mustang/" rel="external" ><article class="section-story-item"> <div class="section-story-item-image"> <img src="https://m1.quebecormedia.com/emp/emp/606571_on_plaint_nos_amis_francais_qui_voudraient_acheter_la_nouvelle_ford_mustang8ec6a166-afce-4c0a-bec0-991a3d93712a_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=300" loading="lazy" alt="Pas facile de se procurer une Mustang en Europe..." class="readalso-image" /> </div> <div class="section-story-item-top-info"> <div class="story-list-strapline auto">Actualités</div> <div class="story-list-headline">Pas facile de se procurer une Mustang en Europe...</div> <div class="bottom-info"> <div class="story-list-lead">En Europe, où la nouvelle Mustang vient tout juste de débarquer, seules les versions GT et Dark Horse sont proposées dans la majorité des marchés.</div> <div class="story-list-date"> <time datetime="2024-02-05T21:00:00Z" > 5 février 2024 16H00 </time> </div> </div> </div> </article> <div class="for-mobile-layout"></div></a></div>

        <div class="section-story type-ad col-xs-12" data-test="archives-ad">
            <div class="story-wrapper">
    <div class="item item-ad check-height neutral w1 h1">
        <div class="ad-multiplex-mobile-only dfp-labeled">
    <div class="dfpLabel">
        <div class="ligne"></div>
        <div class="label">Publicité</div>
        <div class="ligne"></div>
    </div>
            <div id='multiplex-mobile-only-3'
                 class='ad-to-load dfp-ad dfp-multiflex-mobile-only'
                 data-size="dfpMultiflexMobileOnly"
                 data-pos="3"
                 data-tile=""
                 data-ajax-interval=""
                 data-is-empty="true"
                 data-hidden-if-empty="false">
            </div>
  <script>
    $(document).ready(function () {
      //If mobile
      if(isMobile()){
        //If mobile init ad only if not in rightrail
        if ($("#multiplex-mobile-only-3").parents('.section-rightrail').length == 0) {
          Wasp.Dfp.GoogleTag.initAd($("#multiplex-mobile-only-3"));
        }
      }else{
        //IF not mobile init only ads that are not mobile-only
        if('multiplex-mobile-only-3'.indexOf('mobile-only') <= 0){
          Wasp.Dfp.GoogleTag.initAd($("#multiplex-mobile-only-3"));
        }
      }
    });
  </script>
        </div>
    </div>
            </div>
        </div>


<div class="section-story" dataIndex="5">
<a href="https://www.guideautoweb.com/articles/73431/lincoln-aviator-2025-plus-connecte-et-plus-autonome/" rel="external" ><article class="section-story-item"> <div class="section-story-item-image"> <img src="https://m1.quebecormedia.com/emp/emp/606524_lincoln_aviator_2025_plus_connecte_et_plus_autonome12a9cb09-0017-4a50-b548-86225d44569b_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=300" loading="lazy" alt="Lincoln Aviator: plus connecté et plus autonome" class="readalso-image" /> </div> <div class="section-story-item-top-info"> <div class="story-list-strapline auto">Modèle 2025</div> <div class="story-list-headline">Lincoln Aviator: plus connecté et plus autonome</div> <div class="bottom-info"> <div class="story-list-lead">Le Lincoln Aviator 2025 arrivera chez les concessionnaires canadiens au cours de l’été et ceux-ci acceptent déjà les réservations.</div> <div class="story-list-date"> <time datetime="2024-02-05T17:30:00Z" > 5 février 2024 12H30 </time> </div> </div> </div> </article> <div class="for-mobile-layout"></div></a></div>


<div class="section-story" dataIndex="6">
<a href="https://www.guideautoweb.com/articles/73429/le-tesla-model-y-maintenant-aussi-abordable-que-la-model-3/" rel="external" ><article class="section-story-item"> <div class="section-story-item-image"> <img src="https://m1.quebecormedia.com/emp/emp/606507_le_tesla_model_y_maintenant_aussi_abordable_que_la_model_3bd0a7dfe-7ebc-477d-8664-090551212fe8_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=300" loading="lazy" alt="Le Tesla Model Y aussi abordable que la Model 3" class="readalso-image" /> </div> <div class="section-story-item-top-info"> <div class="story-list-strapline auto">Baisse de prix</div> <div class="story-list-headline">Le Tesla Model Y aussi abordable que la Model 3</div> <div class="bottom-info"> <div class="story-list-lead">Déjà réduit à quelques reprises en 2023, le populaire multisegment compact Model Y a vu dans les derniers jours ses tarifs baisser une fois de plus.</div> <div class="story-list-date"> <time datetime="2024-02-05T16:00:00Z" > 5 février 2024 11H00 </time> </div> </div> </div> </article> <div class="for-mobile-layout"></div></a></div>


<div class="section-story" dataIndex="7">
<a href="https://www.guideautoweb.com/articles/73421/mazda-relance-officiellement-ses-plans-de-developpement-de-moteurs-rotatifs/" rel="external" ><article class="section-story-item"> <div class="section-story-item-image"> <img src="https://m1.quebecormedia.com/emp/emp/606429_mazda_relance_officiellement_son_aile_de_developpement_de_moteurs_rotatifs6c2de373-c8a7-474e-9237-776e5a217fd0_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=22&amp;w=700&amp;h=393&amp;width=300" loading="lazy" alt="Mazda relance les moteurs rotatifs" class="readalso-image" /> </div> <div class="section-story-item-top-info"> <div class="story-list-strapline auto">Plans de développement</div> <div class="story-list-headline">Mazda relance les moteurs rotatifs</div> <div class="bottom-info"> <div class="story-list-lead">Le constructeur a annoncé de manière officielle la relance de sa division de recherche et développement dans la filière des moteurs rotatifs.</div> <div class="story-list-date"> <time datetime="2024-02-02T17:30:00Z" > 2 février 2024 12H30 </time> </div> </div> </div> </article> <div class="for-mobile-layout"></div></a></div>


<div class="section-story" dataIndex="8">
<a href="https://www.guideautoweb.com/articles/73412/les-vehicules-neufs-avec-la-meilleure-valeur-de-revente-en-2024/" rel="external" ><article class="section-story-item"> <div class="section-story-item-image"> <img src="https://m1.quebecormedia.com/emp/emp/606330_les_vehicules_neufs_avec_la_meilleure_valeur_de_revente_en_20248b85c61d-0cdd-42be-b0f0-56bad7d02ad7_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=300" loading="lazy" alt="Les véhicules avec la meilleure valeur de revente" class="readalso-image" /> </div> <div class="section-story-item-top-info"> <div class="story-list-strapline auto">Modèles neufs en 2024</div> <div class="story-list-headline">Les véhicules avec la meilleure valeur de revente</div> <div class="bottom-info"> <div class="story-list-lead">La firme ALG, une division de J.D. Power spécialisée dans le calcul des valeurs résiduelles, vient d’annoncer les gagnants de ses prix 2024 au Canada.</div> <div class="story-list-date"> <time datetime="2024-02-02T13:00:00Z" > 2 février 2024 08H00 </time> </div> </div> </div> </article> <div class="for-mobile-layout"></div></a></div>


<div class="section-story" dataIndex="9">
<a href="https://www.guideautoweb.com/articles/73407/subaru-wrx-2024-non-pas-une-mais-deux-nouvelles-versions/" rel="external" ><article class="section-story-item"> <div class="section-story-item-image"> <img src="https://m1.quebecormedia.com/emp/emp/606271_subaru_wrx_2024_non_pas_une_mais_deux_nouvelles_versions0d6dea61-2240-4f13-a350-c16a1f8e6260_ORIGINAL.jpg?impolicy=crop-resize&amp;x=0&amp;y=60&amp;w=1920&amp;h=1080&amp;width=300" loading="lazy" alt="Subaru WRX 2024: non pas une, mais deux versions" class="readalso-image" /> </div> <div class="section-story-item-top-info"> <div class="story-list-strapline auto">Actualités</div> <div class="story-list-headline">Subaru WRX 2024: non pas une, mais deux versions</div> <div class="bottom-info"> <div class="story-list-lead">Il n’y a pas que la RS qui s’ajoute à la gamme canadienne de la Subaru WRX pour 2024. On retrouve aussi au sommet une nouvelle version appelée GT.</div> <div class="story-list-date"> <time datetime="2024-02-01T20:00:00Z" > 1 février 2024 15H00 </time> </div> </div> </div> </article> <div class="for-mobile-layout"></div></a></div>
    <div class="btn-container">
        <div class="load-more-btn">
            <a class="btn btn-default" href="#" data-test="archives-load-more">Consulter plus d'articles</a>
        </div>
        <div class="archive-btn">
            <a class="btn btn-archives" href="/plan-du-site" data-test="archives-load-more">Archives</a>
        </div>
    </div>


        </div>
        <div class="ajax-unprioritized-right-container">
  <div class="bigbox-container multiflex dfp-labeled">
    <div class="dfpLabel">
        <div class="ligne"></div>
        <div class="label">Publicité</div>
        <div class="ligne"></div>
    </div>
    <div id='multiflex_portrait-57ec2aa2e4b089eca92340c1-70d822ba'
         class='ad-to-load dfp-ad'
         data-size="dfpMultiflexPortrait"
         data-currentsection="autoActualites"
         data-pos="2"
         data-tile="10"
         data-ajax-interval=""
         data-is-empty="true"
         data-hidden-if-empty="false">
    </div>
  <script>
    $(document).ready(function () {
      //If mobile
      if(isMobile()){
        //If mobile init ad only if not in rightrail
        if ($("#multiflex_portrait-57ec2aa2e4b089eca92340c1-70d822ba").parents('.section-rightrail').length == 0) {
          Wasp.Dfp.GoogleTag.initAd($("#multiflex_portrait-57ec2aa2e4b089eca92340c1-70d822ba"));
        }
      }else{
        //IF not mobile init only ads that are not mobile-only
        if('multiflex_portrait-57ec2aa2e4b089eca92340c1-70d822ba'.indexOf('mobile-only') <= 0){
          Wasp.Dfp.GoogleTag.initAd($("#multiflex_portrait-57ec2aa2e4b089eca92340c1-70d822ba"));
        }
      }
    });
  </script>
  </div> 
        </div>
        </div>
        </div>
    </section>
</div>
</div>  </div>
    <footer class="footer-container">
      <div class="footer-plansite">
        <div class="footer-plansite-dates">
          <div class="footer-plansite-title">
            ARCHIVES
          </div>
        </div>
      </div>
      <div class="footer-menu-wrapper">
        <div class="footer-menu">
          <div class="footer-menu-title" data-menu-id="FOOTERACCESRAPIDES">ACCÈS RAPIDES</div>
          <div class="footer-menu-items" data-menu-id="FOOTERACCESRAPIDES">
                <a href="https://www.journaldemontreal.com/plan-du-site"
                   data-path="/plan-du-site"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Plan du site</span>
                </a>
                <a href="https://www.journaldemontreal.com/outils-interactifs"
                   data-path="/outils-interactifs"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Outils interactifs</span>
                </a>
                <a href="https://www.journaldemontreal.com/horoscopes"
                   data-path="/horoscopes"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Horoscope</span>
                </a>
                <a href="https://www.journaldemontreal.com/deces"
                   data-path="/deces"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Décès</span>
                </a>
                <a href="https://www.journaldemontreal.com/concours"
                   data-path="/concours"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Concours</span>
                </a>
                <a href="https://www.journaldemontreal.com/infolettres"
                   data-path="/infolettres"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Infolettres</span>
                </a>
            <a class="item-sousmenu item-external" href="https://petitesannonces.journaldemontreal.com/" target="_blank" itemprop="url">
                    <span class="external" itemprop="name">Petites annonces</span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.qub.ca/radio" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/a37f8b6d-167e-45f0-830b-e7da29d0bb57_qubradio-blanc.svg" alt="qub radio"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.guideautoweb.com/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/c3ad92f6-f956-45e1-b6dc-b430aea9a0df_gda.svg" alt="Guide de l'auto"></span>
            </a>
          </div>
        </div>
        <div class="footer-menu">
          <div class="footer-menu-title" data-menu-id="MENU">SECTIONS</div>
          <div class="footer-menu-items" data-menu-id="MENU">
                <a href="https://www.journaldemontreal.com/actualite"
                   data-path="/actualite"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Actualités</span>
                </a>
                <a href="https://www.journaldemontreal.com/monde"
                   data-path="/monde"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Monde</span>
                </a>
                <a href="https://www.journaldemontreal.com/argent"
                   data-path="/argent"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Argent</span>
                </a>
                <a href="https://www.journaldemontreal.com/opinions"
                   data-path="/opinions"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Opinions</span>
                </a>
                <a href="https://www.journaldemontreal.com/sports"
                   data-path="/sports"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Sports</span>
                </a>
                <a href="https://www.journaldemontreal.com/enquetes"
                   data-path="/enquetes"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Bureau d'enquête</span>
                </a>
                <a href="https://www.journaldemontreal.com/spectacles"
                   data-path="/spectacles"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Spectacles</span>
                </a>
                <a href="https://www.journaldemontreal.com/jm"
                   data-path="/jm"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Styles de vie</span>
                </a>
                <a href="https://www.journaldemontreal.com/voyages"
                   data-path="/voyages"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Voyages</span>
                </a>
                <a href="https://www.journaldemontreal.com/5-minutes"
                   data-path="/5-minutes"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">En 5 minutes</span>
                </a>
                <a href="https://www.journaldemontreal.com/auto"
                   data-path="/auto"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Auto</span>
                </a>
                <a href="https://www.journaldemontreal.com/maison-extra"
                   data-path="/maison-extra"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Maison</span>
                </a>
                <a href="https://www.journaldemontreal.com/hublo"
                   data-path="/hublo"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Hublo</span>
                </a>
          </div>
        </div>
        <div class="footer-menu">
          <div class="footer-menu-title" data-menu-id="FOOTERENSAVOIRPLUS">EN SAVOIR PLUS</div>
          <div class="footer-menu-items" data-menu-id="FOOTERENSAVOIRPLUS">
                <a href="https://www.journaldemontreal.com/contactez-nous"
                   data-path="/contactez-nous"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Nous contacter</span>
                </a>
            <a class="item-sousmenu item-external" href="https://quebecorexpertisemedia.com/fr/plateformes/journaux" target="_blank" itemprop="url">
                    <span class="external" itemprop="name">Annoncez dans nos médias</span>
            </a>
                <a href="https://www.journaldemontreal.com/archives-services"
                   data-path="/archives-services"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Services d’archives</span>
                </a>
                <a href="https://www.journaldemontreal.com/profil-des-lecteurs"
                   data-path="/profil-des-lecteurs"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Trousse média</span>
                </a>
                <a href="https://www.journaldemontreal.com/conditions-utilisation"
                   data-path="/conditions-utilisation"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Conditions d’utilisation</span>
                </a>
                <a href="https://www.journaldemontreal.com/politique-de-confidentialite"
                   data-path="/politique-de-confidentialite"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Vie privée</span>
                </a>
                <a href="https://www.journaldemontreal.com/netiquette"
                   data-path="/netiquette"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Netiquette</span>
                </a>
            <a class="item-sousmenu item-external" href="https://www.tvanouvelles.ca/actualites/elections-canada-2021-registre" target="_blank" itemprop="url">
                    <span class="external" itemprop="name">Registre des publicités électorales fédérales</span>
            </a>
          </div>
        </div>
        <div class="footer-menu">
          <div class="footer-menu-title" data-menu-id="FOOTERABONNER">S’ABONNER</div>
          <div class="footer-menu-items" data-menu-id="FOOTERABONNER">
                <a href="https://www.journaldemontreal.com/abonnement/produit"
                   data-path="/abonnement/produit"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Abonnez-vous au Journal papier</span>
                </a>
                <a href="https://www.journaldemontreal.com/abonnement/gestion"
                   data-path="/abonnement/gestion"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Gérer votre abonnement</span>
                </a>
                <a href="https://www.journaldemontreal.com/rss"
                   data-path="/rss"
                   itemprop="url"
                   class="item-sousmenu">
                        <span itemprop="name">Flux RSS</span>
                </a>
          </div>
          <div class="footer-menu-title extra-padding" data-menu-id="FOOTERAPPMOBILES">APPLICATIONS MOBILES</div>
          <div class="footer-menu-items footer-apps" data-menu-id="FOOTERAPPMOBILES">
            <a class="item-sousmenu item-external" href="https://apps.apple.com/ca/app/journal-de-montr%C3%A9al/id6444195089" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/17ca2d7e-3190-49e1-9606-0aee423ea39d_apple.svg" alt="Apple"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://play.google.com/store/apps/details?id=com.quebecormedia.journaldemontreal" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/e9cb59c9-7503-4f80-ba02-ba8d9f77aaf4_google.svg" alt="Google"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="copyright-logo">
          <img class="footer-mainlogo" src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/e6417855-36b7-490e-81e1-6c9c2ae63448_jdm-logo-contained-white.svg" alt="Logo Le Journal de Montréal" />
          <div class="footer-rs">
            <a class="item-sousmenu item-external" href="https://www.facebook.com/jdemontreal" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/42c46e18-d4c2-4581-8562-f942aa3f6a74_facebook_circle_outline_ic.svg" alt="Facebook"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://twitter.com/JdeMontreal" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/49dc8f30-2348-49c7-b1a4-48d91295e50f_x_circle_outline_ic.svg" alt="X"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.instagram.com/jdemontreal/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/6d801e25-8513-4d12-bd5c-1dd741f0bd87_instagram_circle_outline_ic.svg" alt="Instagram"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.linkedin.com/company/jdemontreal/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/6af5a54d-a92b-407b-b651-0f6ac249da44_linkedin_circle_outline_ic.svg" alt="Linkedin"></span>
            </a>
          </div>
        </div>
        <div class="copyright-text">
          © 2024 Le Journal de Montréal Inc. Tous droits réservés.
        </div>
      </div>
      <div class="footer-autres-marques">
            <a class="item-sousmenu item-external" href="https://www.journaldequebec.com/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/bca38abd-bba1-4e9b-9158-9fd6f1e23123_le-journal-de-quebec.svg" alt="JDQ"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.tvanouvelles.ca/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/852ce014-06e3-4c8f-bdf7-cc08213efd2e_tva-nouvelles.svg" alt="TVAN"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.24heures.ca/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/c608ec69-a5a1-41b2-82aa-1807080ebb64_24h.svg" alt="24h"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.tvasports.ca/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/e97284ed-ca03-494a-a42c-d6ca6a9ea66c_tvasports.svg" alt="TVAS"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.qub.ca/radio" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/0ed50d56-94a9-4201-9c2b-c68612f4032b_qub-radio.svg" alt="qub radio"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.lesacdechips.com/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/92fa5ca9-dd94-4897-aad2-2767a648ad6e_le-sac-de-chips.svg" alt="LSDC"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.billie.ca/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/4d1d64db-8754-4e4d-93dd-04d6e5c5f5f6_billie.svg" alt="billie"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.silo57.ca/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/6c76382a-5694-4ead-877b-01b8d6f4d4ea_silo57.svg" alt="silo57"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.pesesurstart.com/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/a5fae023-f70a-4226-9856-db12aaf21e94_pese-sur-start.svg" alt="PSS"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.qub.ca/tvaplus" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/e39dd088-508c-478e-9e8b-ee191f6e44a7_TVA.svg" alt="TVA+"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.clindoeil.ca/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/af01866e-e320-433c-a3ea-3c531e41f643_clindoeil.svg" alt="Clin d'oeil"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.7jours.ca/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/1c18ecca-b10c-4eba-b5b7-8bc2b74f7422_7jours.svg" alt="7jours"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.recettes.qc.ca/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/cfa5defb-910a-422d-ba00-ae6fe8cb6c02_RecetteDuQuebec.svg" alt="RDQ"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.guideautoweb.com/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/5d114b39-ebeb-45ca-b61d-cf86cc9d57ef_guide-auto.svg" alt="GDA"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://videotron.com/divertissement/vrai" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/40928977-bf2b-4234-b91d-3807284e9f11_vrai.svg" alt="Vrai"></span>
            </a>
            <a class="item-sousmenu item-external" href="https://www.zeste.ca/" target="_blank" itemprop="url">
                    <span class="external withimage"><img src="https://m1.quebecormedia.com/emp/jdx-prod-images/photo/d1e008e9-0d08-49f9-ad8a-25f56bd32728_zeste.svg" alt="Zeste"></span>
            </a>
      </div>
    </footer>
    
<script  type="text/javascript" src="//theme.journaldemontreal.com/assets/ebae541/wro/js/jdx_js.js"></script>


<!-- end group footer-->
        </div>
    </section>

</div><!-- wrapper -->
<div id='fancybox-wrapper'></div>



	<script>

		var _comscore = _comscore || []; 
	    _comscore.push({ 
	    c1: "2", 
	    c2: "3005667", 
	    c3: "lejournaldemontréal"

		}); 
	</script>
 



<div class="piano_auth_wrapper"></div>

<div id="fb-root"></div>
    <script>(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v3.2&appId=242991719478311&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
    <script>
      var tz = [
  "Europe/Amsterdam", "Europe/Andorra", "Europe/Athens", "Europe/Bratislava", "Europe/Bucharest", "Europe/Budapest", "Europe/Belgrade", "Europe/Berlin", "Europe/Brussels",
  "Europe/Busingen", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man",
  "Europe/Istanbul", "Europe/Jersey", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn",
  "Europe/Monaco", "Europe/Nicosia", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/San_Marino", "Europe/Serbia",
  "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius",
  "Europe/Warsaw", "Europe/Zagreb",
  "America/Anguilla", "America/Aruba", "America/Cayenne", "America/Cayman", "America/Curacao", "America/Danmarkshavn", "America/Godthab", "America/Grand_Turk",
  "America/Kralendijk", "America/Lower_Princes", "America/Marigot", "America/Martinique", "America/Miquelon", "America/Montserrat", "America/Guadeloupe",
  "America/Port_of_Spain", "America/Scoresbysund", "America/St_Barthelemy", "America/Thule", "America/Tortola",
  "Pacific/Clipperton", "Pacific/Gambier", "Pacific/Marquesas", "Pacific/Noumea", "Pacific/Pitcairn", "Pacific/Wallis",
  "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley",
  "Africa/Ceuta", "Africa/Melilla",
  "Indian/Chagos", "Indian/Kerguelen", "Indian/Mayotte", "Indian/Reunion",
  "Antarctica/Rothera"
];
var hasGDPR = tz.indexOf(Intl.DateTimeFormat().resolvedOptions().timeZone) >= 0;
      
    </script>

<script type="text/javascript" src="https://s1.quebecormedia.com/infojdem/lib/cheezwhiz/v2/index.js"></script>
</body>
</html>


