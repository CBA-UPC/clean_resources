(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["bundle.UserAvatar","bundle.TrustedFriendsManagement"],{711620:(e,t,r)=>{"use strict";r.r(t),r.d(t,{UserAvatarScreen:()=>y,default:()=>b});var n=r(202784),a=r(872983),o=r(150129),i=r(403187),c=r(806454),s=r(267619),u=r(184246),l=r(759824),d=(r(477950),r(74069),r(923335)),m=r(392160),f=r(157659),h=r(823803),p=(0,f.W3)([f.pL]),_=function(e,t){var r=v(e,t);return r?p(e,r):h.ZP.LOADING},v=function(e,t){return t.match.params.screenName},Z=function(e,t){var r=v(e,t);return r?f.ZP.selectByScreenName(e,r):void 0};const S=(0,m.Z)().propsFromState((function(){return{fetchStatus:_,screenName:v,user:Z}})).adjustStateProps((function(e){var t=e.fetchStatus,r=e.screenName,n=e.user;return{fetchStatus:t,screenName:r,user:n,mediaItem:n?{id_str:n.id_str,expanded_url:n.profile_image_url_https,media_url_https:n.profile_image_url_https,ext_alt_text:n.profile_image_extensions_alt_text,type:"photo",original_info:{width:400,height:400}}:void 0}})).propsFromActions((function(){return{createLocalApiErrorHandler:(0,d.createLocalApiErrorHandlerWithContextFactory)("USER_AVATAR"),fetchOneUserByScreenNameIfNeeded:f.ZP.fetchOneByScreenNameIfNeeded}}));var y=function(e){var t=e.createLocalApiErrorHandler,r=e.fetchOneUserByScreenNameIfNeeded,d=e.fetchStatus,m=e.history,f=e.mediaItem,h=e.screenName,p=e.user,_=(0,u.K2)(p),v=(0,u.sI)(),Z=v.handleMediaDetailZoomed,S=v.handleMediaItemTapped,y=v.hideButtons,b=function(){m.goBack({backLocation:"/".concat(h)})};n.useEffect((function(){!function(e,t,r){e(r).catch(t(s.F))}(r,t,h)}),[t,r,h]);return n.createElement(c.Z.Configure,{headerless:!0},n.createElement(i.Z,{backgroundColor:_,hideButtons:y,mediaUrl:p&&p.profile_image_url_https,onCloseButtonPress:b},n.createElement(a.Z,{fetchStatus:d,render:function(){var e=(0,u.K2)(p);return p&&f?n.createElement(o.Z,{businessAvatar:"Business"===p.verified_type,dataSaver:!1,dominantColor:e.rgb,isAvatar:!0,mediaIndex:0,mediaItems:[f],onDismiss:b,onMediaDetailZoomed:Z,onTap:S}):n.createElement(l.Z,{to:"/".concat(h)})},renderFailure:function(){return n.createElement(l.Z,{to:"/".concat(h)})},retryable:!1})))};const b=S(y)},553078:(e,t,r)=>{"use strict";r.r(t),r.d(t,{UserHeaderScreen:()=>y,default:()=>b});var n=r(202784),a=r(872983),o=r(150129),i=r(403187),c=r(806454),s=r(267619),u=r(184246),l=r(759824),d=(r(477950),r(74069),r(923335)),m=r(392160),f=r(157659),h=(0,f.W3)([f.pL]),p=function(e,t){return h(e,_(e,t))},_=function(e,t){return t.match.params.screenName},v=function(e,t){return f.ZP.selectByScreenName(e,_(e,t))};const Z=(0,m.Z)().propsFromState((function(){return{fetchStatus:p,screenName:_,user:v}})).adjustStateProps((function(e){var t=e.fetchStatus,r=e.screenName,n=e.user;return{fetchStatus:t,screenName:r,user:n,mediaItem:n?{id_str:n.id_str,expanded_url:n.profile_banner_url,media_url_https:n.profile_banner_url,ext_alt_text:n.profile_banner_extensions_alt_text,type:"photo",original_info:{width:1500,height:500}}:void 0}})).propsFromActions((function(){return{createLocalApiErrorHandler:(0,d.createLocalApiErrorHandlerWithContextFactory)("USER_HEADER"),fetchOneUserByScreenNameIfNeeded:f.ZP.fetchOneByScreenNameIfNeeded}}));var S=function(e,t,r){e(r).catch(t(s.F))},y=function(e){var t=e.createLocalApiErrorHandler,r=e.fetchOneUserByScreenNameIfNeeded,s=e.fetchStatus,d=e.history,m=e.mediaItem,f=e.screenName,h=e.user,p=(0,u.C_)(h),_=(0,u.sI)(),v=_.handleMediaDetailZoomed,Z=_.handleMediaItemTapped,y=_.hideButtons,b=function(){d.goBack({backLocation:"/".concat(f)})};return n.useEffect((function(){S(r,t,f)}),[t,r,f]),n.createElement(c.Z.Configure,{headerless:!0},n.createElement(i.Z,{backgroundColor:p,hideButtons:y,mediaUrl:h&&h.profile_banner_url,onCloseButtonPress:b},n.createElement(a.Z,{fetchStatus:s,onRequestRetry:function(){return S(r,t,f)},render:function(){var e=(0,u.C_)(h);return h&&m?n.createElement(o.Z,{dataSaver:!1,dominantColor:e.rgb,mediaIndex:0,mediaItems:[m],onDismiss:b,onMediaDetailZoomed:v,onTap:Z}):n.createElement(l.Z,{to:"/".concat(f)})}})))};const b=Z(y)},703655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(133028),a=r(202784),o=r(890601),i=r(783427),c=r(493987),s=r(473569),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.useContext(c.Z),r=(0,i.Z)().direction;return(0,o.Z)("svg",(0,n.Z)((0,n.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[s.Z.root,e.style,t&&s.Z.iconRTL],viewBox:"0 0 24 24",children:a.createElement("g",null,a.createElement("path",{d:"M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z"}))}),{writingDirection:r})};u.metadata={width:24,height:24};const l=u},235193:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(936386),a=r.n(n);const o=function(e,t,r){return a()(e,t,r)}},936386:e=>{function t(e,t,r){var n,a,o,i,c;function s(){var u=Date.now()-i;u<t&&u>=0?n=setTimeout(s,t-u):(n=null,r||(c=e.apply(o,a),o=a=null))}null==t&&(t=100);var u=function(){o=this,a=arguments,i=Date.now();var u=r&&!n;return n||(n=setTimeout(s,t)),u&&(c=e.apply(o,a),o=a=null),c};return u.clear=function(){n&&(clearTimeout(n),n=null)},u.flush=function(){n&&(c=e.apply(o,a),o=a=null,clearTimeout(n),n=null)},u}t.debounce=t,e.exports=t}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/bundle.UserAvatar.d720469a.js.mapdden">
        <icon class="loader__icon inline-block loader__icon--muted text-color-icon-active" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ddi43qwelxeqjxdd45pe3fvs1" data-svg-class-name="loader__icon-svg--small fill-currentColor h-[30px] min-h-[30px] w-[30px] min-w-[30px]"></icon>
      </div>
    </div>
  
        <code id="registrationUrl" style="display: none"><!--"https://www.linkedin.com/signup/api/cors/createAccount?trk=public_jobs_apply-link-offsite_sign_up_modal"--></code>
        <code id="i18nBtnTextAgree" style="display: none"><!--"Agree & Join"--></code>
        <code id="i18nBtnTextContinue" style="display: none"><!--"Continue"--></code>
        <code id="redirectOnModalClose" style="display: none"><!--true--></code>
        <div class="sign-up-modal__body">
          

    
    
    
    
    
    
    
    
    
    
    
    
    

    <code id="dust-var-fpLixTreatment" style="display: none"><!--""--></code>
    <code id="dust-var-pemDegradationTrackingTreatment" style="display: none"><!--""--></code>
    <code id="dust-var-isMobile" style="display: none"><!--false--></code>

    <code id="dust-var-isSplitJoinForm" style="display: none"><!--true--></code>
    <code id="i18n_continue" style="display: none"><!--"Continue"--></code>

    <code id="dust-var-cancelOnboardingRedirect" style="display: none"><!--false--></code>
    <code id="dust-var-postOnboardingRedirectUrl" style="display: none"><!--"https://es.linkedin.com/jobs/view/director-of-marketing-at-sls-3803342702?refId=KeJ%2F4aExJS2wEFNz9nNscQ%3D%3D&trackingId=O2WtAhVhnwZleWHC0NAx%2BA%3D%3D"--></code>
    <code id="dust-var-source" style="display: none"><!--""--></code>

    <code id="dust-var-isInlineError" style="display: none"><!--false--></code>

    <code id="dust-var-hasShowPassword" style="display: none"><!--false--></code>

    <code id="dust-var-invitationId" style="display: none"><!--""--></code>
    <code id="dust-var-sharedKey" style="display: none"><!--""--></code>

    <code id="dust-var-sendConfirmationEmail" style="display: none"><!--true--></code>

    <code id="dust-var-isInstantThirdPartyBtnEnabled" style="display: none"><!--"true"--></code>

    <code id="dust-var-hasMultipleSocialJoin" style="display: none"><!--false--></code>

    <code id="dust-var-useGoogleGSI" style="display: none"><!--"true"--></code>
    <code id="dust-var-loginCsrfParam" style="display: none"><!--"7679499c-a093-4334-856d-85484cc736eb"--></code>

    <code id="dust-var-apfcDf" style="display: none"><!--""--></code>
    <code id="apfcDfPK" style="display: none"><!--""--></code>
    <code id="apfcDfPKV" style="display: none"><!---1--></code>

    <code id="shouldSignInOnDuplicateAccount" style="display: none"><!--false--></code>
    <code id="signInOnDuplicateAccountUrl" style="display: none"><!--"/checkpoint/lg/login-submit"--></code>

    <code id="trackingPrefix" style="display: none"><!--"public_jobs_apply-link-offsite_sign_up_modal"--></code>

    <form class="join-form" action="/signup/api/cors/createAccount" method="post">
        
              <h4 class="sign-up-modal__header"><strong>Join or sign in to find your next job</strong></h4>
              <p class="sign-up-modal__sub-header">Join to apply for the <strong>Director of Marketing</strong> role at <strong>SLS</strong></p>
            

          <div class="profile-card hidden">
            <div class="profile-card__content">
              <img class="profile-card__photo" alt="Profile photo">
              <button class="profile-card__edit-icon" aria-label="Edit profile photo" data-tracking-control-name="public_jobs_apply-link-offsite_sign_up_modal_join-form-profile-card-edit-photo" title="Edit profile photo" type="button">
                <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/5oas73nreunfgygkpe5iwmgrs"></icon>
              </button>
              <div class="profile-card__info">
                <h3 class="profile-card__info-name"></h3>
                <p class="profile-card__info-email"></p>
              </div>
              <button class="profile-card__not-you" data-tracking-control-name="public_jobs_apply-link-offsite_sign_up_modal_join-form-profile-card-not-you" type="button">
                      Not you?
              </button>
            </div>
            <div class="profile-card__edit-photo-modal hidden">
              <div class="profile-card__edit-photo-content">
                <div class="profile-card__edit-photo-remove">
                  <button class="profile-card__edit-photo-text" data-tracking-control-name="public_jobs_apply-link-offsite_sign_up_modal_join-form-profile-card-remove-photo" type="button">
                    Remove photo
                  </button>
                </div>
                <div class="profile-card__edit-photo-cancel">
                  <button aria-label="Cancel" class="profile-card__edit-photo-cancel-icon" data-tracking-control-name="public_jobs_apply-link-offsite_sign_up_modal_join-form-profile-card-edit-photo-cancel" title="Cancel" type="button">
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

            
              <div class="pt-4" id="join-form__legal-agreement-padding"></div>
              <div class="join-form__form-body-agreement join-form__form-body-agreement--is-hidden" id="join-form__step_2_agreement">
                By clicking Agree & Join, you agree to the LinkedIn <a href="https://www.linkedin.com/legal/user-agreement?trk=public_jobs_apply-link-offsite_join-form-user-agreement" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-will-navigate="true" data-tracking-control-name="public_jobs_apply-link-offsite_join-form-user-agreement">User Agreement</a>, <a href="https://www.linkedin.com/legal/privacy-policy?trk=public_jobs_apply-link-offsite_join-form-privacy-policy" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-will-navigate="true" data-tracking-control-name="public_jobs_apply-link-offsite_join-form-privacy-policy">Privacy Policy</a> and <a href="https://www.linkedin.com/legal/cookie-policy?trk=public_jobs_apply-link-offsite_join-form-cookie-policy" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-will-navigate="true" data-tracking-control-name="public_jobs_apply-link-offsite_join-form-cookie-policy">Cookie Policy</a>.
              </div>
            

            
              <button id="join-form-submit-continue" class="join-form__join-btn join-form__form-body-submit-button" value="Continue" data-tracking-litms data-tracking-control-name="jobs-guest-frontend_join-form-submit" type="submit">
                Continue
              </button>
              <button id="join-form-submit-agree" class="join-form__join-btn join-form__form-body-submit-button sign-up-modal__elt-is-hidden" value="Agree &amp; Join" data-tracking-litms data-tracking-control-name="jobs-guest-frontend_join-form-submit" type="submit">
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

    <div class="third-party-join__container ">
        <div class="third-party-join__reg-option">
          <span class="third-party-join__line-wrapper">
            <span class="third-party-join__line"></span>
          </span>
          <span class="third-party-join__content">
            <span class="third-party-join__or-span">or</span>
          </span>
        </div>
<!---->
          <div class="third-party-join__gsi-btn-container" data-lib-src-path="https://static.licdn.com/aero-v1/sc/h/8m736dfzskmdn6bwwqz67iiki"></div>

<!---->    </div>
  
      </section>

        
              <div class="sign-up-modal__tertiary-cta-container">
                <div id="teriary-cta-container">
                    <a class="sign-up-modal__sign-up-later" href="#" data-tracking-control-name="public_jobs_apply-link-offsite_sign-up-modal-sign-up-later">
                        Apply on company website
                    </a>
                </div>
              </div>
            
    </form>

    <section aria-labelledby="challenge-title" class="challenge-dialog" role="dialog" style="display: none;" tabindex="-1">
      <div class="challenge-dialog__modal-container">
        <header class="challenge-dialog__header">
          <span class="challenge-dialog__title" id="challenge-title">
            Security verification
          </span>
          <button class="challenge-dialog__close" aria-label="Dismiss" data-tracking-control-name="public_jobs_apply-link-offsite_sign_up_modal_join-form-challenge-dialog-close">
              Close
          </button>
        </header>

        <iframe title="Security verification" class="challenge-dialog__iframe" src="about:blank" frameborder="0" scrolling="auto" allow