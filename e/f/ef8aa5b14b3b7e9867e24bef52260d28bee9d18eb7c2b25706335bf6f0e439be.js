"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["bundle.NotMyAccount"],{940897:(e,t,n)=>{n.r(t),n.d(t,{NotMyAccountScreen:()=>O,default:()=>$});var a=n(256666),r=n(709249),c=n(887371),s=n(545754),o=n(486906),i=(n(136728),n(477950),n(74069),n(888233),n(202784)),l=n(325686),u=n(882392),d=n(973186),m=n(434411),h=n(645184),f=n.n(h),p=n(107333),_=n(663140),E=n(300292),v=n(923335),A=n(392160),g=n(133028);const b=function(e){var t=e.apiClient;e.featureSwitches;return{disassociateAccount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.post("account/not_my_account/disassociate",e,{},(0,g.Z)((0,g.Z)({},n),{},{"content-type":"application/json"}))},getMaskedData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.get("account/not_my_account/get_masked_data",e,n)}}};var N=n(753392),Z=function(e){return function(t,n,a){var r=a.api;return(0,N.Vg)(t,{params:e,request:r.withEndpoint(b).disassociateAccount})("DISASSOCIATE_ACCOUNT")}},y=function(e){return function(t,n,a){var r=a.api;return(0,N.Vg)(t,{params:e,request:r.withEndpoint(b).getMaskedData})("GET_MASKED_DATA")}};const k=(0,A.Z)().propsFromActions((function(){return{createLocalApiErrorHandler:(0,v.createLocalApiErrorHandlerWithContextFactory)("NOT_MY_ACCOUNT_CONTEXT"),disassociateAccount:Z,getMaskedData:y}}));var w=i.createElement(u.ZP,{color:"gray700",weight:"bold"}),C=f().f7865ab6,M=f().a35248e4,S=f().f794a67c,T=f().j79c0ff7,H=f().j24c37b2,D=i.createElement(f().I18NFormatMessage,{$i18n:"b72bbe27"},i.cloneElement(w,null,f().c1d75571)),F=i.createElement(f().I18NFormatMessage,{$i18n:"iddf579b"},i.createElement(u.ZP,{link:"https://help.twitter.com/managing-your-account/received-a-confirmation-email-thats-not-for-my-account"},f().ac71e82f)),I=i.createElement(i.Fragment,null,i.createElement(l.Z,{style:{paddingBottom:d.Z.theme.spaces.space4}},D),F),L=f().fb46383c,P=f().gcfdbc2b,O=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(e){var c;return(0,r.Z)(this,n),(c=t.call(this,e))._renderHeader=p.Z,c._handleErrors=function(e){var t,n=c.props.createLocalApiErrorHandler,r=c.state.screenName;n((t={},(0,a.Z)(t,_.ZP.ClientNotPermitted,{toast:{text:L}}),(0,a.Z)(t,_.ZP.InvalidEmailAddress,{toast:{text:P({screenName:r})}}),(0,a.Z)(t,"showToast",!0),t))(e),c._redirectToHome()},c._handleSubmit=function(){var e=c.props.disassociateAccount,t=c.state.screenName;t&&c._secret&&e({screenName:t,secret:c._secret}).then((function(){c.setState({success:!0})})).catch(c._handleErrors)},c._redirectToHome=function(){c.props.history.push("/")},c._secret=e.match.params.emailLinkSecret,c.state={emailAddress:"",screenName:"",success:!1},c}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.getMaskedData,a=t.location,r=t.match.params.screenName,c=a.query.ut&&a.query.ut.toString();this._secret&&r&&n({secret:this._secret,user:r,ut:c}).then((function(t){e.setState({emailAddress:null==t?void 0:t.emailAddress,screenName:null==t?void 0:t.screenName,success:!(null==t||!t.detached)})})).catch(this._handleErrors)}},{key:"render",value:function(){var e=this.state,t=e.emailAddress,n=e.screenName,a=e.success;if(!t||!n)return null;var r=a?T({emailAddress:t}):C,c=a?function(e,t){return i.createElement(f().I18NFormatMessage,{$i18n:"b8e3884f"},i.cloneElement(w,null,f().h1732cde({emailAddress:t})),i.cloneElement(w,null,f().d374a600({screenName:e})))}(n,t):function(e,t){return i.createElement(f().I18NFormatMessage,{$i18n:"b028aec5"},i.cloneElement(w,null,f().f351663c({screenName:e})),i.cloneElement(w,null,f().baaa89c4({emailAddress:t})))}(n,t),s=a?H:M,o=a?void 0:S,l=a?this._redirectToHome:this._handleSubmit,d=a?void 0:this._redirectToHome,h=a?I:function(e){return i.createElement(f().I18NFormatMessage,{$i18n:"c43645ad"},i.cloneElement(w,null,f().h75b475c({screenName:e})),i.createElement(u.ZP,{link:"https://twitter.com/settings/email_notifications"},f().a8f0e157))}(n);return i.createElement(E.Z,{renderHeader:this._renderHeader},i.createElement(m.Z,{actionLabel:s,footer:h,headline:r,onAction:l,onClose:l,onSecondaryAction:d,secondaryActionLabel:o,subtext:c,withCloseButton:!1}))}}]),n}(i.Component);const $=k(O)}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/bundle.NotMyAccount.531b469a.js.map">
            <h2>LinkedIn respects your privacy</h2>
          <div class="artdeco-global-alert__responsive-content-container">
            <div class="artdeco-global-alert__content">
              <p>LinkedIn and 3rd parties use essential and non-essential cookies to provide, secure, analyze and improve our Services, and to show you relevant ads (including <b>professional and job ads</b>) on and off LinkedIn. Learn more in our <a href="https://www.linkedin.com/legal/cookie-policy">Cookie Policy</a>.</p><p>Select Accept to consent or Reject to decline non-essential cookies for this use. You can update your choices at any time in your <a href="https://www.linkedin.com/mypreferences/g/guest-cookies">settings</a>.</p>
            </div>
          </div>
          <div class="artdeco-global-alert-action__wrapper">
                <button class="artdeco-global-alert-action artdeco-button artdeco-button--inverse artdeco-button--2 artdeco-button--primary" action-url action-type="ACCEPT" data-tracking-control-name="urn:li:control:ga-cookie.consent.accept.v4" data-control-name="urn:li:control:ga-cookie.consent.accept.v4">
                Accept
                </button>
                <button class="artdeco-global-alert-action artdeco-button artdeco-button--inverse artdeco-button--2 artdeco-button--primary" action-url action-type="DENY" data-tracking-control-name="urn:li:control:ga-cookie.consent.deny.v4" data-control-name="urn:li:control:ga-cookie.consent.deny.v4">
                Reject
                </button>
          </div>
        </div>
<!---->      </section>
    </div>  
      </div>
  
  

        
        
    
    
    
    <form class="google-auth" action="https://www.linkedin.com/uas/login-submit" method="post">
      <input name="loginCsrfParam" value="88c49a71-f127-43e3-883b-7a60c0d1ef04" type="hidden">

        <input name="session_redirect" value="https://www.linkedin.com/jobs/quality-assurance-jobs-badalona?trk=homepage-basic_suggested-search" type="hidden">

      <input name="trk" value="public_jobs_google-one-tap-submit" type="hidden">
        <code id="termsAndConditionsRendered" style="display: none"><!--true--></code>
          <div class="google-one-tap__module hidden fixed flex flex-col items-center top-[20px] right-[20px] z-[9999]">
            <div class="relative top-2 bg-color-background-container-tint pl-2 pr-1 pt-2 pb-3 w-[375px] rounded-md shadow-2xl">
              <p class="text-md font-bold text-color-text">
                Agree & Join LinkedIn
              </p>
              <p class="text-sm text-color-text" data-impression-id="public_jobs_one-tap-skip-tc-text">
                By clicking Continue, you agree to LinkedIn’s <a href="/legal/user-agreement?trk=public_jobs_google-auth-button_user-agreement" target="_blank" data-tracking-control-name="public_jobs_google-auth-button_user-agreement" data-tracking-will-navigate="true">User Agreement</a>, <a href="/legal/privacy-policy?trk=public_jobs_google-auth-button_privacy-policy" target="_blank" data-tracking-control-name="public_jobs_google-auth-button_privacy-policy" data-tracking-will-navigate="true">Privacy Policy</a>, and <a href="/legal/cookie-policy?trk=public_jobs_google-auth-button_cookie-policy" target="_blank" data-tracking-control-name="public_jobs_google-auth-button_cookie-policy" data-tracking-will-navigate="true">Cookie Policy</a>.
              </p>
            </div>
            <div data-tracking-control-name="public_jobs_google-one-tap" id="google-one-tap__container"></div>
          </div>
      
    <div class="loader loader--full-screen">
      <div class="loader__container mb-2 overflow-hidden">
        <icon class="loader__icon inline-block loader__icon--default text-color-progress-loading" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ddi43qwelxeqjxdd45pe3fvs1" data-svg-class-name="loader__icon-svg--large fill-currentColor h-[60px] min-h-[60px] w-[60px] min-w-[60px]"></icon>
      </div>
    </div>
  
    </form>

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
<!---->              Quality Assurance in Badalona, Catalonia, Spain
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
          <ul class="switcher-tabs__list flex flex-1 items-stretch papabear:flex-col mamabear:flex-col