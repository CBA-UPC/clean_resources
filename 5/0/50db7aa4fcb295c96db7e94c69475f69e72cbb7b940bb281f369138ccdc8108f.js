(function applyParselyConversions(){
    const DEBUG_MODE = true;

    window.addEventListener("DOMContentLoaded", function applyTracking() {

        function isCorporateSubscriptionPage() {
          const target = "corporate-subscriptions";
          const url = new URL( window.location.href );
          if ( url.pathname.indexOf( target) > 0 ) {
            return true;
          }
          return false;
        }
        

        const loginTracker = () =>
         PARSELY.conversions.trackLinkClick( "SiteLogin" );

        const freeRegTracker = () =>{
            var conversion_from=jQuery("#aw_reg_conversion_from").val();
            var label= "Free Registration";
            if(conversion_from=="article"){
                label="Article Registration";
            }
         PARSELY.conversions.trackLinkClick( label );
     }
        const paidSubTracker = () =>
         PARSELY.conversions.trackSubscription( "Paid Subscription" ) ;
        const accountTracker = 
        const articleSubTracker = () =>
         PARSELY.conversions.trackSubscription( "Article Subscription" );
        const articleRegTracker = () =>
         PARSELY.conversions.trackSubscription( "Article Registration" );

        const magazineSubTracker = () =>
         PARSELY.conversions.trackSubscription( "Magazine Subscription" );
        const magazineRegTracker = () =>
         PARSELY.conversions.trackSubscription( "Magazine Registration" );

        const whitepaperTracker = () =>
         PARSELY.conversions.trackLinkClick( "Whitepaper" );

        const webinarTracker = () => 
          PARSELY.conversions.trackLinkClick( "Webinar" );

        const microLearningClickTracker = 

        handlePageload();
        function handlePageload() {
           if ( jQuery( ".login-page" ).length > 0 ) {
                applyLoginListeners();
           }

           if ( jQuery( ".registration-page" ).length > 0 ) {
               applyRegistrationListeners();
           } 
           
           if ( jQuery( ".post-type-archive-webinar" ).length > 0 ) {
               applyWebinarListeners();
           }

           if ( jQuery( ".sponsored_post-template-default,.sponsored_post-template-sponsor-asset-download, .adw_resource-template-sponsor-asset-download" ).length > 0 ) {
               applyWhitepaperListeners();
           }

           if ( jQuery( ".issue,.aw-issue-message a" ).length > 0 ) {
               applyIssueListeners();
           }

           if ( jQuery ( ".aw_learning-template-default" ).length > 0 ) {
               applyMicrolearningListeners();
           } 

           if ( jQuery( ".adw-article-body,.single-post" ).length > 0 ) {
              applyArticleListeners();
          }

          if ( jQuery( "form.parsely-type-lead-capture" ).length > 0 ) {
              //applyContactForm7Listeners();
          } 
          if ( jQuery( ".user-profile-settings-page" ).length > 0 ) {
              applyAccountListeners();
       }
       if(jQuery("#aw-navbar").length>0){
           //applySubscribeBtnListeners()
       } 
       if ( jQuery( ".aw_learning-template-default .aw-course-tile .aw-course-btn" ).length > 0 ) {
                applyMicroClickListeners();
           }
       }
       
       function applyMicroClickListeners(){
           jQuery( ".aw_learning-template-default .aw-course-tile .aw-course-btn").on('click',microLearningClickTracker);
       }

//Article Listener Function
       function applyArticleListeners() {
          const iframeCTASelector = "iframe[id^=lightbox-iframe]";

          // Re-register event listeners when the paywall is lifted or Read More button is clicked
          jQuery( document ).on( "aw_article_content_loaded", applyArticleListeners );
          jQuery( iframeCTASelector ).on("load", function applyIframeListeners() {
            const digiohRegisterSelector = "#button3";
            const digiohLoginSelector  = "#button2";
            const digiohSubscribeSelector  = "#button1";
            const iframe = jQuery( iframeCTASelector ).contents();

            iframe.find( digiohRegisterSelector ).off( "click" ).on( "click", articleRegTracker );
            iframe.find( digiohLoginSelector ).off( "click" ).on( "click", loginTracker );
            //iframe.find( digiohSubscribeSelector ).off( "click" ).on( "click", articleSubTracker );
          })
       }


       function applyContactForm7Listeners() {
          const label = isCorporateSubscriptionPage()
            ? "Corporate Subscription"
            : "Contact Form"

          const tracker = 

          jQuery("form.parsely-type-lead-capture").on( "submit", tracker );
       }

       function applyAccountListeners(){
         jQuery( "#aw-update-profile-btn").on('click',accountTracker);
       }
       

       
       
       function applyWhitepaperListeners() {
          const iframeCTASelector = "iframe[id^=lightbox-iframe]";

          // Re-register event listeners when the paywall is lifted or Read More button is clicked
          jQuery( document ).on( "aw_article_content_loaded", applyArticleListeners );

          jQuery( iframeCTASelector ).on("load", function applyIframeListeners() {
            const downloadSelector  = "#button1";
            const iframe = jQuery( iframeCTASelector ).contents();
            jQuery( downloadSelector ).on( "click", whitepaperTracker );
          });
       }


       function applyWebinarListeners() {
           jQuery(".section--index-item a").on( "click", webinarTracker );
           jQuery(".js-load-more-btn").on( "click", function resetListeners() {
             jQuery(".section--index-item a").off( "click" );
             jQuery(".js-load-more-btn").off( "click" );
             setTimeout( applyWebinarListeners, 1000 );
           });
       }

       function applyRegistrationListeners() {
         const $form = jQuery( "#registration-page form");
         //$form.on( "submit", freeRegTracker );
       }

        
        // Passes the LinkClick event to Parsely with the login label on login
        function applyLoginListeners() {
            const loginButton = document.querySelector( "#aw_login_button" );
            const magicLinkButton = document.querySelector( "#aw_magic_link_button" );
            
            loginButton && loginButton.addEventListener( "click", loginTracker, {once: true} );
            magicLinkButton && magicLinkButton.addEventListener( "click", loginTracker, {once: true} );
        }
    });

})();

