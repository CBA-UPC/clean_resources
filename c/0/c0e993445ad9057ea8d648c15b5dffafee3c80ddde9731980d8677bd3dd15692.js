"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["shared~loader.topicHandler~loader.TopicFollowPromptHandler"],{751507:(t,e,i)=>{i.d(e,{$6:()=>r,eY:()=>a,zt:()=>c});var n=i(202784),o=n.createContext(!1);function c(t){return n.createElement(o.Provider,t)}var r=o.Consumer;function a(){return n.useContext(o)}},972947:(t,e,i)=>{i.d(e,{Z:()=>E});var n=i(133028),o=i(709249),c=i(887371),r=i(545754),a=i(486906),s=(i(200634),i(202784)),l=i(325686),d=i(174062),p=i(882392),m=i(238749),u=i(973186),h=i(645184),v=i.n(h),g=i(880166),b=i(348501),f=i(86098),y=i(466841),w=i(615579),Z=i(760397),I=i(460673),_=i(990610),D=v().a2a3824a,L=0,S=function(t){(0,r.Z)(i,t);var e=(0,a.Z)(i);function i(t,c){var r;return(0,o.Z)(this,i),(r=e.call(this,t,c))._topicLink={pathname:"/i/topics/".concat(r.props.topic.id),state:{referringScribeNamespace:(0,n.Z)((0,n.Z)({},r.props.analytics.contextualScribeNamespace),{},{action:"click"})}},r._handleOnClick=function(){var t=r.props,e=t.saveAsRecentSearch,i=t.shouldStoreTypeaheadItem,n=t.topic,o=n.description,c=n.id,a=n.name;e&&i&&i(w.Z.ItemType.TOPIC)&&e({topic:{id:c,name:a,description:o||"",type:Z.g2.Topic}}),r._handleScribe("click")},r._topicDomId="topic".concat(L),r._nameDomId="topic-name".concat(L),r._descriptionDomId="topic-description".concat(L),r._followButtonDomId="topic-follow-button".concat(L),r._notInterestedButtonDomId="topic-not-interested-button".concat(L),L+=1,r}return(0,c.Z)(i,[{key:"render",value:function(){var t=this.props,e=t.educateOnFollow,i=t.isInSidebar,n=t.nameWeight,o=t.notInterestedOnClick,c=t.topic,r=c.description,a=c.name,m=this.context.loggedInUserId;return s.createElement(d.Z,{accessibilityLabelledBy:[this._topicDomId,this._nameDomId,this._descriptionDomId,this._followButtonDomId,this._notInterestedButtonDomId].join(" "),interactiveStyles:this._topicLink?void 0:null,link:this._topicLink,onClick:this._topicLink?this._handleOnClick:void 0,style:[k.root,k.flexStart],withDarkerInteractiveBackground:i},s.createElement(l.Z,{style:k.topic},s.createElement(l.Z,{accessibilityLabel:D,nativeID:this._topicDomId}),this._renderIcon(),s.createElement(l.Z,{style:k.text},s.createElement(p.ZP,{nativeID:this._nameDomId,weight:n,withInteractiveStyling:!!this._topicLink},a),r?s.createElement(p.ZP,{color:"gray700",nativeID:this._descriptionDomId,numberOfLines:2},r):null)),s.createElement(l.Z,{style:k.buttons},s.createElement(f.ZP,{educateOnFollow:e,nativeID:this._followButtonDomId,topic:c}),m&&o?s.createElement(y.Z,{nativeID:this._notInterestedButtonDomId,onPress:o,style:k.marginStart,topicId:c.id}):null))}},{key:"_renderIcon",value:function(){return this.props.withIcon?s.createElement(m.Z,{Icon:g.default,size:"large",style:k.icon}):null}},{key:"_handleScribe",value:function(t){this.props.analytics.scribeAction(t)}}]),i}(s.Component);S.contextType=b.rC,S.defaultProps={nameWeight:"bold",withIcon:!0};var k=u.Z.create((function(t){return{root:{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:t.componentDimensions.gutterHorizontal,paddingVertical:t.componentDimensions.gutterVertical},flexStart:{alignItems:"flex-start"},icon:{alignSelf:"flex-start",marginEnd:t.spaces.space12},customIcon:{borderRadius:t.borderRadii.infinite,height:t.spaces.space32,width:t.spaces.space32},text:{flexShrink:1},buttons:{alignItems:"center",alignSelf:"center",flexDirection:"row",paddingStart:t.spaces.space8},marginStart:{marginStart:t.spaces.space4},topic:{alignItems:"center",flexDirection:"row",flexShrink:1,paddingEnd:t.spaces.space4}}}));const E=(0,_.Z)((0,I.Z)(S))},470025:(t,e,i)=>{i.d(e,{Z:()=>r});var n=i(206149),o={setLocation:function(t){document.location=t},getAppStoreURLs:function(){var t=c(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rwoiah"),e=[t.android,t.ios],i=e.find((function(t){return t.matches()}));return i?[i]:e},getiOSAppStoreLink:function(t){var e=c(t);return e.ios.matches()?e.ios.url:e.ios.webUrl},getAndroidAppStoreLink:function(t){var e=c(t);return e.android.matches()?e.android.url:e.android.webUrl},goToAppStore:function(t){var e=this.getAppStoreURLs(t);e[0]&&o.setLocation(e[0].url)},openApp:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"twitter://timeline";o.setLocation(t)}},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rwoiah";return{android:{platform:"android",matches:function(){return n.ZP.isAndroid()},url:"market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D".concat(t),webUrl:"https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D".concat(t)},ios:{platform:"ios",matches:function(){return n.ZP.isIOS()},url:"https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=".concat(t,"&mt=8"),webUrl:"https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=".concat(t,"&mt=8")}}};const r=o},156538:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var n=i(133028),o=i(202784),c=i(890601),r=i(783427),a=i(473569),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,r.Z)().direction;return(0,c.Z)("svg",(0,n.Z)((0,n.Z)({},t),{},{accessibilityRole:t.accessibilityLabel?t.accessibilityRole||"img":void 0,accessibilityHidden:void 0===t.accessibilityLabel,style:[a.Z.root,t.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z"}))}),{writingDirection:e})};s.metadata={width:24,height:24};const l=s},407307:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var n=i(133028),o=i(202784),c=i(890601),r=i(783427),a=i(473569),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,r.Z)().direction;return(0,c.Z)("svg",(0,n.Z)((0,n.Z)({},t),{},{accessibilityRole:t.accessibilityLabel?t.accessibilityRole||"img":void 0,accessibilityHidden:void 0===t.accessibilityLabel,style:[a.Z.root,t.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"}))}),{writingDirection:e})};s.metadata={width:24,height:24};const l=s},81921:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var n=i(133028),o=i(202784),c=i(890601),r=i(783427),a=i(473569),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,r.Z)().direction;return(0,c.Z)("svg",(0,n.Z)((0,n.Z)({},t),{},{accessibilityRole:t.accessibilityLabel?t.accessibilityRole||"img":void 0,accessibilityHidden:void 0===t.accessibilityLabel,style:[a.Z.root,t.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"}))}),{writingDirection:e})};s.metadata={width:24,height:24};const l=s},880166:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var n=i(133028),o=i(202784),c=i(890601),r=i(783427),a=i(473569),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,r.Z)().direction;return(0,c.Z)("svg",(0,n.Z)((0,n.Z)({},t),{},{accessibilityRole:t.accessibilityLabel?t.accessibilityRole||"img":void 0,accessibilityHidden:void 0===t.accessibilityLabel,style:[a.Z.root,t.style],viewBox:"0 0 24 24",children:o.createElement("g",null,o.createElement("path",{d:"M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z"}))}),{writingDirection:e})};s.metadata={width:24,height:24};const l=s}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/shared~loader.topicHandler~loader.TopicFollowPromptHandler.e5eb549a.js.mapryPath" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/6y2czwba46q3wsh2b0d0g6trj"--></code>
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
    <code id="dust-var-loginCsrfParam" style="display: none"><!--"f15acc3f-0201-4a00-882f-ece21d869ded"--></code>

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
      <input name="loginCsrfParam" value="f15acc3f-0201-4a00-882f-ece21d869ded" type="hidden">

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
  
