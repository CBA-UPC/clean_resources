import{o as t,j as i}from"./e5833d38.js";import{cM as n}from"./48a35c56.js";const r="http://json-schema.org/draft-07/schema#",a="object",o={wrapperClass:{type:"string",title:"Wrapper Class"},wrapperBackgroundImage:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Background Image"},wrapperBackgroundColor:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Background Color"},wrapperBackgroundPosition:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Background Position"},wrapperBackgroundRepeat:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Background Repeat"},wrapperBackgroundSize:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Background Size"},wrapperBackgroundOpacity:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Background Opacity"},wrapperPadding:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Padding"},wrapperHeight:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Height"},wrapperMaxHeight:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Max Height"},wrapperMargin:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Margin"},wrapperBackdropFilter:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Backdrop Filter"},isDisabled:{type:"boolean",title:"Is Disabled"},wrapperWidth:{anyOf:[{$ref:"#/definitions/ComponentWidth"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Wrapper Width"},blockedScope:{type:"array",items:{$ref:"#/definitions/Scope"},title:"Blocked Scopes"},requireScope:{type:"array",items:{$ref:"#/definitions/Scope"},title:"Required Scopes"},requiresFeature:{type:"array",items:{$ref:"#/definitions/FlagKeys"},title:"Required Feature Flags"},requiresPhaseId:{type:"array",items:{type:"string",title:"string"},title:"Phases to Display In"},heading:{type:"string",title:"Heading"},subheading:{type:"string",title:"Subheading"},headingAlignment:{$ref:"#/definitions/HeadingTextAlignment",title:"Heading Alignment"},headingLevel:{$ref:"#/definitions/HeadingLevel",title:"Heading Level"},headingButtons:{type:"array",items:{$ref:"#/definitions/IButtonData"},title:"Heading Buttons"},fullWidthHeading:{type:"boolean",title:"Full Width Heading"},removeOuterPadding:{type:"boolean",title:"Remove Outer Padding"},headingMaxWidth:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Heading Max Width"},headingWidth:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],title:"Heading Width"},text:{type:"string",title:"Text"},buttons:{type:"array",items:{$ref:"#/definitions/IButtonData"},title:"Buttons"},contentVerticallyCentered:{type:"boolean",title:"Content Vertically Centered"},image:{$ref:"#/definitions/ComponentImageSettings",title:"Image settings"},assetPosition:{type:"string",enum:["left","right"],title:"Asset Position"},lightContent:{type:"boolean",title:"Light Content"},imageStack:{type:"string",enum:["mobile","tablet"],title:"Stack Image"},imageStackPosition:{type:"string",enum:["top","bottom"],title:"Image Top"},imageMaxHeight:{type:"string",title:"Image Max Height"},removeRightGutter:{type:"boolean",title:"Remove right side gutter"}},s=!1,l={"IWrapperMedia<string>":{type:"object",properties:{mobile:{type:"string",title:"Mobile"},tablet:{type:"string",title:"Tablet"},desktop:{type:"string",title:"Desktop"}},additionalProperties:!1,title:"IWrapperMedia"},ComponentWidth:{type:"string",enum:["100","66","50","33","25","20"],title:"Component Width"},Scope:{type:"string",enum:["expertconnect","meetings","side-meetings","event-tools","inperson","contenteditor","session-catalog","siteeditor","microsoft-employee","media-day","inperson-region-france","inperson-region-germany","inperson-region-japan","inperson-region-latam","inperson-region-uk","redirect-region-france","redirect-region-germany","redirect-region-japan","redirect-region-latam","redirect-region-uk"]},FlagKeys:{$ref:"#/definitions/KeysOfType<boolean,IConfiguration>"},"KeysOfType<boolean,IConfiguration>":{type:"string",enum:["allowAdditionalJsonProperties","allowLogOn","attendeeCardsHaveSocialLinks","enableAcs","enableAppointmentCreation","enableAttendees","enableClarity","enableCompanyCardCatalogView","enableCompanies","enableSessionConflictMessages","enableCreateZone","enableDevFunctions","enableEventHubScans","enableEventPointScans","enableFavorites","enableMySchedule","enableLegacyMyEventButton","enablePartnerDetailNavigationHub","enableRelatedSessions","enableSavingUserConsent","enableSessionCatalogDetailPageLink","enableSessionDetailPubbleReactions","enableSessions","enableShareScheduleFeature","enableSignalr","enableSpeakerNavigation","enableSpeakers","enableSponsorChat","enableTeamsLiveEventFailover","enableWebCal","ignoreSponsorLevelOnDirectoryPage","isDateTestingEnabled","overrideFallbackThumbnailBackground","releaseSessionResourcesAfterStartTime","requireMediusAuthentication","schedulerDatesLinkToMeetingDates","sessionsPopularitySortIsDefault","showAgendaItems","showAttendeeCatalogHeaderButtons","showAppointmentsInMySchedule","showAvailableRsvp","showAvailableRsvpSelector","showChronologicalSortOption","showColoredSessionDateSelector","showCompanyDetailsPage","showCompanyDirectory","showConnectionZoneDateSelector","showDownloadIcsOnSessionDetails","showDownloadMyBackpackInMySchedule","showDownloadToCalendar","showDrawerContainer","showEmailMessaging","showEvaluations","showExpertFinder","showFavoriteButtonsInSponsorDirectory","showFavoritedAttendeeToggle","showFavoritedSessionsToggle","showFavoritedSpeakersToggle","showFavoritedSponsorsToggle","showFavoritesHeaderMessage","showLanguageSwitcher","showLearningZoneDateSelector","showLocations","showMaps","showMeetingLocation","showMeetingRefreshButton","showMeetings","showMeetingsInMySchedule","showMessaging","showMobileApp","showMyScheduleHeaderMessage","showNotificationsInMySchedule","showPostConferenceEvaluation","showPreConferenceEvaluation","showProfileCompletion","showRegistrationButton","showRepeatedSessionsInFavorites","showRoomsToAnonymousUsers","showSchedulingAssistant","showSessionAudioLanguage","showSessionDateSelector","showSessionTagsInSideBar","showSessionsHeaderMessage","showSessionsInMySchedule","showSessionsPopularitySort","showSessionCatalogHeaderButtons","showSpeakerCatalogHeaderButtons","showSpeakerConnect","showSpeakerInformation","showSpeakersInSessionBlock","showSponsorPagePagination","showSponsorPageSort","showTeamsMessaging","showTimeRefiner","showTripReportAction","showUserConsentPopup","showUserProfilePage","useAttendeeFavoriteGridView","useExhibitorFavoriteGridView","useMixedSponsorLevelListings","useScannedSessionsOnTripReport","useSessionFailOverVideo","useUhfPartnerFooters"]},HeadingTextAlignment:{type:"string",enum:["center","left","right"]},HeadingLevel:{type:"number",enum:[1,2,3,4,5,6]},IButtonData:{type:"object",properties:{blockedScope:{type:"array",items:{$ref:"#/definitions/Scope"},title:"Blocked Scopes"},requireScope:{type:"array",items:{$ref:"#/definitions/Scope"},title:"Required Scopes"},requiresFeature:{type:"array",items:{$ref:"#/definitions/FlagKeys"},title:"Required Feature Flags"},requiresPhaseId:{type:"array",items:{type:"string",title:"string"},title:"Phases to Display In"},text:{type:"string",title:"Text"},url:{type:"string",title:"Url"},type:{type:"string",enum:["link","ctalink","button","ctabutton","lightbox-link"],title:"Type"},target:{$ref:"#/definitions/TargetType",title:"Target"},ariaLabel:{type:"string",title:"Aria Label"},buttonStyle:{$ref:"#/definitions/DVBlinkStyle",title:"Button Style"},accentTheme:{$ref:"#/definitions/IDVBlinkAccentScheme",title:"Accent Theme"},telemetryIdentifier:{type:"string",title:"Telemetry Identifier"},analyticsTag:{$ref:"#/definitions/IAnalyticsTagData",title:"Analytics Tag"},classes:{type:"string",title:"Classes"},lightBoxConfig:{$ref:"#/definitions/ILightBoxConfig",title:"Light Box Config"},glyph:{$ref:"#/definitions/IDvGlyphProps",title:"Glyph"},scrollTo:{type:"string",title:"Scroll To"}},required:["text","url","type","telemetryIdentifier"],additionalProperties:!1},TargetType:{type:"string",enum:["_self","_blank"]},DVBlinkStyle:{type:"string",enum:["primary","secondary","tertiary","text","text-button"]},IDVBlinkAccentScheme:{type:"object",properties:{backgroundColor:{type:"string",title:"string"},textColor:{type:"string",title:"string"}},additionalProperties:!1},IAnalyticsTagData:{type:"object",properties:{aN:{type:"string",title:"aN",description:"Area (eg. Navigation, Session Catalog)"},cN:{type:"string",title:"cN",description:"Name of Element Being Tracked"},cNPostFix:{type:"string",title:"cNPostFix",description:"Suffix for Name of Element Being Tracked"}},required:["cN"],additionalProperties:!1},ILightBoxConfig:{type:"object",properties:{videoSource:{type:"string",title:"Video Source"},title:{type:"string",title:"Title"},className:{type:"string",title:"Class Name"},openStateOnStart:{type:"boolean",title:"Open State On Start"},videoRequiresAuth:{type:"boolean",title:"Video Requires Auth"},componentId:{type:"string",title:"ComponentId of the lightbox blockcontainer"}},required:["videoSource"],additionalProperties:!1},IDvGlyphProps:{type:"object",properties:{name:{$ref:"#/definitions/GlyphType",title:"Name"},size:{anyOf:[{$ref:"#/definitions/GlyphSize"},{$ref:"#/definitions/GlyphSizeOverride"}],title:"Size"},fill:{type:"string",title:"Fill"},additionalClasses:{type:"string",title:"Additional Classes"},backgroundColor:{type:"string",title:"Background Color"},ariaHidden:{type:"boolean",title:"Aria Hidden"},postFix:{type:"boolean",title:"Is Glyph Postfix"}},required:["name"],additionalProperties:!1},GlyphType:{type:"string",enum:["accepted","account","addFriend","addToStory","archive","arrow-right","attendee","bell","book","burger","calendar","cancel","cc","chat","chatBubbles","chevron-down","chevron-down-double","chevron-left","chevron-right","chevron-right-medium","chevron-up","chevron-up-double","clipboard-list","clipboard-list-add","clock","code","code-notebook","collapse","collapse-all","collapse-all-alt","commitments","community","company-directory","connect-contacts","contact-card-mirrored","contact-me","contact-sales","copy","cortona-notebook","cross","date-time","decision-solid","declined","delete","delete-component","dictionary","diploma","document","document-set","download","download-arrow","drama-masks","edit-component","edit-box","element","enter-to-win","equaliser","evaluation","expand","expand-all","expand-all-alt","expert-connect","facebook","facebook2","facebook3","family","file","files","filter","filters","flag","fun","fun-swag","gatesnotes-transparent","general","get-help-app","giftbox","global-nav-button","globe","globe-no-access","group","home","information","in-venue-link","inPersonAttendee","instagram","join","learn","learning","lightbulb","lightningbolt","like-dislike","linkedin","linked-in-transparent","list","listView","mail","mappin","meeting","microphone","miniLink","mobile","more-vertical","network","notepad","notification","offer","office-chat","paste","pending","personalFolder","play","play-button","plus","project","publish-course","quiz","recommended-sessions","refresh","reminder-group","ribbon2","save","save-locally","search","search-campaigns","send","send-outline","session-type","share","shopping-bag","sign-up","signature-line","simpleControlPause","simpleControlPlay","simpleDisableCC","simpleEnableCC","simpleMute","simpleUnmute","simpleVideoPlay","slide-show","smileyface","special-gift","tag","team-favorite","teams-meeting","teamwork","telemarketer","test-quiz","tileView","touch","trackers","training-cert","translate","trial-download","trophy","twitter","twitter-transparent","twitterinverted","verified-brand","video","video-document","viva-engage","warning","warning-filled","web-link","webinar-course","wheelchair","whitepaper-document","world","x","yammer","yammer-transparent","youtube","youtube-transparent"]},GlyphSize:{type:"string",enum:["small","medium","large"],title:"Glyph Size"},GlyphSizeOverride:{type:"object",properties:{heightInPixels:{type:"string",title:"Height In Pixels"},widthInPixels:{type:"string",title:"Width In Pixels"}},required:["heightInPixels","widthInPixels"],additionalProperties:!1,title:"Glyph Size Override"},ComponentImageSettings:{type:"object",properties:{imageUrl:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],description:"Image URL or background-image value"},altText:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],description:"Image alt text (usually a translation key)"},style:{type:"object",properties:{position:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],description:"background-position or object-position values"},size:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],description:"background-size or object-fit values"},fixed:{anyOf:[{type:"boolean"},{$ref:"#/definitions/IWrapperMedia<boolean>"}],description:"Only for background images"},repeat:{anyOf:[{type:"string",title:"string"},{$ref:"#/definitions/IWrapperMedia<string>"}],description:"Only for background images"}},additionalProperties:!1,description:"Optional image style attributes"}},required:["imageUrl"],additionalProperties:!1},"IWrapperMedia<boolean>":{type:"object",properties:{mobile:{type:"boolean",title:"Mobile"},tablet:{type:"boolean",title:"Tablet"},desktop:{type:"boolean",title:"Desktop"}},additionalProperties:!1,title:"IWrapperMedia"}},p="banner",d={$schema:r,type:a,properties:o,additionalProperties:s,definitions:l,$id:p},g=["text","buttons","contentVerticallyCentered","image","assetPosition","lightContent","imageStack","imageStackPosition","imageMaxHeight","heading","subheading","headingAlignment","headingLevel","headingButtons","fullWidthHeading","removeOuterPadding","headingMaxWidth","blockedScope","requireScope","requiresFeature","requiresPhaseId","wrapperClass","wrapperBackgroundImage","wrapperBackgroundColor","wrapperBackgroundPosition","wrapperBackgroundRepeat","wrapperBackgroundSize","wrapperBackgroundOpacity","wrapperPadding","wrapperHeight","wrapperMaxHeight","wrapperMargin","wrapperBackdropFilter","isDisabled","wrapperWidth"],h=t(({componentId:e})=>i.jsx(n,{componentId:e,formSchema:d,uiOrder:g}));export{h as default};
log-">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="emailSup-swapContent">
                        
    <h2 data-automation-test-id="heading-" class="    modal-title " id="heading-">
            
    
    
        
            Sign me up
        
        
    

    </h2>

                    </div>
                    
                    <div class="emailSup-swapContent" style="display: none;">
                        
    <h2 data-automation-test-id="heading-" class="    modal-title " id="heading-">
            
    
    
        
            Thank you!
        
        
    

    </h2>

                    </div>
                    
    <button data-bi-bhvr="1234" data-bi-cT="Button" data-bi-pA="Body" class="close" aria-label="Close dialog window" data-dismiss="modal" type="button">
        
    </button>

                </div>
                <div class="modal-body">
                    <form class="emailSup-swapContent" method="post" id="emailSignupForm" novalidate data-automation-test-id="form-">
                        <div>
                            <div><p>Stay informed about special deals, the latest products, events and more from Microsoft Store.</p></div>

                            <div class="form-group">
                                <label for="x3e34c0167f284069aafb13ff9adbc267" data-automation-test-id="formLabel-input-">Email address (required)</label>
                                
    <input class="form-control userEmail " required data-feedback-content="Please enter a valid email" data-feedback="feedback-x3e34c0167f284069aafb13ff9adbc267" aria-describedby="feedback-x3e34c0167f284069aafb13ff9adbc267" aria-invalid="false" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" size="64" autocomplete="email" name="userEmail" type="email" id="x3e34c0167f284069aafb13ff9adbc267"/>


    <div class="invalid-feedback" id="feedback-x3e34c0167f284069aafb13ff9adbc267"></div>

                            </div>

                            <div class="form-group">
                                <label for="x1fccb608a5cf4571ab8a36e0ae9ea32f" data-automation-test-id="formlabel-location-">Location (required)</label>
                                <div class="custom-select">
                                    <select class="custom-select-input countryList" id="x1fccb608a5cf4571ab8a36e0ae9ea32f" data-automation-test-id="form-select-" data-attribute-lang="en-US">
                                        
                                            <option value="AR">Argentina</option>
                                        
                                            <option value="AU">Australia</option>
                                        
                                            <option value="AT">Austria</option>
                                        
                                            <option value="BE">Belgium</option>
                                        
                                            <option value="BR">Brazil</option>
                                        
                                            <option value="CA">Canada</option>
                                        
                                            <option value="CL">Chile</option>
                                        
                                            <option value="CO">Colombia</option>
                                        
                                            <option value="CZ">Czech Republic</option>
                                        
                                            <option value="DK">Denmark</option>
                                        
                                            <option value="FI">Finland</option>
                                        
                                            <option value="FR">France</option>
                                        
                                            <option value="DE">Germany</option>
                                        
                                            <option value="HU">Hungary</option>
                                        
                                            <option value="IN">India</option>
                                        
                                            <option value="IE">Ireland</option>
                                        
                                            <option value="IL">Israel</option>
                                        
                                            <option value="IT">Italy</option>
                                        
                                            <option value="JP">Japan</option>
                                        
                                            <option value="LU">Luxembourg</option>
                                        
                                            <option value="MX">Mexico</option>
                                        
                                            <option value="NL">Netherlands</option>
                                        
                                            <option value="NZ">New Zealand</option>
                                        
                                            <option value="NO">Norway</option>
                                        
                                            <option value="PL">Poland</option>
                                        
                                            <option value="PT">Portugal</option>
                                        
                                            <option value="SG">Singapore</option>
                                        
                                            <option value="ZA">South Africa</option>
                                        
                                            <option value="KR">South Korea</option>
                                        
                                            <option value="ES">Spain</option>
                                        
                                            <option value="SE">Sweden</option>
                                        
                                            <option value="TR">Turkey</option>
                                        
                                            <option value="CH">Switzerland</option>
                                        
                                            <option value="GB">United Kingdom</option>
                                        
                                            <option value="US">United States</option>
                                        
                                    </select>
                                    <span class="custom-select-arrow" aria-hidden="true"></span>
                                </div>
                            </div>

                            <div class="form-group">
                                <div id="consentNotCanada">
                                    I would like information, tips, and offers about Microsoft Store and other Microsoft products and services.
                                    <span class="sr-only"></span>
                                    <a data-bi-cn="Privacy Statement" data-bi-ecn="Privacy Statement" data-bi-hn="Sign me up" data-bi-ehn="Sign me up" data-bi-bhvr="0" data-bi-compnm="Modal: Default" data-bi-ct="Link" data-bi-pa="Body" href="https://go.microsoft.com/fwlink/?LinkId=521839" target="_blank" class="privacyStatementLink" data-automation-test-id="form-privacy-">
                                        Privacy statement
                                    </a>
                                    <span class="sr-only">.</span>
                                </div>
                                <div id="consentCanada" style="display:none" data-automation-test-id="consent-text-">
                                    <p>By clicking sign up, I agree that I would like to hear from Microsoft and its family of companies about Microsoft Store and other Microsoft products and services.</p>
<p>To withdraw consent or manage your contact preferences, visit the&nbsp;<a href="https://go.microsoft.com/fwlink/?linkid=243189">Promotional Communications Manager</a>.</p>

                                    <span class="sr-only"></span>
                                    <a data-bi-cn="Privacy Statement" data-bi-ecn="Privacy Statement" data-bi-hn="Sign me up" data-bi-ehn="Sign me up" data-bi-bhvr="0" data-bi-compnm="Modal: Default" data-bi-ct="Link" data-bi-pa="Body" href="https://go.microsoft.com/fwlink/?LinkId=521839" target="_blank" class="privacyStatementLink" data-automation-test-id="privacy-">
                                        Privacy statement
                                    </a>
                                    <span class="sr-only">.</span>
                                </div>
                            </div>

                            

                            
    <button data-bi-cN="Sign Up" data-bi-ecN="Sign Up" data-bi-bhvr="210" data-bi-cT="Button" data-bi-pA="Body" class="btn btn-primary form-group" type="submit" id="signUpButton">
        Sign Up
    </button>

                        </div>
                    </form>
                    
                    <div class="emailSup-swapContent" style="display: none;">
                        <p data-automation-test-id="close-description-">You’re now signed up to receive Microsoft Store emails. Thank you!</p>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>



	

	
		
    
    
        
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/chat/v1/chat/clientlibs/site-performance-enhancement.min.ACSHASH6bc698c78c74d43ae7e47ae3beed9603.css" type="text/css">



    
    <div id="msChatContainer">
        <div class="s-multiflyout-bottom multiflyout-hideTextChat" role="region" aria-label="Chat with an expert">
            <div class="x-flyout " data-grid="col-12">
                <button class="btn btn-primary  d-sm-inline-block c-button f-primary multiflyout-button innerwidth-place-holder expertChatButton" aria-expanded="false" id="top-multiflyout-button" type="button" data-js-flyout="lp-iframe-container" aria-controls="lp-iframe-container" data-bi-cN="Questions? Talk to an expert" data-bi-ecn="Questions? Talk to an expert" data-bi-bhvr="180" data-bi-cT="Button" data-bi-pa="Body" data-bi-compnm="Chat Launch" style="visibility: hidden;">
                    Questions? Talk to an expert
                </button>
            </div>
        </div>
        <div id="LivePerson" class="lp-live-person" data-bi-cN="LivePerson" data-bi-cT="Module_onestore-livepersonmodule" data-bi-id="m3r1a3" data-bi-sn="3" data-bi-an="r1a3" data-module-id="Hero Category Page|footerRegion|coreui-region|LivePerson|OneStore-LivePersonModule">

            <div>
                <div class="c-flyout flyout-nohide" id="lp-iframe-container" role="dialog" aria-label="Chat with an expert" data-js-flyout-placement="top" data-js-flyout-dismissible="false" aria-hidden="true">

                    <button class="c-glyph glyph-cancel lp-iframe-close x-hidden" aria-label="Close" tabindex="0"></button>

                    <iframe tabindex="-1" title="Live Chat window for contacting Microsoft support team" class="lp-iframe-window" data-isGreeterBotChat="True" data-isMobile="False" data-isOfficeCommercial="False" data-domainUrl="https://publisher.liveperson.net" data-iframeSrc="https://publisher.liveperson.net/iframe-le-tag/iframe-cs.html?lpsite=60270350&amp;lpsection=store-sales-en-us&amp;buttons=lpChatService,lpChatSales" name="lpSS_89316509127" id="lpSS_89316509127" allow="camera;microphone" data-islpCookieMitigationEnabled="True" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"> <!--lgtm [js/insufficient-iframe-sandboxing]/-->
                    </iframe>
                    
                    

                </div>
            </div>

            <div>

                <div class="c-flyout flyout-nohide " id="lp-proactive-invite" role="alert" data-js-flyout-placement="top" data-js-flyout-dismissible="false" aria-hidden="true" aria-labelledby="lp-proactive-invite-chat-heading">

                    <div class="text-center pt-3 p-1 bg-black position-fixed proactive-chat" id="lp-proactive-chat">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/chat-2?scl=1" alt/>
                        <p class="chat-heading mb-3" id="lp-proactive-invite-chat-heading">Can we help you?</p>
                        <div class="chat-box">
                            <div class="row">
                                <button class="btn btn-primary btn-block lp-chatnow glyph-append glyph-append-chevron-right chat-box-button" aria-label="Need help? Chat now with Microsoft Sales" data-bi-cN="Chat now" data-bi-ecn="Chat Now" data-bi-bhvr="180" data-bi-cT="Button" data-bi-pa="Body" data-bi-compnm="Chat Launch">
                                    Chat now
                                </button>
                            </div>
                            
                            <div class="row">
                                <button class="btn btn-faint-light btn-block lp-nothanks glyph-append glyph-append-chevron-right chat-box-button" aria-label="No thanks" data-bi-cN="No thanks" data-bi-ecn="No Thanks" data-bi-bhvr="0" data-bi-cT="Button" data-bi-pa="Body" data-bi-compnm="Chat Launch">
                                    No thanks
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
    </div>
    
        
    
<script src="/etc.clientlibs/microsoft/components/content/chat/v1/chat/clientlibs/site-performance-enhancement.min.ACSHASH10e268e8c625d4734b38095c8fd946b3.js"></script>



    

	
	
	
	
		



		
<div class="root responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="universalheader aem-GridColumn aem-GridColumn--default--12" data-component-id="cf9a86dceae618e01d6e6399d243873c">

	

	
		

    

    
        
                




        
        
                
                
            
    
<!-- Start of ADDITIONAL DEBUG INFO ** cv.html **

    CVToken: CASMicrosoftCV2080828f.1
  End of ADDITIONAL DEBUG INFO -->

                <!-- Start of ADDITIONAL DEBUG INFO ** uhftemplate.html **

    CVToken: CASMicrosoftCV2080828f.1
  End of ADDITIONAL DEBUG INFO -->
                <link rel="stylesheet" href="https://www.microsoft.com/onerfstatics/marketingsites-neu-prod/west-european/shell/_scrf/css/themes=default.device=uplevel_web_pc/29-591900/68-c3a397/f4-0855a6/a8-3dc4a6/f1-3221a1/dc-d4cb46/1f-806835/44-c33a61?ver=2.0&amp;_cf=20210618" type="text/css" media="all" />    <div id="headerArea" class="uhf"  data-m='{"cN":"headerArea","cT":"Area_coreuiArea","id":"a1Body","sN":1,"aN":"Body"}'>
                <div id="headerRegion"      data-region-key="headerregion" data-m='{"cN":"headerRegion","cT":"Region_coreui-region","id":"r1a1","sN":1,"aN":"a1"}' >

    <div  id="headerUniversalHeader" data-m='{"cN":"headerUniversalHeader","cT":"Module_coreui-universalheader","id":"m1r1a1","sN":1,"aN":"r1a1"}'  data-module-id="Category|headerRegion|coreui-region|headerUniversalHeader|coreui-universalheader">
        


                        <div data-m='{"cN":"cookiebanner_cont","cT":"Container","id":"c1m1r1a1","sN":1,"aN":"m1r1a1"}'>

<div id="uhfCookieAlert" data-locale="en-us">
    <div id="msccBannerV2"></div>
</div>

                            
                        </div>




        <a id="uhfSkipToMain" class="m-skip-to-main" href="javascript:void(0)" data-href="#primaryArea" tabindex="0" data-m='{"cN":"Skip to content_nonnav","id":"nn2m1r1a1","sN":2,"aN":"m1r1a1"}'>Skip to main content</a>


<header class="c-uhfh context-uhf no-js c-sgl-stck c-category-header " itemscope="itemscope" data-header-footprint="/Surface/Surface-Header-RT, fromService: True"   data-magict="true"   itemtype="http://schema.org/Organization">
    <div class="theme-light js-global-head f-closed  global-head-cont" data-m='{"cN":"Universal Header_cont","cT":"Container","id":"c3m1r1a1","sN":3,"aN":"m1r1a1"}'>
        <div class="c-uhfh-gcontainer-st">
            <button type="button" class="c-action-trigger c-glyph glyph-global-nav-button" aria-label="All Microsoft expand to see list of Microsoft products and services" initialState-label="All Microsoft expand to see list of Microsoft products and services" toggleState-label="Close All Microsoft list" aria-expanded="false" data-m='{"cN":"Mobile menu button_nonnav","id":"nn1c3m1r1a1","sN":1,"aN":"c3m1r1a1"}'></button>
            <button type="button" class="c-action-trigger c-glyph glyph-arrow-htmllegacy c-close-search" aria-label="Close search" aria-expanded="false" data-m='{"cN":"Close Search_nonnav","id":"nn2c3m1r1a1","sN":2,"aN":"c3m1r1a1"}'></button>
                    <a id="uhfLogo" class="c-logo c-sgl-stk-uhfLogo" itemprop="url" href="https://www.microsoft.com" aria-label="Microsoft" data-m='{"cN":"GlobalNav_Logo_cont","cT":"Container","id":"c3c3m1r1a1","sN":3,"aN":"c3m1r1a1"}'>
                        <img alt="" itemprop="logo" class="c-image" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" role="presentation" aria-hidden="true" />
                        <span itemprop="name" role="presentation" aria-hidden="true">Microsoft</span>
                    </a>
            <div class="f-mobile-title">
                <button type="button" class="c-action-trigger c-glyph glyph-chevron-left" aria-label="See more menu options" data-m='{"cN":"Mobile back button_nonnav","id":"nn4c3m1r1a1","sN":4,"aN":"c3m1r1a1"}'></button>
                <span data-global-title="Microsoft home" class="js-mobile-title">Surface</span>
                <button type="button" class="c-action-trigger c-glyph glyph-chevron-right" aria-label="See more menu options" data-m='{"cN":"Mobile forward button_nonnav","id":"nn5c3m1r1a1","sN":5,"aN":"c3m1r1a1"}'></button>
            </div>
                    <div class="c-show-pipe x-hidden-vp-mobile-st">
                        <a id="uhfCatLogo" class="c-logo c-cat-logo" href="https://www.microsoft.com/en-us/surface" aria-label="Surface" itemprop="url" data-m='{"cN":"CatNav_Surface_nav","id":"n6c3m1r1a1","sN":6,"aN":"c3m1r1a1"}'>
                                <span>Surface</span>
                        </a>
                    </div>
                <div class="cat-logo-button-cont x-hidden">
                        <button type="button" id="uhfCatLogoButton" class="c-cat-logo-button x-hidden" aria-expanded="false" aria-label="Surface" data-m='{"cN":"Surface_nonnav","id":"nn7c3m1r1a1","sN":7,"aN":"c3m1r1a1"}'>
                            Surface
                        </button>
                </div>



                    <nav id="uhf-g-nav" aria-label="Contextual menu" class="c-uhfh-gnav" data-m='{"cN":"Category nav_cont","cT":"Container","id":"c8c3m1r1a1","sN":8,"aN":"c3m1r1a1"}'>
            <ul class="js-paddle-items">
                    <li class="single-link js-nav-menu x-hidden-none-mobile-vp uhf-menu-item">
                        <a class="c-uhf-nav-link" href="https://www.microsoft.com/en-us/surface" data-m='{"cN":"CatNav_Home_nav","id":"n1c8c3m1r1a1","sN":1,"aN":"c8c3m1r1a1"}' > Home </a>
                    </li>
                                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_57"  aria-expanded="false" data-m='{"cN":"CatNav_Devices_nonnav","id":"nn2c8c3m1r1a1","sN":2,"aN":"c8c3m1r1a1"}'>Computers</button>

                                <ul class="f-multi-column f-multi-column-4" data-class-idn="f-multi-column f-multi-column-4" aria-hidden="true" data-m='{"cN":"Devices_cont","cT":"Container","id":"c3c8c3m1r1a1","sN":3,"aN":"c8c3m1r1a1"}'>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c1c3c8c3m1r1a1","sN":1,"aN":"c3c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_58-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c1c3c8c3m1r1a1","sN":1,"aN":"c1c3c8c3m1r1a1"}'>2-in-1 PCs</span>
    <button id="uhf-navbtn-shellmenu_58-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c1c3c8c3m1r1a1","sN":2,"aN":"c1c3c8c3m1r1a1"}'>2-in-1 PCs</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_58-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"surface-pro-9_cont","cT":"Container","id":"c3c1c3c8c3m1r1a1","sN":3,"aN":"c1c3c8c3m1r1a1"}'>
            <a id="shellmenu_59" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/d/surface-pro-9/93vkd8np4fvk" data-m='{"cN":"CatNav_surface-pro-9_nav","id":"n1c3c1c3c8c3m1r1a1","sN":1,"aN":"c3c1c3c8c3m1r1a1"}'>Surface Pro 9</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"surface-go-3_cont","cT":"Container","id":"c4c1c3c8c3m1r1a1","sN":4,"aN":"c1c3c8c3m1r1a1"}'>
            <a id="shellmenu_60" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/d/surface-go-3/904h27d0cbwn" data-m='{"cN":"CatNav_surface-go-3_nav","id":"n1c4c1c3c8c3m1r1a1","sN":1,"aN":"c4c1c3c8c3m1r1a1"}'>Surface Go 3</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Explore-all-2-in-1-PCs_cont","cT":"Container","id":"c5c1c3c8c3m1r1a1","sN":5,"aN":"c1c3c8c3m1r1a1"}'>
            <a id="shellmenu_61" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-pro-models" data-m='{"cN":"CatNav_Explore-all-2-in-1-PCs_nav","id":"n1c5c1c3c8c3m1r1a1","sN":1,"aN":"c5c1c3c8c3m1r1a1"}'>Explore 2-in-1 PCs</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c2c3c8c3m1r1a1","sN":2,"aN":"c3c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_62-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c2c3c8c3m1r1a1","sN":1,"aN":"c2c3c8c3m1r1a1"}'>Laptops</span>
    <button id="uhf-navbtn-shellmenu_62-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c2c3c8c3m1r1a1","sN":2,"aN":"c2c3c8c3m1r1a1"}'>Laptops</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_62-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"surface-laptop-5_cont","cT":"Container","id":"c3c2c3c8c3m1r1a1","sN":3,"aN":"c2c3c8c3m1r1a1"}'>
            <a id="shellmenu_63" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/d/surface-laptop-5/8xn49v61s1bn" data-m='{"cN":"CatNav_surface-laptop-5_nav","id":"n1c3c2c3c8c3m1r1a1","sN":1,"aN":"c3c2c3c8c3m1r1a1"}'>Surface Laptop 5</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Laptop Studio 2_cont","cT":"Container","id":"c4c2c3c8c3m1r1a1","sN":4,"aN":"c2c3c8c3m1r1a1"}'>
            <a id="surface-laptop-studio-2" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/d/surface-laptop-studio-2/8rqr54krf1dz" data-m='{"cN":"CatNav_Surface Laptop Studio 2_nav","id":"n1c4c2c3c8c3m1r1a1","sN":1,"aN":"c4c2c3c8c3m1r1a1"}'>NEW Surface Laptop Studio 2</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Laptop Go 3_cont","cT":"Container","id":"c5c2c3c8c3m1r1a1","sN":5,"aN":"c2c3c8c3m1r1a1"}'>
            <a id="surface-laptop-go-3" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/d/surface-laptop-go-3/8p0wwgj6c6l2" data-m='{"cN":"CatNav_Surface Laptop Go 3_nav","id":"n1c5c2c3c8c3m1r1a1","sN":1,"aN":"c5c2c3c8c3m1r1a1"}'>NEW Surface Laptop Go 3</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Eplore-all-Laptops_cont","cT":"Container","id":"c6c2c3c8c3m1r1a1","sN":6,"aN":"c2c3c8c3m1r1a1"}'>
            <a id="shellmenu_66" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/surface-laptop-models" data-m='{"cN":"CatNav_Eplore-all-Laptops_nav","id":"n1c6c2c3c8c3m1r1a1","sN":1,"aN":"c6c2c3c8c3m1r1a1"}'>Explore all Laptops</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c3c3c8c3m1r1a1","sN":3,"aN":"c3c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_67-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c3c3c8c3m1r1a1","sN":1,"aN":"c3c3c8c3m1r1a1"}'>All-in-One</span>
    <button id="uhf-navbtn-shellmenu_67-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c3c3c8c3m1r1a1","sN":2,"aN":"c3c3c8c3m1r1a1"}'>All-in-One</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_67-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"surface-studio-2+_cont","cT":"Container","id":"c3c3c3c8c3m1r1a1","sN":3,"aN":"c3c3c8c3m1r1a1"}'>
            <a id="shellmenu_68" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/d/surface-studio-2-plus/8vlfqc3597k4" data-m='{"cN":"CatNav_surface-studio-2+_nav","id":"n1c3c3c3c8c3m1r1a1","sN":1,"aN":"c3c3c3c8c3m1r1a1"}'>Surface Studio 2+</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c4c3c8c3m1r1a1","sN":4,"aN":"c3c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_69-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c4c3c8c3m1r1a1","sN":1,"aN":"c4c3c8c3m1r1a1"}'>Need help deciding?</span>
    <button id="uhf-navbtn-shellmenu_69-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c4c3c8c3m1r1a1","sN":2,"aN":"c4c3c8c3m1r1a1"}'>Need help deciding?</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_69-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"Compare Surface devices_cont","cT":"Container","id":"c3c4c3c8c3m1r1a1","sN":3,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_70" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/compare-devices" data-m='{"cN":"CatNav_Compare Surface devices_nav","id":"n1c3c4c3c8c3m1r1a1","sN":1,"aN":"c3c4c3c8c3m1r1a1"}'>Compare Surface devices</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Help me choose a Surface_cont","cT":"Container","id":"c4c4c3c8c3m1r1a1","sN":4,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_71" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/devices/help-me-choose" data-m='{"cN":"CatNav_Help me choose a Surface_nav","id":"n1c4c4c3c8c3m1r1a1","sN":1,"aN":"c4c4c3c8c3m1r1a1"}'>Help me choose a Surface</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Why Surface_cont","cT":"Container","id":"c5c4c3c8c3m1r1a1","sN":5,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_72" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/why-surface" data-m='{"cN":"CatNav_Why Surface_nav","id":"n1c5c4c3c8c3m1r1a1","sN":1,"aN":"c5c4c3c8c3m1r1a1"}'>Why Surface</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Do more with Surface_cont","cT":"Container","id":"c6c4c3c8c3m1r1a1","sN":6,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="do-more-with-surface" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/do-more-with-surface" data-m='{"cN":"CatNav_Do more with Surface_nav","id":"n1c6c4c3c8c3m1r1a1","sN":1,"aN":"c6c4c3c8c3m1r1a1"}'>Do more with Surface</a>
            
        </li>
    </ul>
    
</li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_74"  aria-expanded="false" data-m='{"cN":"CatNav_Computers for Business_nonnav","id":"nn4c8c3m1r1a1","sN":4,"aN":"c8c3m1r1a1"}'>Computers for Business</button>

                                <ul class="f-multi-column f-multi-column-5" data-class-idn="f-multi-column f-multi-column-5" aria-hidden="true" data-m='{"cN":"Computers for Business_cont","cT":"Container","id":"c5c8c3m1r1a1","sN":5,"aN":"c8c3m1r1a1"}'>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c1c5c8c3m1r1a1","sN":1,"aN":"c5c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_75-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c1c5c8c3m1r1a1","sN":1,"aN":"c1c5c8c3m1r1a1"}'>2-in-1 Tablets</span>
    <button id="uhf-navbtn-shellmenu_75-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c1c5c8c3m1r1a1","sN":2,"aN":"c1c5c8c3m1r1a1"}'>2-in-1 Tablets</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_75-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Pro 9 for Business_cont","cT":"Container","id":"c3c1c5c8c3m1r1a1","sN":3,"aN":"c1c5c8c3m1r1a1"}'>
            <a id="shellmenu_76" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/surface-pro-9" data-m='{"cN":"CatNav_Surface Pro 9 for Business_nav","id":"n1c3c1c5c8c3m1r1a1","sN":1,"aN":"c3c1c5c8c3m1r1a1"}'>Surface Pro 9 for Business</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"NEW Surface Pro 8 for Business_cont","cT":"Container","id":"c4c1c5c8c3m1r1a1","sN":4,"aN":"c1c5c8c3m1r1a1"}'>
            <a id="shellmenu_77" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/surface-pro-8" data-m='{"cN":"CatNav_NEW Surface Pro 8 for Business_nav","id":"n1c4c1c5c8c3m1r1a1","sN":1,"aN":"c4c1c5c8c3m1r1a1"}'>Surface Pro 8 for Business</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Pro 7+ for Business_cont","cT":"Container","id":"c5c1c5c8c3m1r1a1","sN":5,"aN":"c1c5c8c3m1r1a1"}'>
            <a id="shellmenu_78" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/surface-pro-7-plus" data-m='{"cN":"CatNav_Surface Pro 7+ for Business_nav","id":"n1c5c1c5c8c3m1r1a1","sN":1,"aN":"c5c1c5c8c3m1r1a1"}'>Surface Pro 7+ for Business</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"NEW Surface Go 4 for Business_cont","cT":"Container","id":"c6c1c5c8c3m1r1a1","sN":6,"aN":"c1c5c8c3m1r1a1"}'>
            <a id="shellmenu_79" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/surface-go-4" data-m='{"cN":"CatNav_NEW Surface Go 4 for Business_nav","id":"n1c6c1c5c8c3m1r1a1","sN":1,"aN":"c6c1c5c8c3m1r1a1"}'>NEW Surface Go 4 for Business</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c2c5c8c3m1r1a1","sN":2,"aN":"c5c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_80-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c2c5c8c3m1r1a1","sN":1,"aN":"c2c5c8c3m1r1a1"}'>Laptops</span>
    <button id="uhf-navbtn-shellmenu_80-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c2c5c8c3m1r1a1","sN":2,"aN":"c2c5c8c3m1r1a1"}'>Laptops</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_80-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Laptop 5 for Business_cont","cT":"Container","id":"c3c2c5c8c3m1r1a1","sN":3,"aN":"c2c5c8c3m1r1a1"}'>
            <a id="shellmenu_81" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/surface-laptop-5" data-m='{"cN":"CatNav_Surface Laptop 5 for Business_nav","id":"n1c3c2c5c8c3m1r1a1","sN":1,"aN":"c3c2c5c8c3m1r1a1"}'>Surface Laptop 5 for Business</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"NEW Surface Laptop Studio 2 for Business_cont","cT":"Container","id":"c4c2c5c8c3m1r1a1","sN":4,"aN":"c2c5c8c3m1r1a1"}'>
            <a id="shellmenu_82" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/surface-laptop-studio-2" data-m='{"cN":"CatNav_NEW Surface Laptop Studio 2 for Business_nav","id":"n1c4c2c5c8c3m1r1a1","sN":1,"aN":"c4c2c5c8c3m1r1a1"}'>NEW Surface Laptop Studio 2 for Business</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Laptop Go 3 for Business_cont","cT":"Container","id":"c5c2c5c8c3m1r1a1","sN":5,"aN":"c2c5c8c3m1r1a1"}'>
            <a id="shellmenu_83" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/surface-laptop-go-3" data-m='{"cN":"CatNav_Surface Laptop Go 3 for Business_nav","id":"n1c5c2c5c8c3m1r1a1","sN":1,"aN":"c5c2c5c8c3m1r1a1"}'>NEW Surface Laptop Go 3 for Business</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c3c5c8c3m1r1a1","sN":3,"aN":"c5c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_84-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c3c5c8c3m1r1a1","sN":1,"aN":"c3c5c8c3m1r1a1"}'>Small and Large Screens</span>
    <button id="uhf-navbtn-shellmenu_84-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c3c5c8c3m1r1a1","sN":2,"aN":"c3c5c8c3m1r1a1"}'>Small and Large Screens</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_84-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Studio 2+ for Business_cont","cT":"Container","id":"c3c3c5c8c3m1r1a1","sN":3,"aN":"c3c5c8c3m1r1a1"}'>
            <a id="shellmenu_85" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/surface-studio-2-plus" data-m='{"cN":"CatNav_Surface Studio 2+ for Business_nav","id":"n1c3c3c5c8c3m1r1a1","sN":1,"aN":"c3c3c5c8c3m1r1a1"}'>Surface Studio 2+ for Business</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Hub 3_cont","cT":"Container","id":"c4c3c5c8c3m1r1a1","sN":4,"aN":"c3c5c8c3m1r1a1"}'>
            <a id="shellmenu_86" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/surface-hub-3" data-m='{"cN":"CatNav_Surface Hub 3_nav","id":"n1c4c3c5c8c3m1r1a1","sN":1,"aN":"c4c3c5c8c3m1r1a1"}'>NEW Surface Hub 3</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c4c5c8c3m1r1a1","sN":4,"aN":"c5c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_87-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c4c5c8c3m1r1a1","sN":1,"aN":"c4c5c8c3m1r1a1"}'>Accessories</span>
    <button id="uhf-navbtn-shellmenu_87-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c4c5c8c3m1r1a1","sN":2,"aN":"c4c5c8c3m1r1a1"}'>Accessories</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_87-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"All Accessories_cont","cT":"Container","id":"c3c4c5c8c3m1r1a1","sN":3,"aN":"c4c5c8c3m1r1a1"}'>
            <a id="shellmenu_88" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/accessories" data-m='{"cN":"CatNav_All Accessories_nav","id":"n1c3c4c5c8c3m1r1a1","sN":1,"aN":"c3c4c5c8c3m1r1a1"}'>All Accessories</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Teams Accessories_cont","cT":"Container","id":"c4c4c5c8c3m1r1a1","sN":4,"aN":"c4c5c8c3m1r1a1"}'>
            <a id="shellmenu_89" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/teams-accessories" data-m='{"cN":"CatNav_Teams Accessories_nav","id":"n1c4c4c5c8c3m1r1a1","sN":1,"aN":"c4c4c5c8c3m1r1a1"}'>Teams Accessories</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c5c5c8c3m1r1a1","sN":5,"aN":"c5c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_90-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c5c5c8c3m1r1a1","sN":1,"aN":"c5c5c8c3m1r1a1"}'>Need help deciding?</span>
    <button id="uhf-navbtn-shellmenu_90-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c5c5c8c3m1r1a1","sN":2,"aN":"c5c5c8c3m1r1a1"}'>Need help deciding?</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_90-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"Compare Surface devices for business_cont","cT":"Container","id":"c3c5c5c8c3m1r1a1","sN":3,"aN":"c5c5c8c3m1r1a1"}'>
            <a id="shellmenu_91" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/business/compare-devices" data-m='{"cN":"CatNav_Compare Surface devices for business_nav","id":"n1c3c5c5c8c3m1r1a1","sN":1,"aN":"c3c5c5c8c3m1r1a1"}'>Compare Surface devices for Business</a>
            
        </li>
    </ul>
    
</li>
                                                        <li class="f-multi-column-info"><a data-m='{"cN":"Surface for Business Home_nav","id":"n6c5c8c3m1r1a1","sN":6,"aN":"c5c8c3m1r1a1"}' href="https://www.microsoft.com/en-us/surface/business" aria-label="Surface for Business Home" class="c-glyph">Surface for Business Home</a></li>
                                    
                                </ul>
                            </div>
                        </li>                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_92"  aria-expanded="false" data-m='{"cN":"CatNav_Accessories_nonnav","id":"nn6c8c3m1r1a1","sN":6,"aN":"c8c3m1r1a1"}'>Accessories</button>

                                <ul class="" data-class-idn="" aria-hidden="true" data-m='{"cN":"Accessories_cont","cT":"Container","id":"c7c8c3m1r1a1","sN":7,"aN":"c8c3m1r1a1"}'>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Pro accessories_cont","cT":"Container","id":"c1c7c8c3m1r1a1","sN":1,"aN":"c7c8c3m1r1a1"}'>
            <a id="pro-accessories" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/collections/surfaceproaccessories" data-m='{"cN":"CatNav_Surface Pro accessories_nav","id":"n1c1c7c8c3m1r1a1","sN":1,"aN":"c1c7c8c3m1r1a1"}'>Surface Pro accessories</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Laptop accessories_cont","cT":"Container","id":"c2c7c8c3m1r1a1","sN":2,"aN":"c7c8c3m1r1a1"}'>
            <a id="laptop-accessories" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/collections/surfacelaptopaccessories?headerid=department-surface" data-m='{"cN":"CatNav_Surface Laptop accessories_nav","id":"n1c2c7c8c3m1r1a1","sN":1,"aN":"c2c7c8c3m1r1a1"}'>Surface Laptop accessories</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Go accessories_cont","cT":"Container","id":"c3c7c8c3m1r1a1","sN":3,"aN":"c7c8c3m1r1a1"}'>
            <a id="go-accessories" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/collections/surfacegoaccessories?headerid=department-surface" data-m='{"cN":"CatNav_Surface Go accessories_nav","id":"n1c3c7c8c3m1r1a1","sN":1,"aN":"c3c7c8c3m1r1a1"}'>Surface Go accessories</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Studio accessories_cont","cT":"Container","id":"c4c7c8c3m1r1a1","sN":4,"aN":"c7c8c3m1r1a1"}'>
            <a id="studio-accessories" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/collections/surfacestudioaccessories?headerid=department-surface" data-m='{"cN":"CatNav_Surface Studio accessories_nav","id":"n1c4c7c8c3m1r1a1","sN":1,"aN":"c4c7c8c3m1r1a1"}'>Surface Studio accessories</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Accessories_cont","cT":"Container","id":"c5c7c8c3m1r1a1","sN":5,"aN":"c7c8c3m1r1a1"}'>
            <a id="SurfaceHeadphones2" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/d/surface-headphones-2/8wq0bsx7g523" data-m='{"cN":"CatNav_Accessories_nav","id":"n1c5c7c8c3m1r1a1","sN":1,"aN":"c5c7c8c3m1r1a1"}'>Surface Headphones 2 </a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Accessories_cont","cT":"Container","id":"c6c7c8c3m1r1a1","sN":6,"aN":"c7c8c3m1r1a1"}'>
            <a id="SurfaceEarbuds " class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/d/surface-earbuds/8r9cpq146064" data-m='{"cN":"CatNav_Accessories_nav","id":"n1c6c7c8c3m1r1a1","sN":1,"aN":"c6c7c8c3m1r1a1"}'>Surface Earbuds </a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"All Surface accessories_cont","cT":"Container","id":"c7c7c8c3m1r1a1","sN":7,"aN":"c7c8c3m1r1a1"}'>
            <a id="all-accessories" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/surface-accessories" data-m='{"cN":"CatNav_All Surface accessories_nav","id":"n1c7c7c8c3m1r1a1","sN":1,"aN":"c7c7c8c3m1r1a1"}'>All Surface accessories</a>
            
        </li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="shop-now"  aria-expanded="false" data-m='{"cN":"CatNav_Shop now_nonnav","id":"nn8c8c3m1r1a1","sN":8,"aN":"c8c3m1r1a1"}'>Shop now</button>

                                <ul class="" data-class-idn="" aria-hidden="true" data-m='{"cN":"Shop now_cont","cT":"Container","id":"c9c8c3m1r1a1","sN":9,"aN":"c8c3m1r1a1"}'>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface Bundles_cont","cT":"Container","id":"c1c9c8c3m1r1a1","sN":1,"aN":"c9c8c3m1r1a1"}'>
            <a id="surface-bundles" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/collections/surfacebundles?headerid=department-surface" data-m='{"cN":"CatNav_Surface Bundles_nav","id":"n1c1c9c8c3m1r1a1","sN":1,"aN":"c1c9c8c3m1r1a1"}'>Surface bundles</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"CertifiedrefurbishedSurface_cont","cT":"Container","id":"c2c9c8c3m1r1a1","sN":2,"aN":"c9c8c3m1r1a1"}'>
            <a id="certified-refurbished-surface" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/collections/certifiedrefurbishedsurface" data-m='{"cN":"CatNav_CertifiedrefurbishedSurface_nav","id":"n1c2c9c8c3m1r1a1","sN":1,"aN":"c2c9c8c3m1r1a1"}'>Certified refurbished Surface</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"All Surface devices_cont","cT":"Container","id":"c3c9c8c3m1r1a1","sN":3,"aN":"c9c8c3m1r1a1"}'>
            <a id="surface-devices" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/collections/surfacelist?headerid=department-surface" data-m='{"cN":"CatNav_All Surface devices_nav","id":"n1c3c9c8c3m1r1a1","sN":1,"aN":"c3c9c8c3m1r1a1"}'>All Surface devices</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"SurfaceRepairParts_cont","cT":"Container","id":"c4c9c8c3m1r1a1","sN":4,"aN":"c9c8c3m1r1a1"}'>
            <a id="c-shellmenu_104" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/surface-repair-parts" data-m='{"cN":"CatNav_SurfaceRepairParts_nav","id":"n1c4c9c8c3m1r1a1","sN":1,"aN":"c4c9c8c3m1r1a1"}'>Surface repair parts</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"WhereToBuy_cont","cT":"Container","id":"c5c9c8c3m1r1a1","sN":5,"aN":"c9c8c3m1r1a1"}'>
            <a id="c-shellmenu_105" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/surface/buy" data-m='{"cN":"CatNav_WhereToBuy_nav","id":"n1c5c9c8c3m1r1a1","sN":1,"aN":"c5c9c8c3m1r1a1"}'>Where to buy</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"PersonalShoppingAppointments_cont","cT":"Container","id":"c6c9c8c3m1r1a1","sN":6,"aN":"c9c8c3m1r1a1"}'>
            <a id="c-shellmenu_106" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/online-computer-shopping-appointments?icid=Surface_TopNavShopNow_personalshopping" data-m='{"cN":"CatNav_PersonalShoppingAppointments_nav","id":"n1c6c9c8c3m1r1a1","sN":1,"aN":"c6c9c8c3m1r1a1"}'>Personal shopping appointments</a>
            
        </li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="single-link js-nav-menu uhf-menu-item">
                            <a id="c-shellmenu_107" class="c-uhf-nav-link" href="https://support.microsoft.com/surface" data-m='{"cN":"CatNav_Support_nav","id":"n10c8c3m1r1a1","sN":10,"aN":"c8c3m1r1a1"}'>Support</a>
                        </li>


                <li id="overflow-menu" class="overflow-menu x-hidden uhf-menu-item">
                        <div class="c-uhf-menu js-nav-menu">
        <button data-m='{"pid":"More","id":"nn11c8c3m1r1a1","sN":11,"aN":"c8c3m1r1a1"}' type="button" aria-label="More" aria-expanded="false">More</button>
        <ul id="overflow-menu-list" aria-hidden="true" class="overflow-menu-list">
        </ul>
    </div>

                </li>
                                    <li class="single-link js-nav-menu" id="c-uhf-nav-cta">
                        <a id="surface-deals-new" class="c-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/surface-deals" data-m='{"cN":"CatNav_cta_SHOP DEALS_nav","id":"n12c8c3m1r1a1","sN":12,"aN":"c8c3m1r1a1"}'>SHOP DEALS</a>
                    </li>
            </ul>
            
        </nav>


            <div class="c-uhfh-actions" data-m='{"cN":"Header actions_cont","cT":"Container","id":"c9c3m1r1a1","sN":9,"aN":"c3m1r1a1"}'>
                <div class="wf-menu">        <nav id="uhf-c-nav" aria-label="All Microsoft menu" data-m='{"cN":"GlobalNav_cont","cT":"Container","id":"c1c9c3m1r1a1","sN":1,"aN":"c9c3m1r1a1"}'>
            <ul class="js-paddle-items">
                <li>
                    <div class="c-uhf-menu js-nav-menu">
                        <button type="button" class="c-button-logo all-ms-nav" aria-expanded="false" data-m='{"cN":"GlobalNav_More_nonnav","id":"nn1c1c9c3m1r1a1","sN":1,"aN":"c1c9c3m1r1a1"}'> <span>All Microsoft</span></button>
                        <ul class="f-multi-column f-multi-column-6" aria-hidden="true" data-m='{"cN":"More_cont","cT":"Container","id":"c2c1c9c3m1r1a1","sN":2,"aN":"c1c9c3m1r1a1"}'>
                                    <li class="c-w0-contr">
            <h2 class="c-uhf-sronly">Global</h2>
            <ul class="c-w0">
        <li class="js-nav-menu single-link" data-m='{"cN":"M365_cont","cT":"Container","id":"c1c2c1c9c3m1r1a1","sN":1,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_0" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-365" data-m='{"cN":"W0Nav_M365_nav","id":"n1c1c2c1c9c3m1r1a1","sN":1,"aN":"c1c2c1c9c3m1r1a1"}'>Microsoft 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Teams_cont","cT":"Container","id":"c2c2c1c9c3m1r1a1","sN":2,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="l0_Teams" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" data-m='{"cN":"W0Nav_Teams_nav","id":"n1c2c2c1c9c3m1r1a1","sN":1,"aN":"c2c2c1c9c3m1r1a1"}'>Teams</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Copilot_cont","cT":"Container","id":"c3c2c1c9c3m1r1a1","sN":3,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_2" class="js-subm-uhf-nav-link" href="https://copilot.microsoft.com/" data-m='{"cN":"W0Nav_Copilot_nav","id":"n1c3c2c1c9c3m1r1a1","sN":1,"aN":"c3c2c1c9c3m1r1a1"}'>Copilot</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Windows_cont","cT":"Container","id":"c4c2c1c9c3m1r1a1","sN":4,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_3" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/windows/" data-m='{"cN":"W0Nav_Windows_nav","id":"n1c4c2c1c9c3m1r1a1","sN":1,"aN":"c4c2c1c9c3m1r1a1"}'>Windows</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface_cont","cT":"Container","id":"c5c2c1c9c3m1r1a1","sN":5,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_4" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/surface" data-m='{"cN":"W0Nav_Surface_nav","id":"n1c5c2c1c9c3m1r1a1","sN":1,"aN":"c5c2c1c9c3m1r1a1"}'>Surface</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_cont","cT":"Container","id":"c6c2c1c9c3m1r1a1","sN":6,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_5" class="js-subm-uhf-nav-link" href="https://www.xbox.com/" data-m='{"cN":"W0Nav_Xbox_nav","id":"n1c6c2c1c9c3m1r1a1","sN":1,"aN":"c6c2c1c9c3m1r1a1"}'>Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Deals_cont","cT":"Container","id":"c7c2c1c9c3m1r1a1","sN":7,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_6" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/sale?icid=gm_nav_L0_salepage" data-m='{"cN":"W0Nav_Deals_nav","id":"n1c7c2c1c9c3m1r1a1","sN":1,"aN":"c7c2c1c9c3m1r1a1"}'>Deals</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Small Business_cont","cT":"Container","id":"c8c2c1c9c3m1r1a1","sN":8,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="l0_SmallBusiness" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/business" data-m='{"cN":"W0Nav_Small Business_nav","id":"n1c8c2c1c9c3m1r1a1","sN":1,"aN":"c8c2c1c9c3m1r1a1"}'>Small Business</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Support_cont","cT":"Container","id":"c9c2c1c9c3m1r1a1","sN":9,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="l1_support" class="js-subm-uhf-nav-link" href="https://support.microsoft.com/en-us" data-m='{"cN":"W0Nav_Support_nav","id":"n1c9c2c1c9c3m1r1a1","sN":1,"aN":"c9c2c1c9c3m1r1a1"}'>Support</a>
            
        </li>
            </ul>
        </li>

<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c10c2c1c9c3m1r1a1","sN":10,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_10-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c10c2c1c9c3m1r1a1","sN":1,"aN":"c10c2c1c9c3m1r1a1"}'>Software</span>
    <button id="uhf-navbtn-shellmenu_10-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c10c2c1c9c3m1r1a1","sN":2,"aN":"c10c2c1c9c3m1r1a1"}'>Software</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_10-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_WindowsApps_cont","cT":"Container","id":"c3c10c2c1c9c3m1r1a1","sN":3,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_11" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/apps/windows?icid=CNavAppsWindowsApps" data-m='{"cN":"GlobalNav_More_Software_WindowsApps_nav","id":"n1c3c10c2c1c9c3m1r1a1","sN":1,"aN":"c3c10c2c1c9c3m1r1a1"}'>Windows Apps</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_AI_cont","cT":"Container","id":"c4c10c2c1c9c3m1r1a1","sN":4,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_12" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/ai" data-m='{"cN":"GlobalNav_More_Software_AI_nav","id":"n1c4c10c2c1c9c3m1r1a1","sN":1,"aN":"c4c10c2c1c9c3m1r1a1"}'>AI</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Outlook_cont","cT":"Container","id":"c5c10c2c1c9c3m1r1a1","sN":5,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_13" class="js-subm-uhf-nav-link" href="https://outlook.live.com/owa/" data-m='{"cN":"GlobalNav_More_Software_Outlook_nav","id":"n1c5c10c2c1c9c3m1r1a1","sN":1,"aN":"c5c10c2c1c9c3m1r1a1"}'>Outlook</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_OneDrive_cont","cT":"Container","id":"c6c10c2c1c9c3m1r1a1","sN":6,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_14" class="js-subm-uhf-nav-link" href="https://onedrive.live.com/about/en-us/" data-m='{"cN":"GlobalNav_More_Software_OneDrive_nav","id":"n1c6c10c2c1c9c3m1r1a1","sN":1,"aN":"c6c10c2c1c9c3m1r1a1"}'>OneDrive</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Microsoft Teams_cont","cT":"Container","id":"c7c10c2c1c9c3m1r1a1","sN":7,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_15" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/EN-US/microsoft-teams/group-chat-software" data-m='{"cN":"GlobalNav_More_Software_Microsoft Teams_nav","id":"n1c7c10c2c1c9c3m1r1a1","sN":1,"aN":"c7c10c2c1c9c3m1r1a1"}'>Microsoft Teams</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_OneNote_cont","cT":"Container","id":"c8c10c2c1c9c3m1r1a1","sN":8,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_16" class="js-subm-uhf-nav-link" href="https://www.onenote.com/" data-m='{"cN":"GlobalNav_More_Software_OneNote_nav","id":"n1c8c10c2c1c9c3m1r1a1","sN":1,"aN":"c8c10c2c1c9c3m1r1a1"}'>OneNote</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Edge_cont","cT":"Container","id":"c9c10c2c1c9c3m1r1a1","sN":9,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_17" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/edge" data-m='{"cN":"GlobalNav_More_Software_Edge_nav","id":"n1c9c10c2c1c9c3m1r1a1","sN":1,"aN":"c9c10c2c1c9c3m1r1a1"}'>Microsoft Edge</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Skype_cont","cT":"Container","id":"c10c10c2c1c9c3m1r1a1","sN":10,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_18" class="js-subm-uhf-nav-link" href="https://www.skype.com/en/" data-m='{"cN":"GlobalNav_More_Software_Skype_nav","id":"n1c10c10c2c1c9c3m1r1a1","sN":1,"aN":"c10c10c2c1c9c3m1r1a1"}'>Skype</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cN":"PCsAndDevices_cont","cT":"Container","id":"c11c2c1c9c3m1r1a1","sN":11,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_19-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"cN":"GlobalNav_PCsAndDevices_nonnav","id":"nn1c11c2c1c9c3m1r1a1","sN":1,"aN":"c11c2c1c9c3m1r1a1"}'>PCs &amp; Devices  </span>
    <button id="uhf-navbtn-shellmenu_19-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"cN":"GlobalNav_PCsAndDevices_nonnav","id":"nn2c11c2c1c9c3m1r1a1","sN":2,"aN":"c11c2c1c9c3m1r1a1"}'>PCs &amp; Devices  </button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_19-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_PCsAndTablets_cont","cT":"Container","id":"c3c11c2c1c9c3m1r1a1","sN":3,"aN":"c11c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_20" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/pc?icid=CNavDevicesPC" data-m='{"cN":"GlobalNav_More_PCsAndDevices_PCsAndTablets_nav","id":"n1c3c11c2c1c9c3m1r1a1","sN":1,"aN":"c3c11c2c1c9c3m1r1a1"}'>Computers</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_ShopXbox_cont","cT":"Container","id":"c4c11c2c1c9c3m1r1a1","sN":4,"aN":"c11c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_21" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/xbox?icid=CNavDevicesXbox" data-m='{"cN":"GlobalNav_More_PCsAndDevices_ShopXbox_nav","id":"n1c4c11c2c1c9c3m1r1a1","sN":1,"aN":"c4c11c2c1c9c3m1r1a1"}'>Shop Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_Accessories_cont","cT":"Container","id":"c5c11c2c1c9c3m1r1a1","sN":5,"aN":"c11c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_22" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/accessories?icid=CNavDevicesAccessories" data-m='{"cN":"GlobalNav_More_PCsAndDevices_Accessories_nav","id":"n1c5c11c2c1c9c3m1r1a1","sN":1,"aN":"c5c11c2c1c9c3m1r1a1"}'>Accessories</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_VMAndMixedReality_cont","cT":"Container","id":"c6c11c2c1c9c3m1r1a1","sN":6,"aN":"c11c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_23" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/virtualreality?icid=CNavVirtualReality" data-m='{"cN":"GlobalNav_More_PCsAndDevices_VMAndMixedReality_nav","id":"n1c6c11c2c1c9c3m1r1a1","sN":1,"aN":"c6c11c2c1c9c3m1r1a1"}'>VR &amp; mixed reality</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevicesCertifiedRefurbished_cont","cT":"Container","id":"c7c11c2c1c9c3m1r1a1","sN":7,"aN":"c11c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_24" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/certified-refurbished-products" data-m='{"cN":"GlobalNav_More_PCsAndDevicesCertifiedRefurbished_nav","id":"n1c7c11c2c1c9c3m1r1a1","sN":1,"aN":"c7c11c2c1c9c3m1r1a1"}'>Certified Refurbished</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_Trade-in-for-cash_cont","cT":"Container","id":"c8c11c2c1c9c3m1r1a1","sN":8,"aN":"c11c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_25" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/microsoft-trade-in" data-m='{"cN":"GlobalNav_More_PCsAndDevices_Trade-in-for-cash_nav","id":"n1c8c11c2c1c9c3m1r1a1","sN":1,"aN":"c8c11c2c1c9c3m1r1a1"}'>Trade-in for cash</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c12c2c1c9c3m1r1a1","sN":12,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_26-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c12c2c1c9c3m1r1a1","sN":1,"aN":"c12c2c1c9c3m1r1a1"}'>Entertainment</span>
    <button id="uhf-navbtn-shellmenu_26-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c12c2c1c9c3m1r1a1","sN":2,"aN":"c12c2c1c9c3m1r1a1"}'>Entertainment</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_26-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_XboxGamePassUltimate_cont","cT":"Container","id":"c3c12c2c1c9c3m1r1a1","sN":3,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_27" class="js-subm-uhf-nav-link" href="https://www.xbox.com/en-us/games/store/xbox-game-pass-ultimate/cfq7ttc0khs0?icid=CNavAllXboxGamePassUltimate" data-m='{"cN":"GlobalNav_More_Entertainment_XboxGamePassUltimate_nav","id":"n1c3c12c2c1c9c3m1r1a1","sN":1,"aN":"c3c12c2c1c9c3m1r1a1"}'>Xbox Game Pass Ultimate</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_PC_Game_Pass_cont","cT":"Container","id":"c4c12c2c1c9c3m1r1a1","sN":4,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_28" class="js-subm-uhf-nav-link" href="https://www.xbox.com/en-us/games/store/pc-game-pass/cfq7ttc0kgq8?icid=CNavAllPCGamePass" data-m='{"cN":"GlobalNav_More_Entertainment_PC_Game_Pass_nav","id":"n1c4c12c2c1c9c3m1r1a1","sN":1,"aN":"c4c12c2c1c9c3m1r1a1"}'>PC Game Pass</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_XboxGames_cont","cT":"Container","id":"c5c12c2c1c9c3m1r1a1","sN":5,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_29" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/xboxgames?icid=CNavGamesXboxGames" data-m='{"cN":"GlobalNav_More_Entertainment_XboxGames_nav","id":"n1c5c12c2c1c9c3m1r1a1","sN":1,"aN":"c5c12c2c1c9c3m1r1a1"}'>Xbox games</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_PCGames_cont","cT":"Container","id":"c6c12c2c1c9c3m1r1a1","sN":6,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_30" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/games/windows?icid=CNavGamesWindowsGames" data-m='{"cN":"GlobalNav_More_Entertainment_PCGames_nav","id":"n1c6c12c2c1c9c3m1r1a1","sN":1,"aN":"c6c12c2c1c9c3m1r1a1"}'>PC and Windows games</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_MoviesAndTV_cont","cT":"Container","id":"c7c12c2c1c9c3m1r1a1","sN":7,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_31" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/movies-and-tv?icid=TopNavMoviesTv" data-m='{"cN":"GlobalNav_More_Entertainment_MoviesAndTV_nav","id":"n1c7c12c2c1c9c3m1r1a1","sN":1,"aN":"c7c12c2c1c9c3m1r1a1"}'>Movies &amp; TV</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c13c2c1c9c3m1r1a1","sN":13,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_32-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c13c2c1c9c3m1r1a1","sN":1,"aN":"c13c2c1c9c3m1r1a1"}'>Business</span>
    <button id="uhf-navbtn-shellmenu_32-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c13c2c1c9c3m1r1a1","sN":2,"aN":"c13c2c1c9c3m1r1a1"}'>Business</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_32-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft_Cloud_cont","cT":"Container","id":"c3c13c2c1c9c3m1r1a1","sN":3,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_33" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/microsoft-cloud" data-m='{"cN":"GlobalNav_More_Business_Microsoft_Cloud_nav","id":"n1c3c13c2c1c9c3m1r1a1","sN":1,"aN":"c3c13c2c1c9c3m1r1a1"}'>Microsoft Cloud</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft Security_cont","cT":"Container","id":"c4c13c2c1c9c3m1r1a1","sN":4,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_34" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/security" data-m='{"cN":"GlobalNav_More_Business_Microsoft Security_nav","id":"n1c4c13c2c1c9c3m1r1a1","sN":1,"aN":"c4c13c2c1c9c3m1r1a1"}'>Microsoft Security</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftDynamics365_cont","cT":"Container","id":"c5c13c2c1c9c3m1r1a1","sN":5,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_35" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/dynamics-365" data-m='{"cN":"GlobalNav_More_Business_MicrosoftDynamics365_nav","id":"n1c5c13c2c1c9c3m1r1a1","sN":1,"aN":"c5c13c2c1c9c3m1r1a1"}'>Dynamics 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft365forbusiness_cont","cT":"Container","id":"c6c13c2c1c9c3m1r1a1","sN":6,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_36" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/microsoft-365/business" data-m='{"cN":"GlobalNav_More_Business_Microsoft365forbusiness_nav","id":"n1c6c13c2c1c9c3m1r1a1","sN":1,"aN":"c6c13c2c1c9c3m1r1a1"}'>Microsoft 365 for business</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftPowerPlatform_cont","cT":"Container","id":"c7c13c2c1c9c3m1r1a1","sN":7,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_37" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/power-platform" data-m='{"cN":"GlobalNav_More_Business_MicrosoftPowerPlatform_nav","id":"n1c7c13c2c1c9c3m1r1a1","sN":1,"aN":"c7c13c2c1c9c3m1r1a1"}'>Microsoft Power Platform</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Windows365_cont","cT":"Container","id":"c8c13c2c1c9c3m1r1a1","sN":8,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_38" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/windows-365" data-m='{"cN":"GlobalNav_More_Business_Windows365_nav","id":"n1c8c13c2c1c9c3m1r1a1","sN":1,"aN":"c8c13c2c1c9c3m1r1a1"}'>Windows 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftIndustry_cont","cT":"Container","id":"c9c13c2c1c9c3m1r1a1","sN":9,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_39" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/industry" data-m='{"cN":"GlobalNav_More_Business_MicrosoftIndustry_nav","id":"n1c9c13c2c1c9c3m1r1a1","sN":1,"aN":"c9c13c2c1c9c3m1r1a1"}'>Microsoft Industry</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_SmallBusiness_cont","cT":"Container","id":"c10c13c2c1c9c3m1r1a1","sN":10,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_40" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/business?icid=CNavBusinessStore" data-m='{"cN":"GlobalNav_More_Business_SmallBusiness_nav","id":"n1c10c13c2c1c9c3m1r1a1","sN":1,"aN":"c10c13c2c1c9c3m1r1a1"}'>Small Business</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c14c2c1c9c3m1r1a1","sN":14,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_41-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c14c2c1c9c3m1r1a1","sN":1,"aN":"c14c2c1c9c3m1r1a1"}'>Developer &amp; IT  </span>
    <button id="uhf-navbtn-shellmenu_41-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c14c2c1c9c3m1r1a1","sN":2,"aN":"c14c2c1c9c3m1r1a1"}'>Developer &amp; IT  </button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_41-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_Azure_cont","cT":"Container","id":"c3c14c2c1c9c3m1r1a1","sN":3,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_42" class="js-subm-uhf-nav-link" href="https://azure.microsoft.com/en-us/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_Azure_nav","id":"n1c3c14c2c1c9c3m1r1a1","sN":1,"aN":"c3c14c2c1c9c3m1r1a1"}'>Azure</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_DeveloperCenter_cont","cT":"Container","id":"c4c14c2c1c9c3m1r1a1","sN":4,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_43" class="js-subm-uhf-nav-link" href="https://developer.microsoft.com/en-us/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_DeveloperCenter_nav","id":"n1c4c14c2c1c9c3m1r1a1","sN":1,"aN":"c4c14c2c1c9c3m1r1a1"}'>Developer Center</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_Documentation_cont","cT":"Container","id":"c5c14c2c1c9c3m1r1a1","sN":5,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_44" class="js-subm-uhf-nav-link" href="https://learn.microsoft.com/docs/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_Documentation_nav","id":"n1c5c14c2c1c9c3m1r1a1","sN":1,"aN":"c5c14c2c1c9c3m1r1a1"}'>Documentation</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_MicrosoftLearn_cont","cT":"Container","id":"c6c14c2c1c9c3m1r1a1","sN":6,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_45" class="js-subm-uhf-nav-link" href="https://learn.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_MicrosoftLearn_nav","id":"n1c6c14c2c1c9c3m1r1a1","sN":1,"aN":"c6c14c2c1c9c3m1r1a1"}'>Microsoft Learn</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_MicrosoftTechCommunity_cont","cT":"Container","id":"c7c14c2c1c9c3m1r1a1","sN":7,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_46" class="js-subm-uhf-nav-link" href="https://techcommunity.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_MicrosoftTechCommunity_nav","id":"n1c7c14c2c1c9c3m1r1a1","sN":1,"aN":"c7c14c2c1c9c3m1r1a1"}'>Microsoft Tech Community</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_AzureMarketplace_cont","cT":"Container","id":"c8c14c2c1c9c3m1r1a1","sN":8,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_47" class="js-subm-uhf-nav-link" href="https://azuremarketplace.microsoft.com/en-us/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_AzureMarketplace_nav","id":"n1c8c14c2c1c9c3m1r1a1","sN":1,"aN":"c8c14c2c1c9c3m1r1a1"}'>Azure Marketplace</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_AppSource_cont","cT":"Container","id":"c9c14c2c1c9c3m1r1a1","sN":9,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_48" class="js-subm-uhf-nav-link" href="https://appsource.microsoft.com/en-us/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_AppSource_nav","id":"n1c9c14c2c1c9c3m1r1a1","sN":1,"aN":"c9c14c2c1c9c3m1r1a1"}'>AppSource</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_VisualStudio_cont","cT":"Container","id":"c10c14c2c1c9c3m1r1a1","sN":10,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_49" class="js-subm-uhf-nav-link" href="https://visualstudio.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_VisualStudio_nav","id":"n1c10c14c2c1c9c3m1r1a1","sN":1,"aN":"c10c14c2c1c9c3m1r1a1"}'>Visual Studio</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c15c2c1c9c3m1r1a1","sN":15,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_50-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c15c2c1c9c3m1r1a1","sN":1,"aN":"c15c2c1c9c3m1r1a1"}'>Other</span>
    <button id="uhf-navbtn-shellmenu_50-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c15c2c1c9c3m1r1a1","sN":2,"aN":"c15c2c1c9c3m1r1a1"}'>Other</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_50-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Microsoft Rewards_cont","cT":"Container","id":"c3c15c2c1c9c3m1r1a1","sN":3,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_51" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/rewards" data-m='{"cN":"GlobalNav_More_Other_Microsoft Rewards_nav","id":"n1c3c15c2c1c9c3m1r1a1","sN":1,"aN":"c3c15c2c1c9c3m1r1a1"}'>Microsoft Rewards </a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_FreeDownloadsAndSecurity_cont","cT":"Container","id":"c4c15c2c1c9c3m1r1a1","sN":4,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_52" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/download" data-m='{"cN":"GlobalNav_More_Other_FreeDownloadsAndSecurity_nav","id":"n1c4c15c2c1c9c3m1r1a1","sN":1,"aN":"c4c15c2c1c9c3m1r1a1"}'>Free downloads &amp; security</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Education_cont","cT":"Container","id":"c5c15c2c1c9c3m1r1a1","sN":5,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_53" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/education" data-m='{"cN":"GlobalNav_More_Other_Education_nav","id":"n1c5c15c2c1c9c3m1r1a1","sN":1,"aN":"c5c15c2c1c9c3m1r1a1"}'>Education</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_GiftCards_cont","cT":"Container","id":"c6c15c2c1c9c3m1r1a1","sN":6,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_54" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/store/b/gift-cards" data-m='{"cN":"GlobalNav_More_Other_GiftCards_nav","id":"n1c6c15c2c1c9c3m1r1a1","sN":1,"aN":"c6c15c2c1c9c3m1r1a1"}'>Gift cards</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Licensing_cont","cT":"Container","id":"c7c15c2c1c9c3m1r1a1","sN":7,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="Licensing" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/licensing/" data-m='{"cN":"GlobalNav_More_Other_Licensing_nav","id":"n1c7c15c2c1c9c3m1r1a1","sN":1,"aN":"c7c15c2c1c9c3m1r1a1"}'>Licensing</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Unlocked_stories_cont","cT":"Container","id":"c8c15c2c1c9c3m1r1a1","sN":8,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_56" class="js-subm-uhf-nav-link" href="https://unlocked.microsoft.com/" data-m='{"cN":"GlobalNav_More_Other_Unlocked_stories_nav","id":"n1c8c15c2c1c9c3m1r1a1","sN":1,"aN":"c8c15c2c1c9c3m1r1a1"}'>Unlocked stories</a>
            
        </li>
    </ul>
    
</li>
                                                            <li class="f-multi-column-info">
                                    <a data-m='{"id":"n16c2c1c9c3m1r1a1","sN":16,"aN":"c2c1c9c3m1r1a1"}' href="https://www.microsoft.com/en-us/sitemap.aspx" aria-label="" class="c-glyph">View Sitemap</a>
                                </li>
                            
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
</div>
                            <form class="c-search" autocomplete="off" id="searchForm" name="searchForm" role="search" action="https://www.microsoft.com/en-us/search/result.aspx" method="GET" data-seAutoSuggest='{"queryParams":{"market":"en-us","clientId":"7F27B536-CF6B-4C65-8638-A0F8CBDFCA65","sources":"Microsoft-Terms,Iris-Products,DCatAll-Products","filter":"+ClientType:StoreWeb","counts":"5,1,5"},"familyNames":{"Apps":"App","Books":"Book","Bundles":"Bundle","Devices":"Device","Fees":"Fee","Games":"Game","MusicAlbums":"Album","MusicTracks":"Song","MusicVideos":"Video","MusicArtists":"Artist","OperatingSystem":"Operating System","Software":"Software","Movies":"Movie","TV":"TV","CSV":"Gift Card","VideoActor":"Actor"}}' data-seautosuggestapi="https://www.microsoft.com/msstoreapiprod/api/autosuggest" data-m='{"cN":"GlobalNav_Search_cont","cT":"Container","id":"c3c1c9c3m1r1a1","sN":3,"aN":"c1c9c3m1r1a1"}' aria-expanded="false">
                                <input  id="cli_shellHeaderSearchInput" aria-label="Search Expanded" aria-autocomplete="list" aria-expanded="false" aria-controls="universal-header-search-auto-suggest-transparent" aria-owns="universal-header-search-auto-suggest-ul" type="search" name="q" role="combobox" placeholder="Search Microsoft.com" data-m='{"cN":"SearchBox_nav","id":"n1c3c1c9c3m1r1a1","sN":1,"aN":"c3c1c9c3m1r1a1"}' data-toggle="tooltip" data-placement="right" title="Search Microsoft.com" />
                                    <button id="search" aria-label="Search Microsoft.com" class="c-glyph" data-m='{"cN":"Search_nav","id":"n2c3c1c9c3m1r1a1","sN":2,"aN":"c3c1c9c3m1r1a1"}' data-bi-mto="true" aria-expanded="false" disabled="disabled">
                                        <span role="presentation">Search</span>
                                        <span role="tooltip" class="c-uhf-tooltip c-uhf-search-tooltip">Search Microsoft.com</span>
                                    </button>
                                <div class="m-auto-suggest" id="universal-header-search-auto-suggest-transparent" role="group">
                                    <ul class="c-menu" id="universal-header-search-auto-suggest-ul" aria-label="Search Suggestions" aria-hidden="true" data-bi-dnt="true" data-bi-mto="true" data-js-auto-suggest-position="default" role="listbox" data-tel="jsll" data-m='{"cN":"search suggestions_cont","cT":"Container","id":"c3c3c1c9c3m1r1a1","sN":3,"aN":"c3c1c9c3m1r1a1"}'></ul>
                                    <ul class="c-menu f-auto-suggest-no-results" aria-hidden="true" data-js-auto-suggest-postion="default" data-js-auto-suggest-position="default" role="listbox">
                                        <li class="c-menu-item"> <span tabindex="-1">No results</span></li>
                                    </ul>
                                </div>
                                
                            </form>
                        <button data-m='{"cN":"cancel-search","pid":"Cancel Search","id":"nn4c1c9c3m1r1a1","sN":4,"aN":"c1c9c3m1r1a1"}' id="cancel-search" class="cancel-search" aria-label="Cancel Search">
                            <span>Cancel</span>
                        </button>
                    <a id="uhf-shopping-cart"
                       aria-label="0 items in shopping cart"
                       class="c-action-trigger c-glyph c-uhf-nav-link glyph-shopping-cart"
                       href="https://www.microsoft.com/en-us/store/cart"
                       data-src-dmn-chk="true"
                       data-m='{"cN":"GlobalNav_Cart_nav","bhvr":82,"id":"n5c1c9c3m1r1a1","sN":5,"aN":"c1c9c3m1r1a1"}'>
                        <span class="shopping-cart-amount x-hidden" aria-hidden="true">0</span>
                        <span class="c-cart-lbl c-st-lbl">Cart</span>
                        <span id="uhf-shopping-cart-tooltip" class="c-uhf-tooltip" role="tooltip">0 items in shopping cart</span>
                    </a>
                            <iframe id="shell-cart-count" data-src="//www.microsoft.com/store/buy/cartcount"></iframe>
                        <div id="meControl" class="c-me"  data-signinsettings='{"containerId":"meControl","enabled":true,"headerHeight":48,"debug":false,"extensibleLinks":[],"userData":{"idp":"msa","firstName":"","lastName":"","memberName":"","cid":"","authenticatedState":"3"},"rpData":{"preferredIdp":"msa","msaInfo":{"signInUrl":"","signOutUrl":"","meUrl":"https://login.live.com/me.srf?wa=wsignin1.0"},"aadInfo":{"signOutUrl":"","appId":"","siteUrl":"","blockMsaFed":true}}}' data-m='{"cN":"GlobalNav_Account_cont","cT":"Container","id":"c6c1c9c3m1r1a1","sN":6,"aN":"c1c9c3m1r1a1"}'>
                            <div class="msame_Header">
                                <div class="msame_Header_name st_msame_placeholder">Sign in</div>
                            </div>
                            
                        </div>
                
            </div>
        </div>
        
        
    </div>
    
</header>




    </div>
        </div>

    </div>

            
    

	



    




<div class='meControl-configInfo' data-isenabled='true' data-convergedstack='true' data-baseurl='/cascadeauth/store/account' data-appid='10fa57ef-4895-4ab2-872c-8c3613d4f7fb' data-appcallbackurl='https://www.microsoft.com/cascadeauth/account/signin-oidc' data-accountconstraint='1' data-apigeneration='GEN1' data-silentauthrequirereload='true' data-silentauthaction='default'></div>
<div class='userInfo-config' data-userInfoUrl='/cascadeauth/api/store/v1/account/userinfo' data-userInfoTimeoutMS='1000' data-retryDelayMS='2000' data-maxRetryAttempt='3'></div>


    
    
<script src="/etc.clientlibs/microsoft/components/content/universalheader/v1/universalheader/clientlibs/site.min.ACSHASHd01b887060eeda8457a067614f5353bb.js"></script>




</div>
<div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="28134f1ee1370eee417bc52d1ed0a717">

<main class="microsoft-template-layout-container" tabindex="-1">
    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
        
        <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="animationtoggle aem-GridColumn aem-GridColumn--default--12" data-component-id="b74efe077066c056967b710c728cbf21">
<div class="reduced-animation-toggle">
   <div class="c-toggle">
      <label class="c-label" id="c-label-1" for="animation-toggle">Animation</label>
      <div class="toggle-seperator"></div>
      <button id="animation-toggle" name="animation-toggle" role="switch" aria-checked="true" aria-labelledby="c-label-1 c-state-label-1"></button>
      <span data-on-string="On" data-off-string="Off" id="c-state-label-1" aria-hidden="true">On</span>
   </div>
</div>


   
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/animationtoggle/v1/animationtoggle/clientlibs/site.min.ACSHASH969435394b30c580ff6a3f01db878521.css" type="text/css">








   
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/animationtoggle/v1/animationtoggle/clientlibs/site.min.ACSHASH81ea48376657a530cc8be94a747f947e.js" defer></script>




</div>
<div class="highlight-with-colorpicker highlight mb-4 aem-GridColumn aem-GridColumn--default--12" data-component-id="fa02b580924164323669676b0a24b92b">






    





    
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/highlight/v1/highlight/clientlibs/site.min.ACSHASH72c5de18c7a04e9a21c8a916f6e80877.css" type="text/css">






    <div id="highlight-with-colorpicker-uidd0de" class="card-img-overlay ">
        
        <div class="card-background">
            
                
                <picture data-picture-id="x1fa4cc6add6b450e90ae34eabf97b469">
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Platinum-001:VP5-1920x600" media="(min-width: 1400px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Platinum-001:VP4-1399x600" media="(min-width: 1084px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Platinum-001:VP3-1083x600" media="(min-width: 860px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Platinum-001:VP2-859x540" media="(min-width: 540px)"/>
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Platinum-001:VP1-539x440" class="card-img" alt="A Surface Laptop Go 3 in Platinum."/>
                </picture>
            
                
                <picture style="display: none;" data-picture-id="x28cd8275562840f7aeda57766da3359e">
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-IceBlue-001:VP5-1920x600" media="(min-width: 1400px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-IceBlue-001:VP4-1399x600" media="(min-width: 1084px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-IceBlue-001:VP3-1083x600" media="(min-width: 860px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-IceBlue-001:VP2-859x540" media="(min-width: 540px)"/>
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-IceBlue-001:VP1-539x440" class="card-img" alt="A Surface Laptop Go 3 in Ice Blue."/>
                </picture>
            
                
                <picture style="display: none;" data-picture-id="xf482f908d1984397b6b8f309f36ad95d">
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sage-001:VP5-1920x600" media="(min-width: 1400px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sage-001:VP4-1399x600" media="(min-width: 1084px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sage-001:VP3-1083x600" media="(min-width: 860px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sage-001:VP2-859x540" media="(min-width: 540px)"/>
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sage-001:VP1-539x440" class="card-img" alt="A Surface Laptop Go 3 in Sage."/>
                </picture>
            
                
                <picture style="display: none;" data-picture-id="xd549981cf852426abd7e3f0ccdbdb4a8">
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sandstone-001:VP5-1920x600" media="(min-width: 1400px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sandstone-001:VP4-1399x600" media="(min-width: 1084px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sandstone-001:VP3-1083x600" media="(min-width: 860px)"/>
                    <source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sandstone-001:VP2-859x540" media="(min-width: 540px)"/>
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sandstone-001:VP1-539x440" class="card-img" alt="A Surface Laptop Go 3 in Sandstone."/>
                </picture>
            
        </div>
        
        
            <div class="card-foreground    ">
                
                <div class="container">
                    
                    <div class="d-flex mt-md-n5 my-lg-5 ">
                        
                        <div class="w-100 w-lg-col-5 ">
                            
                            <div class="card material-md-card py-5 px-md-5 ">
                                <div class="card-body " data-highlight-style="Highlight Feature: default">
                                    
      

                                    
                                    
    <div class=" h1    ">
            
    
    
        
            Surface Laptop Go 3
        
        
    

    </div>

                                    <div class="mb-4 ">
                                        Must-have performance meets standout design
                                    </div>
                                    
    
    
    
    

                                    

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    

    
        <a data-bi-cn="Build your device" data-bi-ecn="Build your device" data-bi-hn="Surface Laptop Go 3" data-bi-ehn="Surface Laptop Go 3" data-bi-compnm="Highlight Feature: Default" data-bi-ct="button" data-bi-pa="body" class=" btn btn-primary   " data-target-uri="https://www.microsoft.com/en-us/store/configure/surface-laptop-go-3/8p0wwgj6c6l2" data-bi-bhvr="0" data-automation-test-id="button1-" aria-label="Link to configure your device" target="_self" href="https://www.microsoft.com/en-us/store/configure/surface-laptop-go-3/8p0wwgj6c6l2">
            Build your device</a>
    

    

    

    


        
    </div>


                                    
                                    <div class="pt-4 pb-4 mt-4">
                                        <fieldset class="color-picker">
                                            <legend class="sr-only"></legend>
                                            
                                                <input class="color-picker-control hwcp" name="highlight_with_color" id="x1fa4cc6add6b450e90ae34eabf97b469" aria-label="Platinum" data-bi-cN="Platinum" data-bi-ecN="Platinum" data-bi-hN="Surface Laptop Go 3" data-bi-ehN="Surface Laptop Go 3" data-bi-bhvr="0" data-bi-cT="Button" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Platinum-001:VP1-539x440" data-bi-pA="Body" data-bi-compNm="Color Picker" data-transparent-card-text-color="dark" type="radio" checked/>
                                                <label for="x1fa4cc6add6b450e90ae34eabf97b469" aria-hidden="true" class="color-picker-dot-light" title="Platinum">
                                                    <span class="color-picker-dot" style="background-color: #86888a">
                                                        <svg viewBox="0 0 100 100">
                                                            <circle cx="50" cy="50" r="50" fill="#86888a"/>
                                                        </svg>
                                                    </span>
                                                    <span class="color-picker-label highlight-color-picker-label" data-span-id="x1fa4cc6add6b450e90ae34eabf97b469">Platinum</span>
                                                </label>
                                            
                                                <input class="color-picker-control hwcp" name="highlight_with_color" id="x28cd8275562840f7aeda57766da3359e" aria-label="Ice Blue" data-bi-cN="Ice Blue" data-bi-ecN="Ice Blue" data-bi-hN="Surface Laptop Go 3" data-bi-ehN="Surface Laptop Go 3" data-bi-bhvr="0" data-bi-cT="Button" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-IceBlue-001:VP1-539x440" data-bi-pA="Body" data-bi-compNm="Color Picker" data-transparent-card-text-color="dark" type="radio"/>
                                                <label for="x28cd8275562840f7aeda57766da3359e" aria-hidden="true" class="color-picker-dot-light" title="Ice Blue">
                                                    <span class="color-picker-dot" style="background-color: #85919B">
                                                        <svg viewBox="0 0 100 100">
                                                            <circle cx="50" cy="50" r="50" fill="#85919B"/>
                                                        </svg>
                                                    </span>
                                                    <span class="color-picker-label " data-span-id="x28cd8275562840f7aeda57766da3359e">Ice Blue</span>
                                                </label>
                                            
                                                <input class="color-picker-control hwcp" name="highlight_with_color" id="xf482f908d1984397b6b8f309f36ad95d" aria-label="Sage" data-bi-cN="Sage" data-bi-ecN="Sage" data-bi-hN="Surface Laptop Go 3" data-bi-ehN="Surface Laptop Go 3" data-bi-bhvr="0" data-bi-cT="Button" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sage-001:VP1-539x440" data-bi-pA="Body" data-bi-compNm="Color Picker" data-transparent-card-text-color="dark" type="radio"/>
                                                <label for="xf482f908d1984397b6b8f309f36ad95d" aria-hidden="true" class="color-picker-dot-light" title="Sage">
                                                    <span class="color-picker-dot" style="background-color: #9CA29F">
                                                        <svg viewBox="0 0 100 100">
                                                            <circle cx="50" cy="50" r="50" fill="#9CA29F"/>
                                                        </svg>
                                                    </span>
                                                    <span class="color-picker-label " data-span-id="xf482f908d1984397b6b8f309f36ad95d">Sage</span>
                                                </label>
                                            
                                                <input class="color-picker-control hwcp" name="highlight_with_color" id="xd549981cf852426abd7e3f0ccdbdb4a8" aria-label="Sandstone" data-bi-cN="Sandstone" data-bi-ecN="Sandstone" data-bi-hN="Surface Laptop Go 3" data-bi-ehN="Surface Laptop Go 3" data-bi-bhvr="0" data-bi-cT="Button" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Sandstone-001:VP1-539x440" data-bi-pA="Body" data-bi-compNm="Color Picker" data-transparent-card-text-color="dark" type="radio"/>
                                                <label for="xd549981cf852426abd7e3f0ccdbdb4a8" aria-hidden="true" class="color-picker-dot-light" title="Sandstone">
                                                    <span class="color-picker-dot" style="background-color: #CBB1A0">
                                                        <svg viewBox="0 0 100 100">
                                                            <circle cx="50" cy="50" r="50" fill="#CBB1A0"/>
                                                        </svg>
                                                    </span>
                                                    <span class="color-picker-label " data-span-id="xd549981cf852426abd7e3f0ccdbdb4a8">Sandstone</span>
                                                </label>
                                            
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>



    
    
<script src="/etc.clientlibs/microsoft/components/content/highlight-with-colorpicker/v1/highlight-with-colorpicker/clientlibs/site.min.ACSHASH36a66fa65b4d8734c9196e69f1300b6a.js"></script>



</div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid2040  heading-bg-color-layout-container-uid2040" data-automation-test-id="layout-container-uid2040">
          <style data-automation-test-id="headingColor-layout-container-uid2040">
                    .heading-bg-color-layout-container-uid2040{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid2040" data-componentName="layout-container-uid2040">
          
          
          <div class="buybox aem-GridColumn aem-GridColumn--default--12" data-component-id="8dec4d8698a9ddcc324189296e19d911">




    
        
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/buybox/v1/buybox/clientlibs/clientlib.min.ACSHASH6f0162254cb5412b98ab622d345d6951.css" type="text/css">



    
    



<script type="application/javascript">
    window.msBuyBoxWishlistEndpoint = "https://www.microsoft.com/msstoreapiprod/api/wishlist";
    window.msBuyBoxPTIEndpoint = "https://www.microsoft.com/msstoreapiprod/api/pushtoinstall";
</script>
<input type="hidden" class="buybox-locale-value" value="en-us"/>



    
        
        
            
                    
                    <script>window.__BuyBox__={"isBusinessUserSignedIn":false,"product":{"productId":"8p0wwgj6c6l2","title":"Surface Laptop Go 3","description":"At just under 2.5 lb and with up to 15 hours of battery,² Surface Laptop Go 3 features an ultraportable design to help you breeze through work and play from anywhere. Get it all done with the performance you need, and stand apart from the crowd with a sleek design in stylish colors.³","productType":"Devices","skuOrder":{"0":["HMLK"],"1":["4JP7"],"2":["9X5H"],"3":["GKLL"]},"skuInfo":{"GKLL":{"skuId":"GKLL","affirmation":null,"availabilityId":"8W09MFJ93XN4","skuButtonTitle":"Sandstone","colorHexCode":"CBB1A0","badge":{"savingsPrice":"$150.00","savingsType":"Save up to","isPreOrder":false,"badgeFormat":"","euBadgeFormat":""},"price":{"currency":"USD","current":"$699.99","fromText":"Starting From  ","tax":"","priceFormat":""},"pricingMessage":null,"euPricingMessage":null,"title":"Surface Laptop Go 3 - Sandstone, Intel® Core™ i5, 8GB RAM, 256GB SSD","description":"At just under 2.5 lb and with up to 15 hours of battery,² Surface Laptop Go 3 features an ultraportable design to help you breeze through work and play from anywhere. Get it all done with the performance you need, and stand apart from the crowd with a sleek design in stylish colors.³","wishlist":{"action":"AddToWishList","actionText":"Wish list","actionTextSecondary":"On wish list","behaviorTag":83,"disabled":false},"action":{"action":"ConfigureDevice","actionText":"Build your device","behaviorTag":0,"disabled":false},"displayImage":{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLP?ver=5c8b","purpose":"tile","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"0","system":"rtdam"},"galleryImages":[{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"1","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"2","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbf?ver=7695","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"3","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbb?ver=ca27","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"4","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16tA9?ver=5ce2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"5","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkf?ver=ded8","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"6","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Bxx?ver=8ad5","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"7","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB1?ver=99cd","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"8","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16LUV?ver=3ee9","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"9","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB7?ver=ab1a","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"10","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkl?ver=9b81","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"11","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLJ?ver=4577","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"12","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkq?ver=20ce","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"13","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBd?ver=3b86","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"14","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16GJ5?ver=b7a2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"15","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLP?ver=5c8b","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"16","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLT?ver=99ac","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"17","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBj?ver=6829","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"18","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBn?ver=800f","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"19","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Ehj?ver=e2b1","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"20","system":"rtdam"}],"remediation":{"showPrice":false,"description":"Special pricing for eligible students, parents, teachers and military. May not be combinable with other offers.","uri":" https://www.microsoft.com/en-us/store/r/student-discounts","label":"Check your eligibility","ariaLabel":"Check your eligibility"},"shippingMessage":null,"publisherName":null,"eddMessage":null,"discountMessage":null,"enableBuyNowModal":false},"4JP7":{"skuId":"4JP7","affirmation":null,"availabilityId":"8WC2V8TRQRPK","skuButtonTitle":"Ice Blue","colorHexCode":"85919B","badge":{"savingsPrice":"$150.00","savingsType":"Save up to","isPreOrder":false,"badgeFormat":"","euBadgeFormat":""},"price":{"currency":"USD","current":"$699.99","fromText":"Starting From  ","tax":"","priceFormat":""},"pricingMessage":null,"euPricingMessage":null,"title":"Surface Laptop Go 3 - Ice Blue, Intel® Core™ i5, 8GB RAM, 256GB SSD","description":"At just under 2.5 lb and with up to 15 hours of battery,² Surface Laptop Go 3 features an ultraportable design to help you breeze through work and play from anywhere. Get it all done with the performance you need, and stand apart from the crowd with a sleek design in stylish colors.³","wishlist":{"action":"AddToWishList","actionText":"Wish list","actionTextSecondary":"On wish list","behaviorTag":83,"disabled":false},"action":{"action":"ConfigureDevice","actionText":"Build your device","behaviorTag":0,"disabled":false},"displayImage":{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkf?ver=ded8","purpose":"tile","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"0","system":"rtdam"},"galleryImages":[{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"1","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"2","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbf?ver=7695","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"3","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbb?ver=ca27","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"4","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16tA9?ver=5ce2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"5","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkf?ver=ded8","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"6","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Bxx?ver=8ad5","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"7","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB1?ver=99cd","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"8","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16LUV?ver=3ee9","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"9","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB7?ver=ab1a","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"10","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkl?ver=9b81","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"11","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLJ?ver=4577","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"12","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkq?ver=20ce","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"13","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBd?ver=3b86","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"14","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16GJ5?ver=b7a2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"15","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLP?ver=5c8b","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"16","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLT?ver=99ac","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"17","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBj?ver=6829","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"18","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBn?ver=800f","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"19","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Ehj?ver=e2b1","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"20","system":"rtdam"}],"remediation":{"showPrice":false,"description":"Special pricing for eligible students, parents, teachers and military. May not be combinable with other offers.","uri":" https://www.microsoft.com/en-us/store/r/student-discounts","label":"Check your eligibility","ariaLabel":"Check your eligibility"},"shippingMessage":null,"publisherName":null,"eddMessage":null,"discountMessage":null,"enableBuyNowModal":false},"HMLK":{"skuId":"HMLK","affirmation":null,"availabilityId":"8W688RR2BVVD","skuButtonTitle":"Platinum","colorHexCode":"86888a","badge":{"savingsPrice":"$150.00","savingsType":"Save up to","isPreOrder":false,"badgeFormat":"","euBadgeFormat":""},"price":{"currency":"USD","current":"$699.99","fromText":"Starting From  ","tax":"","priceFormat":""},"pricingMessage":null,"euPricingMessage":null,"title":"Surface Laptop Go 3 - Platinum, Intel® Core™ i5, 16GB RAM, 256GB SSD","description":"At just under 2.5 lb and with up to 15 hours of battery,² Surface Laptop Go 3 features an ultraportable design to help you breeze through work and play from anywhere. Get it all done with the performance you need, and stand apart from the crowd with a sleek design in stylish colors.³","wishlist":{"action":"AddToWishList","actionText":"Wish list","actionTextSecondary":"On wish list","behaviorTag":83,"disabled":false},"action":{"action":"ConfigureDevice","actionText":"Build your device","behaviorTag":0,"disabled":false},"displayImage":{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e","purpose":"tile","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"0","system":"rtdam"},"galleryImages":[{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"1","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"2","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbf?ver=7695","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"3","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbb?ver=ca27","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"4","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16tA9?ver=5ce2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"5","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkf?ver=ded8","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"6","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Bxx?ver=8ad5","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"7","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB1?ver=99cd","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"8","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16LUV?ver=3ee9","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"9","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB7?ver=ab1a","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"10","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkl?ver=9b81","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"11","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLJ?ver=4577","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"12","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkq?ver=20ce","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"13","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBd?ver=3b86","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"14","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16GJ5?ver=b7a2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"15","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLP?ver=5c8b","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"16","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLT?ver=99ac","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"17","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBj?ver=6829","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"18","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBn?ver=800f","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"19","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Ehj?ver=e2b1","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"20","system":"rtdam"}],"remediation":{"showPrice":false,"description":"Special pricing for eligible students, parents, teachers and military. May not be combinable with other offers.","uri":" https://www.microsoft.com/en-us/store/r/student-discounts","label":"Check your eligibility","ariaLabel":"Check your eligibility"},"shippingMessage":null,"publisherName":null,"eddMessage":null,"discountMessage":null,"enableBuyNowModal":false},"9X5H":{"skuId":"9X5H","affirmation":null,"availabilityId":"8W9RVGPWFC5H","skuButtonTitle":"Sage","colorHexCode":"9CA29F","badge":{"savingsPrice":"$150.00","savingsType":"Save up to","isPreOrder":false,"badgeFormat":"","euBadgeFormat":""},"price":{"currency":"USD","current":"$699.99","fromText":"Starting From  ","tax":"","priceFormat":""},"pricingMessage":null,"euPricingMessage":null,"title":"Surface Laptop Go 3 - Sage, Intel® Core™ i5, 16GB RAM, 256GB SSD","description":"At just under 2.5 lb and with up to 15 hours of battery,² Surface Laptop Go 3 features an ultraportable design to help you breeze through work and play from anywhere. Get it all done with the performance you need, and stand apart from the crowd with a sleek design in stylish colors.³","wishlist":{"action":"AddToWishList","actionText":"Wish list","actionTextSecondary":"On wish list","behaviorTag":83,"disabled":false},"action":{"action":"ConfigureDevice","actionText":"Build your device","behaviorTag":0,"disabled":false},"displayImage":{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkl?ver=9b81","purpose":"tile","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"0","system":"rtdam"},"galleryImages":[{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"1","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"2","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbf?ver=7695","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"3","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbb?ver=ca27","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"4","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16tA9?ver=5ce2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"5","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkf?ver=ded8","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"6","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Bxx?ver=8ad5","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"7","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB1?ver=99cd","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"8","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16LUV?ver=3ee9","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"9","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB7?ver=ab1a","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"10","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkl?ver=9b81","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"11","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLJ?ver=4577","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"12","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkq?ver=20ce","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"13","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBd?ver=3b86","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"14","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16GJ5?ver=b7a2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"15","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLP?ver=5c8b","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"16","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLT?ver=99ac","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"17","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBj?ver=6829","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"18","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBn?ver=800f","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"19","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Ehj?ver=e2b1","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"20","system":"rtdam"}],"remediation":{"showPrice":false,"description":"Special pricing for eligible students, parents, teachers and military. May not be combinable with other offers.","uri":" https://www.microsoft.com/en-us/store/r/student-discounts","label":"Check your eligibility","ariaLabel":"Check your eligibility"},"shippingMessage":null,"publisherName":null,"eddMessage":null,"discountMessage":null,"enableBuyNowModal":false}},"images":[{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=055e","purpose":"tile","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":1400,"width":2300,"imagePosition":"0","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"1","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"2","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbf?ver=7695","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"3","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbb?ver=ca27","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"4","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16tA9?ver=5ce2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"5","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkf?ver=ded8","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"6","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Bxx?ver=8ad5","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"7","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB1?ver=99cd","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"8","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16LUV?ver=3ee9","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"9","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB7?ver=ab1a","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"10","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkl?ver=9b81","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"11","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLJ?ver=4577","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"12","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkq?ver=20ce","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"13","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBd?ver=3b86","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"14","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16GJ5?ver=b7a2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"15","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLP?ver=5c8b","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"16","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLT?ver=99ac","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"17","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBj?ver=6829","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"18","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBn?ver=800f","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"19","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Ehj?ver=e2b1","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"20","system":"rtdam"}],"isDualCTA":false,"displayImage":{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"1","system":"rtdam"},"galleryImages":[{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"1","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"2","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbf?ver=7695","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"3","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbb?ver=ca27","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"4","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16tA9?ver=5ce2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Platinum.","background":"","height":2000,"width":2000,"imagePosition":"5","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkf?ver=ded8","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"6","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Bxx?ver=8ad5","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"7","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB1?ver=99cd","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"8","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16LUV?ver=3ee9","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"9","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB7?ver=ab1a","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Ice Blue.","background":"","height":2000,"width":2000,"imagePosition":"10","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkl?ver=9b81","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"11","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLJ?ver=4577","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"12","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkq?ver=20ce","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"13","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBd?ver=3b86","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"14","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16GJ5?ver=b7a2","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sage.","background":"","height":2000,"width":2000,"imagePosition":"15","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLP?ver=5c8b","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"16","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLT?ver=99ac","purpose":"screenshot","alt":"A Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"17","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBj?ver=6829","purpose":"screenshot","alt":"A top-down view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"18","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBn?ver=800f","purpose":"screenshot","alt":"A side view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"19","system":"rtdam"},{"uri":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Ehj?ver=e2b1","purpose":"screenshot","alt":"A back view of a Surface Laptop Go 3 in the color Sandstone.","background":"","height":2000,"width":2000,"imagePosition":"20","system":"rtdam"}],"action":null,"wishlist":null,"badge":null,"shippingMessage":null,"price":null,"pricingMessage":null,"remediation":null,"contentRating":null,"category":"Devices","type":"Devices","family":"Devices","hideEddMessage":true},"requestParams":{"productId":"8p0wwgj6c6l2","locale":"en-us","deviceFamily":null},"selectorInfo":[{"selectionItems":[{"label":"Platinum","colorCode":"86888a","skuId":"HMLK"},{"label":"Ice Blue","colorCode":"85919B","skuId":"4JP7"},{"label":"Sage","colorCode":"9CA29F","skuId":"9X5H"},{"label":"Sandstone","colorCode":"CBB1A0","skuId":"GKLL"}],"defaultIndex":0,"specificationRenderHint":"Color","automationId":"colorSelector"}],"useProductInfo":true,"disableGallery":false,"hideTileImage":false,"hideWishlist":false,"hideColorPicker":false,"enableQuickHrefs":true,"enableUcsExp":false,"noLineBreaks":false,"addToCartHash":{"cV":"CASMicrosoftCV2080828f.0.1.0","muid":"BF8BEB266A7341379BC2AF25BB8C8939","atcHash":"64149C64294EFE6A84A4AAB2B65174B50A41814E5A2055B1F9DFD6FE59A0CC9C"},"exposeAddToCartHash":true,"isGrabGoEnabled":false,"useOnlyTitle":false,"hidePrice":false,"promoBannerBelow":[{"heading":"Bundle and save with the Surface Laptop Go 3 Essentials Bundle","body":"<p>Includes your choice of Surface Laptop Go 3, Microsoft 365 and Microsoft Complete Protection Plan and 20% off optional accessories.</p>\r\n","link":{"ctatext":"Build your bundle","nonTranslatableCtaText":"Build your bundle","hyperlink":"https://www.microsoft.com/en-us/store/build/Surface-Laptop-Go-3-Essentials-Bundle/90mfgpb9pxgf?icid=LaptopGo3_PDP_Additional_Buy_Box_Essentials_Bundle","openInNewTab":"_self","styleoption":"cta","arialabel":"Build your Surface Laptop Go 3 bundle","useForModal":false,"dataBehavior":0,"htmlAttributes":[],"encodeQueryParams":false},"secondaryLink":{"openInNewTab":"_self","styleoption":"cta","useForModal":false,"dataBehavior":0,"htmlAttributes":[],"encodeQueryParams":false}},{"heading":"60-day price protection","body":"<p>Enjoy price protection for 60 days from your delivery date. If we drop the price of a physical product or you find it lower at an eligible retailer, contact us and we'll honor a one-time price adjustment. Exclusions apply.</p>\r\n","link":{"ctatext":"Learn more","nonTranslatableCtaText":"Learn more","hyperlink":"https://www.microsoft.com/en-us/store/b/price-protection?icid=Surface_PDP_PricePromise_01032024","openInNewTab":"_blank","styleoption":"cta","arialabel":"Learn more about price protection","useForModal":false,"dataBehavior":0,"htmlAttributes":[],"encodeQueryParams":false},"secondaryLink":{"openInNewTab":"_self","styleoption":"cta","useForModal":false,"dataBehavior":0,"htmlAttributes":[],"encodeQueryParams":false}}],"promoBannerBelowPrice":[{"body":"<p>Flexible payments available with PayPal and Citizens Pay<sup>®</sup>.</p>\r\n","link":{"ctatext":"Learn more","nonTranslatableCtaText":"Learn more","hyperlink":"https://www.microsoft.com/en-us/store/b/payment-financing-options","openInNewTab":"_self","styleoption":"cta","arialabel":"Learn more about flexible payment options","useForModal":false,"dataBehavior":0,"htmlAttributes":[],"encodeQueryParams":false}}],"promoBannerRight":[{"body":"<p>Free 2-3 day shipping. Free 60-day returns.<br />\r\n<br />\r\nBuying for your Business? Go to</p>\r\n","link":{"ctatext":"Surface Laptop Go 3 for Business","nonTranslatableCtaText":"Surface Laptop Go 3 for Business","hyperlink":"https://www.microsoft.com/en-us/d/surface-laptop-go-3-for-business/90qlzjm26q6s?activetab=pivot:overviewtab","openInNewTab":"_self","styleoption":"cta","useForModal":false,"dataBehavior":0,"htmlAttributes":[],"encodeQueryParams":false}}],"disableMoreOrLess":true,"pageTheme":"main-light","buyboxStaticStrings":{"PRODUCT_INFORMATION":"Product Information for {0}","ORIGINAL_PRICE_WAS":"Original price was","BEFORE_YOU_BUY":"Before you buy","BUY_NOW_ERROR_STATE_MESSAGE":"An unexpected error has occurred. Please try again later.","AND_NOW_PRICE_IS":"and now price is","CLOSE":"Close","VIEW_WISH_LIST":"View wish list","FETCH_DEVICES":"Fetching eligible devices","IMAGES":"images","FETCH_DEVICES_ERROR":"Something happened on our end. Waiting a bit might help.","SIGN_UP":"Sign Up","INSTALL_ATTEMPT_MESSAGE":"We're attempting to install on your selected device(s).","WISH_LIST_ADDED_MESSAGE":"This was added to your wishlist.","CLOSE_DIALOG_WINDOW":"Close dialog window","SIGN_IN":"Sign In","CHOOSE_YOUR_COLOR":"Choose your color","BUSINESS_PRICING_ELIGIBILITY_MESSAGE":"Get discounts on eligible products and more when you buy with a business account","WITH_ZIPCODE_WITH_SHIPPING_METHOD":"Get it as soon as {0} to {1} when you choose {2}","OPEN_GALLERY":"Open gallery","THANK_YOU":"Thank you!","SHOW_LESS_ABOUT":"Show less about","BUSINESS_CART_DISCOUNT_MESSAGE":"Need more? Purchase up to 25 of this item in cart.","WHERE_DO_YOU_WANT_TO_INSTALL":"Where do you want to install?","LESS":"Less","STATIC_BUNDLE_INCLUDES":"The bundle includes","NO_DEVICES_MESSAGE":"It looks like you don't have any applicable device(s) linked to your Microsoft account. To install, sign in on a device with your Microsoft account.","WITHOUT_ZIPCODE_WITH_SHIPPING_METHOD":"Get it as soon as {0} when you choose {1}","INSTALL_MESSAGE":"We'll install it automatically on all the devices you select.","CHOOSE_YOUR_CONFIGURATION":"Choose your configuration","SUBMIT_REQUEST":"Submitting request to install product on selected devices.","BUSINESS_SIGN_IN_MESSAGE":"Please {0} with Business account to get additional business discount or {1} to create a new business account.","ON_WISH_LIST":"On wish list","CONTINUE_SHOPPING":"Continue shopping","INSTALL_NOW":"Install Now","READ_MORE_ABOUT":"Read more about","SHIPPING_METHODTYPE_EXPEDITED":"expedited shipping","CLOSE_GALLERY_WINDOW":"Close gallery window","ADD_TO_CART_SUPPORT_PHONE_NUMBER":"1-877-696-7786","SHIPPING_METHODTYPE_EXPRESS":"express shipping","OK":"Ok","OR":"Or","SHOW_MORE_ABOUT":"Show more about","SHIPPING_METHODTYPE_SELECT":"select shipping","ADDING":"Adding","RATING_BOARD_MESSAGE":"Rating Board {0}, {1}. Rated {2}.","VIEW_CART":"View cart","WITH_ZIPCODE_WITHOUT_SHIPPING_METHOD":"Get it as soon as {0} to {1}","PTI_PUSH_ERROR":"Something happened on our end. Waiting a bit might help.","TRY_AGAIN":"Try that again","WISH_LIST":"Wish list","CV_SUPPORT_TEXT2":"Please save the following error code(s) so that our support advocates may be able to better assist you:","MORE":"More","CV_SUPPORT_TEXT1":"If you need any additional assistance, please contact Microsoft Store Support at ","CV":"CV:","CANCEL":"Cancel","WITHOUT_ZIPCODE_WITHOUT_SHIPPING_METHOD":"Get it as soon as {0}","OUT_OF_STOCK":"Out of stock","WISH_LIST_SHARING_MESSAGE":"You added {0} to your wish list. You can share this list with others.","GET_MORE_INFO":"Get more info"},"showBusinessUserValuePropMessage":false,"hideBusinessUserValuePropMessage":true,"geoLocation":"georegion=200,country_code=ES,region_code=CT,city=BARCELONA,lat=41.40,long=2.17,timezone=GMT+1,continent=EU,throughput=vhigh,bw=5000,asnum=13041,location_id=0","dccApiEndpoint":"https://dcc.mp.microsoft.com:443/v1.0/deliverycost/"}</script><div id="rootContainer_BuyBox"><section data-tags="{&quot;ProductInfo&quot;:{&quot;id&quot;:&quot;8p0wwgj6c6l2&quot;,&quot;title&quot;:&quot;Surface Laptop Go 3&quot;,&quot;prCat&quot;:&quot;Devices&quot;,&quot;type&quot;:&quot;Devices&quot;,&quot;family&quot;:&quot;Devices&quot;,&quot;rtPrice&quot;:&quot;$699.99&quot;,&quot;cur&quot;:&quot;USD&quot;,&quot;sku&quot;:&quot;HMLK&quot;,&quot;skuType&quot;:&quot;Full&quot;,&quot;isChild&quot;:&quot;False&quot;}}" class="buy-box material-md-card" aria-label="Product Information for Surface Laptop Go 3"><div class="row pt-4 buy-box-row"><div class="buy-box-left-col col-lg-3 col-xl-2"><div class="buy-box-product-image pb-5 pb-md-4 pl-md-4 pr-md-2 text-center"><picture class="d-flex my-0 mx-auto"><source srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e&amp;q=90&amp;m=6&amp;h=150&amp;w=150&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;aim=true" media="(max-width:539px)"/><source srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e&amp;q=90&amp;m=6&amp;h=200&amp;w=200&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width:540px) and (max-width:767px)"/><source srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e&amp;q=90&amp;m=6&amp;h=270&amp;w=270&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width:768px) and (max-width:859px)"/><source srcSet="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e&amp;q=90&amp;m=6&amp;h=270&amp;w=270&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;aim=true" media="(min-width:860px) and (max-width:1083px)"/><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e&amp;q=90&amp;m=6&amp;h=270&amp;w=270&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;aim=true" alt="A Surface Laptop Go 3 in the color Platinum." data-automation-test-id="buy-box-product-image"/></picture><div data-mount="modal" class="modal fade" id="buy-box-product-image-gallery" tabindex="-1" role="dialog" aria-labelledby="buy-box-product-image-gallery-modal-label" aria-hidden="true"><div class="modal-dialog modal-xl modal-dialog-scrollable" role="document"><div class="modal-content"><div class="modal-header" tabindex="-1"><h2 class="modal-title h6" id="buy-box-product-image-gallery-modal-label" data-automation-test-id="buy-box-product-image-gallery-modal-title">Surface Laptop Go 3</h2><button type="button" class="close" aria-label="Close gallery window" title="Close" data-dismiss="modal" data-automation-test-id="buy-box-product-image-gallery-modal-button"></button></div><div class="modal-body pt-1"><p class="mb-3 text-left" tabindex="0">20 images<!-- --> </p><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A Surface Laptop Go 3 in the color Platinum."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A Surface Laptop Go 3 in the color Platinum."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbf?ver=7695&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A top-down view of a Surface Laptop Go 3 in the color Platinum."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16wbb?ver=ca27&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A side view of a Surface Laptop Go 3 in the color Platinum."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16tA9?ver=5ce2&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A back view of a Surface Laptop Go 3 in the color Platinum."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkf?ver=ded8&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A Surface Laptop Go 3 in the color Ice Blue."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Bxx?ver=8ad5&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A Surface Laptop Go 3 in the color Ice Blue."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB1?ver=99cd&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A top-down view of a Surface Laptop Go 3 in the color Ice Blue."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16LUV?ver=3ee9&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A side view of a Surface Laptop Go 3 in the color Ice Blue."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB7?ver=ab1a&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A back view of a Surface Laptop Go 3 in the color Ice Blue."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkl?ver=9b81&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A Surface Laptop Go 3 in the color Sage."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLJ?ver=4577&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A Surface Laptop Go 3 in the color Sage."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkq?ver=20ce&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A top-down view of a Surface Laptop Go 3 in the color Sage."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBd?ver=3b86&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A side view of a Surface Laptop Go 3 in the color Sage."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16GJ5?ver=b7a2&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A back view of a Surface Laptop Go 3 in the color Sage."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLP?ver=5c8b&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A Surface Laptop Go 3 in the color Sandstone."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLT?ver=99ac&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A Surface Laptop Go 3 in the color Sandstone."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBj?ver=6829&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A top-down view of a Surface Laptop Go 3 in the color Sandstone."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OBn?ver=800f&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A side view of a Surface Laptop Go 3 in the color Sandstone."/><img src="https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Ehj?ver=e2b1&amp;q=90&amp;m=6&amp;h=705&amp;w=1253&amp;b=%23FFFFFFFF&amp;f=jpg&amp;o=f&amp;p=140&amp;aim=true" class="img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5" alt="A back view of a Surface Laptop Go 3 in the color Sandstone."/></div></div></div></div><button class="action-trigger glyph-prepend glyph-prepend-photo-collection my-2 " data-target="#buy-box-product-image-gallery" data-m="{&quot;cN&quot;:&quot;Open gallery&quot;,&quot;ecn&quot;:&quot;Open Gallery&quot;,&quot;bhvr&quot;:&quot;0&quot;,&quot;hn&quot;:&quot;Surface Laptop Go 3&quot;,&quot;ehn&quot;:&quot;Surface Laptop Go 3&quot;,&quot;pid&quot;:&quot;8p0wwgj6c6l2&quot;,&quot;sku&quot;:&quot;HMLK&quot;,&quot;cT&quot;:&quot;Link&quot;,&quot;pa&quot;:&quot;Body&quot;,&quot;compnm&quot;:&quot;Buy Box&quot;}" data-automation-test-id="buy-box-action-trigger-button">Open gallery</button></div></div><div class="buy-box-middle-col col-lg-6 col-xl-7"><div class="pb-4 pr-md-4"><div class="mb-2"><div class="d-inline-block align-middle mr-3"><span class="badge bg-yellow" data-automation-test-id="buy-box-badge">Save up to $150.00</span></div></div><h1 class="h2" data-automation-test-id="buy-box-product-title">Surface Laptop Go 3</h1><div class="mb-3"></div><div class="mb-3"><div class="d-inline-block mr-3"><button class="action-trigger glyph-prepend glyph-prepend-heart" data-target="#wishlist-modal" data-m="{&quot;cN&quot;:&quot;Wish List&quot;,&quot;ecn&quot;:&quot;WishList&quot;,&quot;bhvr&quot;:&quot;83&quot;,&quot;hn&quot;:&quot;Surface Laptop Go 3 - Platinum, Intel® Core™ i5, 16GB RAM, 256GB SSD&quot;,&quot;ehn&quot;:&quot;Surface Laptop Go 3 - Platinum, Intel® Core™ i5, 16GB RAM, 256GB SSD&quot;,&quot;cT&quot;:&quot;Link&quot;,&quot;pa&quot;:&quot;Body&quot;,&quot;compnm&quot;:&quot;Buy Box&quot;}" aria-label="Wish list" data-automation-test-id="buy-box-wishlist-not-added-button">Wish list</button><div data-mount="modal" class="modal fade" id="wishlist-modal" tabindex="-1" role="dialog" aria-labelledby="wishlistModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h2 class="modal-title h6" id="wishlistModalLabel" data-automation-test-id="buy-box-wishlist-modal-title">This was added to your wishlist.</h2><button type="button" class="close" data-dismiss="modal" aria-label="Close dialog window" title="Close" data-automation-test-id="buy-box-wishlist-modal-close-button"></button></div><div class="modal-body"><p data-automation-test-id="buy-box-wishlist-modal-body">You added Surface Laptop Go 3 - Platinum, Intel® Core™ i5, 16GB RAM, 256GB SSD to your wish list. You can share this list with others.</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary mr-2" data-dismiss="modal" data-automation-test-id="buy-box-wishlist-modal-footer-button">Continue shopping</button><a href="https://www.microsoft.com/en-us/store/wishlist" class="btn btn-primary" data-automation-test-id="buy-box-wishlist-modal-footer-link">View wish list</a></div></div></div></div></div></div><div class="mb-3"><div style="white-space:pre-line"><div data-mount="" class="show-more-show-less" data-container="showMoreShowLess" data-automation-test-id="buy-box-show-more-show-less"><div><span data-automation-test-id="buy-box-product-description">At just under 2.5 lb and with up to 15 hours of battery,² Surface Laptop Go 3 features an ultraportable design to help you breeze through work and play from anywhere. Get it all done with the performance you need, and stand apart from the crowd with a sleek design in stylish colors.³</span></div></div></div></div><div><p class="mb-0"><span class="font-weight-bold" data-automation-test-id="buy-box-promo-text-middle-heading">Bundle and save with the Surface Laptop Go 3 Essentials Bundle</span></p><div data-automation-test-id="buy-box-promo-text-middle-body"><p>Includes your choice of Surface Laptop Go 3, Microsoft 365 and Microsoft Complete Protection Plan and 20% off optional accessories.</br><a href="https://www.microsoft.com/en-us/store/build/Surface-Laptop-Go-3-Essentials-Bundle/90mfgpb9pxgf?icid=LaptopGo3_PDP_Additional_Buy_Box_Essentials_Bundle" aria-label="Build your Surface Laptop Go 3 bundle" target="_self"  class="cta">Build your bundle<span class="glyph" aria-hidden="true"></span></a></p></div><p class="mb-0"><span class="font-weight-bold" data-automation-test-id="buy-box-promo-text-middle-heading">60-day price protection</span></p><div data-automation-test-id="buy-box-promo-text-middle-body"><p>Enjoy price protection for 60 days from your delivery date. If we drop the price of a physical product or you find it lower at an eligible retailer, contact us and we'll honor a one-time price adjustment. Exclusions apply.</br><a href="https://www.microsoft.com/en-us/store/b/price-protection?icid=Surface_PDP_PricePromise_01032024" aria-label="Learn more about price protection" target="_blank"  class="cta">Learn more<span class="glyph" aria-hidden="true"></span></a></p></div></div></div></div><div class="col-lg-3 buy-box-right-col"><div class="pb-4 pr-lg-4"><p aria-hidden="false" class="h3 font-weight-normal" data-automation-test-id="buy-box-pricing">Starting From  <span class="font-weight-semibold" data-automation-test-id="buy-box-price">$699.99 </span></p><div><div data-automation-test-id="buy-box-promo-text-right-below-price-body"><p>Flexible payments available with PayPal and Citizens Pay<sup>®</sup>.</br><a href="https://www.microsoft.com/en-us/store/b/payment-financing-options" aria-label="Learn more about flexible payment options" target="_self"  class="cta">Learn more<span class="glyph" aria-hidden="true"></span></a></p></div></div><div class="mb-3"><div class=""><fieldset class="color-picker" data-mount="color-picker" data-controls="color-picker-image" data-m="{&quot;cT&quot;:&quot;Button&quot;,&quot;hn&quot;:&quot;Surface Laptop Go 3&quot;,&quot;ehn&quot;:&quot;Surface Laptop Go 3&quot;,&quot;cN&quot;:&quot;Color Picker&quot;,&quot;ecn&quot;:&quot;Color Picker&quot;,&quot;bhvr&quot;:4,&quot;pa&quot;:&quot;Body&quot;,&quot;compnm&quot;:&quot;Buy Box&quot;}" data-automation-test-id="buy-box-skuchooser-fieldset"><legend class="sr-only">Choose your color</legend><input type="radio" class="color-picker-control" name="color-picker-control" id="color-86888a" aria-label="Platinum" data-color-picker-image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e" autoComplete="off" checked=""/><label for="color-86888a" aria-hidden="true" title="Platinum"><span class="color-picker-dot" style="background-color:#86888a"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#86888a"></circle></svg></span><span class="color-picker-label">Platinum</span></label> <input type="radio" class="color-picker-control" name="color-picker-control" id="color-85919B" aria-label="Ice Blue" data-color-picker-image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkf?ver=ded8" autoComplete="off"/><label for="color-85919B" aria-hidden="true" title="Ice Blue"><span class="color-picker-dot" style="background-color:#85919B"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#85919B"></circle></svg></span><span class="color-picker-label">Ice Blue</span></label> <input type="radio" class="color-picker-control" name="color-picker-control" id="color-9CA29F" aria-label="Sage" data-color-picker-image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16Wkl?ver=9b81" autoComplete="off"/><label for="color-9CA29F" aria-hidden="true" title="Sage"><span class="color-picker-dot" style="background-color:#9CA29F"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#9CA29F"></circle></svg></span><span class="color-picker-label">Sage</span></label> <input type="radio" class="color-picker-control" name="color-picker-control" id="color-CBB1A0" aria-label="Sandstone" data-color-picker-image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLP?ver=5c8b" autoComplete="off"/><label for="color-CBB1A0" aria-hidden="true" title="Sandstone"><span class="color-picker-dot" style="background-color:#CBB1A0"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#CBB1A0"></circle></svg></span><span class="color-picker-label">Sandstone</span></label> </fieldset></div></div><div class="buy-box-buy-buttons mb-3"><div class=""><a class="btn  btn-primary  btn-block" aria-label="Surface Laptop Go 3 - Build your device" aria-disabled="false" data-m="{&quot;cN&quot;:&quot;Build your device&quot;,&quot;ecn&quot;:&quot;Build your device&quot;,&quot;bhvr&quot;:0,&quot;hn&quot;:&quot;Surface Laptop Go 3&quot;,&quot;ehn&quot;:&quot;Surface Laptop Go 3&quot;,&quot;pid&quot;:&quot;8p0wwgj6c6l2&quot;,&quot;sku&quot;:&quot;HMLK&quot;,&quot;cT&quot;:&quot;Button&quot;,&quot;pa&quot;:&quot;Body&quot;,&quot;compnm&quot;:&quot;Buy Box&quot;,&quot;isConfigureProduct&quot;:1}" id="buybox-cta-proper" href="javascript:void(0)" data-automation-test-id="buy-box-anchor-button">Build your device</a><script type="application/javascript">
                var scripts = document.getElementsByTagName("script");
                var script = scripts[scripts.length-1];
                var el = script.previousSibling;
                var initialHref = (
                        function addHrefToConfigure() {
                            var queryString = 
            window.location.href
                .replace(/&+(activetab)=[^&]*/g, "")
                .replace(/\?+(activetab)=[^&]*&/g, "?")
                .replace(/\?+(activetab)=[^&]*/g, "")
                .match(/\?.*/)
        ;

                            var configureUrl = "https://$hostname/en-us$sandboxPath/store/configure/Surface-Laptop-Go-3/8p0wwgj6c6l2?selectedColor=86888a";

                            var windowsanyIndex = window.location.href.search("windowsany");

                            if (windowsanyIndex > 0) {
                                var subUrl = window.location.href.substr(windowsanyIndex + 1);
                                configureUrl = configureUrl
                                    .replace("$hostname", window.location.hostname)
                                    .replace("$sandboxPath", "/windowsany/$user")
                                    .replace("$user", subUrl.split("/")[1]);
                            }
                            else if (window.location.hostname.search("localhost") >= 0) {
                                configureUrl = configureUrl
                                    .replace("$hostname", "wwwdev.microsoft.com")
                                    .replace("$sandboxPath", "");
                            }
                            else {
                                configureUrl = configureUrl
                                    .replace("$hostname", window.location.hostname)
                                    .replace("$sandboxPath", "");
                            }
                            
                            var finalUrl = configureUrl;
                            if (queryString) {
                                if (finalUrl.search(/\?/) > 0) {
                                    queryString = queryString[0].replace(/\?/, "&");
                                }
                                finalUrl = finalUrl + queryString;
                            }
                            return finalUrl;
                        }
                    )();
                el.setAttribute("href", initialHref);
            </script></div></div><div><div data-automation-test-id="buy-box-promo-text-right-body"><p>Free 2-3 day shipping. Free 60-day returns.<br />
<br />
Buying for your Business? Go to</br><a href="https://www.microsoft.com/en-us/d/surface-laptop-go-3-for-business/90qlzjm26q6s?activetab=pivot:overviewtab"  target="_self"  class="cta">Surface Laptop Go 3 for Business<span class="glyph" aria-hidden="true"></span></a></p></div></div></div></div></div><div class="material-color-neutral-100"><div class="row py-4 bg-neutral-100 bg-md-transparent" data-automation-test-id="buy-box-standard-layout"><section class="col-12"><div class="px-md-4"><p class="mb-0" data-automation-test-id="buy-box-remediation-text">Special pricing for eligible students, parents, teachers and military. May not be combinable with other offers.</p><a data-m="{&quot;cN&quot;:&quot;Check your eligibility&quot;,&quot;ecn&quot;:&quot;Check your eligibility&quot;,&quot;hn&quot;:&quot;Surface Laptop Go 3&quot;,&quot;ehn&quot;:&quot;Surface Laptop Go 3&quot;,&quot;bhvr&quot;:&quot;0&quot;,&quot;cT&quot;:&quot;Link&quot;,&quot;pa&quot;:&quot;Body&quot;,&quot;compnm&quot;:&quot;Buy Box&quot;}" href="" class="cta  mt-2 " data-automation-test-id="buy-box-remediation-url">Check your eligibility<span class="glyph" aria-hidden="true"></span></a></div></section></div></div></section><div style="padding-top:48px"></div></div>
                
        
        
        
                
                
             
    

    



    



    
    
<script src="/etc.clientlibs/microsoft/components/content/buybox/v1/buybox/clientlibs/clientlib.min.ACSHASHfba52682de4ede283d903974193e4293.js"></script>



</div>

          
     </div>
</div></div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="sticky-tabs tabs aem-GridColumn aem-GridColumn--default--12" data-component-id="5b416377bf3bb5696e990d57cfc2a674">








<span class="edit-mode"></span>

<div class="cmp-tabs" data-cmp-is="tabs" data-previous-price-aria-label="Full price was {0} now..." data-automation-test-id="StickyTabs-c35e2f51-101e-4102-ba60-b5f903f56032">
		<div data-mount="sticky" data-direction="top" data-smooth-transition class="bg-body stickyRoot" data-automation-test-id="StickyType-c35e2f51-101e-4102-ba60-b5f903f56032">
	
		
    

    <div class="sticky-show-stuck my-3" data-automation-test-id="StickyBar-c35e2f51-101e-4102-ba60-b5f903f56032">
        <div class="container" data-automation-test-id="StickyBarContainer-c35e2f51-101e-4102-ba60-b5f903f56032">
            <div class="row" data-automation-test-id="StickyBarRow-c35e2f51-101e-4102-ba60-b5f903f56032">

                <div class="col-6 d-none d-sm-block" data-automation-test-id="StickyBarHeadingWrapper-c35e2f51-101e-4102-ba60-b5f903f56032">
                    <h2 class="h3 my-0" id="title" aria-hidden="true" data-automation-test-id="StickyBarHeading-c35e2f51-101e-4102-ba60-b5f903f56032"></h2>
                </div>

                <div class="col-12 col-sm-6 text-left text-sm-right font-weight-semibold" data-automation-test-id="StickyBarPriceWrapper-c35e2f51-101e-4102-ba60-b5f903f56032">
                    <p class="d-inline-block my-0 mr-2" aria-hidden="true" id="buyBoxPrice" data-automation-test-id="StickyBarBuyBoxPrice-c35e2f51-101e-4102-ba60-b5f903f56032"></p>
                    <div id="ctaRoot" style="display: inline-block" data-automation-test-id="StickyBarCtaRoot-c35e2f51-101e-4102-ba60-b5f903f56032"></div>
                </div>

            </div>
        </div>
    </div>


	

	
		<div class="container" data-automation-test-id="StickyTabHeaderContainer-c35e2f51-101e-4102-ba60-b5f903f56032">
			
	<div class="row horizontal-tab" data-automation-test-id="StickyTabHeader-c35e2f51-101e-4102-ba60-b5f903f56032">
		<div class="col-12  tab-standard" data-mount="tab-slider" data-automation-test-id="StickyTabVariant-c35e2f51-101e-4102-ba60-b5f903f56032">
			<div class="tab-overflow" data-automation-test-id="StickyTabOverflow-c35e2f51-101e-4102-ba60-b5f903f56032">
				<div class="tab-window" data-automation-test-id="StickyTabWindow-c35e2f51-101e-4102-ba60-b5f903f56032">
					<div class="justify-content-center tab-group cmp-tabs__tablist " role="tablist" aria-label="Learn more about Surface Laptop Go 3" data-automation-test-id="StickyTabItem-c35e2f51-101e-4102-ba60-b5f903f56032">
						

						
						<a data-bi-cn="Overview" data-bi-ecn="Overview" data-bi-bhvr="0" data-bi-ct="Button" data-bi-pa="Body" data-bi-compnm="Sticky Tabs" role="tab" class="cmp-tabs__tab  " tabindex="-1" data-cmp-hook-tabs="tab" id="Overview-tab" href="#Overview" data-mount="tab" aria-controls="Overview" aria-selected="false" data-automation-test-id="StickyTabAnchorLinks0-c35e2f51-101e-4102-ba60-b5f903f56032">Overview</a>
					
						

						
						<a data-bi-cn="Full tech specs" data-bi-ecn="Full tech specs" data-bi-bhvr="0" data-bi-ct="Button" data-bi-pa="Body" data-bi-compnm="Sticky Tabs" role="tab" class="cmp-tabs__tab  " tabindex="-1" data-cmp-hook-tabs="tab" id="Full tech specs-tab" href="#Full%20tech%20specs" data-mount="tab" aria-controls="Full tech specs" aria-selected="false" data-automation-test-id="StickyTabAnchorLinks1-c35e2f51-101e-4102-ba60-b5f903f56032">Full tech specs</a>
					</div>
				</div>
			</div>
			<div class="tab-arrows">
				<button class="arrow-prev" tabindex="-1" aria-hidden="true" data-width="40" data-automation-test-id="StickyTabPrevButton-c35e2f51-101e-4102-ba60-b5f903f56032">
					<span class="sr-only" data-automation-test-id="StickyTabPrevButtonText-c35e2f51-101e-4102-ba60-b5f903f56032">Previous slide.</span>
				</button>
				<button class="arrow-next" tabindex="-1" aria-hidden="true" data-width="40" data-automation-test-id="StickyTabNextButton-c35e2f51-101e-4102-ba60-b5f903f56032">
					<span class="sr-only" data-automation-test-id="StickyTabNextButtonText-c35e2f51-101e-4102-ba60-b5f903f56032">Next slide.</span>
				</button>
			</div>
		</div>
	</div>


		</div>
	
</div>
<div class=" mt-4" data-automation-test-id="StickyTabContentContainer-c35e2f51-101e-4102-ba60-b5f903f56032">
	
	
	<div data-automation-test-id="StickyTabContentRow-c35e2f51-101e-4102-ba60-b5f903f56032">
		<div class="col-12" data-automation-test-id="StickyTabContentColumn-c35e2f51-101e-4102-ba60-b5f903f56032">
			<div class="tab-panel-group  mb-5" data-automation-test-id="StickyTabPanel-c35e2f51-101e-4102-ba60-b5f903f56032">
					<div role="tabpanel" tabindex="0" class="tab-panel fade cmp-tabs__tabpanel cmp-tabs__tabpanel--active active show" data-cmp-hook-tabs="tabpanel" id="Overview" aria-labelledby="Overview" data-automation-test-id="StickyTabPanelItem0-c35e2f51-101e-4102-ba60-b5f903f56032"><div class="responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uidad2e  heading-bg-color-layout-container-uidad2e" data-automation-test-id="layout-container-uidad2e">
          <style data-automation-test-id="headingColor-layout-container-uidad2e">
                    .heading-bg-color-layout-container-uidad2e{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uidad2e" data-componentName="layout-container-uidad2e">
          
          
          <div class="areaheading dynamic-price-container mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASH8396009a793fda25f0ad1c495ec773f4.css" type="text/css">



        

        <div id="areaheading-uid9e74" data-componentName="areaheading-uid9e74" class="area-heading text-md-center  " data-automation-test-id="Areaheading-areaheading-uid9e74" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 mx-auto" data-automation-test-id="AreaheadingHeadingText-areaheading-uid9e74" style="color:">
                        
                        
                            
                            
    <h2 data-automation-test-id="heading-areaheading-uid9e74" class="text-break-keep-all h1    " id="heading-areaheading-uid9e74">
            
    
        
        
            
            
                <p>For work, play, or whatever comes your way</p>

            
        
    
    

    </h2>

                        
                    </div>
                
                
            </div>
        </div>
        
    
</div>
<div class="feature mt-md-5 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="2fd48590f7ee0f47e8136e5a945f96ee">
     
     
     
     
     


     
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/feature/v1/feature/clientlibs/site.min.ACSHASH2d0e693962b7cb2892e26049d2cd6452.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/dynamic-feature/v1/dynamic-feature/clientlibs/site.min.ACSHASHf834ecc43df9754fbcd8a6bb1078e89e.js" defer></script>










<section id="feature-uid50ab" class="feature-card" data-componentName="feature-uid50ab" data-automation-test-id="FeatureSection-feature-uid50ab" style="overflow: hidden;">
     

     
          
               
                    
    
    
    
    
        
    
    <div data-automation-test-id="FeatureBaseDivCardClass-feature-uid50ab" class="card mx-ng mx-md-0">
        <div class="row no-gutters material-surface material-color-light  " data-mount="click-group" data-automation-test-id="FeatureBaseDivRow-feature-uid50ab">
            
    

    <div class="col-md-8" data-automation-test-id="FeatureMedia-feature-uid50ab">

        
        
    
    
    
        
    
    
        <picture data-automation-test-id="FeatureImagePictureImageLazyLoad-feature-uid50ab">
            <source data-automation-test-id="FeatureImageSourcesmXLargeImageLazyLoad-feature-uid50ab" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_bing-edge:VP5-1842x1036" media="(min-width: 1400px)"/>
            <source data-automation-test-id="FeatureImageSourcesmLargeImageLazyLoad-feature-uid50ab" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_bing-edge:VP4-1468x826" media="(min-width: 1084px)"/>
            <source data-automation-test-id="FeatureImageSourcesmXLargeImageLazyLoad-feature-uid50ab" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_bing-edge:VP3-1236x1236" media="(min-width: 860px)"/>
            <source data-automation-test-id="FeatureImageSourcesmSmallImageLazyLoad-feature-uid50ab" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_bing-edge:VP2-1718x966" media="(min-width: 540px)"/>
            <img data-automation-test-id="FeatureImgImageLazyLoad-feature-uid50ab" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_bing-edge:VP1-1078x606" loading="lazy" class="card-img img-object-cover" alt="Ice Blue Surface Laptop Go 3 showing Bing Edge on screen with two other app screens peeking out from behind the device."/>
        </picture>
    
    
    


        
        
    </div>

            <div class="d-flex col-md  
                 
                 order-last " data-automation-test-id="FeatureBaseDivDflex-feature-uid50ab">
                
    
    
    

    
    
    
    
    

    

    <div class="card-body align-self-center p-4 p-md-5" data-automation-test-id="FeatureBodyDiv-feature-uid50ab">
		
        
      

        
		
        
    <h3 data-automation-test-id="heading-feature-uid50ab" id="heading-feature-uid50ab">
            
    
    
        
        
            Peak performance, every day
        
    

    </h3>

        <div data-automation-test-id="FeatureBodyText-feature-uid50ab" class="mb-3 ">
            From streaming the latest releases to running your favorite everyday apps, the Intel<sup>®</sup> Core™ i5 processor, plus up to 16GB RAM and 256GB storage<sup>4</sup> means fast, smooth experiences all around.
        </div>

        

        
        
        
    </div>

            </div>
            
        </div>
    </div>

               
               
               
          

          
     
</section>



</div>
<div class="feature mt-0 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="2fd48590f7ee0f47e8136e5a945f96ee">
     
     
     
     
     


     
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/feature/v1/feature/clientlibs/site.min.ACSHASH2d0e693962b7cb2892e26049d2cd6452.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/dynamic-feature/v1/dynamic-feature/clientlibs/site.min.ACSHASHf834ecc43df9754fbcd8a6bb1078e89e.js" defer></script>










<section id="feature-uid0dc5" class="feature-card" data-componentName="feature-uid0dc5" data-automation-test-id="FeatureSection-feature-uid0dc5" style="overflow: hidden;">
     

     
          
               
                    
    
    
    
    
        
    
    <div data-automation-test-id="FeatureBaseDivCardClass-feature-uid0dc5" class="card mx-ng mx-md-0">
        <div class="row no-gutters material-surface material-color-light  " data-mount="click-group" data-automation-test-id="FeatureBaseDivRow-feature-uid0dc5">
            
            <div class="d-flex col-md  
                 order-last order-md-first 
                 " data-automation-test-id="FeatureBaseDivDflex-feature-uid0dc5">
                
    
    
    

    
    
    
    
    

    

    <div class="card-body align-self-center p-4 p-md-5" data-automation-test-id="FeatureBodyDiv-feature-uid0dc5">
		
        
      

        
		
        
    <h3 data-automation-test-id="heading-feature-uid0dc5" id="heading-feature-uid0dc5">
            
    
    
        
        
            Charge less, do more
        
    

    </h3>

        <div data-automation-test-id="FeatureBodyText-feature-uid0dc5" class="mb-3 ">
            Get up to 15 hours<sup>2</sup> of use on one single charge. With Fast Charging, you can spend less time plugged in and more time tackling everything on your to-do list.
        </div>

        

        
        
        
    </div>

            </div>
            
    

    <div class="col-md-8" data-automation-test-id="FeatureMedia-feature-uid0dc5">

        
        
    
    
    
        
    
    
        <picture data-automation-test-id="FeatureImagePictureImageLazyLoad-feature-uid0dc5">
            <source data-automation-test-id="FeatureImageSourcesmXLargeImageLazyLoad-feature-uid0dc5" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_sage_one-note:VP5-1842x1036" media="(min-width: 1400px)"/>
            <source data-automation-test-id="FeatureImageSourcesmLargeImageLazyLoad-feature-uid0dc5" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_sage_one-note:VP4-1468x826" media="(min-width: 1084px)"/>
            <source data-automation-test-id="FeatureImageSourcesmXLargeImageLazyLoad-feature-uid0dc5" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_sage_one-note:VP3-1236x1236" media="(min-width: 860px)"/>
            <source data-automation-test-id="FeatureImageSourcesmSmallImageLazyLoad-feature-uid0dc5" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_sage_one-note:VP2-1718x966" media="(min-width: 540px)"/>
            <img data-automation-test-id="FeatureImgImageLazyLoad-feature-uid0dc5" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_sage_one-note:VP1-1078x606" loading="lazy" class="card-img img-object-cover" alt="Side view of sage Surface Laptop Go 3 with OneNote on screen and a charging icon floating above the device."/>
        </picture>
    
    
    


        
        
    </div>

        </div>
    </div>

               
               
               
          

          
     
</section>



</div>
<div class="feature mt-md-5 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="2fd48590f7ee0f47e8136e5a945f96ee">
     
     
     
     
     


     
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/feature/v1/feature/clientlibs/site.min.ACSHASH2d0e693962b7cb2892e26049d2cd6452.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/dynamic-feature/v1/dynamic-feature/clientlibs/site.min.ACSHASHf834ecc43df9754fbcd8a6bb1078e89e.js" defer></script>










<section id="feature-uid3379" class="feature-card" data-componentName="feature-uid3379" data-automation-test-id="FeatureSection-feature-uid3379" style="overflow: hidden;">
     

     
          
               
                    
    
    
    
    
        
    
    <div data-automation-test-id="FeatureBaseDivCardClass-feature-uid3379" class="card mx-ng mx-md-0">
        <div class="row no-gutters material-surface material-color-light  " data-mount="click-group" data-automation-test-id="FeatureBaseDivRow-feature-uid3379">
            
    

    <div class="col-md-8" data-automation-test-id="FeatureMedia-feature-uid3379">

        
        
    
    
    
        
    
    
        <picture data-automation-test-id="FeatureImagePictureImageLazyLoad-feature-uid3379">
            <source data-automation-test-id="FeatureImageSourcesmXLargeImageLazyLoad-feature-uid3379" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_closed-laptop:VP5-1842x1036" media="(min-width: 1400px)"/>
            <source data-automation-test-id="FeatureImageSourcesmLargeImageLazyLoad-feature-uid3379" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_closed-laptop:VP4-1468x826" media="(min-width: 1084px)"/>
            <source data-automation-test-id="FeatureImageSourcesmXLargeImageLazyLoad-feature-uid3379" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_closed-laptop:VP3-1236x1236" media="(min-width: 860px)"/>
            <source data-automation-test-id="FeatureImageSourcesmSmallImageLazyLoad-feature-uid3379" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_closed-laptop:VP2-1718x966" media="(min-width: 540px)"/>
            <img data-automation-test-id="FeatureImgImageLazyLoad-feature-uid3379" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_closed-laptop:VP1-1078x606" loading="lazy" class="card-img img-object-cover" alt="Side view of closed platinum Surface Laptop Go 3 showing its portability."/>
        </picture>
    
    
    


        
        
    </div>

            <div class="d-flex col-md  
                 
                 order-last " data-automation-test-id="FeatureBaseDivDflex-feature-uid3379">
                
    
    
    

    
    
    
    
    

    

    <div class="card-body align-self-center p-4 p-md-5" data-automation-test-id="FeatureBodyDiv-feature-uid3379">
		
        
      

        
		
        
    <h3 data-automation-test-id="heading-feature-uid3379" id="heading-feature-uid3379">
            
    
    
        
        
            You’re going places
        
    

    </h3>

        <div data-automation-test-id="FeatureBodyText-feature-uid3379" class="mb-3 ">
            Weighing under 2.5 lbs, with a vibrant 12.4” touchscreen and full-size keyboard, bring your Surface Laptop Go 3 anywhere for excellent experiences, even on the move.
        </div>

        

        
        
        
    </div>

            </div>
            
        </div>
    </div>

               
               
               
          

          
     
</section>



</div>
<div class="feature mt-md-5 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="2fd48590f7ee0f47e8136e5a945f96ee">
     
     
     
     
     


     
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/feature/v1/feature/clientlibs/site.min.ACSHASH2d0e693962b7cb2892e26049d2cd6452.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/dynamic-feature/v1/dynamic-feature/clientlibs/site.min.ACSHASHf834ecc43df9754fbcd8a6bb1078e89e.js" defer></script>










<section id="feature-uidf32a" class="feature-card" data-componentName="feature-uidf32a" data-automation-test-id="FeatureSection-feature-uidf32a" style="overflow: hidden;">
     

     
          
               
                    
    
    
    
    
        
    
    <div data-automation-test-id="FeatureBaseDivCardClass-feature-uidf32a" class="card mx-ng mx-md-0">
        <div class="row no-gutters material-surface material-color-light  " data-mount="click-group" data-automation-test-id="FeatureBaseDivRow-feature-uidf32a">
            
            <div class="d-flex col-md  
                 order-last order-md-first 
                 " data-automation-test-id="FeatureBaseDivDflex-feature-uidf32a">
                
    
    
    

    
    
    
    
    

    

    <div class="card-body align-self-center p-4 p-md-5" data-automation-test-id="FeatureBodyDiv-feature-uidf32a">
		
        
      

        
		
        
    <h3 data-automation-test-id="heading-feature-uidf32a" id="heading-feature-uidf32a">
            
    
    
        
        
            On guard, non-stop
        
    

    </h3>

        <div data-automation-test-id="FeatureBodyText-feature-uidf32a" class="mb-3 ">
            Stay safe against cyberthreats from the moment you log on with industry-leading security measures like a Fingerprint Power Button and TPM 2.0 on Windows 11.
        </div>

        

        
        
        
    </div>

            </div>
            
    

    <div class="col-md-8" data-automation-test-id="FeatureMedia-feature-uidf32a">

        
        
    
    
    
        
    
    
        <picture data-automation-test-id="FeatureImagePictureImageLazyLoad-feature-uidf32a">
            <source data-automation-test-id="FeatureImageSourcesmXLargeImageLazyLoad-feature-uidf32a" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_sandstone_fingerprint:VP5-1842x1036" media="(min-width: 1400px)"/>
            <source data-automation-test-id="FeatureImageSourcesmLargeImageLazyLoad-feature-uidf32a" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_sandstone_fingerprint:VP4-1468x826" media="(min-width: 1084px)"/>
            <source data-automation-test-id="FeatureImageSourcesmXLargeImageLazyLoad-feature-uidf32a" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_sandstone_fingerprint:VP3-1236x1236" media="(min-width: 860px)"/>
            <source data-automation-test-id="FeatureImageSourcesmSmallImageLazyLoad-feature-uidf32a" srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_sandstone_fingerprint:VP2-1718x966" media="(min-width: 540px)"/>
            <img data-automation-test-id="FeatureImgImageLazyLoad-feature-uidf32a" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_sandstone_fingerprint:VP1-1078x606" loading="lazy" class="card-img img-object-cover" alt="Top view of sandstone Surface Laptop Go 3 with the fingerprint reader illuminated in the upper-right corner of the keyboard."/>
        </picture>
    
    
    


        
        
    </div>

        </div>
    </div>

               
               
               
          

          
     
</section>



</div>

          
     </div>
</div></div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid87dc default heading-bg-color-layout-container-uid87dc" data-automation-test-id="layout-container-uid87dc">
          <style data-automation-test-id="headingColor-layout-container-uid87dc">
                    .heading-bg-color-layout-container-uid87dc{
                         background-color: #aad5a4 !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid87dc" data-componentName="layout-container-uid87dc">
          
          
          <div class="areaheading dynamic-price-container mt-md-5 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    



        

        <div id="areaheading-uiddb40" data-componentName="areaheading-uiddb40" class="area-heading text-md-center  " data-automation-test-id="Areaheading-areaheading-uiddb40" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 mx-auto" data-automation-test-id="AreaheadingHeadingText-areaheading-uiddb40" style="color:">
                        
                        
                            
                            
    <h2 data-automation-test-id="heading-areaheading-uiddb40" class="text-break-keep-all h1    " id="heading-areaheading-uiddb40">
            
    
        
        
            
            
                <p>Go anywhere in style</p>

            
        
    
    

    </h2>

                        
                    </div>
                
                
                    <div class="col-12 col-md-8 col-xl-6 mx-auto" data-automation-test-id="AreaheadingSubtext-areaheading-uiddb40">
                        
                        
                            <p class="text-break-keep-all " data-automation-test-id="AreaheadingDesctext-areaheading-uiddb40"> 
                                
    
        
        
            
            
                Wherever you’re headed, go in style. At just under 2.5 lbs, Surface Laptop Go 3 is a lightweight laptop that’s built to last, so you can effortlessly bring it anywhere.
            
        
    
    

                            </p>
                        
                        
                    </div>
                
            </div>
        </div>
        
    
</div>
<div class="video-showcase aem-GridColumn aem-GridColumn--default--12" data-component-id="31e88c9d53fcadc83c8b52c2cd0cb0f8"> 



	
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/video-showcase/v1/video-showcase/clientlibs/site.min.ACSHASH2c03e917625be736dda0e2095bd4d5d3.css" type="text/css">





	
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/video-showcase/v1/video-showcase/clientlibs/site.min.ACSHASH48d1b3a7cee308add1217f841a54a7bd.js" defer></script>




	<div class="video-showcase-container disablePaddingTop" id="video-showcase-uid99c7" data-componentName="video-showcase-uid99c7" style="background-color: #aad5a4;">
		<div class="m-ambient-video f-lean">
			
			
				<video class="video-showcase-video auto-video-play video-showcase-lazyload" preload="none" src="" poster="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_skateboarder" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_skateboarder-6?fmt=png-alpha&amp;scl=1" playsinline muted="muted" disablePictureInPicture data-s-wdg="2" mobile-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_skateboarder-mobile" mobile-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_skateboarder-mobile-6?fmt=png-alpha&amp;scl=1" autoplay="true">
				</video>
			
		</div>
	</div>






</div>

          
     </div>
</div></div>
<div class="featured-carousel aem-GridColumn aem-GridColumn--default--12" data-component-id="08fe34531d54b7735e614d6af3cc648a">


    




	
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/featured-carousel/v1/featured-carousel/clientlibs/site.min.ACSHASHb00c36f58e58e1d1f93bc696823fe548.css" type="text/css">





<div class="appshowcasevid fall-design bgwhitelineargradient" data-s-wdg="2" id="featured-carousel-uid4c18" data-componentName="featured-carousel-uid4c18">
	<div data-grid="col-12" class="m-banner banner" data-s-wdg="2">
		<h2 class="c-heading-2">
				Endless entertainment on extraordinary apps
		</h2>
	</div>
	<section aria-roledescription="slideshow" class="appshowcasevideo" aria-label="Features of Surface Laptop Go 3">
		<div class="appsshowcase-container">
			<div id="navigation-container" class="appshowcasevideo-seq" aria-hidden="false">
				<div class="appshowcasevideodots-container">
					<button id="wdgweb-AppShowcase-prev" data-bi-cN="Carousel back" data-bi-ecn="Carousel back" data-bi-hn="Clean desktop, clear mind" data-bi-compnm="Featured Carousel" data-bi-bhvr="1" data-bi-cT="Button" data-bi-pa="Body" data-bi-ehn="Clean desktop, clear mind" data-bi-carpos="1" data-bi-assetid="" class="c-flipper f-previous gamingvideo-previous" aria-label="Previous" title="Previous">
					</button>
					<div class="c-sequence-indicator" role="tablist">
						
							<button class="appshowcasevideodots f-active" role="tab" aria-posinset="0" aria-selected="true" aria-label="No Data Available" aria-hidden="true" title="Slide 0" aria-setsize="1" tabindex="-1"></button>
						
							<button class="appshowcasevideodots " role="tab" aria-posinset="1" aria-selected="false" aria-label="No Data Available" aria-hidden="true" title="Slide 1" aria-setsize="2" tabindex="-1"></button>
						
							<button class="appshowcasevideodots " role="tab" aria-posinset="2" aria-selected="false" aria-label="No Data Available" aria-hidden="true" title="Slide 2" aria-setsize="3" tabindex="-1"></button>
						
							<button class="appshowcasevideodots " role="tab" aria-posinset="3" aria-selected="false" aria-label="No Data Available" aria-hidden="true" title="Slide 3" aria-setsize="4" tabindex="-1"></button>
						
							<button class="appshowcasevideodots " role="tab" aria-posinset="4" aria-selected="false" aria-label="No Data Available" aria-hidden="true" title="Slide 4" aria-setsize="5" tabindex="-1"></button>
						
					</div>
					<button id="wdgweb-AppShowcase-next" data-bi-cN="Carousel forward" data-bi-ecn="Carousel forward" data-bi-hn="Clean desktop, clear mind" data-bi-compnm="Featured Carousel" data-bi-bhvr="3" data-bi-cT="Button" data-bi-pa="Body" data-bi-ehn="Clean desktop, clear mind" data-bi-carpos="1" data-bi-assetid="" class="c-flipper f-next gamingvideo-next" aria-label="Next" title="Next">
					</button>
				</div>
			</div>
			<div id="appshowcasevideos-container" class="appshowcasevideo-carousel">
				<div class="appvideoitems app-show-desktop-video" data-s-wdg="2">
					
						<div class="m-ambient-video f-lean f-active">
							
							
								<video class="auto-video-play app-show-video featured-carousel-lazyload" src="" poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_clipchamp?scl=1" playsinline="true" muted="muted" autoplay="true" disablepictureinpicture="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_clipchamp-clip" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_clipchamp?scl=1">
								</video>
							
							<button tabindex="0" class="videobutton c-call-to-action c-glyph bottom-right f-active glyph-play" data-bi-cN="Play" data-bi-ecn="Play" data-bi-hn="Endless entertainment on extraordinary apps" data-bi-ehn="Endless entertainment on extraordinary apps" data-bi-compnm="Featured Carousel" data-bi-bhvr="240" data-bi-cT="button" data-bi-pa="Body" data-bi-assetid="" data-bi-carpos="1" aria-label="Play" data-play-title="Play" data-pause-title="Pause" title="Play">
						    </button>
						</div>
					
						<div class="m-ambient-video f-lean f-hide">
							
							
								<video class="auto-video-play app-show-video featured-carousel-lazyload" src="" poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_prime-video-cloud?scl=1" playsinline="true" muted="muted" autoplay="true" disablepictureinpicture="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_prime-clip-cloud" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_prime-video-cloud?scl=1">
								</video>
							
							<button tabindex="0" class="videobutton c-call-to-action c-glyph bottom-right f-hide glyph-play" data-bi-cN="Play" data-bi-ecn="Play" data-bi-hn="Endless entertainment on extraordinary apps" data-bi-ehn="Endless entertainment on extraordinary apps" data-bi-compnm="Featured Carousel" data-bi-bhvr="240" data-bi-cT="button" data-bi-pa="Body" data-bi-assetid="" data-bi-carpos="2" aria-label="Play" data-play-title="Play" data-pause-title="Pause" title="Play">
						    </button>
						</div>
					
						<div class="m-ambient-video f-lean f-hide">
							
							
								<video class="auto-video-play app-show-video featured-carousel-lazyload" src="" poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_xbox-cloud-prime?scl=1" playsinline="true" muted="muted" autoplay="true" disablepictureinpicture="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_xbox-cloud-prime-clip" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_xbox-cloud-prime?scl=1">
								</video>
							
							<button tabindex="0" class="videobutton c-call-to-action c-glyph bottom-right f-hide glyph-play" data-bi-cN="Play" data-bi-ecn="Play" data-bi-hn="Endless entertainment on extraordinary apps" data-bi-ehn="Endless entertainment on extraordinary apps" data-bi-compnm="Featured Carousel" data-bi-bhvr="240" data-bi-cT="button" data-bi-pa="Body" data-bi-assetid="" data-bi-carpos="3" aria-label="Play" data-play-title="Play" data-pause-title="Pause" title="Play">
						    </button>
						</div>
					
						<div class="m-ambient-video f-lean f-hide">
							
							
								<video class="auto-video-play app-show-video featured-carousel-lazyload" src="" poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_spotify-6?scl=1" playsinline="true" muted="muted" autoplay="true" disablepictureinpicture="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_spotify" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_spotify-6?scl=1">
								</video>
							
							<button tabindex="0" class="videobutton c-call-to-action c-glyph bottom-right f-hide glyph-play" data-bi-cN="Play" data-bi-ecn="Play" data-bi-hn="Endless entertainment on extraordinary apps" data-bi-ehn="Endless entertainment on extraordinary apps" data-bi-compnm="Featured Carousel" data-bi-bhvr="240" data-bi-cT="button" data-bi-pa="Body" data-bi-assetid="" data-bi-carpos="4" aria-label="Play" data-play-title="Play" data-pause-title="Pause" title="Play">
						    </button>
						</div>
					
						<div class="m-ambient-video f-lean f-hide">
							
							
								<video class="auto-video-play app-show-video featured-carousel-lazyload" src="" poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_teams_clipchamp?scl=1" playsinline="true" muted="muted" autoplay="true" disablepictureinpicture="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_teams_clipchamp-clip" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_teams_clipchamp?scl=1">
								</video>
							
							<button tabindex="0" class="videobutton c-call-to-action c-glyph bottom-right f-hide glyph-play" data-bi-cN="Play" data-bi-ecn="Play" data-bi-hn="Endless entertainment on extraordinary apps" data-bi-ehn="Endless entertainment on extraordinary apps" data-bi-compnm="Featured Carousel" data-bi-bhvr="240" data-bi-cT="button" data-bi-pa="Body" data-bi-assetid="" data-bi-carpos="5" aria-label="Play" data-play-title="Play" data-pause-title="Pause" title="Play">
						    </button>
						</div>
					
				</div>
				<div class="appvideoitems app-show-mob-video" data-s-wdg="2">
					
						<div class="m-ambient-video f-lean f-active">
							
							
								<video class="auto-video-play app-show-video featured-carousel-lazyload" src="" poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_clipchamp?scl=1" playsinline="true" muted="" disablepictureinpicture="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_clipchamp-clip" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_clipchamp?scl=1">
								</video>
							
							<button class="videobutton c-call-to-action c-glyph bottom-right f-active glyph-play" aria-label="Play" data-play-title="Play" data-pause-title="Pause" title="Play"></button>
						</div>
					
						<div class="m-ambient-video f-lean f-hide">
							
							
								<video class="auto-video-play app-show-video featured-carousel-lazyload" src="" poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_prime-video-cloud?scl=1" playsinline="true" muted="" disablepictureinpicture="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_prime-clip-cloud" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_prime-video-cloud?scl=1">
								</video>
							
							<button class="videobutton c-call-to-action c-glyph bottom-right f-hide glyph-play" aria-label="Play" data-play-title="Play" data-pause-title="Pause" title="Play"></button>
						</div>
					
						<div class="m-ambient-video f-lean f-hide">
							
							
								<video class="auto-video-play app-show-video featured-carousel-lazyload" src="" poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_xbox-cloud-prime?scl=1" playsinline="true" muted="" disablepictureinpicture="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_xbox-cloud-prime-clip" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_xbox-cloud-prime?scl=1">
								</video>
							
							<button class="videobutton c-call-to-action c-glyph bottom-right f-hide glyph-play" aria-label="Play" data-play-title="Play" data-pause-title="Pause" title="Play"></button>
						</div>
					
						<div class="m-ambient-video f-lean f-hide">
							
							
								<video class="auto-video-play app-show-video featured-carousel-lazyload" src="" poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_spotify-6?scl=1" playsinline="true" muted="" disablepictureinpicture="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_spotify" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_spotify-6?scl=1">
								</video>
							
							<button class="videobutton c-call-to-action c-glyph bottom-right f-hide glyph-play" aria-label="Play" data-play-title="Play" data-pause-title="Pause" title="Play"></button>
						</div>
					
						<div class="m-ambient-video f-lean f-hide">
							
							
								<video class="auto-video-play app-show-video featured-carousel-lazyload" src="" poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_teams_clipchamp?scl=1" playsinline="true" muted="" disablepictureinpicture="" desktop-src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Surface-Laptop-Go-3_platinum_teams_clipchamp-clip" desktop-poster="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_teams_clipchamp?scl=1">
								</video>
							
							<button class="videobutton c-call-to-action c-glyph bottom-right f-hide glyph-play" aria-label="Play" data-play-title="Play" data-pause-title="Pause" title="Play"></button>
						</div>
					
				</div>
				<div id="appshowcasevideocopy-container" class="appshowcasevideocopy-carousel" data-s-wdg="2">
					
						<div class="copy-block f-active" data-s-wdg="2">
							<h3 class="c-heading">
									Unlock your inspiration
							</h3>
							<div class="c-paragraph-2">From hobbyist to full-time content creator, Clipchamp<sup>1</sup> makes it easy for anyone to create amazing video content, especially with new, artificial intelligence (AI) features like Auto Compose.</div>
							
							
							

							
						</div>
					
						<div class="copy-block f-hide" data-s-wdg="2">
							<h3 class="c-heading">
									Enjoy sharper video quality
							</h3>
							<div class="c-paragraph-2">Whether you’re binging or watching week-to-week, the vibrant, high-quality 12.4” PixelSense™ display makes streaming video on platforms like Amazon Prime Video<sup>1</sup> a breeze.</div>
							
							
							

							
						</div>
					
						<div class="copy-block f-hide" data-s-wdg="2">
							<h3 class="c-heading">
									Play your favorites on day one
							</h3>
							<div class="c-paragraph-2">No time to download or install? No problem—stream high-quality games on-demand, and even play together remotely with your friends thanks to Xbox Cloud Gaming (Beta).<sup>6</sup></div>
							
							
							

							
						</div>
					
						<div class="copy-block f-hide" data-s-wdg="2">
							<h3 class="c-heading">
									Get your groove on
							</h3>
							<div class="c-paragraph-2">Your favorite tracks have never sounded better. Stream your music from apps like Spotify<sup>1</sup> with top-notch, multi-directional Omnisonic<sup>®</sup> speakers with Dolby<sup>®</sup> Audio.</div>
							
							
							

							
						</div>
					
						<div class="copy-block f-hide" data-s-wdg="2">
							<h3 class="c-heading">
									Appear authentically
							</h3>
							<div class="c-paragraph-2">The enhanced HD camera auto-adjusts to lighting and captures true-to-life skin tones. Coupled with built-in Studio Mics, your truest self will come through on calls, loud and clear.</div>
							
							
							

							
						</div>
					
				</div>

			</div>
		</div>
	</section>

	<div id="appshowcasePoliteMsg">
		<span id="appshowcase-status-msg" class="sr-only" aria-live="polite"></span>
	</div>
</div>


	

	

	

	

	



	
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/featured-carousel/v1/featured-carousel/clientlibs/site.min.ACSHASH159366125d57798fe18cf67ea6df4270.js"></script>




</div>
<div class="product-module aem-GridColumn aem-GridColumn--default--12" data-component-id="2045b67d67303f76a5857ec5a5f14ad4">


    



	
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/product-module/v1/product-module/clientlibs/site.min.ACSHASH5d6fe90a638f0f758483312fcbf52304.css" type="text/css">





	
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/product-module/v1/product-module/clientlibs/site.min.ACSHASH1caab8935f0ef1849a9286fd950c7158.js" defer></script>





	<div class="product-module device-without-type-cover  " data-s-wdg="2" id="product-module-uidc5a5" data-componentName="product-module-uidc5a5">
		<div class="product-color">
			<div class="product-module-container" data-lazyload="false">
				<div class="product-module-main-content">
					<div class="product-module-content">
						<div class="product-module-size-variation" role="tablist">
							
								<button data-bi-cN="Surface Laptop Go 3" data-bi-ecn="Surface Laptop Go 3" data-bi-compnm="Product Module" data-bi-hn="Surface Laptop Go 3" data-bi-ehn="Surface Laptop Go 3" data-bi-bhvr="0" data-bi-cT="Button" data-bi-pa="Body" name="button" class="product-module-normal product-module-toggle active" role="tab" aria-label="Surface Laptop Go 3 device color options." tabindex="0" aria-selected="true">
									Surface Laptop Go 3
								</button>
							
						</div>
						
							<div class="product-module-heading active">
								<h2 class="c-heading-3">
									Cool colors to compliment you
								</h2>
							</div>
						

						
							<div class="actions-section active">
								
									<div class="product-module-finish-swaches product-module-swaches">
										<div>
											<fieldset class="pm-color-picker" data-mount="pm-color-picker" data-controls="pm-color-picker-image">
												<legend class="sr-only">Choose your color</legend>
												
													<label class="pm-color-picker-dot-light active" title="Ice Blue" data-bi-cN="Ice Blue" data-bi-ecn="Ice Blue" data-bi-bhvr="4" data-bi-cT="Button" data-bi-pa="Body" data-bi-compnm="Product Module">
														<input id="color-picker-control-input_b7211c71-e200-4606-8f0c-c84b8de403a7" class="device_platinum_alcantara #D7EDFA " name="pm-color-picker-control Surface Laptop Go 3" aria-label="Ice Blue" type="radio" checked/>
														<span class="pm-color-picker-dot" aria-hidden="true">
																	<svg viewBox="0 0 100 100">
																		<circle style="fill: #a8b8c6" cx="50" cy="50" r="50"></circle>
																	</svg>
																</span><span class="pm-color-picker-label" aria-hidden="true">Ice Blue</span>
														<span style="display:none" data-id="linearGradient" class="#D2D2D2"></span>
													</label>
												
													<label class="pm-color-picker-dot-light " title="Sage" data-bi-cN="Sage" data-bi-ecn="Sage" data-bi-bhvr="4" data-bi-cT="Button" data-bi-pa="Body" data-bi-compnm="Product Module">
														<input id="color-picker-control-input_31e9acac-b045-42b5-a9c7-c50ed4de89f3" class="device_sage_metal #D1E4D1 " name="pm-color-picker-control Surface Laptop Go 3" aria-label="Sage" type="radio"/>
														<span class="pm-color-picker-dot" aria-hidden="true">
																	<svg viewBox="0 0 100 100">
																		<circle style="fill: #8a9792" cx="50" cy="50" r="50"></circle>
																	</svg>
																</span><span class="pm-color-picker-label" aria-hidden="true">Sage</span>
														<span style="display:none" data-id="linearGradient" class="#D2D2D2"></span>
													</label>
												
													<label class="pm-color-picker-dot-light " title="Sandstone" data-bi-cN="Sandstone" data-bi-ecn="Sandstone" data-bi-bhvr="4" data-bi-cT="Button" data-bi-pa="Body" data-bi-compnm="Product Module">
														<input id="color-picker-control-input_e5eeeb0b-337b-439e-8dfd-d098cb350a01" class="device_sandstone #FDDCC6 " name="pm-color-picker-control Surface Laptop Go 3" aria-label="Sandstone" type="radio"/>
														<span class="pm-color-picker-dot" aria-hidden="true">
																	<svg viewBox="0 0 100 100">
																		<circle style="fill: #e9cdb8" cx="50" cy="50" r="50"></circle>
																	</svg>
																</span><span class="pm-color-picker-label" aria-hidden="true">Sandstone</span>
														<span style="display:none" data-id="linearGradient" class="#D2D2D2"></span>
													</label>
												
													<label class="pm-color-picker-dot-light " title="Platinum" data-bi-cN="Platinum" data-bi-ecn="Platinum" data-bi-bhvr="4" data-bi-cT="Button" data-bi-pa="Body" data-bi-compnm="Product Module">
														<input id="color-picker-control-input_4694b8d4-ff96-4b53-9d3f-bb9c9e404afe" class="device_platinum #E1E4EF " name="pm-color-picker-control Surface Laptop Go 3" aria-label="Platinum" type="radio"/>
														<span class="pm-color-picker-dot" aria-hidden="true">
																	<svg viewBox="0 0 100 100">
																		<circle style="fill: #d3d4d5" cx="50" cy="50" r="50"></circle>
																	</svg>
																</span><span class="pm-color-picker-label" aria-hidden="true">Platinum</span>
														<span style="display:none" data-id="linearGradient" class="#D2D2D2"></span>
													</label>
												
											</fieldset>
										</div>
									</div>
									<div class="horzontal-line"></div>
								

								

								<div class="product-module-custom-btn">
									
										<a data-bi-cn="Build your device" data-bi-ecn="Build your device" data-bi-ct="cta" data-bi-pa="body" data-bi-compnm="Product Module" data-bi-bhvr="0" data-bi-hn="Build your device" data-bi-ehn="Build your device" class="c-call-to-action c-glyph f-lightweight" style="color: #005ca5" aria-label="Build your Surface Laptop Go 3 device." target="_self" href="https://www.microsoft.com/en-us/store/configure/surface-laptop-go-3/8p0wwgj6c6l2">
											
												<span style="color: #005ca5">Build your device</span>
											
											
										</a>
									
								</div>
							</div>
						

						
							<div class="product-module-main-image  active" data-bgimg="/content/dam/microsoft/final/en-us/microsoft-product-and-services/surface/surface-laptop-go/surface-laptop-go-3/Surface-Laptop-Go-3_color_right-side-sprite.png" aria-label="Surface Laptop Go 3 side view in laptop mode showing a Windows start screen." role="img">
							</div>
						
					</div>
				</div>

				<div class="product-module-images">
					<div class="image-one-section">
						
							<div class="product-module-images-one  active" data-bgimg="/content/dam/microsoft/final/en-us/microsoft-product-and-services/surface/surface-laptop-go/surface-laptop-go-3/Surface-Laptop-Go-3_color_top-left-sprite.png" aria-label="Surface Laptop Go 3 back view with the device open." role="img">
							</div>
						
					</div>
					<div class="image-two-section">
						
							<div class="product-module-images-two  active" data-bgimg="/content/dam/microsoft/final/en-us/microsoft-product-and-services/surface/surface-laptop-go/surface-laptop-go-3/Surface-Laptop-Go-3_color_bottom-left-sprite.png" aria-label="Surface Laptop Go 3 from top view displaying a Windows start screen." role="img">
							</div>
						
					</div>
				</div>
			</div>
		</div>

	</div>



</div>
<div class="autoplaycarousel mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="53779e8b9c0e91f6eae5acf1be075205">
    
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/autoplaycarousel/autoplaycarousel/v2/autoplaycarousel/clientlibs/site.min.ACSHASH82415b9051d3dde30c497fcfc14fd857.css" type="text/css">









	
		<div class="perflazy">
			<template>
				
					
    
<script src="/etc.clientlibs/microsoft/components/content/autoplaycarousel/autoplaycarousel/v2/autoplaycarousel/clientlibs/site.min.ACSHASH623c9eaa09cad35f62fbca79ec24e3e7.js"></script>



				
			</template>
		</div>
	
	


<div class="tabbed-feature-bg" data-s-wdg="2" id="autoplaycarousel-uidd47a" data-componentName="autoplaycarousel-uidd47a">
	<div class="tabbed-feature  ">
		<section aria-roledescription="Slideshow" aria-label="Discover the best of Microsoft with Microsoft Surface">
			<div class="feature-tabs-list">
				<button data-bi-cN="Previous" data-bi-ecn="Previous" data-bi-compnm="Auto Play Carousel V2" data-bi-bhvr="1" data-bi-cT="Button" data-bi-pa="Body" class="previous" role="presentation" aria-hidden="true" tabindex="-1" aria-label="Previous" title="Previous">
				</button>
				<div class="feature-tabs" role="tablist">
					
						<button data-bi-cN="Bing Chat in Edge" data-bi-ecn="Bing Chat in Edge" data-bi-compnm="Auto Play Carousel V2" data-bi-hn="Bing Chat in Edge" data-bi-ehn="Bing Chat in Edge" data-bi-bhvr="0" data-bi-cT="Button" data-bi-pa="Body" id="wdgweb-AutoPlayCarousel-tab_icon-0-Bing-Chat-in-Edge" name="button" class="tabs-item" role="tab" aria-controls="wdgweb-AutoPlayCarousel-tabpanel-0-Bing-Chat-in-Edge" data-s-wdg="2" data-threshold="1" data-rootmargin="1">
								Bing Chat in Edge
						</button>
					
						<button data-bi-cN="AI-enhanced Microsoft 365" data-bi-ecn="AI-enhanced Microsoft 365" data-bi-compnm="Auto Play Carousel V2" data-bi-hn="AI-enhanced Microsoft 365" data-bi-ehn="AI-enhanced Microsoft 365" data-bi-bhvr="0" data-bi-cT="Button" data-bi-pa="Body" id="wdgweb-AutoPlayCarousel-tab_icon-1-AI-enhanced-Microsoft-365" name="button" class="tabs-item" role="tab" aria-controls="wdgweb-AutoPlayCarousel-tabpanel-1-AI-enhanced-Microsoft-365" data-s-wdg="2" data-threshold="1" data-rootmargin="1">
								AI-enhanced Microsoft 365
						</button>
					
						<button data-bi-cN="Microsoft Defender" data-bi-ecn="Microsoft Defender" data-bi-compnm="Auto Play Carousel V2" data-bi-hn="Microsoft Defender" data-bi-ehn="Microsoft Defender" data-bi-bhvr="0" data-bi-cT="Button" data-bi-pa="Body" id="wdgweb-AutoPlayCarousel-tab_icon-2-Microsoft-Defender" name="button" class="tabs-item" role="tab" aria-controls="wdgweb-AutoPlayCarousel-tabpanel-2-Microsoft-Defender" data-s-wdg="2" data-threshold="1" data-rootmargin="1">
								Microsoft Defender
						</button>
					
						<button data-bi-cN="Microsoft Phone Link " data-bi-ecn="Microsoft Phone Link " data-bi-compnm="Auto Play Carousel V2" data-bi-hn="Microsoft Phone Link " data-bi-ehn="Microsoft Phone Link " data-bi-bhvr="0" data-bi-cT="Button" data-bi-pa="Body" id="wdgweb-AutoPlayCarousel-tab_icon-3-Microsoft-Phone-Link" name="button" class="tabs-item" role="tab" aria-controls="wdgweb-AutoPlayCarousel-tabpanel-3-Microsoft-Phone-Link" data-s-wdg="2" data-threshold="1" data-rootmargin="1">
								Microsoft Phone Link 
						</button>
					
				</div>
				<button data-bi-cN="Next" data-bi-ecn="Next" data-bi-compnm="Auto Play Carousel V2" data-bi-bhvr="3" data-bi-cT="Button" data-bi-pa="Body" class="next" role="presentation" aria-hidden="true" tabindex="-1" aria-label="Next" title="Next">
				</button>
			</div>
		</section>
		<div class="feature-data">
			<div class="tabbed-main-heading">
				<h2 class="c-heading-3">
					The best of Microsoft right at your fingertips
				</h2>
			</div>

			<div class="tab-featuer-data">
				<div class="tab-feature-main-data">
					<div class="tabbed-content">
						<div class="tab-feature-main-content">
							
							
								
									<div class="tab-feature-first-heading">
										<h3 class="c-heading-3">
											AI-powered super search
										</h3>
									</div>
								
								<div class="tab-feature-content f-active" id="wdgweb-AutoPlayCarousel-tabpanel-0-Bing-Chat-in-Edge">
									<h3 class="tabbed-content-heading c-heading-3">
										AI-powered super search
									</h3>
									<div class="c-paragraph">
										<p>A reinvented search, interactive chat, and content generation capabilities combine on Surface Laptop Go 3 to help you do it all with security, efficiency, and ease.</p>

									</div>

								</div>
							
								
								<div class="tab-feature-content f-hidden" id="wdgweb-AutoPlayCarousel-tabpanel-1-AI-enhanced-Microsoft-365">
									<h3 class="tabbed-content-heading c-heading-3">
										Elevate your content
									</h3>
									<div class="c-paragraph">
										<p>Harness the power of AI to work more efficiently. Use smart suggestions to improve your grammar and clarity in Word with Editor, enhanced creative tools to create sharp graphics in PowerPoint with Designer, and more.<sup>1</sup></p>

									</div>

								</div>
							
								
								<div class="tab-feature-content f-hidden" id="wdgweb-AutoPlayCarousel-tabpanel-2-Microsoft-Defender">
									<h3 class="tabbed-content-heading c-heading-3">
										Safeguard against cyberthreats
									</h3>
									<div class="c-paragraph">
										<p>From the moment you start up, extensive built-in Windows security measures and Microsoft Defender help protect your data and your device.</p>

									</div>

								</div>
							
								
								<div class="tab-feature-content f-hidden" id="wdgweb-AutoPlayCarousel-tabpanel-3-Microsoft-Phone-Link">
									<h3 class="tabbed-content-heading c-heading-3">
										Sync your smartphone
									</h3>
									<div class="c-paragraph">
										<p>Never miss a heads up, even when you’re heads down. Unite your phone and your PC with Microsoft Phone Link,<sup>12</sup> available on Android™ and iOS.<sup>14</sup></p>

									</div>

								</div>
							
							
							<div style="height: 100vh;"></div>
						</div>
					</div>

				</div>
				<div class="tab-feature-images-list">
					
						<div class="tab-feature-image-video">
							
								
									<picture class="c-image f-active">
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_bing-ai-edge:VP5-1596x1080" media="(min-width: 1400px)"/>
										<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_bing-ai-edge:VP5-1596x1080" media="(min-width: 1084px)"/>
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_bing-ai-edge:VP3-1083x640" media="(min-width: 860px)"/>
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_bing-ai-edge:VP2-859x540" media="(min-width: 540px)"/>
										<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_bing-ai-edge?scl=1" loading="lazy" alt="Partial view of Surface Laptop Go 3 with a Bing AI screen from the Edge browser with an icon floating above the device."/>
									</picture>
								
								
							
							
							
						</div>
					
						<div class="tab-feature-image-video">
							
								
									<picture class="c-image f-hidden">
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ai-microsoft-365:VP5-1596x1080" media="(min-width: 1400px)"/>
										<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ai-microsoft-365:VP5-1596x1080" media="(min-width: 1084px)"/>
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ai-microsoft-365:VP3-1083x640" media="(min-width: 860px)"/>
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ai-microsoft-365:VP2-859x540" media="(min-width: 540px)"/>
										<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ai-microsoft-365?scl=1" loading="lazy" alt="Partial view of Surface Laptop Go 3 with an AI-enhanced Microsoft 365 screen and a Microsoft Word icon floating above the device."/>
									</picture>
								
								
							
							
							
						</div>
					
						<div class="tab-feature-image-video">
							
								
									<picture class="c-image f-hidden">
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_microsoft-defender:VP5-1596x1080" media="(min-width: 1400px)"/>
										<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_microsoft-defender:VP5-1596x1080" media="(min-width: 1084px)"/>
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_microsoft-defender:VP3-1083x640" media="(min-width: 860px)"/>
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_microsoft-defender:VP2-859x540" media="(min-width: 540px)"/>
										<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_microsoft-defender?scl=1" loading="lazy" alt="Partial view of Surface Laptop Go 3 with a Microsoft Defender screen and a shield icon floating above the device."/>
									</picture>
								
								
							
							
							
						</div>
					
						<div class="tab-feature-image-video">
							
								
									<picture class="c-image f-hidden">
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_phone-link:VP5-1596x1080" media="(min-width: 1400px)"/>
										<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_phone-link:VP5-1596x1080" media="(min-width: 1084px)"/>
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_phone-link:VP3-1083x640" media="(min-width: 860px)"/>
										<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_phone-link:VP2-859x540" media="(min-width: 540px)"/>
										<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_phone-link?scl=1" loading="lazy" alt="Partial view of Surface Laptop Go 3 with a Microsoft Phone Link screen and a telephone handset icon floating above the device."/>
									</picture>
								
								
							
							
							
						</div>
					

				</div>
			</div>
		</div>
	</div>
</div>






	
</div>

    
</div>
</div>
<div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid4478  heading-bg-color-layout-container-uid4478" data-automation-test-id="layout-container-uid4478">
          <style data-automation-test-id="headingColor-layout-container-uid4478">
                    .heading-bg-color-layout-container-uid4478{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid4478" data-componentName="layout-container-uid4478">
          
          
          <div class="areaheading dynamic-price-container mt-md-5 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    



        

        <div id="areaheading-uid94ed" data-componentName="areaheading-uid94ed" class="area-heading text-md-center  " data-automation-test-id="Areaheading-areaheading-uid94ed" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 mx-auto" data-automation-test-id="AreaheadingHeadingText-areaheading-uid94ed" style="color:">
                        
                        
                            
                            
    <h2 data-automation-test-id="heading-areaheading-uid94ed" class="text-break-keep-all h1    " id="heading-areaheading-uid94ed">
            
    
        
        
            
            
                <p>Every side’s a good side</p>

            
        
    
    

    </h2>

                        
                    </div>
                
                
            </div>
        </div>
        
    
</div>
<div class="rotator container responsivegrid mt-md-5 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="6f504578774f5d148c475b998c6ff29a">
	
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/rotator_spincarouselV2/rotator/v1/rotator/clientlibs/site.min.ACSHASHec85baf53f72988a0fdaf3164997faba.css" type="text/css">






    
    
    
        <section aria-label="A rotating Surface Laptop Go 3 opening and closing while showing all angles of the device." class="position-relative rotator">
        	<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_sprite_thumbnail?scl=1" class="posterImgOverlay" alt="Starting frame for rotating Surface Laptop Go 3 opening and closing while showing all angles of the device."/>
            <div class="image360" data-image360="/content/dam/microsoft/final/en-us/microsoft-product-and-services/surface/surface-laptop-go/surface-laptop-go-3/Surface-Laptop-Go-3_platinum_sprite_36-frames.jpg" data-imageframes="36" id="rotator-uid07b9" data-componentName="rotator-uid07b9">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_platinum_sprite_thumbnail" class="spin__image" alt="Starting frame for rotating Surface Laptop Go 3 opening and closing while showing all angles of the device."/>
            </div>
            
            
                
                
                
            

            <div class="slider-wrapper x-type-center">
                <div>
                    <p class="c-paragraph">Slide to rotate and see Surface Laptop Go 3 in 360º.</p>
                </div>
            </div>

        </section>
        <div class="custom-range">
            <input type="range" class="custom-range-input" min="1" max="36" step="1" data-rangeAriaValues="{&#34;22&#34;:&#34;On frame 22 of 36 Surface Laptop Go 3 opening while showing a Microsoft logo on the back side view but beginning to show the left side view of the device.&#34;,&#34;23&#34;:&#34;On frame 23 of 36 Surface Laptop Go 3 opening while showing a Microsoft logo on the back side view but beginning to show the left side view of the device.&#34;,&#34;24&#34;:&#34;On frame 24 of 36 Surface Laptop Go 3 opening while showing a Microsoft logo on the back side view but also showing the left side view of the device.&#34;,&#34;25&#34;:&#34;On frame 25 of 36 Surface Laptop Go 3 opening while showing a Microsoft logo on the back side view but also showing the left side view of the device.&#34;,&#34;26&#34;:&#34;On frame 26 of 36 Surface Laptop Go 3 opening while showing the left side view but also showing a Microsoft logo on the back side view of the device.&#34;,&#34;27&#34;:&#34;On frame 27 of 36 Surface Laptop Go 3 opening while showing the left side view of the device.&#34;,&#34;28&#34;:&#34;On frame 28 of 36 Surface Laptop Go 3 opening while showing the left side view of the device.&#34;,&#34;29&#34;:&#34;On frame 29 of 36 Surface Laptop Go 3 opening while showing Clipchamp on screen shown from the left side view of the device.&#34;,&#34;30&#34;:&#34;On frame 30 of 36 Surface Laptop Go 3 opening while showing Clipchamp on screen shown from the left side view of the device.&#34;,&#34;31&#34;:&#34;On frame 31 of 36 Surface Laptop Go 3 opening while showing Clipchamp on screen shown from the left side view of the device.&#34;,&#34;10&#34;:&#34;On frame 10 of 36 Surface Laptop Go 3 opening while showing Clipchamp on screen shown from the right side view of the device.&#34;,&#34;32&#34;:&#34;On frame 32 of 36 Surface Laptop Go 3 opening while showing Clipchamp on screen shown from the front side view of the device.&#34;,&#34;11&#34;:&#34;On frame 11 of 36 Surface Laptop Go 3 opening while showing Clipchamp on screen shown from the right side view of the device.&#34;,&#34;33&#34;:&#34;On frame 33 of 36 Surface Laptop Go 3 opening while showing a slightly fading Clipchamp screen shown from the front side view of the device.&#34;,&#34;12&#34;:&#34;On frame 12 of 36 Surface Laptop Go 3 opening while shown from the right side view of the device.&#34;,&#34;34&#34;:&#34;On frame 34 of 36 Surface Laptop Go 3 opening while showing a fading Clipchamp screen shown from the front side view of the device.&#34;,&#34;13&#34;:&#34;On frame 13 of 36 Surface Laptop Go 3 opening while shown from the right side view but beginning to show the back side view of the device.&#34;,&#34;35&#34;:&#34;On frame 35 of 36 Surface Laptop Go 3 opening while showing an emerging Windows bloom screen shown from the front side view of the device.&#34;,&#34;14&#34;:&#34;On frame 14 of 36 Surface Laptop Go 3 opening while shown from the right side view but beginning to show the back side view of the device.&#34;,&#34;36&#34;:&#34;On frame 36 of 36 Surface Laptop Go 3 fully opened while showing a Windows bloom screen shown from the front side view of the device.&#34;,&#34;15&#34;:&#34;On frame 15 of 36 Surface Laptop Go 3 opening while shown from the right side view but also showing a Microsoft logo on the back side view of the device.&#34;,&#34;37&#34;:&#34;On frame 36 of 36 Surface Laptop Go 3 fully opened while showing a Windows bloom screen shown from the front side view of the device.&#34;,&#34;16&#34;:&#34;On frame 16 of 36 Surface Laptop Go 3 opening while showing a Microsoft logo on the back side view but also showing the right side view of the device.&#34;,&#34;17&#34;:&#34;On frame 17 of 36 Surface Laptop Go 3 opening while showing a Microsoft logo on the back side view of the device.&#34;,&#34;18&#34;:&#34;On frame 18 of 36 Surface Laptop Go 3 opening while showing a Microsoft logo on the back side view of the device.&#34;,&#34;19&#34;:&#34;On frame 19 of 36 Surface Laptop Go 3 opening while showing a Microsoft logo on the back side view of the device.&#34;,&#34;1&#34;:&#34;On frame 1 of 36 Surface Laptop Go 3 in a closed position shown from the left side view of the device.&#34;,&#34;2&#34;:&#34;On frame 2 of 36 Surface Laptop Go 3 beginning to open shown from the left side view of the device.&#34;,&#34;3&#34;:&#34;On frame 3 of 36 Surface Laptop Go 3 opening while shown from the left side view of the device.&#34;,&#34;4&#34;:&#34;On frame 4 of 36 Surface Laptop Go 3 opening while shown from the front side view of the device.&#34;,&#34;5&#34;:&#34;On frame 5 of 36 Surface Laptop Go 3 opening while shown from the front side view of the device.&#34;,&#34;6&#34;:&#34;On frame 6 of 36 Surface Laptop Go 3 opening while shown from the front side view of the device.&#34;,&#34;7&#34;:&#34;On frame 7 of 36 Surface Laptop Go 3 opening while showing Clipchamp on screen shown from the front side view of the device.&#34;,&#34;8&#34;:&#34;On frame 8 of 36 Surface Laptop Go 3 opening while showing Clipchamp on screen shown from the right side view of the device.&#34;,&#34;9&#34;:&#34;On frame 9 of 36 Surface Laptop Go 3 opening while showing Clipchamp on screen shown from the right side view of the device.&#34;,&#34;20&#34;:&#34;On frame 20 of 36 Surface Laptop Go 3 opening while showing a Microsoft logo on the back side view of the device.&#34;,&#34;21&#34;:&#34;On frame 21 of 36 Surface Laptop Go 3 opening while showing a Microsoft logo on the back side view of the device.&#34;}" data-prependText="On frame %{frameNumber} of 36 %{customText}" data-mount="range" aria-label="Slide to rotate and see Surface Laptop Go 3 in 360º. " data-bi-cn="Slider Bar" aria-describedby="rotator-uid07b9-image-description" data-bi-ecn="Slider Bar" data-bi-bhvr="0" data-bi-ct="Button" data-bi-pa="Body" data-bi-compnm="Rotator With Hot Spots"/>
            <div class="clip" id="rotator-uid07b9-image-description"></div>
        </div>
    
    
        
    
<script src="/etc.clientlibs/microsoft/components/content/rotator_spincarouselV2/rotator/v1/rotator/clientlibs/site.min.ACSHASHd2d934ca9ad8a346f0a32ef0285fa95b.js"></script>



    
</div>
<div class="areaheading dynamic-price-container mt-md-5 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    



        

        <div id="areaheading-uid9344" data-componentName="areaheading-uid9344" class="area-heading text-md-center  " data-automation-test-id="Areaheading-areaheading-uid9344" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 mx-auto" data-automation-test-id="AreaheadingHeadingText-areaheading-uid9344" style="color:">
                        
                        
                            
                            
    <h2 data-automation-test-id="heading-areaheading-uid9344" class="text-break-keep-all h1    " id="heading-areaheading-uid9344">
            
    
        
        
            
            
                <p>On-the-go essentials</p>

            
        
    
    

    </h2>

                        
                    </div>
                
                
                    <div class="col-12 col-md-8 col-xl-6 mx-auto" data-automation-test-id="AreaheadingSubtext-areaheading-uid9344">
                        
                        
                            <p class="text-break-keep-all mb-3" data-automation-test-id="AreaheadingDesctext-areaheading-uid9344"> 
                                
    
        
        
            
            
                Make your Surface Laptop Go 3 experience uniquely yours with modern accessories ranging from external mice and controllers to accessibility tools, and more.<sup>1</sup>
            
        
    
    

                            </p>
                        
                        
                            

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Shop all Surface accessories" data-bi-ecn="Shop all Surface accessories" data-bi-ct="cta" data-bi-pa="body" class="text-break-keep-all cta   " data-target-uri="https://www.microsoft.com/en-us/store/b/surface-accessories" data-bi-bhvr="0" data-automation-test-id="cta1-areaheading-uid9344" target="_self" data-bi-ehn="&lt;p>On-the-go essentials&lt;/p>
" data-bi-hn="&lt;p>On-the-go essentials&lt;/p>
" data-bi-compnm="Area Heading: with Heading, Paragraph, Links" href="https://www.microsoft.com/en-us/store/b/surface-accessories">
            
            Shop all Surface accessories
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                        
                    </div>
                
            </div>
        </div>
        
    
</div>
<div class="content-card carouselbase carousel mt-md-5 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="e4caa97101f9f7cf8317c819b353e6ed">

    



    <div class="perflazy">
        <template>
            
                
    
<script src="/etc.clientlibs/microsoft/components/content/content-card/v1/content-card/clientlibs/site.min.ACSHASH92ba1cb9da3dd68605f38095fc34ba98.js"></script>



            
        </template>
    </div>




	
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card/v1/content-card/clientlibs/site.min.ACSHASHc033b611d87d511847501ade7913431f.css" type="text/css">





<section id="content-card-uida004" data-componentName="content-card-uida004">
    <div class="row row-cols-1  row-cols-md-3 ">
        
            
                
    

    
        
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASH7e98ce1d1fb3c40effe0a57430c1371c.css" type="text/css">
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASH5eb7940588edeff2b13a25b0bd1cb864.css" type="text/css">



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col mb-5 mb-md-0
                    
                    ">
            <div class="card  " data-target-uri="https://www.microsoft.com/en-us/d/surface-arc-mouse/8p5sv2rx3rn5" data-bi-ecN="Shop Surface Arc Mouse" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Surface Arc Mouse" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_arc-mouse_content-cards?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Surface Arc Mouse" data-bi-compNm="Content card vertical 3 up - noDepth" data-bi-cN="Shop Surface Arc Mouse">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_arc-mouse_content-cards?wid=517&amp;hei=291&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_arc-mouse_content-cards?wid=404&amp;hei=228&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_arc-mouse_content-cards?wid=337&amp;hei=190&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_arc-mouse_content-cards?wid=834&amp;hei=470&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_arc-mouse_content-cards?wid=834&hei=470&fit=crop" loading="lazy" class="card-img" alt="Surface Arc Mouse"/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body  pt-3">
                        
                            <h3>
                                Surface Arc Mouse
                            </h3>
                        
                        
                            <p> Slim, light, and ready to travel, Surface Arc Mouse is designed to conform to your hand and snaps flat to fit easily in your bag. Connects via Bluetooth. </p>
                        
                    </div>
                    <div class="card-footer pt-3 ">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Shop Surface Arc Mouse" data-bi-ecn="Shop Surface Arc Mouse" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/en-us/d/surface-arc-mouse/8p5sv2rx3rn5" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_arc-mouse_content-cards?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" target="_self" data-bi-ehn="Surface Arc Mouse" data-bi-hn="Surface Arc Mouse" data-bi-compnm="Content card vertical 3 up - noDepth" href="https://www.microsoft.com/en-us/d/surface-arc-mouse/8p5sv2rx3rn5">
            
            Shop Surface Arc Mouse
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col mb-5 mb-md-0
                    
                    ">
            <div class="card  " data-target-uri="https://www.microsoft.com/en-us/d/surface-adaptive-kit/8rdmhd3kfc3r" data-bi-ecN="Shop Surface Adaptive Kit" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Surface Adaptive Kit" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_adaptive-kit_content-cards-1?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Surface Adaptive Kit" data-bi-compNm="Content card vertical 3 up - noDepth" data-bi-cN="Shop Surface Adaptive Kit">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_adaptive-kit_content-cards-1?wid=517&amp;hei=291&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_adaptive-kit_content-cards-1?wid=404&amp;hei=228&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_adaptive-kit_content-cards-1?wid=337&amp;hei=190&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_adaptive-kit_content-cards-1?wid=834&amp;hei=470&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_adaptive-kit_content-cards-1?wid=834&hei=470&fit=crop" loading="lazy" class="card-img" alt="Surface Adaptive Kit"/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body  pt-3">
                        
                            <h3>
                                Surface Adaptive Kit
                            </h3>
                        
                        
                            <p> Make it easier to use your Surface by adding a choice of labels, port indicators, and openers that help you identify critical keys, match ports and cables, and open your device. </p>
                        
                    </div>
                    <div class="card-footer pt-3 ">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Shop Surface Adaptive Kit" data-bi-ecn="Shop Surface Adaptive Kit" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/en-us/d/surface-adaptive-kit/8rdmhd3kfc3r" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_adaptive-kit_content-cards-1?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" target="_self" data-bi-ehn="Surface Adaptive Kit" data-bi-hn="Surface Adaptive Kit" data-bi-compnm="Content card vertical 3 up - noDepth" href="https://www.microsoft.com/en-us/d/surface-adaptive-kit/8rdmhd3kfc3r">
            
            Shop Surface Adaptive Kit
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    ">
            <div class="card  " data-target-uri="https://www.microsoft.com/en-us/d/xbox-wireless-controller/8xn59crbsqgz" data-bi-ecN="Shop Xbox Wireless Controllers" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Xbox Wireless Controller" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_xbox-wireless-controller_content-cards-1?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Xbox Wireless Controller" data-bi-compNm="Content card vertical 3 up - noDepth" data-bi-cN="Shop Xbox Wireless Controllers">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_xbox-wireless-controller_content-cards-1?wid=517&amp;hei=291&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_xbox-wireless-controller_content-cards-1?wid=404&amp;hei=228&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_xbox-wireless-controller_content-cards-1?wid=337&amp;hei=190&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_xbox-wireless-controller_content-cards-1?wid=834&amp;hei=470&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_xbox-wireless-controller_content-cards-1?wid=834&hei=470&fit=crop" loading="lazy" class="card-img" alt="Xbox wireless controller"/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body  pt-3">
                        
                            <h3>
                                Xbox Wireless Controller
                            </h3>
                        
                        
                            <p> Experience the modernized Xbox Wireless Controller, designed for enhanced comfort during gameplay for supported consoles, PCs, and mobile phones or tablets.<sup>15</sup> </p>
                        
                    </div>
                    <div class="card-footer pt-3 ">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Shop Xbox Wireless Controllers" data-bi-ecn="Shop Xbox Wireless Controllers" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/en-us/d/xbox-wireless-controller/8xn59crbsqgz" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface_xbox-wireless-controller_content-cards-1?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" target="_self" data-bi-ehn="Xbox Wireless Controller" data-bi-hn="Xbox Wireless Controller" data-bi-compnm="Content card vertical 3 up - noDepth" href="https://www.microsoft.com/en-us/d/xbox-wireless-controller/8xn59crbsqgz">
            
            Shop Xbox Wireless Controllers
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
    </div>
    
</section>



</div>

          
     </div>
</div></div>
<div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid460e  heading-bg-color-layout-container-uid460e" data-automation-test-id="layout-container-uid460e">
          <style data-automation-test-id="headingColor-layout-container-uid460e">
                    .heading-bg-color-layout-container-uid460e{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid460e" data-componentName="layout-container-uid460e">
          
          
          <div class="areaheading dynamic-price-container mt-md-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    



        

        <div id="areaheading-uid8a18" data-componentName="areaheading-uid8a18" class="area-heading   " data-automation-test-id="Areaheading-areaheading-uid8a18" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 " data-automation-test-id="AreaheadingHeadingText-areaheading-uid8a18" style="color:">
                        
                        
                            
                            
    <h2 data-automation-test-id="heading-areaheading-uid8a18" class="text-break-keep-all h1    " id="heading-areaheading-uid8a18">
            
    
        
        
            
            
                <p>Still wondering which Surface is right for you?</p>

            
        
    
    

    </h2>

                        
                    </div>
                
                
                    <div class="col-12 col-md-8 col-xl-6 " data-automation-test-id="AreaheadingSubtext-areaheading-uid8a18">
                        
                        
                            <p class="text-break-keep-all pb-3" data-automation-test-id="AreaheadingDesctext-areaheading-uid8a18"> 
                                
    
        
        
            
            
                Explore and compare the whole lineup of Surface devices if you’re not sure.
            
        
    
    

                            </p>
                        
                        
                            

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Compare Surface laptops" data-bi-ecn="Compare Surface laptops" data-bi-ct="cta" data-bi-pa="body" class="text-break-keep-all cta   " data-target-uri="https://www.microsoft.com/en-us/surface/devices/compare-devices" data-bi-bhvr="0" data-automation-test-id="cta1-areaheading-uid8a18" aria-label="Compare Surface laptops on Microsoft.com" target="_self" data-bi-ehn="&lt;p>Still wondering which Surface is right for you?&lt;/p>
" data-bi-hn="&lt;p>Still wondering which Surface is right for you?&lt;/p>
" data-bi-compnm="Area Heading: with Heading, Paragraph, Links" href="https://www.microsoft.com/en-us/surface/devices/compare-devices">
            
            Compare Surface laptops
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
            
    
    
        
    
    

    
        <a data-bi-cn="Help me choose" data-bi-ecn="Help me choose" data-bi-ct="cta" data-bi-pa="body" class="text-break-keep-all cta   " data-target-uri="https://www.microsoft.com/en-us/surface/devices/help-me-choose" data-bi-bhvr="0" data-automation-test-id="cta2-areaheading-uid8a18" aria-label="Help me choose a Surface computer" target="_self" data-bi-ehn="&lt;p>Still wondering which Surface is right for you?&lt;/p>
" data-bi-hn="&lt;p>Still wondering which Surface is right for you?&lt;/p>
" data-bi-compnm="Area Heading: with Heading, Paragraph, Links" href="https://www.microsoft.com/en-us/surface/devices/help-me-choose">
            
            Help me choose
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                        
                    </div>
                
            </div>
        </div>
        
    
</div>

          
     </div>
</div></div>
<div class="device-carousel aem-GridColumn aem-GridColumn--default--12" data-component-id="5878c094881a774910d0fa0ee343abe9">


    



	
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/device-carousel/v2/device-carousel/clientlibs/site.min.ACSHASH79cde58981ca70323f9f3130755c64b9.css" type="text/css">






	<div class="perflazy">
		<template>
			
				
    
<script src="/etc.clientlibs/microsoft/components/content/device-carousel/v2/device-carousel/clientlibs/site.min.ACSHASH75bbc25ae2cd43940fed3c0c51ec15b2.js"></script>



			
		</template>
	</div>



<div class="surface-FamilyDevices" id="device-carousel-uid374a" data-componentName="device-carousel-uid374a">
	<div class="m-channel-placement">
		<div class="c-carousel f-single-slide f-scrollable-next" style="touch-action: pan-y;">
			<button id="wdgweb-FamilyDevices-prev" data-bi-cN="Carousel back" data-bi-ecn="Carousel back" data-bi-compnm="Device Carousel 2" data-bi-bhvr="1" data-bi-cT="Button" data-bi-pa="Body" class="c-flipper f-previous" tabindex="0" aria-label="Scroll left" title="Scroll left">
			</button>
			<button id="wdgweb-FamilyDevices-next" data-bi-cN="Carousel forward" data-bi-ecn="Carousel forward" data-bi-compnm="Device Carousel 2" data-bi-bhvr="3" data-bi-cT="Button" data-bi-pa="Body" class="c-flipper f-next" tabindex="0" aria-label="Scroll right" title="Scroll right">
			</button>
			<button id="wdgweb-FamilyDevices-prevbtn" data-bi-cN="Carousel back" data-bi-ecn="Carousel back" data-bi-compnm="Device Carousel 2" data-bi-bhvr="1" data-bi-cT="Button" data-bi-pa="Body" class="c-flipper f-previousbtn" tabindex="0" aria-label="Scroll left" title="Scroll left">
			</button>
			<button id="wdgweb-FamilyDevices-nextbtn" data-bi-cN="Carousel forward" data-bi-ecn="Carousel forward" data-bi-compnm="Device Carousel 2" data-bi-bhvr="3" data-bi-cT="Button" data-bi-pa="Body" class="c-flipper f-nextbtn" tabindex="0" aria-label="Scroll right" title="Scroll right">
			</button>
			<div class="device-family-maindiv">
				<ul class="c-group f-active familyDeviceList" style="margin-left: 0px;">
				    
						<li class="tileslist">
							<div class="m-channel-placement-item f-wide" style="">
							
								<div class="c-channel-placement-image f-picker">
									
										<picture>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_render:VP5-1596x1080?fmt=png-alpha&amp;scl=1" media="(min-width: 1400px)"/>
											<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_render:VP5-1596x1080?fmt=png-alpha&amp;scl=1" media="(min-width: 1084px)"/>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_render:VP3-1083x640?fmt=png-alpha&amp;scl=1" media="(min-width: 860px)"/>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_render:VP2-859x540?fmt=png-alpha&amp;scl=1" media="(min-width: 540px)"/>
											<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_render?fmt=png-alpha&scl=1" loading="lazy" alt="Ice Blue Surface Laptop Go 3"/>
										</picture>
									
									
								</div>

								<div class="family-device-content">
									<div class="c-channel-placement-content">
										<div class="badgeDiv">
											
												<strong class="c-badge f-large bg-black" style="height: 25px;">Currently Viewing</strong>
											
										</div>

										<h3 class="c-heading-4"> Surface Laptop Go 3</h3>

									</div>

									<div class="c-channel-placement-description">
										<div class="c-paragraph-2" style="height: 124px;">
											Must-have performance, standout design, and a 12.4&quot; touchscreen, all under 2.5 lbs.<br />

										</div>

									</div>

									<div class="c-logo color-swatch">
										<img alt="Surface Laptop Go 3 color swatch showing four colors" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_color_color-swatch?fmt=png-alpha&scl=1"/>
									</div>

										<ul class="c-list FamilyDevices-specification-list" style="height: 298px;">
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="PC icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/screensize-icon_RWWxFS?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>12.4”<sup> </sup>touchscreen</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Processor icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/processor-icon_RWWnab?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>12th Gen Intel<sup>®</sup> i5</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Weight icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/weight-icon_RWWkQ3?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>2.49 lbs (1.13 kg)<br />
</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Ports icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/connection-ports-icon_RWWfgX?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>USB-C<sup>®</sup>, USB-A</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Battery icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/battery-icon_RWWuKG?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>Up to 15 hours<sup>2</sup></p>
														</div>
													</div>
												</li>
											
										</ul>

										<div class="FamilyDevices-action">
											<div class="family-device-cta">
												
											</div>
										</div>
										
									</div>

								</div>
						</li>
					
						<li class="tileslist">
							<div class="m-channel-placement-item f-wide" style="">
							
								<div class="c-channel-placement-image f-picker">
									
										<picture>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-surface-laptop-5-sage-ISO-left-1:VP5-1596x1080?fmt=png-alpha&amp;scl=1" media="(min-width: 1400px)"/>
											<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-surface-laptop-5-sage-ISO-left-1:VP5-1596x1080?fmt=png-alpha&amp;scl=1" media="(min-width: 1084px)"/>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-surface-laptop-5-sage-ISO-left-1:VP3-1083x640?fmt=png-alpha&amp;scl=1" media="(min-width: 860px)"/>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-surface-laptop-5-sage-ISO-left-1:VP2-859x540?fmt=png-alpha&amp;scl=1" media="(min-width: 540px)"/>
											<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-surface-laptop-5-sage-ISO-left-1?fmt=png-alpha&scl=1" loading="lazy" alt="Surface Laptop 5 13.5 inch Sage"/>
										</picture>
									
									
								</div>

								<div class="family-device-content">
									<div class="c-channel-placement-content">
										<div class="badgeDiv">
											
										</div>

										<h3 class="c-heading-4">Surface Laptop 5 13.5&quot;</h3>

									</div>

									<div class="c-channel-placement-description">
										<div class="c-paragraph-2" style="height: 124px;">
											Blazing-fast power with an ultra-portable 13.5” touchscreen.
										</div>

									</div>

									<div class="c-logo color-swatch">
										<img alt="Surface Laptop 5 13.5 inch color swatch showing four colors." src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/msft-platinum-black-sage-and-sandstone?fmt=png-alpha&scl=1"/>
									</div>

										<ul class="c-list FamilyDevices-specification-list" style="height: 298px;">
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="PC icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/screensize-icon_RWWxFS?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>13.5” touchscreen</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Processor icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/processor-icon_RWWnab?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>12th Gen Intel<sup>®</sup> i5/i7</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Weight icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/weight-icon_RWWkQ3?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>Starting at 2.80 lbs (1,272 g)</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Ports icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/connection-ports-icon_RWWfgX?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>USB-C/Thunderbolt™ 4, USB-A</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Battery icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/battery-icon_RWWuKG?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>Up to 18 hours<sup>2</sup></p>
														</div>
													</div>
												</li>
											
										</ul>

										<div class="FamilyDevices-action">
											<div class="family-device-cta">
												
													<a class="c-call-to-action c-glyph" data-bi-cn="Explore Surface Laptop 5 13.5&#34;" data-bi-ecn="Explore Surface Laptop 5 13.5&#34;" data-bi-ct="cta" data-bi-pa="body" data-bi-compnm="Device Carousel V2" data-bi-bhvr="0" data-bi-hn="Surface Laptop 5 13.5&quot;" data-bi-ehn="Surface Laptop 5 13.5&quot;" target="_self" href="https://www.microsoft.com/en-us/d/surface-laptop-5/8xn49v61s1bn">
														<span>Explore Surface Laptop 5 13.5&quot;</span>
													</a>
												
											</div>
										</div>
										
									</div>

								</div>
						</li>
					
						<li class="tileslist">
							<div class="m-channel-placement-item f-wide" style="">
							
								<div class="c-channel-placement-image f-picker">
									
										<picture>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Surface-Laptop-5-shown-from-slightly-above-and-view-in-Platinum-2:VP5-1596x1080?fmt=png-alpha&amp;scl=1" media="(min-width: 1400px)"/>
											<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Surface-Laptop-5-shown-from-slightly-above-and-view-in-Platinum-2:VP5-1596x1080?fmt=png-alpha&amp;scl=1" media="(min-width: 1084px)"/>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Surface-Laptop-5-shown-from-slightly-above-and-view-in-Platinum-2:VP3-1083x640?fmt=png-alpha&amp;scl=1" media="(min-width: 860px)"/>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Surface-Laptop-5-shown-from-slightly-above-and-view-in-Platinum-2:VP2-859x540?fmt=png-alpha&amp;scl=1" media="(min-width: 540px)"/>
											<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Surface-Laptop-5-shown-from-slightly-above-and-view-in-Platinum-2?fmt=png-alpha&scl=1" loading="lazy" alt="Surface Laptop 5 15 inch platinum"/>
										</picture>
									
									
								</div>

								<div class="family-device-content">
									<div class="c-channel-placement-content">
										<div class="badgeDiv">
											
										</div>

										<h3 class="c-heading-4">Surface Laptop 5 15&quot;</h3>

									</div>

									<div class="c-channel-placement-description">
										<div class="c-paragraph-2" style="height: 124px;">
											Fast, sleek, and super-light with a 15” touchscreen for split-screen multitasking.
										</div>

									</div>

									<div class="c-logo color-swatch">
										<img alt="Surface Laptop 5 15 inch platinum and black color swatch." src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/msft-Color-choices-from-platinum-and-black?fmt=png-alpha&scl=1"/>
									</div>

										<ul class="c-list FamilyDevices-specification-list" style="height: 298px;">
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="PC icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/screensize-icon_RWWxFS?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>15” touchscreen</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Processor icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/processor-icon_RWWnab?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>12th Gen Intel<sup>®</sup> i7</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Weight icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/weight-icon_RWWkQ3?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>Starting at 3.44 lbs (1,560 g)</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Ports icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/connection-ports-icon_RWWfgX?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>USB-C/Thunderbolt™ 4, USB-A</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Battery icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/battery-icon_RWWuKG?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>Up to 17 hours<sup>2</sup></p>
														</div>
													</div>
												</li>
											
										</ul>

										<div class="FamilyDevices-action">
											<div class="family-device-cta">
												
													<a class="c-call-to-action c-glyph" data-bi-cn="Discover Surface Laptop 5 15&#34;" data-bi-ecn="Discover Surface Laptop 5 15&#34;" data-bi-ct="cta" data-bi-pa="body" data-bi-compnm="Device Carousel V2" data-bi-bhvr="0" data-bi-hn="Surface Laptop 5 15&quot;" data-bi-ehn="Surface Laptop 5 15&quot;" target="_self" href="https://www.microsoft.com/en-us/d/surface-laptop-5/8xn49v61s1bn">
														<span>Discover Surface Laptop 5 15&quot;</span>
													</a>
												
											</div>
										</div>
										
									</div>

								</div>
						</li>
					
						<li class="tileslist">
							<div class="m-channel-placement-item f-wide" style="">
							
								<div class="c-channel-placement-image f-picker">
									
										<picture>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-2_platinum_stage:VP5-1596x1080?fmt=png-alpha&amp;scl=1" media="(min-width: 1400px)"/>
											<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-2_platinum_stage:VP5-1596x1080?fmt=png-alpha&amp;scl=1" media="(min-width: 1084px)"/>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-2_platinum_stage:VP3-1083x640?fmt=png-alpha&amp;scl=1" media="(min-width: 860px)"/>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-2_platinum_stage:VP2-859x540?fmt=png-alpha&amp;scl=1" media="(min-width: 540px)"/>
											<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-2_platinum_stage?fmt=png-alpha&scl=1" loading="lazy" alt="Surface Laptop Studio 2"/>
										</picture>
									
									
								</div>

								<div class="family-device-content">
									<div class="c-channel-placement-content">
										<div class="badgeDiv">
											
												<strong class="c-badge f-large bg-yellow" style="height: 25px;">New</strong>
											
										</div>

										<h3 class="c-heading-4">Surface Laptop Studio 2</h3>

									</div>

									<div class="c-channel-placement-description">
										<div class="c-paragraph-2" style="height: 124px;">
											Versatile design, peak performance, and a 14.4” touchscreen on a laptop like no other.<sup>16</sup>
										</div>

									</div>

									<div class="c-logo color-swatch">
										<img alt=" Surface Laptop Studio 2 platinum color swatch" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Colour-Platinum-RWWnu6?fmt=png-alpha&scl=1"/>
									</div>

										<ul class="c-list FamilyDevices-specification-list" style="height: 298px;">
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="PC icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/screensize-icon_RWWxFS?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>14.4” touchscreen<sup>16</sup></p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Processor icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/processor-icon_RWWnab?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>13th Gen Intel<sup>®</sup> i7</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Weight icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/weight-icon_RWWkQ3?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>Starting at 4.18 lbs (1.89kg)</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Ports icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/connection-ports-icon_RWWfgX?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>USB-C/Thunderbolt™ 4, USB-A</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Battery icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/battery-icon_RWWuKG?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p><p>Up to 18 hours<sup>2</sup></p>
<p>Up to 16 hours<sup>2</sup> (2TB SSD)</p>
</p>
														</div>
													</div>
												</li>
											
										</ul>

										<div class="FamilyDevices-action">
											<div class="family-device-cta">
												
													<a class="c-call-to-action c-glyph" data-bi-cn="Visit Surface Laptop Studio 2" data-bi-ecn="Visit Surface Laptop Studio 2" data-bi-ct="cta" data-bi-pa="body" data-bi-compnm="Device Carousel V2" data-bi-bhvr="0" data-bi-hn="Surface Laptop Studio 2" data-bi-ehn="Surface Laptop Studio 2" target="_self" href="https://www.microsoft.com/en-us/d/surface-laptop-studio-2/8rqr54krf1dz">
														<span>Visit Surface Laptop Studio 2</span>
													</a>
												
											</div>
										</div>
										
									</div>

								</div>
						</li>
					
						<li class="tileslist">
							<div class="m-channel-placement-item f-wide" style="">
							
								<div class="c-channel-placement-image f-picker">
									
										<picture>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-a-view-from-slightly-Surface-Pro-9-Platinum-Surface-Type-Cover-attached-Slim-Pen-2-RE55kfh:VP5-1596x1080?fmt=png-alpha&amp;scl=1" media="(min-width: 1400px)"/>
											<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-a-view-from-slightly-Surface-Pro-9-Platinum-Surface-Type-Cover-attached-Slim-Pen-2-RE55kfh:VP5-1596x1080?fmt=png-alpha&amp;scl=1" media="(min-width: 1084px)"/>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-a-view-from-slightly-Surface-Pro-9-Platinum-Surface-Type-Cover-attached-Slim-Pen-2-RE55kfh:VP3-1083x640?fmt=png-alpha&amp;scl=1" media="(min-width: 860px)"/>
											<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-a-view-from-slightly-Surface-Pro-9-Platinum-Surface-Type-Cover-attached-Slim-Pen-2-RE55kfh:VP2-859x540?fmt=png-alpha&amp;scl=1" media="(min-width: 540px)"/>
											<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-a-view-from-slightly-Surface-Pro-9-Platinum-Surface-Type-Cover-attached-Slim-Pen-2-RE55kfh?fmt=png-alpha&scl=1" loading="lazy" alt="Surface Pro 9 platinum"/>
										</picture>
									
									
								</div>

								<div class="family-device-content">
									<div class="c-channel-placement-content">
										<div class="badgeDiv">
											
										</div>

										<h3 class="c-heading-4">Surface Pro 9</h3>

									</div>

									<div class="c-channel-placement-description">
										<div class="c-paragraph-2" style="height: 124px;">
											The tablet flexibility you want with the laptop performance and battery life you need.
										</div>

									</div>

									<div class="c-logo color-swatch">
										<img alt="Surface Pro 9 color swatch showing sapphire, forest, platinum, and graphite." src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Surface-Pro-9-available-colors-RE54NCR?fmt=png-alpha&scl=1"/>
									</div>

										<ul class="c-list FamilyDevices-specification-list" style="height: 298px;">
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="PC icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/screensize-icon_RWWxFS?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>13” PixelSense™ Flow display</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Processor icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/processor-icon_RWWnab?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>12th Gen Intel<sup>®</sup> Core™ or Microsoft SQ<sup>®</sup> 3</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Weight icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/weight-icon_RWWkQ3?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>Starting at 1.94 lbs (879 g)</p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Ports icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/connection-ports-icon_RWWfgX?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>USB-C<sup>®</sup> with USB 4.0/ Thunderbolt™ 4<br />
5G: USB-C<sup>®</sup></p>
														</div>
													</div>
												</li>
											
												<li style="height: 45px;">
													
														<div class="img">
															<img alt="Battery icon" loading="lazy" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/battery-icon_RWWuKG?fmt=png-alpha&scl=1"/>
														</div>
													
													
													<div class="text">
														<div class="c-paragraph">
															<p>Up to 15.5 hours<sup>2</sup></p>
														</div>
													</div>
												</li>
											
										</ul>

										<div class="FamilyDevices-action">
											<div class="family-device-cta">
												
													<a class="c-call-to-action c-glyph" data-bi-cn="Meet Surface Pro 9" data-bi-ecn="Meet Surface Pro 9" data-bi-ct="cta" data-bi-pa="body" data-bi-compnm="Device Carousel V2" data-bi-bhvr="0" data-bi-hn="Surface Pro 9" data-bi-ehn="Surface Pro 9" target="_self" href="https://www.microsoft.com/en-us/d/surface-pro-9/93vkd8np4fvk">
														<span>Meet Surface Pro 9</span>
													</a>
												
											</div>
										</div>
										
									</div>

								</div>
						</li>
					
				</ul>
				<div class="c-sequence-indicator" role="tablist">
					
						
							<button role="tab" id="sequence-indicator-1" btn-count="1" aria-selected="true" aria-label="slide 1"></button>
						
						
						
					
						
						
							<button role="tab" id="sequence-indicator-2" btn-count="2" aria-selected="false" aria-label="slide 2"></button>
						
						
					
						
						
							<button role="tab" id="sequence-indicator-3" btn-count="3" aria-selected="false" aria-label="slide 3"></button>
						
						
					
						
						
							<button role="tab" id="sequence-indicator-4" btn-count="4" aria-selected="false" aria-label="slide 4"></button>
						
						
					
						
						
							<button role="tab" id="sequence-indicator-5" btn-count="5" aria-selected="false" aria-label="slide 5"></button>
						
						
					
				</div>
			</div>
		</div>
	</div>

</div>


</div>
<div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid0ca0  heading-bg-color-layout-container-uid0ca0" data-automation-test-id="layout-container-uid0ca0">
          <style data-automation-test-id="headingColor-layout-container-uid0ca0">
                    .heading-bg-color-layout-container-uid0ca0{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid0ca0" data-componentName="layout-container-uid0ca0">
          
          
          <div class="areaheading dynamic-price-container mt-md-5 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    



        

        <div id="areaheading-uid946a" data-componentName="areaheading-uid946a" class="area-heading text-md-center  " data-automation-test-id="Areaheading-areaheading-uid946a" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 mx-auto" data-automation-test-id="AreaheadingHeadingText-areaheading-uid946a" style="color:">
                        
                        
                            
                            
    <h2 data-automation-test-id="heading-areaheading-uid946a" id="heading-areaheading-uid946a">
            
    
        
        
            
            
                <p>Get expert guidance on Surface</p>

            
        
    
    

    </h2>

                        
                    </div>
                
                
            </div>
        </div>
        
    
</div>
<div class="content-card carouselbase carousel mt-4 mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="e4caa97101f9f7cf8317c819b353e6ed">

    



    <div class="perflazy">
        <template>
            
                
    



            
        </template>
    </div>




	
    





<section id="content-card-uid983d" data-componentName="content-card-uid983d">
    <div class="row row-cols-1  row-cols-md-3 ">
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col mb-5 mb-md-0
                    
                    ">
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/en-us/store/b/why-microsoft-store" data-bi-ecN="Learn more" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Our Promise to Surface Customers " data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Gldn-Surface-MLS-CP01?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Our Promise to Surface Customers " data-bi-compNm="Content card vertical 3 up - depth" data-bi-cN="Learn more">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Gldn-Surface-MLS-CP01?wid=517&amp;hei=291&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Gldn-Surface-MLS-CP01?wid=404&amp;hei=228&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Gldn-Surface-MLS-CP01?wid=337&amp;hei=190&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Gldn-Surface-MLS-CP01?wid=834&amp;hei=470&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Gldn-Surface-MLS-CP01?wid=834&hei=470&fit=crop" loading="lazy" class="card-img" alt="Woman pulling a Surface out of a bag"/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3>
                                Our Promise to Surface Customers 
                            </h3>
                        
                        
                            <p> Get the most from your new Surface device when you buy from us, including free shipping, our 60-day lowest price promise, and virtual training sessions. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Learn more" data-bi-ecn="Learn more" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/en-us/store/b/why-microsoft-store" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Gldn-Surface-MLS-CP01?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" aria-label="Learn more about Store Promise" target="_self" data-bi-ehn="Our Promise to Surface Customers " data-bi-hn="Our Promise to Surface Customers " data-bi-compnm="Content card vertical 3 up - depth" href="https://www.microsoft.com/en-us/store/b/why-microsoft-store">
            
            Learn more
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col mb-5 mb-md-0
                    
                    ">
            <div class="card material-card h-100 " data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Shop with an expert your way" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Content-Card-MicrosoftProductExperts?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Shop with an expert your way" data-bi-compNm="Content card vertical 3 up - depth">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Content-Card-MicrosoftProductExperts?wid=517&amp;hei=291&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Content-Card-MicrosoftProductExperts?wid=404&amp;hei=228&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Content-Card-MicrosoftProductExperts?wid=337&amp;hei=190&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Content-Card-MicrosoftProductExperts?wid=834&amp;hei=470&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Content-Card-MicrosoftProductExperts?wid=834&hei=470&fit=crop" loading="lazy" class="card-img" alt="Three Microsoft Product Experts"/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3>
                                Shop with an expert your way
                            </h3>
                        
                        
                            <p> Book a free online appointment or chat live with a Microsoft Store associate who’ll help you compare, choose, and even order the right computer, Microsoft 365 plan, gaming product, and more. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Learn more " data-bi-ecn="Learn more " data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/en-us/store/b/online-computer-shopping-appointments" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Content-Card-MicrosoftProductExperts?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" aria-label="Learn more about booking an online appointment" target="_self" data-bi-ehn="Shop with an expert your way" data-bi-hn="Shop with an expert your way" data-bi-compnm="Content card vertical 3 up - depth" href="https://www.microsoft.com/en-us/store/b/online-computer-shopping-appointments">
            
            Learn more 
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
            
    
    
        
    
    

    
        <a data-bi-cn="Book an appointment" data-bi-ecn="Book an appointment" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://digitalreservations.microsoft.com/en-us/appointment/create/?storeid=6495d826-da5b-ed11-9561-000d3a8b1191&amp;serviceid=74e902cc-37aa-ec11-9840-000d3a1f4123" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Content-Card-MicrosoftProductExperts?wid=517&amp;hei=291&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta2-" aria-label="Book an appointment." target="_self" data-bi-ehn="Shop with an expert your way" data-bi-hn="Shop with an expert your way" data-bi-compnm="Content card vertical 3 up - depth" href="https://digitalreservations.microsoft.com/en-us/appointment/create/?storeid=6495d826-da5b-ed11-9561-000d3a8b1191&serviceid=74e902cc-37aa-ec11-9840-000d3a1f4123">
            
            Book an appointment
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    ">
            <div class="card material-card h-100 ">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CP-live-chat-v2?wid=517&amp;hei=291&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CP-live-chat-v2?wid=404&amp;hei=228&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CP-live-chat-v2?wid=337&amp;hei=190&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CP-live-chat-v2?wid=834&amp;hei=470&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CP-live-chat-v2?wid=834&hei=470&fit=crop" loading="lazy" class="card-img" alt="Screen showing “Questions? Talk to an expert”"/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3>
                                Chat with us for fast answers<u></u>
                            </h3>
                        
                        
                            <p> Get personalized help when you need it. On your desktop browser, click the “Questions? Talk to an expert” box in the lower right corner of this page to learn more about any Surface device.  </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        
                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
    </div>
    
</section>



</div>
<div class="experiencefragment aem-GridColumn aem-GridColumn--default--12" data-component-id="de24b40c7bf8f27f84caf1ea60652979">

    
    




<div class="cmp-experiencefragment">

    



<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="link-list parent-list aem-GridColumn aem-GridColumn--default--12" data-component-id="719c9512848ea2270ac91e57592dc97e">





    


    


<nav id="link-list-uid65bc" data-componentName="link-list-uid65bc" data-automation-test-id="LinkListNav-link-list-uid65bc" aria-label="Surface resources">

    
        
    



    
    
    
        
    

    
    <ul class="text-center d-flex flex-wrap list-inline justify-content-center" data-automation-test-id="LinkList-link-list-uid65bc">
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-automation-test-id="LinkListItem0-link-list-uid65bc" aria-expanded="false" data-close-label="Close dialog" aria-controls="listitempopoverx69c19baeabd04567a0e66e24d826d0a9" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/XF-Icon-Surface-Complete-Shield-Black?wid=40&hei=40" data-automation-test-id="LinkListItemGlobalImgLazyLoad0-link-list-uid65bc" loading="lazy" width="40" height="40" alt class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Protect your Surface" data-bi-ecn="Protect your Surface" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://www.microsoft.com/en-us/store/b/microsoft-complete" data-automation-test-id="LinkListItemCTA0-link-list-uid65bc" target="_self" data-bi-cn="Protect your Surface" data-bi-ecn="Protect your Surface" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://www.microsoft.com/en-us/store/b/microsoft-complete">
                Protect your Surface
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade0-link-list-uid65bc"></span>
            </a>

            
        </li>
        
    
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-automation-test-id="LinkListItem1-link-list-uid65bc" aria-expanded="false" data-close-label="Close dialog" aria-controls="listitempopoverx4a544676d9de460e9b1addb91858b63a" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/XF-Icon-Surface-Business-Black?wid=40&hei=40" data-automation-test-id="LinkListItemGlobalImgLazyLoad1-link-list-uid65bc" loading="lazy" width="40" height="40" alt class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Surface for your business" data-bi-ecn="Surface for your business" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://www.microsoft.com/en-us/surface/business" data-automation-test-id="LinkListItemCTA1-link-list-uid65bc" target="_self" data-bi-cn="Surface for your business" data-bi-ecn="Surface for your business" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://www.microsoft.com/en-us/surface/business">
                Surface for your business
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade1-link-list-uid65bc"></span>
            </a>

            
        </li>
        
    
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-automation-test-id="LinkListItem2-link-list-uid65bc" aria-expanded="false" data-close-label="Close dialog" aria-controls="listitempopoverx18a824dc7ca748439fa366f2685d393f" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/XF-Icon-Surface-Accessories-Black?wid=40&hei=40" data-automation-test-id="LinkListItemGlobalImgLazyLoad2-link-list-uid65bc" loading="lazy" width="40" height="40" alt class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Accessories" data-bi-ecn="Accessories" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://www.microsoft.com/en-us/store/b/surface-accessories" data-automation-test-id="LinkListItemCTA2-link-list-uid65bc" aria-label="Surface Accessories" target="_self" data-bi-cn="Accessories" data-bi-ecn="Accessories" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://www.microsoft.com/en-us/store/b/surface-accessories">
                Accessories
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade2-link-list-uid65bc"></span>
            </a>

            
        </li>
        
    
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-automation-test-id="LinkListItem3-link-list-uid65bc" aria-expanded="false" data-close-label="Close dialog" aria-controls="listitempopoverxa32e59406ebb4ab29958712a6e4b4d69" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Panel_Footer_Icons_Support?wid=40&hei=40" data-automation-test-id="LinkListItemGlobalImgLazyLoad3-link-list-uid65bc" loading="lazy" width="40" height="40" alt class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Surface Support" data-bi-ecn="Surface Support" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://support.microsoft.com/products/surface-devices" data-automation-test-id="LinkListItemCTA3-link-list-uid65bc" target="_self" data-bi-cn="Surface Support" data-bi-ecn="Surface Support" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://support.microsoft.com/products/surface-devices">
                Surface Support
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade3-link-list-uid65bc"></span>
            </a>

            
        </li>
        
    
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-automation-test-id="LinkListItem4-link-list-uid65bc" aria-expanded="false" data-close-label="Close dialog" aria-controls="listitempopoverxdb22b561d2554d1d875903e615837d3b" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/XF-Icon-Surface-Register-Black?wid=40&hei=40" data-automation-test-id="LinkListItemGlobalImgLazyLoad4-link-list-uid65bc" loading="lazy" width="40" height="40" alt class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Register your Surface" data-bi-ecn="Register your Surface" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://support.microsoft.com/devices" data-automation-test-id="LinkListItemCTA4-link-list-uid65bc" target="_self" data-bi-cn="Register your Surface" data-bi-ecn="Register your Surface" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://support.microsoft.com/devices">
                Register your Surface
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade4-link-list-uid65bc"></span>
            </a>

            
        </li>
        
    
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-automation-test-id="LinkListItem5-link-list-uid65bc" aria-expanded="false" data-close-label="Close dialog" aria-controls="listitempopoverx8f9c188c8a9a4d2da95cbfa7df982c71" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/XF-Icon-Surface-Newsletter-Black?wid=40&hei=40" data-automation-test-id="LinkListItemGlobalImgLazyLoad5-link-list-uid65bc" loading="lazy" width="40" height="40" alt class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Get the Surface Newsletter" data-bi-ecn="Get the Surface Newsletter" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://account.microsoft.com/profile/subscribe?TID=7de1de58-54a0-4047-8fea-83cdbb2a295d&SRU=Pn3hlj&CRU=W1g90u" data-automation-test-id="LinkListItemCTA5-link-list-uid65bc" target="_self" data-bi-cn="Get the Surface Newsletter" data-bi-ecn="Get the Surface Newsletter" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://account.microsoft.com/profile/subscribe?TID=7de1de58-54a0-4047-8fea-83cdbb2a295d&amp;SRU=Pn3hlj&amp;CRU=W1g90u">
                Get the Surface Newsletter
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade5-link-list-uid65bc"></span>
            </a>

            
        </li>
        
    
        
        
        
        
        <li class="font-weight-semibold mx-4 my-3 d-flex align-items-center card flex-grow-0  " data-automation-test-id="LinkListItem6-link-list-uid65bc" aria-expanded="false" data-close-label="Close dialog" aria-controls="listitempopoverx70c13cdc32a14efa9890257073c4ce36" data-placement="bottom">
            
            
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/XF-Icon-Surface-Recall-Power-Cord-Black?wid=40&hei=40" data-automation-test-id="LinkListItemGlobalImgLazyLoad6-link-list-uid65bc" loading="lazy" width="40" height="40" alt class="img-fluid flex-shrink-0 mb-2" data-bi-cn="Power cord recall" data-bi-ecn="Power cord recall" data-bi-bhvr="0" data-bi-ct="CTA" data-bi-pa="Body" data-bi-compnm="Link List"/>
            
            
            <a href="https://support.microsoft.com/help/4040585" data-automation-test-id="LinkListItemCTA6-link-list-uid65bc" target="_self" data-bi-cn="Power cord recall" data-bi-ecn="Power cord recall" data-bi-bhvr="0" data-bi-ct="Link" data-bi-pa="Body" data-bi-compnm="Link List" data-target-uri="https://support.microsoft.com/help/4040585">
                Power cord recall
                    <span class="glyph" aria-hidden="true" data-automation-test-id="LinkListItemCTAWithMwfupgrade6-link-list-uid65bc"></span>
            </a>

            
        </li>
        
    </ul>
</nav></div>

    
</div>

</div></div>

    <span style="display:none">
        
        
                
                    
                
            
    </span>


    
</div>
<div class="experiencefragment mt-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="de24b40c7bf8f27f84caf1ea60652979">

    
    




<div class="cmp-experiencefragment">

    



<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="areaheading dynamic-price-container mb-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASH8396009a793fda25f0ad1c495ec773f4.css" type="text/css">



        

        <div id="areaheading-uid3329" data-componentName="areaheading-uid3329" class="area-heading   " data-automation-test-id="Areaheading-areaheading-uid3329" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 " data-automation-test-id="AreaheadingHeadingText-areaheading-uid3329" style="color:">
                        
                        
                            
                            
    <h2 data-automation-test-id="heading-areaheading-uid3329" id="heading-areaheading-uid3329">
            
    
        
        
            
            
                <p style="text-align: left;">Why buy from Microsoft Store </p>

            
        
    
    

    </h2>

                        
                    </div>
                
                
                    <div class="col-12 col-md-8 col-xl-6 " data-automation-test-id="AreaheadingSubtext-areaheading-uid3329">
                        
                        
                            <p class=" pb-3" data-automation-test-id="AreaheadingDesctext-areaheading-uid3329"> 
                                
    
        
        
            
            
                <div style="text-align: left;">We offer free shipping, free returns, and cash for eligible used devices, as well as multiple ways to pay. Plus, if we lower our price on a physical product within 60 days from delivery, we’ll honor a one-time price adjustment.​</div>

            
        
    
    

                            </p>
                        
                        
                            

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Learn about these benefits" data-bi-ecn="Learn about these benefits" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/en-us/store/b/why-microsoft-store?" data-bi-bhvr="0" data-automation-test-id="cta1-areaheading-uid3329" aria-label="Learn about these benefits and more" target="_self" data-bi-ehn="&lt;p style=&#34;text-align: left;&#34;>Why buy from Microsoft Store &lt;/p>
" data-bi-hn="&lt;p style=&#34;text-align: left;&#34;>Why buy from Microsoft Store &lt;/p>
" data-bi-compnm="Area Heading: with Heading, Paragraph, Links" href="https://www.microsoft.com/en-us/store/b/why-microsoft-store?">
            
            Learn about these benefits
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                        
                    </div>
                
            </div>
        </div>
        
    
</div>
<div class="content-card carouselbase carousel aem-GridColumn aem-GridColumn--default--12" data-component-id="e4caa97101f9f7cf8317c819b353e6ed">

    




    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card/v1/content-card/clientlibs/site.min.ACSHASH92ba1cb9da3dd68605f38095fc34ba98.js" defer></script>


    



	
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card/v1/content-card/clientlibs/site.min.ACSHASHc033b611d87d511847501ade7913431f.css" type="text/css">





<section id="content-card-uid54d7" data-componentName="content-card-uid54d7">
    <div class="row row-cols-1   row-cols-sm-2 row-cols-lg-4">
        
            
                
    

    
        
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASH7e98ce1d1fb3c40effe0a57430c1371c.css" type="text/css">
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASH5eb7940588edeff2b13a25b0bd1cb864.css" type="text/css">



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    mb-5 mb-lg-0
                    ">
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/en-us/store/b/payment-financing-options?" data-bi-ecN="Learn about multiple ways to pay" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Multiple ways to pay​" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Financing-VP?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Multiple ways to pay​" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Learn about multiple ways to pay">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Financing-VP?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Financing-VP?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Financing-VP?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Financing-VP?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Financing-VP?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3>
                                Multiple ways to pay​
                            </h3>
                        
                        
                            <p>  Microsoft Store and partners are bringing you new ways to pay at checkout. They’re simple, safer options to get what you want when you want.​ </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Learn about multiple ways to pay" data-bi-ecn="Learn about multiple ways to pay" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/en-us/store/b/payment-financing-options?" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Financing-VP?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" aria-label="Buy the things you love with flexible payment options from Microsoft Store" target="_self" data-bi-ehn="Multiple ways to pay​" data-bi-hn="Multiple ways to pay​" data-bi-compnm="Content card vertical 4 up - depth" href="https://www.microsoft.com/en-us/store/b/payment-financing-options?">
            
            Learn about multiple ways to pay
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    mb-5 mb-lg-0
                    ">
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/en-us/store/b/price-protection" data-bi-ecN="Learn about price protection" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="60-day price protection​" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ValueProp_ContentPlacement_PricePromise1?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="60-day price protection​" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Learn about price protection">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ValueProp_ContentPlacement_PricePromise1?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ValueProp_ContentPlacement_PricePromise1?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ValueProp_ContentPlacement_PricePromise1?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ValueProp_ContentPlacement_PricePromise1?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ValueProp_ContentPlacement_PricePromise1?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3>
                                60-day price protection​
                            </h3>
                        
                        
                            <p> Buy now, enjoy price protection for 60 days from your delivery date. If we drop the price of a physical product or you find it lower at an eligible retailer, contact us and we’ll honor a one-time price adjustment. Exclusions apply.​ </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Learn about price protection" data-bi-ecn="Learn about price protection" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/en-us/store/b/price-protection" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ValueProp_ContentPlacement_PricePromise1?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" aria-label="Our 60-day price protection policy" target="_self" data-bi-ehn="60-day price protection​" data-bi-hn="60-day price protection​" data-bi-compnm="Content card vertical 4 up - depth" href="https://www.microsoft.com/en-us/store/b/price-protection">
            
            Learn about price protection
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    mb-5 mb-sm-0">
            <div class="card material-card h-100 " data-target-uri="https://www.microsoft.com/en-us/store/b/microsoft-trade-in" data-bi-ecN="Learn about trade-ins" data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Get cash for your used device" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Trade-in?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Get cash for your used device" data-bi-compNm="Content card vertical 4 up - depth" data-bi-cN="Learn about trade-ins">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Trade-in?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Trade-in?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Trade-in?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Trade-in?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Trade-in?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3>
                                Get cash for your used device
                            </h3>
                        
                        
                            <p> Trade in any eligible device—laptop, tablet, phone, or game console—from a variety of brands and get cash back. </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Learn about trade-ins" data-bi-ecn="Learn about trade-ins" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/en-us/store/b/microsoft-trade-in" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSSTORE-Value-Prop-Trade-in?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" aria-label="Microsoft Store Online Trade-in Program" target="_self" data-bi-ehn="Get cash for your used device" data-bi-hn="Get cash for your used device" data-bi-compnm="Content card vertical 4 up - depth" href="https://www.microsoft.com/en-us/store/b/microsoft-trade-in">
            
            Learn about trade-ins
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    ">
            <div class="card material-card h-100 " data-bi-cT="Content Card" data-bi-pA="body" data-bi-ehN="Free 2-3 day shipping and 60 day returns​" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/VP-Truck-1668x940?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-bi-hN="Free 2-3 day shipping and 60 day returns​" data-bi-compNm="Content card vertical 4 up - depth">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/VP-Truck-1668x940?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/VP-Truck-1668x940?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/VP-Truck-1668x940?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/VP-Truck-1668x940?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/VP-Truck-1668x940?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body px-4 pt-4">
                        
                            <h3>
                                Free 2-3 day shipping and 60 day returns​
                            </h3>
                        
                        
                            <p> Get free 2-3 day shipping with no minimum purchase. Plus, enjoy 60 day returns on almost any physical product.​ </p>
                        
                    </div>
                    <div class="card-footer pt-3 px-4 pb-4">
                        

    
    <div class="link-group" data-automation-test-id="LinkGroupDiv-">
        
        
            
    
    
        
    
    

    
        <a data-bi-cn="Learn more about shipping" data-bi-ecn="Learn more about shipping" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://support.microsoft.com/en-us/account-billing/shipping-options-costs-and-delivery-times-63d48e68-3fb8-6d6f-e73f-f321467d6aee" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/VP-Truck-1668x940?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta1-" aria-label="Shipping options, costs, and delivery times" target="_self" data-bi-ehn="Free 2-3 day shipping and 60 day returns​" data-bi-hn="Free 2-3 day shipping and 60 day returns​" data-bi-compnm="Content card vertical 4 up - depth" href="https://support.microsoft.com/en-us/account-billing/shipping-options-costs-and-delivery-times-63d48e68-3fb8-6d6f-e73f-f321467d6aee">
            
            Learn more about shipping
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
            
    
    
        
    
    

    
        <a data-bi-cn=" Learn more about returns" data-bi-ecn=" Learn more about returns" data-bi-ct="cta" data-bi-pa="body" class=" cta   " data-target-uri="https://www.microsoft.com/en-us/store/b/returns" data-bi-assetid="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/VP-Truck-1668x940?wid=515&amp;hei=293&amp;fit=crop" data-bi-bhvr="0" data-automation-test-id="cta2-" aria-label="Our 60-day returns policy" target="_self" data-bi-ehn="Free 2-3 day shipping and 60 day returns​" data-bi-hn="Free 2-3 day shipping and 60 day returns​" data-bi-compnm="Content card vertical 4 up - depth" href="https://www.microsoft.com/en-us/store/b/returns">
            
             Learn more about returns
             <span class="glyph" aria-hidden="true"></span> 
        </a>
    

    

    

    

    


        
    </div>


                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
    </div>
    
</section>



</div>

    
</div>

</div></div>

    <span style="display:none">
        
        
                
                    
                
            
    </span>


    
</div>
<div class="experiencefragment aem-GridColumn aem-GridColumn--default--12" data-component-id="de24b40c7bf8f27f84caf1ea60652979">

    
    




<div class="cmp-experiencefragment">

    



<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="footnotes-component aem-GridColumn aem-GridColumn--default--12" data-component-id="5aae1cc391ba1be81238febb88e2ef7b">

    



    
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/footnotes/v1/footnotes/clientlibs/site.min.ACSHASH40203e0bb3e24fd4626d84825f55e9c5.css" type="text/css">





       
    <div id="footnotes-uid9575" data-componentName="footnotes-uid9575" class="row " style="background-color: null">
    <section class="col-12 mt-5  " aria-label="Service and warranties for Surface.">
    	
    	
	        <ul class="list-unstyled small mb-0">
	            <li class="py-2">
	                
	                <span><strong>Flexible payments:</strong> With approval of Citizens Pay Line of Credit at 0% APR and 12- or 18-month term. Subject to individual credit approval. See the Citizens Pay Line of Credit Agreement for full terms and conditions. Citizens Pay Line of Credit Account offered by Citizens Bank, N.A.​ </span>
	            </li>
<li class="py-2">
	                
	                <span><strong>Price protection:</strong> Microsoft Store Price Adjustment: Valid on purchases of qualifying new or refurbished consumer and commercial physical products made at Microsoft Store and Microsoft Experience Centers in select markets for 60 days from the date product is received. Eligible Retailer Price Adjustment: Valid on purchases of qualifying new consumer physical products from Microsoft Store and Microsoft Experience Centers in select markets for 60 days from the date product is received. Excludes commercial and refurbished products. An Eligible Retailer Price Adjustment cannot be requested at time of purchase. Microsoft reserves the right to verify an eligible retailer’s advertised price and availability of the product. The product sold by the eligible retailer must be identical to the product sold by Microsoft and must be in stock for purchase at the eligible retailer at the reduced price. Exclusions apply. Both price adjustments: Price Adjustment must be requested within 60 days after the customer receives the product and cannot be completed at time of purchase. Customer is eligible only if the product is in stock for purchase at Microsoft Store or a Microsoft Experience Center. Customer must contact Microsoft to request the adjustment. For purchases from Microsoft Store, contact Microsoft Store Sales and Support with your Microsoft Account information and any other information requested by a representative. For purchases from a Microsoft Experience Center, you must return to the location with your receipt. Limit 1 price adjustment total per product. Excludes Surface Hub, HoloLens, and Windows DevKit. See <a href="https://www.microsoft.com/en-us/store/b/price-protection-terms-and-conditions" class="ms-rte-link" aria-label="Microsoft Store Price Protection.">here</a> for full terms and full list of eligible retailers.​​ </span>
	            </li>
<li class="py-2">
	                
	                <span><strong>Returns: </strong>Available with eligible physical products purchased from Microsoft Store online and Microsoft Experience Centers in select markets. Return process must be started within 60 days after customer receives the product. Limit 5 product returns per eligible customer purchase. Excludes Surface Hub, HoloLens, and Windows DevKit. Applicable return policy applies. For purchases made at Microsoft Store, see applicable <a aria-label="Microsoft Terms of Sale" href="https://www.microsoft.com/en-us/store/b/terms-of-sale" class="ms-rte-link">Microsoft Terms of Sale</a> for more information. For purchases made at a Microsoft Experience Center, see receipt for more information. Microsoft reserves the right to modify or discontinue offers at any time.​​<br />
 </span>
	            </li>
<li class="py-2">
	                
	                <span><strong>Trade-In:</strong> Available only through the Microsoft Store online in the United States (including Puerto Rico). Offer valid for reimbursements after trade in of qualifying devices (PC, laptop, mobile phone, tablet, video game console). Recycled devices are not eligible for cash back. To be eligible for trade in, you must own the qualifying device, device must power on, battery must hold charge and not be required to be plugged in to operate, and be in fully-functional, working condition without broken/missing components, cracked display/housing, liquid damage, modification(s) or have device warranty seal broken. Device cannot be password protected, and must include original chargers/accessories, and must contain hard drive. Customer must mail in the qualifying trade-in device to be eligible for the reimbursements. All trade-ins are final. Cannot be transferred or otherwise redeemed for cash or gift cards, or credit towards other devices or products. May not be combined with other offers. Microsoft reserves the right to modify or discontinue offers at any time. Other exclusions and limits may apply.​​<br />
 </span>
	            </li>
<li class="py-2">
	                
	                <span>Microsoft reserves the right to modify or discontinue offers at any time.​ </span>
	            </li>

	        </ul>
        
    </section>
    </div>



    
    
<script src="/etc.clientlibs/microsoft/components/content/footnotes/v1/footnotes/clientlibs/site.min.ACSHASH19141611645452b56db9617f068dea98.js"></script>



</div>

    
</div>

</div></div>

    <span style="display:none">
        
        
                
                    
                
            
    </span>


    
</div>
<div class="footnotes-component aem-GridColumn aem-GridColumn--default--12" data-component-id="5aae1cc391ba1be81238febb88e2ef7b">

    



    
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/footnotes/v1/footnotes/clientlibs/site.min.ACSHASH40203e0bb3e24fd4626d84825f55e9c5.css" type="text/css">





       
    <div id="footnotes-uid7d44" data-componentName="footnotes-uid7d44" class="row " style="background-color: null">
    <section class="col-12 mt-5  " aria-label="footnotes and disclaimers.">
    	
    	
	        <ul class="list-unstyled small mb-0">
	            <li class="py-2">
	                
	                <span>*Subscription Required. Sold separately. <br />
 </span>
	            </li>
<li class="py-2">
	                
	                <span>[1] Microsoft 365, and some software and accessories sold separately.  </span>
	            </li>
<li class="py-2">
	                
	                <span>[2] Battery life varies significantly based on device configuration, usage, network and feature configuration, signal strength, settings and other factors. See <a href="https://aka.ms/SurfaceBatteryPerformance" class="ms-rte-link">Surface Battery Performance</a> for details. </span>
	            </li>
<li class="py-2">
	                
	                <span>[3] Colors available on selected models only. Available colors, sizes, finishes, and processors may vary by store, market, and configuration. </span>
	            </li>
<li class="py-2">
	                
	                <span>[4] System software uses significant storage space. Available storage is subject to change based on system software updates and apps usage. 1 GB = 1 billion bytes. 1 TB = 1,000 GB. See <a href="https://surface.com/Storage">Surface Storage</a> for more details. </span>
	            </li>
<li class="py-2">
	                
	                <span>[5] Features and app availability may vary by region. </span>
	            </li>
<li class="py-2">
	                
	                <span>[6] Activation required for 1-month trial of Xbox Game Pass Ultimate. Xbox Game Pass Ultimate one month trial accessible through <a href="https://xbox.com/Play">Xbox Play</a>. Credit card required. See terms. Not currently available in China. </span>
	            </li>
<li class="py-2">
	                
	                <span>[7] Comparison of viewable content on Surface devices with 3:2 aspect ratio v. laptops with 16:10 or 16:9. </span>
	            </li>
<li class="py-2">
	                
	                <span>[8] Voice Clarity is available in apps that use integrated device microphones and certain Windows audio processing modes. </span>
	            </li>
<li class="py-2">
	                
	                <span>[9] Microsoft 365 subscription required: app available as separate download. Some functionalities only available in the US. </span>
	            </li>
<li class="py-2">
	                
	                <span>[10] Sold separately. Software license required for some features. </span>
	            </li>
<li class="py-2">
	                
	                <span>[11] Includes support for Wi-Fi 6 (802.11ax) where available. </span>
	            </li>
<li class="py-2">
	                
	                <span>[12] Microsoft Phone Link and PC both need a Wi-Fi connection, or you can give permission for the app to use your mobile data. </span>
	            </li>
<li class="py-2">
	                
	                <span>[13] Apps are available on Android devices in select markets running Android 9.0 or greater that have Link to Windows installed and for Surface Duo 2 running Android 11.0 or greater. </span>
	            </li>
<li class="py-2">
	                
	                <span>[14] Phone Link for iOS requires iPhone<sup>®</sup> with iOS 14 or higher, Windows 11 device, Bluetooth connection and the latest version of the Phone Link app. Not available for iPad<sup>®</sup> (iPadOS<sup>®</sup>) or MacOS<sup>®</sup>. To experience the full functionality on Android™ devices, mobile phones must be running Android 7.0 or later.  Microsoft Phone Link and PC both need a Wi-Fi connection, otherwise data restrictions may apply. Device compatibility may vary. Regional restrictions may apply. Trademarks are the property of their respective owners. <a href="https://support.microsoft.com/topic/connect-on-a-new-level-with-link-to-windows-on-your-surface-duo-or-samsung-or-honor-device-bb7a82b6-7bcd-be1d-ccc8-dddb909bc07b" class="ms-rte-link">See full list of compatible devices by clicking here</a>. </span>
	            </li>
<li class="py-2">
	                
	                <span>[15] Compatible with select devices and operating system versions. Some functionality not supported on Android, iOS, or via Bluetooth. Go to <a href="https://xbox.com/controller-compatibility">Xbox Controller Compatibility</a> for more information. Button mapping available via Xbox Accessories app for Xbox Series X, Xbox One, and Windows 10. </span>
	            </li>
<li class="py-2">
	                
	                <span>[16] Surface Laptop Studio 2 display has rounded corners within a standard rectangle. When measured as a standard rectangular shape the screen is 14.36” diagonally (actual viewable area is less). </span>
	            </li>

	        </ul>
        
    </section>
    </div>



    
    
<script src="/etc.clientlibs/microsoft/components/content/footnotes/v1/footnotes/clientlibs/site.min.ACSHASH19141611645452b56db9617f068dea98.js"></script>



</div>

          
     </div>
</div></div>

    
</div>
</div>
</div>
<div role="tabpanel" tabindex="0" class="tab-panel fade cmp-tabs__tabpanel" data-cmp-hook-tabs="tabpanel" id="Full tech specs" aria-labelledby="Full tech specs" data-automation-test-id="StickyTabPanelItem1-c35e2f51-101e-4102-ba60-b5f903f56032"><div class="responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7">





<div class="aem-Grid aem-Grid--12 aem-Grid--default--12  grid-image-layout-container-uid2cd1  heading-bg-color-layout-container-uid2cd1" data-automation-test-id="layout-container-uid2cd1">
          <style data-automation-test-id="headingColor-layout-container-uid2cd1">
                    .heading-bg-color-layout-container-uid2cd1{
                         background-color:  !important;
                    }
          </style>
     
     <div class="container" id="layout-container-uid2cd1" data-componentName="layout-container-uid2cd1">
          
          
          <div class="content-card carouselbase carousel aem-GridColumn aem-GridColumn--default--12" data-component-id="e4caa97101f9f7cf8317c819b353e6ed">

    



    <div class="perflazy">
        <template>
            
                
    



            
        </template>
    </div>




	
    





<section id="content-card-uid61a3" data-componentName="content-card-uid61a3">
    <div class="row row-cols-1   row-cols-sm-2 row-cols-lg-4">
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    mb-5 mb-lg-0
                    ">
            <div class="card  ">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_touchscreen-tech-spec?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_touchscreen-tech-spec?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_touchscreen-tech-spec?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_touchscreen-tech-spec?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_touchscreen-tech-spec?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Ice Blue Surface Laptop Go 3 shown from the front and left sides with a Windows bloom on screen. "/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body  pt-3">
                        
                            <h2 class="h6    ">
                                12.4” PixelSense™ touchscreen
                            </h2>
                        
                        
                            <p> <ul>
<li>Surface signature 3:2 ratio gives you the most vertical screen real estate on a laptop for getting it all done.<sup>14</sup></li>
<li>Access news, information, and entertainment faster with new Windows 11 touch gestures, voice navigation, and typing.</li>
</ul>
 </p>
                        
                    </div>
                    <div class="card-footer pt-3 ">
                        
                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    mb-5 mb-lg-0
                    ">
            <div class="card  ">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_get-it-done-tech-spec?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_get-it-done-tech-spec?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_get-it-done-tech-spec?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_get-it-done-tech-spec?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_get-it-done-tech-spec?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Ice Blue Surface Laptop Go 3 shown from a top angle with the keyboard and touch pad in view. "/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body  pt-3">
                        
                            <h2 class="h6    ">
                                Get it done anywhere
                            </h2>
                        
                        
                            <p> <ul>
<li>Power your productivity with a 12th Gen Intel<sup>®</sup> Core™ i5 processor.</li>
<li>All day battery life, up to 15 hours,<sup>2</sup> plus Fast Charging.</li>
<li>Be heard loud and clear in video calls with built-in HD camera and dual studio mics.</li>
</ul>
 </p>
                        
                    </div>
                    <div class="card-footer pt-3 ">
                        
                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    mb-5 mb-sm-0">
            <div class="card  ">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_lightest-tech-spec?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_lightest-tech-spec?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_lightest-tech-spec?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_lightest-tech-spec?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_lightest-tech-spec?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Ice Blue Surface Laptop Go 3 shown from the right side angle with the device closed. "/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body  pt-3">
                        
                            <h2 class="h6    ">
                                The lightest Surface Laptop
                            </h2>
                        
                        
                            <p> <ul>
<li>Ultralight and ultraportable at just 2.49 lbs.</li>
<li>Choose your perfect match. Available in Ice Blue, Sage, Sandstone, and Platinum.<sup>3</sup></li>
<li>Type in comfort on the full-size keyboard with large, precision touchpad that lets you navigate, scroll, and select with ease.<br />
</li>
</ul>
 </p>
                        
                    </div>
                    <div class="card-footer pt-3 ">
                        
                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
            
                
    

    
        
    



    

    
        
        
    
    
    
    
    
    
    
    
        <div class="col 
                    
                    ">
            <div class="card  ">
                
                    
	
		<picture>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_connections-tech-spec?wid=380&amp;hei=213&amp;fit=crop" media="(min-width: 1400px)"/>
			<source srcset=" https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_connections-tech-spec?wid=297&amp;hei=167&amp;fit=crop" media="(min-width: 1084px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_connections-tech-spec?wid=517&amp;hei=293&amp;fit=crop" media="(min-width: 860px)"/>
			<source srcset="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_connections-tech-spec?wid=406&amp;hei=230&amp;fit=crop" media="(min-width: 540px)"/>
			<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_ice-blue_connections-tech-spec?wid=406&hei=230&fit=crop" loading="lazy" class="card-img" alt="Ice Blue Surface Laptop Go 3 shown from a back angle with the keyboard partially visible. "/>
		</picture>
	
	

                    
                
                    <!-- If any of the cards in a group contain a badge, all cards should include a card header -->
                    
                    <div class="card-body  pt-3">
                        
                            <h2 class="h6    ">
                                Must-have connections and security
                            </h2>
                        
                        
                            <p> <ul>
<li>Convenient security thanks to Fingerprint Power Button with Windows Hello and One Touch sign-in.</li>
<li>Plug in the accessories you use today with built in USB-C<sup>®</sup> and USB-A ports, Surface Connect, and headphone jack.</li>
</ul>
 </p>
                        
                    </div>
                    <div class="card-footer pt-3 ">
                        
                    </div>
            </div>
        </div>
    

    
    
        
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v3/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script><script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/content-card-item/v1/content-card-item/clientlibs/site.min.ACSHASHd41d8cd98f00b204e9800998ecf8427e.js" defer></script>


    



            
            
        
    </div>
    
</section>



</div>
<div class="areaheading dynamic-price-container mb-3 aem-GridColumn aem-GridColumn--default--12" data-component-id="60bf9066c3eebdbf5a6e3f039c9b54ab">
    
    
    
    
    
    
    
    
    
    
        
            
    
    <script type="text/javascript" src="/etc.clientlibs/microsoft/components/content/areaheading/v1/areaheading/clientlibs/site.min.ACSHASHd60230a0d64115fa0302297053d89926.js" defer></script>


        
        
            
    



        

        <div id="areaheading-uid4eb3" data-componentName="areaheading-uid4eb3" class="area-heading   " data-automation-test-id="Areaheading-areaheading-uid4eb3" style="background-color: null">
            
            
      

            <div class="row">
                
                    <div class="col-12 col-md-8 " data-automation-test-id="AreaheadingHeadingText-areaheading-uid4eb3" style="color:">
                        
                        
                            
                            
    <h2 data-automation-test-id="heading-areaheading-uid4eb3" class=" h6    " id="heading-areaheading-uid4eb3">
            
    
        
        
            
            
                Tech specs
            
        
    
    

    </h2>

                        
                    </div>
                
                
            </div>
        </div>
        
    
</div>
<div class="tablecomponent aem-GridColumn aem-GridColumn--default--12" data-component-id="3a7460247261cca0c34816c8058755c6">
    
    
    
    
        
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/tablecomponent/v1/tablecomponent/clientlibs/site.min.ACSHASHe1f0a24d32a3caaed1d3b99783be4b37.css" type="text/css">



    
    <table class="table table-fixed table-lg   table-first-col-highlight" role="presentation">
        
        <tbody>
        
            <tr>
                <td>
                    <h3 class="h6">Processor</h3>
                </td>
                <td>
                    <div>12th Gen Intel<sup>®</sup> Core<sup>™</sup> i5-1235U Processor</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Graphics</h3>
                </td>
                <td>
                    <div>Intel<sup>®</sup> Iris<sup>®</sup> Xe  Graphics</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Memory and storage<sup>4</sup></h3>
                </td>
                <td>
                    <div><p>Memory options:</p>
<ul>
<li>8GB or 16GB LPDDR5 RAM</li>
</ul>
<p>Storage options:</p>
<ul>
<li>Removable<sup>8</sup> solid-state drive (SSD) options: 256GB</li>
</ul>
</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Display</h3>
                </td>
                <td>
                    <div><ul>
<li>Touchscreen: 12.4” PixelSense™ Display</li>
<li>Resolution: 1536 x 1024 (148 PPI)</li>
<li>Aspect ratio: 3:2</li>
<li>Contrast ratio: 1000:1 </li>
<li>Color profile: sRGB and Enhanced </li>
<li>Individually color-calibrated display </li>
<li>Touch: 10-point multi-touch</li>
<li>Corning<sup>®</sup> Gorilla<sup>®</sup> Glass 3</li>
</ul>
</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Battery life<sup>2</sup></h3>
                </td>
                <td>
                    <div>Up to 15 hours of typical device usage</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Size and weight<sup>15</sup></h3>
                </td>
                <td>
                    <div><ul>
<li>Length: 10.95”</li>
<li>Width: 8.12”</li>
<li>Height: 0.62”</li>
<li>Weight: 2.49 lbs</li>
</ul>
</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Security</h3>
                </td>
                <td>
                    <div><ul>
<li>Firmware TPM 2.0 </li>
<li>Windows Hello sign-in with Fingerprint Power Button</li>
</ul>
</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Video/Cameras</h3>
                </td>
                <td>
                    <div>720p HD front-facing camera </div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Audio</h3>
                </td>
                <td>
                    <div>Omnisonic<sup>®</sup> Speakers with Dolby<sup>®</sup> Audio<sup>™</sup> Premium</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Mics</h3>
                </td>
                <td>
                    <div>Dual far-field Studio Mics with Voice Clarity<sup>9</sup></div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Connections</h3>
                </td>
                <td>
                    <div><ul>
<li>USB-C<sup>®</sup> 3.2 (data, DisplayPort and charging)</li>
<li>USB-A 3.1</li>
<li>3.5 mm headphone jack </li>
<li>Surface Connect port</li>
</ul>
</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Network and connectivity</h3>
                </td>
                <td>
                    <div><ul>
<li>Wi-Fi 6: 802.11ax compatible<br />
</li>
<li>Bluetooth<sup>®</sup> Wireless 5.1 technology</li>
</ul>
</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Software</h3>
                </td>
                <td>
                    <div><ul>
<li>Windows 11 Home</li>
<li>Preloaded Microsoft 365 Apps<sup>5</sup></li>
<li>Microsoft 365 Family 30-day trial<sup>6</sup></li>
<li>Xbox Game Pass Ultimate 30-day trial<sup>7</sup></li>
</ul>
</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Accessibility</h3>
                </td>
                <td>
                    <div><ul>
<li>Compatible with Surface Adaptive Kit</li>
<li>Compatible with Microsoft Adaptive Accessories</li>
<li>Includes Windows Accessibility Features – Learn More <a aria-label="Accessibility Features and Microsoft Accessibility" href="https://www.microsoft.com/en-us/accessibility/features" class="ms-rte-link">Accessibility Features | Microsoft Accessibility </a></li>
<li>Discover more Microsoft Accessible Devices &amp; Products - <a aria-label="Accessibility devices and products in the Microsoft Store" href="https://www.microsoft.com/en-us/store/b/accessible-adaptive-devices-accessories" class="ms-rte-link">Accessible Devices &amp; Products for PC &amp; Gaming | Assistive Tech Accessories - Microsoft Store </a></li>
</ul>
</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Serviceability </h3>
                </td>
                <td>
                    <div><p><a href="https://support.microsoft.com/surface/self-repair-information-for-your-surface-device-56655149-c27a-432a-9936-bacd609a4b03" class="ms-rte-link" aria-label="Replaceable components and self-repair information ">Replaceable components and self-repair information</a><a></a></p>
<p> </p>
</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Exterior</h3>
                </td>
                <td>
                    <div><ul>
<li>Top: Anodized aluminum</li>
<li>Base: Aluminum and polycarbonate composite resin system with glass fiber and 30% post-consumer recycled content<sup>16</sup></li>
<li>Colors<sup>3</sup>: Ice Blue, Sage, Sandstone, Platinum</li>
</ul>
</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Sensors</h3>
                </td>
                <td>
                    <div>Ambient light sensor</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">What’s in the box</h3>
                </td>
                <td>
                    <div>Surface Laptop Go 3<br />
39W Power Supply<br />
Quick Start Guide<br />
Safety Warranty documents</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Warranty<sup>10</sup></h3>
                </td>
                <td>
                    <div>1-year limited hardware warranty</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Keyboard layout</h3>
                </td>
                <td>
                    <div>Activation: Moving keys<br />
Layout: English, full row of function keys (F1 – F12)<br />
Windows key and dedicated buttons for media controls, screen brightness</div>
                </td>
            </tr>
        
            <tr>
                <td>
                    <h3 class="h6">Battery capacities<sup>11</sup></h3>
                </td>
                <td>
                    <div><ul>
<li>Battery Capacity Nominal (WH) 41</li>
<li>Battery Capacity Min (WH) 40</li>
</ul>
</div>
                </td>
            </tr>
        
        </tbody>
    </table>
    



    
<script src="/etc.clientlibs/microsoft/components/content/tablecomponent/v1/tablecomponent/clientlibs/site.min.ACSHASH46469e1facb74ffd90d181244e48558c.js"></script>


</div>
<div class="experiencefragment aem-GridColumn aem-GridColumn--default--12" data-component-id="de24b40c7bf8f27f84caf1ea60652979">

    
    




<div class="cmp-experiencefragment">

    



<div class="xf-content-height">
    


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="footnotes-component aem-GridColumn aem-GridColumn--default--12" data-component-id="5aae1cc391ba1be81238febb88e2ef7b">

    



    
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/footnotes/v1/footnotes/clientlibs/site.min.ACSHASH40203e0bb3e24fd4626d84825f55e9c5.css" type="text/css">





       
    <div id="footnotes-uid9575" data-componentName="footnotes-uid9575" class="row " style="background-color: null">
    <section class="col-12 mt-5  " aria-label="Service and warranties for Surface.">
    	
    	
	        <ul class="list-unstyled small mb-0">
	            <li class="py-2">
	                
	                <span><strong>Flexible payments:</strong> With approval of Citizens Pay Line of Credit at 0% APR and 12- or 18-month term. Subject to individual credit approval. See the Citizens Pay Line of Credit Agreement for full terms and conditions. Citizens Pay Line of Credit Account offered by Citizens Bank, N.A.​ </span>
	            </li>
<li class="py-2">
	                
	                <span><strong>Price protection:</strong> Microsoft Store Price Adjustment: Valid on purchases of qualifying new or refurbished consumer and commercial physical products made at Microsoft Store and Microsoft Experience Centers in select markets for 60 days from the date product is received. Eligible Retailer Price Adjustment: Valid on purchases of qualifying new consumer physical products from Microsoft Store and Microsoft Experience Centers in select markets for 60 days from the date product is received. Excludes commercial and refurbished products. An Eligible Retailer Price Adjustment cannot be requested at time of purchase. Microsoft reserves the right to verify an eligible retailer’s advertised price and availability of the product. The product sold by the eligible retailer must be identical to the product sold by Microsoft and must be in stock for purchase at the eligible retailer at the reduced price. Exclusions apply. Both price adjustments: Price Adjustment must be requested within 60 days after the customer receives the product and cannot be completed at time of purchase. Customer is eligible only if the product is in stock for purchase at Microsoft Store or a Microsoft Experience Center. Customer must contact Microsoft to request the adjustment. For purchases from Microsoft Store, contact Microsoft Store Sales and Support with your Microsoft Account information and any other information requested by a representative. For purchases from a Microsoft Experience Center, you must return to the location with your receipt. Limit 1 price adjustment total per product. Excludes Surface Hub, HoloLens, and Windows DevKit. See <a href="https://www.microsoft.com/en-us/store/b/price-protection-terms-and-conditions" class="ms-rte-link" aria-label="Microsoft Store Price Protection.">here</a> for full terms and full list of eligible retailers.​​ </span>
	            </li>
<li class="py-2">
	                
	                <span><strong>Returns: </strong>Available with eligible physical products purchased from Microsoft Store online and Microsoft Experience Centers in select markets. Return process must be started within 60 days after customer receives the product. Limit 5 product returns per eligible customer purchase. Excludes Surface Hub, HoloLens, and Windows DevKit. Applicable return policy applies. For purchases made at Microsoft Store, see applicable <a aria-label="Microsoft Terms of Sale" href="https://www.microsoft.com/en-us/store/b/terms-of-sale" class="ms-rte-link">Microsoft Terms of Sale</a> for more information. For purchases made at a Microsoft Experience Center, see receipt for more information. Microsoft reserves the right to modify or discontinue offers at any time.​​<br />
 </span>
	            </li>
<li class="py-2">
	                
	                <span><strong>Trade-In:</strong> Available only through the Microsoft Store online in the United States (including Puerto Rico). Offer valid for reimbursements after trade in of qualifying devices (PC, laptop, mobile phone, tablet, video game console). Recycled devices are not eligible for cash back. To be eligible for trade in, you must own the qualifying device, device must power on, battery must hold charge and not be required to be plugged in to operate, and be in fully-functional, working condition without broken/missing components, cracked display/housing, liquid damage, modification(s) or have device warranty seal broken. Device cannot be password protected, and must include original chargers/accessories, and must contain hard drive. Customer must mail in the qualifying trade-in device to be eligible for the reimbursements. All trade-ins are final. Cannot be transferred or otherwise redeemed for cash or gift cards, or credit towards other devices or products. May not be combined with other offers. Microsoft reserves the right to modify or discontinue offers at any time. Other exclusions and limits may apply.​​<br />
 </span>
	            </li>
<li class="py-2">
	                
	                <span>Microsoft reserves the right to modify or discontinue offers at any time.​ </span>
	            </li>

	        </ul>
        
    </section>
    </div>



    
    
<script src="/etc.clientlibs/microsoft/components/content/footnotes/v1/footnotes/clientlibs/site.min.ACSHASH19141611645452b56db9617f068dea98.js"></script>



</div>

    
</div>

</div></div>

    <span style="display:none">
        
        
                
                    
                
            
    </span>


    
</div>
<div class="footnotes-component aem-GridColumn aem-GridColumn--default--12" data-component-id="5aae1cc391ba1be81238febb88e2ef7b">

    



    
    





       
    <div id="footnotes-uid6695" data-componentName="footnotes-uid6695" class="row " style="background-color: null">
    <section class="col-12 mt-5  " aria-label="Footnotes and disclaimers.">
    	
    	
	        <ul class="list-unstyled small mb-0">
	            <li class="py-2">
	                
	                <span>*Subscription Required. Sold separately.  </span>
	            </li>
<li class="py-2">
	                
	                <span>[1] Microsoft 365, and some software and accessories sold separately.  </span>
	            </li>
<li class="py-2">
	                
	                <span>[2] Testing conducted by Microsoft in April-May 2023 using preproduction Windows 11 software and preproduction Surface Laptop Go 3 Intel® Core™ i5-1235U processor, 256 GB, 8/16 GB RAM devices. Testing consisted of full battery discharge with a mixture of active use and modern standby. The active use portion consists of (1) a web browsing test accessing eight popular websites over multiple open tabs, (2) a productivity test utilizing Microsoft Word, PowerPoint, Excel, OneNote and Outlook, and (3) a portion of time with the device in use with idle applications. All settings were default except screen brightness was set to 150 nits with Auto-Brightness and Adaptive Color disabled. Wi-Fi was connected to a network. Tested with Windows 11 Version 10.0.22621.1413 (22H2). Battery life varies significantly with settings, usage, and other factors.  </span>
	            </li>
<li class="py-2">
	                
	                <span>[3] Colors available on selected models only. Available colors, sizes, finishes, and processors may vary by store, market, and configuration.   </span>
	            </li>
<li class="py-2">
	                
	                <span>[4] System software uses significant storage space. Available storage is subject to change based on system software updates and apps usage. 1 GB = 1 billion bytes. 1 TB = 1,000 GB. See  <a href="https://surface.com/Storage">Surface Storage</a>  for more details. </span>
	            </li>
<li class="py-2">
	                
	                <span>[5] Requires license or subscription (sold separately) to activate and use.  </span>
	            </li>
<li class="py-2">
	                
	                <span>[6] Activation required </span>
	            </li>
<li class="py-2">
	                
	                <span>[7] Activation required for Xbox Game Pass Ultimate. Xbox Game Pass ultimate one month trial accessible through <a href="https://xbox.com/Play">Xbox Play</a>. You can use it to play games on Xbox One and Xbox Series Consoles, and stream select games where available to Surface Laptop Go 3 through <a href="https://xbox.com/Play">Xbox Play</a> and other supported devices. Not currently available in China.  </span>
	            </li>
<li class="py-2">
	                
	                <span>[8] This device does not contain user serviceable parts. Hard drive is only removable by an authorized technician following Microsoft provided instructions. </span>
	            </li>
<li class="py-2">
	                
	                <span>[9] Voice Clarity requires Windows 11 and is available in apps which use integrated device microphones and use certain Windows audio processing modes. </span>
	            </li>
<li class="py-2">
	                
	                <span>[10] Microsoft’s Limited Warranty is in addition to your consumer law rights. </span>
	            </li>
<li class="py-2">
	                
	                <span>[11] Actual rating Nominal (WH) 40.98 and Min (WH) 39.7 </span>
	            </li>
<li class="py-2">
	                
	                <span>[14] Comparison of viewable content on Surface devices with 3:2 aspect ratio v. laptops with 16:10 or 16:9. </span>
	            </li>
<li class="py-2">
	                
	                <span>[15] Might vary depending on manufacturing processes.  </span>
	            </li>
<li class="py-2">
	                
	                <span>[16] Validated 30% post-consumer recycled plastics based on Environmental Claim Validation Procedure (ECVP) for Recycled Content, UL ECVP 2809-2. First Edition, Dated April 06, 2023. </span>
	            </li>

	        </ul>
        
    </section>
    </div>



    
    



</div>

          
     </div>
</div></div>

    
</div>
</div>
</div>

				
				
			</div>
			
				
					<a class="btn btn-link sr-only-focusable" data-focus="back-to-tabs" data-automation-test-id="StickyTabContentItemBackToTabs-c35e2f51-101e-4102-ba60-b5f903f56032">Back to tabs.</a>
								
						
			
		</div>
	</div>

</div>

</div>

	
    
<script src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-tabs-common.min.ACSHASHcff87f95ffbd752224f38a06535d2122.js"></script>




</div>

    
</div>
</div>
<div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="back-to-top-button aem-GridColumn aem-GridColumn--default--12" data-component-id="66f104ac83c5ea29ffc13bb793e679c0">
    
    
        
    
<link rel="stylesheet" href="/etc.clientlibs/microsoft/components/content/back-to-top-button/v1/back-to-top-button/clientlibs/sites.min.ACSHASHa722775809d2312f435036def15bcd62.css" type="text/css">



    
    
    
    <div class="fixed-back-to-top p-g d-flex justify-content-end " data-mount="fixed-back-to-top">
        <a href="#page-top" aria-label="Back To Top" class="btn bg-body btn-faint-secondary" data-bi-cn="Back To Top" data-bi-ecn="Back To Top" data-bi-bhvr="0" data-bi-ct="Button" data-bi-pa="Body" data-bi-compnm="Back to top">
            <span class="glyph-prepend glyph-prepend-xsmall glyph-prepend-up">
                
                    <span class="px-1"></span>
                
                Back To Top
            </span>
        </a>
    </div>



    
    
<script src="/etc.clientlibs/microsoft/components/content/back-to-top-button/v1/back-to-top-button/clientlibs/sites.min.ACSHASH48d949b834ed32dfd8266989e9dab912.js"></script>



</div>

    
</div>
</div>

        
    </div>
</main></div>
<div class="universalfooter aem-GridColumn aem-GridColumn--default--12" data-component-id="873fa1f863becf63b38092282d4ea0b1">
	

	
		

    

    
        
                




        
        
                
                
            
    
<!-- Start of ADDITIONAL DEBUG INFO ** cv.html **

    CVToken: CASMicrosoftCV2080828f.2
  End of ADDITIONAL DEBUG INFO -->

                <!-- Start of ADDITIONAL DEBUG INFO ** uhftemplate.html **

    CVToken: CASMicrosoftCV2080828f.2
  End of ADDITIONAL DEBUG INFO -->
                    <div id="footerArea" class="uhf"  data-m='{"cN":"footerArea","cT":"Area_coreuiArea","id":"a2Body","sN":2,"aN":"Body"}'>
                <div id="footerRegion"      data-region-key="footerregion" data-m='{"cN":"footerRegion","cT":"Region_coreui-region","id":"r1a2","sN":1,"aN":"a2"}' >

    <div  id="footerUniversalFooter" data-m='{"cN":"footerUniversalFooter","cT":"Module_coreui-universalfooter","id":"m1r1a2","sN":1,"aN":"r1a2"}'  data-module-id="Category|footerRegion|coreui-region|footerUniversalFooter|coreui-universalfooter">
        



<footer id="uhf-footer" class="c-uhff context-uhf"  data-uhf-mscc-rq="false" data-footer-footprint="/Surface/surface-store-footer, fromService: True" data-m='{"cN":"Uhf footer_cont","cT":"Container","id":"c1m1r1a2","sN":1,"aN":"m1r1a2"}'>
        <nav class="c-uhff-nav" aria-label="Footer Resource links" data-m='{"cN":"Footer nav_cont","cT":"Container","id":"c1c1m1r1a2","sN":1,"aN":"c1m1r1a2"}'>
            
                <div class="c-uhff-nav-row">
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn1_cont","cT":"Container","id":"c1c1c1m1r1a2","sN":1,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">What&#39;s new</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Surface Laptop Studio 2 What&#39;s new" class="c-uhff-link" href="https://www.microsoft.com/en-us/d/Surface-Laptop-Studio-2/8rqr54krf1dz" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptopStudio2_nav","id":"n1c1c1c1m1r1a2","sN":1,"aN":"c1c1c1m1r1a2"}'>Surface Laptop Studio 2</a>
                            </li>
                            <li>
                                <a aria-label="Surface Laptop Go 3 What&#39;s new" class="c-uhff-link" href="https://www.microsoft.com/en-us/d/Surface-Laptop-Go-3/8p0wwgj6c6l2" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptopGo3_nav","id":"n2c1c1c1m1r1a2","sN":2,"aN":"c1c1c1m1r1a2"}'>Surface Laptop Go 3</a>
                            </li>
                            <li>
                                <a aria-label="Surface Pro 9 What&#39;s new" class="c-uhff-link" href="https://www.microsoft.com/en-us/d/surface-pro-9/93VKD8NP4FVK" data-m='{"cN":"Footer_WhatsNew_NewSurfacePro8_nav","id":"n3c1c1c1m1r1a2","sN":3,"aN":"c1c1c1m1r1a2"}'>Surface Pro 9</a>
                            </li>
                            <li>
                                <a aria-label="Surface Laptop 5 What&#39;s new" class="c-uhff-link" href="https://www.microsoft.com/en-us/d/surface-laptop-5/8XN49V61S1BN" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptop2_nav","id":"n4c1c1c1m1r1a2","sN":4,"aN":"c1c1c1m1r1a2"}'>Surface Laptop 5</a>
                            </li>
                            <li>
                                <a aria-label="Surface Studio 2+ What&#39;s new" class="c-uhff-link" href="https://www.microsoft.com/en-us/d/surface-studio-2plus/8VLFQC3597K4" data-m='{"cN":"Footer_WhatsNew_SurfaceStudio_nav","id":"n5c1c1c1m1r1a2","sN":5,"aN":"c1c1c1m1r1a2"}'>Surface Studio 2+</a>
                            </li>
                            <li>
                                <a aria-label="Copilot in Windows What&#39;s new" class="c-uhff-link" href="https://www.microsoft.com/en-us/windows/copilot-ai-features" data-m='{"cN":"Whatsnew_CopilotinWindows_nav","id":"n6c1c1c1m1r1a2","sN":6,"aN":"c1c1c1m1r1a2"}'>Copilot in Windows</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 What&#39;s new" class="c-uhff-link" href="https://www.microsoft.com/en-us/microsoft-365" data-m='{"cN":"Footer_WhatsNew_Microsoft365_nav","id":"n7c1c1c1m1r1a2","sN":7,"aN":"c1c1c1m1r1a2"}'>Microsoft 365</a>
                            </li>
                            <li>
                                <a aria-label="Windows 11 apps What&#39;s new" class="c-uhff-link" href="https://www.microsoft.com/windows/windows-11-apps" data-m='{"cN":"Footer_WhatsNew_Windows_11_apps_nav","id":"n8c1c1c1m1r1a2","sN":8,"aN":"c1c1c1m1r1a2"}'>Windows 11 apps</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn2_cont","cT":"Container","id":"c2c1c1m1r1a2","sN":2,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Microsoft Store</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Account profile Microsoft Store" class="c-uhff-link" href="https://account.microsoft.com/" data-m='{"cN":"Footer_StoreandSupport_AccountProfile_nav","id":"n1c2c1c1m1r1a2","sN":1,"aN":"c2c1c1m1r1a2"}'>Account profile</a>
                            </li>
                            <li>
                                <a aria-label="Download Center Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/en-us/download" data-m='{"cN":"Footer_StoreandSupport_DownloadCenter_nav","id":"n2c2c1c1m1r1a2","sN":2,"aN":"c2c1c1m1r1a2"}'>Download Center</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Store support Microsoft Store" class="c-uhff-link" href="https://go.microsoft.com/fwlink/?linkid=2139749" data-m='{"cN":"Footer_StoreandSupport_SalesAndSupport_nav","id":"n3c2c1c1m1r1a2","sN":3,"aN":"c2c1c1m1r1a2"}'>Microsoft Store support</a>
                            </li>
                            <li>
                                <a aria-label="Returns Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/en-us/store/b/returns" data-m='{"cN":"Footer_StoreandSupport_Returns_nav","id":"n4c2c1c1m1r1a2","sN":4,"aN":"c2c1c1m1r1a2"}'>Returns</a>
                            </li>
                            <li>
                                <a aria-label="Order tracking Microsoft Store" class="c-uhff-link" href="https://account.microsoft.com/orders" data-m='{"cN":"Footer_StoreandSupport_OrderTracking_nav","id":"n5c2c1c1m1r1a2","sN":5,"aN":"c2c1c1m1r1a2"}'>Order tracking</a>
                            </li>
                            <li>
                                <a aria-label="Certified Refurbished Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/en-us/store/b/certified-refurbished-products" data-m='{"cN":"Footer_StoreandSupport_StoreLocations_nav","id":"n6c2c1c1m1r1a2","sN":6,"aN":"c2c1c1m1r1a2"}'>Certified Refurbished</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Store Promise Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/en-us/store/b/why-microsoft-store?icid=footer_why-msft-store_7102020" data-m='{"cN":"Footer_StoreandSupport_MicrosoftPromise_nav","id":"n7c2c1c1m1r1a2","sN":7,"aN":"c2c1c1m1r1a2"}'>Microsoft Store Promise</a>
                            </li>
                            <li>
                                <a aria-label="Flexible Payments Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/en-us/store/b/payment-financing-options?icid=footer_financing_vcc" data-m='{"cN":"Footer_StoreandSupport_Financing_nav","id":"n8c2c1c1m1r1a2","sN":8,"aN":"c2c1c1m1r1a2"}'>Flexible Payments</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn3_cont","cT":"Container","id":"c3c1c1m1r1a2","sN":3,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Education</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Microsoft in education Education" class="c-uhff-link" href="https://www.microsoft.com/en-us/education" data-m='{"cN":"Footer_Education_MicrosoftInEducation_nav","id":"n1c3c1c1m1r1a2","sN":1,"aN":"c3c1c1m1r1a2"}'>Microsoft in education</a>
                            </li>
                            <li>
                                <a aria-label="Devices for education Education" class="c-uhff-link" href="https://www.microsoft.com/en-us/education/devices/overview" data-m='{"cN":"Footer_Education_DevicesforEducation_nav","id":"n2c3c1c1m1r1a2","sN":2,"aN":"c3c1c1m1r1a2"}'>Devices for education</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Teams for Education Education" class="c-uhff-link" href="https://www.microsoft.com/en-us/education/products/teams" data-m='{"cN":"Footer_Education_MicrosoftTeamsforEducation_nav","id":"n3c3c1c1m1r1a2","sN":3,"aN":"c3c1c1m1r1a2"}'>Microsoft Teams for Education</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Education Education" class="c-uhff-link" href="https://www.microsoft.com/en-us/education/buy-license/microsoft365" data-m='{"cN":"Footer_Education_Microsoft365Education_nav","id":"n4c3c1c1m1r1a2","sN":4,"aN":"c3c1c1m1r1a2"}'>Microsoft 365 Education</a>
                            </li>
                            <li>
                                <a aria-label="How to buy for your school Education" class="c-uhff-link" href="https://www.microsoft.com/education/how-to-buy" data-m='{"cN":"Footer_Howtobuyforyourschool_nav","id":"n5c3c1c1m1r1a2","sN":5,"aN":"c3c1c1m1r1a2"}'>How to buy for your school</a>
                            </li>
                            <li>
                                <a aria-label="Educator training and development Education" class="c-uhff-link" href="https://education.microsoft.com/" data-m='{"cN":"Footer_Education_EducatorTrainingDevelopment_nav","id":"n6c3c1c1m1r1a2","sN":6,"aN":"c3c1c1m1r1a2"}'>Educator training and development</a>
                            </li>
                            <li>
                                <a aria-label="Deals for students and parents Education" class="c-uhff-link" href="https://www.microsoft.com/en-us/store/b/education" data-m='{"cN":"Footer_Education_DealsForStudentsandParents_nav","id":"n7c3c1c1m1r1a2","sN":7,"aN":"c3c1c1m1r1a2"}'>Deals for students and parents</a>
                            </li>
                            <li>
                                <a aria-label="Azure for students Education" class="c-uhff-link" href="https://azure.microsoft.com/en-us/free/students/" data-m='{"cN":"Footer_Education_Azureforstudents_nav","id":"n8c3c1c1m1r1a2","sN":8,"aN":"c3c1c1m1r1a2"}'>Azure for students</a>
                            </li>

                        </ul>
                        
                    </div>
                </div>
                <div class="c-uhff-nav-row">
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn4_cont","cT":"Container","id":"c4c1c1m1r1a2","sN":4,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Business</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Microsoft Cloud Business" class="c-uhff-link" href="https://www.microsoft.com/en-us/microsoft-cloud" data-m='{"cN":"Footer_Business_Microsoft_Cloud_nav","id":"n1c4c1c1m1r1a2","sN":1,"aN":"c4c1c1m1r1a2"}'>Microsoft Cloud</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Security Business" class="c-uhff-link" href="https://www.microsoft.com/en-us/security" data-m='{"cN":"Footer_Business_Microsoft Security_nav","id":"n2c4c1c1m1r1a2","sN":2,"aN":"c4c1c1m1r1a2"}'>Microsoft Security</a>
                            </li>
                            <li>
                                <a aria-label="Dynamics 365 Business" class="c-uhff-link" href="https://www.microsoft.com/en-us/dynamics-365" data-m='{"cN":"Footer_Business_MicrosoftDynamics365_nav","id":"n3c4c1c1m1r1a2","sN":3,"aN":"c4c1c1m1r1a2"}'>Dynamics 365</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Business" class="c-uhff-link" href="https://www.microsoft.com/en-us/microsoft-365/business" data-m='{"cN":"Footer_Business_M365_nav","id":"n4c4c1c1m1r1a2","sN":4,"aN":"c4c1c1m1r1a2"}'>Microsoft 365</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Power Platform Business" class="c-uhff-link" href="https://www.microsoft.com/en-us/power-platform" data-m='{"cN":"Footer_DeveloperAndIT_Power Platform_nav","id":"n5c4c1c1m1r1a2","sN":5,"aN":"c4c1c1m1r1a2"}'>Microsoft Power Platform</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Teams Business" class="c-uhff-link" href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" data-m='{"cN":"Footer_Business_Microsoft365_nav","id":"n6c4c1c1m1r1a2","sN":6,"aN":"c4c1c1m1r1a2"}'>Microsoft Teams</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Industry Business" class="c-uhff-link" href="https://www.microsoft.com/en-us/industry" data-m='{"cN":"Footer_Business_MicrosoftIndustry_nav","id":"n7c4c1c1m1r1a2","sN":7,"aN":"c4c1c1m1r1a2"}'>Microsoft Industry</a>
                            </li>
                            <li>
                                <a aria-label="Small Business Business" class="c-uhff-link" href="https://www.microsoft.com/en-us/store/b/business?icid=CNavBusinessStore" data-m='{"cN":"Footer_Business-SmallBusiness_nav","id":"n8c4c1c1m1r1a2","sN":8,"aN":"c4c1c1m1r1a2"}'>Small Business</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn5_cont","cT":"Container","id":"c5c1c1m1r1a2","sN":5,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Developer &amp; IT</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Azure Developer &amp; IT" class="c-uhff-link" href="https://azure.microsoft.com/en-us/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftAzure_nav","id":"n1c5c1c1m1r1a2","sN":1,"aN":"c5c1c1m1r1a2"}'>Azure</a>
                            </li>
                            <li>
                                <a aria-label="Developer Center Developer &amp; IT" class="c-uhff-link" href="https://developer.microsoft.com/en-us/" data-m='{"cN":"Footer_DeveloperAndIT_DeveloperCenter_nav","id":"n2c5c1c1m1r1a2","sN":2,"aN":"c5c1c1m1r1a2"}'>Developer Center</a>
                            </li>
                            <li>
                                <a aria-label="Documentation Developer &amp; IT" class="c-uhff-link" href="https://learn.microsoft.com/docs/" data-m='{"cN":"Footer_DeveloperAndIT_Documentation_nav","id":"n3c5c1c1m1r1a2","sN":3,"aN":"c5c1c1m1r1a2"}'>Documentation</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Learn Developer &amp; IT" class="c-uhff-link" href="https://learn.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftLearn_nav","id":"n4c5c1c1m1r1a2","sN":4,"aN":"c5c1c1m1r1a2"}'>Microsoft Learn</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Tech Community Developer &amp; IT" class="c-uhff-link" href="https://techcommunity.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftTechCommunity_nav","id":"n5c5c1c1m1r1a2","sN":5,"aN":"c5c1c1m1r1a2"}'>Microsoft Tech Community</a>
                            </li>
                            <li>
                                <a aria-label="Azure Marketplace Developer &amp; IT" class="c-uhff-link" href="https://azuremarketplace.microsoft.com/en-us/" data-m='{"cN":"Footer_DeveloperAndIT_AzureMarketplace_nav","id":"n6c5c1c1m1r1a2","sN":6,"aN":"c5c1c1m1r1a2"}'>Azure Marketplace</a>
                            </li>
                            <li>
                                <a aria-label="AppSource Developer &amp; IT" class="c-uhff-link" href="https://appsource.microsoft.com/en-us/" data-m='{"cN":"Footer_DeveloperAndIT_AppSource_nav","id":"n7c5c1c1m1r1a2","sN":7,"aN":"c5c1c1m1r1a2"}'>AppSource</a>
                            </li>
                            <li>
                                <a aria-label="Visual Studio Developer &amp; IT" class="c-uhff-link" href="https://visualstudio.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftVisualStudio_nav","id":"n8c5c1c1m1r1a2","sN":8,"aN":"c5c1c1m1r1a2"}'>Visual Studio</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn6_cont","cT":"Container","id":"c6c1c1m1r1a2","sN":6,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Company</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Careers Company" class="c-uhff-link" href="https://careers.microsoft.com/" data-m='{"cN":"Footer_Company_Careers_nav","id":"n1c6c1c1m1r1a2","sN":1,"aN":"c6c1c1m1r1a2"}'>Careers</a>
                            </li>
                            <li>
                                <a aria-label="About Microsoft Company" class="c-uhff-link" href="https://www.microsoft.com/en-us/about" data-m='{"cN":"Footer_Company_AboutMicrosoft_nav","id":"n2c6c1c1m1r1a2","sN":2,"aN":"c6c1c1m1r1a2"}'>About Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Company news Company" class="c-uhff-link" href="https://news.microsoft.com/" data-m='{"cN":"Footer_Company_CompanyNews_nav","id":"n3c6c1c1m1r1a2","sN":3,"aN":"c6c1c1m1r1a2"}'>Company news</a>
                            </li>
                            <li>
                                <a aria-label="Privacy at Microsoft Company" class="c-uhff-link" href="https://privacy.microsoft.com/en-us" data-m='{"cN":"Footer_Company_PrivacyAtMicrosoft_nav","id":"n4c6c1c1m1r1a2","sN":4,"aN":"c6c1c1m1r1a2"}'>Privacy at Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Investors Company" class="c-uhff-link" href="https://www.microsoft.com/investor/default.aspx" data-m='{"cN":"Footer_Company_Investors_nav","id":"n5c6c1c1m1r1a2","sN":5,"aN":"c6c1c1m1r1a2"}'>Investors</a>
                            </li>
                            <li>
                                <a aria-label="Diversity and inclusion Company" class="c-uhff-link" href="https://www.microsoft.com/en-us/diversity/" data-m='{"cN":"Footer_Company_DiversityAndInclusion_nav","id":"n6c6c1c1m1r1a2","sN":6,"aN":"c6c1c1m1r1a2"}'>Diversity and inclusion</a>
                            </li>
                            <li>
                                <a aria-label="Accessibility Company" class="c-uhff-link" href="https://www.microsoft.com/en-us/accessibility" data-m='{"cN":"Footer_Company_Accessibility_nav","id":"n7c6c1c1m1r1a2","sN":7,"aN":"c6c1c1m1r1a2"}'>Accessibility</a>
                            </li>
                            <li>
                                <a aria-label="Sustainability Company" class="c-uhff-link" href="https://www.microsoft.com/en-us/sustainability/" data-m='{"cN":"Footer_Company_Sustainability_nav","id":"n8c6c1c1m1r1a2","sN":8,"aN":"c6c1c1m1r1a2"}'>Sustainability</a>
                            </li>

                        </ul>
                        
                    </div>
                </div>
        </nav>
    <div class="c-uhff-base">
                <a id="locale-picker-link" aria-label="Content Language Selector. Currently set to English (United States)" class="c-uhff-link c-uhff-lang-selector c-glyph glyph-world" href="https://www.microsoft.com/en-us/store/locale" data-m='{"cN":"locale_picker(US)_nav","id":"n7c1c1m1r1a2","sN":7,"aN":"c1c1m1r1a2"}'>English (United States)</a>

            <a data-m='{"id":"n8c1c1m1r1a2","sN":8,"aN":"c1c1m1r1a2"}' href="https://aka.ms/yourcaliforniaprivacychoices" class='c-uhff-link c-uhff-ccpa'>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" xml:space="preserve" height="16" width="43">
            <title>California Consumer Privacy Act (CCPA) Opt-Out Icon</title>
            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/>
            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"/>
            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"/>
            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"/>
        </svg>
        <span>Your Privacy Choices</span>
    </a>

        <noscript>
                <a data-m='{"id":"n9c1c1m1r1a2","sN":9,"aN":"c1c1m1r1a2"}' href="https://aka.ms/yourcaliforniaprivacychoices" class='c-uhff-link c-uhff-ccpa'>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" xml:space="preserve" height="16" width="43">
            <title>California Consumer Privacy Act (CCPA) Opt-Out Icon</title>
            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/>
            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"/>
            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"/>
            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"/>
        </svg>
        <span>Your Privacy Choices</span>
    </a>

        </noscript>
        <nav aria-label="Microsoft corporate links">
            <ul class="c-list f-bare" data-m='{"cN":"Corp links_cont","cT":"Container","id":"c10c1c1m1r1a2","sN":10,"aN":"c1c1m1r1a2"}'>
                                <li  id="c-uhff-footer_sitemap">
                    <a class="c-uhff-link" href="https://www.microsoft.com/en-us/sitemap.aspx" data-mscc-ic="false" data-m='{"cN":"Footer_Sitemap_nav","id":"n1c10c1c1m1r1a2","sN":1,"aN":"c10c1c1m1r1a2"}'>Sitemap</a>
                </li>
                <li  id="c-uhff-footer_contactus">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/p/?LinkID=824761&amp;clcid=0x409" data-mscc-ic="false" data-m='{"cN":"Footer_ContactUs_nav","id":"n2c10c1c1m1r1a2","sN":2,"aN":"c10c1c1m1r1a2"}'>Contact Microsoft</a>
                </li>
                <li  id="c-uhff-footer_privacyandcookies">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?LinkId=521839" data-mscc-ic="false" data-m='{"cN":"Footer_PrivacyandCookies_nav","id":"n3c10c1c1m1r1a2","sN":3,"aN":"c10c1c1m1r1a2"}'>Privacy</a>
                </li>
                <li class=" x-hidden" id="c-uhff-footer_managecookies">
                    <a class="c-uhff-link" href="#" data-mscc-ic="false" data-m='{"cN":"Footer_ManageCookies_nav","id":"n4c10c1c1m1r1a2","sN":4,"aN":"c10c1c1m1r1a2"}'>Manage cookies</a>
                </li>
                <li  id="c-uhff-footer_termsofuse">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?LinkID=206977" data-mscc-ic="false" data-m='{"cN":"Footer_TermsofUse_nav","id":"n5c10c1c1m1r1a2","sN":5,"aN":"c10c1c1m1r1a2"}'>Terms of Use</a>
                </li>
                <li  id="c-uhff-footer_termsofsale">
                    <a class="c-uhff-link" href="https://www.microsoft.com/en-us/storedocs/terms-of-sale" data-mscc-ic="false" data-m='{"cN":"Footer_TermsOfSale_nav","id":"n6c10c1c1m1r1a2","sN":6,"aN":"c10c1c1m1r1a2"}'>Terms of Sale</a>
                </li>
                <li  id="c-uhff-footer_trademarks">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?linkid=2196228" data-mscc-ic="false" data-m='{"cN":"Footer_Trademarks_nav","id":"n7c10c1c1m1r1a2","sN":7,"aN":"c10c1c1m1r1a2"}'>Trademarks</a>
                </li>
                <li  id="c-uhff-footer_safetyandeco">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?linkid=2196227" data-mscc-ic="false" data-m='{"cN":"Footer_SafetyAndEco_nav","id":"n8c10c1c1m1r1a2","sN":8,"aN":"c10c1c1m1r1a2"}'>Safety &amp; Eco</a>
                </li>
                <li  id="c-uhff-recycling">
                    <a class="c-uhff-link" href="https://www.microsoft.com/en-us/legal/compliance/recycling" data-mscc-ic="false" data-m='{"cN":"Recycling_nav","id":"n9c10c1c1m1r1a2","sN":9,"aN":"c10c1c1m1r1a2"}'>Recycling</a>
                </li>
                <li  id="c-uhff-footer_aboutourads">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/p/?linkid=286759&amp;clcid=0x1009" data-mscc-ic="false" data-m='{"cN":"Footer_AboutourAds_nav","id":"n10c10c1c1m1r1a2","sN":10,"aN":"c10c1c1m1r1a2"}'>About our Ads</a>
                </li>

                <li>&#169; Microsoft 2024</li>
                
            </ul>
        </nav>
    </div>
    
</footer>

<script id="uhf-footer-ccpa">
    const globalPrivacyControlEnabled = navigator.globalPrivacyControl;

    const GPC_DataSharingOptIn = (globalPrivacyControlEnabled) ? false : checkThirdPartyAdsOptOutCookie();

    function checkThirdPartyAdsOptOutCookie() {
        try {
            const ThirdPartyAdsOptOutCookieName = '3PAdsOptOut';
            var cookieValue = getCookie(ThirdPartyAdsOptOutCookieName);
            return cookieValue != 1;
        } catch {
            return true;
        }
    }

    function getCookie(cookieName) {
        var cookieValue = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
        return (cookieValue) ? cookieValue[2] : '';
    }
</script>





    </div>
        </div>

    </div>
<script src="https://wcpstatic.microsoft.com/mscc/lib/v2/wcp-consent.js"></script><script src="https://www.microsoft.com/onerfstatics/marketingsites-neu-prod/shell/_scrf/js/themes=default/d6-d6e6df/89-746ba4/df-3feeb0/f5-14aef8/bd-f5f332/27-13b2c3/e9-07937b/33-b505e5/fa-7a47db/6e-e2d05f/74-0b2d48/88-5b9b75/1b-240b37/4e-8e1a50/c2-370434/6f-bf5d0f/ea-315ddf/2e-e273bf/17-02d9ee/cf-2a93c7/c0-2ffa80/77-785548/48-4f52bb/3c-6c8ad0/3a-0d7cd3/5f-7d882b/c1-621df2/38-e8e647/17-c82a09/85-bd536d/44-776362/f8-86938e/61-951d1b/39-3d9dc2/81-96da47/ec-e44e19/6c-7627b9?ver=2.0&_cf=20210618&iife=1"></script><script src="https://mem.gfx.ms/meversion?partner=Surface&market=en-us&uhf=1" defer></script>
            
    

	


    

</div>

    
</div>
</div>


		
    
    
    

	


    
<script src="/etc.clientlibs/microsoft/clientlibs/clientlib-mwf-new/main-light.min.ACSHASH9d1e62f31f5fb44aaba93302756881f0.js"></script>




	
    
<script src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-base.min.ACSHASHb141bca6c9e3f0375fa28e0b13a5d736.js"></script>




    
        
    
<script src="/etc.clientlibs/microsoft/clientlibs/clientlib-httpclient.min.ACSHASH65e4c1ea0ef81dd1058e657727914791.js"></script>



    
    

		
    
<script src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-cookieconsent.min.ACSHASH96f0c5b1219e39b8788028f5c17a5ad9.js"></script>



		<!-- Changes for Global Pixel -->
		
		
			<script type="text/javascript">
				(function(){
					var partnerScripts =
						{
							"meta": {
									"partnerJsHash": "ACSHASH00f6c26de9c7c0a1e7b10d8bb358e008"
									}
	                    };
	                    window.partnerScripts = partnerScripts;
				})();
			</script>
			<script id="mediapixel">
	            //<![CDATA[
					//_pageBITags=jsonElement;
				//]]>
			</script>
		
		
		
			<script type="text/javascript" id="contentsquare">
				(function(){
					var contentSq =
						{
							"entryFile": "https://cdnssl.clicktale.net/www32/ptc/05d32363-d534-4d93-9b65-cde674775e71.js",
	                    };
					if (typeof window["partnerScripts"]==="undefined"){
						window["partnerScripts"]={};
					}
					window["partnerScripts"]["contentSquare"] = contentSq;
				})();
			</script>
		
		
			<!--Enable 3rd Party script integration based on the configuration settings-->
			
    
<script src="/etc.clientlibs/microsoft/components/structure/page/clientlibs/embed-thirdparty.min.ACSHASHdf31c97130106cddb71542614a39c1bc.js"></script>



		
		<!-- End of changes for Global Pixel -->



    
    
<script src="/etc.clientlibs/microsoft/components/structure/page/clientlibs/featurecontrol.min.ACSHASHc22ea5b46f3fcad90da0abcc0a3f73d4.js"></script>





<!-- Feature Control Service:List of all Enabled Features -->
<div id='customFeatureControl' enabledFeatures="contentbackfillgenerate,esiproductcards,uhf-ms-io-endpoint,uhf-esi-cv,uhf-esi-cache,fraud-greenid,contentsquare,mediapixel,holiday-themer,lazyload-static-components,clientlibDefer,upsellEnabled,contentbackfillpkgdelete,healthcheck,demo-feature,contentbackfillhttpgenerate,perf-tracker-1ds,dynamic-bundle,cvIncrementer,tentingEnabled,chatCookiesImplemented,alertCountDownWithoutServerTime,pdpDynamicRendering,bundlesDynamicRendering,contentbackfillmetadatachangesvideo,contentbackfillmetadatachangesnonvideo,listDynamicRendering,experimentation-without-personalization,generic-list-importer,combinedUHF,cvCallEnabled,m365ProductCatalog,support-unsupported-locales,deferClickTale,videoLazyLoad,prefetchFontsEnabled,enable-code-isolation,imageLinkTag,fetchPriority,contentIngestionAgent,enableClickgroupTelemetry,imageLazyLoad,contentIngestionAgent-dispatcher2westus2Agent,isCacheControlFeatureEnabled,feature-controlled-content-card,lcpPrioritizationPhase1,ocReimagineTelemetry,deferScriptsEnabled,lcpPrioritizationPhase2,ocReimagineSlotNumberTelemetry,contentIngestionAgent-dispatcher1westus2Agent,ocReimagineComponentNameTelemetry,ocReimagineTemplateNameTelemetry,ptePhase1,extended-html-minification-sites,dynamicPrice,displayV35Toggle"></div>




<div class='oneds-config' data-instrumentationkey='9d8f9f50b9cc40f29c15d8963a6aa0e6-0589b4b6-0575-4686-9935-27ab0e3c0381-6951' data-isenabled='true' data-env='prod' data-market='en-us' data-pageName='Buy Surface Laptop Go 3 (12.4&#34; Touchscreen, i5, Windows) - Microsoft Store' data-urlCollectQuery='true' data-urlCollectHash='false' data-autoCapturelineage='false' data-autoCaptureresize='false' data-autoCapturescroll='false' data-initialize1DSEventName="none" data-tenantName='microsoft' data-tenantTitle='Microsoft' data-tenantDomain='microsoft' data-tenantSiteName='microsoft' data-tenantNameProperty='tenantName' data-tenantTitleProperty='tenantTitle' data-tenantDomainProperty='tenantDomain' data-tenantSiteNameProperty='tenantSiteName' data-max1DSInitializeDelayInSeconds='1'>
</div>


    
    
<script src="/etc.clientlibs/microsoft/components/structure/page/clientlibs/custom-oneds.min.ACSHASHb4f0b5100b03a879dd5d2e97636efc37.js"></script>






    

    


		

	

	

	
		<!--Enable script to inject Green ID iFrame-->
		
			
    
    <script type="text/javascript" src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-greenid.min.ACSHASH383b23d12df0d9265d7569a7102c2f96.js" async></script>


		
		
     

	


	<!-- Start of ADDITIONAL DEBUG INFO
	MS_COMMIT_ID: b9216d0
	MS-CV: CASMicrosoftCV2080828f.0
	MS-CV-ESI: CASMicrosoftCV2080828f.1
	End of ADDITIONAL DEBUG INFO -->
</body>
</html>
