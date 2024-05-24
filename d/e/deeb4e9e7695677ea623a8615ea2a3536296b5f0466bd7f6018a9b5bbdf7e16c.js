// Pendo Agent Wrapper
// Copyright 2024 Pendo.io, Inc.
// Environment:    production
// Agent Version:  2.214.1
// Installed:      2024-01-17T01:12:14Z
(
})({
  environmentName: "production",
  blockAgentMetadata: false,


  contentHost: "content.pendo.statista.com",

  dataHost: "data.pendo.statista.com",


  stagingServers: ["stagingen.statista.com","staginges.statista.com","stagingfr.statista.com",/staging\.statista\.com/],
  stagingAgentUrl: "https://content.pendo.statista.com/agent/static/48aa4cc4-d40c-448e-4d37-6acb64578400/pendo-staging.js",

  allowedOriginServers: ["https://pendo-static-4715035121942528.storage.googleapis.com"],


  adoptPrioritizeAdoptGuides: false,
  allowCrossOriginFrames: false,
  cookieDomain: "",
  disableCookies: false,
  disableDesignerKeyboardShortcut: false,
  disableFeedbackAutoInit: false,
  disableGlobalCSS: false,
  disableGuidePseudoStyles: false,
  disablePendo: false,
  disablePersistence: false,
  enableDebugEvents: false,
  enableGuideTimeout: true,
  enableSignedMetadata: false,
  eventPropertyConfigurations: [],
  excludeAllText: false,
  extensionPersistLocalStorage: false,
  frameIdentitySync: false,
  freeNPSData: false,
  guideMarkdown: true,
  guideValidation: false,
  identityStorageSuffix: "",
  interceptElementRemoval: false,
  isPendoFree: false,
  localStorageOnly: false,
  observeShadowRoots: false,
  pendoCore: true,
  pendoFeedback: true,
  plgChatbot: false,
  preferBroadcastChannel: false,
  preferMutationObserver: false,
  preventCodeInjection: false,
  preventUnloadListener: false,
  promotedAgentMetadataConfigurations: [{"fieldName":"product","kind":"visitor"},{"fieldName":"product","kind":"account"},{"fieldName":"planlevel","kind":"account"}],
  recording: {"enabled":false},
  requireHTTPS: true,
  requireSignedMetadata: false,
  restrictP1Access: true,
  sendEventsWithPostOnly: false,
  siblingSelectors: false,
  trainingPartner: false,
  guideSeenTimeoutLength: 0,
  xhrTimings: false,
  xhrWhitelist: null,
  htmlAttributeBlacklist: null,
  htmlAttributes: /^(tabindex|data-pendo|data-user-features|data-statistic-id|data-url|data-paywall-info-box-track|data-rc_tracking|data-gtm)$/i,
  apiKey: "48aa4cc4-d40c-448e-4d37-6acb64578400",
  feedbackSettings: {
    productId: "885461b4-47f7-4041-a44a-cc47aacf4b96",
    apiUrl: "https://api.feedback.us.pendo.io",
	siteUrl: "https://feedback.us.pendo.io",
    vendorId: "e73cf4d1-d61c-4c91-ab82-4fd4a5f828de",
    type: "PORTAL"
  }
}))}();
;!function(){"use stric}var n=function(){var n,a,r="feedback_notification_count",i="",o="",d="",s="",c=!1,f="",u=!1,l="feedback_ping_sent",m=36e5,p="@media only screen and (max-device-width:1112px){#feedback-widget{overflow-y:scroll}}",g="@-webkit-keyframes pendoFeedbackSlideIn{from{opacity:0;transform:translate(145px,0) rotate(270deg) translateY(-50%)}to{opacity:1;transform:translate(50%,0) rotate(270deg) translateY(-50%)}}@keyframes pendoFeedbackSlideIn{from{opacity:0;transform:translate(145px,0) rotate(270deg) translateY(-50%)}to{opacity:1;transform:translate(50%,0) rotate(270deg) translateY(-50%)}}",b="@-webkit-keyframes pendoFeedbackSlideIn-left{from{opacity:0;transform:rotate(270deg) translateX(-55%) translateY(-55%)}to{opacity:1;transform:rotate(270deg) translateX(-55%) translateY(0)}}@keyframes pendoFeedbackSlideIn-left{from{opacity:0;transform:rotate(270deg) translateX(-55%) translateY(-55%)}to{opacity:1;transform:rotate(270deg) translateX(-55%) translateY(0)}}",k="@-webkit-keyframes pendoFeedbackSlideFrom-right{from{transform:translate(-460px,0)}to{transform:translate(0,0)}}@keyframes pendoFeedbackSlideFrom-right{from{opacity:0;transform:translate(460px,0)}to{opacity:1;transform:translate(0,0)}}",v="@-webkit-keyframes pendoFeedbackSlideFrom-left{from{opacity:0;transform:translate(-460px,0)}to{opacity:1;transform:translate(0,0)}}@keyframes pendoFeedbackSlideFrom-left{from{opacity:0;transform:translate(-460px,0)}to{opacity:1;transform:translate(0,0)}}",y="@-webkit-keyframes pendoFeedbackPulse{from{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{-webkit-transform:scale(1.15,1.15);transform:scale(1.15,1.15)}to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes pendoFeedbackPulse{from{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{-webkit-transform:scale(1.15,1.15);transform:scale(1.15,1.15)}to{-webkit-transform:scale(1,1);transform:scale(1,1)}}",h="@-webkit-keyframes pendoFeedbackFadeIn{from{opacity:0}to{opacity:1}}@keyframes pendoFeedbackFadeIn{from{opacity:0}to{opacity:1}}",w="@media only screen and (max-width:470px){#feedback-widget.buttonIs-right.visible{width:100%;right:2%}}",x="@media only screen and (max-width:470px){#feedback-widget.buttonIs-left.visible{width:100%}}",_="#feedback-trigger button:focus,#feedback-trigger button:hover{box-shadow:0 -5px 20px rgba(0,0,0,.19);outline:0;background:#3e566f}",F={feedbackIframe:"feedback-widget_iframe",feedbackTrigger:"feedback-trigger",feedbackWidget:"feedback-widget",feedbackOverlay:"feedback-overlay",feedbackTriggerButton:"feedback-trigger-button",feedbackStyles:"pendo-feedback-styles",feedbackFrameStyles:"pendo-feedback-visible-buttons-styles"};return{name:"Feedback",initiali}},teardos},validate:S};function S(n,a,r){var i=e(a);return i&&t(n)?(r("warn","The current version of IE is not supported by Pendo Feedback","ieFeedbackSupport"),!1)){return document.getElementById(F.feedbackWidgeon K(){returnunction te(){return}}();pendo.addExtension&&pendo.addExtension({name:"Feedback",version:"1.0.0",type:"agent",use:"plugin",uri:n})}();)}();
;