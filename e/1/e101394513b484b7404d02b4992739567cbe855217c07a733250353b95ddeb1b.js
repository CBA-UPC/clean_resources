"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["loader.AudioContextSpaceClip"],{353715:(e,t,a)=>{a.r(t),a.d(t,{__DANGEROUS_IMPORT__:()=>U});a(136728);var r=a(202784),n=a(107267),i=a(285651),o=a(330493),s=a(463142),u=a(997813),d=a(645184),c=a.n(d),l=a(650337),p=a(951461),m=a(949690),f=a(714912),h=a(9840),y=a(471197),v=a(128449),g=a(558356),b=a(578275),P=a(196234),M=(a(571372),a(643406));function S(e){var t=e.clipId,a=r.useState((function(){return(0,M.Z)({id:t})})),n={store:(0,P.Z)(a,1)[0],broadcastId:e.audioSpaceId,mediaKey:e.mediaKey};return r.createElement(k.Provider,{value:n},e.children)}function I(){return r.useContext(k)}var k=r.createContext(new Error("SpaceClipContext is not initialized")),C=a(801206),E=a(579654),T=a(709711);function Z(e){var t=e.children,a=r.useRef({placementApi:null,playbackEmitter:null}),n=r.useContext(k),i=n.broadcastId,o=n.mediaKey,s=n.store,u=s.store.getState().id;if(!u||!i)return r.createElement(r.Fragment,null,t);function d(e){a.current.playbackEmitter&&a.current.playbackEmitter.signalPlacementChange(e)}var c={acquisitionParams:{clip_id:u},broadcastId:i,isLooping:!0,onPlayerApi:function(e){s.setPlayerApi(u,e)},onPlaybackEmitterCreated:function(e){a.current.playbackEmitter=e,a.current.placementApi&&a.current.placementApi.sample(d)},onPlayerState:function(e,t){s.setPlayerState(u,e,t)},media:null,mediaKey:o,shouldAutoplayMuted:!0};return r.createElement(E.Z,{onChange:d,onPageVisibilityChange:C.Z,ref:function(e){a.current.placementApi=e}},t,r.createElement(T.Z,c))}var _=a(841361),A=a(968079),w=a(133028),R=(a(73439),a(875845)),x=a(198004),B=a(472599);function O(e){return R.w.proxsee.accessChat(e.chatToken).then((function(t){return function(e){var t=e.session,a=t.access_token,r=t.endpoint,n={messages:[],currentCursor:"",shouldAbort:!1};if(!a||!r)return Promise.resolve(n.messages);return K(void 0,n,(0,w.Z)((0,w.Z)({},e),{},{access_token:a,endpoint:r}))}((0,w.Z)((0,w.Z)({},e),{},{session:t}))})).catch((function(e){var t=(0,w.Z)({},e);return(0,B.ZP)("[fetchClipCaptions] failed to fetch chat history",t),[]}))}function K(e,t,a){if(e){var r,n=e.cursor,i=e.messages;t.currentCursor=n;var o=function(e,t){var a,r=!1,n=[],i=(0,_.Z)(e);try{for(i.s();!(a=i.n()).done;){var o=a.value;if(o.kind===x.bI.Chat){var s=o.payload,u=o.signature,d=new x.J(s,{signature:u}),c=t.clipEndTimeMs&&d.timestamp>t.clipEndTimeMs,l=d.type===x.gK.ServerAudioTranscription,p=l&&d.body.final;if(c){r=!0,l&&!d.body.final&&n.push(d);break}p&&n.push(d)}}}catch(m){i.e(m)}finally{i.f()}return{isComplete:r,results:n}}(i,a),s=o.isComplete,u=o.results;if((r=t.messages).push.apply(r,(0,A.Z)(u)),!n||s)return Promise.resolve(t.messages)}return R.w.proxsee.getChatHistory({access_token:a.access_token,host:a.endpoint,path:x.tJ.CHATMAN_REPLAY,cursor:t.currentCursor,since:1e6*a.clipStartTimeMs}).then((function(e){return K(e,t,a)}))}function V(){var e=I().store,t=function(){var e=I().store.useCurrentTrack()||{},t=e.absoluteTimeMs,a=e.chatToken,n=e.durationMs,i=r.useState(null),o=(0,P.Z)(i,2),s=o[0],u=o[1],d=r.useRef({hasEffectRun:!1});return r.useEffect((function(){!d.current.hasEffectRun&&a&&t&&n&&(d.current.hasEffectRun=!0,O({clipEndTimeMs:t+n,clipStartTimeMs:t,chatToken:a}).then((function(e){u(e)})))}),[a,t,n]),s}(),a=(e.useCurrentTrack()||{}).id3NtpTime,n=r.useState({id:void 0,text:"",durationMs:0}),i=(0,P.Z)(n,2),o=i[0],s=i[1];if(r.useEffect((function(){if((0,p.Z)(a)&&t&&t.length){var e,r,n=function(e){return a-e.ntpTimeInSeconds},i=(0,_.Z)(t);try{for(i.s();!(r=i.n()).done;){var u=r.value,d=n(u);d<0&&(e?d>n(e)&&(e=u):e=u)}}catch(m){i.e(m)}finally{i.f()}if(e&&e.body.uuid!==o.id){var c=1e3*Math.abs(n(e)),l=function(e,t){var a=e.split(" ").length,r=t>=a*q;return r}(e.body.body,c);s({text:l?e.body.body:"",id:e.body.uuid,durationMs:c})}}}),[t,a,o]),t)return t.length?{text:o.text,durationMs:o.durationMs}:null}var q=170;function D(e){var t,a,i,d,c,P=(0,h.$)(e.audioSpaceId),M=P.handlers,S=P.space,k=P.utils,C=I().store,E=function(){var e=I(),t=e.broadcastId,a=e.store;return(0,g.z0)(t,a)}(),T=C.useAudioLevel({isHost:"host"===E.kind,periscopeUserId:E.periscopeUserId}),Z=C.useIsPlaying(),_=C.useIsMuted(),A=k.state(),w=function(){var e=I(),t=e.broadcastId,a=e.store,n=a.usePlayerApi(),i=(0,y.R)(t),o=i.maxDurationMs,s=i.maxDurationSeconds;r.useEffect((function(){n&&n.setPlaybackTimeRange({startTimeS:0,endTimeS:s})}),[n,s]);var u=a.useCurrentTrack(),d=u||{},c=d.currentTimeMs,l=d.durationMs,m=0;if((0,p.Z)(c)&&(0,p.Z)(l)){var f=Math.min(l,o);m=Math.max(f-c,0)}return m}(),R=k.title(),x=(t=e.audioSpaceId,a=e.clipMetadata.startTimecodeMillis,i=(0,n.k6)(),d=r.useCallback((function(){return i.push((0,f.g)(t))}),[t,i]),c=(0,v.O)(t,d,a),[{Icon:l.default,text:L.report,isEmphasized:!0,onClick:c}]),B=function(){var e=I().broadcastId,t=(0,h.$)(e).utils,a=b.gt.usePlayButtonProps(),r=a.isPlaying,n=a.togglePlayback;if(t.state()===u.Z.StateEnum.replay&&t.is.joined)return{isPlaying:r,togglePlayback:n}}(),O=V();return r.createElement(m.Z,{onImpression:function(){k.scribe(":*:*:clipping:audiospace_card:impression")}},r.createElement(o.Z,{audioLevel:T,caption:O,community:null==S?void 0:S.community,fadeInWords:!s.Z.reducedMotionEnabled,isJoined:k.is.joined,isMuted:_,isPlaying:Z,menuItems:x,onButtonClick:function(){B?B.togglePlayback():M.join()},onMuteToggle:function(){var e=C.store.getState(),t=e.api,a=e.state;a&&t&&(a.isMuted?(k.scribe(":*:*:clipping:audiospace_card:unmute"),t.unmute()):(k.scribe(":*:*:clipping:audiospace_card:mute"),t.mute()))},palette:null==S?void 0:S.hostPalette,replayIsPlaying:null==B?void 0:B.isPlaying,speaker:E.user||(null==S?void 0:S.host),state:A,timeMs:w,title:R,withSquareBottomBorderRadius:e.withSquareBottomBorderRadius,withStraightBorders:e.withStraightBorders}))}var L={report:c().ccf2f24e},U=function(e){var t=(0,h.$)(e.audioSpaceId).space;if(!t||!e.clipMetadata)return r.createElement(i.Z,null);var a=t.media_key;return r.createElement(S,{audioSpaceId:e.audioSpaceId,clipId:e.clipMetadata.clipId,mediaKey:a},r.createElement(Z,null,r.createElement(D,{audioSpaceId:e.audioSpaceId,clipMetadata:e.clipMetadata,withSquareBottomBorderRadius:e.withSquareBottomBorderRadius,withStraightBorders:e.withStraightBorders})))}},709711:(e,t,a)=>{a.d(t,{Z:()=>r});a(315735),a(73439),a(906886),a(202784);const r=(0,a(656499).Z)({loader:function(){return Promise.all([a.e("shared~bundle.TwitterArticles~bundle.ComposeMedia~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlaye"),a.e("shared~bundle.TwitterArticles~bundle.ComposeMedia~ondemand.InlinePlayer~loaders.video.PlayerBase~loader.Audio"),a.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler"),a.e("shared~bundle.LiveEvent~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer"),a.e("loader.AudioOnlyVideoPlayer")]).then(a.bind(a,850744)).then((function(e){return{default:e.__DANGEROUS_IMPORT__}}))}})}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/loader.AudioContextSpaceClip.d16df63a.js.map-button_privacy-policy" data-tracking-will-navigate="true">Privacy Policy</a>, and <a href="/legal/cookie-policy?trk=seo-authwall-base_google-auth-button_cookie-policy" target="_blank" data-tracking-control-name="seo-authwall-base_google-auth-button_cookie-policy" data-tracking-will-navigate="true">Cookie Policy</a>.
              </p>
            </div>
            <div data-tracking-control-name="seo-authwall-base_google-one-tap" id="google-one-tap__container"></div>
          </div>
      
    <div class="loader loader--full-screen">
      <div class="loader__container mb-2 overflow-hidden">
        <icon class="loader__icon inline-block loader__icon--default text-color-progress-loading" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ddi43qwelxeqjxdd45pe3fvs1" data-svg-class-name="loader__icon-svg--large fill-currentColor h-[60px] min-h-[60px] w-[60px] min-w-[60px]"></icon>
      </div>
    </div>
  
    </form>

    <script data-delayed-url="https://static.licdn.com/aero-v1/sc/h/6y2czwba46q3wsh2b0d0g6trj" data-module-id="google-gsi-lib"></script>
    <code id="enableGoogleAutoSelect" style="display: none"><!--true--></code>
    <code id="googleAuthLibraryPath" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/6y2czwba46q3wsh2b0d0g6trj"--></code>
    <code id="isLinkedInAppWebView" style="display: none"><!--false--></code>
    <code id="isTermsAndConditionsSkipEnabledOneTap" style="display: none"><!--true--></code>
  
      
      <code id="isClsFixActive" style="display: none"><!--true--></code>
    <div class="focus-page">
        
    

    <a href="#main-content" class="skip-link btn-md btn-primary absolute z-11 -top-[100vh] focus:top-0">
      Skip to main content
    </a>
  
      <header class="focus-page__header global-alert-offset">
          

    
    
    
    

    <nav class="nav pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap mamabear:flex-wrap mamabear:gap-y-1 babybear:flex-wrap babybear:py-1.5
         focus-page__nav" aria-label="Primary">

      <a href="/?trk=seo-authwall-base_nav-header-logo" class="nav__logo-link link-no-visited-state z-1 mr-auto babybear:z-0 babybear:mr-0 babybear:flex-1 hover:no-underline focus:no-underline active:no-underline" data-tracking-control-name="seo-authwall-base_nav-header-logo" data-tracking-will-navigate>
          
                
    
    <span class="sr-only">LinkedIn</span>
<!---->      <icon class="block text-color-brand w-[84px] h-[21px] papabear:w-[135px] papabear:h-[34px]
          " data-test-id="nav-logo" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8fkga714vy9b2wk5auqo5reeb"></icon>
  
            
      </a>

<!---->
<!---->
      <div class="nav__cta-container order-3 flex gap-x-1 justify-end min-w-[100px] flex-nowrap flex-shrink-0 babybear:flex-wrap flex-2">
        
    
            
              
            
            
          


        
  
  

      
            
              
            
            
          


<!---->      </div>

<!---->
<!---->    </nav>
  

        
      </header>

<!---->
      
      <main id="main-content" class="focus-page__core-rail">
        
              <div class="flip-card  w-[416px]">
                

  
  
  
  
  

  <code id="registrationUrl" style="display: none"><!--"https://www.linkedin.com/signup/api/cors/createAccount?trk=seo-authwall-base"--></code>
  

    
    
    
    
    
    
    
    
    
    
    
    
    

    <code id="dust-var-fpLixTreatment" style="display: none"><!--""--></code>
    <code id="dust-var-pemDegradationTrackingTreatment" style="display: none"><!--""--></code>
    <code id="dust-var-isMobile" style="display: none"><!--false--></code>

    <code id="dust-var-isSplitJoinForm" style="display: none"><!--true--></code>
    <code id="i18n_continue" style="display: none"><!--"Continue"--></code>

    <code id="dust-var-cancelOnboardingRedirect" style="display: none"><!--false--></code>
    <code id="dust-var-postOnboardingRedirectUrl" style="display: none"><!--""--></code>
    <code id="dust-var-source" style="display: none"><!--""--></code>

    <code id="dust-var-isInlineError" style="display: none"><!--false--></code>

    <code id="dust-var-hasShowPassword" style="display: none"><!--false--></code>

    <code id="dust-var-invitationId" style="display: none"><!--""--></code>
    <code id="dust-var-sharedKey" style="display: none"><!--""--></code>

    <code id="dust-var-sendConfirmationEmail" style="display: none"><!--true--></code>

    <code id="dust-var-isInstantThirdPartyBtnEnabled" style="display: none"><!--"false"--></code>

    <code id="dust-var-hasMultipleSocialJoin" style="display: none"><!--false--></code>

    <code id="dust-var-useGoogleGSI" style="display: none"><!--"true"--></code>
    <code id="dust-var-loginCsrfParam" style="display: none"><!--"839b7897-9477-408b-854b-01af20223f02"--></code>

    <code id="dust-var-apfcDf" style="display: none"><!--"enabled"--></code>
    <code id="apfcDfPK" style="display: none"><!--""--></code>
    <code id="apfcDfPKV" style="display: none"><!---1--></code>

    <code id="shouldSignInOnDuplicateAccount" style="display: none"><!--false--></code>
    <code id="signInOnDuplicateAccountUrl" style="display: none"><!--"/checkpoint/lg/login-submit"--></code>

    <form class="join-form" action="/signup/api/cors/createAccount" method="post">
        
      <h1 class="authwall-join-form__title">Join LinkedIn</h1>
<!---->    

          <div class="profile-card hidden">
            <div class="profile-card__content">
              <img class="profile-card__photo" alt="Profile photo">
              <button class="profile-card__edit-icon" aria-label="Edit profile photo" data-tracking-control-name="seo-authwall-base_join-form-profile-card-edit-photo" title="Edit profile photo" type="button">
                <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/5oas73nreunfgygkpe5iwmgrs"></icon>
              </button>
              <div class="profile-card__info">
                <h3 class="profile-card__info-name"></h3>
                <p class="profile-card__info-email"></p>
              </div>
              <button class="profile-card__not-you" data-tracking-control-name="seo-authwall-base_join-form-profile-card-not-you" type="button">
                      Not you?
              </button>
            </div>
            <div class="profile-card__edit-photo-modal hidden">
              <div class="profile-card__edit-photo-content">
                <div class="profile-card__edit-photo-remove">
                  <button class="profile-card__edit-photo-text" data-tracking-control-name="seo-authwall-base_join-form-profile-card-remove-photo" type="button">
                    Remove photo
                  </button>
                </div>
                <div class="profile-card__edit-photo-cancel">
                  <button aria-label="Cancel" class="profile-card__edit-photo-cancel-icon" data-tracking-control-name="seo-authwall-base_join-form-profile-card-edit-photo-cancel" title="Cancel" type="button">
                    <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/gs508lg3t2o81tq7pmcgn6m2"></icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
      
    <div class="alert hidden" role="alert" tabindex="-1">
      <div class="wrapper">
        <p class="alert-content">
          
        </p>
      </div>
    </div>
  

      <section class="join-form__form-body  join-form__form-body--gsi">
        <div class="join-form__form-input-container join-form__form-input-container--is-hidden join-form__form-input-container--is-last-section">
            

    
    
    
    
    
    

      
      <div class="input ">
        
    <!---->
    <input class="input__input" autocomplete="on" required id="first-name" name="first-name" placeholder=" " type="text">
    <!---->
    <label class="input__label" for="first-name">First name</label>
  
        
      </div>
  
      
      <div class="input ">
        
    <!---->
    <input class="input__input" autocomplete="on" required id="last-name" name="last-name" placeholder=" " type="text">
    <!---->
    <label class="input__label" for="last-name">Last name</label>
  
        
      </div>
  
      
        </div>

        <div class="join-form__form-input-container ">
            
      <div class="input ">
        
    <!---->
    <input class="input__input" required id="email-or-phone" name="email-or-phone" placeholder=" ">
    <datalist id="email-domains"></datalist>
    <label class="input__label" for="email-or-phone">Email</label>
  
        
      </div>
  

            

    
    
    
    

      
      <div class="input ">
        
    <!---->
    <input class="input__input" autocomplete="new-password" required id="password" name="password" placeholder=" " type="password">
    <!---->
    <label class="input__label" for="password">Password (8+ characters)</label>
  
        
      </div>
  
  
        </div>

          <p data-is-not-yielded="true" class="join-form__form-body-agreement">
            By clicking Agree & Join, you agree to the LinkedIn <a href="https://www.linkedin.com/legal/user-agreement?trk=seo-authwall-base_join-form-user-agreement" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-control-name="seo-authwall-base_join-form-user-agreement" data-tracking-will-navigate="true">User Agreement</a>, <a href="https://www.linkedin.com/legal/privacy-policy?trk=seo-authwall-base_join-form-privacy-policy" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-control-name="seo-authwall-base_join-form-privacy-policy" data-tracking-will-navigate="true">Privacy Policy</a>, and <a href="https://www.linkedin.com/legal/cookie-policy?trk=seo-authwall-base_join-form-cookie-policy" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-control-name="seo-authwall-base_join-form-cookie-policy" data-tracking-will-navigate="true">Cookie Policy</a>.
          </p>

          <button class="join-form__form-body-submit-button" data-tracking-control-name="seo-authwall-base_join-form-submit" id="join-form-submit" value="Agree &amp; Join" type="submit">
            Agree & Join
          </button>

              

    
    
    
    
    
    
    


    <code id="dust-var-callbackUrl" style="display: none"><!--""--></code>
    <code id="dust-var-authUrl" style="display: none"><!--""--></code>
    <code id="dust-var-isSmartLockEnabled" style="display: none"><!--"false"--></code>
    <code id="dust-var-useStandaloneLibrary" style="display: none"><!--"true"--></code>
    <code id="dust-var-joinBtnProvider" style="display: none"><!--"GOOGLE"--></code>

    <code id="i18n_third_party_join_error-message-facebook" style="display: none"><!--"Sorry, we were unable to pull in your Facebook information. Please try again."--></code>
    <code id="i18n_third_party_join_error-message-google" style="display: none"><!--"Sorry, we were unable to pull in your Google information. Please try again."--></code>
    <code id="i18n_third_party_join_error-message-wechat" style="display: none"><!--"Sorry, we were unable to pull in your Wechat information. Please try again."--></code>

    <div class="third-party-join__container hidden">
        <div class="third-party-join__reg-option">
          <span class="third-party-join__line-wrapper">
            <span class="third-party-join__line"></span>
          </span>
          <span class="third-party-join__content">
            <span class="third-party-join__or-span">or</span>
          </span>
        </div>
<!---->
          <div class="third-party-join__gsi-btn-container" data-lib-src-path="https://static.licdn.com/aero-v1/sc/h/6y2czwba46q3wsh2b0d0g6trj"></div>

<!---->    </div>
  
      </section>

        
      <p class="authwall-join-form__swap-cta">
        Already on Linkedin? <button class="authwall-join-form__form-toggle--bottom form-toggle" data-tracking-control-name="auth_wall_desktop_jserp-login-toggle"> Sign in </button>
      </p>

<!---->    
    </form>

    <section aria-labelledby="challenge-title" class="challenge-dialog" role="dialog" style="display: none;" tabindex="-1">
      <div class="challenge-dialog__modal-container">
        <header class="challenge-dialog__header">
          <span class="challenge-dialog__title" id="challenge-title">
            Security verification
          </span>
          <button class="challenge-dialog__close" aria-label="Dismiss" data-tracking-control-name="seo-authwall-base_join-form-challenge-dialog-close">
              Close
          </button>
        </header>

        <iframe title="Security verification" class="challenge-dialog__iframe" src="about:blank" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
      </div>
    </section>

    


    


    
    
    

    <code id="i18n_required_email-or-phone" style="display: none"><!--"Please enter your email address or mobile number."--></code>
    <code id="i18n_tooLong_email-or-phone" style="display: none"><!--"Email or mobile number must be between 3 to 128 characters."--></code>
    <code id="i18n_invalidFormat_email-or-phone" style="display: none"><!--"Please enter a valid email address or mobile number."--></code>


    
    
    

    <code id="i18n_required_password" style="display: none"><!--"Please enter your password."--></code>
    <code id="i18n_tooShort_password" style="display: none"><!--"Password must be 8 characters or more."--></code>
    <code id="i18n_tooLong_password" style="display: none"><!--"Your password cannot exceed a maximum of 200 characters."--></code>

    
    <code id="i18n_server_generic_error" style="display: none"><!--"Sorry, something went wrong. Please try again."--></code>
  

    
    
    
    
    
    

    <code id="i18n_required_first-name" style="display: none"><!--"Please enter your first name."--></code>
    <code id="i18n_tooLong_first-name" style="display: none"><!--"First name can not exceed 50 characters."--></code>
    <code id="i18n_noForbiddenCharacters_first-name" style="display: none"><!--"Please enter a valid first name."--></code>
    <code id="i18n_noConsecutiveDigits_first-name" style="display: none"><!--"Please enter a valid first name."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_first-name" style="display: none"><!--"Please enter a valid first name."--></code>
    <code id="i18n_noLinkedIn_first-name" style="display: none"><!--"Please enter a valid first name."--></code>
    <code id="i18n_noUrl_first-name" style="display: none"><!--"Please enter a valid first name."--></code>
    <code id="i18n_onlyPhonetic_phonetic-first-name" style="display: none"><!--"Please use phonetic characters for your phonetic first name."--></code>
    <code id="i18n_tooLong_phonetic-first-name" style="display: none"><!--"Phonetic first name can not exceed 50 characters."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_phonetic-first-name" style="display: none"><!--"Please enter a valid phonetic first name."--></code>


    
    
    
    
    
    

    <code id="i18n_required_last-name" style="display: none"><!--"Please enter your last name."--></code>
    <code id="i18n_tooLong_last-name" style="display: none"><!--"Last name can not exceed 50 characters."--></code>
    <code id="i18n_noForbiddenCharacters_last-name" style="display: none"><!--"Please enter a valid last name."--></code>
    <code id="i18n_noConsecutiveDigits_last-name" style="display: none"><!--"Please enter a valid last name."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_last-name" style="display: none"><!--"Please enter a valid last name."--></code>
    <code id="i18n_noLinkedIn_last-name" style="display: none"><!--"Please enter a valid last name."--></code>
    <code id="i18n_noUrl_last-name" style="display: none"><!--"Please enter a valid last name."--></code>
    <code id="i18n_onlyPhonetic_phonetic-last-name" style="display: none"><!--"Please use phonetic characters for your phonetic last name."--></code>
    <code id="i18n_tooLong_phonetic-last-name" style="display: none"><!--"Phonetic last name can not exceed 50 characters."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_phonetic-last-name" style="display: none"><!--"Please enter a valid phonetic last name."--></code>

    
    
    
    

    <code id="i18n_onlyChinese_real-name" style="display: none"><!--"Please use only Chinese characters for real name."--></code>
    <code id="i18n_tooLong_real-name" style="display: none"><!--"Real name should be 2-4 characters long."--></code>
    <code id="i18n_tooShort_real-name" style="display: none"><!--"Real name should be 2-4 characters long."--></code>
    <code id="i18n_required_real-name" style="display: none"><!--"Please enter your real name."--></code>
  

      <script data-delayed-url="https://static.licdn.com/aero-v1/sc/h/5qa1f22mxd8ig3o5g568vo59" class="lazy-load" data-module-id="abuse-features-lib"></script>
<!---->  


                

  
  
  
  
  

  <div class="authwall-sign-in-form">
    <h2 class="authwall-sign-in-form__header-title">Sign in</h2>

    
    
    
    
    
    
    
    
    
    
    

    <code id="i18n_sign_in_form_show_text" style="display: none"><!--"Show"--></code>
    <code id="i18n_sign_in_form_show_label" style="display: none"><!--"Show your LinkedIn password"--></code>
    <code id="i18n_sign_in_form_hide_text" style="display: none"><!--"Hide"--></code>
    <code id="i18n_sign_in_form_hide_label" style="display: none"><!--"Hide your LinkedIn password"--></code>

    
    <code id="i18n_username_error_empty" style="display: none"><!--"Please enter an email address or phone number"--></code>
    
    <code id="i18n_username_error_too_long" style="display: none"><!--"Email or phone number must be between 3 to 128 characters"--></code>
    <code id="i18n_username_error_too_short" style="display: none"><!--"Email or phone number must be between 3 to 128 characters"--></code>

    
    <code id="i18n_password_error_empty" style="display: none"><!--"Please enter a password"--></code>
    
    <code id="i18n_password_error_too_short" style="display: none"><!--"The password you provided must have at least 6 characters"--></code>
    
    <code id="i18n_password_error_too_long" style="display: none"><!--"The password you provided must have at most 400 characters"--></code>

    <form data-id="sign-in-form" action="https://www.linkedin.com/uas/login-submit" method="post" novalidate class="authwall-sign-in-form__body">
      <input name="loginCsrfParam" value="839b7897-9477-408b-854b-01af20223f02" type="hidden">

      <div class="flex flex-col">
        
    <div class="mt-1.5" data-js-module-id="guest-input">
      <div class="flex flex-col">
        <label class="input-label mb-1" for="session_key">
          Email or phone
        </label>
        <div class="text-input flex">
          <input class="text-color-text font-sans text-md outline-0 bg-color-transparent grow" autocomplete="username" id="session_key" name="session_key" required type="text">
          
        </div>
      </div>

      <p class="input-helper mt-1.5" for="session_key" role="alert" data-js-module-id="guest-input__message"></p>
    </div>
  

        
    <div class="mt-1.5" data-js-module-id="guest-input">
      <div class="flex flex-col">
        <label class="input-label mb-1" for="session_password">
          Password
        </label>
        <div class="text-input flex">
          <input class="text-color-text font-sans text-md outline-0 bg-color-transparent grow" autocomplete="current-password" id="session_password" name="session_password" required type="password">
          
            <button aria-live="assertive" data-id="sign-in-form__password-visibility-toggle" class="font-sans text-md font-bold text-color-action z-10 ml-[12px] hover:cursor-pointer" aria-label="Show your LinkedIn password" data-tracking-control-name="seo-authwall-base_sign-in-password-visibility-toggle-btn" type="button">Show</button>
          
        </div>
      </div>

      <p class="input-helper mt-1.5" for="session_password" role="alert" data-js-module-id="guest-input__message"></p>
    </div>
  

        <input name="session_redirect" type="hidden">

<!---->      </div>

      <div data-id="sign-in-form__footer" class="flex justify-between
          sign-in-form__footer--full-width">
        <a data-id="sign-in-form__forgot-password" class="font-sans text-md font-bold link leading-regular
            sign-in-form__forgot-password--full-width" href="https://www.linkedin.com/uas/request-password-reset?trk=seo-authwall-base_forgot_password" data-tracking-control-name="seo-authwall-base_forgot_password" data-tracking-will-navigate>Forgot password?</a>

<!---->
        <input name="trk" value="seo-authwall-base_sign-in-submit" type="hidden">
        <button class="btn-md btn-primary flex-shrink-0 cursor-pointer
            sign-in-form__submit-btn--full-width w-full max-w-[400px] mx-auto" data-id="sign-in-form__submit-btn" data-tracking-control-name="seo-authwall-base_sign-in-submit-btn" data-tracking-litms type="submit">
          Sign in
        </button>
      </div>
        <div class="sign-in-form__divider left-right-divider pt-2 pb-3">
          <p class="sign-in-form__divider-text font-sans text-sm text-color-text px-2">
            or
          </p>
        </div>
    </form>
      <div class="w-full max-w-[400px] mx-auto">
        
    <div class="google-auth-button">
        
    
      <code id="isTermsAndConditionsSkipEnabledAuthButton" style="display: none"><!--true--></code>
      <p class="google-auth-button__tc text-color-text-low-emphasis text-xs pb-2" data-impression-id="seo-authwall-base_button-skip-tc-text">
        By clicking Continue, you agree to LinkedIn’s <a href="/legal/user-agreement?trk=seo-authwall-base_google-auth-button_user-agreement" target="_blank" data-tracking-control-name="seo-authwall-base_google-auth-button_user-agreement" data-tracking-will-navigate="true">User Agreement</a>, <a href="/legal/privacy-policy?trk=seo-authwall-base_google-auth-button_privacy-policy" target="_blank" data-tracking-control-name="seo-authwall-base_google-auth-button_privacy-policy" data-tracking-will-navigate="true">Privacy Policy</a>, and <a href="/legal/cookie-policy?trk=seo-authwall-base_google-auth-button_cookie-policy" target="_blank" data-tracking-control-name="seo-authwall-base_google-auth-button_cookie-policy" data-tracking-will-navigate="true">Cookie Policy</a>.
      </p>
  
      <div class="google-auth-button__placeholder"></div>
    </div>
  
      </div>
      
        <p class="authwall-sign-in-form__swap-cta">
          New to Linkedin? <button class="authwall-sign-in-form__form-toggle--bottom form-toggle" data-tracking-control-name="auth_wall_desktop_jserp-login-toggle"> Join now </button>
        </p>
      
  
  </div>

              </div>

<!---->
                
    
    
    
    
    

        

    

      <div class="cta-modal overflow-hidden container-raised z-10 fixed bottom-3 right-3 min-h-[56px] p-2 babybear:hidden windows-app-upsell windows-app-upsell--msft flex flex-col p-2 w-[359px] !bg-[#F1F8FA] opacity-90 backdrop-blur-[2px]" data-impression-id="seo-authwall-base_windows-app-upsell_cta-modal" role="dialog" aria-labelledby="cta-modal-header" aria-describedby="cta-modal-subheader">
          

          

        
          <div class="windows-app-upsell__linkedin-title-container pt-[6px] mb-1.5 flex align-center">
            <icon class="windows-app-upsell__linkedin-bug-icon block w-[21px] h-[21px]" data-svg-class-name="windows-app-upsell__linkedin-bug-icon-svg w-[21px] h-[21px]" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/dkgve44sisif1wgwp8ozaxu1x"></icon>
            <p class="windows-app-upsell__linkedin-title uppercase text-xs text-color-text-secondary leading-[21px] ml-1">
              LinkedIn
            </p>
          </div>
          <p class="windows-app-upsell__title font-sans text-md text-color-text-accent-4-hover font-semibold leading-regular mb-1">
            LinkedIn is better on the app
          </p>
          <p class="windows-app-upsell__body font-sans text-sm text-color-text-secondary leading-regular">
            Don’t have the app? Get it in the Microsoft Store.
          </p>
          <a class="windows-app-upsell__cta btn-sm btn-secondary-emphasis mt-2 mb-[6px] w-fit" href="ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&amp;mode=mini&amp;cid=guest_desktop_upsell_authwall2" data-tracking-control-name="seo-authwall-base_windows-app-upsell_cta" data-tracking-will-navigate>
            Open the app
          </a>
        

        <button class="cta-modal__dismiss-btn absolute h-4 w-4 p-1 top-2 right-2 hover:cursor-pointer focus:outline focus:outline-2 focus:outline-color-action" data-tracking-control-name="seo-authwall-base_windows-app-upsell_dismiss" aria-label="Dismiss">
          <icon class="cta-modal__dismiss-icon block h-2 w-2 onload" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/582r9vsvwmiwa75ujfqps3ivc"></icon>
        </button>
      </div>
  
  

              <code id="isPreloadDuoEnabled" style="display: none"><!--true--></code>

              <code id="i18n_sign_up_title" style="display: none"><!--"Sign Up | LinkedIn"--></code>
              <code id="i18n_sign_in_title" style="display: none"><!--"Sign In | LinkedIn"--></code>
            
      </main>

<!---->
      

    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    

    
    
    
    

    <footer class="li-footer bg-transparent w-full ">
      <ul class="li-footer__list flex flex-wrap flex-row items-start justify-start w-full h-auto min-h-[50px] my-[0px] mx-auto py-3 px-2 papabear:w-[1128px] papabear:p-0">
        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        
          <span class="sr-only">LinkedIn</span>
          <icon class="li-footer__copy-logo text-color-logo-brand-alt inline-block self-center h-[14px] w-[56px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/e12h2cd8ac580qen9qdd0qks8"></icon>
          <span class="li-footer__copy-text flex items-center">&copy; 2024</span>
        
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://about.linkedin.com?trk=seo-authwall-base_footer-about" data-tracking-control-name="seo-authwall-base_footer-about" data-tracking-will-navigate>
          
          About
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/accessibility?trk=seo-authwall-base_footer-accessibility" data-tracking-control-name="seo-authwall-base_footer-accessibility" data-tracking-will-navigate>
          
          Accessibility
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/user-agreement?trk=seo-authwall-base_footer-user-agreement" data-tracking-control-name="seo-authwall-base_footer-user-agreement" data-tracking-will-navigate>
          
          User Agreement
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/privacy-policy?trk=seo-authwall-base_footer-privacy-policy" data-tracking-control-name="seo-authwall-base_footer-privacy-policy" data-tracking-will-navigate>
          
          Privacy Policy
        
        </a>
  </li>

<!---->        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/cookie-policy?trk=seo-authwall-base_footer-cookie-policy" data-tracking-control-name="seo-authwall-base_footer-cookie-policy" data-tracking-will-navigate>
          
          Cookie Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/copyright-policy?trk=seo-authwall-base_footer-copyright-policy" data-tracking-control-name="seo-authwall-base_footer-copyright-policy" data-tracking-will-navigate>
          
          Copyright Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://brand.linkedin.com/policies?trk=seo-authwall-base_footer-brand-policy" data-tracking-control-name="seo-authwall-base_footer-brand-policy" data-tracking-will-navigate>
          
          Brand Policy
        
        </a>
  </li>

          
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/psettings/guest-controls?trk=seo-authwall-base_footer-guest-controls" data-tracking-control-name="seo-authwall-base_footer-guest-controls" data-tracking-will-navigate>
          
            Guest Controls
          
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/professional-community-policies?trk=seo-authwall-base_footer-community-guide" data-tracking-control-name="seo-authwall-base_footer-community-guide" data-tracking-will-navigate>
          
          Community Guidelines
        
        </a>
  </li>

        
<!---->
          
          
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        
              

    
    

    

    

    <div class="collapsible-dropdown collapsible-dropdown--footer collapsible-dropdown--up flex items-center relative hyphens-auto language-selector z-2">
<!---->
        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-[100%] top-auto" role="menu" tabindex="-1">
          
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="العربية (Arabic)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ar_AE" data-locale="ar_AE" role="menuitem" lang="ar_AE">
                العربية (Arabic)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Čeština (Czech)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-cs_CZ" data-locale="cs_CZ" role="menuitem" lang="cs_CZ">
                Čeština (Czech)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Dansk (Danish)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-da_DK" data-locale="da_DK" role="menuitem" lang="da_DK">
                Dansk (Danish)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Deutsch (German)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-de_DE" data-locale="de_DE" role="menuitem" lang="de_DE">
                Deutsch (German)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="English (English) selected" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link--selected" data-tracking-control-name="language-selector-en_US" data-locale="en_US" role="menuitem" lang="en_US">
                <strong>English (English)</strong>
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Español (Spanish)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-es_ES" data-locale="es_ES" role="menuitem" lang="es_ES">
                Español (Spanish)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Français (French)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-fr_FR" data-locale="fr_FR" role="menuitem" lang="fr_FR">
                Français (French)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="हिंदी (Hindi)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-hi_IN" data-locale="hi_IN" role="menuitem" lang="hi_IN">
                हिंदी (Hindi)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Bahasa Indonesia (Indonesian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-in_ID" data-locale="in_ID" role="menuitem" lang="in_ID">
                Bahasa Indonesia (Indonesian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Italiano (Italian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-it_IT" data-locale="it_IT" role="menuitem" lang="it_IT">
                Italiano (Italian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="日本語 (Japanese)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ja_JP" data-locale="ja_JP" role="menuitem" lang="ja_JP">
                日本語 (Japanese)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="한국어 (Korean)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ko_KR" data-locale="ko_KR" role="menuitem" lang="ko_KR">
                한국어 (Korean)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Bahasa Malaysia (Malay)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ms_MY" data-locale="ms_MY" role="menuitem" lang="ms_MY">
                Bahasa Malaysia (Malay)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Nederlands (Dutch)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-nl_NL" data-locale="nl_NL" role="menuitem" lang="nl_NL">
                Nederlands (Dutch)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Norsk (Norwegian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-no_NO" data-locale="no_NO" role="menuitem" lang="no_NO">
                Norsk (Norwegian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Polski (Polish)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-pl_PL" data-locale="pl_PL" role="menuitem" lang="pl_PL">
                Polski (Polish)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Português (Portuguese)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-pt_BR" data-locale="pt_BR" role="menuitem" lang="pt_BR">
                Português (Portuguese)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Română (Romanian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ro_RO" data-locale="ro_RO" role="menuitem" lang="ro_RO">
                Română (Romanian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Русский (Russian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ru_RU" data-locale="ru_RU" role="menuitem" lang="ru_RU">
                Русский (Russian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Svenska (Swedish)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-sv_SE" data-locale="sv_SE" role="menuitem" lang="sv_SE">
                Svenska (Swedish)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="ภาษาไทย (Thai)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-th_TH" data-locale="th_TH" role="menuitem" lang="th_TH">
                ภาษาไทย (Thai)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Tagalog (Tagalog)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-tl_PH" data-locale="tl_PH" role="menuitem" lang="tl_PH">
                Tagalog (Tagalog)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Türkçe (Turkish)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-tr_TR" data-locale="tr_TR" role="menuitem" lang="tr_TR">
                Türkçe (Turkish)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Українська (Ukrainian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-uk_UA" data-locale="uk_UA" role="menuitem" lang="uk_UA">
                Українська (Ukrainian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="简体中文 (Chinese (Simplified))" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-zh_CN" data-locale="zh_CN" role="menuitem" lang="zh_CN">
                简体中文 (Chinese (Simplified))
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="正體中文 (Chinese (Traditional))" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-zh_TW" data-locale="zh_TW" role="menuitem" lang="zh_TW">
                正體中文 (Chinese (Traditional))
            </button>
          </li>
<!---->      
        </ul>

          
        <button class="language-selector__button select-none relative pr-2 font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover hover:cursor-pointer focus:text-color-link-focus focus:outline-dotted focus:outline-1" aria-expanded="false" data-tracking-control-name="footer-lang-dropdown_trigger">
          <span class="language-selector__label-text mr-0.5 break-words">
            Language
          </span>
          <icon class="language-selector__label-chevron w-2 h-2 absolute top-0 right-0" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cyolgscd0imw2ldqppkrb84vo"></icon>
        </button>
      
    </div>
  
  
          
  </li>

      </ul>

<!---->    </footer>
  
    </div>
  
    

            <script src="https://static.licdn.com/aero-v1/sc/h/an3u8gpta43rgjny4tzujbn6p" async></script>
<!---->          
            <script data-delayed-url="https://static.licdn.com/aero-v1/sc/h/5qa1f22mxd8ig3o5g568vo59" data-module-id="apfc-lib"></script>
          <code id="apfcLix" style="display: none"><!--true--></code>
          <code id="dust-var-apfcDf" style="display: none"><!--"enabled"--></code>

      <script src="https://static.licdn.com/aero-v1/sc/h/132tb6exu03e95gkp74f8ip9y" async defer></script>
    
      </body>
    </html>
  
