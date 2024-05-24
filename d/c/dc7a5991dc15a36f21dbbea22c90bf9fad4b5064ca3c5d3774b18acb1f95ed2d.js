(window.__),S=s(963),x=s(825),A=s(903),E=s(793),D=s(0);function N(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function U(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?N(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}const F=()=>{const t=b.a.get("br_registration")||"{}";return JSON.parse(t)};class R extends p.a.PureComponent{constructor(e){super(e),o()(this,"trackAccountCreationAction",()=>{const t=this.props.returnUrl||this.props.ui.brHost;Object(E.a)(this.props.pageType,t)}),this.closeEmailNotification=this.closeEmailNotification.bind(this),this.updateAccount=this.updateAccount.bind(this),this.onNext=this.onNext.bind(this),this.trackAccountCreated=this.trackAccountCreated.bind(this);let s="choosemethod";t.location&&t.location.hash&&(s=t.location.hash.replace("#","")),this.state={currentFlowStep:s,referrer:""}}componentDidMount(){t.onpopstate=()=>{const e=t.location.hash.replace("#","")||"choosemethod";this.setState({currentFlowStep:e}),this._flow.next(e)}}closeEmailNotification(){this.props.notificationCallbacks.updateNotificationData("email_confirmation",!1)}onBack(){t.history.back()}onNext(e,s){var r;const a="choosemethod"===s.flowKey?"":`#${s.flowKey}`;s.index>e.index&&t.history.pushState({},"",a),this.setState({currentFlowStep:s.flowKey,referrer:this.state.referrer||(null===(r=t.document)||void 0===r?void 0:r.referrer)},()=>{this.props.trackEvent({page_type:"other",tag_manager_event:"page_type",referring_source:this.state.referrer})})}trackAccountCreated(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{returnUrl:e,screen:s}=this.props,r=e&&e.includes("bracketchallenge")?"BCG":"BR";this.props.trackEvent(U({accountType:this.state.currentFlowStep,app:r,legacyAccount:!1,screen:s,socialOnboarding:!1,success:!0,tag_manager_event:"account_created"},t))}updateAccount(t){const e=this.props.user.id||b.a.get("br_userid",!0);return this.props.updateUserAccount({info:t,userID:e})}render(){const t=this.props.getData(),e=t&&t.username,s=Object(D.jsxs)(u.Button,{classes:"flowBack",onClick:this.onBack,children:[r||(r=Object(D.jsx)(u.SVG,{type:"icon",target:"leftArrow"})),"Back"]});return Object(D.jsxs)("div",{className:"page signupPage",children:[Object(D.jsx)(y.a,U(U({},this.props.notificationCallbacks),{},{data:this.props.notificationsData,name:"email_confirmation",ui:this.props.ui,children:Object(D.jsxs)("p",{children:["Email confirmation sent. You have 24 hours to claim"," ",Object(D.jsx)("span",{children:e||"your username"}),".",Object(D.jsx)(u.Button,{onClick:this.closeEmailNotification,children:"Dismiss"})]})})),Object(D.jsxs)(C.a,{onFlowFinished:this.props.signupSuccess,startAt:this.state.currentFlowStep,onNext:this.onNext,ref:t=>this._flow=t,children:[Object(D.jsx)(O.a,{flowKey:"choosemethod",loadScript:this.props.loadScript,onFbOauth:this.props.onFbOauth,methodChosen:this.props.signupMethodChosen,returnUrl:this.props.returnUrl,trackEvent:this.props.trackEvent,showEmailSignup:this.props.ui.showEmailSignup,disableFbSignup:this.props.ui.disableFbSignup}),Object(D.jsx)(P.a,{field:this.props.user.field,flowKey:"name",firstName:t.first_name,lastName:t.last_name,status:this.props.user.status,updateData:this.props.updateRegistration,validateName:this.props.validateName,children:s}),Object(D.jsx)(A.a,{flowKey:"username",authMethod:t.method,checkUsername:this.props.checkUsername,saveUsername:this.props.saveUsername,updateData:this.props.updateRegistration,trackEvent:this.props.trackEvent,trackAction:this.trackAccountCreationAction,children:s}),Object(D.jsxs)(C.a,{flowKey:"phone",children:[Object(D.jsx)(S.a,{createAccount:this.props.createPhoneAccount,trackEvent:this.props.trackEvent,mParticleLogin:this.props.mParticleLogin,mParticleUpdateAttributes:this.props.mParticleUpdateAttributes,children:s}),Object(D.jsx)(x.a,{verifyPhone:this.props.verifyPhoneAccount,authorizePhone:this.props.authorizePhoneAccount,trackAction:this.trackAccountCreationAction,trackEvent:this.props.trackEvent,onboarding:!0,isSignup:!0,mParticleLogin:this.props.mParticleLogin,children:s})]}),this.props.ui.showEmailSignup&&Object(D.jsxs)(C.a,{flowKey:"email",children:[Object(D.jsx)(k.a,{createAccount:this.props.createAccount,mParticleLogin:this.props.mParticleLogin,mParticleUpdateAttributes:this.props.mParticleUpdateAttributes,onboarding:!0,trackEvent:this.props.trackEvent,screen:this.props.screen,trackAction:this.trackAccountCreationAction,children:s}),a||(a=Object(D.jsx)(w.a,{}))]}),i||(i=Object(D.jsx)(C.a,{flowKey:"facebook"}))]})]})}}e.default=Object(l.b)(t=>({notificationsData:j.e(t),pageType:t.page.type,returnUrl:j.f(t).returnUrl,screen:j.f(t).screen,ui:j.s(t),user:j.t(t)}),(function(t,e){let{store:s}=e;const r=s.getState().ui.userAgent,a={authorizePhoneAccount:e=>t(v.p(e)),checkUsername:t=>f.d(t),createAccount:t=>f.a(t).then(t=>{const{sub:e}=h()(t.access_token);b.a.setAccountCookies({auth:t}),b.a.set("br_userid",e,{ttl:b.a.oneMonth})}),createFacebookAccount:(t,e)=>f.b(t).then(t=>{const{sub:s}=h()(t.access_token);b.a.set("br_registration","{}"),b.a.setAccountCookies({auth:t}),b.a.set("br_userid",s,{ttl:b.a.oneMonth}),a.mParticleLogin({},{gatekeeper_id:s,account_verified:!0,loggedIn:!1,signup_source:"facebook"}),e()}).catch(t=>{throw t}),createPhoneAccount:t=>f.c(t),getData:F,loadScript:e=>t(g.d(e)),notificationCallbacks:{checkNotification:e=>t(_.a(e,!1)),updateNotificationData:(e,s)=>Promise.all([t(_.c({name:e,value:s})),t(_.a(e,!1))])},mParticleLogin:(e,s)=>t(m.b(r,e,s)),mParticleUpdateAttributes:e=>t(m.e(e)),onFbOauth:t=>{const e={device:"web",token:t.accessToken,uid:t.userID};a.updateRegistration({facebook:e})},saveUsername:(t,e)=>f.e(t).then(()=>{a.updateRegistration({username:t});const s=a.getData();"facebook"===s.method&&a.createFacebookAccount(s,e)}),signupMethodChosen:t=>{a.updateRegistration({method:t})},signupSuccess:()=>t(Object(v.m)("/accounts/edit")),trackEvent:e=>t(m.f(e)),updateRegistration:t=>{const e=b.a.get("br_registration")||"{}",s=U(U({},JSON.parse(e)),t);return b.a.set("br_registration",JSON.stringify(s)),Promise.resolve("updated registration")},updateUserAccount:e=>t(Object(v.t)(e)),validateName:e=>t(v.w(e)),verifyPhoneAccount:e=>t(v.s(e))};return a}))(R)}.call(this,s(16))},793:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var r=s(57);function a(t,e){return!!window.gtag&&(window.gtag("event","conversion",{send_to:e,event_callback:function(){void 0!==t&&(window.location=t)}}),!1)}function i(t){window.gtag&&window.gtag("event","conversion",{allow_custom_scripts:!0,send_to:t})}function n(t){const{reportConversion:e,trackingPixel:s}=t;!function(t){let{standard:e,unique:s}=t;window.gtag&&(i(e.id),Object(r.b)(e.src),i(s.id),Object(r.b)(s.src))}(s),e&&(a(e.url,e.standardId),a(e.url,e.uniqueId))}const o=(t,e)=>{switch(t){case"signup":n({trackingPixel:{standard:{id:"DC-5994466/bleac0/bleac002+standard",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?"},unique:{id:"DC-5994466/bleac0/bleac003+unique",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1;num=1?"}},reportConversion:{standardId:"AW-981403438/8bGXCIvl-_0CEK6O_NMD",uniqueId:"AW-981403438/6GBACK-n9_0CEK6O_NMD",url:e}});case"checkout":n({trackingPixel:{standard:{id:"DC-5994466/bleac0/bleac000+standard",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?"},unique:{id:"DC-5994466/bleac0/bleac001+unique",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1;num=1?"}},reportConversion:{standardId:"AW-981403438/-ACRCN2jz_0CEK6O_NMD",uniqueId:"AW-981403438/sGvdCKinz_0CEK6O_NMD",url:e}});case"aew-full-gear-2021-ppv":case"liveEvents":n({trackingPixel:{standard:{id:"DC-5994466/bleac0/bleac0+standard",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?"},unique:{id:"DC-5994466/bleac0/bleac00+unique",src:"https://ad.doubleclick.net/ddm/activity/src=5994466;type=bleac0;cat=bleac00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1;num=1?"}}}),i("AW-981403438/S0vYCPidz_0CEK6O_NMD"),i("AW-981403438/r75-COTw-_0CEK6O_NMD")}}},811:function(t,e,s){"use strict";var r=s(3),a=s.n(r),i=s(0);class n extends a.a.PureComponent{constructor(t){super(t),this.togglePassword=this.togglePassword.bind(this),this.onChange=this.onChange.bind(this),this.state={showPassword:!1,value:this.props.value}}togglePassword(){this.setState({showPassword:!this.state.showPassword})}onChange(t){this.setState({value:t.target.value})}render(){return Object(i.jsxs)("div",{className:"atom passwordInput",children:[Object(i.jsx)("input",{type:this.state.showPassword?"text":"password",name:"password",required:!0,value:this.state.value,onChange:this.onChange,placeholder:this.props.placeholder}),!!this.state.value&&Object(i.jsx)("span",{onClick:this.togglePassword,children:this.state.showPassword?"Hide":"Show"})]})}}n.defaultProps={value:"",placeholder:"Password"},e.a=n},961:function(t,e,s){"use strict";var r,a,i=s(3),n=s.n(i),o=s(13),c=s.n(o),p=s(21),d=s(826),h=s(98),l=s(1),u=s(0);class b extends n.a.PureComponent{constructor(t){super(t),this.onEmail=()=>{this.trackEvent(),this.props.methodChosen("email"),this.props.stepCompleted()},this.onFacebook=()=>{this.props.methodChosen("facebook"),this.props.stepCompleted()},this.onPhone=()=>{this.trackEvent(),this.props.methodChosen("phone"),this.props.stepCompleted()},this.onFbOauth=this.onFbOauth.bind(this),this.trackEvent=this.trackEvent.bind(this)}onFbOauth(t){this.props.onFbOauth(t),this.onFacebook()}trackEvent(){const{returnUrl:t}=this.props,e=t&&t.includes("bracketchallenge")?"BCG":"BR";this.props.trackEvent({app:e,tag_manager_event:"create_account"})}render(){const t=c()({molecule:!0,chooseSignupMethod:!0});return(Object(u.jsxs)("div",{className:t,children:[r||(r=Object(u.jsx)(h.a,{})),Object(u.jsx)("div",{className:"legalText",children:Object(u.jsxs)("p",{className:"onDarkBackground",children:["By signing up, you agree to the terms and conditions of the Bleacher Report"," ",a||(a=Object(u.jsx)("a",{href:"/pages/terms",children:"Terms of Use"}))," and"," ",Object(u.jsx)("a",{href:l.H.privacy(),children:"Privacy Policy"}),"."]})}),Object(u.jsx)(p.Button,{classes:"primary",onClick:this.onPhone,children:"Sign up with Phone"}),!this.props.disableFbSignup&&Object(u.jsx)(d.a,{attemptFbLogin:this.onFbOauth,loadScript:this.props.loadScript,trackEvent:this.trackEvent,isSignup:!0,children:"Sign up with Facebook"}),this.props.showEmailSignup&&Object(u.jsx)(p.Button,{classes:"email",onClick:this.onEmail,children:"Sign up with Email"})]}))}}b.defaultProps={returnUrl:""},e.a=b},962:function(t,e,s){"use strict";var r,a,i,n,o=s(3),c=s.n(o),p=s(13),d=s.n(p),h=s(21),l=s(4),u=s(748),b=s(811),m=s(1),g=s(0);class _ extends c.a.PureComponent{constructor(t){super(t),this.state={errors:[]},this.onSubmit=this.onSubmit.bind(this)}onSubmit(t){t.preventDefault();const{onboarding:e,screen:s}=this.props;this.setState({errors:[]});const r=l.a.get("br_registration"),a=r?JSON.parse(r):{},i=a.first_name.trim(),n=a.last_name.trim(),o=a.username.trim(),c=this._emailField.value,p=this._passwordField.state.value;this.props.createAccount({email:c,password:p,username:o,first_name:i,last_name:n}).then(()=>{this.props.stepCompleted(),this.props.trackAction(),this.props.trackEvent({tag_manager_event:"account_created",accountType:"email",screen:s,success:!0,legacyAccount:!1,socialOnboarding:e}),this.props.mParticleUpdateAttributes({account_verified:!1,loggedIn:!1,signup_method:"email"})}).catch(t=>{var r,a,i;this.setState({errors:[t]}),this.props.trackEvent({tag_manager_event:"account_created",accountType:"email",screen:s,success:!1,legacyAccount:!1,socialOnboarding:e}),this.props.trackEvent({tag_manager_event:"user_error",errorType:"account_management",errorMessage:(null==t?void 0:null===(r=t.output)||void 0===r?void 0:null===(a=r.payload)||void 0===a?void 0:a.error)||(null==t?void 0:t.message),errorCode:null==t?void 0:null===(i=t.data)||void 0===i?void 0:i.errorCode,page:"email"})})}render(){const t=d()({molecule:!0,emailSignup:!0});return(Object(g.jsxs)("form",{className:t,onSubmit:this.onSubmit,children:[r||(r=Object(g.jsx)("h2",{children:"Sign Up with Email"})),a||(a=Object(g.jsx)("p",{children:"Enter your email and create a password."})),Object(g.jsx)("input",{name:"email",type:"email",ref:t=>this._emailField=t,required:!0,placeholder:"Email",pattern:"^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$"}),Object(g.jsx)(b.a,{ref:t=>{this._passwordField=t}}),Object(g.jsx)(u.a,{errors:this.state.errors,errorSet:"email"}),i||(i=Object(g.jsx)(h.Button,{type:"submit",children:"Continue"})),Object(g.jsxs)("small",{children:["By selecting “Continue” you agree to the terms and conditions of the Bleacher Report"," ",n||(n=Object(g.jsx)("a",{href:"/pages/terms",children:"Terms of Use"}))," and"," ",Object(g.jsx)("a",{href:m.H.privacy(),children:"Privacy Policy"})]}),this.props.children]}))}}e.a=_},963:function(t,e,s){"use strict";var r,a=s(3),i=s.n(a),n=s(4),o=s(824),c=s(1),p=s(0);class d extends i.a.PureComponent{constructor(t){super(t),this.state={errors:[]},this.props.createAccount.bind(this),this.onSubmit=this.onSubmit.bind(this)}onSubmit(t,e){t.preventDefault();const s=n.a.get("br_registration"),r=s?JSON.parse(s):{},{first_name:a,last_name:i,username:o}=r;this.props.createAccount({phone:e,username:o,first_name:a,last_name:i}).then(()=>{this.props.mParticleUpdateAttributes({account_verified:!1,loggedIn:!1,signup_method:"phone"}),this.setState({errors:[]}),n.a.set("br_phone",e),this.props.stepCompleted()}).catch(t=>{this.setState({errors:[t]})})}render(){return Object(p.jsx)(o.a,{errors:this.state.errors,onSubmit:this.onSubmit,buttonText:"Continue",title:"Sign Up with Your Phone",legalDisclaimer:Object(p.jsxs)("p",{children:["By signing up, you agree to the terms and conditions of the Bleacher Report"," ",r||(r=Object(p.jsx)("a",{href:"/pages/terms",children:"Terms of Use"}))," and"," ",Object(p.jsx)("a",{href:c.H.privacy(),children:"Privacy Policy"}),"."]}),children:this.props.children})}}e.a=d}}]);
//# sourceMappingURL=https://static-assets.bleacherreport.net/js/signupPage-7ba703b9.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ebook-domain-verification" content="ns69f9izd4gngdqdydwm9xy63s5vjw" />
    
    
    <!-- Facebook Pixels -->
      <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '338304415184650');
        fbq('track', 'PageView');
      </script>
      <!-- End Facebook Pixels -->
    
  
      <meta name="google-site-verification" content="8f3OQXewC3Afqu0uMH3NwbkawNduOou0_nlHhF23Stw" />
    

    

    
      <!-- Global Adwords site tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10946662440"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-10946662440');
      </script>
    

    

      

      
      
        
    
        <!-- Prism JS -->
      <!-- Prod --><script src="https://lightning.cnn.com/launch/7be62238e4c3/97fa00444124/launch-2878c87af5e3.min.js" async></script>
    <!-- End Prism JS -->
    
    
    
    
    
    
    
    
    
    

      
      

    <script>window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');</script><meta name="google-site-verification" content="s9PRQPMy_4dduP5oDIrzF9GUPDiMubMfj8gP4gKdpxs">
<meta id="shopify-digital-wallet" name="shopify-digital-wallet" content="/64138248410/digital_wallets/dialog">
<meta name="shopify-checkout-api-token" content="bd11359ee2226878575af9554e74c62c">
<meta id="in-context-paypal-metadata" data-shop-id="64138248410" data-venmo-supported="true" data-environment="production" data-locale="en_US" data-paypal-v4="true" data-currency="USD">
<script async="async" src="/checkouts/internal/preloads.js?permanent-domain=the-cnn-shop.myshopify.com&locale=en-US"></script>
<script id="apple-pay-shop-capabilities" type="application/json">{"shopId":64138248410,"countryCode":"US","currencyCode":"USD","merchantCapabilities":["supports3DS"],"merchantId":"gid:\/\/shopify\/Shop\/64138248410","merchantName":"CNN Store","requiredBillingContactFields":["postalAddress","email","phone"],"requiredShippingContactFields":["postalAddress","email","phone"],"shippingType":"shipping","supportedNetworks":["visa","masterCard","amex","discover","elo","jcb"],"total":{"type":"pending","label":"CNN Store","amount":"1.00"},"shopifyPaymentsEnabled":true,"supportsSubscriptions":true}</script>
<script id="shopify-features" type="application/json">{"accessToken":"bd11359ee2226878575af9554e74c62c","betas":["rich-media-storefront-analytics"],"domain":"store.cnn.com","predictiveSearch":true,"shopId":64138248410,"smart_payment_buttons_url":"https:\/\/store.cnn.com\/cdn\/shopifycloud\/payment-sheet\/assets\/latest\/spb.en.js","dynamic_checkout_cart_url":"https:\/\/store.cnn.com\/cdn\/shopifycloud\/payment-sheet\/assets\/latest\/dynamic-checkout-cart.en.js","locale":"en","optimusEnabled":true,"optimusHidden":false,"shopPromisePDPV3Enabled":true,"shopPromiseVariantForOptimusEnabled":false}</script>
<script>var Shopify = Shopify || {};
Shopify.shop = "the-cnn-shop.myshopify.com";
Shopify.locale = "en";
Shopify.currency = {"active":"USD","rate":"1.0"};
Shopify.country = "US";
Shopify.theme = {"name":"CNN Store v1.3 - Loading Issue Fix","id":136537964762,"theme_store_id":null,"role":"main"};
Shopify.theme.handle = "null";
Shopify.theme.style = {"id":null,"handle":null};
Shopify.cdnHost = "store.cnn.com/cdn";
Shopify.routes = Shopify.routes || {};
Shopify.routes.root = "/";</script>
<script type="module">!function(o){(o.Shopify=o.Shopify||{}).modules=!0}(window);</script>
<script>!function(o){function n(){var o=[];function n(){o.push(Array.prototype.slice.apply(arguments))}return n.q=o,n}var t=o.Shopify=o.Shopify||{};t.loadFeatures=n(),t.autoloadFeatures=n()}(window);</script>
<script>window.ShopifyPay = window.ShopifyPay || {};
window.ShopifyPay.apiHost = "shop.app\/pay";</script>
<script defer="defer" async type="module" src="//store.cnn.com/cdn/shopifycloud/shop-js/modules/client.payment-terms_924ece13.en.esm.js"></script>
<script defer="defer" async type="module" src="//store.cnn.com/cdn/shopifycloud/shop-js/modules/chunk.common_089ed268.esm.js"></script>
<script type="module">
  await import("//store.cnn.com/cdn/shopifycloud/shop-js/modules/client.payment-terms_924ece13.en.esm.js");
await import("//store.cnn.com/cdn/shopifycloud/shop-js/modules/chunk.common_089ed268.esm.js");

  
</script>
<script>
  window.Shopify = window.Shopify || {};
  if (!window.Shopify.featureAssets) window.Shopify.featureAssets = {};
  window.Shopify.featureAssets['shop-js'] = {"pay-button":["modules/client.pay-button_fa7a4091.en.esm.js","modules/chunk.common_089ed268.esm.js"],"init-shop-email-lookup-coordinator":["modules/client.init-shop-email-lookup-coordinator_c4786d7f.en.esm.js","modules/chunk.common_089ed268.esm.js"],"init-customer-accounts":["modules/client.init-customer-accounts_b72e2e23.en.esm.js","modules/chunk.common_089ed268.esm.js"],"init-customer-accounts-sign-up":["modules/client.init-customer-accounts-sign-up_24bcc88f.en.esm.js","modules/chunk.common_089ed268.esm.js"],"init-shop-for-new-customer-accounts":["modules/client.init-shop-for-new-customer-accounts_d6ce5df6.en.esm.js","modules/chunk.common_089ed268.esm.js"],"shop-pay-payment-request":["modules/client.shop-pay-payment-request_44b42b1f.en.esm.js","modules/chunk.common_089ed268.esm.js","modules/chunk.shop-pay_24d0dbcb.esm.js"],"login-button":["modules/client.login-button_7c13706c.en.esm.js","modules/chunk.common_089ed268.esm.js"],"discount-app":["modules/client.discount-app_ca134bdb.en.esm.js","modules/chunk.common_089ed268.esm.js"],"payment-terms":["modules/client.payment-terms_924ece13.en.esm.js","modules/chunk.common_089ed268.esm.js"]};
</script>
<script>(function() {
  function asyncLoad() {
    var urls = ["\/\/swymv3free-01.azureedge.net\/code\/swym-shopify.js?shop=the-cnn-shop.myshopify.com","https:\/\/gdprcdn.b-cdn.net\/js\/gdpr_cookie_consent.min.js?shop=the-cnn-shop.myshopify.com","https:\/\/geolocation-recommendations.shopifyapps.com\/locale_bar\/script.js?shop=the-cnn-shop.myshopify.com","https:\/\/cdn.customily.com\/shopify\/static\/customily.shopify.script.js?shop=the-cnn-shop.myshopify.com"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  };
  if(window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();</script>
<script id="__st">var __st={"a":64138248410,"offset":-18000,"reqid":"68467d14-19bb-4472-87a4-649b26ec2e56","pageurl":"store.cnn.com\/?utm_source=cnn.com\u0026amp;utm_medium=referral\u0026amp;utm_campaign=navbar","u":"f55ace193365","p":"home"};</script>
<script>window.ShopifyPaypalV4VisibilityTracking = true;</script>
<script>!function(o){o.addEventListener("DOMContentLoaded",function(){window.Shopify=window.Shopify||{},window.Shopify.recaptchaV3=window.Shopify.recaptchaV3||{siteKey:"6LcCR2cUAAAAANS1Gpq_mDIJ2pQuJphsSQaUEuc9"};var t=['form[action*="/contact"] input[name="form_type"][value="contact"]','form[action*="/comments"] input[name="form_type"][value="new_comment"]','form[action*="/account"] input[name="form_type"][value="customer_login"]','form[action*="/account"] input[name="form_type"][value="recover_customer_password"]','form[action*="/account"] input[name="form_type"][value="create_customer"]','form[action*="/contact"] input[name="form_type"][value="customer"]'].join(",");function n(e){e=e.target;null==e||null!=(e=function e(t,n){if(null==t.parentElement)return null;if("FORM"!=t.parentElement.tagName)return e(t.parentElement,n);for(var o=t.parentElement.action,r=0;r<n.length;r++)if(-1!==o.indexOf(n[r]))return t.parentElement;return null}(e,["/contact","/comments","/account"]))&&null!=e.querySelector(t)&&((e=o.createElement("script")).setAttribute("src","https://cdn.shopify.com/shopifycloud/storefront-recaptcha-v3/v0.6/index.js"),o.body.appendChild(e),o.removeEventListener("focus",n,!0),o.removeEventListener("change",n,!0),o.removeEventListener("click",n,!0))}o.addEventListener("click",n,!0),o.addEventListener("change",n,!0),o.addEventListener("focus",n,!0)})}(document);</script>
<script integrity="sha256-h4dvokWvGcvRSqiG7VnGqoonxF0k3NeoHPLSMjUGIz4=" data-source-attribution="shopify.loadfeatures" defer="defer" src="//store.cnn.com/cdn/shopifycloud/shopify/assets/storefront/load_feature-87876fa245af19cbd14aa886ed59c6aa8a27c45d24dcd7a81cf2d2323506233e.js" crossorigin="anonymous"></script>
<script crossorigin="anonymous" defer="defer" src="//store.cnn.com/cdn/shopifycloud/shopify/assets/shopify_pay/storefront-a2d444786d996da5634fbbaeeffe6104ee672440dfa6cdcaebfb27dceaaf9c0f.js?v=20220906"></script>
<script integrity="sha256-HAs5a9TQVLlKuuHrahvWuke+s1UlxXohfHeoYv8G2D8=" data-source-attribution="shopify.dynamic-checkout" defer="defer" src="//store.cnn.com/cdn/shopifycloud/shopify/assets/storefront/features-1c0b396bd4d054b94abae1eb6a1bd6ba47beb35525c57a217c77a862ff06d83f.js" crossorigin="anonymous"></script>
<script id="sections-script" data-sections="featured-product,header,footer" defer="defer" src="//store.cnn.com/cdn/shop/t/6/compiled_assets/scripts.js?5245"></script>

<style id="shopify-dynamic-checkout-cart">@media screen and (min-width: 750px) {
  #dynamic-checkout-cart {
    min-height: 50px;
  }
}

@media screen and (max-width: 750px) {
  #dynamic-checkout-cart {
    min-height: 240px;
  }
}
</style><script>window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.end');</script>


    <style data-shopify>
      @font-face {
  font-family: Assistant;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url("//store.cnn.com/cdn/fonts/assistant/assistant_n4.bcd3d09dcb631dec5544b8fb7b154ff234a44630.woff2?h1=dGhlLWNubi1zaG9wLmFjY291bnQubXlzaG9waWZ5LmNvbQ&h2=c3RvcmUuY25uLmNvbQ&hmac=544d14ecdcd83c31bbbe58e60d40fc3a06edc8f82f692d3c17f46350fababd26") format("woff2"),
       url("//store.cnn.com/cdn/fonts/assistant/assistant_n4.a2d012304becc2a26f1ded1acc136fcab85c9afd.woff?h1=dGhlLWNubi1zaG9wLmFjY291bnQubXlzaG9waWZ5LmNvbQ&h2=c3RvcmUuY25uLmNvbQ&hmac=3435c6d265f10059d3ccb5d598524f2ea83d43e5efb20902a574fd7d57dfc637") format("woff");
}

      @font-face {
  font-family: Assistant;
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url("//store.cnn.com/cdn/fonts/assistant/assistant_n7.3335c7bdaddf2501ddab87cdbd9be98f3870e10d.woff2?h1=dGhlLWNubi1zaG9wLmFjY291bnQubXlzaG9waWZ5LmNvbQ&h2=c3RvcmUuY25uLmNvbQ&hmac=3046069d471a2cdfff65be978f9b3ec091dfb2895c8c5503efd5047a9768029c") format("woff2"),
       url("//store.cnn.com/cdn/fonts/assistant/assistant_n7.7c85f5c5cc1555de92cc7ef2790ee3cffe5237f5.woff?h1=dGhlLWNubi1zaG9wLmFjY291bnQubXlzaG9waWZ5LmNvbQ&h2=c3RvcmUuY25uLmNvbQ&hmac=929f3841689329bd0a4709b18aad0e8af8dca1b11a4bab8edf7261ef0453e186") format("woff");
}

      
      
      @font-face {
  font-family: Assistant;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url("//store.cnn.com/cdn/fonts/assistant/assistant_n4.bcd3d09dcb631dec5544b8fb7b154ff234a44630.woff2?h1=dGhlLWNubi1zaG9wLmFjY291bnQubXlzaG9waWZ5LmNvbQ&h2=c3RvcmUuY25uLmNvbQ&hmac=544d14ecdcd83c31bbbe58e60d40fc3a06edc8f82f692d3c17f46350fababd26") format("woff2"),
       url("//store.cnn.com/cdn/fonts/assistant/assistant_n4.a2d012304becc2a26f1ded1acc136fcab85c9afd.woff?h1=dGhlLWNubi1zaG9wLmFjY291bnQubXlzaG9waWZ5LmNvbQ&h2=c3RvcmUuY25uLmNvbQ&hmac=3435c6d265f10059d3ccb5d598524f2ea83d43e5efb20902a574fd7d57dfc637") format("woff");
}


      :root {
        --font-body-family: Assistant, sans-serif;
        --font-body-style: normal;
        --font-body-weight: 400;

        --font-heading-family: Assistant, sans-serif;
        --font-heading-style: normal;
        --font-heading-weight: 400;

        --font-body-scale: 1.0;
        --font-heading-scale: 1.0;

        --color-base-text: 12, 12, 12;
        --color-base-background-1: 255, 255, 255;
        --color-base-background-2: 243, 243, 243;
        --color-base-solid-button-labels: 255, 255, 255;
        --color-base-outline-button-labels: 12, 12, 12;
        --color-base-accent-1: 204, 0, 0;
        --color-base-accent-2: 51, 79, 180;
        --payment-terms-background-color: #FFFFFF;

        --gradient-base-background-1: #FFFFFF;
        --gradient-base-background-2: #F3F3F3;
        --gradient-base-accent-1: #cc0000;
        --gradient-base-accent-2: #334FB4;

        --page-width: 160rem;
        --page-width-margin: 2rem;
      
         /*back to top*/
         --back-to-top-color: #000000;
         --back-to-top-arrow-color: #FFFFFF;
         --back-to-top-size: 48; 
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      html {
        box-sizing: border-box;
        font-size: calc(var(--font-body-scale) * 62.5%);
        height: 100%;
      }

      body {
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        grid-template-columns: 100%;
        min-height: 100%;
        margin: 0;
        font-size: 1.5rem;
        letter-spacing: 0.06rem;
        line-height: calc(1 + 0.8 / var(--font-body-scale));
        font-family: var(--font-body-family);
        font-style: var(--font-body-style);
        font-weight: var(--font-body-weight);
      }

      @media screen and (min-width: 750px) {
        body {
          font-size: 1.6rem;
        }
      }
    </style>

    
    <link href='//unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/@accessible360/accessible-slick@1.0.1/slick/slick.min.css">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/@accessible360/accessible-slick@1.0.1/slick/accessible-slick-theme.min.css">
    
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css">
    
    <link rel="stylesheet" tupe="text/css" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

    <link href="//store.cnn.com/cdn/shop/t/6/assets/base.css?v=117403258440513974331667402762" rel="stylesheet" type="text/css" media="all" />
    <link href="//store.cnn.com/cdn/shop/t/6/assets/quickview.scss.css?v=160532646976680862051667402762" rel="stylesheet" type="text/css" media="all" />
    <link href="//store.cnn.com/cdn/shop/t/6/assets/component-breadcrumbs.css?v=157272555159688880641667402762" rel="stylesheet" type="text/css" media="all" />
    <link href="//store.cnn.com/cdn/shop/t/6/assets/component-custom-product-card.css?v=117239070974118124921667402762" rel="stylesheet" type="text/css" media="all" />
    <link href="//store.cnn.com/cdn/shop/t/6/assets/avalanche.css?v=143631630917251145081667402762" rel="stylesheet" type="text/css" media="all" />
    <link href="//store.cnn.com/cdn/shop/t/6/assets/component-subscriber-products.css?v=176037406127524305161667402762" rel="stylesheet" type="text/css" media="all" />
    
    <link rel="preload" href="//store.cnn.com/cdn/shop/t/6/assets/custom.scss.css?v=176858482098774026061667402762" as="style">
    <link href="//store.cnn.com/cdn/shop/t/6/assets/custom.scss.css?v=176858482098774026061667402762" rel="stylesheet" type="text/css" media="all" />

    
<link rel="preload" as="font" href="//store.cnn.com/cdn/fonts/assistant/assistant_n4.bcd3d09dcb631dec5544b8fb7b154ff234a44630.woff2?h1=dGhlLWNubi1zaG9wLmFjY291bnQubXlzaG9waWZ5LmNvbQ&h2=c3RvcmUuY25uLmNvbQ&hmac=544d14ecdcd83c31bbbe58e60d40fc3a06edc8f82f692d3c17f46350fababd26" type="font/woff2" crossorigin><link rel="preload" as="font" href="//store.cnn.com/cdn/fonts/assistant/assistant_n4.bcd3d09dcb631dec5544b8fb7b154ff234a44630.woff2?h1=dGhlLWNubi1zaG9wLmFjY291bnQubXlzaG9waWZ5LmNvbQ&h2=c3RvcmUuY25uLmNvbQ&hmac=544d14ecdcd83c31bbbe58e60d40fc3a06edc8f82f692d3c17f46350fababd26" type="font/woff2" crossorigin><link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-predictive-search.css?v=168976209418810005411667402762" media="print" onload="this.media='all'"><script>document.documentElement.className = document.documentElement.className.replace('no-js', 'js');</script>

    
    
    
  <!-- BEGIN app block: shopify://apps/consentmo-gdpr/blocks/gdpr_cookie_consent/4fbe573f-a377-4fea-9801-3ee0858cae41 -->


<!-- END app app block --><!-- BEGIN app block: shopify://apps/klaviyo-email-marketing-sms/blocks/klaviyo-onsite-embed/2632fe16-c075-4321-a88b-50b567f42507 -->












  <script async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Vx2nZy"></script>
  <script>!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();</script>

  



<!-- END app app block --><script src="https://cdn.shopify.com/extensions/0b54151b-9184-4a5f-b9bc-fa5dd4fafae1/consentmo-gdpr-43/assets/consentmo_cookie_consent.js" type="text/javascript" defer="defer"></script>
<link href="https://monorail-edge.shopifysvc.com" rel="dns-prefetch">
<script>(function(){if ("sendBeacon" in navigator && "performance" in window) {var session_token = document.cookie.match(/_shopify_s=([^;]*)/);function handle_abandonment_event(e) {var entries = performance.getEntries().filter(function(entry) {return /monorail-edge.shopifysvc.com/.test(entry.name);});if (!window.abandonment_tracked && entries.length === 0) {window.abandonment_tracked = true;var currentMs = Date.now();var navigation_start = performance.timing.navigationStart;var payload = {shop_id: 64138248410,url: window.location.href,navigation_start,duration: currentMs - navigation_start,session_token: session_token && session_token.length === 2 ? session_token[1] : "",page_type: "index"};window.navigator.sendBeacon("https://monorail-edge.shopifysvc.com/v1/produce", JSON.stringify({schema_id: "online_store_buyer_site_abandonment/1.1",payload: payload,metadata: {event_created_at_ms: currentMs,event_sent_at_ms: currentMs}}));}}window.addEventListener('pagehide', handle_abandonment_event);}}());</script>
<script id="web-pixels-manager-setup">(function e(e,n,a,t,o,r,i){var s=null!==e,l=("function"==typeof BigInt&&BigInt.toString().indexOf("[native code]")?"modern":"legacy").substring(0,1),c=t.substring(0,1);if(s){window.Shopify=window.Shopify||{};var d=window.Shopify;d.analytics=d.analytics||{};var u=d.analytics;u.replayQueue=[],u.publish=function(e,n,a){u.replayQueue.push([e,n,a])};try{self.performance.mark("wpm:start")}catch(e){}}var p,f,y,h,v,m,w,g,b,_=[a,"/wpm","/",c,r,l,".js"].join("");f=(p={src:_,async:!0,onload:function(){if(e){var a=window.webPixelsManager.init(e);null==n||n(a);var t=window.Shopify.analytics;t.replayQueue.forEach((function(e){var n=e[0],t=e[1],o=e[2];a.publishCustomEvent(n,t,o)})),t.replayQueue=[],t.publish=a.publishCustomEvent,t.visitor=a.visitor}},onerror:function(){var n=(null==e?void 0:e.storefrontBaseUrl)?e.storefrontBaseUrl.replace(/\/$/,""):self.location.origin,a="".concat(n,"/.well-known/shopify/monorail/unstable/produce_batch"),t=JSON.stringify({metadata:{event_sent_at_ms:(new Date).getTime()},events:[{schema_id:"web_pixels_manager_load/2.0",payload:{version:o||"latest",page_url:self.location.href,status:"failed",error_msg:"".concat(_," has failed to load")},metadata:{event_created_at_ms:(new Date).getTime()}}]});try{if(self.navigator.sendBeacon.bind(self.navigator)(a,t))return!0}catch(e){}var r=new XMLHttpRequest;try{return r.open("POST",a,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(t),!0}catch(e){console&&console.warn&&console.warn("[Web Pixels Manager] Got an unhandled error while logging a load error.")}return!1}}).src,y=p.async,h=void 0===y||y,v=p.onload,m=p.onerror,w=document.createElement("script"),g=document.head,b=document.body,w.async=h,w.src=f,v&&w.addEventListener("load",v),m&&w.addEventListener("error",m),g?g.appendChild(w):b?b.appendChild(w):console.error("Did not find a head or body element to append the script")})({shopId: 64138248410,storefrontBaseUrl: "https://store.cnn.com",cdnBaseUrl: "https://store.cnn.com/cdn",surface: "storefront-renderer",enabledBetaFlags: ["web_pixels_async_pixel_refactor","web_pixels_manager_performance_improvement"],webPixelsConfigList: [{"id":"shopify-app-pixel","configuration":"{}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"0570","apiClientId":"shopify-pixel","type":"APP"},{"id":"shopify-custom-pixel","eventPayloadVersion":"v1","runtimeContext":"LAX","scriptVersion":"0570","apiClientId":"shopify-pixel","type":"CUSTOM"}],initData: {"cart":null,"checkout":null,"customer":null,"productVariants":[]},},function pageEvents(webPixelsManagerAPI) {webPixelsManagerAPI.publish("page_viewed");},"https://store.cnn.com/cdn","browser","0.0.415","08d9d536wbc499b5ep9e0ec6b9m18e2802a",["web_pixels_async_pixel_refactor","web_pixels_manager_performance_improvement"]);</script>  <script>window.ShopifyAnalytics = window.ShopifyAnalytics || {};
window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
window.ShopifyAnalytics.meta.currency = 'USD';
var meta = {"page":{"pageType":"home"}};
for (var attr in meta) {
  window.ShopifyAnalytics.meta[attr] = meta[attr];
}</script>
<script>window.ShopifyAnalytics.merchantGoogleAnalytics = function() {
  
};
</script>
<script class="analytics">(window.gaDevIds=window.gaDevIds||[]).push('BwiEti');


(function () {
    var customDocumentWrite = function(content) {
      var jquery = null;

      if (window.jQuery) {
        jquery = window.jQuery;
      } else if (window.Checkout && window.Checkout.$) {
        jquery = window.Checkout.$;
      }

      if (jquery) {
        jquery('body').append(content);
      }
    };

    var hasLoggedConversion = function(token) {
      if (token) {
        return document.cookie.indexOf('loggedConversion=' + token) !== -1;
      }
      return false;
    }

    var setCookieIfConversion = function(token) {
      if (token) {
        var twoMonthsFromNow = new Date(Date.now());
        twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

        document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
      }
    }

    var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
    if (trekkie.integrations) {
      return;
    }
    trekkie.methods = [
      'identify',
      'page',
      'ready',
      'track',
      'trackForm',
      'trackLink'
    ];
    trekkie.factory = function(method) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        trekkie.push(args);
        return trekkie;
      };
    };
    for (var i = 0; i < trekkie.methods.length; i++) {
      var key = trekkie.methods[i];
      trekkie[key] = trekkie.factory(key);
    }
    trekkie.load = function(config) {
      trekkie.config = config || {};
      trekkie.config.initialDocumentCookie = document.cookie;
      var first = document.getElementsByTagName('script')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.onerror = function(e) {
        var scriptFallback = document.createElement('script');
        scriptFallback.type = 'text/javascript';
        scriptFallback.onerror = function(error) {
                var Monorail = {
      produce: function produce(monorailDomain, schemaId, payload) {
        var currentMs = new Date().getTime();
        var event = {
          schema_id: schemaId,
          payload: payload,
          metadata: {
            event_created_at_ms: currentMs,
            event_sent_at_ms: currentMs
          }
        };
        return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
      },
      sendRequest: function sendRequest(endpointUrl, payload) {
        // Try the sendBeacon API
        if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
          var blobData = new window.Blob([payload], {
            type: 'text/plain'
          });

          if (window.navigator.sendBeacon(endpointUrl, blobData)) {
            return true;
          } // sendBeacon was not successful

        } // XHR beacon

        var xhr = new XMLHttpRequest();

        try {
          xhr.open('POST', endpointUrl);
          xhr.setRequestHeader('Content-Type', 'text/plain');
          xhr.send(payload);
        } catch (e) {
          console.log(e);
        }

        return false;
      },
      isIos12: function isIos12() {
        return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
      }
    };
    Monorail.produce('monorail-edge.shopifysvc.com',
      'trekkie_storefront_load_errors/1.1',
      {shop_id: 64138248410,
      theme_id: 136537964762,
      app_name: "storefront",
      context_url: window.location.href,
      source_url: "//store.cnn.com/cdn/s/trekkie.storefront.f2da2901761ed691d459433ada0e4d90e085713c.min.js"});

        };
        scriptFallback.async = true;
        scriptFallback.src = '//store.cnn.com/cdn/s/trekkie.storefront.f2da2901761ed691d459433ada0e4d90e085713c.min.js';
        first.parentNode.insertBefore(scriptFallback, first);
      };
      script.async = true;
      script.src = '//store.cnn.com/cdn/s/trekkie.storefront.f2da2901761ed691d459433ada0e4d90e085713c.min.js';
      first.parentNode.insertBefore(script, first);
    };
    trekkie.load(
      {"Trekkie":{"appName":"storefront","development":false,"defaultAttributes":{"shopId":64138248410,"isMerchantRequest":null,"themeId":136537964762,"themeCityHash":"5092625904932378090","contentLanguage":"en","currency":"USD"},"isServerSideCookieWritingEnabled":true,"monorailRegion":"shop_domain"},"Google Analytics":{"trackingId":"UA-193986510-3","domain":"auto","siteSpeedSampleRate":"10","enhancedEcommerce":true,"doubleClick":true,"includeSearch":true},"Facebook Pixel":{"pixelIds":["635077690884320"],"agent":"plshopify1.2"},"Google Gtag Pixel":{"conversionId":"G-BV59LELM9M","eventLabels":[{"type":"begin_checkout","action_label":"G-BV59LELM9M"},{"type":"search","action_label":"G-BV59LELM9M"},{"type":"view_item","action_label":["G-BV59LELM9M","MC-MG2P21R9NY"]},{"type":"purchase","action_label":["G-BV59LELM9M","MC-MG2P21R9NY"]},{"type":"page_view","action_label":["G-BV59LELM9M","MC-MG2P21R9NY"]},{"type":"add_payment_info","action_label":"G-BV59LELM9M"},{"type":"add_to_cart","action_label":"G-BV59LELM9M"}],"targetCountry":"US"},"Session Attribution":{},"S2S":{"facebookCapiEnabled":true,"facebookAppPixelId":"635077690884320","source":"trekkie-storefront-renderer"}}
    );

    var loaded = false;
    trekkie.ready(function() {
      if (loaded) return;
      loaded = true;

      window.ShopifyAnalytics.lib = window.trekkie;

        ga('require', 'linker');
      function addListener(element, type, callback) {
        if (element.addEventListener) {
          element.addEventListener(type, callback);
        }
        else if (element.attachEvent) {
          element.attachEvent('on' + type, callback);
        }
      }
      function decorate(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        if (target && (target.getAttribute('action') || target.getAttribute('href'))) {
          ga(function (tracker) {
            var linkerParam = tracker.get('linkerParam');
            document.cookie = '_shopify_ga=' + linkerParam + '; ' + 'path=/';
          });
        }
      }
      addListener(window, 'load', function(){
        for (var i=0; i < document.forms.length; i++) {
          var action = document.forms[i].getAttribute('action');
          if(action && action.indexOf('/cart') >= 0) {
            addListener(document.forms[i], 'submit', decorate);
          }
        }
        for (var i=0; i < document.links.length; i++) {
          var href = document.links[i].getAttribute('href');
          if(href && href.indexOf('/checkout') >= 0) {
            addListener(document.links[i], 'click', decorate);
          }
        }
      });
    

      var originalDocumentWrite = document.write;
      document.write = customDocumentWrite;
      try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
      document.write = originalDocumentWrite;

      window.ShopifyAnalytics.lib.page(null,{"pageType":"home"});

      var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
      var token = match? match[1]: undefined;
      if (!hasLoggedConversion(token)) {
        setCookieIfConversion(token);
        
      }
    });


        var eventsListenerScript = document.createElement('script');
        eventsListenerScript.async = true;
        eventsListenerScript.src = "//store.cnn.com/cdn/shopifycloud/shopify/assets/shop_events_listener-a7c63dba65ccddc484f77541dc8ca437e60e1e9e297fe1c3faebf6523a0ede9b.js";
        document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);

})();</script>
<script class="boomerang">
(function () {
  if (window.BOOMR && (window.BOOMR.version || window.BOOMR.snippetExecuted)) {
    return;
  }
  window.BOOMR = window.BOOMR || {};
  window.BOOMR.snippetStart = new Date().getTime();
  window.BOOMR.snippetExecuted = true;
  window.BOOMR.snippetVersion = 12;
  window.BOOMR.application = "storefront-renderer";
  window.BOOMR.themeName = "Dawn";
  window.BOOMR.themeVersion = "2.4.0";
  window.BOOMR.shopId = 64138248410;
  window.BOOMR.themeId = 136537964762;
  window.BOOMR.renderRegion = "gcp-europe-west1";
  window.BOOMR.url =
    "https://store.cnn.com/cdn/shopifycloud/boomerang/shopify-boomerang-1.0.0.min.js";
  var where = document.currentScript || document.getElementsByTagName("script")[0];
  var parentNode = where.parentNode;
  var promoted = false;
  var LOADER_TIMEOUT = 3000;
  function promote() {
    if (promoted) {
      return;
    }
    var script = document.createElement("script");
    script.id = "boomr-scr-as";
    script.src = window.BOOMR.url;
    script.async = true;
    parentNode.appendChild(script);
    promoted = true;
  }
  function iframeLoader(wasFallback) {
    promoted = true;
    var dom, bootstrap, iframe, iframeStyle;
    var doc = document;
    var win = window;
    window.BOOMR.snippetMethod = wasFallback ? "if" : "i";
    bootstrap = function(parent, scriptId) {
      var script = doc.createElement("script");
      script.id = scriptId || "boomr-if-as";
      script.src = window.BOOMR.url;
      BOOMR_lstart = new Date().getTime();
      parent = parent || doc.body;
      parent.appendChild(script);
    };
    if (!window.addEventListener && window.attachEvent && navigator.userAgent.match(/MSIE [67]./)) {
      window.BOOMR.snippetMethod = "s";
      bootstrap(parentNode, "boomr-async");
      return;
    }
    iframe = document.createElement("IFRAME");
    iframe.src = "about:blank";
    iframe.title = "";
    iframe.role = "presentation";
    iframe.loading = "eager";
    iframeStyle = (iframe.frameElement || iframe).style;
    iframeStyle.width = 0;
    iframeStyle.height = 0;
    iframeStyle.border = 0;
    iframeStyle.display = "none";
    parentNode.appendChild(iframe);
    try {
      win = iframe.contentWindow;
      doc = win.document.open();
    } catch (e) {
      dom = document.domain;
      iframe.src = "javascript:var d=document.open();d.domain='" + dom + "';void(0);";
      win = iframe.contentWindow;
      doc = win.document.open();
    }
    if (dom) {
      doc._boomrl = function() {
        this.domain = dom;
        bootstrap();
      };
      doc.write("<body onload='document._boomrl();'>");
    } else {
      win._boomrl = function() {
        bootstrap();
      };
      if (win.addEventListener) {
        win.addEventListener("load", win._boomrl, false);
      } else if (win.attachEvent) {
        win.attachEvent("onload", win._boomrl);
      }
    }
    doc.close();
  }
  var link = document.createElement("link");
  if (link.relList &&
    typeof link.relList.supports === "function" &&
    link.relList.supports("preload") &&
    ("as" in link)) {
    window.BOOMR.snippetMethod = "p";
    link.href = window.BOOMR.url;
    link.rel = "preload";
    link.as = "script";
    link.addEventListener("load", promote);
    link.addEventListener("error", function() {
      iframeLoader(true);
    });
    setTimeout(function() {
      if (!promoted) {
        iframeLoader(true);
      }
    }, LOADER_TIMEOUT);
    BOOMR_lstart = new Date().getTime();
    parentNode.appendChild(link);
  } else {
    iframeLoader(false);
  }
  function boomerangSaveLoadTime(e) {
    window.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
  }
  if (window.addEventListener) {
    window.addEventListener("load", boomerangSaveLoadTime, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", boomerangSaveLoadTime);
  }
  if (document.addEventListener) {
    document.addEventListener("onBoomerangLoaded", function(e) {
      e.detail.BOOMR.init({
        ResourceTiming: {
          enabled: true,
          trackedResourceTypes: ["script", "img", "css"]
        },
      });
      e.detail.BOOMR.t_end = new Date().getTime();
    });
  } else if (document.attachEvent) {
    document.attachEvent("onpropertychange", function(e) {
      if (!e) e=event;
      if (e.propertyName === "onBoomerangLoaded") {
        e.detail.BOOMR.init({
          ResourceTiming: {
            enabled: true,
            trackedResourceTypes: ["script", "img", "css"]
          },
        });
        e.detail.BOOMR.t_end = new Date().getTime();
      }
    });
  }
})();</script>
</head>
  <body id="" class="   template-index">

    <div id="shopify-section-newsletter-popout" class="shopify-section"><script src="//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>

    
    </div>

    

    

    

    

    
    <!-- Facebook Pixels (noscript) -->
      <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=338304415184650&ev=PageView&noscript=1"
      /></noscript>
    
      <!-- End Facebook Pixels (noscript) -->

    <a class="skip-to-content-link button visually-hidden" href="#MainContent">
      Skip to content
    </a>

    

    
    
    
      <div class="cart-drawer-overlay"></div>
      <div id="shopify-section-cart-drawer" class="shopify-section"><link href="//store.cnn.com/cdn/shop/t/6/assets/component-cart-drawer.css?v=125837108969127720361667402762" rel="stylesheet" type="text/css" media="all" />
<button class="cart-close-button" type="button" aria-label="Close Cart Drawer"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" fill="none" viewBox="0 0 18 17">
  <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
</svg></button>
<form action="/cart" method="post" class="my-cart">
  <div class="cart-container" data-ajax-cart-section>
    
      <div class="loader-block">
        <div class="loader"></div>
      </div>
    
    <div class="cart-header">
      <div class="cart-inner-container">
        <h2><a href="/cart">Cart</a></h2>
      </div>
    </div>
    
      <div class="cart-empty-message">
        
        <div class="cart-empty-message-container">
        
        <p>Your Cart is empty</p>
        
        </div>
        </div>
    
  </div>
</form>

<script type="application/json" data-ajax-cart-initial-state >{"note":null,"attributes":{},"original_total_price":0,"total_price":0,"total_discount":0,"total_weight":0.0,"item_count":0,"items":[],"requires_shipping":false,"currency":"USD","items_subtotal_price":0,"cart_level_discount_applications":[],"checkout_charge_amount":0}</script>
<script type="module">import '//store.cnn.com/cdn/shop/t/6/assets/liquid-ajax-cart-v1.7.0.js?v=177494188756977918421667402762';</script>

<style data-shopify>

.cart-drawer-overlay{background:#000000; opacity:0.30;}
.my-cart{background:#ffffff;}
.my-cart .cart-header{background:#ffffff; height: 70px;}
.my-cart .cart-header h2 a{color:#0c0c0c;}
.my-cart .cart-item{border-bottom:1px solid #ffffff;}
.my-cart .cart-item-content a, .my-cart .cart-item-content p{color:#333333;}
.my-cart .cart-item-quantity input[type=number]{background:#ffffff; color:#333333;}
.my-cart .cart-item-quantity a{background:#ffffff;}
.my-cart .cart-item-quantity a svg{stroke:#333333; fill:#333333;}
.my-cart .cart-item-content .cart-remove {color:#333333;}
.my-cart .cart-footer{background:#ffffff;}
.my-cart .cart-footer-total{color:#0c0c0c;}
.my-cart .cart-footer .button{border: 1px solid #cc0000; background:#cc0000; color:#ffffff;}
.my-cart .cart-footer .button.cart-drawer-view-cart{border: 1px solid #cc0000; background:#cc0000; color:#ffffff;}
.cart-close-button{background:#333333; top: 15px;}
.cart-close-button svg path{fill:#ffffff; stroke:#ffffff;}
.my-cart .loader{border: 5px solid #333333; border-top: 5px solid #cccccc;}
.my-cart .loading-bar > span {background-color: #333333;}
.my-cart .cart-footer{padding:0 0 5px 0;}
.my-cart .cart-footer-free-shipping{background:#ffffff;}
.my-cart .cart-footer-coupon{background:#ffffff;}
.my-cart .cart-footer-free-shipping progress::-webkit-progress-value{background:#2481be;}
.my-cart .cart-footer-free-shipping p, .my-cart .cart-footer-coupon p{color:#0c0c0c; fill:#0c0c0c;}
.my-cart .cart-footer .cart-footer-button-container {display: flex; flex-flow: column wrap;}
.my-cart .cart-header h2 a {justify-content: flex-start;}
.my-cart .icon-discount {color: #000000;}
.my-cart .cart-item-variant, .my-cart .cart-item-properties, .my-cart .discounts__discount {
  font-size: 1.4rem;
}
.my-cart .discounts__discount {
  font-size: 1.2rem;
}

.cart-empty-message .cart-empty-image {
    width: 75%;
}
.cart-empty-message a {
color: #000000;
}


@media screen and (min-width: 750px) {
  .my-cart .cart-footer .cart-footer-button-container {display: flex; flex-flow: row nowrap;}
  
  .my-cart .cart-footer .cart-footer-button-container {gap: 10px;}
  .my-cart .cart-footer .cart-footer-button-container .button {flex-basis: 50%;}
  
  .my-cart {
    width: 450px;
  }
  .my-cart .cart-item-variant, .my-cart .cart-item-properties {
  font-size: 1.4rem;
}
.my-cart .discounts__discount {
  font-size: 1.2rem;
}
}
</style>

<script>
jQuery(document).ready(function ($){
  function cartDrawer(){
    
    $('.product-form__submit, .header__icon--cart').click(function(event){
      if ($(event.currentTarget).hasClass("header__icon--cart")) {
        event.preventDefault();
      }
        $('.cart-drawer-overlay').fadeIn();
        $('#shopify-section-cart-drawer .my-cart, .cart-close-button').show("slide", { direction: "right" }, 500);
        window.postMessage({ type: 'cart_drawer', action: "open"}, '*');
    });

    $('.cart-drawer-overlay, .cart-close-button').click(function(){
        $('.cart-drawer-overlay').fadeOut(1000);
        $('#shopify-section-cart-drawer .my-cart, .cart-close-button').hide("slide", { direction: "right" }, 500);
        window.postMessage({ type: 'cart_drawer', action: "close"}, '*');
    });
  }
  cartDrawer();
  
  if (Shopify.designMode){
    document.addEventListener('shopify:section:load', function(){
      if(event.detail.sectionId === 'cart-drawer') {
        $('.cart-drawer-overlay, #shopify-section-cart-drawer .my-cart, .cart-close-button').css('display', 'block');
      }
    });
    document.addEventListener('shopify:section:select', function(){
      if(event.detail.sectionId === 'cart-drawer') {
        $('.cart-drawer-overlay').fadeIn();
        $('#shopify-section-cart-drawer .my-cart, .cart-close-button').show("slide", { direction: "right" }, 500);
      }
    });
    document.addEventListener('shopify:section:deselect', function(){
      if(event.detail.sectionId === 'cart-drawer') {
        $('.cart-drawer-overlay').fadeOut(1000);
        $('#shopify-section-cart-drawer .my-cart, .cart-close-button').hide("slide", { direction: "right" }, 500);
      }
    });
  }

});
</script>

</div>
    

    

        <div id="shopify-section-universal-header" class="shopify-section">

</div>
      
    <div id="shopify-section-snow-announcement-bar" class="shopify-section"><link href="//store.cnn.com/cdn/shop/t/6/assets/component-announcement-bar.css?v=1818648346312004461667402762" rel="stylesheet" type="text/css" media="all" />
<div id="snow-announcement-bar" class="snow-announcements" style="background:#cccccc; margin-bottom:0 !important;">
    
    
        <div class="snow-announcement-snow-announcement-bar-0 snow-announcement-slide"  data-index="0">
            <div class="page-width">
                <div class="snow-announcement-container">
                    <div class="snow-announcement-richtext-container">
                        <p><a href="#newsletter-banner-newsletter-banner" title="#newsletter-banner-newsletter-banner">Sign up for our newsletter and SAVE 15%!</a></p>
                    </div>
                    
                    
                </div>
                <style data-shopify>
                  .snow-announcement-snow-announcement-bar-0{
                    padding:5px 0;
                    
                      background:#cc0000;
                    
                  }

                  
                  .snow-announcement-snow-announcement-bar-0 .snow-announcement-richtext-container {
                    width: 100%;
                  }
                  
                    .snow-announcement-snow-announcement-bar-0 .snow-announcement-container p{
                        text-align:center;
                    }
                    .snow-announcement-snow-announcement-bar-0 .snow-announcement-container p,
                    .snow-announcement-snow-announcement-bar-0 .snow-announcement-container-scrolling p span{
                        font-size:14px;
                        color:#ffffff;
                    }
                    .snow-announcement-snow-announcement-bar-0 .snow-announcement-container p a,
                    .snow-announcement-snow-announcement-bar-0 .snow-announcement-container-scrolling p span a{
                        color:#ffffff;
                    }
                    @keyframes marquee {
                        0%{left:100%;}
                        100%{left:-20%;}
                    }
                    .snow-announcement-snow-announcement-bar-0 #timer div{
                        font-size:14px;
                        color:#333333;
                    }
                    .snow-announcement-snow-announcement-bar-0 #timer div span{
                        font-size:14px;
                        font-weight:500;
                        color:#000000;
                    }
                    
                        .snow-announcement-snow-announcement-bar-0 #timer #days span:before{content: 'Days';}
                        .snow-announcement-snow-announcement-bar-0 #timer #hours span:before{content: 'Hours';}
                        .snow-announcement-snow-announcement-bar-0 #timer #minutes span:before{content: 'Minutes';}
                        .snow-announcement-snow-announcement-bar-0 #timer #seconds span:before{content: 'Seconds';}
                    
                    @media screen and (max-width:768px){
                      .snow-announcement-snow-announcement-bar-0 .snow-announcement-container p,
                      .snow-announcement-snow-announcement-bar-0 .snow-announcement-container span,
                      .snow-announcement-snow-announcement-bar-0 .snow-announcement-container-scrolling p,
                      .snow-announcement-snow-announcement-bar-0 .snow-announcement-container-scrolling p span,
                      .snow-announcement-snow-announcement-bar-0 #timer div, .snow-announcement-snow-announcement-bar-0 #timer div span{font-size:14px;}
                    }
                </style>
            </div>
        </div>
        
    
    
  </div>
  
  <style data-shopify>
  #shopify-section-snow-announcement-bar .carousel-arrow-container {
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
    height: 0;
  }
  
  .carousel-prev-snow-announcement-bar {
    left: -1rem;
  }
  .carousel-next-snow-announcement-bar {
    right: -1rem;
  }
  @media screen and (min-width: 768px) {
    #shopify-section-snow-announcement-bar .carousel-arrow-container {
        max-width: var(--page-width);
        width: 100%

    }
    .carousel-prev-snow-announcement-bar {
        left: 1rem;
    }
    .carousel-next-snow-announcement-bar {
    right: 1rem;
  }
  }
  .carousel-prev-snow-announcement-bar, .carousel-next-snow-announcement-bar {
    top: 50%;
    transform: translateY(-50%);
  }
  
  



  
  </style>
  
  <script>
  jQuery(document).ready(function ($){
  
      function announcementSlider(){
            
          $('.snow-announcements').slick({
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              
              prevArrow: $(".carousel-prev-snow-announcement-bar"),
              nextArrow: $(".carousel-next-snow-announcement-bar"),
              
              dots: false,
              autoplay: false,
              autoplaySpeed: 6000,
              adaptiveHeight: true,
              fade: true,
              cssEase: 'linear',
              speed: 300,
              pauseOnHover: true
          });
          
          $(".snow-announcement-container-scrolling p").addClass("marquee").wrapInner( "<span></span>");
          
      }
      announcementSlider();
  
      // Rerun Scripts in Shopify Theme Editor
      if (Shopify.designMode){
          document.addEventListener('shopify:section:load', function(){
              if(event.detail.sectionId === 'snow-announcement-bar') {
                  announcementSlider();
                  makeTimer();
              }
          });
          document.addEventListener('shopify:section:select', function(){
              if(event.detail.sectionId === 'snow-announcement-bar') {
                  
              }
          });
          document.addEventListener('shopify:section:deselect', function(){
              if(event.detail.sectionId === 'snow-announcement-bar') {
                  
              }
          });
          document.addEventListener('shopify:block:select', function(e){
              if(event.detail.sectionId === 'snow-announcement-bar') {
                 var slider = $('.snow-announcements');
                 var blockId = e.detail.blockId;
                 var slide_index = $('.snow-announcement-' + blockId).data('index');
                   slider.slick('slickGoTo', slide_index);                
              }
          });
          document.addEventListener('shopify:block:deselect', function(){
              if(event.detail.sectionId === 'snow-announcement-bar') {
                  
              }
          });
      }
  
  });
  </script>
  
  </div>
      


    <div id="shopify-section-header" class="shopify-section"><link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-list-menu.css?v=161614383810958508431667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-search.css?v=59655788007575949041667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-menu-drawer.css?v=105689953266484240101667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-cart-notification.css?v=460858370205038421667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-cart-items.css?v=157471800145148034221667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/navigation.css?v=126787724211078271701667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-navigation-style.css?v=33722824667368389461667402762" media="print" onload="this.media='all'"><link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-price.css?v=5328827735059554991667402762" media="print" onload="this.media='all'">
  <link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-loading-overlay.css?v=167310470843593579841667402762" media="print" onload="this.media='all'"><noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-list-menu.css?v=161614383810958508431667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-search.css?v=59655788007575949041667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-menu-drawer.css?v=105689953266484240101667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-cart-notification.css?v=460858370205038421667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-cart-items.css?v=157471800145148034221667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/navigation.css?v=126787724211078271701667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-navigation-style.css?v=33722824667368389461667402762" rel="stylesheet" type="text/css" media="all" /></noscript>

<style>
  
  .header, .header-wrapper{
      
  }
  
  .header .header__inline-menu{    
    
      text-align:left;
     
  }
  .header-mm-overlay{
    background:#000000;
    opacity:0.75;
  }
  
</style>

<script src="//store.cnn.com/cdn/shop/t/6/assets/details-disclosure.js?v=118626640824924522881667402762" defer="defer"></script>
<script src="//store.cnn.com/cdn/shop/t/6/assets/details-modal.js?v=4511761896672669691667402762" defer="defer"></script>


<svg xmlns="http://www.w3.org/2000/svg" class="hidden">
  <symbol id="icon-search" viewbox="0 0 18 19" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z" fill="currentColor"/>
  </symbol>

  <symbol id="icon-close" class="icon icon-close" fill="none" viewBox="0 0 18 17">
    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
  </symbol>
</svg>

<div class="header-wrapper color- gradient">
  <header class="header page-width header--has-menu mega-menu">

    <div class="header-container default">
      
        <div class="left-icons">
          <div class="header__icons split">
  

      <button class="header__icon header__icon--menu header__icon--summary link link--text focus-inset mobile left" aria-label="Menu">
        <svg width="19" height="17" viewbox="0 0 19 17" aria-hidden="true" focusable="false" role="presentation" class="icon icon-hamburger" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.24324 2.35464H17.1959C17.6461 2.35464 18.0109 1.9867 18.0109 1.5329C18.0109 1.07909 17.6461 0.711533 17.1959 0.711533H1.24324C0.793056 0.711533 0.428589 1.07909 0.428589 1.5329C0.428589 1.9867 0.793056 2.35464 1.24324 2.35464ZM17.196 7.86554H1.24335C0.793165 7.86554 0.428699 8.23348 0.428699 8.68729C0.428699 9.14109 0.793165 9.50865 1.24335 9.50865H17.196C17.6462 9.50865 18.011 9.14109 18.011 8.68729C18.011 8.23348 17.6462 7.86554 17.196 7.86554ZM1.24335 15.0197H17.196C17.6462 15.0197 18.011 15.3876 18.011 15.8414C18.011 16.2952 17.6462 16.6628 17.196 16.6628H1.24335C0.793165 16.6628 0.428699 16.2952 0.428699 15.8414C0.428699 15.3876 0.793165 15.0197 1.24335 15.0197Z" fill="currentColor"></path>
</svg>
        <svg class="icon icon-close" aria-hidden="true" focusable="false" role="presentation"> <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor"> </path> </use></svg>
      </button>
    




</div>
        </div>
      

      


<h1 class="h1 header__heading">

       
        <a href="/" class="header__heading-link link link--text focus-inset"><img srcset="//store.cnn.com/cdn/shop/files/cnn_logo_2x_857fe5c4-a072-490c-82dd-7d8b1b53dcfd_110x.png?v=1654787945 1x, //store.cnn.com/cdn/shop/files/cnn_logo_2x_857fe5c4-a072-490c-82dd-7d8b1b53dcfd_110x@2x.png?v=1654787945 2x"
              src="//store.cnn.com/cdn/shop/files/cnn_logo_2x_857fe5c4-a072-490c-82dd-7d8b1b53dcfd_110x.png?v=1654787945"
              loading="lazy"
              class="header__heading-logo"
              width="204"
              height="104"
              alt="CNN Store"
            ></a>
      
    
      </h1>
    


<style data-shopify>

@media screen and (max-width:750px){
  .header__heading{text-align:center;}
}
</style>

      
        
          
            <nav class="header__inline-menu left">
    <ul class="list-menu parent list-menu--inline mega-menu" role="list"><li class="mega-menu-item"><a href="/collections/cnn" class="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
              <span>CNN <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span>
            </a>
            <ul class="header__submenu list-menu" role="list" tabindex="-1">
              <div class="page-width">
              
                
                  
                
              
              </div>
              
            </ul></li><li class="mega-menu-item"><a href="/pages/shop-by-show" class="header__menu-item header__menu-item list-menu__item link link--text focus-inset"> 
                <span class="mega-menu-span">Shop By Collection <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span>
              </a>
                <ul class="header__submenu child list-menu" role="list" tabindex="-1">
                  <div class="page-width"><li class="shows-container">
                      
                      
                      <a class="child-link" href="/pages/shop-by-show"> 
                        <span>Shows</span>
                      </a>
                      
                        <ul class="header__submenu grand-child list-menu"><li class="link-anderson-cooper-360">
                              
                              
                              <a class="grand-child-link" href="/collections/official-anderson-cooper-360-collection">
                                <span>Anderson Cooper 360</span>
                              </a>
                              
                            </li><li class="link-the-situation-room-with-wolf-blitzer">
                              
                              
                              <a class="grand-child-link" href="/collections/the-official-situation-room-with-wolf-blitzer-collection">
                                <span>The Situation Room with Wolf Blitzer</span>
                              </a>
                              
                            </li><li class="link-the-lead-with-jake-tapper">
                              
                              
                              <a class="grand-child-link" href="/collections/the-lead-with-jake-tapper">
                                <span>The Lead with Jake Tapper</span>
                              </a>
                              
                            </li></ul>
                    </li>
                    
                      
                        
                        
                          <li class="mega-menu-block mega-menu-block-one-2434e583-f948-4801-ae53-0e3970aaa375" >
                            <a href="/collections/official-anderson-cooper-360-collection">
                              <img src="//store.cnn.com/cdn/shop/files/Anderson_Cooper_Show_Tile_2_1_1.png?v=1666110619" alt="mega-menu-image-2435">
                              
                              
                            </a>
                          </li>
                        

                        
                          <li class="mega-menu-block mega-menu-block-two-2434e583-f948-4801-ae53-0e3970aaa375" >
                            <a href="/collections/the-official-situation-room-with-wolf-blitzer-collection">
                              <img src="//store.cnn.com/cdn/shop/files/Situation_Room_Show_Tile_2.png?v=1677865782" alt="mega-menu-image-2436">
                              
                              
                            </a>
                          </li>
                        

                        
                          <li class="mega-menu-block mega-menu-block-three-2434e583-f948-4801-ae53-0e3970aaa375" >
                            <a href="/collections/the-lead-with-jake-tapper">
                              <img src="//store.cnn.com/cdn/shop/files/The_Lead_Show_Tile_1.png?v=1677865920" alt="mega-menu-image-2437">
                              
                              
                            </a>
                          </li>
                        

                        

                        

                        

                      
                    
                  
                  </div>
                  
                </ul></li><li class="mega-menu-item"><a href="#" class="header__menu-item header__menu-item list-menu__item link link--text focus-inset"> 
                <span class="mega-menu-span">Shop By Product <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span>
              </a>
                <ul class="header__submenu child list-menu" role="list" tabindex="-1">
                  <div class="page-width"><li class="clothing-container">
                      
                      
                      <a class="child-link" href="/collections/clothing"> 
                        <span>Clothing</span>
                      </a>
                      
                        <ul class="header__submenu grand-child list-menu"><li class="link-t-shirts">
                              
                              
                              <a class="grand-child-link" href="/collections/t-shirts">
                                <span>T-Shirts</span>
                              </a>
                              
                            </li><li class="link-hoodies-sweatshirts">
                              
                              
                              <a class="grand-child-link" href="/collections/hoodies-sweatshirts">
                                <span>Hoodies &amp; Sweatshirts</span>
                              </a>
                              
                            </li><li class="link-shop-all">
                              
                              
                              <a class="grand-child-link" href="/collections/clothing">
                                <span>Shop All</span>
                              </a>
                              
                            </li></ul>
                    </li><li class="drinkware-container">
                      
                      
                      <a class="child-link" href="/collections/drinkware"> 
                        <span>Drinkware</span>
                      </a>
                      
                        <ul class="header__submenu grand-child list-menu"><li class="link-coffee-mugs">
                              
                              
                              <a class="grand-child-link" href="/collections/coffee-mugs">
                                <span>Coffee Mugs</span>
                              </a>
                              
                            </li><li class="link-tumblers">
                              
                              
                              <a class="grand-child-link" href="/collections/tumblers">
                                <span>Tumblers</span>
                              </a>
                              
                            </li><li class="link-shop-all">
                              
                              
                              <a class="grand-child-link" href="/collections/drinkware">
                                <span>Shop All</span>
                              </a>
                              
                            </li></ul>
                    </li><li class="accessories-container">
                      
                      
                      <a class="child-link" href="/collections/accessories"> 
                        <span>Accessories</span>
                      </a>
                      
                        <ul class="header__submenu grand-child list-menu"><li class="link-tote-bags">
                              
                              
                              <a class="grand-child-link" href="/collections/tote-bags">
                                <span>Tote Bags</span>
                              </a>
                              
                            </li><li class="link-hats">
                              
                              
                              <a class="grand-child-link" href="/collections/hats">
                                <span>Hats</span>
                              </a>
                              
                            </li><li class="link-shop-all">
                              
                              
                              <a class="grand-child-link" href="/collections/accessories">
                                <span>Shop All</span>
                              </a>
                              
                            </li></ul>
                    </li><li class="home-&-office-container">
                      
                      
                      <a class="child-link" href="/collections/home-office"> 
                        <span>Home &amp; Office</span>
                      </a>
                      
                        <ul class="header__submenu grand-child list-menu"><li class="link-blankets">
                              
                              
                              <a class="grand-child-link" href="/collections/blankets">
                                <span>Blankets</span>
                              </a>
                              
                            </li><li class="link-mouse-pads">
                              
                              
                              <a class="grand-child-link" href="/collections/mouse-pads">
                                <span>Mouse Pads</span>
                              </a>
                              
                            </li><li class="link-shop-all">
                              
                              
                              <a class="grand-child-link" href="/collections/home-office">
                                <span>Shop All</span>
                              </a>
                              
                            </li></ul>
                    </li>
                    
                      
                    
                  
                  </div>
                  
                </ul></li><li class="mega-menu-item"><a href="/collections/all" class="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
              <span>Shop All <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span>
            </a>
            <ul class="header__submenu list-menu" role="list" tabindex="-1">
              <div class="page-width">
              
                
                  
                
              
              </div>
              
            </ul></li>
    </ul>
  </nav>
          
        
      

      
        <div class="right-icons">
          <div class="header__icons split">
  


  <summary class="header__icon header__icon--search header__icon--summary right" aria-haspopup="dialog" aria-label="Search">
    <span>
      <svg width="16" height="16" viewbox="0 0 16 16" class="modal__toggle-open icon icon-search" aria-hidden="true" focusable="false" role="presentation" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.83885 6.62465C1.83885 3.89878 4.03929 1.68093 6.74419 1.68093C9.44878 1.68093 11.6492 3.89878 11.6492 6.62465C11.6492 9.3502 9.44878 11.5681 6.74419 11.5681C4.03929 11.5681 1.83885 9.3502 1.83885 6.62465ZM15.3444 14.1955L11.4137 10.2342C12.176 9.23389 12.6303 7.98311 12.6303 6.62464C12.6303 3.34832 9.99491 0.692307 6.74419 0.692307C3.49316 0.692307 0.857788 3.34832 0.857788 6.62464C0.857788 9.90066 3.49316 12.5567 6.74419 12.5567C8.1164 12.5567 9.37803 12.0822 10.379 11.2887L14.3039 15.2444C14.5912 15.5339 15.0571 15.5339 15.3444 15.2444C15.6317 14.9545 15.6317 14.4853 15.3444 14.1955Z" fill="currentColor"></path>
</svg>
    </span>
  </summary>



  <a href="/account/login" class="header__icon header__icon--account link link--text focus-inset right desktop">
    <svg width="22" height="22" viewbox="0 0 19 18" class="icon icon-account" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.35109 16.0922C7.12 16.0922 5.11349 15.1264 3.73684 13.598C3.88204 13.2594 4.18976 12.9508 4.66086 12.6789C5.8161 12.0114 7.49065 11.6288 9.25468 11.6288C11.0103 11.6288 12.6797 12.0083 13.8344 12.6703C14.3782 12.9824 14.6983 13.3426 14.8083 13.7662C13.438 15.1967 11.4991 16.0922 9.35109 16.0922ZM10.6683 9.94005C8.042 11.2176 5.43795 8.64937 6.73319 6.05862C6.9696 5.58569 7.36363 5.19675 7.84339 4.96384C10.4688 3.68996 13.0694 6.25509 11.7779 8.84469C11.5418 9.31763 11.148 9.70657 10.6683 9.94005ZM12.1321 1.77032C14.1539 2.49667 15.7361 4.12104 16.4266 6.13123C17.2695 8.58588 16.8333 10.9574 15.6114 12.7714C15.3452 12.3565 14.9489 11.9924 14.4146 11.6857C13.6251 11.2333 12.6361 10.8987 11.5545 10.6997C12.7983 9.83954 13.5307 8.30599 13.1915 6.63833C12.8647 5.03246 11.5854 3.81724 9.94805 3.54561C7.42714 3.12734 5.2353 5.04214 5.2353 7.45266C5.2353 8.79515 5.91684 9.98162 6.95459 10.6994C5.86517 10.8999 4.87014 11.2378 4.07718 11.696C3.6133 11.9639 3.25217 12.272 2.9892 12.6154C2.26176 11.4747 1.83974 10.1271 1.83974 8.68325C1.83974 3.71075 6.83162 -0.13366 12.1321 1.77032ZM12.2288 0.601795C5.26417 -1.63646 -1.11071 4.65035 1.15762 11.5203C1.97483 13.9957 3.96431 15.9578 6.47339 16.7644C13.438 19.0027 19.8129 12.7159 17.5446 5.84593C16.7274 3.3705 14.7379 1.40843 12.2288 0.601795Z" fill="#0C0C0C"></path>
</svg>
    <span class="visually-hidden">Log in</span>
  </a>
  



      <a href='#swym-wishlist' aria-label='Open Wishlist' class='swym-wishlist header__icon link link--text focus-inset wishlist-header-icon'><?xml version="1.0" encoding="UTF-8" ?>
<svg class="icon icon-heart" width="20px" height="20px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
<g>
<path fill="none" opacity="1.00" d=" M 0.00 0.00 L 80.00 0.00 L 80.00 80.00 L 0.00 80.00 L 0.00 0.00 M 6.59 15.61 C 3.64 21.71 4.73 28.87 7.05 34.99 C 11.85 47.41 21.13 57.33 30.40 66.59 C 33.63 69.87 36.69 73.44 40.78 75.70 C 50.80 65.37 61.86 55.72 69.21 43.17 C 72.50 37.30 75.60 30.89 75.44 24.00 C 75.56 18.90 73.47 13.74 69.70 10.29 C 64.05 5.12 55.18 3.97 48.32 7.27 C 44.77 8.92 42.39 12.13 40.03 15.11 C 38.27 12.85 36.57 10.46 34.24 8.73 C 25.51 2.10 11.25 5.72 6.59 15.61 Z" />
<path fill="none" opacity="1.00" d=" M 9.77 18.65 C 12.49 10.56 22.85 7.31 30.23 10.88 C 34.88 13.75 37.21 18.96 40.08 23.39 C 43.18 18.61 45.64 12.53 51.34 10.32 C 56.49 8.74 62.76 9.32 66.78 13.19 C 70.37 16.35 71.94 21.36 71.41 26.04 C 70.77 31.84 68.02 37.12 65.04 42.04 C 58.40 52.83 49.21 61.70 40.07 70.35 C 30.95 61.33 21.43 52.44 14.66 41.42 C 10.61 34.69 7.74 26.53 9.77 18.65 Z" />
</g>
<g>
<path opacity="1.00" d=" M 6.59 15.61 C 11.25 5.72 25.51 2.10 34.24 8.73 C 36.57 10.46 38.27 12.85 40.03 15.11 C 42.39 12.13 44.77 8.92 48.32 7.27 C 55.18 3.97 64.05 5.12 69.70 10.29 C 73.47 13.74 75.56 18.90 75.44 24.00 C 75.60 30.89 72.50 37.30 69.21 43.17 C 61.86 55.72 50.80 65.37 40.78 75.70 C 36.69 73.44 33.63 69.87 30.40 66.59 C 21.13 57.33 11.85 47.41 7.05 34.99 C 4.73 28.87 3.64 21.71 6.59 15.61 M 9.77 18.65 C 7.74 26.53 10.61 34.69 14.66 41.42 C 21.43 52.44 30.95 61.33 40.07 70.35 C 49.21 61.70 58.40 52.83 65.04 42.04 C 68.02 37.12 70.77 31.84 71.41 26.04 C 71.94 21.36 70.37 16.35 66.78 13.19 C 62.76 9.32 56.49 8.74 51.34 10.32 C 45.64 12.53 43.18 18.61 40.08 23.39 C 37.21 18.96 34.88 13.75 30.23 10.88 C 22.85 7.31 12.49 10.56 9.77 18.65 Z" />
</g>
</svg>

</a>
    

<a href="#" class="header__icon header__icon--cart link link--text focus-inset right" id="cart-icon-bubble"><svg width="17" height="18" viewbox="0 0 17 18" class="icon icon-cart-empty" aria-hidden="true" focusable="false" role="presentation" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9304 15.8011L13.438 15.714L13.9304 15.8011ZM1.90729 5.7H14.6135V4.7H1.90729V5.7ZM15.1059 6.28711L13.438 15.714L14.4228 15.8882L16.0906 6.46132L15.1059 6.28711ZM12.9457 16.1269H3.19692V17.1269H12.9457V16.1269ZM2.70154 15.6946L1.4119 6.26777L0.421131 6.40332L1.71077 15.8302L2.70154 15.6946ZM4.3955 5.10908C4.3955 3.05732 6.12031 1.36568 8.28356 1.36568V0.365677C5.59989 0.365677 3.3955 2.4737 3.3955 5.10908H4.3955ZM8.28356 1.36568C10.4468 1.36568 12.1716 3.05732 12.1716 5.10908H13.1716C13.1716 2.4737 10.9672 0.365677 8.28356 0.365677V1.36568ZM3.19692 16.1269C2.94697 16.1269 2.73542 15.9423 2.70154 15.6946L1.71077 15.8302C1.81241 16.5731 2.44707 17.1269 3.19692 17.1269V16.1269ZM13.438 15.714C13.3958 15.9528 13.1882 16.1269 12.9457 16.1269V17.1269C13.6733 17.1269 14.296 16.6047 14.4228 15.8882L13.438 15.714ZM14.6135 5.7C14.9245 5.7 15.16 5.98088 15.1059 6.28711L16.0906 6.46132C16.2531 5.54263 15.5465 4.7 14.6135 4.7V5.7ZM1.90729 4.7C0.998048 4.7 0.297891 5.50247 0.421131 6.40332L1.4119 6.26777C1.37082 5.96749 1.60421 5.7 1.90729 5.7V4.7Z" fill="currentColor"></path>
</svg><span class="visually-hidden">Cart</span></a>
</div>
        </div>
      
    </div>

    <div class="header-container-mobile">
      
        <div class="left-icons">
          <div class="header__icons split">
  

      <button class="header__icon header__icon--menu header__icon--summary link link--text focus-inset mobile left" aria-label="Menu">
        <svg width="19" height="17" viewbox="0 0 19 17" aria-hidden="true" focusable="false" role="presentation" class="icon icon-hamburger" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.24324 2.35464H17.1959C17.6461 2.35464 18.0109 1.9867 18.0109 1.5329C18.0109 1.07909 17.6461 0.711533 17.1959 0.711533H1.24324C0.793056 0.711533 0.428589 1.07909 0.428589 1.5329C0.428589 1.9867 0.793056 2.35464 1.24324 2.35464ZM17.196 7.86554H1.24335C0.793165 7.86554 0.428699 8.23348 0.428699 8.68729C0.428699 9.14109 0.793165 9.50865 1.24335 9.50865H17.196C17.6462 9.50865 18.011 9.14109 18.011 8.68729C18.011 8.23348 17.6462 7.86554 17.196 7.86554ZM1.24335 15.0197H17.196C17.6462 15.0197 18.011 15.3876 18.011 15.8414C18.011 16.2952 17.6462 16.6628 17.196 16.6628H1.24335C0.793165 16.6628 0.428699 16.2952 0.428699 15.8414C0.428699 15.3876 0.793165 15.0197 1.24335 15.0197Z" fill="currentColor"></path>
</svg>
        <svg class="icon icon-close" aria-hidden="true" focusable="false" role="presentation"> <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor"> </path> </use></svg>
      </button>
    




</div>
        </div>
      

      


<h1 class="h1 header__heading">

       
        <a href="/" class="header__heading-link link link--text focus-inset"><img srcset="//store.cnn.com/cdn/shop/files/cnn_logo_2x_857fe5c4-a072-490c-82dd-7d8b1b53dcfd_110x.png?v=1654787945 1x, //store.cnn.com/cdn/shop/files/cnn_logo_2x_857fe5c4-a072-490c-82dd-7d8b1b53dcfd_110x@2x.png?v=1654787945 2x"
              src="//store.cnn.com/cdn/shop/files/cnn_logo_2x_857fe5c4-a072-490c-82dd-7d8b1b53dcfd_110x.png?v=1654787945"
              loading="lazy"
              class="header__heading-logo"
              width="204"
              height="104"
              alt="CNN Store"
            ></a>
      
    
      </h1>
    


<style data-shopify>

@media screen and (max-width:750px){
  .header__heading{text-align:center;}
}
</style>

      
        <div class="right-icons">
          <div class="header__icons split">
  


  <summary class="header__icon header__icon--search header__icon--summary right" aria-haspopup="dialog" aria-label="Search">
    <span>
      <svg width="16" height="16" viewbox="0 0 16 16" class="modal__toggle-open icon icon-search" aria-hidden="true" focusable="false" role="presentation" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.83885 6.62465C1.83885 3.89878 4.03929 1.68093 6.74419 1.68093C9.44878 1.68093 11.6492 3.89878 11.6492 6.62465C11.6492 9.3502 9.44878 11.5681 6.74419 11.5681C4.03929 11.5681 1.83885 9.3502 1.83885 6.62465ZM15.3444 14.1955L11.4137 10.2342C12.176 9.23389 12.6303 7.98311 12.6303 6.62464C12.6303 3.34832 9.99491 0.692307 6.74419 0.692307C3.49316 0.692307 0.857788 3.34832 0.857788 6.62464C0.857788 9.90066 3.49316 12.5567 6.74419 12.5567C8.1164 12.5567 9.37803 12.0822 10.379 11.2887L14.3039 15.2444C14.5912 15.5339 15.0571 15.5339 15.3444 15.2444C15.6317 14.9545 15.6317 14.4853 15.3444 14.1955Z" fill="currentColor"></path>
</svg>
    </span>
  </summary>



  <a href="/account/login" class="header__icon header__icon--account link link--text focus-inset right desktop">
    <svg width="22" height="22" viewbox="0 0 19 18" class="icon icon-account" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.35109 16.0922C7.12 16.0922 5.11349 15.1264 3.73684 13.598C3.88204 13.2594 4.18976 12.9508 4.66086 12.6789C5.8161 12.0114 7.49065 11.6288 9.25468 11.6288C11.0103 11.6288 12.6797 12.0083 13.8344 12.6703C14.3782 12.9824 14.6983 13.3426 14.8083 13.7662C13.438 15.1967 11.4991 16.0922 9.35109 16.0922ZM10.6683 9.94005C8.042 11.2176 5.43795 8.64937 6.73319 6.05862C6.9696 5.58569 7.36363 5.19675 7.84339 4.96384C10.4688 3.68996 13.0694 6.25509 11.7779 8.84469C11.5418 9.31763 11.148 9.70657 10.6683 9.94005ZM12.1321 1.77032C14.1539 2.49667 15.7361 4.12104 16.4266 6.13123C17.2695 8.58588 16.8333 10.9574 15.6114 12.7714C15.3452 12.3565 14.9489 11.9924 14.4146 11.6857C13.6251 11.2333 12.6361 10.8987 11.5545 10.6997C12.7983 9.83954 13.5307 8.30599 13.1915 6.63833C12.8647 5.03246 11.5854 3.81724 9.94805 3.54561C7.42714 3.12734 5.2353 5.04214 5.2353 7.45266C5.2353 8.79515 5.91684 9.98162 6.95459 10.6994C5.86517 10.8999 4.87014 11.2378 4.07718 11.696C3.6133 11.9639 3.25217 12.272 2.9892 12.6154C2.26176 11.4747 1.83974 10.1271 1.83974 8.68325C1.83974 3.71075 6.83162 -0.13366 12.1321 1.77032ZM12.2288 0.601795C5.26417 -1.63646 -1.11071 4.65035 1.15762 11.5203C1.97483 13.9957 3.96431 15.9578 6.47339 16.7644C13.438 19.0027 19.8129 12.7159 17.5446 5.84593C16.7274 3.3705 14.7379 1.40843 12.2288 0.601795Z" fill="#0C0C0C"></path>
</svg>
    <span class="visually-hidden">Log in</span>
  </a>
  



      <a href='#swym-wishlist' aria-label='Open Wishlist' class='swym-wishlist header__icon link link--text focus-inset wishlist-header-icon'><?xml version="1.0" encoding="UTF-8" ?>
<svg class="icon icon-heart" width="20px" height="20px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
<g>
<path fill="none" opacity="1.00" d=" M 0.00 0.00 L 80.00 0.00 L 80.00 80.00 L 0.00 80.00 L 0.00 0.00 M 6.59 15.61 C 3.64 21.71 4.73 28.87 7.05 34.99 C 11.85 47.41 21.13 57.33 30.40 66.59 C 33.63 69.87 36.69 73.44 40.78 75.70 C 50.80 65.37 61.86 55.72 69.21 43.17 C 72.50 37.30 75.60 30.89 75.44 24.00 C 75.56 18.90 73.47 13.74 69.70 10.29 C 64.05 5.12 55.18 3.97 48.32 7.27 C 44.77 8.92 42.39 12.13 40.03 15.11 C 38.27 12.85 36.57 10.46 34.24 8.73 C 25.51 2.10 11.25 5.72 6.59 15.61 Z" />
<path fill="none" opacity="1.00" d=" M 9.77 18.65 C 12.49 10.56 22.85 7.31 30.23 10.88 C 34.88 13.75 37.21 18.96 40.08 23.39 C 43.18 18.61 45.64 12.53 51.34 10.32 C 56.49 8.74 62.76 9.32 66.78 13.19 C 70.37 16.35 71.94 21.36 71.41 26.04 C 70.77 31.84 68.02 37.12 65.04 42.04 C 58.40 52.83 49.21 61.70 40.07 70.35 C 30.95 61.33 21.43 52.44 14.66 41.42 C 10.61 34.69 7.74 26.53 9.77 18.65 Z" />
</g>
<g>
<path opacity="1.00" d=" M 6.59 15.61 C 11.25 5.72 25.51 2.10 34.24 8.73 C 36.57 10.46 38.27 12.85 40.03 15.11 C 42.39 12.13 44.77 8.92 48.32 7.27 C 55.18 3.97 64.05 5.12 69.70 10.29 C 73.47 13.74 75.56 18.90 75.44 24.00 C 75.60 30.89 72.50 37.30 69.21 43.17 C 61.86 55.72 50.80 65.37 40.78 75.70 C 36.69 73.44 33.63 69.87 30.40 66.59 C 21.13 57.33 11.85 47.41 7.05 34.99 C 4.73 28.87 3.64 21.71 6.59 15.61 M 9.77 18.65 C 7.74 26.53 10.61 34.69 14.66 41.42 C 21.43 52.44 30.95 61.33 40.07 70.35 C 49.21 61.70 58.40 52.83 65.04 42.04 C 68.02 37.12 70.77 31.84 71.41 26.04 C 71.94 21.36 70.37 16.35 66.78 13.19 C 62.76 9.32 56.49 8.74 51.34 10.32 C 45.64 12.53 43.18 18.61 40.08 23.39 C 37.21 18.96 34.88 13.75 30.23 10.88 C 22.85 7.31 12.49 10.56 9.77 18.65 Z" />
</g>
</svg>

</a>
    

<a href="#" class="header__icon header__icon--cart link link--text focus-inset right" id="cart-icon-bubble-mobile"><svg width="17" height="18" viewbox="0 0 17 18" class="icon icon-cart-empty" aria-hidden="true" focusable="false" role="presentation" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9304 15.8011L13.438 15.714L13.9304 15.8011ZM1.90729 5.7H14.6135V4.7H1.90729V5.7ZM15.1059 6.28711L13.438 15.714L14.4228 15.8882L16.0906 6.46132L15.1059 6.28711ZM12.9457 16.1269H3.19692V17.1269H12.9457V16.1269ZM2.70154 15.6946L1.4119 6.26777L0.421131 6.40332L1.71077 15.8302L2.70154 15.6946ZM4.3955 5.10908C4.3955 3.05732 6.12031 1.36568 8.28356 1.36568V0.365677C5.59989 0.365677 3.3955 2.4737 3.3955 5.10908H4.3955ZM8.28356 1.36568C10.4468 1.36568 12.1716 3.05732 12.1716 5.10908H13.1716C13.1716 2.4737 10.9672 0.365677 8.28356 0.365677V1.36568ZM3.19692 16.1269C2.94697 16.1269 2.73542 15.9423 2.70154 15.6946L1.71077 15.8302C1.81241 16.5731 2.44707 17.1269 3.19692 17.1269V16.1269ZM13.438 15.714C13.3958 15.9528 13.1882 16.1269 12.9457 16.1269V17.1269C13.6733 17.1269 14.296 16.6047 14.4228 15.8882L13.438 15.714ZM14.6135 5.7C14.9245 5.7 15.16 5.98088 15.1059 6.28711L16.0906 6.46132C16.2531 5.54263 15.5465 4.7 14.6135 4.7V5.7ZM1.90729 4.7C0.998048 4.7 0.297891 5.50247 0.421131 6.40332L1.4119 6.26777C1.37082 5.96749 1.60421 5.7 1.90729 5.7V4.7Z" fill="currentColor"></path>
</svg><span class="visually-hidden">Cart</span></a>
</div>
        </div>
      
    </div>

    </header>
</div>

  <div class="search-slideout">
    <div class="page-width">
      <predictive-search class="search-modal__form" data-loading-text="Loading..."><form action="/search" method="get" role="search" class="search search-modal__form">
  
  <input type="hidden" name="type" value="product">
  
  <div class="field">
    <input class="search__input field__input"
      id="Search-In-Modal-1"
      type="search"
      name="q"
      value=""
      placeholder="Search"role="combobox"
        aria-expanded="false"
        aria-owns="predictive-search-results-list"
        aria-controls="predictive-search-results-list"
        aria-haspopup="listbox"
        aria-autocomplete="list"
        autocorrect="off"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false">
    <label class="field__label" for="Search-In-Modal-1">Search</label>
    <input type="hidden" name="options[prefix]" value="last">
    <button class="search__button field__button" aria-label="Search">
      <svg class="icon icon-search" aria-hidden="true" focusable="false" role="presentation">
        <use href="#icon-search">
      </svg>
    </button>
  </div><div class="predictive-search predictive-search--header" data-limit="4" tabindex="-1" data-predictive-search>
      <div class="predictive-search__loading-state">
        <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    </div>
    <span class="predictive-search-status visually-hidden" role="status" aria-hidden="true"></span></form></predictive-search>
    </div>
  </div>


 


  <style data-shopify>
  
    .header-mobile-drawer{top:auto; z-index:1; height:100vh;}
  
  .header-mobile-drawer-overlay{background:#CCCCCC; opacity:0.75;}
</style>
<div class="header-mobile-drawer" id="header-mobile-drawer">
    <div class="header-md-container social">
        <div class="header-mobile-header">
          
          
        </div>
        
<nav class="mobile-drawer-menu" role="navigation">
    <ul class="parent"><li >
          <a href="/collections/cnn" >CNN</a></li><li >
          <a href="/pages/shop-by-show" >Shop By Collection</a><span class="parent-caret"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span><ul class="child"><li>
                  <a href="/pages/shop-by-show" >Shows</a><span class="child-caret"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span><ul class="grand-child"><li>
                          <a href="/collections/official-anderson-cooper-360-collection" >
                            Anderson Cooper 360
                          </a>
                        </li><li>
                          <a href="/collections/the-official-situation-room-with-wolf-blitzer-collection" >
                            The Situation Room with Wolf Blitzer
                          </a>
                        </li><li>
                          <a href="/collections/the-lead-with-jake-tapper" >
                            The Lead with Jake Tapper
                          </a>
                        </li></ul></li></ul></li><li >
          <a href="#" >Shop By Product</a><span class="parent-caret"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span><ul class="child"><li>
                  <a href="/collections/clothing" >Clothing</a><span class="child-caret"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span><ul class="grand-child"><li>
                          <a href="/collections/t-shirts" >
                            T-Shirts
                          </a>
                        </li><li>
                          <a href="/collections/hoodies-sweatshirts" >
                            Hoodies & Sweatshirts
                          </a>
                        </li><li>
                          <a href="/collections/clothing" >
                            Shop All
                          </a>
                        </li></ul></li><li>
                  <a href="/collections/drinkware" >Drinkware</a><span class="child-caret"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span><ul class="grand-child"><li>
                          <a href="/collections/coffee-mugs" >
                            Coffee Mugs
                          </a>
                        </li><li>
                          <a href="/collections/tumblers" >
                            Tumblers
                          </a>
                        </li><li>
                          <a href="/collections/drinkware" >
                            Shop All
                          </a>
                        </li></ul></li><li>
                  <a href="/collections/accessories" >Accessories</a><span class="child-caret"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span><ul class="grand-child"><li>
                          <a href="/collections/tote-bags" >
                            Tote Bags
                          </a>
                        </li><li>
                          <a href="/collections/hats" >
                            Hats
                          </a>
                        </li><li>
                          <a href="/collections/accessories" >
                            Shop All
                          </a>
                        </li></ul></li><li>
                  <a href="/collections/home-office" >Home & Office</a><span class="child-caret"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>
</span><ul class="grand-child"><li>
                          <a href="/collections/blankets" >
                            Blankets
                          </a>
                        </li><li>
                          <a href="/collections/mouse-pads" >
                            Mouse Pads
                          </a>
                        </li><li>
                          <a href="/collections/home-office" >
                            Shop All
                          </a>
                        </li></ul></li></ul></li><li >
          <a href="/collections/all" >Shop All</a></li>
    </ul>
  </nav>

        <div class="customer-area">
              <a href="/account/login" class="header__icon header__icon--account link link--text focus-inset right desktop">
                <span>Log in</span>
              </a>
            
</div>
    </div>
    
    <ul class="list list-social list-unstyled" role="list"><li class="list-social__item">
            <a href="https://twitter.com/CNN" class="link link--text list-social__link" aria-describedby="a11y-external-message"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" width="1200" height="1227" viewBox="0 0 1200 1227" fill="currentColor">
<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
</svg><span class="visually-hidden">Twitter</span>
            </a>
          </li><li class="list-social__item">
            <a href="https://www.facebook.com/cnn" class="link link--text list-social__link" aria-describedby="a11y-external-message"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" viewBox="0 0 18 18">
  <path fill="currentColor" d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z">
</svg>
<span class="visually-hidden">Facebook</span>
            </a>
          </li><li class="list-social__item">
            <a href="https://www.instagram.com/cnn" class="link link--text list-social__link" aria-describedby="a11y-external-message"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 18 18">
  <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"/>
  <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z">
</svg>
<span class="visually-hidden">Instagram</span>
            </a>
          </li></ul>
    
</div>


<script>
jQuery(document).ready(function ($){    
    function headerMobileDrawer(){
        $('.header__icon--menu, .full-height-close').click(function (){
            $(this).toggleClass('open');
            $('body').toggleClass('locked');
            $('.header-mobile-drawer').toggle("slide", { direction: "left" }, 500);
            $('.header-mobile-drawer-overlay').fadeToggle(600);
        });
        $('.header-mobile-drawer-overlay').click(function(){
          $(this).fadeToggle(600);
          $('.header-mobile-drawer').toggle("slide", { direction: "left" }, 500);
          $('.header__icon--menu').removeClass('open');
          $('body').removeClass('locked');
        });
        $('.mobile-drawer-menu ul.parent li').on('click', function(e){
            $(this).find('.parent-caret').toggleClass('active');
            $(this).find('ul.child').slideToggle();
            e.stopPropagation();
        });
        $('.mobile-drawer-menu ul.child li').on('click', function(e){
            $(this).find('.child-caret').toggleClass('active');
            $(this).find('ul.grand-child').slideToggle();
            e.stopPropagation();
        });
    } headerMobileDrawer();
    if (Shopify.designMode){
        document.addEventListener('shopify:section:load', function(){
            if(event.detail.sectionId === 'header') {
                headerMobileDrawer();
            }
        });
    }
});
</script>








<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "CNN Store",
    
      
      "logo": "https:\/\/store.cnn.com\/cdn\/shop\/files\/cnn_logo_2x_857fe5c4-a072-490c-82dd-7d8b1b53dcfd_204x.png?v=1654787945",
    
    "sameAs": [
      "https:\/\/twitter.com\/CNN",
      "https:\/\/www.facebook.com\/cnn",
      "",
      "https:\/\/www.instagram.com\/cnn",
      "",
      "",
      "",
      "",
      ""
    ],
    "url": "https:\/\/store.cnn.com"
  }
</script>
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "CNN Store",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https:\/\/store.cnn.com\/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "url": "https:\/\/store.cnn.com"
    }
  </script><script>
jQuery(document).ready(function ($){  
  
  function delayLoad(){
    $('.header-container, .header-container-mobile, .snow-announcements').css({'visibility': 'visible', 'opacity': '1'});
    } delayLoad();

    if (Shopify.designMode){
    document.addEventListener('shopify:section:load', function(){
        if(event.detail.sectionId === 'header') {
            delayLoad();
        }
    });
  }
});
</script>


</div>


    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      <div id="shopify-section-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90" class="shopify-section snow-slider-section"><link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/snow-slides.scss.css?v=9225309428350941301667402762" media="print" onload="this.media='all'">
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/snow-slides.scss.css?v=9225309428350941301667402762" rel="stylesheet" type="text/css" media="all" /></noscript>







    <div class=" snow-slides-container  snow-slides--template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90">
        

        <div class="snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90" data-slick='{
        "arrows": false,
        "dots": false, 
        "autoplay": true,
        "autoplaySpeed": 3000,
        "speed": 300,
        "pauseOnHover": true,
        "slidesToShow": 1,
        "centerMode": false,
        "fade": false,
        "responsive":[
            {
                "breakpoint": 768,
                "settings":{
                    "arrows": false,
                    "dots": false, 
                    "slidesToShow": 1
                }
            }
        ]
    }'>
            
            
            <div data-index="0" class="snow-slide snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0" >
                <style>
                    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 {display: block !important;}
                        /* Video Control */
                    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0:hover .video-control {display: block;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content {width:55%; text-align:left;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content {position: relative; z-index: 4; text-align:left;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content {position: relative; z-index: 4;}
                    
                    /* Content */
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.top-left{top:0px; left:0;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.top-center{top:0px; left:50%; transform:translateX(-50%);}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.top-right{top:0px; right:0;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.bottom-left{bottom:0px; left:0;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.bottom-center{bottom:0px; left:50%; transform:translateX(-50%);}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.bottom-right{bottom:0px; right:0;}
                    /* Text */
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content p.snow-slide-pre-title {font-size:1vw; color:#cccccc;} 
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content p.snow-slide-title,
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content p.snow-slide-title {font-size:2.4vw; color:#0c0c0c;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content .snow-description,
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content .snow-description {font-size:1.4vw; color:#0c0c0c;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content button,
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content button {border: 1px solid #0c0c0c; background:rgba(0,0,0,0); color:#0c0c0c; border-radius:8px; font-size:1.3vw; margin:5px 0 0 0;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content button:hover, .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content button:hover {border: 1px solid #0c0c0c; background:#e6e6e6; color:#0c0c0c;}
                    /* Mobile */
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content {text-align: left;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content p.snow-slide-pre-title {font-size:2vw; color:#cccccc;} 
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content p.snow-slide-title {font-size:5.5vw; color:#0c0c0c;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content .snow-description {font-size:4.3vw; color:#0c0c0c;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content button {border: 1px solid #0c0c0c; background:rgba(0,0,0,0); color:#0c0c0c; border-radius:8px; font-size:3.8vw; margin:5px 0 0 0;}
                    
                    /* Fix issue where snow slides mobile alignment stops at 766 */
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .mobile .snow-slide-content {width:90%; text-align:left;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .mobile .snow-slide-content p.snow-slide-pre-title {font-size: 2vw;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .mobile .snow-slide-content p.snow-slide-title {font-size: 5.5vw;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .mobile .snow-slide-content .snow-description {font-size: 4.3vw; color:#0c0c0c;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .mobile .snow-slide-content button {font-size: 3.8vw;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .slide-logo {
                        max-width: 150px;
                        margin: 20px 0;
                        display: inline-block;
                    }
                    /*.snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0:hover .video-control {display: block;}*/
                    @media screen and (max-width:767px) {
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 img.hovered {display: none;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0:hover img.hovered {display: none;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content {width:90%; text-align:left;} 
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content {text-align: left;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .slide-logo {max-width: 120px;margin: 10px 0;}
                        
                            .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-shade {width: 0; height: 0;}
                        
                        /* Content */
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.top-left{top:0px; left:0;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.top-center{top:0px; left:50%; transform:translateX(-50%);}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.top-right{top:0px; right:0;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.bottom-left{bottom:0px; left:0;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.bottom-center{bottom:0px; left:50%; transform:translateX(-50%);}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-content.bottom-right{bottom:0px; right:0;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content p.snow-slide-pre-title {font-size: 2vw;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content p.snow-slide-title,
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content p.snow-slide-title {font-size: 5.5vw;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content .snow-description,
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content .snow-description {font-size: 4.3vw; color:#0c0c0c;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content button,
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content button {font-size: 3.8vw;}
                    }
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content button,
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content button,
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content button {padding: 16px 50px;}
                    
                    /*Audio Player Styles*/
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .icon.icon-speaker {display: block; margin-bottom: 0 !important;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-audio-button {
                        padding: 5px 5px !important;
                        border-radius: 100px !important;
                        background-color: #ffffff !important;
                        width: 4rem;
                        height: 4rem;
                    }
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .icon.icon-speaker path {
                        stroke: #000000 !important;
                        fill: #000000 !important;
                    }
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .icon.icon-speaker path:last-child {
                        stroke: #000000 !important;
                        fill: none !important;
                    }

                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-audio {display: none;}

                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-audio-description-container {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                       
                            flex-flow: row wrap;
                            
                            justify-content: flex-start;
                            
                        
                    }
                    
                    @media screen and (max-width: 768px) {
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content p.snow-slide-pre-title {color:#cccccc;} 
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content p.snow-slide-title,
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content p.snow-slide-title {color:#0c0c0c;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .mobile .snow-slide-content .snow-description,
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content .snow-description {font-size:4.3vw; color:#0c0c0c;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content button,
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content button {border: 1px solid #0c0c0c; background:rgba(0,0,0,0); color:#0c0c0c; font-size: 3.8vw;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content p.snow-slide-pre-title { color:#cccccc;} 
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content p.snow-slide-title {color:#0c0c0c;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content .snow-description {color:#0c0c0c !important;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content button {border: 1px solid #0c0c0c; background:rgba(0,0,0,0); color:#0c0c0c;}
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .outer-mobile-content button,
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content button,
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-outer-content button {padding: 10px 44px;}
                    
                        /*Audio Player Styles*/
                        .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-audio-description-container {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                       
                            flex-flow: row wrap;
                            
                            justify-content: flex-start;
                            
                        
                    }
                    }
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 a.full-link:hover ~ .snow-slide-outer-content button, .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 a.full-link ~ .snow-slide-outer-content:hover button {border: 1px solid #0c0c0c; background:#e6e6e6; color:#0c0c0c;}
                    .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 a.full-link:hover ~ .snow-slide-container button, .snow-slide-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0 .snow-slide-container .snow-slide-content button:hover {border: 1px solid #0c0c0c; background:#e6e6e6; color:#0c0c0c;}
                    
                    /* end media 768px */
                </style>
                
                <a class="full-link" href="/collections/all"
                    aria-label="Welcome to the CNN Store"></a>
                

                
                    
                    
                    
                    <img class="desktop" src="//store.cnn.com/cdn/shop/files/Launch_1.png?v=1685369889"
                        alt="-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0">
                    

                    <img class="mobile"
                        src="//store.cnn.com/cdn/shop/files/Property_1_CNN_Network_2.png?v=1685370040"
                        alt="-template--16121508528346__a76cf058-8492-4940-9d88-bfebcedcdc90-16661024725f47dbb4-0">
                    

                    
                        
                        <div class="snow-slide-shade"></div>
                        
                        <div class="snow-slide-container">
                            
                            <div class="desktop">
                                <div class="snow-slide-content middle-left">
                                    
                                    
                                    <p class="snow-slide-pre-title">
                                        
                                    </p>
                                    
                                    
                                    <p class="snow-slide-title">
                                        
                                            Welcome to the CNN Store
                                        
                                    </p>
                                    
                                    
                                    
                                    
                                    <div class="snow-description">
                                        
                                            Shop new merch + online exclusives.
                                        
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    <a href="/collections/all"
                                        aria-label="Welcome to the CNN Store-button">
                                        <button aria-label="button">Shop Now</button>
                                    </a>
                                    
                                    
                                </div>
                            </div>
                            
                            <div class="mobile">
                                <div class="snow-slide-content bottom-left">
                                    
                                    
                                    <p class="snow-slide-pre-title">
                                        
                                    </p>
                                    
                                    
                                    <p class="snow-slide-title">
                                        
                                            Welcome to the CNN Store
                                        
                                    </p>
                                    
                                    
                                    
                                    
                                    <div class="snow-description">
                                        
                                            Shop new merch + online exclusives.
                                        
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    <a href="/collections/all"
                                        aria-label="Welcome to the CNN Store-button">
                                        <button aria-label="button">Shop Now</button>
                                    </a>
                                    
                                    
                                </div>
                            </div>
                            
                            
                        </div>
                        

                    

                

            </div>
            
            
        </div>

        

        
    </div>
    

    <style data-shopify>
    #shopify-section-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 {
        padding-top: 0px;
        padding-bottom: 0px;
        background-color: #ffffff;
        
    }
    #ssc-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90{
        background:;
        padding-top:10px;
        padding-bottom:10px;
    }

    /*** Title/Subtitle ***/
    #shopify-section-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .title {color: #121212;}
    #shopify-section-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .subtitle {color: #121212;}


    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-slide{
    margin:0 0px;
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-list{
    margin:0 0px;
    }

    @media screen and (min-width: 768px) {
        .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-slide{
            margin:0 0px;
            }
        
            .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-list{
            margin:0 0px;
            }
    }

    /*** Video ***/
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .video-container-mp4 {display: block; width: 100%;}
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .video-container-mp4 ~ .placeholder-svg, .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .video-container-mp4 ~ img.desktop, .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .video-container-mp4 ~ img.mobile {display: none;}
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .youtube_video {width: 100%; height: 100%; position: absolute;}
    /* Video Control */
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .video-control {position: absolute; z-index: 4; right: 20px; bottom: 20px; display: none; background: #ffffff; color: #000000;}
    
    
    /*** Controls ***/
    .snow-prev-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90,
    .snow-next-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90{
    position:absolute;
    
    top:50%;
    
    transform:translateY(-50%);
    z-index:1;
    cursor:pointer;
    width:25px;
    }

    .snow-arrow svg {min-width: 11px;}

    .snow-prev-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-arrow:focus{
    
    top:50% !important;
    
    }

    .snow-prev-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90{ left:10px; }
    .snow-next-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90{ right:10px; }
    .snow-prev-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 svg{ transform:rotate(180deg); }

    .snow-prev-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 svg,
    .snow-next-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 svg{
    fill:#333333;
    
    }

    .snow-prev-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90:hover svg,
    .snow-next-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90:hover svg{
    fill:#cccccc;
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-dots{
    text-align:center;
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-dots li{
    margin:0 5px 0 0;
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-dots li button .slick-dot-icon:before{
    font-size:12px;
    }

    .slick-dots li button .slick-dot-icon{
    color:#333333;
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-dots li.slick-active button .slick-dot-icon:before{
    font-size:15px;
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-dots li button .slick-dot-icon:hover,
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-dots li button:focus .slick-dot-icon,
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-dots li button:focus .slick-dot-icon:before,
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-dots li.slick-active button:focus .slick-dot-icon,
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-dots li.slick-active button .slick-dot-icon,
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-dots li.slick-active button:focus .slick-dot-icon:before{
    color:#000000;
    }

    /*** Content ***/
    
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide-content{
    width:100%;
    
    opacity:1;
    
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide:hover .snow-slide-content{
    
    }
    

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide-outer-content{
    padding:5px 0;
    
    }
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .outer-mobile-content {
        padding:5px 17px;
    }

    /*** Animations ***/
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .slick-track{
    
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide:hover{
    
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide-rollover{
    
    
    
    
    bottom:0;
    left:0;
    height:0;
    width:100%;
    
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide:hover .snow-slide-rollover{
    
    height:100%;
    
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide-shade{
    
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    
    opacity:0.0;
    
    
    background:#000000;
    
    }

    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide:hover .snow-slide-shade{
    
    }

    @media screen and (max-width:768px){
        #shopify-section-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 {
            padding-top: 0px;
            padding-bottom: 0px;
        }

    
    .snow-arrow{ display:none;}
    

    
    .snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide-shade{
    opacity:0.0;
    }
    
    
    }
    
    </style>

    <script>
        jQuery(document).ready(function ($) {
            function snowSlides() {
                $('.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90').slick({
                    lazyLoad: 'ondemand',
                    infinite: true,
                    adaptiveHeight: false,
                    prevArrow: $(".snow-prev-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90"),
                    nextArrow: $(".snow-next-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90"),
            
        });
        function snowSlidesAudio() {
            
        }
        $(document).on('click','.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-audio-button', function() {
            if ($(".snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90").slick("slickGetOption", "autoplay")) {
                $(".snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90").slick("slickPause"); 
            }
            $(this).fadeOut(function() {
                $(this).prev().fadeIn(function() {
                    $(this).trigger("play");
                });
                
            });
        });
        $('.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide-audio').each(function() {
            $(this).on("play", function() {
                if ($(".snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90").slick("slickGetOption", "autoplay")) {
                $(".snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90").slick("slickPause"); 
            }
            });
            $(this).on("ended", function() {
                if ($(".snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90").slick("slickGetOption", "autoplay")) {
                $(".snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90").slick("slickPlay"); 
                $(this).fadeOut(function() {
                    $(this).next().fadeIn();
                });
            }
            });
        });

        $('.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            if ($(".snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90").slick("slickGetOption", "autoplay")) {
                $(".snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90").slick("slickPlay"); 
            }
            $('.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide-audio').each(function() {
                $(this).trigger("pause");
            });
            });
            
        $(document).on('click','.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .video-control', function() {
            if ($(this).prev().data('state') == "play") {
                $(this).prev().data('state', 'pause');
                if ($(this).prev().hasClass("youtube_video")) {
                $(this).prev()[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
                } else {
                    $(this).prev().trigger('pause');
                }
                
                $(this).text('Play Video');
                  
            } else {
                $(this).prev().data('state', 'play');
                if ($(this).prev().hasClass("youtube_video")) {
                $(this).prev()[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
                } else {
                    $(this).prev().trigger('play');
                }
                
                $(this).text('Pause Video');
                
            }
          
        });
        $('.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90').on('breakpoint', function() {
            $('.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90 .snow-slide-audio').each(function() {
            $(this).trigger("pause");
            });
        $(this).find(".slick-slide:not(.slick-cloned) video, .slick-slide:not(.slick-cloned) .youtube_video").each(function() {
            $(this).data('state', 'play');
                
                $(this).next().text('Pause Video');
                
        });
    });
    }
        snowSlides();

        // Rerun Scripts in Shopify Theme Editor
        if (Shopify.designMode) {
            document.addEventListener('shopify:section:load', function () {
                if (event.detail.sectionId === 'template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90') {
                    snowSlides();
                }
            });
            document.addEventListener('shopify:section:select', function () {
                if (event.detail.sectionId === 'template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90') {
                    
                    $('.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90').slick('slickPause');
                    
                }
            });
            document.addEventListener('shopify:section:deselect', function () {
                if (event.detail.sectionId === 'template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90') {
                    
                    $('.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90').slick('slickPlay');
                    
                }
            });
            document.addEventListener('shopify:block:select', function (e) {
                if (event.detail.sectionId === 'template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90') {
                    var slider = $('.snow-slides-template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90');
                    var blockId = e.detail.blockId;
                    var slide_index = $('.snow-slide-' + blockId).data('index');
                    slider.slick('slickGoTo', slide_index);
                }
            });
            document.addEventListener('shopify:block:deselect', function () {
                if (event.detail.sectionId === 'template--16673570390234__a76cf058-8492-4940-9d88-bfebcedcdc90') {

                }
            });
        }
});
    </script>
    

    
</div><div id="shopify-section-template--16673570390234__1654779214262bc2dd" class="shopify-section"><link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/snow-blocks.scss.css?v=36285956043081964621667402762" media="print" onload="this.media='all'">
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/snow-blocks.scss.css?v=36285956043081964621667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<div class=" snowBlockSection-template--16673570390234__1654779214262bc2dd">
    <div class="page-width">
        <div class="sb-main-header">
            
                <h2 class="snowBlocks-title">Shop Our Favorites</h2>
            
            
            
        </div>
        <div class="grid grid--uniform">
            
                
                    <div style="
                        
                                max-width: 100%;
                        
                        " 
                id="grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b" class="grid__item medium-up--two-thirds small--one-full">
                    <div class="collection-item snow-block">
                        
                            <a class="snowBlockLink" href="/collections/hoodies-sweatshirts" aria-label="Hoodies"></a>
                        
                        
                        
                        
                            <img class="main desktop" src="//store.cnn.com/cdn/shop/files/Image_32_1_3e7d45e2-436f-41c0-80e0-90f5c1749c9d.png?v=1685646174" alt="">
                        
                        
                        
                            <img class="mobile" src="//store.cnn.com/cdn/shop/files/Image_33_1.png?v=1685646159" alt="">
                        
                        
                        
                        
                        <div class="snowBlockContent  customPosition x-center y-center" 
                                style="text-align:left;
                                
                                ">
                                <div class="desktop">
                                    

                                    

                                    
                                        <a style=" font-size:1.5vw;" aria-label=""  href="/collections/hoodies-sweatshirts" class="button  snowBlockButton">Hoodies</a>
                                    
                                </div>

                                <div class="mobile">
                                    

                                    

                                    
                                        <a style=" font-size:4vw;" aria-label=""  href="/collections/hoodies-sweatshirts" class="button  snowBlockButton">Hoodies</a>
                                    
                                </div>

                            </div><!-- end of snowBlockContent -->
                            
                        
                    </div>
                    </div><!-- end of grid-item -->
                
                <style data-shopify>
                #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .customPosition {
                        position: absolute;
                        bottom: 70%;
                        left: -8%;
                }
                @media screen and (min-width: 750px) {
                    #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .customPosition {
                        position: absolute;
                        bottom: 75%;
                        left: -5%;
                    }
                    
                        #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b {width: 58% !important; }
                    
                }

                /*** Zoom Hover ***/
                
                /*** Image Hover ***/
                
                #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .snowBlockTitle{color:#262626;}
                #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .snowBlockText{
                    color:#000000;
                    margin: 4em 0 4em 0;
                }
                #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .button{
                    background:#262626;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #0c0c0c;
                    border-radius: 10px;
                    box-shadow: none;
                    transition: 0.25s all ease-in-out;
                    padding:5px 15px;
                }
                #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .button.text-link{
                    min-height: auto;
                    min-width: auto;
                    margin-top: 1rem;
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    box-shadow: none;
                    border: 0;
                    transition: 0.25s all ease-in-out;
                    padding:0;
                    text-decoration: underline;
                }
                #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .button:hover{
                    background:#696d70;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #696d70;
                    border-radius: 10px;
                    box-shadow: none;
                }
                #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .button.text-link:hover{
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    border: none;
                    box-shadow: none;
                    text-decoration: underline;
                }
                #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .snowBlockLink:hover ~ .snowBlockContent .button {
                    background:#696d70;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #696d70;
                    border-radius: 10px;
                    box-shadow: none;
                }
                #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .snowBlockLink:hover ~ .snowBlockContent .button.text-link {
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    border: none;
                    text-decoration: underline;
                    box-shadow: none;
                }
                
                    #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .snowBlockContent{visibility:visible;}
                
                

               /* @media screen and (max-width:960px){

                    #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .snowBlockContent{
                        visibility:visible;
                    }  
                    
                    #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .snowBlockShade,
                    #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b:hover .snowBlockShade{
                        visibility:;
                    }

                }*/
                #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .snowBlockContent{
                    padding: 10px 10px;
                    line-height: 1; 
                    width:100%;
                }

                @media screen and (max-width:750px){
                    #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .button{
                        padding:5px 10px;
                    }
                    #grid__item-c325d45a-284a-47c4-852f-a6b637fa3a3b .snowBlockContent{
                        padding: 10px 10px;
                    }
                }
                
                </style>
            
                
                    <div style="
                        
                                max-width: 100%;
                        
                        " 
                id="grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea" class="grid__item medium-up--one-third small--one-full">
                    <div class="collection-item snow-block">
                        
                            <a class="snowBlockLink" href="/products/cnn-mug" aria-label="As Seen On"></a>
                        
                        
                        
                        
                            <img class="main desktop" src="//store.cnn.com/cdn/shop/files/Mug_2.png?v=1662668600" alt="">
                        
                        
                        
                            <img class="mobile" src="//store.cnn.com/cdn/shop/files/AsSeenOn-mobile.png?v=1663185730" alt="">
                        
                        
                        
                        
                        <div class="snowBlockContent  customPosition x-center y-center" 
                                style="text-align:right;
                                
                                ">
                                <div class="desktop">
                                    

                                    

                                    
                                        <a style=" font-size:1.5vw;" aria-label=""  href="/products/cnn-mug" class="button  snowBlockButton">As Seen On</a>
                                    
                                </div>

                                <div class="mobile">
                                    

                                    

                                    
                                        <a style=" font-size:4vw;" aria-label=""  href="/products/cnn-mug" class="button  snowBlockButton">As Seen On</a>
                                    
                                </div>

                            </div><!-- end of snowBlockContent -->
                            
                        
                    </div>
                    </div><!-- end of grid-item -->
                
                <style data-shopify>
                #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .customPosition {
                        position: absolute;
                        bottom: 5%;
                        left: 8%;
                }
                @media screen and (min-width: 750px) {
                    #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .customPosition {
                        position: absolute;
                        bottom: 5%;
                        left: 10%;
                    }
                    
                }

                /*** Zoom Hover ***/
                
                /*** Image Hover ***/
                
                #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .snowBlockTitle{color:#262626;}
                #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .snowBlockText{
                    color:#000000;
                    margin: 4em 0 4em 0;
                }
                #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .button{
                    background:#262626;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #0c0c0c;
                    border-radius: 9px;
                    box-shadow: none;
                    transition: 0.25s all ease-in-out;
                    padding:5px 15px;
                }
                #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .button.text-link{
                    min-height: auto;
                    min-width: auto;
                    margin-top: 1rem;
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    box-shadow: none;
                    border: 0;
                    transition: 0.25s all ease-in-out;
                    padding:0;
                    text-decoration: underline;
                }
                #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .button:hover{
                    background:#696d70;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #696d70;
                    border-radius: 9px;
                    box-shadow: none;
                }
                #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .button.text-link:hover{
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    border: none;
                    box-shadow: none;
                    text-decoration: underline;
                }
                #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .snowBlockLink:hover ~ .snowBlockContent .button {
                    background:#696d70;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #696d70;
                    border-radius: 9px;
                    box-shadow: none;
                }
                #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .snowBlockLink:hover ~ .snowBlockContent .button.text-link {
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    border: none;
                    text-decoration: underline;
                    box-shadow: none;
                }
                
                    #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .snowBlockContent{visibility:visible;}
                
                

               /* @media screen and (max-width:960px){

                    #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .snowBlockContent{
                        visibility:visible;
                    }  
                    
                    #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .snowBlockShade,
                    #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea:hover .snowBlockShade{
                        visibility:;
                    }

                }*/
                #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .snowBlockContent{
                    padding: 10px 10px;
                    line-height: 1; 
                    width:100%;
                }

                @media screen and (max-width:750px){
                    #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .button{
                        padding:5px 10px;
                    }
                    #grid__item-8b9e1090-36de-47c8-8d05-57a3c1cb37ea .snowBlockContent{
                        padding: 10px 10px;
                    }
                }
                
                </style>
            
                
                    <div style="
                        
                                max-width: 100%;
                        
                        " 
                id="grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3" class="grid__item medium-up--one-third small--one-full">
                    <div class="collection-item snow-block">
                        
                            <a class="snowBlockLink" href="/collections/drinkware" aria-label="Drinkware"></a>
                        
                        
                        
                        
                            <img class="main desktop" src="//store.cnn.com/cdn/shop/files/CNN-Block-Drinkware-desktop.png?v=1656086204" alt="">
                        
                        
                        
                            <img class="mobile" src="//store.cnn.com/cdn/shop/files/CNN-Block-Drinkware-mobile.png?v=1656086214" alt="">
                        
                        
                        
                        
                        <div class="snowBlockContent  customPosition x-center y-center" 
                                style="text-align:left;
                                
                                ">
                                <div class="desktop">
                                    

                                    

                                    
                                        <a style=" font-size:1.5vw;" aria-label=""  href="/collections/drinkware" class="button  snowBlockButton">Drinkware</a>
                                    
                                </div>

                                <div class="mobile">
                                    

                                    

                                    
                                        <a style=" font-size:4vw;" aria-label=""  href="/collections/drinkware" class="button  snowBlockButton">Drinkware</a>
                                    
                                </div>

                            </div><!-- end of snowBlockContent -->
                            
                        
                    </div>
                    </div><!-- end of grid-item -->
                
                <style data-shopify>
                #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .customPosition {
                        position: absolute;
                        bottom: 80%;
                        left: -8%;
                }
                @media screen and (min-width: 750px) {
                    #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .customPosition {
                        position: absolute;
                        bottom: 5%;
                        left: -8%;
                    }
                    
                }

                /*** Zoom Hover ***/
                
                /*** Image Hover ***/
                
                #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .snowBlockTitle{color:#262626;}
                #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .snowBlockText{
                    color:#000000;
                    margin: 4em 0 4em 0;
                }
                #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .button{
                    background:#262626;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #0c0c0c;
                    border-radius: 9px;
                    box-shadow: none;
                    transition: 0.25s all ease-in-out;
                    padding:5px 15px;
                }
                #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .button.text-link{
                    min-height: auto;
                    min-width: auto;
                    margin-top: 1rem;
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    box-shadow: none;
                    border: 0;
                    transition: 0.25s all ease-in-out;
                    padding:0;
                    text-decoration: underline;
                }
                #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .button:hover{
                    background:#696d70;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #696d70;
                    border-radius: 9px;
                    box-shadow: none;
                }
                #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .button.text-link:hover{
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    border: none;
                    box-shadow: none;
                    text-decoration: underline;
                }
                #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .snowBlockLink:hover ~ .snowBlockContent .button {
                    background:#696d70;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #696d70;
                    border-radius: 9px;
                    box-shadow: none;
                }
                #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .snowBlockLink:hover ~ .snowBlockContent .button.text-link {
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    border: none;
                    text-decoration: underline;
                    box-shadow: none;
                }
                
                    #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .snowBlockContent{visibility:visible;}
                
                

               /* @media screen and (max-width:960px){

                    #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .snowBlockContent{
                        visibility:visible;
                    }  
                    
                    #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .snowBlockShade,
                    #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3:hover .snowBlockShade{
                        visibility:;
                    }

                }*/
                #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .snowBlockContent{
                    padding: 10px 10px;
                    line-height: 1; 
                    width:100%;
                }

                @media screen and (max-width:750px){
                    #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .button{
                        padding:5px 10px;
                    }
                    #grid__item-4e13eea1-099d-44ba-bf65-b069fb796ec3 .snowBlockContent{
                        padding: 10px 10px;
                    }
                }
                
                </style>
            
                
                    <div style="
                        
                                max-width: 100%;
                        
                        " 
                id="grid__item-4f216831-53e0-4754-9773-64c529a8d63c" class="grid__item medium-up--two-thirds small--one-full">
                    <div class="collection-item snow-block">
                        
                            <a class="snowBlockLink" href="/collections/t-shirts" aria-label="T-Shirts"></a>
                        
                        
                        
                        
                            <img class="main desktop" src="//store.cnn.com/cdn/shop/files/August_1_2_1_a36ca040-6e4a-470d-96ce-5cac1dbe090a.png?v=1685561123" alt="">
                        
                        
                        
                            <img class="mobile" src="//store.cnn.com/cdn/shop/files/August_2.png?v=1685561398" alt="">
                        
                        
                        
                        
                        <div class="snowBlockContent  customPosition x-center y-center" 
                                style="text-align:right;
                                
                                ">
                                <div class="desktop">
                                    

                                    

                                    
                                        <a style=" font-size:1.5vw;" aria-label=""  href="/collections/t-shirts" class="button  snowBlockButton">T-Shirts</a>
                                    
                                </div>

                                <div class="mobile">
                                    

                                    

                                    
                                        <a style=" font-size:4vw;" aria-label=""  href="/collections/t-shirts" class="button  snowBlockButton">T-Shirts</a>
                                    
                                </div>

                            </div><!-- end of snowBlockContent -->
                            
                        
                    </div>
                    </div><!-- end of grid-item -->
                
                <style data-shopify>
                #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .customPosition {
                        position: absolute;
                        bottom: 5%;
                        left: 8%;
                }
                @media screen and (min-width: 750px) {
                    #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .customPosition {
                        position: absolute;
                        bottom: 78%;
                        left: 6%;
                    }
                    
                        #grid__item-4f216831-53e0-4754-9773-64c529a8d63c {width: 57% !important; }
                    
                }

                /*** Zoom Hover ***/
                
                /*** Image Hover ***/
                
                #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .snowBlockTitle{color:#262626;}
                #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .snowBlockText{
                    color:#000000;
                    margin: 4em 0 4em 0;
                }
                #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .button{
                    background:#262626;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #0c0c0c;
                    border-radius: 9px;
                    box-shadow: none;
                    transition: 0.25s all ease-in-out;
                    padding:5px 15px;
                }
                #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .button.text-link{
                    min-height: auto;
                    min-width: auto;
                    margin-top: 1rem;
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    box-shadow: none;
                    border: 0;
                    transition: 0.25s all ease-in-out;
                    padding:0;
                    text-decoration: underline;
                }
                #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .button:hover{
                    background:#696d70;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #696d70;
                    border-radius: 9px;
                    box-shadow: none;
                }
                #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .button.text-link:hover{
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    border: none;
                    box-shadow: none;
                    text-decoration: underline;
                }
                #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .snowBlockLink:hover ~ .snowBlockContent .button {
                    background:#696d70;
                    color:#ffffff;
                    cursor: pointer;
                    border-color: #696d70;
                    border-radius: 9px;
                    box-shadow: none;
                }
                #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .snowBlockLink:hover ~ .snowBlockContent .button.text-link {
                    background:none;
                    color:#ffffff;
                    cursor: pointer;
                    border: none;
                    text-decoration: underline;
                    box-shadow: none;
                }
                
                    #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .snowBlockContent{visibility:visible;}
                
                

               /* @media screen and (max-width:960px){

                    #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .snowBlockContent{
                        visibility:visible;
                    }  
                    
                    #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .snowBlockShade,
                    #grid__item-4f216831-53e0-4754-9773-64c529a8d63c:hover .snowBlockShade{
                        visibility:;
                    }

                }*/
                #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .snowBlockContent{
                    padding: 10px 10px;
                    line-height: 1; 
                    width:100%;
                }

                @media screen and (max-width:750px){
                    #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .button{
                        padding:5px 10px;
                    }
                    #grid__item-4f216831-53e0-4754-9773-64c529a8d63c .snowBlockContent{
                        padding: 10px 10px;
                    }
                }
                
                </style>
            
        </div><!-- end of grid-container -->
    </div><!-- end of page-width -->
</div><!-- end of snowBlockSection -->

<style data-shopify>
.snowBlockSection-template--16673570390234__1654779214262bc2dd{
    
        background-color:#ffffff;
    
    padding-top:60px;
    padding-bottom:60px;
}
.snowBlockSection-template--16673570390234__1654779214262bc2dd .sb-main-header{display:flex; flex-direction:column; align-items:center;}
.sb-main-header h2.snowBlocks-title, .sb-main-header .snowBlocks-description{width:100%;}
.snowBlockSection-template--16673570390234__1654779214262bc2dd .snowBlocks-title {text-align:center; margin:20px 0 0 0; color:#cc0000;}
.snowBlockSection-template--16673570390234__1654779214262bc2dd .snowBlocks-description{font-size:2vw; color:#333333; text-align:center; width:100%; margin:0 auto;}
.snowBlocks-description p{padding:0; margin:0;}
.snowBlockSection-template--16673570390234__1654779214262bc2dd .snowBlocks-description a{color:#666666;}
.snowBlockSection-template--16673570390234__1654779214262bc2dd .snow-block-main-btn{
    font-size:2vw; 
    padding:13px 15px;
    margin:5px 0 10px 0;
    color:#ffffff; 
    background:#333333;
    box-shadow:none;
    border:none;
    outline:none;
    border-radius:0px;
}
.snowBlockSection-template--16673570390234__1654779214262bc2dd .snow-block-main-btn:hover{
    cursor:pointer;
    color:#ffffff; 
    background:#666666;
}
.snowBlockSection-template--16673570390234__1654779214262bc2dd .snowBlockContent .snowBlockTitle {margin: 0;}
.collection-item a {text-decoration: none;}
.grid__item .snowBlockLink{
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    z-index:3;
    display: block;
}
.grid__item img{display:block; width:100%;}
.grid__item .snowBlockContent .button{border-color: transparent;}
.grid__item .collection-item:not(.collection-item--below):after{background:none;}

    .snowBlockSection-template--16673570390234__1654779214262bc2dd .page-width{
        max-width: 100%;
        width:80%;
        padding:0;
        margin: auto;
    }
    
    @media screen and (max-width: 750px) {
        .snowBlockSection-template--16673570390234__1654779214262bc2dd .grid__item {padding: 0;}
    }
    

.collection-item {position: relative;}
@media screen and (max-width:960px){
    .snowBlockSection-template--16673570390234__1654779214262bc2dd .grid{grid-template-columns: repeat(1, 1fr);}
    .snowBlockSection-template--16673570390234__1654779214262bc2dd .grid__item.medium-up--one-half{width:100%;}
}
@media screen and (min-width:750px){
    .grid__item.medium-up--one-quarter{width: 25% !important;}
    .grid__item.medium-up--one-third{width: 33.33333% !important;}
    .grid__item.medium-up--one-half{width: 50% !important;}
    .grid__item.medium-up--two-thirds{width: 66.6666% !important;}
    .grid__item.medium-up--one-full{width: 100% !important;}
}
@media screen and (min-width: 240px) {
    .desktop {display: none;}
    .mobile {display: block;}
    .snowBlocks-title {font-size:5vw;}
}
.snowBlockSection-template--16673570390234__1654779214262bc2dd img.mobile {display: block;}
.snowBlockSection-template--16673570390234__1654779214262bc2dd img.desktop {display: none;}
@media screen and (min-width:750px) {
    .mobile {display: none;}
    .desktop {display: block;}
    .snowBlocks-title {font-size:3.6vw;}
    .snowBlockSection-template--16673570390234__1654779214262bc2dd img.mobile {display: none;}
    .snowBlockSection-template--16673570390234__1654779214262bc2dd img.desktop {display: block;}
}
@media screen and (max-width:750px){
    .snowBlockSection-template--16673570390234__1654779214262bc2dd .sb-main-header{align-items:center;}
    .snowBlockSection-template--16673570390234__1654779214262bc2dd .snowBlocks-title {text-align:center;}
    .snowBlockSection-template--16673570390234__1654779214262bc2dd .snowBlocks-description {font-size:2.5vw; text-align:center; width:100%;}
    .snowBlockSection-template--16673570390234__1654779214262bc2dd button.snow-block-main-btn{
        font-size:7vw;
        padding:5px 15px;
        margin:5px 0 10px 0;
    }
}
</style>


</div><section id="shopify-section-template--16673570390234__1655814630c6ce1f28" class="shopify-section spaced-section"><link href="//store.cnn.com/cdn/shop/t/6/assets/component-card.css?v=49850626597899428811667402762" rel="stylesheet" type="text/css" media="all" />
<link href="//store.cnn.com/cdn/shop/t/6/assets/component-price.css?v=5328827735059554991667402762" rel="stylesheet" type="text/css" media="all" />
<link href="//store.cnn.com/cdn/shop/t/6/assets/component-product-grid.css?v=177484520108027119391667402762" rel="stylesheet" type="text/css" media="all" />

<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-slider.css?v=82006835487707820721667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/template-collection.css?v=9205790762470042881667402762" media="print" onload="this.media='all'">

<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-slider.css?v=82006835487707820721667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/template-collection.css?v=9205790762470042881667402762" rel="stylesheet" type="text/css" media="all" /></noscript>

  <div class="collection carousel collection-carousel-template--16673570390234__1655814630c6ce1f28 page-width page-width-desktop">
    
  <div class="title-wrapper-with-link title-wrapper--self-padded-tablet-down product-carousel-title-container">
    <h2 class="title">
      
        Shop New Arrivals
      
    </h2>
    
    
  </div>

  <div class="product-carousel product-carousel-template--16673570390234__1655814630c6ce1f28" data-slick='{
    "arrows": true,
    "dots": false, 
    "autoplay": false,
    "autoplaySpeed": 3000,
    "speed": 300,
    "pauseOnHover": true,
    "infinite": true,
    "slidesToShow": 3,
    "centerMode": false,
    "responsive":[
    {
      "breakpoint": 960,
      "settings":{
          "arrows": true,
          "dots": false, 
          "slidesToShow": 3
      }
  },
        {
            "breakpoint": 768,
            "settings":{
                "arrows": true,
                "dots": false, 
                "slidesToShow": 1
            }
        }
    ]
}'><div class="carousel__slide">
         

<link href="//store.cnn.com/cdn/shop/t/6/assets/component-rating.css?v=24573085263941240431667402762" rel="stylesheet" type="text/css" media="all" />

<div class="card-wrapper">
  <!--<a href="/products/cnn-logo-journal" class="full-unstyled-link">-->
    
  <div class="card card--product" tabindex="-1">
    <div class="card__inner">
      
      
          <style>
            .card--product .product_variant_images img{width:100%; opacity:0;}
            .card--product .product_variant_images img:nth-child(1){position:relative; opacity:1;}
            .card--product .product_variant_images img{
                position:absolute;
                top:0;
                left:0;
                z-index:1;
            }
            
            .card--product .product_variant_images img.hovered {opacity: 1; z-index: 2;}
            .card--product .product_variant_images.media--square {
              grid-row-end: 3;
            }
            .card--product .product_variant_images.media--square img {
              display: block; 
              max-width: 100%; 
              top: 0; 
              left: 0; 
              height: 100%; 
              width: 100%; 
              object-fit: cover; 
              object-position: center; 
              position:absolute;
            }

            .card--product .product_variant_images img.hovered{opacity:1;}
            
            .card--product .product_variant_images:hover img:nth-child(2){opacity:1;}
            .card--product .product_variant_images:hover img:nth-child(1):not(:only-child){opacity:0;}
            .card--product .product_variant_images:hover img:nth-child(1):only-child{transform: scale(1.05); transition: all 0.25s ease-in-out;}
            
          </style>
          <div class="product_variant_images media media--square">
            <a href="/products/cnn-logo-journal" class="full-unstyled-link">
  
            
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/CNN-LOGO-8-100239-MF.jpg?v=1670871556" alt="CNN Logo Journal-0" data-media-id="template--16673570390234__1655814630c6ce1f28-38565978341594">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/CNN-LOGO-8-100239-RO.jpg?v=1670871556" alt="CNN Logo Journal-1" data-media-id="template--16673570390234__1655814630c6ce1f28-38565978374362">
                
            
            </a>
          </div>
        
    
    
    
    
      
        <div class="product-card-label new">New</div>
      
    
  

    </div>
  </div>
  <!--</a>-->

  <div class="card-information">
    <div class="card-information__wrapper"><h3 class="card-information__text h5">
          <a href="/products/cnn-logo-journal" class="full-unstyled-link">
            <!--CNN Logo Journal-->
            
            CNN Logo Journal
          
          </a>
        </h3>

          
          <div class="card__swatches">
</div>
      

      

      
<div class="price ">
  <div><div class="price__regular">
      <span class="visually-hidden visually-hidden--inline">Regular price</span>
      <span class="price-item price-item--regular">$29.95</span>
    </div>
    <div class="price__sale">
        <span class="visually-hidden visually-hidden--inline">Regular price</span>
        <span><s class="price-item price-item--regular"></s></span><span class="visually-hidden visually-hidden--inline">Sale price</span>
      <span class="price-item price-item--sale price-item--last">$29.95</span>
    </div>
    <small class="unit-price caption hidden">
      <span class="visually-hidden">Unit price</span>
      <span class="price-item price-item--last">
        <span></span>
        <span aria-hidden="true">/</span>
        <span class="visually-hidden">&nbsp;per&nbsp;</span>
        <span>
        </span>
      </span>
    </small>
  </div></div>


    </div>
  </div>
</div>

      </div><div class="carousel__slide">
         

<link href="//store.cnn.com/cdn/shop/t/6/assets/component-rating.css?v=24573085263941240431667402762" rel="stylesheet" type="text/css" media="all" />

<div class="card-wrapper">
  <!--<a href="/products/the-lead-with-jake-tapper-logo-white-mug" class="full-unstyled-link">-->
    
  <div class="card card--product" tabindex="-1">
    <div class="card__inner">
      
      
          <style>
            .card--product .product_variant_images img{width:100%; opacity:0;}
            .card--product .product_variant_images img:nth-child(1){position:relative; opacity:1;}
            .card--product .product_variant_images img{
                position:absolute;
                top:0;
                left:0;
                z-index:1;
            }
            
            .card--product .product_variant_images img.hovered {opacity: 1; z-index: 2;}
            .card--product .product_variant_images.media--square {
              grid-row-end: 3;
            }
            .card--product .product_variant_images.media--square img {
              display: block; 
              max-width: 100%; 
              top: 0; 
              left: 0; 
              height: 100%; 
              width: 100%; 
              object-fit: cover; 
              object-position: center; 
              position:absolute;
            }

            .card--product .product_variant_images img.hovered{opacity:1;}
            
            .card--product .product_variant_images:hover img:nth-child(2){opacity:1;}
            .card--product .product_variant_images:hover img:nth-child(1):not(:only-child){opacity:0;}
            .card--product .product_variant_images:hover img:nth-child(1):only-child{transform: scale(1.05); transition: all 0.25s ease-in-out;}
            
          </style>
          <div class="product_variant_images media media--square">
            <a href="/products/the-lead-with-jake-tapper-logo-white-mug" class="full-unstyled-link">
  
            
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100976-11-L-MF.jpg?v=1673287882" alt="The Lead with Jake Tapper Logo White Mug-0" data-media-id="template--16673570390234__1655814630c6ce1f28-38787783688410">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100976-R-RO.jpg?v=1673287882" alt="The Lead with Jake Tapper Logo White Mug-1" data-media-id="template--16673570390234__1655814630c6ce1f28-38787783721178">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100976-11-R-MF.jpg?v=1686158718" alt="The Lead with Jake Tapper Logo White Mug-2" data-media-id="template--16673570390234__1655814630c6ce1f28-38787783852250">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100976-15-L-MF.jpg?v=1686158718" alt="The Lead with Jake Tapper Logo White Mug-3" data-media-id="template--16673570390234__1655814630c6ce1f28-38787783885018">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100976-15-R-MF.jpg?v=1673287882" alt="The Lead with Jake Tapper Logo White Mug-4" data-media-id="template--16673570390234__1655814630c6ce1f28-38787783950554">
                
            
            </a>
          </div>
        
    
    
    
    
      
        <div class="product-card-label new">New</div>
      
    
  

    </div>
  </div>
  <!--</a>-->

  <div class="card-information">
    <div class="card-information__wrapper"><h3 class="card-information__text h5">
          <a href="/products/the-lead-with-jake-tapper-logo-white-mug" class="full-unstyled-link">
            <!--The Lead with Jake Tapper Logo White Mug-->
            
            The Lead with Jake Tapper Logo White Mug
          
          </a>
        </h3>

          
          <div class="card__swatches">

                    
                  

                    
                  
</div>
      

      

      
<div class="price ">
  <div><div class="price__regular">
      <span class="visually-hidden visually-hidden--inline">Regular price</span>
      <span class="price-item price-item--regular">From $12.95</span>
    </div>
    <div class="price__sale">
        <span class="visually-hidden visually-hidden--inline">Regular price</span>
        <span><s class="price-item price-item--regular"></s></span><span class="visually-hidden visually-hidden--inline">Sale price</span>
      <span class="price-item price-item--sale price-item--last">From $12.95</span>
    </div>
    <small class="unit-price caption hidden">
      <span class="visually-hidden">Unit price</span>
      <span class="price-item price-item--last">
        <span></span>
        <span aria-hidden="true">/</span>
        <span class="visually-hidden">&nbsp;per&nbsp;</span>
        <span>
        </span>
      </span>
    </small>
  </div></div>


    </div>
  </div>
</div>

      </div><div class="carousel__slide">
         

<link href="//store.cnn.com/cdn/shop/t/6/assets/component-rating.css?v=24573085263941240431667402762" rel="stylesheet" type="text/css" media="all" />

<div class="card-wrapper">
  <!--<a href="/products/the-lead-with-jake-tapper-logo-women-s-short-sleeve-t-shirt" class="full-unstyled-link">-->
    
  <div class="card card--product" tabindex="-1">
    <div class="card__inner">
      
      
          <style>
            .card--product .product_variant_images img{width:100%; opacity:0;}
            .card--product .product_variant_images img:nth-child(1){position:relative; opacity:1;}
            .card--product .product_variant_images img{
                position:absolute;
                top:0;
                left:0;
                z-index:1;
            }
            
            .card--product .product_variant_images img.hovered {opacity: 1; z-index: 2;}
            .card--product .product_variant_images.media--square {
              grid-row-end: 3;
            }
            .card--product .product_variant_images.media--square img {
              display: block; 
              max-width: 100%; 
              top: 0; 
              left: 0; 
              height: 100%; 
              width: 100%; 
              object-fit: cover; 
              object-position: center; 
              position:absolute;
            }

            .card--product .product_variant_images img.hovered{opacity:1;}
            
            .card--product .product_variant_images:hover img:nth-child(2){opacity:1;}
            .card--product .product_variant_images:hover img:nth-child(1):not(:only-child){opacity:0;}
            .card--product .product_variant_images:hover img:nth-child(1):only-child{transform: scale(1.05); transition: all 0.25s ease-in-out;}
            
          </style>
          <div class="product_variant_images media media--square">
            <a href="/products/the-lead-with-jake-tapper-logo-women-s-short-sleeve-t-shirt" class="full-unstyled-link">
  
            
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100012-RED-MF.jpg?v=1673287547" alt="The Lead with Jake Tapper Logo Women&#39;s Short Sleeve T-Shirt-0" data-media-id="template--16673570390234__1655814630c6ce1f28-38787741647066">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100012-RO.jpg?v=1673287547" alt="The Lead with Jake Tapper Logo Women&#39;s Short Sleeve T-Shirt-1" data-media-id="template--16673570390234__1655814630c6ce1f28-38787741679834">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100012-ROYAL-MF.jpg?v=1673287547" alt="The Lead with Jake Tapper Logo Women&#39;s Short Sleeve T-Shirt-2" data-media-id="template--16673570390234__1655814630c6ce1f28-38787741712602">
                
            
            </a>
          </div>
        
    
    
    
    
      
        <div class="product-card-label new">New</div>
      
    
  

    </div>
  </div>
  <!--</a>-->

  <div class="card-information">
    <div class="card-information__wrapper"><h3 class="card-information__text h5">
          <a href="/products/the-lead-with-jake-tapper-logo-women-s-short-sleeve-t-shirt" class="full-unstyled-link">
            <!--The Lead with Jake Tapper Logo Women&#39;s Short Sleeve T-Shirt-->
            
            The Lead with Jake Tapper Logo Women's Short Sleeve T-Shirt
          
          </a>
        </h3>

          
          <div class="card__swatches">
                    
                      <label class="color__swatch red" for="template--16673570390234__1655814630c6ce1f28-Color-0">
                        <img src="//snowdam.s3.us-east-2.amazonaws.com/swatch/red.png" alt="Red" onerror="this.onerror=null;this.src='//snowdam.s3.us-east-2.amazonaws.com/swatch/broken-image.jpg';">
                      </label>
                      <script>
                        jQuery(document).ready(function ($){
                          function collectionSwatches(){
                            $("label.color__swatch.red").hover(
                              
                              function (){
                                $(this).closest(".card-wrapper").find('[src*=Red]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=red]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=RED]').first('img').addClass('hovered');
                              },
                              function (){
                                  $(this).closest(".card-wrapper").find('[src*=Red]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=red]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=RED]').first('img').removeClass('hovered');
                              }
                            )
                          }
                          collectionSwatches();
                          if (Shopify.designMode){
                            document.addEventListener('shopify:section:load', function(){
                            if(event.detail.sectionId === 'template--16673570390234__1655814630c6ce1f28') {
                              collectionSwatches();
                            }
                          });
                        }
                        });
                      </script>
                    
                  

                    
                      <label class="color__swatch royal" for="template--16673570390234__1655814630c6ce1f28-Color-1">
                        <img src="//snowdam.s3.us-east-2.amazonaws.com/swatch/royal.png" alt="Royal" onerror="this.onerror=null;this.src='//snowdam.s3.us-east-2.amazonaws.com/swatch/broken-image.jpg';">
                      </label>
                      <script>
                        jQuery(document).ready(function ($){
                          function collectionSwatches(){
                            $("label.color__swatch.royal").hover(
                              
                              function (){
                                $(this).closest(".card-wrapper").find('[src*=Royal]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=royal]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=ROYAL]').first('img').addClass('hovered');
                              },
                              function (){
                                  $(this).closest(".card-wrapper").find('[src*=Royal]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=royal]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=ROYAL]').first('img').removeClass('hovered');
                              }
                            )
                          }
                          collectionSwatches();
                          if (Shopify.designMode){
                            document.addEventListener('shopify:section:load', function(){
                            if(event.detail.sectionId === 'template--16673570390234__1655814630c6ce1f28') {
                              collectionSwatches();
                            }
                          });
                        }
                        });
                      </script>
                    
                  

                    
                  

                    
                  

                    
                  

                    
                  

                    
                  

                    
                  
</div>
      

      

      
<div class="price ">
  <div><div class="price__regular">
      <span class="visually-hidden visually-hidden--inline">Regular price</span>
      <span class="price-item price-item--regular">$27.95</span>
    </div>
    <div class="price__sale">
        <span class="visually-hidden visually-hidden--inline">Regular price</span>
        <span><s class="price-item price-item--regular"></s></span><span class="visually-hidden visually-hidden--inline">Sale price</span>
      <span class="price-item price-item--sale price-item--last">$27.95</span>
    </div>
    <small class="unit-price caption hidden">
      <span class="visually-hidden">Unit price</span>
      <span class="price-item price-item--last">
        <span></span>
        <span aria-hidden="true">/</span>
        <span class="visually-hidden">&nbsp;per&nbsp;</span>
        <span>
        </span>
      </span>
    </small>
  </div></div>


    </div>
  </div>
</div>

      </div><div class="carousel__slide">
         

<link href="//store.cnn.com/cdn/shop/t/6/assets/component-rating.css?v=24573085263941240431667402762" rel="stylesheet" type="text/css" media="all" />

<div class="card-wrapper">
  <!--<a href="/products/the-lead-with-jake-tapper-logo-adult-short-sleeve-t-shirt" class="full-unstyled-link">-->
    
  <div class="card card--product" tabindex="-1">
    <div class="card__inner">
      
      
          <style>
            .card--product .product_variant_images img{width:100%; opacity:0;}
            .card--product .product_variant_images img:nth-child(1){position:relative; opacity:1;}
            .card--product .product_variant_images img{
                position:absolute;
                top:0;
                left:0;
                z-index:1;
            }
            
            .card--product .product_variant_images img.hovered {opacity: 1; z-index: 2;}
            .card--product .product_variant_images.media--square {
              grid-row-end: 3;
            }
            .card--product .product_variant_images.media--square img {
              display: block; 
              max-width: 100%; 
              top: 0; 
              left: 0; 
              height: 100%; 
              width: 100%; 
              object-fit: cover; 
              object-position: center; 
              position:absolute;
            }

            .card--product .product_variant_images img.hovered{opacity:1;}
            
            .card--product .product_variant_images:hover img:nth-child(2){opacity:1;}
            .card--product .product_variant_images:hover img:nth-child(1):not(:only-child){opacity:0;}
            .card--product .product_variant_images:hover img:nth-child(1):only-child{transform: scale(1.05); transition: all 0.25s ease-in-out;}
            
          </style>
          <div class="product_variant_images media media--square">
            <a href="/products/the-lead-with-jake-tapper-logo-adult-short-sleeve-t-shirt" class="full-unstyled-link">
  
            
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100011-ROYAL-MF.jpg?v=1673288579" alt="The Lead with Jake Tapper Logo Adult Short Sleeve T-Shirt-0" data-media-id="template--16673570390234__1655814630c6ce1f28-38787739255002">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100011-RO.jpg?v=1673288579" alt="The Lead with Jake Tapper Logo Adult Short Sleeve T-Shirt-1" data-media-id="template--16673570390234__1655814630c6ce1f28-38787739222234">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/JT-LOGO-9-100011-RED-MF.jpg?v=1673288579" alt="The Lead with Jake Tapper Logo Adult Short Sleeve T-Shirt-2" data-media-id="template--16673570390234__1655814630c6ce1f28-38787739189466">
                
            
            </a>
          </div>
        
    
    
    
    
      
        <div class="product-card-label new">New</div>
      
    
  

    </div>
  </div>
  <!--</a>-->

  <div class="card-information">
    <div class="card-information__wrapper"><h3 class="card-information__text h5">
          <a href="/products/the-lead-with-jake-tapper-logo-adult-short-sleeve-t-shirt" class="full-unstyled-link">
            <!--The Lead with Jake Tapper Logo Adult Short Sleeve T-Shirt-->
            
            The Lead with Jake Tapper Logo Adult Short Sleeve T-Shirt
          
          </a>
        </h3>

          
          <div class="card__swatches">
                    
                      <label class="color__swatch red" for="template--16673570390234__1655814630c6ce1f28-Color-0">
                        <img src="//snowdam.s3.us-east-2.amazonaws.com/swatch/red.png" alt="Red" onerror="this.onerror=null;this.src='//snowdam.s3.us-east-2.amazonaws.com/swatch/broken-image.jpg';">
                      </label>
                      <script>
                        jQuery(document).ready(function ($){
                          function collectionSwatches(){
                            $("label.color__swatch.red").hover(
                              
                              function (){
                                $(this).closest(".card-wrapper").find('[src*=Red]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=red]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=RED]').first('img').addClass('hovered');
                              },
                              function (){
                                  $(this).closest(".card-wrapper").find('[src*=Red]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=red]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=RED]').first('img').removeClass('hovered');
                              }
                            )
                          }
                          collectionSwatches();
                          if (Shopify.designMode){
                            document.addEventListener('shopify:section:load', function(){
                            if(event.detail.sectionId === 'template--16673570390234__1655814630c6ce1f28') {
                              collectionSwatches();
                            }
                          });
                        }
                        });
                      </script>
                    
                  

                    
                      <label class="color__swatch royal" for="template--16673570390234__1655814630c6ce1f28-Color-1">
                        <img src="//snowdam.s3.us-east-2.amazonaws.com/swatch/royal.png" alt="Royal" onerror="this.onerror=null;this.src='//snowdam.s3.us-east-2.amazonaws.com/swatch/broken-image.jpg';">
                      </label>
                      <script>
                        jQuery(document).ready(function ($){
                          function collectionSwatches(){
                            $("label.color__swatch.royal").hover(
                              
                              function (){
                                $(this).closest(".card-wrapper").find('[src*=Royal]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=royal]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=ROYAL]').first('img').addClass('hovered');
                              },
                              function (){
                                  $(this).closest(".card-wrapper").find('[src*=Royal]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=royal]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=ROYAL]').first('img').removeClass('hovered');
                              }
                            )
                          }
                          collectionSwatches();
                          if (Shopify.designMode){
                            document.addEventListener('shopify:section:load', function(){
                            if(event.detail.sectionId === 'template--16673570390234__1655814630c6ce1f28') {
                              collectionSwatches();
                            }
                          });
                        }
                        });
                      </script>
                    
                  

                    
                  

                    
                  

                    
                  

                    
                  

                    
                  

                    
                  
</div>
      

      

      
<div class="price ">
  <div><div class="price__regular">
      <span class="visually-hidden visually-hidden--inline">Regular price</span>
      <span class="price-item price-item--regular">$22.95</span>
    </div>
    <div class="price__sale">
        <span class="visually-hidden visually-hidden--inline">Regular price</span>
        <span><s class="price-item price-item--regular"></s></span><span class="visually-hidden visually-hidden--inline">Sale price</span>
      <span class="price-item price-item--sale price-item--last">$22.95</span>
    </div>
    <small class="unit-price caption hidden">
      <span class="visually-hidden">Unit price</span>
      <span class="price-item price-item--last">
        <span></span>
        <span aria-hidden="true">/</span>
        <span class="visually-hidden">&nbsp;per&nbsp;</span>
        <span>
        </span>
      </span>
    </small>
  </div></div>


    </div>
  </div>
</div>

      </div><div class="carousel__slide">
         

<link href="//store.cnn.com/cdn/shop/t/6/assets/component-rating.css?v=24573085263941240431667402762" rel="stylesheet" type="text/css" media="all" />

<div class="card-wrapper">
  <!--<a href="/products/cnn-mug" class="full-unstyled-link">-->
    
  <div class="card card--product" tabindex="-1">
    <div class="card__inner">
      
      
          <style>
            .card--product .product_variant_images img{width:100%; opacity:0;}
            .card--product .product_variant_images img:nth-child(1){position:relative; opacity:1;}
            .card--product .product_variant_images img{
                position:absolute;
                top:0;
                left:0;
                z-index:1;
            }
            
            .card--product .product_variant_images img.hovered {opacity: 1; z-index: 2;}
            .card--product .product_variant_images.media--square {
              grid-row-end: 3;
            }
            .card--product .product_variant_images.media--square img {
              display: block; 
              max-width: 100%; 
              top: 0; 
              left: 0; 
              height: 100%; 
              width: 100%; 
              object-fit: cover; 
              object-position: center; 
              position:absolute;
            }

            .card--product .product_variant_images img.hovered{opacity:1;}
            
            .card--product .product_variant_images:hover img:nth-child(2){opacity:1;}
            .card--product .product_variant_images:hover img:nth-child(1):not(:only-child){opacity:0;}
            .card--product .product_variant_images:hover img:nth-child(1):only-child{transform: scale(1.05); transition: all 0.25s ease-in-out;}
            
          </style>
          <div class="product_variant_images media media--square">
            <a href="/products/cnn-mug" class="full-unstyled-link">
  
            
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/CNN-MUG-MERCH-1X1-003.jpg?v=1662052341" alt="Official CNN Logo 16oz Ceramic Mug-0" data-media-id="template--16673570390234__1655814630c6ce1f28-37764969464026">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/CNN-ON-AIR-MUG-1X1-001.jpg?v=1662052341" alt="Official CNN Logo 16oz Ceramic Mug-1" data-media-id="template--16673570390234__1655814630c6ce1f28-37764969562330">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/CNN-MUG-MERCH-1X1-002.jpg?v=1662052318" alt="Official CNN Logo 16oz Ceramic Mug-2" data-media-id="template--16673570390234__1655814630c6ce1f28-37764969398490">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/CNN-MUG-MERCH-1X1-001.jpg?v=1662052318" alt="Official CNN Logo 16oz Ceramic Mug-3" data-media-id="template--16673570390234__1655814630c6ce1f28-37764969431258">
                
            
            </a>
          </div>
        
    
    
     
        <div class="product-card-label sold-out">Sold Out</div>
  

    </div>
  </div>
  <!--</a>-->

  <div class="card-information">
    <div class="card-information__wrapper"><h3 class="card-information__text h5">
          <a href="/products/cnn-mug" class="full-unstyled-link">
            <!--Official CNN Logo 16oz Ceramic Mug-->
            
            Official CNN Logo 16oz Ceramic Mug
          
          </a>
        </h3>

          
          <div class="card__swatches">

</div>
      

      

      
<div class="price  price--sold-out ">
  <div><div class="price__regular">
      <span class="visually-hidden visually-hidden--inline">Regular price</span>
      <span class="price-item price-item--regular">$24.95</span>
    </div>
    <div class="price__sale">
        <span class="visually-hidden visually-hidden--inline">Regular price</span>
        <span><s class="price-item price-item--regular"></s></span><span class="visually-hidden visually-hidden--inline">Sale price</span>
      <span class="price-item price-item--sale price-item--last">$24.95</span>
    </div>
    <small class="unit-price caption hidden">
      <span class="visually-hidden">Unit price</span>
      <span class="price-item price-item--last">
        <span></span>
        <span aria-hidden="true">/</span>
        <span class="visually-hidden">&nbsp;per&nbsp;</span>
        <span>
        </span>
      </span>
    </small>
  </div></div>


    </div>
  </div>
</div>

      </div><div class="carousel__slide">
         

<link href="//store.cnn.com/cdn/shop/t/6/assets/component-rating.css?v=24573085263941240431667402762" rel="stylesheet" type="text/css" media="all" />

<div class="card-wrapper">
  <!--<a href="/products/cnn-logo-embroidered-hat" class="full-unstyled-link">-->
    
  <div class="card card--product" tabindex="-1">
    <div class="card__inner">
      
      
          <style>
            .card--product .product_variant_images img{width:100%; opacity:0;}
            .card--product .product_variant_images img:nth-child(1){position:relative; opacity:1;}
            .card--product .product_variant_images img{
                position:absolute;
                top:0;
                left:0;
                z-index:1;
            }
            
            .card--product .product_variant_images img.hovered {opacity: 1; z-index: 2;}
            .card--product .product_variant_images.media--square {
              grid-row-end: 3;
            }
            .card--product .product_variant_images.media--square img {
              display: block; 
              max-width: 100%; 
              top: 0; 
              left: 0; 
              height: 100%; 
              width: 100%; 
              object-fit: cover; 
              object-position: center; 
              position:absolute;
            }

            .card--product .product_variant_images img.hovered{opacity:1;}
            
            .card--product .product_variant_images:hover img:nth-child(2){opacity:1;}
            .card--product .product_variant_images:hover img:nth-child(1):not(:only-child){opacity:0;}
            .card--product .product_variant_images:hover img:nth-child(1):only-child{transform: scale(1.05); transition: all 0.25s ease-in-out;}
            
          </style>
          <div class="product_variant_images media media--square">
            <a href="/products/cnn-logo-embroidered-hat" class="full-unstyled-link">
  
            
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF.jpg?v=1655922037" alt="CNN Logo Embroidered Hat-0" data-media-id="template--16673570390234__1655814630c6ce1f28-37263952347354">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RO.jpg?v=1655922037" alt="CNN Logo Embroidered Hat-1" data-media-id="template--16673570390234__1655814630c6ce1f28-37263952380122">
                
            
                <img loading="eager" src="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF.jpg?v=1655922037" alt="CNN Logo Embroidered Hat-2" data-media-id="template--16673570390234__1655814630c6ce1f28-37263952445658">
                
            
            </a>
          </div>
        
    
    
    
    
      
    
  

    </div>
  </div>
  <!--</a>-->

  <div class="card-information">
    <div class="card-information__wrapper"><h3 class="card-information__text h5">
          <a href="/products/cnn-logo-embroidered-hat" class="full-unstyled-link">
            <!--CNN Logo Embroidered Hat-->
            
            CNN Logo Embroidered Hat
          
          </a>
        </h3>

          
          <div class="card__swatches">
                    
                      <label class="color__swatch black" for="template--16673570390234__1655814630c6ce1f28-Color-0">
                        <img src="//snowdam.s3.us-east-2.amazonaws.com/swatch/black.png" alt="Black" onerror="this.onerror=null;this.src='//snowdam.s3.us-east-2.amazonaws.com/swatch/broken-image.jpg';">
                      </label>
                      <script>
                        jQuery(document).ready(function ($){
                          function collectionSwatches(){
                            $("label.color__swatch.black").hover(
                              
                              function (){
                                $(this).closest(".card-wrapper").find('[src*=Black]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=black]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=BLACK]').first('img').addClass('hovered');
                              },
                              function (){
                                  $(this).closest(".card-wrapper").find('[src*=Black]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=black]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=BLACK]').first('img').removeClass('hovered');
                              }
                            )
                          }
                          collectionSwatches();
                          if (Shopify.designMode){
                            document.addEventListener('shopify:section:load', function(){
                            if(event.detail.sectionId === 'template--16673570390234__1655814630c6ce1f28') {
                              collectionSwatches();
                            }
                          });
                        }
                        });
                      </script>
                    
                  

                    
                      <label class="color__swatch red" for="template--16673570390234__1655814630c6ce1f28-Color-1">
                        <img src="//snowdam.s3.us-east-2.amazonaws.com/swatch/red.png" alt="Red" onerror="this.onerror=null;this.src='//snowdam.s3.us-east-2.amazonaws.com/swatch/broken-image.jpg';">
                      </label>
                      <script>
                        jQuery(document).ready(function ($){
                          function collectionSwatches(){
                            $("label.color__swatch.red").hover(
                              
                              function (){
                                $(this).closest(".card-wrapper").find('[src*=Red]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=red]').first('img').addClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=RED]').first('img').addClass('hovered');
                              },
                              function (){
                                  $(this).closest(".card-wrapper").find('[src*=Red]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=red]').first('img').removeClass('hovered');
                                  $(this).closest(".card-wrapper").find('[src*=RED]').first('img').removeClass('hovered');
                              }
                            )
                          }
                          collectionSwatches();
                          if (Shopify.designMode){
                            document.addEventListener('shopify:section:load', function(){
                            if(event.detail.sectionId === 'template--16673570390234__1655814630c6ce1f28') {
                              collectionSwatches();
                            }
                          });
                        }
                        });
                      </script>
                    
                  
</div>
      

      

      
<div class="price ">
  <div><div class="price__regular">
      <span class="visually-hidden visually-hidden--inline">Regular price</span>
      <span class="price-item price-item--regular">$29.95</span>
    </div>
    <div class="price__sale">
        <span class="visually-hidden visually-hidden--inline">Regular price</span>
        <span><s class="price-item price-item--regular"></s></span><span class="visually-hidden visually-hidden--inline">Sale price</span>
      <span class="price-item price-item--sale price-item--last">$29.95</span>
    </div>
    <small class="unit-price caption hidden">
      <span class="visually-hidden">Unit price</span>
      <span class="price-item price-item--last">
        <span></span>
        <span aria-hidden="true">/</span>
        <span class="visually-hidden">&nbsp;per&nbsp;</span>
        <span>
        </span>
      </span>
    </small>
  </div></div>


    </div>
  </div>
</div>

      </div>
  </div>
  
<style data-shopify>
.carousel-arrow-container {
    position: absolute; 
    top: 35%; 
    transform: translateY(-50%); 
    width: calc(100% - 3rem);
    
    display: block;
    
}
.carousel-prev-template--16673570390234__1655814630c6ce1f28 svg, .carousel-next-template--16673570390234__1655814630c6ce1f28 svg {
    display: block;
     height: 100%;
      width: 100%;
       margin: auto;
       fill:#0c0c0c;
       padding: 0;
       max-height: 20px;
    }
.carousel-prev-template--16673570390234__1655814630c6ce1f28, .carousel-next-template--16673570390234__1655814630c6ce1f28 {
    position: absolute; width: 30px;
    height: 30px;
    border: 1px solid rgba(0,0,0,0);
    border-radius: 50px;
    box-shadow: none;
    padding: 0;
    background: rgba(0,0,0,0);
    color: #0c0c0c;
}
.carousel-prev-template--16673570390234__1655814630c6ce1f28 {left: -10px;}
.carousel-next-template--16673570390234__1655814630c6ce1f28 {right: -10px}
.carousel-prev-template--16673570390234__1655814630c6ce1f28 svg {transform: rotate(180deg);}
.carousel-prev-template--16673570390234__1655814630c6ce1f28:hover, .carousel-next-template--16673570390234__1655814630c6ce1f28:hover {cursor: pointer;}



@media screen and (min-width: 768px) {
    .carousel-arrow-container {
        position: absolute; 
        top: 40%; 
        transform: translateY(-50%); 
        width: calc(100% - 10rem);
        
            display: block;
        
    }
    .carousel-prev-template--16673570390234__1655814630c6ce1f28 {left: -25px;}
.carousel-next-template--16673570390234__1655814630c6ce1f28 {right: -25px}
}
</style>
<div class="carousel-arrow-container">
    <button class="carousel-prev-template--16673570390234__1655814630c6ce1f28 carousel-arrow" aria-label="button" name="previous">
        
        
        <?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    y="0px" viewBox="0 0 56.5 100" xml:space="preserve">
    <g id="VddS2q.tif">
        <g>
            <path d="M5.5,98.6c-0.1-0.1-0.3-0.2-0.4-0.2c-3.9-1.3-5-5.7-2.1-8.6C8.6,84,14.2,78.4,19.7,72.7c7.1-7.3,14.3-14.5,21.4-21.8
			c0.2-0.2,0.4-0.4,0.6-0.7c-0.3-0.3-0.5-0.6-0.8-0.9c-12.6-13-25.2-26-37.7-39c-1-1-1.8-2.1-1.8-3.6c-0.1-2.2,1-4.2,2.9-5.1
			c2-0.9,4.2-0.6,5.8,1c3.4,3.4,6.7,6.9,10.1,10.4c10.7,11.1,21.4,22.2,32.1,33.2c1,1,1.7,2.1,1.7,3.5c0.1,1.6-0.5,3-1.7,4.2
			C41.8,64.8,31.2,75.5,20.7,86.3c-3.1,3.1-6.1,6.2-9.2,9.4c-1.2,1.2-2.3,2.4-4,2.9C6.9,98.6,6.2,98.6,5.5,98.6z" />
        </g>
    </g>
</svg>
        
        
    </button>
    <button class="carousel-next-template--16673570390234__1655814630c6ce1f28 carousel-arrow" aria-label="button" name="next">
        
        
        <?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    y="0px" viewBox="0 0 56.5 100" xml:space="preserve">
    <g id="VddS2q.tif">
        <g>
            <path d="M5.5,98.6c-0.1-0.1-0.3-0.2-0.4-0.2c-3.9-1.3-5-5.7-2.1-8.6C8.6,84,14.2,78.4,19.7,72.7c7.1-7.3,14.3-14.5,21.4-21.8
			c0.2-0.2,0.4-0.4,0.6-0.7c-0.3-0.3-0.5-0.6-0.8-0.9c-12.6-13-25.2-26-37.7-39c-1-1-1.8-2.1-1.8-3.6c-0.1-2.2,1-4.2,2.9-5.1
			c2-0.9,4.2-0.6,5.8,1c3.4,3.4,6.7,6.9,10.1,10.4c10.7,11.1,21.4,22.2,32.1,33.2c1,1,1.7,2.1,1.7,3.5c0.1,1.6-0.5,3-1.7,4.2
			C41.8,64.8,31.2,75.5,20.7,86.3c-3.1,3.1-6.1,6.2-9.2,9.4c-1.2,1.2-2.3,2.4-4,2.9C6.9,98.6,6.2,98.6,5.5,98.6z" />
        </g>
    </g>
</svg>
        
        
    </button>
</div>

  

  </div>
  


<style data-shopify>
  .collection-carousel-template--16673570390234__1655814630c6ce1f28 .title-wrapper-with-link .title{width:100%; color:#cc0000; text-align:center;}
  .collection-carousel-template--16673570390234__1655814630c6ce1f28 .product-carousel-template--16673570390234__1655814630c6ce1f28 .slick-arrow-custom{width:px; height:px; background:; color:; font-size:0px;}
  .collection-carousel-template--16673570390234__1655814630c6ce1f28 .carousel-arrow-container{top:40%;}
  
  .collection-carousel-template--16673570390234__1655814630c6ce1f28 .product-carousel-template--16673570390234__1655814630c6ce1f28 .slick-prev-custom:after{content: "<"; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);}
  .collection-carousel-template--16673570390234__1655814630c6ce1f28 .product-carousel-template--16673570390234__1655814630c6ce1f28 .slick-next-custom:after{content: ">"; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);}
  
  .collection-carousel-template--16673570390234__1655814630c6ce1f28.carousel{padding-top:20px; padding-bottom:30px;}
  .collection-template--16673570390234__1655814630c6ce1f28.default-featured-collection{padding-top:20px; padding-bottom:30px;}
  .collection-carousel-template--16673570390234__1655814630c6ce1f28.carousel-with-background{padding-top:20px; padding-bottom:30px; background:#ffffff;}
  .collection-carousel-template--16673570390234__1655814630c6ce1f28.carousel-with-background .title{color:#cc0000;}
  .collection-carousel-template--16673570390234__1655814630c6ce1f28.carousel-with-background .collection-description{color:#000000;}
  .collection-carousel-template--16673570390234__1655814630c6ce1f28.carousel-with-background .button{margin-bottom:10px;}
  .collection.carousel-with-background .product-carousel-template--16673570390234__1655814630c6ce1f28 .slick-slide div.carousel__slide{border:1px solid #eeeeee; background:#ffffff;}
  .collection-template--16673570390234__1655814630c6ce1f28 .card__swatches label.color__swatch, .product-carousel-template--16673570390234__1655814630c6ce1f28 .card__swatches label.color__swatch, .product-carousel-template--16673570390234__1655814630c6ce1f28 .card__swatches label.color__swatch{
    height:15px;
    width:15px;
    border:1px solid #ffffff;
    
    border-radius:100%;
    
  }
  .collection-template--16673570390234__1655814630c6ce1f28 .card__swatches label.color__swatch img, .product-carousel-template--16673570390234__1655814630c6ce1f28 .card__swatches label.color__swatch img{
    border:0px solid #ffffff;
    
    border-radius:100%;
    
  }
  .product-carousel-template--16673570390234__1655814630c6ce1f28 .slick-autoplay-toggle-button {display: none;}
  .product-carousel-template--16673570390234__1655814630c6ce1f28 .carousel__slide {margin: 0 2px;}

  .collection-carousel-template--16673570390234__1655814630c6ce1f28 .carousel-view-more-above {
     margin-bottom: 5rem;
  }
  @media screen and (min-width: 768px) {
    .product-carousel-template--16673570390234__1655814630c6ce1f28 .carousel__slide {margin: 0 5px;}
    .collection-carousel-template--16673570390234__1655814630c6ce1f28.carousel{padding-top:0px; padding-bottom:40px;}
    .collection-template--16673570390234__1655814630c6ce1f28.default-featured-collection{padding-top:0px; padding-bottom:40px;}
    .collection-carousel-template--16673570390234__1655814630c6ce1f28.carousel-with-background{padding-top:0px; padding-bottom:40px;}
      .collection-carousel-template--16673570390234__1655814630c6ce1f28.carousel-with-background{background:#ffffff;}
    
  }
  @media screen and (max-width:768px){
    .collection-carousel-template--16673570390234__1655814630c6ce1f28 .carousel-arrow-container{top:35%;}
  }
</style>

<script>
jQuery(document).ready(function ($) {
  function productCarousel() {
    $('.product-carousel-template--16673570390234__1655814630c6ce1f28').slick({
      lazyLoad: 'ondemand',
      prevArrow: $(".carousel-prev-template--16673570390234__1655814630c6ce1f28"),
      nextArrow: $(".carousel-next-template--16673570390234__1655814630c6ce1f28"),
      adaptiveHeight: false
    });
    $('.product-carousel-template--16673570390234__1655814630c6ce1f28 .draggable').on('afterChange', function (event, slick, currentSlide) {
      if(currentSlide === 2) {
          $('.product-carousel-template--16673570390234__1655814630c6ce1f28 .slick-next').addClass('hidden');
      }
      else {
          $('.product-carousel-template--16673570390234__1655814630c6ce1f28 .slick-next').removeClass('hidden');
      }
      if(currentSlide === 0) {
          $('.product-carousel-template--16673570390234__1655814630c6ce1f28 .slick-prev').addClass('hidden');
      }
      else {
          $('.product-carousel-template--16673570390234__1655814630c6ce1f28 .slick-prev').removeClass('hidden');
      }  
    });
  } productCarousel();

  // Rerun Scripts in Shopify Theme Editor
  if (Shopify.designMode) {
      document.addEventListener('shopify:section:load', function () {
          if (event.detail.sectionId === 'template--16673570390234__1655814630c6ce1f28') {
              productCarousel();
          }
      });
  }
});
</script> 

</section><div id="shopify-section-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372" class="shopify-section snow-slider-section"><link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/snow-slides.scss.css?v=9225309428350941301667402762" media="print" onload="this.media='all'">
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/snow-slides.scss.css?v=9225309428350941301667402762" rel="stylesheet" type="text/css" media="all" /></noscript>






<div class=" page-width snow-slides--template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372">
    
    
    <h2 class="title">
        Shop Shows
    </h2>
    
    
    
</div>




<div id="ssc-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372" class=" page-width snow-slides--template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372">
    

        <div class="snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372" data-slick='{
        "arrows": true,
        "dots": false, 
        "autoplay": false,
        "autoplaySpeed": 3000,
        "speed": 300,
        "pauseOnHover": true,
        "slidesToShow": 3,
        "centerMode": true,
        "fade": false,
        "responsive":[
            {
                "breakpoint": 768,
                "settings":{
                    "arrows": true,
                    "dots": false, 
                    "slidesToShow": 3
                }
            }
        ]
    }'>
            
            
            <div data-index="0" class="snow-slide snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab" >
                <style>
                    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab {display: block !important;}
                        /* Video Control */
                    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab:hover .video-control {display: block;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content {width:25%; text-align:left;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content {position: relative; z-index: 4; text-align:left;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content {position: relative; z-index: 4;}
                    
                    /* Content */
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.top-left{top:0px; left:0;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.top-center{top:0px; left:50%; transform:translateX(-50%);}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.top-right{top:0px; right:0;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.bottom-left{bottom:0px; left:0;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.bottom-center{bottom:0px; left:50%; transform:translateX(-50%);}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.bottom-right{bottom:0px; right:0;}
                    /* Text */
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content p.snow-slide-pre-title {font-size:1vw; color:#cccccc;} 
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content p.snow-slide-title,
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content p.snow-slide-title {font-size:2.5vw; color:#ffffff;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content .snow-description,
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content .snow-description {font-size:1vw; color:#ffffff;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content button,
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; border-radius:0px; font-size:1.5vw; margin:5px 0 0 0;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content button:hover, .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content button:hover {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    /* Mobile */
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content {text-align: left;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content p.snow-slide-pre-title {font-size:2vw; color:#cccccc;} 
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content p.snow-slide-title {font-size:4vw; color:#ffffff;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content .snow-description {font-size:2vw; color:#ffffff;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; border-radius:0px; font-size:1vw; margin:5px 0 0 0;}
                    
                    /* Fix issue where snow slides mobile alignment stops at 766 */
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .mobile .snow-slide-content {width:50%; text-align:left;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .mobile .snow-slide-content p.snow-slide-pre-title {font-size: 2vw;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .mobile .snow-slide-content p.snow-slide-title {font-size: 4vw;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .mobile .snow-slide-content .snow-description {font-size: 2vw; color:#ffffff;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .mobile .snow-slide-content button {font-size: 1vw;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .slide-logo {
                        max-width: 150px;
                        margin: 20px 0;
                        display: inline-block;
                    }
                    /*.snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab:hover .video-control {display: block;}*/
                    @media screen and (max-width:767px) {
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab img.hovered {display: none;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab:hover img.hovered {display: none;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content {width:50%; text-align:left;} 
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content {text-align: left;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .slide-logo {max-width: 120px;margin: 10px 0;}
                        
                        /* Content */
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.top-left{top:0px; left:0;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.top-center{top:0px; left:50%; transform:translateX(-50%);}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.top-right{top:0px; right:0;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.bottom-left{bottom:0px; left:0;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.bottom-center{bottom:0px; left:50%; transform:translateX(-50%);}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-content.bottom-right{bottom:0px; right:0;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content p.snow-slide-pre-title {font-size: 2vw;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content p.snow-slide-title,
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content p.snow-slide-title {font-size: 4vw;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content .snow-description,
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content .snow-description {font-size: 2vw; color:#ffffff;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content button,
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content button {font-size: 1vw;}
                    }
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content button,
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content button,
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content button {padding: 5px 15px;}
                    
                    /*Audio Player Styles*/
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .icon.icon-speaker {display: block; margin-bottom: 0 !important;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-audio-button {
                        padding: 5px 5px !important;
                        border-radius: 100px !important;
                        background-color: #ffffff !important;
                        width: 4rem;
                        height: 4rem;
                    }
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .icon.icon-speaker path {
                        stroke: #000000 !important;
                        fill: #000000 !important;
                    }
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .icon.icon-speaker path:last-child {
                        stroke: #000000 !important;
                        fill: none !important;
                    }

                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-audio {display: none;}

                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-audio-description-container {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                       
                            flex-flow: row wrap;
                            
                            justify-content: flex-start;
                            
                        
                    }
                    
                    @media screen and (max-width: 768px) {
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content p.snow-slide-pre-title {color:#cccccc;} 
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content p.snow-slide-title,
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content p.snow-slide-title {color:#ffffff;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .mobile .snow-slide-content .snow-description,
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content .snow-description {font-size:2vw; color:#ffffff;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content button,
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; font-size: 1vw;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content p.snow-slide-pre-title { color:#cccccc;} 
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content p.snow-slide-title {color:#ffffff;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content .snow-description {color:#ffffff !important;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .outer-mobile-content button,
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content button,
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-outer-content button {padding: 5px 15px;}
                    
                        /*Audio Player Styles*/
                        .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-audio-description-container {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                       
                            flex-flow: row wrap;
                            
                            justify-content: flex-start;
                            
                        
                    }
                    }
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab a.full-link:hover ~ .snow-slide-outer-content button, .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab a.full-link ~ .snow-slide-outer-content:hover button {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab a.full-link:hover ~ .snow-slide-container button, .snow-slide-0ca0c2d2-f326-4353-b944-814f484edbab .snow-slide-container .snow-slide-content button:hover {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    
                    /* end media 768px */
                </style>
                
                <a class="full-link" href="/collections/official-anderson-cooper-360-collection"
                    aria-label="Link to /collections/official-anderson-cooper-360-collection"></a>
                

                
                    
                    
                    
                    <img class="desktop" src="//store.cnn.com/cdn/shop/files/Anderson_Cooper_Show_Tile_2_1_1.png?v=1666110619"
                        alt="-0ca0c2d2-f326-4353-b944-814f484edbab">
                    

                    <img class="mobile"
                        src="//store.cnn.com/cdn/shop/files/Anderson_Cooper_Show_Tile_2_1_1.png?v=1666110619"
                        alt="-0ca0c2d2-f326-4353-b944-814f484edbab">
                    

                    
                        
                        <div class="snow-slide-shade"></div>
                        
                        <div class="snow-slide-container">
                            
                            <div class="desktop">
                                <div class="snow-slide-content centered">
                                    
                                    
                                    <p class="snow-slide-pre-title">
                                        
                                    </p>
                                    
                                    
                                    <p class="snow-slide-title">
                                        
                                    </p>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                            
                            <div class="mobile">
                                <div class="snow-slide-content centered">
                                    
                                    
                                    <p class="snow-slide-pre-title">
                                        
                                    </p>
                                    
                                    
                                    <p class="snow-slide-title">
                                        
                                    </p>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                            
                            
                        </div>
                        

                    

                

            </div>
            
            
            <div data-index="1" class="snow-slide snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f" >
                <style>
                    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f {display: block !important;}
                        /* Video Control */
                    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f:hover .video-control {display: block;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content {width:25%; text-align:left;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content {position: relative; z-index: 4; text-align:left;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content {position: relative; z-index: 4;}
                    
                    /* Content */
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.top-left{top:0px; left:0;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.top-center{top:0px; left:50%; transform:translateX(-50%);}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.top-right{top:0px; right:0;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.bottom-left{bottom:0px; left:0;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.bottom-center{bottom:0px; left:50%; transform:translateX(-50%);}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.bottom-right{bottom:0px; right:0;}
                    /* Text */
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content p.snow-slide-pre-title {font-size:1vw; color:#cccccc;} 
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content p.snow-slide-title,
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content p.snow-slide-title {font-size:2.5vw; color:#ffffff;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content .snow-description,
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content .snow-description {font-size:1vw; color:#ffffff;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content button,
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; border-radius:0px; font-size:1.5vw; margin:5px 0 0 0;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content button:hover, .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content button:hover {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    /* Mobile */
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content {text-align: left;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content p.snow-slide-pre-title {font-size:2vw; color:#cccccc;} 
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content p.snow-slide-title {font-size:4vw; color:#ffffff;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content .snow-description {font-size:2vw; color:#ffffff;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; border-radius:0px; font-size:1vw; margin:5px 0 0 0;}
                    
                    /* Fix issue where snow slides mobile alignment stops at 766 */
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .mobile .snow-slide-content {width:50%; text-align:left;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .mobile .snow-slide-content p.snow-slide-pre-title {font-size: 2vw;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .mobile .snow-slide-content p.snow-slide-title {font-size: 4vw;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .mobile .snow-slide-content .snow-description {font-size: 2vw; color:#ffffff;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .mobile .snow-slide-content button {font-size: 1vw;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .slide-logo {
                        max-width: 150px;
                        margin: 20px 0;
                        display: inline-block;
                    }
                    /*.snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f:hover .video-control {display: block;}*/
                    @media screen and (max-width:767px) {
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f img.hovered {display: none;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f:hover img.hovered {display: none;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content {width:50%; text-align:left;} 
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content {text-align: left;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .slide-logo {max-width: 120px;margin: 10px 0;}
                        
                        /* Content */
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.top-left{top:0px; left:0;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.top-center{top:0px; left:50%; transform:translateX(-50%);}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.top-right{top:0px; right:0;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.bottom-left{bottom:0px; left:0;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.bottom-center{bottom:0px; left:50%; transform:translateX(-50%);}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-content.bottom-right{bottom:0px; right:0;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content p.snow-slide-pre-title {font-size: 2vw;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content p.snow-slide-title,
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content p.snow-slide-title {font-size: 4vw;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content .snow-description,
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content .snow-description {font-size: 2vw; color:#ffffff;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content button,
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content button {font-size: 1vw;}
                    }
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content button,
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content button,
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content button {padding: 5px 15px;}
                    
                    /*Audio Player Styles*/
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .icon.icon-speaker {display: block; margin-bottom: 0 !important;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-audio-button {
                        padding: 5px 5px !important;
                        border-radius: 100px !important;
                        background-color: #ffffff !important;
                        width: 4rem;
                        height: 4rem;
                    }
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .icon.icon-speaker path {
                        stroke: #000000 !important;
                        fill: #000000 !important;
                    }
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .icon.icon-speaker path:last-child {
                        stroke: #000000 !important;
                        fill: none !important;
                    }

                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-audio {display: none;}

                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-audio-description-container {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                       
                            flex-flow: row wrap;
                            
                            justify-content: flex-start;
                            
                        
                    }
                    
                    @media screen and (max-width: 768px) {
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content p.snow-slide-pre-title {color:#cccccc;} 
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content p.snow-slide-title,
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content p.snow-slide-title {color:#ffffff;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .mobile .snow-slide-content .snow-description,
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content .snow-description {font-size:2vw; color:#ffffff;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content button,
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; font-size: 1vw;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content p.snow-slide-pre-title { color:#cccccc;} 
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content p.snow-slide-title {color:#ffffff;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content .snow-description {color:#ffffff !important;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .outer-mobile-content button,
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content button,
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-outer-content button {padding: 5px 15px;}
                    
                        /*Audio Player Styles*/
                        .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-audio-description-container {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                       
                            flex-flow: row wrap;
                            
                            justify-content: flex-start;
                            
                        
                    }
                    }
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f a.full-link:hover ~ .snow-slide-outer-content button, .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f a.full-link ~ .snow-slide-outer-content:hover button {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f a.full-link:hover ~ .snow-slide-container button, .snow-slide-4bfde25b-2ff6-4a53-adca-6f4cb678793f .snow-slide-container .snow-slide-content button:hover {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    
                    /* end media 768px */
                </style>
                
                <a class="full-link" href="/collections/the-official-situation-room-with-wolf-blitzer-collection"
                    aria-label="Link to /collections/the-official-situation-room-with-wolf-blitzer-collection"></a>
                

                
                    
                    
                    
                    <img class="desktop" src="//store.cnn.com/cdn/shop/files/Situation_Room_Show_Tile_2_1.png?v=1677868965"
                        alt="-4bfde25b-2ff6-4a53-adca-6f4cb678793f">
                    

                    <img class="mobile"
                        src="//store.cnn.com/cdn/shop/files/Situation_Room_Show_Tile_2_1.png?v=1677868965"
                        alt="-4bfde25b-2ff6-4a53-adca-6f4cb678793f">
                    

                    
                        
                        <div class="snow-slide-shade"></div>
                        
                        <div class="snow-slide-container">
                            
                            <div class="desktop">
                                <div class="snow-slide-content centered">
                                    
                                    
                                    <p class="snow-slide-pre-title">
                                        
                                    </p>
                                    
                                    
                                    <p class="snow-slide-title">
                                        
                                    </p>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                            
                            <div class="mobile">
                                <div class="snow-slide-content centered">
                                    
                                    
                                    <p class="snow-slide-pre-title">
                                        
                                    </p>
                                    
                                    
                                    <p class="snow-slide-title">
                                        
                                    </p>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                            
                            
                        </div>
                        

                    

                

            </div>
            
            
            <div data-index="2" class="snow-slide snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1" >
                <style>
                    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 {display: block !important;}
                        /* Video Control */
                    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1:hover .video-control {display: block;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content {width:25%; text-align:left;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content {position: relative; z-index: 4; text-align:left;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content {position: relative; z-index: 4;}
                    
                    /* Content */
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.top-left{top:0px; left:0;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.top-center{top:0px; left:50%; transform:translateX(-50%);}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.top-right{top:0px; right:0;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.bottom-left{bottom:0px; left:0;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.bottom-center{bottom:0px; left:50%; transform:translateX(-50%);}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.bottom-right{bottom:0px; right:0;}
                    /* Text */
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content p.snow-slide-pre-title {font-size:1vw; color:#cccccc;} 
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content p.snow-slide-title,
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content p.snow-slide-title {font-size:2.5vw; color:#ffffff;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content .snow-description,
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content .snow-description {font-size:1vw; color:#ffffff;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content button,
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; border-radius:0px; font-size:1.5vw; margin:5px 0 0 0;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content button:hover, .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content button:hover {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    /* Mobile */
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content {text-align: left;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content p.snow-slide-pre-title {font-size:2vw; color:#cccccc;} 
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content p.snow-slide-title {font-size:4vw; color:#ffffff;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content .snow-description {font-size:2vw; color:#ffffff;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; border-radius:0px; font-size:1vw; margin:5px 0 0 0;}
                    
                    /* Fix issue where snow slides mobile alignment stops at 766 */
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .mobile .snow-slide-content {width:50%; text-align:left;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .mobile .snow-slide-content p.snow-slide-pre-title {font-size: 2vw;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .mobile .snow-slide-content p.snow-slide-title {font-size: 4vw;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .mobile .snow-slide-content .snow-description {font-size: 2vw; color:#ffffff;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .mobile .snow-slide-content button {font-size: 1vw;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .slide-logo {
                        max-width: 150px;
                        margin: 20px 0;
                        display: inline-block;
                    }
                    /*.snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1:hover .video-control {display: block;}*/
                    @media screen and (max-width:767px) {
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 img.hovered {display: none;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1:hover img.hovered {display: none;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content {width:50%; text-align:left;} 
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content {text-align: left;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .slide-logo {max-width: 120px;margin: 10px 0;}
                        
                        /* Content */
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.top-left{top:0px; left:0;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.top-center{top:0px; left:50%; transform:translateX(-50%);}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.top-right{top:0px; right:0;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.bottom-left{bottom:0px; left:0;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.bottom-center{bottom:0px; left:50%; transform:translateX(-50%);}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-content.bottom-right{bottom:0px; right:0;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content p.snow-slide-pre-title {font-size: 2vw;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content p.snow-slide-title,
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content p.snow-slide-title {font-size: 4vw;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content .snow-description,
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content .snow-description {font-size: 2vw; color:#ffffff;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content button,
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content button {font-size: 1vw;}
                    }
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content button,
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content button,
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content button {padding: 5px 15px;}
                    
                    /*Audio Player Styles*/
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .icon.icon-speaker {display: block; margin-bottom: 0 !important;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-audio-button {
                        padding: 5px 5px !important;
                        border-radius: 100px !important;
                        background-color: #ffffff !important;
                        width: 4rem;
                        height: 4rem;
                    }
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .icon.icon-speaker path {
                        stroke: #000000 !important;
                        fill: #000000 !important;
                    }
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .icon.icon-speaker path:last-child {
                        stroke: #000000 !important;
                        fill: none !important;
                    }

                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-audio {display: none;}

                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-audio-description-container {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                       
                            flex-flow: row wrap;
                            
                            justify-content: flex-start;
                            
                        
                    }
                    
                    @media screen and (max-width: 768px) {
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content p.snow-slide-pre-title {color:#cccccc;} 
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content p.snow-slide-title,
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content p.snow-slide-title {color:#ffffff;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .mobile .snow-slide-content .snow-description,
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content .snow-description {font-size:2vw; color:#ffffff;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content button,
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; font-size: 1vw;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content p.snow-slide-pre-title { color:#cccccc;} 
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content p.snow-slide-title {color:#ffffff;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content .snow-description {color:#ffffff !important;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .outer-mobile-content button,
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content button,
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-outer-content button {padding: 5px 15px;}
                    
                        /*Audio Player Styles*/
                        .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-audio-description-container {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                       
                            flex-flow: row wrap;
                            
                            justify-content: flex-start;
                            
                        
                    }
                    }
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 a.full-link:hover ~ .snow-slide-outer-content button, .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 a.full-link ~ .snow-slide-outer-content:hover button {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 a.full-link:hover ~ .snow-slide-container button, .snow-slide-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1 .snow-slide-container .snow-slide-content button:hover {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    
                    /* end media 768px */
                </style>
                
                <a class="full-link" href="/collections/the-lead-with-jake-tapper"
                    aria-label="Link to /collections/the-lead-with-jake-tapper"></a>
                

                
                    
                    
                    
                    <img class="desktop" src="//store.cnn.com/cdn/shop/files/The_Lead_Show_Tile_1.png?v=1677865920"
                        alt="-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1">
                    

                    <img class="mobile"
                        src="//store.cnn.com/cdn/shop/files/The_Lead_Show_Tile_1.png?v=1677865920"
                        alt="-template--16121508528346__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372-1666103168fe6b71ce-1">
                    

                    
                        
                        <div class="snow-slide-shade"></div>
                        
                        <div class="snow-slide-container">
                            
                            <div class="desktop">
                                <div class="snow-slide-content centered">
                                    
                                    
                                    <p class="snow-slide-pre-title">
                                        
                                    </p>
                                    
                                    
                                    <p class="snow-slide-title">
                                        
                                    </p>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                            
                            <div class="mobile">
                                <div class="snow-slide-content centered">
                                    
                                    
                                    <p class="snow-slide-pre-title">
                                        
                                    </p>
                                    
                                    
                                    <p class="snow-slide-title">
                                        
                                    </p>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                            
                            
                        </div>
                        

                    

                

            </div>
            
            
            <div data-index="3" class="snow-slide snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a" >
                <style>
                    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a {display: block !important;}
                        /* Video Control */
                    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a:hover .video-control {display: block;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content {width:25%; text-align:left;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content {position: relative; z-index: 4; text-align:left;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content {position: relative; z-index: 4;}
                    
                    /* Content */
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.top-left{top:0px; left:0;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.top-center{top:0px; left:50%; transform:translateX(-50%);}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.top-right{top:0px; right:0;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.bottom-left{bottom:0px; left:0;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.bottom-center{bottom:0px; left:50%; transform:translateX(-50%);}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.bottom-right{bottom:0px; right:0;}
                    /* Text */
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content p.snow-slide-pre-title {font-size:1vw; color:#cccccc;} 
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content p.snow-slide-title,
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content p.snow-slide-title {font-size:2.5vw; color:#ffffff;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content .snow-description,
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content .snow-description {font-size:1vw; color:#ffffff;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content button,
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; border-radius:0px; font-size:1.5vw; margin:5px 0 0 0;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content button:hover, .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content button:hover {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    /* Mobile */
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content {text-align: left;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content p.snow-slide-pre-title {font-size:2vw; color:#cccccc;} 
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content p.snow-slide-title {font-size:4vw; color:#ffffff;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content .snow-description {font-size:2vw; color:#ffffff;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; border-radius:0px; font-size:1vw; margin:5px 0 0 0;}
                    
                    /* Fix issue where snow slides mobile alignment stops at 766 */
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .mobile .snow-slide-content {width:50%; text-align:left;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .mobile .snow-slide-content p.snow-slide-pre-title {font-size: 2vw;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .mobile .snow-slide-content p.snow-slide-title {font-size: 4vw;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .mobile .snow-slide-content .snow-description {font-size: 2vw; color:#ffffff;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .mobile .snow-slide-content button {font-size: 1vw;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .slide-logo {
                        max-width: 150px;
                        margin: 20px 0;
                        display: inline-block;
                    }
                    /*.snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a:hover .video-control {display: block;}*/
                    @media screen and (max-width:767px) {
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a img.hovered {display: none;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a:hover img.hovered {display: none;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content {width:50%; text-align:left;} 
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content {text-align: left;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .slide-logo {max-width: 120px;margin: 10px 0;}
                        
                        /* Content */
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.top-left{top:0px; left:0;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.top-center{top:0px; left:50%; transform:translateX(-50%);}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.top-right{top:0px; right:0;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.bottom-left{bottom:0px; left:0;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.bottom-center{bottom:0px; left:50%; transform:translateX(-50%);}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-content.bottom-right{bottom:0px; right:0;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content p.snow-slide-pre-title {font-size: 2vw;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content p.snow-slide-title,
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content p.snow-slide-title {font-size: 4vw;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content .snow-description,
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content .snow-description {font-size: 2vw; color:#ffffff;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content button,
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content button {font-size: 1vw;}
                    }
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content button,
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content button,
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content button {padding: 5px 15px;}
                    
                    /*Audio Player Styles*/
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .icon.icon-speaker {display: block; margin-bottom: 0 !important;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-audio-button {
                        padding: 5px 5px !important;
                        border-radius: 100px !important;
                        background-color: #ffffff !important;
                        width: 4rem;
                        height: 4rem;
                    }
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .icon.icon-speaker path {
                        stroke: #000000 !important;
                        fill: #000000 !important;
                    }
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .icon.icon-speaker path:last-child {
                        stroke: #000000 !important;
                        fill: none !important;
                    }

                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-audio {display: none;}

                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-audio-description-container {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                       
                            flex-flow: row wrap;
                            
                            justify-content: flex-start;
                            
                        
                    }
                    
                    @media screen and (max-width: 768px) {
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content p.snow-slide-pre-title,
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content p.snow-slide-pre-title {color:#cccccc;} 
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content p.snow-slide-title,
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content p.snow-slide-title {color:#ffffff;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .mobile .snow-slide-content .snow-description,
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content .snow-description {font-size:2vw; color:#ffffff;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content button,
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000; font-size: 1vw;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content p.snow-slide-pre-title { color:#cccccc;} 
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content p.snow-slide-title {color:#ffffff;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content .snow-description {color:#ffffff !important;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content button {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .outer-mobile-content button,
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content button,
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-outer-content button {padding: 5px 15px;}
                    
                        /*Audio Player Styles*/
                        .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-audio-description-container {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                       
                            flex-flow: row wrap;
                            
                            justify-content: flex-start;
                            
                        
                    }
                    }
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a a.full-link:hover ~ .snow-slide-outer-content button, .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a a.full-link ~ .snow-slide-outer-content:hover button {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a a.full-link:hover ~ .snow-slide-container button, .snow-slide-6f4f1996-efea-4082-ae11-2da377e06d0a .snow-slide-container .snow-slide-content button:hover {border: 1px solid #cccccc; background:#cccccc; color:#000000;}
                    
                    /* end media 768px */
                </style>
                
                <a class="full-link" href="/collections/cnn"
                    aria-label="Link to /collections/cnn"></a>
                

                
                    
                    
                    
                    <img class="desktop" src="//store.cnn.com/cdn/shop/files/CNN_Tile_1_1.png?v=1666110582"
                        alt="-6f4f1996-efea-4082-ae11-2da377e06d0a">
                    

                    <img class="mobile"
                        src="//store.cnn.com/cdn/shop/files/CNN_Tile_1_1.png?v=1666110582"
                        alt="-6f4f1996-efea-4082-ae11-2da377e06d0a">
                    

                    
                        
                        <div class="snow-slide-shade"></div>
                        
                        <div class="snow-slide-container">
                            
                            <div class="desktop">
                                <div class="snow-slide-content centered">
                                    
                                    
                                    <p class="snow-slide-pre-title">
                                        
                                    </p>
                                    
                                    
                                    <p class="snow-slide-title">
                                        
                                    </p>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                            
                            <div class="mobile">
                                <div class="snow-slide-content centered">
                                    
                                    
                                    <p class="snow-slide-pre-title">
                                        
                                    </p>
                                    
                                    
                                    <p class="snow-slide-title">
                                        
                                    </p>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                            
                            
                        </div>
                        

                    

                

            </div>
            
            
        </div>

        
<div class="arrow-container">
    <button class="snow-prev-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 snow-arrow" aria-label="button">
        
        
        <?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    y="0px" viewBox="0 0 56.5 100" xml:space="preserve">
    <g id="VddS2q.tif">
        <g>
            <path d="M5.5,98.6c-0.1-0.1-0.3-0.2-0.4-0.2c-3.9-1.3-5-5.7-2.1-8.6C8.6,84,14.2,78.4,19.7,72.7c7.1-7.3,14.3-14.5,21.4-21.8
			c0.2-0.2,0.4-0.4,0.6-0.7c-0.3-0.3-0.5-0.6-0.8-0.9c-12.6-13-25.2-26-37.7-39c-1-1-1.8-2.1-1.8-3.6c-0.1-2.2,1-4.2,2.9-5.1
			c2-0.9,4.2-0.6,5.8,1c3.4,3.4,6.7,6.9,10.1,10.4c10.7,11.1,21.4,22.2,32.1,33.2c1,1,1.7,2.1,1.7,3.5c0.1,1.6-0.5,3-1.7,4.2
			C41.8,64.8,31.2,75.5,20.7,86.3c-3.1,3.1-6.1,6.2-9.2,9.4c-1.2,1.2-2.3,2.4-4,2.9C6.9,98.6,6.2,98.6,5.5,98.6z" />
        </g>
    </g>
</svg>
        
        
    </button>
    <button class="snow-next-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 snow-arrow" aria-label="button">
        
        
        <?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    y="0px" viewBox="0 0 56.5 100" xml:space="preserve">
    <g id="VddS2q.tif">
        <g>
            <path d="M5.5,98.6c-0.1-0.1-0.3-0.2-0.4-0.2c-3.9-1.3-5-5.7-2.1-8.6C8.6,84,14.2,78.4,19.7,72.7c7.1-7.3,14.3-14.5,21.4-21.8
			c0.2-0.2,0.4-0.4,0.6-0.7c-0.3-0.3-0.5-0.6-0.8-0.9c-12.6-13-25.2-26-37.7-39c-1-1-1.8-2.1-1.8-3.6c-0.1-2.2,1-4.2,2.9-5.1
			c2-0.9,4.2-0.6,5.8,1c3.4,3.4,6.7,6.9,10.1,10.4c10.7,11.1,21.4,22.2,32.1,33.2c1,1,1.7,2.1,1.7,3.5c0.1,1.6-0.5,3-1.7,4.2
			C41.8,64.8,31.2,75.5,20.7,86.3c-3.1,3.1-6.1,6.2-9.2,9.4c-1.2,1.2-2.3,2.4-4,2.9C6.9,98.6,6.2,98.6,5.5,98.6z" />
        </g>
    </g>
</svg>
        
        
    </button>
</div>


        
    </div>
    

    <style data-shopify>
    #shopify-section-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 {
        padding-top: 0px;
        padding-bottom: 0px;
        background-color: #ffffff;
        
    }
    #ssc-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372{
        background:;
        padding-top:10px;
        padding-bottom:10px;
    }

    /*** Title/Subtitle ***/
    #shopify-section-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .title {color: #cc0000;}
    #shopify-section-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .subtitle {color: #121212;}


    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-slide{
    margin:0 3px;
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-list{
    margin:0 -30px;
    }

    @media screen and (min-width: 768px) {
        .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-slide{
            margin:0 16px;
            }
        
            .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-list{
            margin:0 8px;
            }
    }

    /*** Video ***/
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .video-container-mp4 {display: block; width: 100%;}
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .video-container-mp4 ~ .placeholder-svg, .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .video-container-mp4 ~ img.desktop, .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .video-container-mp4 ~ img.mobile {display: none;}
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .youtube_video {width: 100%; height: 100%; position: absolute;}
    /* Video Control */
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .video-control {position: absolute; z-index: 4; right: 20px; bottom: 20px; display: none; background: #ffffff; color: #000000;}
    
    
    /*** Controls ***/
    .snow-prev-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372,
    .snow-next-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372{
    position:absolute;
    
    top:50%;
    
    transform:translateY(-50%);
    z-index:1;
    cursor:pointer;
    width:25px;
    }

    .snow-arrow svg {min-width: 11px;}

    .snow-prev-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-arrow:focus{
    
    top:50% !important;
    
    }

    .snow-prev-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372{ left:10px; }
    .snow-next-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372{ right:10px; }
    .snow-prev-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 svg{ transform:rotate(180deg); }

    .snow-prev-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 svg,
    .snow-next-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 svg{
    fill:#333333;
    
    }

    .snow-prev-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372:hover svg,
    .snow-next-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372:hover svg{
    fill:#cccccc;
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-dots{
    text-align:center;
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-dots li{
    margin:0 5px 0 0;
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-dots li button .slick-dot-icon:before{
    font-size:12px;
    }

    .slick-dots li button .slick-dot-icon{
    color:#333333;
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-dots li.slick-active button .slick-dot-icon:before{
    font-size:15px;
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-dots li button .slick-dot-icon:hover,
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-dots li button:focus .slick-dot-icon,
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-dots li button:focus .slick-dot-icon:before,
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-dots li.slick-active button:focus .slick-dot-icon,
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-dots li.slick-active button .slick-dot-icon,
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-dots li.slick-active button:focus .slick-dot-icon:before{
    color:#000000;
    }

    /*** Content ***/
    
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-content{
    width:100%;
    
    opacity:1;
    
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide:hover .snow-slide-content{
    
    }
    

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-outer-content{
    padding:22px 0;
    
    }
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .outer-mobile-content {
        padding:22px 17px;
    }

    /*** Animations ***/
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .slick-track{
    
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide:hover{
    
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-rollover{
    
    
    
    
    bottom:0;
    left:0;
    height:0;
    width:100%;
    
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide:hover .snow-slide-rollover{
    
    height:100%;
    
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-shade{
    
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    
    opacity:0.0;
    
    
    background:#000000;
    
    }

    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide:hover .snow-slide-shade{
    
    }

    @media screen and (max-width:768px){
        #shopify-section-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 {
            padding-top: 0px;
            padding-bottom: 0px;
        }

    

    
    .snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-shade{
    opacity:0.0;
    }
    
    
    }
    
    </style>

    <script>
        jQuery(document).ready(function ($) {
            function snowSlides() {
                $('.snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372').slick({
                    lazyLoad: 'ondemand',
                    infinite: true,
                    adaptiveHeight: false,
                    prevArrow: $(".snow-prev-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372"),
                    nextArrow: $(".snow-next-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372"),
            
        });
        function snowSlidesAudio() {
            
        }
        $(document).on('click','.snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-audio-button', function() {
            if ($(".snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372").slick("slickGetOption", "autoplay")) {
                $(".snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372").slick("slickPause"); 
            }
            $(this).fadeOut(function() {
                $(this).prev().fadeIn(function() {
                    $(this).trigger("play");
                });
                
            });
        });
        $('.snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-audio').each(function() {
            $(this).on("play", function() {
                if ($(".snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372").slick("slickGetOption", "autoplay")) {
                $(".snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372").slick("slickPause"); 
            }
            });
            $(this).on("ended", function() {
                if ($(".snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372").slick("slickGetOption", "autoplay")) {
                $(".snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372").slick("slickPlay"); 
                $(this).fadeOut(function() {
                    $(this).next().fadeIn();
                });
            }
            });
        });

        $('.snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            if ($(".snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372").slick("slickGetOption", "autoplay")) {
                $(".snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372").slick("slickPlay"); 
            }
            $('.snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-audio').each(function() {
                $(this).trigger("pause");
            });
            });
            
        $(document).on('click','.snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .video-control', function() {
            if ($(this).prev().data('state') == "play") {
                $(this).prev().data('state', 'pause');
                if ($(this).prev().hasClass("youtube_video")) {
                $(this).prev()[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
                } else {
                    $(this).prev().trigger('pause');
                }
                
                $(this).text('Play Video');
                  
            } else {
                $(this).prev().data('state', 'play');
                if ($(this).prev().hasClass("youtube_video")) {
                $(this).prev()[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
                } else {
                    $(this).prev().trigger('play');
                }
                
                $(this).text('Pause Video');
                
            }
          
        });
        $('.snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372').on('breakpoint', function() {
            $('.snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372 .snow-slide-audio').each(function() {
            $(this).trigger("pause");
            });
        $(this).find(".slick-slide:not(.slick-cloned) video, .slick-slide:not(.slick-cloned) .youtube_video").each(function() {
            $(this).data('state', 'play');
                
                $(this).next().text('Pause Video');
                
        });
    });
    }
        snowSlides();

        // Rerun Scripts in Shopify Theme Editor
        if (Shopify.designMode) {
            document.addEventListener('shopify:section:load', function () {
                if (event.detail.sectionId === 'template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372') {
                    snowSlides();
                }
            });
            document.addEventListener('shopify:section:select', function () {
                if (event.detail.sectionId === 'template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372') {
                    
                }
            });
            document.addEventListener('shopify:section:deselect', function () {
                if (event.detail.sectionId === 'template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372') {
                    
                }
            });
            document.addEventListener('shopify:block:select', function (e) {
                if (event.detail.sectionId === 'template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372') {
                    var slider = $('.snow-slides-template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372');
                    var blockId = e.detail.blockId;
                    var slide_index = $('.snow-slide-' + blockId).data('index');
                    slider.slick('slickGoTo', slide_index);
                }
            });
            document.addEventListener('shopify:block:deselect', function () {
                if (event.detail.sectionId === 'template--16673570390234__0f13d2cb-9cd3-4350-9ca7-e7b4ac6e7372') {

                }
            });
        }
});
    </script>
    

    
</div><section id="shopify-section-template--16673570390234__165478013908965a3b" class="shopify-section featured-product-section spaced-section spaced-section--full-width"><link href="//store.cnn.com/cdn/shop/t/6/assets/section-main-product.css?v=127302480069950581791667402762" rel="stylesheet" type="text/css" media="all" />
<link href="//store.cnn.com/cdn/shop/t/6/assets/section-featured-product.css?v=122737171318690349191667402762" rel="stylesheet" type="text/css" media="all" />
<link href="//store.cnn.com/cdn/shop/t/6/assets/component-accordion.css?v=149984475906394884081667402762" rel="stylesheet" type="text/css" media="all" />
<link href="//store.cnn.com/cdn/shop/t/6/assets/component-price.css?v=5328827735059554991667402762" rel="stylesheet" type="text/css" media="all" />
<link href="//store.cnn.com/cdn/shop/t/6/assets/component-rte.css?v=84043763465619332371667402762" rel="stylesheet" type="text/css" media="all" />
<link href="//store.cnn.com/cdn/shop/t/6/assets/component-loading-overlay.css?v=167310470843593579841667402762" rel="stylesheet" type="text/css" media="all" />
<link href="//store.cnn.com/cdn/shop/t/6/assets/component-info.css?v=76410568607899717781667402762" rel="stylesheet" type="text/css" media="all" />

<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-deferred-media.css?v=171180198959671422251667402762" media="print" onload="this.media='all'"><section class="spaced-section">
  <div class="page-width">
    <div class="featured-product product grid grid--1-col grid--2-col-tablet">
      <div class="grid__item product__media-wrapper">
        <a class="skip-to-content-link button visually-hidden" href="#ProductInfo-template--16673570390234__165478013908965a3b">
          Skip to product information
        </a>
        <div class="product__media-list"><div class="product__media-item" data-media-id="template--16673570390234__165478013908965a3b-29837579059418">
              

<noscript><div class="product__media media" style="padding-top: 100.0%;">
      <img
        srcset="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF_288x.jpg?v=1655922037 288w,
          //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF_576x.jpg?v=1655922037 576w,
          //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF_750x.jpg?v=1655922037 750w,
          
          
          //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF.jpg?v=1655922037 1000w"
        src="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF_1500x.jpg?v=1655922037"
        sizes="(min-width: 1600px) 960px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)"
        loading="lazy"
        width="576"
        height="576"
        alt="CNN Logo Embroidered Hat"
      >
    </div></noscript>

<modal-opener class="product__modal-opener product__modal-opener--image no-js-hidden" data-modal="#ProductModal-template--16673570390234__165478013908965a3b">
  <span class="product__media-icon motion-reduce" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66724 7.93978C4.66655 7.66364 4.88984 7.43922 5.16598 7.43853L10.6996 7.42464C10.9758 7.42395 11.2002 7.64724 11.2009 7.92339C11.2016 8.19953 10.9783 8.42395 10.7021 8.42464L5.16849 8.43852C4.89235 8.43922 4.66793 8.21592 4.66724 7.93978Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.92576 4.66463C8.2019 4.66394 8.42632 4.88723 8.42702 5.16337L8.4409 10.697C8.44159 10.9732 8.2183 11.1976 7.94215 11.1983C7.66601 11.199 7.44159 10.9757 7.4409 10.6995L7.42702 5.16588C7.42633 4.88974 7.64962 4.66532 7.92576 4.66463Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8324 3.03011C10.1255 0.323296 5.73693 0.323296 3.03011 3.03011C0.323296 5.73693 0.323296 10.1256 3.03011 12.8324C5.73693 15.5392 10.1255 15.5392 12.8324 12.8324C15.5392 10.1256 15.5392 5.73693 12.8324 3.03011ZM2.32301 2.32301C5.42035 -0.774336 10.4421 -0.774336 13.5395 2.32301C16.6101 5.39361 16.6366 10.3556 13.619 13.4588L18.2473 18.0871C18.4426 18.2824 18.4426 18.599 18.2473 18.7943C18.0521 18.9895 17.7355 18.9895 17.5402 18.7943L12.8778 14.1318C9.76383 16.6223 5.20839 16.4249 2.32301 13.5395C-0.774335 10.4421 -0.774335 5.42035 2.32301 2.32301Z" fill="currentColor"/>
</svg>
</span>

  <div class="product__media media media--transparent" style="padding-top: 100.0%;">
    <img
      srcset="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF_288x.jpg?v=1655922037 288w,
        //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF_576x.jpg?v=1655922037 576w,
        //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF_750x.jpg?v=1655922037 750w,
        
        
        //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF.jpg?v=1655922037 1000w"
      src="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF_1500x.jpg?v=1655922037"
      sizes="(min-width: 1600px) 960px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)"
      loading="lazy"
      width="576"
      height="576"
      alt="CNN Logo Embroidered Hat"
    >
  </div>
  <button class="product__media-toggle" type="button" aria-haspopup="dialog" data-media-id="29837579059418">
    <span class="visually-hidden">
        Open featured media in gallery view
</span>
  </button>
</modal-opener>
            </div><div class="product__media-item" data-media-id="template--16673570390234__165478013908965a3b-29837579124954">
                

<noscript><div class="product__media media" style="padding-top: 100.0%;">
      <img
        srcset="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF_288x.jpg?v=1655922037 288w,
          //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF_576x.jpg?v=1655922037 576w,
          //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF_750x.jpg?v=1655922037 750w,
          
          
          //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF.jpg?v=1655922037 1000w"
        src="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF_1500x.jpg?v=1655922037"
        sizes="(min-width: 1600px) 960px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)"
        loading="lazy"
        width="576"
        height="576"
        alt="CNN Logo Embroidered Hat"
      >
    </div></noscript>

<modal-opener class="product__modal-opener product__modal-opener--image no-js-hidden" data-modal="#ProductModal-template--16673570390234__165478013908965a3b">
  <span class="product__media-icon motion-reduce" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66724 7.93978C4.66655 7.66364 4.88984 7.43922 5.16598 7.43853L10.6996 7.42464C10.9758 7.42395 11.2002 7.64724 11.2009 7.92339C11.2016 8.19953 10.9783 8.42395 10.7021 8.42464L5.16849 8.43852C4.89235 8.43922 4.66793 8.21592 4.66724 7.93978Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.92576 4.66463C8.2019 4.66394 8.42632 4.88723 8.42702 5.16337L8.4409 10.697C8.44159 10.9732 8.2183 11.1976 7.94215 11.1983C7.66601 11.199 7.44159 10.9757 7.4409 10.6995L7.42702 5.16588C7.42633 4.88974 7.64962 4.66532 7.92576 4.66463Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8324 3.03011C10.1255 0.323296 5.73693 0.323296 3.03011 3.03011C0.323296 5.73693 0.323296 10.1256 3.03011 12.8324C5.73693 15.5392 10.1255 15.5392 12.8324 12.8324C15.5392 10.1256 15.5392 5.73693 12.8324 3.03011ZM2.32301 2.32301C5.42035 -0.774336 10.4421 -0.774336 13.5395 2.32301C16.6101 5.39361 16.6366 10.3556 13.619 13.4588L18.2473 18.0871C18.4426 18.2824 18.4426 18.599 18.2473 18.7943C18.0521 18.9895 17.7355 18.9895 17.5402 18.7943L12.8778 14.1318C9.76383 16.6223 5.20839 16.4249 2.32301 13.5395C-0.774335 10.4421 -0.774335 5.42035 2.32301 2.32301Z" fill="currentColor"/>
</svg>
</span>

  <div class="product__media media media--transparent" style="padding-top: 100.0%;">
    <img
      srcset="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF_288x.jpg?v=1655922037 288w,
        //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF_576x.jpg?v=1655922037 576w,
        //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF_750x.jpg?v=1655922037 750w,
        
        
        //store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF.jpg?v=1655922037 1000w"
      src="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF_1500x.jpg?v=1655922037"
      sizes="(min-width: 1600px) 960px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)"
      loading="lazy"
      width="576"
      height="576"
      alt="CNN Logo Embroidered Hat"
    >
  </div>
  <button class="product__media-toggle" type="button" aria-haspopup="dialog" data-media-id="29837579124954">
    <span class="visually-hidden">Open media 3 in gallery view
</span>
  </button>
</modal-opener>
              </div></div></div>
      <div class="product__info-wrapper grid__item">
        <div id="ProductInfo-template--16673570390234__165478013908965a3b" class="product__info-container"><h2 class="h1 product__title" >CNN Logo Embroidered Hat
</h2><div class="no-js-hidden" id="price-template--16673570390234__165478013908965a3b" role="status" >
<div class="price price--large price--show-badge">
  <div><div class="price__regular">
      <span class="visually-hidden visually-hidden--inline">Regular price</span>
      <span class="price-item price-item--regular">$29.95</span>
    </div>
    <div class="price__sale">
        <span class="visually-hidden visually-hidden--inline">Regular price</span>
        <span><s class="price-item price-item--regular"></s></span><span class="visually-hidden visually-hidden--inline">Sale price</span>
      <span class="price-item price-item--sale price-item--last">$29.95</span>
    </div>
    <small class="unit-price caption hidden">
      <span class="visually-hidden">Unit price</span>
      <span class="price-item price-item--last">
        <span></span>
        <span aria-hidden="true">/</span>
        <span class="visually-hidden">&nbsp;per&nbsp;</span>
        <span>
        </span>
      </span>
    </small>
  </div><span class="badge price__badge-sale color-accent-2">
      Sale
    </span>

    <span class="badge price__badge-sold-out color-inverse">
      Sold out
    </span></div>
</div><div class="product__tax caption rte"><a href="/policies/shipping-policy">Shipping</a> calculated at checkout.
</div><div ><form method="post" action="/cart/add" id="product_form_7675995062490" accept-charset="UTF-8" class="shopify-product-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="product" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="id" value="42906926448858">
                    <shopify-payment-terms variant-id="42906926448858" shopify-meta="{&quot;type&quot;:&quot;product&quot;,&quot;variants&quot;:[{&quot;id&quot;:42906926448858,&quot;price_per_term&quot;:&quot;$7.48&quot;,&quot;full_price&quot;:&quot;$29.95&quot;,&quot;eligible&quot;:false,&quot;available&quot;:true},{&quot;id&quot;:42906926481626,&quot;price_per_term&quot;:&quot;$7.48&quot;,&quot;full_price&quot;:&quot;$29.95&quot;,&quot;eligible&quot;:false,&quot;available&quot;:true}],&quot;min_price&quot;:&quot;$50.00&quot;,&quot;max_price&quot;:&quot;$30,000.00&quot;,&quot;financing_plans&quot;:[{&quot;min_price&quot;:&quot;$50.00&quot;,&quot;max_price&quot;:&quot;$149.99&quot;,&quot;terms&quot;:[{&quot;apr&quot;:0,&quot;loan_type&quot;:&quot;split_pay&quot;,&quot;installments_count&quot;:4}]},{&quot;min_price&quot;:&quot;$150.00&quot;,&quot;max_price&quot;:&quot;$999.99&quot;,&quot;terms&quot;:[{&quot;apr&quot;:0,&quot;loan_type&quot;:&quot;split_pay&quot;,&quot;installments_count&quot;:4},{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:3},{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:6},{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:12}]},{&quot;min_price&quot;:&quot;$1,000.00&quot;,&quot;max_price&quot;:&quot;$30,000.00&quot;,&quot;terms&quot;:[{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:3},{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:6},{&quot;apr&quot;:15,&quot;loan_type&quot;:&quot;interest&quot;,&quot;installments_count&quot;:12}]}],&quot;installments_buyer_prequalification_enabled&quot;:false,&quot;seller_id&quot;:null}"></shopify-payment-terms>
<input type="hidden" name="product-id" value="7675995062490" /><input type="hidden" name="section-id" value="template--16673570390234__165478013908965a3b" /></form></div>
                    <variant-radios class="no-js-hidden" data-section="template--16673570390234__165478013908965a3b" data-url="/products/cnn-logo-embroidered-hat" ><style data-shopify>
                              .product-form__input input[type=radio]+label{
                              background-color:#ffffff;
                              color:#000000;
                              border-radius:5px;
                              }
                              .product-form__input input[type=radio]:checked+label.active-option,
                              .product-form__input input[type=radio]:checked+label{
                              background-color:#6e6e6e;
                              color:#ffffff;
                              }
                              .product-form__input input[type=radio]+label.color-swatch{
                              width:30px;
                              height:30px;
                              border:2px solid #ffffff;
                              border-radius:100%;
                              }
                              .product-form__input input[type=radio]+label.color-swatch img{
                                border-radius: 50%;
                                border:0px solid #e6e6e6;}
                              
                              .button-dropdown legend{border:1px solid #ffffff; background:#ffffff; color:#333333; font-size:14px; stroke:#333333;}
                              .button-dropdown input[type=radio]+label.color-swatch{background-color:#ffffff !important;}
                              .button-dropdown .color-swatch.no-image span{color:#000000;}
                              .button-dropdown input[type=radio]:checked+label.color-swatch.no-image{background:#6e6e6e !important;}
                              .button-dropdown input[type=radio]:checked+label.color-swatch.no-image span{color:#ffffff;}
                            </style>
                            <fieldset class="js product-form__input"  id="color" name="Color">
                            <legend class="form__label">Color: <p>Black</p> </legend>
                            

                                        <div class="color-swatch-option">
                                    
                                    <input type="radio" id="template--16673570390234__165478013908965a3b-Color-0"
                                        name="Color"
                                        value="Black"
                                        form="product-form-template--16673570390234__165478013908965a3b"
                                        aria-label="Color: Black"
                                        checked
                                    >
                                    
                                        <label class="color-swatch black" for="template--16673570390234__165478013908965a3b-Color-0">
                                          
                                            <img  src="//snowdam.s3.us-east-2.amazonaws.com/swatch/black.png" alt="black-color-swatch" onerror="this.onerror=null;this.src='//snowdam.s3.us-east-2.amazonaws.com/swatch/broken-image.jpg';">
                                        </label>
                                        
                                          <span class="color-none">Black</span>
                                        
                                        </div>
                                    

                                        <div class="color-swatch-option">
                                    
                                    <input type="radio" id="template--16673570390234__165478013908965a3b-Color-1"
                                        name="Color"
                                        value="Red"
                                        form="product-form-template--16673570390234__165478013908965a3b"
                                        aria-label="Color: Red"
                                        
                                    >
                                    
                                        <label class="color-swatch red" for="template--16673570390234__165478013908965a3b-Color-1">
                                          
                                            <img  src="//snowdam.s3.us-east-2.amazonaws.com/swatch/red.png" alt="red-color-swatch" onerror="this.onerror=null;this.src='//snowdam.s3.us-east-2.amazonaws.com/swatch/broken-image.jpg';">
                                        </label>
                                        
                                          <span class="color-none">Red</span>
                                        
                                        </div>
                                    

                            </fieldset><script type="application/json">
                        [{"id":42906926448858,"title":"Black","option1":"Black","option2":null,"option3":null,"sku":"CNN-100176-0002-CNN-LOGO","requires_shipping":true,"taxable":true,"featured_image":{"id":37263952347354,"product_id":7675995062490,"position":1,"created_at":"2022-06-22T14:20:37-04:00","updated_at":"2022-06-22T14:20:37-04:00","alt":"CNN Logo Embroidered Hat","width":1000,"height":1000,"src":"\/\/store.cnn.com\/cdn\/shop\/products\/CNN-LOGO-3-100176-BLACK-MF.jpg?v=1655922037","variant_ids":[42906926448858]},"available":true,"name":"CNN Logo Embroidered Hat - Black","public_title":"Black","options":["Black"],"price":2995,"weight":907,"compare_at_price":null,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":"CNN Logo Embroidered Hat","id":29837579059418,"position":1,"preview_image":{"aspect_ratio":1.0,"height":1000,"width":1000,"src":"\/\/store.cnn.com\/cdn\/shop\/products\/CNN-LOGO-3-100176-BLACK-MF.jpg?v=1655922037"}},"requires_selling_plan":false,"selling_plan_allocations":[],"quantity_rule":{"min":1,"max":null,"increment":1}},{"id":42906926481626,"title":"Red","option1":"Red","option2":null,"option3":null,"sku":"CNN-100176-0012-CNN-LOGO","requires_shipping":true,"taxable":true,"featured_image":{"id":37263952445658,"product_id":7675995062490,"position":3,"created_at":"2022-06-22T14:20:37-04:00","updated_at":"2022-06-22T14:20:37-04:00","alt":"CNN Logo Embroidered Hat","width":1000,"height":1000,"src":"\/\/store.cnn.com\/cdn\/shop\/products\/CNN-LOGO-3-100176-RED-MF.jpg?v=1655922037","variant_ids":[42906926481626]},"available":true,"name":"CNN Logo Embroidered Hat - Red","public_title":"Red","options":["Red"],"price":2995,"weight":907,"compare_at_price":null,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":"CNN Logo Embroidered Hat","id":29837579124954,"position":3,"preview_image":{"aspect_ratio":1.0,"height":1000,"width":1000,"src":"\/\/store.cnn.com\/cdn\/shop\/products\/CNN-LOGO-3-100176-RED-MF.jpg?v=1655922037"}},"requires_selling_plan":false,"selling_plan_allocations":[],"quantity_rule":{"min":1,"max":null,"increment":1}}]
                      </script>
                    </variant-radios>
  
              

              <noscript class="product-form__noscript-wrapper-template--16673570390234__165478013908965a3b">
                <div class="product-form__input">
                  <label class="form__label" for="Variants-template--16673570390234__165478013908965a3b">Product variants</label>
                  <div class="select">
                    <select name="id" id="Variants-template--16673570390234__165478013908965a3b" class="select__select" form="product-form-template--16673570390234__165478013908965a3b"><option
                          selected="selected"
                          
                          value="42906926448858"
                        >
                          Black

                          - $29.95
                        </option><option
                          
                          
                          value="42906926481626"
                        >
                          Red

                          - $29.95
                        </option></select>
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>

                  </div>
                </div>
              </noscript><div class="product-form__input product-form__quantity" >
                <label class="form__label" for="Quantity-template--16673570390234__165478013908965a3b">
                  Quantity:
                </label>
                <quantity-input class="quantity">
                  <button class="quantity__button no-js-hidden" name="minus" type="button">
                    <span class="visually-hidden">Decrease quantity for CNN Logo Embroidered Hat</span>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-minus" fill="none" viewBox="0 0 10 2">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor">
</svg>

                  </button>
                  <input class="quantity__input"
                      type="number"
                      name="quantity"
                      id="Quantity-template--16673570390234__165478013908965a3b"
                      min="1"
                      value="1"
                      form="product-form-template--16673570390234__165478013908965a3b"
                    >
                  <button class="quantity__button no-js-hidden" name="plus" type="button">
                    <span class="visually-hidden">Increase quantity for CNN Logo Embroidered Hat</span>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" fill="none" viewBox="0 0 10 10">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor">
</svg>

                  </button>
                </quantity-input>
              </div>
          
              <div ><product-form class="product-form">
                    <div class="product-form__error-message-wrapper" role="alert" hidden>
                      <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-error" viewBox="0 0 13 13">
                        <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"/>
                        <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"/>
                        <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"/>
                        <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7">
                      </svg>
                      <span class="product-form__error-message"></span>
                    </div><form method="post" action="/cart/add" id="product-form-template--16673570390234__165478013908965a3b" accept-charset="UTF-8" class="form" enctype="multipart/form-data" novalidate="novalidate" data-type="add-to-cart-form"><input type="hidden" name="form_type" value="product" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="id" value="42906926448858" disabled>
                      <div class="product-form__buttons">
                        
                      <button
                        type="submit"
                        name="add"
                        class="product-form__submit button button--full-width button--primary"
                      
                      >
                          <span>Add to cart
</span>
                          <div class="loading-overlay__spinner hidden">
                            <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                              <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                            </svg>
                          </div>
                      </button>
                        

                      </div><input type="hidden" name="product-id" value="7675995062490" /><input type="hidden" name="section-id" value="template--16673570390234__165478013908965a3b" /></form></product-form></div><a href="/products/cnn-logo-embroidered-hat" class="link product__view-details animate-arrow">
          View full details
          <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
</svg>

        </a>
        </div>
      </div>
    </div>

    <product-modal id="ProductModal-template--16673570390234__165478013908965a3b" class="product-media-modal media-modal">
      <div class="product-media-modal__dialog" role="dialog" aria-label="Media gallery" aria-modal="true" tabindex="-1">
        <button id="ModalClose-template--16673570390234__165478013908965a3b" type="button" class="product-media-modal__toggle" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" fill="none" viewBox="0 0 18 17">
  <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
</svg></button>

        <div class="product-media-modal__content" role="document" aria-label="Media gallery" tabindex="0">
<img
    srcset="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF_550x.jpg?v=1655922037 550w,//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF.jpg?v=1655922037 1000w"
    sizes="(min-width: 750px) calc(100vw - 22rem), 1100px"
    src="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-BLACK-MF_1445x.jpg?v=1655922037"
    alt="CNN Logo Embroidered Hat"
    loading="lazy"
    width="1100"
    height="1100"
    data-media-id="29837579059418"
    
  >
<img
    srcset="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RO_550x.jpg?v=1655922037 550w,//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RO.jpg?v=1655922037 1000w"
    sizes="(min-width: 750px) calc(100vw - 22rem), 1100px"
    src="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RO_1445x.jpg?v=1655922037"
    alt="CNN Logo Embroidered Hat"
    loading="lazy"
    width="1100"
    height="1100"
    data-media-id="29837579092186"
    
  >
<img
    srcset="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF_550x.jpg?v=1655922037 550w,//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF.jpg?v=1655922037 1000w"
    sizes="(min-width: 750px) calc(100vw - 22rem), 1100px"
    src="//store.cnn.com/cdn/shop/products/CNN-LOGO-3-100176-RED-MF_1445x.jpg?v=1655922037"
    alt="CNN Logo Embroidered Hat"
    loading="lazy"
    width="1100"
    height="1100"
    data-media-id="29837579124954"
    
  ></div>
      </div>
    </product-modal>
  </div>
</section>


<script src="//store.cnn.com/cdn/shop/t/6/assets/product-form.js?v=42445641629457060461667402762" defer="defer"></script><script type="application/ld+json">
  {
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "CNN Logo Embroidered Hat",
    "url": "https:\/\/store.cnn.com\/products\/cnn-logo-embroidered-hat",
    "image": [
        "https:\/\/store.cnn.com\/cdn\/shop\/products\/CNN-LOGO-3-100176-BLACK-MF_1000x.jpg?v=1655922037"
      ],
    "description": "Represent your favorite news network with the CNN Logo Embroidered Hat. The perfect piece to add to your wardrobe!\nMade of: 100% brushed cotton twill\nEmbroidered\nAdditional Information: Adjustable slide closure and buckle\n",
    "sku": "CNN-100176-0002-CNN-LOGO",
    "brand": {
      "@type": "Thing",
      "name": "monetyze-merchmake"
    },
    "offers": [{
          "@type" : "Offer","sku": "CNN-100176-0002-CNN-LOGO","availability" : "http://schema.org/InStock",
          "price" : 29.95,
          "priceCurrency" : "USD",
          "url" : "https:\/\/store.cnn.com\/products\/cnn-logo-embroidered-hat?variant=42906926448858"
        },
{
          "@type" : "Offer","sku": "CNN-100176-0012-CNN-LOGO","availability" : "http://schema.org/InStock",
          "price" : 29.95,
          "priceCurrency" : "USD",
          "url" : "https:\/\/store.cnn.com\/products\/cnn-logo-embroidered-hat?variant=42906926481626"
        }
]
  }
</script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    function isIE() {
      const ua = window.navigator.userAgent;
      const msie = ua.indexOf('MSIE ');
      const trident = ua.indexOf('Trident/');

      return (msie > 0 || trident > 0);
    }

    if (!isIE()) return;
    const hiddenInput = document.querySelector('#product-form-template--16673570390234__165478013908965a3b input[name="id"]');
    const noScriptInputWrapper = document.createElement('div');
    const variantSwitcher = document.querySelector('variant-radios[data-section="template--16673570390234__165478013908965a3b"]') || document.querySelector('variant-selects[data-section="template--16673570390234__165478013908965a3b"]');
    noScriptInputWrapper.innerHTML = document.querySelector('.product-form__noscript-wrapper-template--16673570390234__165478013908965a3b').textContent;
    variantSwitcher.outerHTML = noScriptInputWrapper.outerHTML;

    document.querySelector('#Variants-template--16673570390234__165478013908965a3b').addEventListener('change', function(event) {
      hiddenInput.value = event.currentTarget.value;
    });
  });
</script>

<script>
  jQuery(document).ready(function ($){  
      // Product Info Accordion
      function productAbbreviations(){
        $(".form__label p").each(function(){
            $(this).html($(this).html().replace(/SM/g, 'Small').replace(/M/g, 'Medium').replace(/XXXX/g, '4X').replace(/XXX/g, '3X').replace(/XX/g, '2X').replace(/X/g, 'X-').replace(/L/g, 'Large'));
        });
      } productAbbreviations();
      function productSubInformation(){
          $('.product__description-dropdown-title').click(function(){
              $(this).next('.product__description-dropdown').toggle();
              $('.product__description-dropdown-title').toggleClass('active');
          });
          $('#color input:radio').on('change', function(){
            var value = $(this).val();
            $('#color .form__label p').html(value);     
          });
          $('#size input:radio').on('change', function(){
            var value = $(this).val();
            $('#size .form__label p').html(value);
            productAbbreviations();
          });        
      } productSubInformation(); 
  
      // Variant Dropdown
      function productVariantDropdown(){
        $('.button-dropdown legend').click(function(){
          $(this).toggleClass('open');
          $(this).next('.button-dropdown-container').slideToggle();
        });
      } productVariantDropdown();
  
      // Rerun Scripts in Shopify Theme Editor
      if (Shopify.designMode){
          document.addEventListener('shopify:section:load', function(){
              if(event.detail.sectionId === 'template--16673570390234__165478013908965a3b') {
                  productSubInformation();
                  productVariantDropdown();
              }
          });
      }
  });
  </script>


</section>
    </main>

    <div id="shopify-section-newsletter-banner" class="shopify-section"><style data-shopify>
#newsletter-banner-newsletter-banner .desktop {display: none;}
#newsletter-banner-newsletter-banner .mobile {display: block;}
#newsletter-banner-newsletter-banner h3.mobile {font-size: 28px;}
#newsletter-banner-newsletter-banner .newsletter-banner-content .rte * {font-size: 16px;}
#newsletter-banner-newsletter-banner {
    height: 250px;
    background: #000000;

    
        background:url("//store.cnn.com/cdn/shop/files/CNN-SignUpBar_Gradient_1_1.png?v=1654780876"); 
        background-size:cover; 
        background-repeat:no-repeat; 
        background-position: center;
    
}
#newsletter-banner-newsletter-banner .newsletter__input-group {
    margin-bottom: 0;
}
#newsletter-banner-newsletter-banner .newsletter-banner-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
}

#newsletter-banner-newsletter-banner .input-group {
    display: flex;
    flex-flow: column;
    align-items: center;
}

#newsletter-banner-newsletter-banner #Email-newsletter-banner {
    background: white;
    width: 80%;
    color: black;
}

#newsletter-banner-newsletter-banner .input-group-btn {
    margin-top: 20px;
    height: 44px;
    width: fit-content;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#newsletter-banner-newsletter-banner .input-group-btn .form__submit--large {
    display: block;
}
#newsletter-banner-newsletter-banner .input-group-btn .form__submit--small {
    display: none;
}
#newsletter-banner-newsletter-banner .default-newsletter-banner-content * {
    color: #ffffff;
}

#newsletter-banner-newsletter-banner #NewsletterForm--newsletter-banner {
    box-shadow: none;
    border: 1px solid #ffffff;
}
#newsletter-banner-newsletter-banner .newsletter-banner-content *:not(h4, h3) {
    font-size: 14px;
    line-height: 18px;
}
.newsletter-banner-content h3.h3 {
    margin: 10px 0 !important;
}
#newsletter-banner-newsletter-banner .newsletter-banner-content .rte {
    margin-bottom: 15px;
}

#newsletter-banner-newsletter-banner .klaviyo-form input {
    width: 250px !important;
    margin: auto !important;
    margin-bottom: 5px !important;
}

#newsletter-banner-newsletter-banner .klaviyo-form button {
    padding: 0 24px !important;
}

#newsletter-banner-newsletter-banner .newsletter-banner-content {
    max-width: 85%;
}

.newsletter-promo ~ #newsletter-banner-newsletter-banner {margin-top: 0;}

.newsletter-banner-content .mobile {display: block;}
.newsletter-banner-content .desktop {display: none;}

@media screen and (min-width: 768px) {
    .newsletter-banner-content .mobile {display: none;}
.newsletter-banner-content .desktop {display: block; margin: 10px 0;}
}

@media screen and (min-width: 768px) and (max-width: 959px) {
    #newsletter-banner-newsletter-banner {
        height: 183px;
        margin-top: 75px;

        
        background:url("//store.cnn.com/cdn/shop/files/CNN-SignUpBar_Gradient_1.png?v=1654780854"); 
        background-size:cover; 
        background-repeat:no-repeat; 
        background-position: center;
    
    }
    .newsletter-promo ~ #newsletter-banner-newsletter-banner {margin-top: 0;}
    #newsletter-banner-newsletter-banner .default-newsletter-banner-content * {
        color: #ffffff; 
    }
    #newsletter-banner-newsletter-banner .newsletter-banner-content *:not(h4, h3) {
    font-size: 16px;
        line-height: 20px;
    }
    #newsletter-banner-newsletter-banner .newsletter-banner-content h3 {
        margin-bottom: 15px;
    }
    #newsletter-banner-newsletter-banner .newsletter-banner-content .rte {
        margin-bottom: 10px;
    }
    #newsletter-banner-newsletter-banner .input-group-btn {
        margin-top: 25px;
    }
    #newsletter-banner-newsletter-banner .klaviyo-form input {
        width: 100% !important;
        margin-bottom: 0 !important;
    }
    #newsletter-banner-newsletter-banner .klaviyo-form button {
        font-size: 12px !important;
        line-height: 14px !important;
        margin-top: 10px !important;
        padding: 0 20px !important;
    }

    #newsletter-banner-newsletter-banner .newsletter-banner-content {
        max-width: 100%;
    }
    
}

@media screen and (min-width: 960px) {
    #newsletter-banner-newsletter-banner .desktop {display: block;}
    #newsletter-banner-newsletter-banner .mobile {display: none;}
    #newsletter-banner-newsletter-banner {
        height: 183px;
        margin-top: 75px;

        
        background:url("//store.cnn.com/cdn/shop/files/CNN-SignUpBar_Gradient_1.png?v=1654780854"); 
        background-size:cover; 
        background-repeat:no-repeat; 
        background-position: center;
    
    }
    .newsletter-promo ~ #newsletter-banner-newsletter-banner {margin-top: 0;}
    #newsletter-banner-newsletter-banner .input-group-btn {
        margin-top: 15px;
    }
    #newsletter-banner-newsletter-banner #Email-newsletter-banner {
        height: 60px;
    }
    #newsletter-banner-newsletter-banner .newsletter-banner-content .rte {
        margin-bottom: 10px;
    }
    #newsletter-banner-newsletter-banner .newsletter-banner-content *:not(h4, h3) {
        font-size: 16px;
        line-height: 20px;
    }
    #newsletter-banner-newsletter-banner .klaviyo-form input {
        width: 100% !important;
        margin-bottom: 0 !important;
    }
    #newsletter-banner-newsletter-banner .klaviyo-form button {
        padding: 0 30px !important;
    }
    #newsletter-banner-newsletter-banner .newsletter-banner-content {
        max-width: 100%;
    }

    #newsletter-banner-newsletter-banner h4.desktop {font-size: 28px;}
    #newsletter-banner-newsletter-banner .newsletter-banner-content .rte * {font-size: 14px;}
   
    
}

@media screen and (min-width: 959px) {
    #newsletter-banner-newsletter-banner .large--hide {
        display: none;
    }
}



@media screen and (max-width: 767px) {
    #newsletter-banner-newsletter-banner .klaviyo-form div[data-testid='form-row']:nth-of-type(2) {
    flex-direction: column !important;
}

#newsletter-banner-newsletter-banner .klaviyo-form div[data-testid='form-row']:nth-of-type(2) > div[data-testid='form-component']:first-child {
    flex: 1 0 auto !important;
}

#newsletter-banner-newsletter-banner .klaviyo-form div[data-testid='form-row']:nth-of-type(2) > div[data-testid='form-component']:nth-child(2) {
    justify-content: center !important;
}
#newsletter-banner-newsletter-banner .klaviyo-form input {
    width: 100% !important;
    margin-bottom: 0 !important;
}
}
</style>





<div id="newsletter-banner-newsletter-banner">
    
    <div class="newsletter-banner-content page-width text-center default-newsletter-banner-content"><h4 class="h4 desktop">Sign Up &amp; Save!</h4>
          <h3 class="h3 mobile">Sign Up &amp; Save!</h3><div class="rte"><p>Sign up for exclusive offers and 15% OFF your first order!</p></div>
            <div class="klaviyo-form-XCXVwq"></div>
        

    </div>
    

    
</div>




</div>
    <div id="shopify-section-footer" class="shopify-section"><!-- deploy test -->

<link href="//store.cnn.com/cdn/shop/t/6/assets/section-footer.css?v=82243718446705702121667402762" rel="stylesheet" type="text/css" media="all" />
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-newsletter.css?v=71305430942358774071667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-list-menu.css?v=161614383810958508431667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-list-payment.css?v=69253961410771838501667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-list-social.css?v=52211663153726659061667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/component-rte.css?v=84043763465619332371667402762" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//store.cnn.com/cdn/shop/t/6/assets/disclosure.css?v=160129347545493074521667402762" media="print" onload="this.media='all'">

<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-newsletter.css?v=71305430942358774071667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-list-menu.css?v=161614383810958508431667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-list-payment.css?v=69253961410771838501667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-list-social.css?v=52211663153726659061667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/component-rte.css?v=84043763465619332371667402762" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//store.cnn.com/cdn/shop/t/6/assets/disclosure.css?v=160129347545493074521667402762" rel="stylesheet" type="text/css" media="all" /></noscript>

<link href="//store.cnn.com/cdn/shop/t/6/assets/custom-footer-styles.scss.css?v=17659634482496034721667402762" rel="stylesheet" type="text/css" media="all" />

<style data-shopify>
.footer .footer__column.footer__column--info {
  flex-flow: column;
}
.footer .language-payment-container {
  display: flex;
  flex-flow: column nowrap;
}

.footer .footer-newsletter-subheading {
  margin-top: 0;
  text-align: left;
}
.footer .footer-block--newsletter {
  margin-top: 0;
}
/*@media screen and (max-width: 767px) {*/
  .footer .footer__column.footer__column--info .list-payment {
    padding-bottom: 1rem;
  }
  .footer-block__details-content:not(.footer-block-image), .footer-block .footer-social-container {display: none;}
  .footer .footer__content-top {
    text-align: center;
  }
  .footer .footer-block-image img {
    margin: auto;
  }
  
  .footer .footer__content-top a.link.link--text.list-menu__item.list-menu__item--link {
    justify-content: center;
  }

  .footer .footer-social-block {
    justify-content: center;
  }


    .footer-block__details-content:not(.footer-block-image), .footer-block .footer-social-container {
    text-align: center;
  }
  
  
  .footer-block__heading {
    cursor: pointer;
  }
  .snow-logo {
    margin: auto;
  }
  .footer .footer-newsletter-subheading {
    text-align: center;
  }

  /* changes */
  .footer .grid {
    flex-flow: column wrap;
  }
  .footer-block.grid__item {
    width: 100% !important;
  }
  .footer .footer__content-top {
    padding: 50px 40px 30px;
  }
  .footer__content-bottom {
    padding-top: 0;
  }
/*}*/


.snow-logo {
  width: 154px;
}

#additional-content-one {
  text-align: center;
}
#additional-content-two {
  text-align: center;
}
.additional-content-two {width: 100%;}

#additional-content-three {
  text-align: center;
}



/** Footer copyright/payment **/
@media screen and (min-width: 768px) {
  .footer__content-bottom {
    padding-top: 3rem;
  }
  .footer .footer__content-top {
    padding: 50px;
  }
  .footer-block__details-content:not(.footer-block-image), .footer-block .footer-social-container {
    text-align: left;
  }
  .footer .footer-social-block {
    justify-content: center;
  }
  .footer-block__heading:after {
    display: none;
  }
  .footer .grid {
    flex-flow: row wrap;
  }
  .footer-block__details-content, .footer-social-container {
    display: block !important;
  }
  .footer .footer__column.footer__column--info {
      flex-flow: row-reverse;
      justify-content: space-between;
  }
  
  
  .footer .footer__column.footer__column--info {
    gap: 5%;
    align-items: flex-end;
  }
  .footer .footer__column.footer__column--info .list-payment {
    justify-content: flex-end;
  }
  .footer .footer__column.footer__column--info .footer__payment {
    flex-grow: 1;
    flex-shrink: 0;
  }
  .footer .footer__column.footer__column--info .footer__copyright {
    text-align: left;
  }
  .snow-logo {
    margin: 0;
    margin-right: auto;
  }

  .footer .footer__localization {
    justify-content: flex-end;
  }
  
  
  }
</style>

<footer class="footer color- gradient"><div class="footer__content-top page-width"><div class="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet "><div class="footer-grid__item-dfa7f701-012f-4e8f-af23-20f7e147b4e9 footer-block grid__item footer-block--menu" >
              
<style data-shopify>.footer-header-container.mobile {
                  display: flex;
                  justify-content: center;
                }
                .footer-header-container.mobile svg {
                  margin-bottom: 2rem;
                  width: 10px;
                  margin-left: 5px;
                  cursor: pointer;
                }
                .footer-header-container.mobile svg.icon-caret.active {transform: rotate(180deg);}
                .footer-header-container.mobile .icon-minus {
                  display: none;
                }
                .footer-header-container.desktop {
                  display: none;
                }
                @media screen and (min-width: 768px) {
                  .footer-block.grid__item {
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: flex-start;
                  }
                  .footer-header-container.mobile {
                    display: none;
                  }
                  .footer-header-container.desktop {
                    display: block;
                  }
                  
                }

                @media screen and (min-width: 768px) and (max-width: 1024px) {
                  .footer-grid__item-dfa7f701-012f-4e8f-af23-20f7e147b4e9 {
                    flex-basis: 25%;
                    
                    }
                    
                }
                @media screen and (min-width: 1025px) {
                  .footer-grid__item-dfa7f701-012f-4e8f-af23-20f7e147b4e9 {
                    flex-basis: 25%;
                    }
                }</style><div class="footer-header-container desktop">
                <h2 class="footer-block__heading">Customer Service</h2>
              </div>
              <div class="footer-header-container mobile">
                <h2 class="footer-block__heading">Customer Service</h2><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>

              </div><ul class="footer-block__details-content list-unstyled"><li>
                          <a href="https://help.cnnstoresupport.com" class="link link--text list-menu__item list-menu__item--link">
                            Support Center
                          </a>
                        </li><li>
                          <a href="/pages/return-policy" class="link link--text list-menu__item list-menu__item--link">
                            Refund Policy
                          </a>
                        </li><li>
                          <a href="/pages/return-center" class="link link--text list-menu__item list-menu__item--link">
                            Return Center
                          </a>
                        </li><li>
                          <a href="/pages/privacy-policy" class="link link--text list-menu__item list-menu__item--link">
                            Privacy Policy
                          </a>
                        </li><li>
                          <a href="/pages/terms-of-use" class="link link--text list-menu__item list-menu__item--link">
                            Terms of Use
                          </a>
                        </li><li>
                          <a href="/pages/accessibility-statement" class="link link--text list-menu__item list-menu__item--link">
                            Accessibility
                          </a>
                        </li><li>
                          <a href="/pages/promotional-disclaimers" class="link link--text list-menu__item list-menu__item--link">
                            Promotional Disclaimers
                          </a>
                        </li><li>
                          <a href="/pages/order-status" class="link link--text list-menu__item list-menu__item--link">
                            Track My Order
                          </a>
                        </li><li>
                          <a href="/pages/cookie-policy" class="link link--text list-menu__item list-menu__item--link">
                            Cookie Policy
                          </a>
                        </li><li>
                          <a href="/pages/legal-imprint" class="link link--text list-menu__item list-menu__item--link">
                            Legal Imprint
                          </a>
                        </li></ul></div><div class="footer-grid__item-footer-0 footer-block grid__item footer-block--menu" >
              
<style data-shopify>.footer-header-container.mobile {
                  display: flex;
                  justify-content: center;
                }
                .footer-header-container.mobile svg {
                  margin-bottom: 2rem;
                  width: 10px;
                  margin-left: 5px;
                  cursor: pointer;
                }
                .footer-header-container.mobile svg.icon-caret.active {transform: rotate(180deg);}
                .footer-header-container.mobile .icon-minus {
                  display: none;
                }
                .footer-header-container.desktop {
                  display: none;
                }
                @media screen and (min-width: 768px) {
                  .footer-block.grid__item {
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: flex-start;
                  }
                  .footer-header-container.mobile {
                    display: none;
                  }
                  .footer-header-container.desktop {
                    display: block;
                  }
                  
                }

                @media screen and (min-width: 768px) and (max-width: 1024px) {
                  .footer-grid__item-footer-0 {
                    flex-basis: 25%;
                    
                    }
                    
                }
                @media screen and (min-width: 1025px) {
                  .footer-grid__item-footer-0 {
                    flex-basis: 25%;
                    }
                }</style><div class="footer-header-container desktop">
                <h2 class="footer-block__heading">Account &amp; Ordering</h2>
              </div>
              <div class="footer-header-container mobile">
                <h2 class="footer-block__heading">Account &amp; Ordering</h2><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>

              </div><ul class="footer-block__details-content list-unstyled"><li>
                          <a href="/account" class="link link--text list-menu__item list-menu__item--link">
                            My Account
                          </a>
                        </li><li>
                          <a href="/pages/ordering-policy" class="link link--text list-menu__item list-menu__item--link">
                            Ordering Policy
                          </a>
                        </li><li>
                          <a href="/pages/shipping-policy" class="link link--text list-menu__item list-menu__item--link">
                            Shipping Policy
                          </a>
                        </li><li>
                          <a href="/pages/volume-discounts" class="link link--text list-menu__item list-menu__item--link">
                            Volume Discounts
                          </a>
                        </li></ul></div><div class="footer-grid__item-d1fc2253-6aa8-46e1-a21d-2d57b2ac4b97 footer-block grid__item footer-block--menu" >
              
<style data-shopify>.footer-header-container.mobile {
                  display: flex;
                  justify-content: center;
                }
                .footer-header-container.mobile svg {
                  margin-bottom: 2rem;
                  width: 10px;
                  margin-left: 5px;
                  cursor: pointer;
                }
                .footer-header-container.mobile svg.icon-caret.active {transform: rotate(180deg);}
                .footer-header-container.mobile .icon-minus {
                  display: none;
                }
                .footer-header-container.desktop {
                  display: none;
                }
                @media screen and (min-width: 768px) {
                  .footer-block.grid__item {
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: flex-start;
                  }
                  .footer-header-container.mobile {
                    display: none;
                  }
                  .footer-header-container.desktop {
                    display: block;
                  }
                  
                }

                @media screen and (min-width: 768px) and (max-width: 1024px) {
                  .footer-grid__item-d1fc2253-6aa8-46e1-a21d-2d57b2ac4b97 {
                    flex-basis: 25%;
                    
                    }
                    
                }
                @media screen and (min-width: 1025px) {
                  .footer-grid__item-d1fc2253-6aa8-46e1-a21d-2d57b2ac4b97 {
                    flex-basis: 25%;
                    }
                }</style><div class="footer-header-container desktop">
                <h2 class="footer-block__heading">Explore CNN</h2>
              </div>
              <div class="footer-header-container mobile">
                <h2 class="footer-block__heading">Explore CNN</h2><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>

              </div><ul class="footer-block__details-content list-unstyled"><li>
                          <a href="https://www.cnn.com/" class="link link--text list-menu__item list-menu__item--link">
                            CNN.com
                          </a>
                        </li><li>
                          <a href="https://www.cnn.com/cnn-underscored" class="link link--text list-menu__item list-menu__item--link">
                            CNN Underscored
                          </a>
                        </li></ul></div><div class="footer-grid__item-ae112d85-df28-42fb-8e98-467f183b3ee6 footer-block grid__item" >
              
<style data-shopify>.footer-header-container.mobile {
                  display: flex;
                  justify-content: center;
                }
                .footer-header-container.mobile svg {
                  margin-bottom: 2rem;
                  width: 10px;
                  margin-left: 5px;
                  cursor: pointer;
                }
                .footer-header-container.mobile svg.icon-caret.active {transform: rotate(180deg);}
                .footer-header-container.mobile .icon-minus {
                  display: none;
                }
                .footer-header-container.desktop {
                  display: none;
                }
                @media screen and (min-width: 768px) {
                  .footer-block.grid__item {
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: flex-start;
                  }
                  .footer-header-container.mobile {
                    display: none;
                  }
                  .footer-header-container.desktop {
                    display: block;
                  }
                  
                }

                @media screen and (min-width: 768px) and (max-width: 1024px) {
                  .footer-grid__item-ae112d85-df28-42fb-8e98-467f183b3ee6 {
                    flex-basis: 25%;
                    
                    }
                    
                }
                @media screen and (min-width: 1025px) {
                  .footer-grid__item-ae112d85-df28-42fb-8e98-467f183b3ee6 {
                    flex-basis: 25%;
                    }
                }</style><div class="footer-header-container desktop">
                <h2 class="footer-block__heading">Follow CNN</h2>
              </div>
              <div class="footer-header-container mobile">
                <h2 class="footer-block__heading">Follow CNN</h2><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>

              </div><div class="footer-social-container">
                  <div class="footer-block--newsletter"></div>
                  <ul class="footer__list-social list-unstyled list-social footer-social-block" role="list"><li class="list-social__item">
                        <a href="https://twitter.com/CNN" class="link list-social__link" ><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" width="1200" height="1227" viewBox="0 0 1200 1227" fill="currentColor">
<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
</svg><span class="visually-hidden">Twitter</span>
                        </a>
                      </li><li class="list-social__item">
                        <a href="https://www.facebook.com/cnn" class="link list-social__link" ><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" viewBox="0 0 18 18">
  <path fill="currentColor" d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z">
</svg>
<span class="visually-hidden">Facebook</span>
                        </a>
                      </li><li class="list-social__item">
                        <a href="https://www.instagram.com/cnn" class="link list-social__link" ><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 18 18">
  <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"/>
  <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z">
</svg>
<span class="visually-hidden">Instagram</span>
                        </a>
                      </li></ul>
                </div></div></div></div><div class="footer__content-bottom">
    <div class="footer__content-bottom-wrapper page-width"><div class="footer__column footer__column--info">
        <div class="language-payment-container">
        <div class="footer__column footer__localization"></div><div class="footer__payment">
            <span class="visually-hidden">Payment methods</span>
            <ul class="list list-payment" role="list"><li class="list-payment__item">
                  <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"/><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"/><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"/><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"/><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"/><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"/><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"/><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"/></svg>

                </li><li class="list-payment__item">
                  <svg class="icon icon--full-color" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" x="0" y="0" width="38" height="24" viewBox="0 0 165.521 105.965" xml:space="preserve" aria-labelledby="pi-apple_pay"><title id="pi-apple_pay">Apple Pay</title><path fill="#000" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z" /><path fill="#FFF" d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875" /><g><g><path fill="#000" d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858" /><path fill="#000" d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048" /></g><g><path fill="#000" d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z" /><path fill="#000" d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z" /><path fill="#000" d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z" /></g></g></svg>

                </li><li class="list-payment__item">
                  <svg class="icon icon--full-color" viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-discover">Discover</title><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"/><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"/><path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"/><path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"/><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"/><path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"/><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"/><defs><linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse"><stop stop-color="#F89F20"/><stop offset=".25" stop-color="#F79A20"/><stop offset=".533" stop-color="#F68D20"/><stop offset=".62" stop-color="#F58720"/><stop offset=".723" stop-color="#F48120"/><stop offset="1" stop-color="#F37521"/></linearGradient><linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stop-color="#F58720"/><stop offset=".359" stop-color="#E16F27"/><stop offset=".703" stop-color="#D4602C"/><stop offset=".982" stop-color="#D05B2E"/></linearGradient></defs></svg>
                </li><li class="list-payment__item">
                  <svg class="icon icon--full-color" width="38" height="24" role="img" aria-labelledby="pi-metapay" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-metapay">Meta Pay</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"/><path d="M4.983 12.986c0 .348.076.614.176.776a.6.6 0 00.524.3c.257 0 .491-.063.943-.688.362-.5.788-1.204 1.076-1.645l.486-.747c.337-.518.728-1.095 1.176-1.486.366-.319.76-.496 1.158-.496.667 0 1.302.386 1.788 1.111.532.794.79 1.793.79 2.825 0 .613-.12 1.064-.326 1.42-.2.345-.587.688-1.238.688v-.981c.558 0 .697-.513.697-1.1 0-.836-.195-1.764-.624-2.427-.305-.47-.7-.757-1.134-.757-.47 0-.848.354-1.274.986-.226.336-.457.745-.718 1.207l-.287.508c-.576 1.02-.722 1.254-1.01 1.637-.504.672-.935.927-1.502.927-.674 0-1.1-.291-1.363-.73C4.106 13.956 4 13.486 4 12.95l.983.035z" fill="#0081FB"/><path d="M4.775 10.18C5.225 9.486 5.875 9 6.622 9c.432 0 .861.128 1.31.494.49.4 1.013 1.06 1.665 2.146l.234.39c.565.94.886 1.424 1.074 1.652.242.293.411.38.631.38.558 0 .697-.512.697-1.099l.867-.027c0 .613-.12 1.064-.326 1.42-.2.345-.587.688-1.238.688-.405 0-.764-.088-1.16-.462-.306-.287-.663-.798-.937-1.257l-.816-1.363c-.41-.684-.785-1.194-1.003-1.425-.234-.249-.534-.549-1.014-.549-.388 0-.718.273-.994.69l-.837-.498z" fill="url(#pi-paint0_linear_1164_3)"/><path d="M6.606 9.988c-.388 0-.718.273-.994.69-.39.588-.629 1.466-.629 2.308 0 .348.076.614.176.776l-.838.552C4.106 13.956 4 13.486 4 12.95c0-.973.267-1.987.775-2.77C5.225 9.485 5.875 9 6.622 9l-.016.988z" fill="url(#pi-paint1_linear_1164_3)"/><path d="M15.01 9.191h1.138l1.933 3.498 1.934-3.498h1.112v5.747h-.928v-4.405l-1.695 3.05h-.87l-1.696-3.05v4.405h-.927V9.191zm9.023 2.143c-.665 0-1.066.5-1.162 1.12h2.258c-.046-.638-.415-1.12-1.096-1.12zm-2.081 1.474c0-1.305.843-2.254 2.097-2.254 1.234 0 1.971.937 1.971 2.323v.255h-3.148c.111.674.559 1.129 1.28 1.129.576 0 .936-.176 1.277-.497l.493.603c-.465.427-1.055.674-1.803.674-1.358 0-2.167-.99-2.167-2.233zm5.193-1.392h-.854v-.76h.854V9.402h.895v1.256h1.297v.76H28.04v1.924c0 .657.21.89.726.89.236 0 .371-.02.57-.053v.752c-.248.07-.485.102-.742.102-.966 0-1.45-.528-1.45-1.584v-2.032zm5.96.739a1.207 1.207 0 00-1.17-.788c-.766 0-1.256.543-1.256 1.428 0 .863.451 1.433 1.22 1.433.603 0 1.034-.351 1.206-.788v-1.285zM34 14.938h-.878v-.6c-.246.353-.693.703-1.417.703-1.164 0-1.941-.975-1.941-2.246 0-1.283.796-2.241 1.99-2.241.591 0 1.055.236 1.368.653v-.55H34v4.281z" fill="#000000"/><defs><linearGradient id="pi-paint0_linear_1164_3" x1="5.93" y1="12.703" x2="12.196" y2="13.019" gradientUnits="userSpaceOnUse"><stop stop-color="#0064E1"/><stop offset=".4" stop-color="#0064E1"/><stop offset=".83" stop-color="#0073EE"/><stop offset="1" stop-color="#0082FB"/></linearGradient><linearGradient id="pi-paint1_linear_1164_3" x1="5.424" y1="13.399" x2="5.424" y2="11.089" gradientUnits="userSpaceOnUse"><stop stop-color="#0082FB"/><stop offset="1" stop-color="#0064E0"/></linearGradient></defs></svg>

                </li><li class="list-payment__item">
                  <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-google_pay"><title id="pi-google_pay">Google Pay</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/><path d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z" fill="#5F6368"/><path d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z" fill="#4285F4"/><path d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z" fill="#34A853"/><path d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z" fill="#FBBC04"/><path d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z" fill="#EA4335"/></svg>

                </li><li class="list-payment__item">
                  <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><circle fill="#EB001B" cx="15" cy="12" r="7"/><circle fill="#F79E1B" cx="23" cy="12" r="7"/><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"/></svg>
                </li><li class="list-payment__item">
                  <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"/><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"/><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"/></svg>
                </li><li class="list-payment__item">
                  <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-shopify_pay"><title id="pi-shopify_pay">Shop Pay</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"/><path d="M35.889 0C37.05 0 38 .982 38 2.182v19.636c0 1.2-.95 2.182-2.111 2.182H2.11C.95 24 0 23.018 0 21.818V2.182C0 .982.95 0 2.111 0H35.89z" fill="#5A31F4"/><path d="M9.35 11.368c-1.017-.223-1.47-.31-1.47-.705 0-.372.306-.558.92-.558.54 0 .934.238 1.225.704a.079.079 0 00.104.03l1.146-.584a.082.082 0 00.032-.114c-.475-.831-1.353-1.286-2.51-1.286-1.52 0-2.464.755-2.464 1.956 0 1.275 1.15 1.597 2.17 1.82 1.02.222 1.474.31 1.474.705 0 .396-.332.582-.993.582-.612 0-1.065-.282-1.34-.83a.08.08 0 00-.107-.035l-1.143.57a.083.083 0 00-.036.111c.454.92 1.384 1.437 2.627 1.437 1.583 0 2.539-.742 2.539-1.98s-1.155-1.598-2.173-1.82v-.003zM15.49 8.855c-.65 0-1.224.232-1.636.646a.04.04 0 01-.069-.03v-2.64a.08.08 0 00-.08-.081H12.27a.08.08 0 00-.08.082v8.194a.08.08 0 00.08.082h1.433a.08.08 0 00.081-.082v-3.594c0-.695.528-1.227 1.239-1.227.71 0 1.226.521 1.226 1.227v3.594a.08.08 0 00.081.082h1.433a.08.08 0 00.081-.082v-3.594c0-1.51-.981-2.577-2.355-2.577zM20.753 8.62c-.778 0-1.507.24-2.03.588a.082.082 0 00-.027.109l.632 1.088a.08.08 0 00.11.03 2.5 2.5 0 011.318-.366c1.25 0 2.17.891 2.17 2.068 0 1.003-.736 1.745-1.669 1.745-.76 0-1.288-.446-1.288-1.077 0-.361.152-.657.548-.866a.08.08 0 00.032-.113l-.596-1.018a.08.08 0 00-.098-.035c-.799.299-1.359 1.018-1.359 1.984 0 1.46 1.152 2.55 2.76 2.55 1.877 0 3.227-1.313 3.227-3.195 0-2.018-1.57-3.492-3.73-3.492zM28.675 8.843c-.724 0-1.373.27-1.845.746-.026.027-.069.007-.069-.029v-.572a.08.08 0 00-.08-.082h-1.397a.08.08 0 00-.08.082v8.182a.08.08 0 00.08.081h1.433a.08.08 0 00.081-.081v-2.683c0-.036.043-.054.069-.03a2.6 2.6 0 001.808.7c1.682 0 2.993-1.373 2.993-3.157s-1.313-3.157-2.993-3.157zm-.271 4.929c-.956 0-1.681-.768-1.681-1.783s.723-1.783 1.681-1.783c.958 0 1.68.755 1.68 1.783 0 1.027-.713 1.783-1.681 1.783h.001z" fill="#fff"/></svg>

                </li><li class="list-payment__item">
                  <svg class="icon icon--full-color" viewBox="0 0 38 24" width="38" height="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-venmo"><title id="pi-venmo">Venmo</title><g fill="none" fill-rule="evenodd"><rect fill-opacity=".07" fill="#000" width="38" height="24" rx="3"/><path fill="#3D95CE" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M24.675 8.36c0 3.064-2.557 7.045-4.633 9.84h-4.74L13.4 6.57l4.151-.402 1.005 8.275c.94-1.566 2.099-4.025 2.099-5.702 0-.918-.154-1.543-.394-2.058l3.78-.783c.437.738.634 1.499.634 2.46z" fill="#FFF" fill-rule="nonzero"/></g></svg>

                </li><li class="list-payment__item">
                  <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"/></svg>
                </li></ul>
          </div></div>
        
        <div class="footer__copyright caption">
          
        <div class="snow-logo">
          <a href="https://www.snowcommerce.com/" aria-label="Link to Snow Commerce" rel="noopener noreferrer" target="_blank" class="snow-company-link">
          
          <svg class="snow-logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 299.09"><defs><style>.cls-1,.cls-2{fill:#fff;}.cls-1{fill-rule:evenodd;}</style></defs><title>SnowCommerce_Logo_White</title><path class="cls-1" d="M263.34,197.19c0,9.48-6.72,21.12-14.93,25.86l-81,46.74c-8.21,4.74-21.65,4.74-29.86,0l-81-46.74c-8.22-4.74-14.93-16.38-14.93-25.86V103.7c0-9.48,6.71-21.12,14.93-25.86l81-46.74c8.21-4.74,21.65-4.74,29.86,0l81,46.74c8.21,4.74,14.93,16.38,14.93,25.86ZM148.76,71.48V99.16l-15.1-6,18.86,46.17L171.4,93.12l-15.1,6V71.49h-7.54m-4.19-4.19H160.5V93l9.34-3.74L179,85.54l-3.75,9.17L156.4,140.87l-3.88,9.5-3.89-9.51L129.77,94.7,126,85.53l9.19,3.68L144.56,93V67.29Zm7.93,93.42-18.88,46.16,15.1-6V228.5h7.54V200.83l15.1,6L152.5,160.71m0-11.1,3.88,9.51,18.86,46.17,3.75,9.17-9.19-3.69L160.45,207V232.7H144.52V207l-9.34,3.74-9.2,3.67,3.75-9.16,18.88-46.16,3.89-9.51Zm39.85-44.38-30.56,39.41,49.42-6.72-12.79-10.06,24-13.83-3.76-6.53-24,13.83-2.31-16.1m2.74-10.4,1.41,9.8,1.43,10,18.6-10.73,3.63-2.1,2.1,3.64,3.77,6.53,2.1,3.63-3.64,2.1-18.6,10.73,7.91,6.23,7.79,6.12-9.82,1.34-49.41,6.72-10.18,1.39,6.3-8.12L189,102.65l6.06-7.82Zm-51.87,60.51-49.41,6.73,12.78,10.06L82.62,186l3.77,6.53,24-13.83,2.31,16.1,30.55-39.42m9.61-5.54-6.29,8.11L116,197.33l-6.07,7.83-1.41-9.8-1.43-10L88.49,196.13l-3.64,2.09-2.1-3.63L79,188.06l-2.1-3.64,3.64-2.1,18.59-10.73-7.91-6.22-7.78-6.12,9.81-1.34,49.42-6.73,10.17-1.38Zm8.95,5.56,30.54,39.43,2.32-16.1,24,13.84,3.77-6.53-24-13.84,12.79-10-49.42-6.75m-9.6-5.55,10.17,1.39L211.76,158l9.81,1.34-7.78,6.12-7.91,6.22,18.59,10.74,3.64,2.1L226,188.11l-3.77,6.52-2.1,3.64-3.63-2.1-18.59-10.74-1.44,10-1.41,9.8L189,197.36l-30.54-39.43-6.28-8.12ZM112.7,105.2l-2.32,16.1-24-13.85L82.65,114l24,13.84L93.82,137.88l49.41,6.75L112.7,105.2M110,94.8l6.07,7.83,30.53,39.42,6.29,8.12-10.18-1.39L93.25,142l-9.81-1.34,7.79-6.12,7.91-6.21L80.55,117.62l-3.64-2.1,2.1-3.64,3.77-6.53,2.1-3.63,3.64,2.1,18.59,10.74,1.43-10L110,94.8Z"/><path class="cls-2" d="M324.43,176.72a4.52,4.52,0,0,1-1.81-3.62,4.34,4.34,0,0,1,4.4-4.27,4,4,0,0,1,2.46.77c6.86,4.66,14,7.12,21.23,7.12,8,0,13.85-4.14,13.85-10.61v-.26c0-6.73-7.9-9.32-16.7-11.78-10.48-3-22.13-6.6-22.13-18.9v-.26c0-11.52,9.58-19.15,22.78-19.15a46.71,46.71,0,0,1,21.36,5.69,4.85,4.85,0,0,1,2.46,4.14,4.34,4.34,0,0,1-4.41,4.27,5,5,0,0,1-2.2-.51c-5.69-3.24-11.77-5.18-17.47-5.18-7.9,0-12.94,4.14-12.94,9.71v.26c0,6.34,8.28,8.8,17.21,11.52,10.36,3.1,21.49,7.12,21.49,19.15v.26c0,12.69-10.49,20.07-23.82,20.07A46.31,46.31,0,0,1,324.43,176.72Z"/><path class="cls-2" d="M453.66,150.7v-.25a34.89,34.89,0,0,1,69.77-.26v.26a34.75,34.75,0,0,1-35.08,34.94A34.28,34.28,0,0,1,453.66,150.7Zm59.54,0v-.25c0-14.37-10.74-26.15-24.85-26.15-14.5,0-24.46,11.78-24.46,25.89v.26c0,14.36,10.61,26,24.72,26C503.11,176.46,513.2,164.81,513.2,150.7Z"/><path class="cls-2" d="M547.88,180.35l-20.32-56.57a6.44,6.44,0,0,1-.65-2.72,4.89,4.89,0,0,1,4.92-4.79c2.72,0,4.4,1.69,5,4.15l17,50.22,16.82-50.35c.78-2.33,2.46-4,5.05-4h.52c2.72,0,4.27,1.69,5,4l17,50.35,17.09-50.48a4.84,4.84,0,0,1,9.58.77,9.12,9.12,0,0,1-.52,2.72l-20.45,56.7c-1,3-3.11,4.53-5.57,4.53H598c-2.45,0-4.4-1.56-5.3-4.53L576,131.55l-16.83,48.8c-1,3-2.85,4.53-5.43,4.53h-.39C551,184.88,548.92,183.32,547.88,180.35Z"/><path class="cls-2" d="M630.6,151.09v-.26c0-18.51,14.76-34.56,33.65-34.56,11.4,0,18.9,4.92,24.86,10.49a3.48,3.48,0,0,1,.9,2.33,3.31,3.31,0,0,1-5.43,2.46c-5.31-5.05-11.52-9.32-20.45-9.32-15,0-26.67,12.55-26.67,28.35v.25c0,15.92,12,28.61,27.18,28.61,8.54,0,15.41-4.14,20.71-9.45a2.92,2.92,0,0,1,2.07-1,3.34,3.34,0,0,1,3.11,3.1,2.82,2.82,0,0,1-.78,1.94c-6.6,6.73-14.23,11.39-25.5,11.39C645.23,185.39,630.6,169.6,630.6,151.09Z"/><path class="cls-2" d="M697.39,151.09v-.26c0-18.51,14.37-34.56,34.05-34.56s33.78,15.8,33.78,34.31v.25c0,18.51-14.37,34.56-34,34.56S697.39,169.6,697.39,151.09Zm61,0v-.26c0-15.92-11.91-28.6-27.18-28.6-15.66,0-26.93,12.81-26.93,28.35v.25c0,15.92,11.91,28.61,27.19,28.61C747.1,179.44,758.36,166.63,758.36,151.09Z"/><path class="cls-2" d="M996,151v-.26c0-19.15,13.46-34.43,31.33-34.43,18.51,0,30.29,15.28,30.29,34.18a3.22,3.22,0,0,1-3.11,3h-51.78c1.17,16.44,12.95,26,25.89,26a29,29,0,0,0,21.36-9.06,2.91,2.91,0,0,1,2.07-1,3.35,3.35,0,0,1,3.11,3.11,2.84,2.84,0,0,1-.78,1.94c-6.47,6.47-14.11,11-26,11C1011,185.39,996,171.54,996,151Zm54.82-3.23c-.91-13.33-8.54-25.63-23.69-25.63-13.07,0-23.17,11-24.33,25.63Z"/><path class="cls-2" d="M1109.48,151.09v-.26c0-18.51,14.76-34.56,33.66-34.56,11.39,0,18.9,4.92,24.85,10.49a3.44,3.44,0,0,1,.91,2.33,3.21,3.21,0,0,1-3.24,3.23,3.25,3.25,0,0,1-2.2-.77c-5.31-5.05-11.52-9.32-20.45-9.32-15,0-26.66,12.55-26.66,28.35v.25c0,15.92,12,28.61,27.18,28.61,8.54,0,15.4-4.14,20.71-9.45a2.9,2.9,0,0,1,2.07-1,3.33,3.33,0,0,1,3.1,3.1,2.81,2.81,0,0,1-.77,1.94c-6.6,6.73-14.24,11.39-25.5,11.39C1124.11,185.39,1109.48,169.6,1109.48,151.09Z"/><path class="cls-2" d="M1176.16,151v-.26c0-19.15,13.47-34.43,31.33-34.43,18.51,0,30.29,15.28,30.29,34.18a3.22,3.22,0,0,1-3.11,3h-51.78c1.17,16.44,12.95,26,25.89,26a29,29,0,0,0,21.36-9.06,2.91,2.91,0,0,1,2.07-1,3.34,3.34,0,0,1,3.11,3.11,2.84,2.84,0,0,1-.78,1.94c-6.47,6.47-14.11,11-26,11C1191.18,185.39,1176.16,171.54,1176.16,151Zm54.82-3.23c-.9-13.33-8.54-25.63-23.69-25.63-13.07,0-23.16,11-24.33,25.63Z"/><path class="cls-2" d="M847.4,116.27h-1c-10.45,0-18.23,4.92-22.26,13.11-4-8.19-11.81-13.11-22.26-13.11h-1c-15.66,0-25.37,11-25.37,27.57v37.28a3,3,0,0,0,3.11,3.24,3.14,3.14,0,0,0,3.24-3.24v-36.5c0-14.24,7.37-22.52,19.54-22.52s19.55,8.28,19.55,22.52v36.5a3.24,3.24,0,1,0,6.47,0v-36.5c0-14.24,7.38-22.52,19.54-22.52s19.55,8.28,19.55,22.52v36.5a3.13,3.13,0,0,0,3.23,3.24,3,3,0,0,0,3.11-3.24V143.84C872.77,127.28,863.06,116.27,847.4,116.27Z"/><path class="cls-2" d="M958.39,116.27h-1c-10.46,0-18.24,4.92-22.27,13.11-4-8.19-11.81-13.11-22.26-13.11h-1c-15.66,0-25.37,11-25.37,27.57v37.28a3,3,0,0,0,3.11,3.24,3.14,3.14,0,0,0,3.24-3.24v-36.5c0-14.24,7.37-22.52,19.54-22.52s19.55,8.28,19.55,22.52v36.5a3.24,3.24,0,1,0,6.47,0v-36.5c0-14.24,7.38-22.52,19.54-22.52s19.55,8.28,19.55,22.52v36.5a3.13,3.13,0,0,0,3.23,3.24,3,3,0,0,0,3.11-3.24V143.84C983.76,127.28,974.05,116.27,958.39,116.27Z"/><path class="cls-2" d="M1097.05,116.38a33.56,33.56,0,0,1,7.89.9,3,3,0,0,1,2.46,3,2.88,2.88,0,0,1-3.62,2.72,35.42,35.42,0,0,0-6.73-.78c-12.17,0-19.55,8.29-19.55,22.52v36.4a3.13,3.13,0,0,1-3.23,3.24,3,3,0,0,1-3.11-3.24V144c0-16.57,9.71-27.57,25.37-27.57Z"/><path class="cls-2" d="M414.49,115.5c-16.18,0-29.19,10.1-29.19,28.4v35.54a5,5,0,1,0,10,0V146.59c0-14.61,7.44-22.29,19.22-22.29s19.22,7.68,19.22,22.29v32.85a5,5,0,1,0,10,0V143.9C443.68,125.6,430.67,115.5,414.49,115.5Z"/></svg>
          
        </a>
        </div>
        
          <small class="copyright__content">&copy; 2024 CNN | Snow Commerce, Inc. is the seller of all merchandise and is solely responsible for all aspects of your purchase.</small>
          
        </div>
      </div>
    </div></div>
</footer>

<script>
  jQuery(document).ready(function ($){    
    $.noConflict();

  // Mobile footer navigation
    function mobileFooter() {
    $('.footer-header-container.mobile').click(
        function () {
            if ($(window).width() <= 767) {
            //toggle mobile menu
            $(this).next(".footer-block__details-content").slideToggle();
            $(this).next(".footer-social-container").slideToggle();          
            $(this).find(".icon-minus").toggle();      
            $(this).find(".icon-plus").toggle();
            $(this).find(".icon-caret").toggleClass("active");  
            }
        });
    }
    mobileFooter();

    if (Shopify.designMode){
      document.addEventListener('shopify:section:load', function(){
          if(event.detail.sectionId === 'footer') {
              mobileFooter();
          }
      });
    }
  });
</script>




</div>
    
    <link href="//store.cnn.com/cdn/shop/t/6/assets/component-back-to-top.css?v=180360493213288568011667402762" rel="stylesheet" type="text/css" media="all" />
<button class="hidden"
id="backToTop" 
title="Back to Top" type="button" tabindex="0" role="button">
<!--?xml version="1.0" encoding="utf-8"?-->

    <img  src="//store.cnn.com/cdn/shop/files/arrow_CNN_small.png?v=1656443138" alt="settings.back_to_top_image.alt">


</button>



    

    <ul hidden>
      <li id="a11y-refresh-page-message">Choosing a selection results in a full page refresh.</li>
    </ul>

    

    

    <script>
      window.shopUrl = 'https://store.cnn.com';
      window.routes = {
        cart_add_url: '/cart/add',
        cart_change_url: '/cart/change',
        cart_update_url: '/cart/update',
        predictive_search_url: '/search/suggest'
      };

      window.cartStrings = {
        error: `There was an error while updating your cart. Please try again.`,
        quantityError: `You can only add [quantity] of this item to your cart.`
      }

      window.variantStrings = {
        addToCart: `Add to cart`,
        soldOut: `Sold out`,
        unavailable: `Unavailable`,
      }

      window.accessibilityStrings = {
        shareSuccess: `Link copied to clipboard`,
      }
    </script><script src="//store.cnn.com/cdn/shop/t/6/assets/predictive-search.js?v=32935990188511922541667402762" defer="defer"></script>
      

<link rel="dns-prefetch" href="https://swymstore-v3free-01.swymrelay.com" crossorigin>
<link rel="dns-prefetch" href="//swymv3free-01.azureedge.net/code/swym-shopify.js">
<link rel="preconnect" href="//swymv3free-01.azureedge.net/code/swym-shopify.js">
<script id="swym-snippet">
  window.swymLandingURL = document.URL;
  window.swymCart = {"note":null,"attributes":{},"original_total_price":0,"total_price":0,"total_discount":0,"total_weight":0.0,"item_count":0,"items":[],"requires_shipping":false,"currency":"USD","items_subtotal_price":0,"cart_level_discount_applications":[],"checkout_charge_amount":0};
  window.swymPageLoad = function(){
    window.SwymProductVariants = window.SwymProductVariants || {};
    window.SwymHasCartItems = 0 > 0;
    window.SwymPageData = {}, window.SwymProductInfo = {};
    var unknown = {et: 0};
    window.SwymPageData = unknown;
    
    window.SwymPageData.uri = window.swymLandingURL;
  };

  if(window.selectCallback){
    (function(){
      // Variant select override
      var originalSelectCallback = window.selectCallback;
      window.selectCallback = function(variant){
        originalSelectCallback.apply(this, arguments);
        try{
          if(window.triggerSwymVariantEvent){
            window.triggerSwymVariantEvent(variant.id);
          }
        }catch(err){
          console.warn("Swym selectCallback", err);
        }
      };
    })();
  }
  window.swymCustomerId = null;
  window.swymCustomerExtraCheck = null;

  var swappName = ("Wishlist" || "Wishlist");
  var swymJSObject = {
    pid: "2otO8FdEKw03JJnDswQ2qyiJjfNefCq4yGG4LoVrCio=" || "2otO8FdEKw03JJnDswQ2qyiJjfNefCq4yGG4LoVrCio=",
    interface: "/apps/swym" + swappName + "/interfaces/interfaceStore.php?appname=" + swappName
  };
  window.swymJSShopifyLoad = function(){
    if(window.swymPageLoad) swymPageLoad();
    if(!window._swat) {
      (function (s, w, r, e, l, a, y) {
        r['SwymRetailerConfig'] = s;
        r[s] = r[s] || function (k, v) {
          r[s][k] = v;
        };
      })('_swrc', '', window);
      _swrc('RetailerId', swymJSObject.pid);
      _swrc('Callback', function(){initSwymShopify();});
    }else if(window._swat.postLoader){
      _swrc = window._swat.postLoader;
      _swrc('RetailerId', swymJSObject.pid);
      _swrc('Callback', function(){initSwymShopify();});
    }else{
      initSwymShopify();
    }
  }
  if(!window._SwymPreventAutoLoad) {
    swymJSShopifyLoad();
  }
  window.swymGetCartCookies = function(){
    var RequiredCookies = ["cart", "swym-session-id", "swym-swymRegid", "swym-email"];
    var reqdCookies = {};
    RequiredCookies.forEach(function(k){
      reqdCookies[k] = _swat.storage.getRaw(k);
    });
    var cart_token = window.swymCart.token;
    var data = {
        action:'cart',
        token:cart_token,
        cookies:reqdCookies
    };
    return data;
  }

  window.swymGetCustomerData = function(){
    
    return {status:1};
    
  }
</script>

<style id="safari-flasher-pre"></style>
<script>
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    document.getElementById("safari-flasher-pre").innerHTML = ''
      + '#swym-plugin,#swym-hosted-plugin{display: none;}'
      + '.swym-button.swym-add-to-wishlist{display: none;}'
      + '.swym-button.swym-add-to-watchlist{display: none;}'
      + '#swym-plugin  #swym-notepad, #swym-hosted-plugin  #swym-notepad{opacity: 0; visibility: hidden;}'
      + '#swym-plugin  #swym-notepad, #swym-plugin  #swym-overlay, #swym-plugin  #swym-notification,'
      + '#swym-hosted-plugin  #swym-notepad, #swym-hosted-plugin  #swym-overlay, #swym-hosted-plugin  #swym-notification'
      + '{-webkit-transition: none; transition: none;}'
      + '';
    window.SwymCallbacks = window.SwymCallbacks || [];
    window.SwymCallbacks.push(function(tracker){
      tracker.evtLayer.addEventListener(tracker.JSEvents.configLoaded, function(){
        // flash-preventer
        var x = function(){
          SwymUtils.onDOMReady(function() {
            var d = document.createElement("div");
            d.innerHTML = "<style id='safari-flasher-post'>"
              + "#swym-plugin:not(.swym-ready),#swym-hosted-plugin:not(.swym-ready){display: none;}"
              + ".swym-button.swym-add-to-wishlist:not(.swym-loaded){display: none;}"
              + ".swym-button.swym-add-to-watchlist:not(.swym-loaded){display: none;}"
              + "#swym-plugin.swym-ready  #swym-notepad, #swym-plugin.swym-ready  #swym-overlay, #swym-plugin.swym-ready  #swym-notification,"
              + "#swym-hosted-plugin.swym-ready  #swym-notepad, #swym-hosted-plugin.swym-ready  #swym-overlay, #swym-hosted-plugin.swym-ready  #swym-notification"
              + "{-webkit-transition: opacity 0.3s, visibility 0.3ms, -webkit-transform 0.3ms !important;-moz-transition: opacity 0.3s, visibility 0.3ms, -moz-transform 0.3ms !important;-ms-transition: opacity 0.3s, visibility 0.3ms, -ms-transform 0.3ms !important;-o-transition: opacity 0.3s, visibility 0.3ms, -o-transform 0.3ms !important;transition: opacity 0.3s, visibility 0.3ms, transform 0.3ms !important;}"
              + "</style>";
            document.head.appendChild(d);
          });
        };
        setTimeout(x, 10);
      });
    });
  }
</script>
<style id="swym-product-view-defaults">
  /* Hide when not loaded */
  .swym-button.swym-add-to-wishlist-view-product:not(.swym-loaded){
    display: none;
  }
</style>


    

    

  

<link rel="dns-prefetch" href="https://swymstore-v3free-01.swymrelay.com" crossorigin>
<link rel="dns-prefetch" href="//swymv3free-01.azureedge.net/code/swym-shopify.js">
<link rel="preconnect" href="//swymv3free-01.azureedge.net/code/swym-shopify.js">
<script id="swym-snippet">
  window.swymLandingURL = document.URL;
  window.swymCart = {"note":null,"attributes":{},"original_total_price":0,"total_price":0,"total_discount":0,"total_weight":0.0,"item_count":0,"items":[],"requires_shipping":false,"currency":"USD","items_subtotal_price":0,"cart_level_discount_applications":[],"checkout_charge_amount":0};
  window.swymPageLoad = function(){
    window.SwymProductVariants = window.SwymProductVariants || {};
    window.SwymHasCartItems = 0 > 0;
    window.SwymPageData = {}, window.SwymProductInfo = {};
    var unknown = {et: 0};
    window.SwymPageData = unknown;
    
    window.SwymPageData.uri = window.swymLandingURL;
  };

  if(window.selectCallback){
    (function(){
      // Variant select override
      var originalSelectCallback = window.selectCallback;
      window.selectCallback = function(variant){
        originalSelectCallback.apply(this, arguments);
        try{
          if(window.triggerSwymVariantEvent){
            window.triggerSwymVariantEvent(variant.id);
          }
        }catch(err){
          console.warn("Swym selectCallback", err);
        }
      };
    })();
  }
  window.swymCustomerId = null;
  window.swymCustomerExtraCheck = null;

  var swappName = ("Wishlist" || "Wishlist");
  var swymJSObject = {
    pid: "2otO8FdEKw03JJnDswQ2qyiJjfNefCq4yGG4LoVrCio=" || "2otO8FdEKw03JJnDswQ2qyiJjfNefCq4yGG4LoVrCio=",
    interface: "/apps/swym" + swappName + "/interfaces/interfaceStore.php?appname=" + swappName
  };
  window.swymJSShopifyLoad = function(){
    if(window.swymPageLoad) swymPageLoad();
    if(!window._swat) {
      (function (s, w, r, e, l, a, y) {
        r['SwymRetailerConfig'] = s;
        r[s] = r[s] || function (k, v) {
          r[s][k] = v;
        };
      })('_swrc', '', window);
      _swrc('RetailerId', swymJSObject.pid);
      _swrc('Callback', function(){initSwymShopify();});
    }else if(window._swat.postLoader){
      _swrc = window._swat.postLoader;
      _swrc('RetailerId', swymJSObject.pid);
      _swrc('Callback', function(){initSwymShopify();});
    }else{
      initSwymShopify();
    }
  }
  if(!window._SwymPreventAutoLoad) {
    swymJSShopifyLoad();
  }
  window.swymGetCartCookies = function(){
    var RequiredCookies = ["cart", "swym-session-id", "swym-swymRegid", "swym-email"];
    var reqdCookies = {};
    RequiredCookies.forEach(function(k){
      reqdCookies[k] = _swat.storage.getRaw(k);
    });
    var cart_token = window.swymCart.token;
    var data = {
        action:'cart',
        token:cart_token,
        cookies:reqdCookies
    };
    return data;
  }

  window.swymGetCustomerData = function(){
    
    return {status:1};
    
  }
</script>

<style id="safari-flasher-pre"></style>
<script>
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    document.getElementById("safari-flasher-pre").innerHTML = ''
      + '#swym-plugin,#swym-hosted-plugin{display: none;}'
      + '.swym-button.swym-add-to-wishlist{display: none;}'
      + '.swym-button.swym-add-to-watchlist{display: none;}'
      + '#swym-plugin  #swym-notepad, #swym-hosted-plugin  #swym-notepad{opacity: 0; visibility: hidden;}'
      + '#swym-plugin  #swym-notepad, #swym-plugin  #swym-overlay, #swym-plugin  #swym-notification,'
      + '#swym-hosted-plugin  #swym-notepad, #swym-hosted-plugin  #swym-overlay, #swym-hosted-plugin  #swym-notification'
      + '{-webkit-transition: none; transition: none;}'
      + '';
    window.SwymCallbacks = window.SwymCallbacks || [];
    window.SwymCallbacks.push(function(tracker){
      tracker.evtLayer.addEventListener(tracker.JSEvents.configLoaded, function(){
        // flash-preventer
        var x = function(){
          SwymUtils.onDOMReady(function() {
            var d = document.createElement("div");
            d.innerHTML = "<style id='safari-flasher-post'>"
              + "#swym-plugin:not(.swym-ready),#swym-hosted-plugin:not(.swym-ready){display: none;}"
              + ".swym-button.swym-add-to-wishlist:not(.swym-loaded){display: none;}"
              + ".swym-button.swym-add-to-watchlist:not(.swym-loaded){display: none;}"
              + "#swym-plugin.swym-ready  #swym-notepad, #swym-plugin.swym-ready  #swym-overlay, #swym-plugin.swym-ready  #swym-notification,"
              + "#swym-hosted-plugin.swym-ready  #swym-notepad, #swym-hosted-plugin.swym-ready  #swym-overlay, #swym-hosted-plugin.swym-ready  #swym-notification"
              + "{-webkit-transition: opacity 0.3s, visibility 0.3ms, -webkit-transform 0.3ms !important;-moz-transition: opacity 0.3s, visibility 0.3ms, -moz-transform 0.3ms !important;-ms-transition: opacity 0.3s, visibility 0.3ms, -ms-transform 0.3ms !important;-o-transition: opacity 0.3s, visibility 0.3ms, -o-transform 0.3ms !important;transition: opacity 0.3s, visibility 0.3ms, transform 0.3ms !important;}"
              + "</style>";
            document.head.appendChild(d);
          });
        };
        setTimeout(x, 10);
      });
    });
  }
</script>
<style id="swym-product-view-defaults">
  /* Hide when not loaded */
  .swym-button.swym-add-to-wishlist-view-product:not(.swym-loaded){
    display: none;
  }
</style>


</body>

  
  <script src="https://a.klaviyo.com/media/js/onsite/onsite.js"></script>
  <script>
      var klaviyo = klaviyo || [];
      klaviyo.init({
        account: "Vx2nZy",
        platform: "shopify",
        exclude_on_tags: ""
      });
      klaviyo.enable("backinstock",{ 
      trigger: {
        product_page_text: "Notify Me When Available",
        product_page_class: "button",
        product_page_text_align: "center",
        product_page_margin: "0px",
        replace_anchor: false
      },
      modal: {
      headline: "{product_name}",
      body_content: "Register to receive a notification when this item comes back in stock.",
      email_field_label: "Email",
      button_label: "Notify Me When Available",
      subscription_success_label: "You're in! We'll let you know when it's back.",
      footer_content: '',
      additional_styles: "@import url('https://fonts.googleapis.com/css?family=Helvetica+Neue');",
      drop_background_color: "#000000",
      background_color: "#FFFFFF",
      text_color: "#222222",
      button_text_color: "#FFFFFF",
      button_background_color: "#439fdb",
      close_button_color: "#CCCCCC",
      error_background_color: "#fcd6d7",
      error_text_color: "#C72E2F",
      success_background_color: "#d3efcd",
      success_text_color: "#1B9500"
      }
    });
  </script>


</html>
